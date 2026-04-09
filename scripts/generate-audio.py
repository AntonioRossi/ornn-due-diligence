#!/usr/bin/env python3

from __future__ import annotations

import argparse
from functools import lru_cache
import hashlib
import json
import os
import struct
import sys
from pathlib import Path
from typing import TYPE_CHECKING, Any

import soundfile as sf

if TYPE_CHECKING:
    from kokoro import KPipeline


ROOT = Path(__file__).resolve().parent.parent
PROJECTS_DIR = ROOT / "projects"
HF_HOME_DIR = ROOT / ".hf-home"
NARRATION_SCHEMA_PATH = ROOT / "video" / "src" / "schemas" / "narration-manifest.schema.json"
DEFAULT_SAMPLE_RATE = 24_000


@lru_cache(maxsize=1)
def load_narration_schema() -> dict[str, Any]:
    if not NARRATION_SCHEMA_PATH.exists():
        raise SystemExit(f"Missing narration schema: {NARRATION_SCHEMA_PATH}")

    schema = json.loads(NARRATION_SCHEMA_PATH.read_text())
    if not isinstance(schema, dict):
        raise SystemExit("Narration schema must be a JSON object.")
    return schema


@lru_cache(maxsize=1)
def load_narration_contract() -> dict[str, Any]:
    schema = load_narration_schema()
    entry_schema = schema.get("item", {})
    entry_defaults = entry_schema.get("defaults", {})
    return {
        "entry_schema": entry_schema,
        "required_fields": entry_schema.get("required", {}),
        "optional_fields": entry_schema.get("optional", {}),
        "defaults": entry_defaults,
        "default_speed": float(entry_defaults.get("speed", 1.0)),
        "default_voice": str(entry_defaults.get("voice", "af_bella")),
        "default_lang_code": str(entry_defaults.get("langCode", "a")),
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate scene-based narration WAV files for a project video.",
    )
    parser.add_argument(
        "--project",
        required=True,
        help="Project slug under projects/<slug>.",
    )
    parser.add_argument(
        "--scene",
        dest="scene_ids",
        action="append",
        help="Generate only the specified scene id. May be passed multiple times.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Regenerate files even if the existing metadata matches the current input.",
    )
    parser.add_argument(
        "--check-only",
        action="store_true",
        help="Validate the narration manifest and existing audio files without generating new audio.",
    )
    return parser.parse_args()


def resolve_project_paths(project: str) -> tuple[Path, Path, Path]:
    project_dir = PROJECTS_DIR / project
    if not project_dir.is_dir():
        raise SystemExit(f"Unknown project: {project_dir}")

    narration_path = project_dir / "video" / "data" / "narration.json"
    audio_dir = project_dir / "video" / "public" / "audio"
    scene_order_path = project_dir / "video" / "data" / "scene-order.json"
    return narration_path, audio_dir, scene_order_path


def load_scene_order(scene_order_path: Path) -> list[str]:
    if not scene_order_path.exists():
        raise SystemExit(f"Missing scene-order manifest: {scene_order_path}")

    data = json.loads(scene_order_path.read_text())
    if not isinstance(data, list):
        raise SystemExit("Scene-order manifest must be a JSON array.")

    scene_ids: list[str] = []
    seen_scene_ids: set[str] = set()

    for value in data:
        if not isinstance(value, str) or not value.strip():
            raise SystemExit("Scene-order entries must be non-empty strings.")

        scene_id = value.strip()
        if scene_id in seen_scene_ids:
            raise SystemExit(f"Duplicate scene-order entry: {scene_id}")

        seen_scene_ids.add(scene_id)
        scene_ids.append(scene_id)

    if not scene_ids:
        raise SystemExit("Scene-order manifest must not be empty.")

    return scene_ids


def load_manifest(narration_path: Path) -> list[dict[str, Any]]:
    if not narration_path.exists():
        raise SystemExit(f"Missing narration manifest: {narration_path}")

    data = json.loads(narration_path.read_text())
    if not isinstance(data, list):
        raise SystemExit("Narration manifest must be a JSON array.")
    return data


def validate_field(
    field_name: str,
    value: Any,
    field_schema: dict[str, Any],
    scene_id_hint: str,
) -> Any:
    expected_type = field_schema.get("type")

    if expected_type == "string":
        if not isinstance(value, str):
            raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be a string.")
        min_length = field_schema.get("minLength")
        if isinstance(min_length, int) and len(value.strip()) < min_length:
            raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be at least {min_length} characters.")
    elif expected_type == "integer":
        if isinstance(value, bool) or not isinstance(value, int):
            raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be an integer.")
    elif expected_type == "number":
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be a number.")

    minimum = field_schema.get("minimum")
    if isinstance(minimum, (int, float)) and value < minimum:
        raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be at least {minimum}.")

    exclusive_minimum = field_schema.get("exclusiveMinimum")
    if isinstance(exclusive_minimum, (int, float)) and value <= exclusive_minimum:
        raise SystemExit(f"Scene {scene_id_hint} field {field_name} must be greater than {exclusive_minimum}.")

    const_value = field_schema.get("const")
    if const_value is not None and value != const_value:
        raise SystemExit(f"Scene {scene_id_hint} field {field_name} must equal {const_value!r}.")

    return value


def validate_entries(entries: list[dict[str, Any]], expected_scene_ids: list[str]) -> list[dict[str, Any]]:
    contract = load_narration_contract()
    entry_schema = contract["entry_schema"]
    required_fields = contract["required_fields"]
    optional_fields = contract["optional_fields"]
    entry_defaults = contract["defaults"]
    default_speed = contract["default_speed"]
    default_voice = contract["default_voice"]
    default_lang_code = contract["default_lang_code"]
    seen_scene_ids: set[str] = set()
    validated: list[dict[str, Any]] = []
    known_fields = set(required_fields) | set(optional_fields)
    additional_properties = entry_schema.get("additionalProperties", True)

    for entry in entries:
        if not isinstance(entry, dict):
            raise SystemExit("Each narration entry must be a JSON object.")

        scene_id_hint = str(entry.get("sceneId", "<unknown>"))

        if not additional_properties:
            unexpected_fields = sorted(set(entry) - known_fields)
            if unexpected_fields:
                raise SystemExit(
                    f"Scene {scene_id_hint} has unknown narration fields: {', '.join(unexpected_fields)}",
                )

        normalized: dict[str, Any] = {}

        for field_name, field_schema in required_fields.items():
            if field_name not in entry:
                raise SystemExit(f"Scene {scene_id_hint} is missing required field {field_name}.")
            value = validate_field(field_name, entry[field_name], field_schema, scene_id_hint)
            normalized[field_name] = value.strip() if isinstance(value, str) else value

        for field_name, field_schema in optional_fields.items():
            value = entry.get(field_name, entry_defaults.get(field_name))
            if value is None:
                continue
            validated_value = validate_field(field_name, value, field_schema, scene_id_hint)
            normalized[field_name] = validated_value.strip() if isinstance(validated_value, str) else validated_value

        scene_id = normalized["sceneId"]
        text = normalized["text"]
        max_duration_frames = normalized["maxDurationFrames"]
        speed = normalized.get("speed", default_speed)
        voice = normalized.get("voice", default_voice)
        lang_code = normalized.get("langCode", default_lang_code)

        if not isinstance(scene_id, str) or not scene_id:
            raise SystemExit("Each narration entry requires a non-empty string sceneId.")
        if scene_id in seen_scene_ids:
            raise SystemExit(f"Duplicate narration sceneId: {scene_id}")
        if not isinstance(text, str) or not text:
            raise SystemExit(f"Scene {scene_id} requires non-empty text.")

        seen_scene_ids.add(scene_id)
        validated.append(
            {
                "sceneId": scene_id,
                "text": text.strip(),
                "maxDurationFrames": max_duration_frames,
                "speed": float(speed),
                "voice": voice,
                "langCode": lang_code,
            },
        )

    if len(validated) != len(expected_scene_ids):
        raise SystemExit(
            f"Narration manifest has {len(validated)} entries, expected {len(expected_scene_ids)}.",
        )

    for index, expected_scene_id in enumerate(expected_scene_ids):
        actual_scene_id = validated[index]["sceneId"]
        if actual_scene_id != expected_scene_id:
            raise SystemExit(
                f"Narration entry {index + 1} must use sceneId {expected_scene_id!r}, got {actual_scene_id!r}.",
            )

    return validated


def select_entries(
    entries: list[dict[str, Any]],
    requested_scene_ids: list[str] | None,
) -> list[dict[str, Any]]:
    if not requested_scene_ids:
        return entries

    requested = set(requested_scene_ids)
    entry_map = {entry["sceneId"]: entry for entry in entries}
    missing = sorted(requested - entry_map.keys())
    if missing:
        raise SystemExit(f"Unknown scene ids: {', '.join(missing)}")
    return [entry_map[scene_id] for scene_id in requested_scene_ids]


def compute_text_hash(entry: dict[str, Any]) -> str:
    payload = json.dumps(
        {
            "text": entry["text"],
            "voice": entry["voice"],
            "speed": entry["speed"],
            "langCode": entry["langCode"],
            "maxDurationFrames": entry["maxDurationFrames"],
        },
        sort_keys=True,
    )
    return hashlib.sha256(payload.encode("utf-8")).hexdigest()


def metadata_path(audio_dir: Path, scene_id: str) -> Path:
    return audio_dir / f"{scene_id}.json"


def audio_path(audio_dir: Path, scene_id: str) -> Path:
    return audio_dir / f"{scene_id}.wav"


def read_metadata(audio_dir: Path, scene_id: str) -> dict[str, Any] | None:
    path = metadata_path(audio_dir, scene_id)
    if not path.exists():
        return None
    return json.loads(path.read_text())


def calculate_duration_seconds(samples: int, sample_rate: int) -> float:
    return samples / sample_rate


def assert_duration(entry: dict[str, Any], duration_seconds: float) -> None:
    max_seconds = entry["maxDurationFrames"] / 30
    if duration_seconds > max_seconds:
        raise SystemExit(
            f"Scene {entry['sceneId']} narration is {duration_seconds:.2f}s, which exceeds "
            f"the {max_seconds:.2f}s scene budget.",
        )


def wave_duration_seconds(path: Path) -> float:
    with path.open("rb") as handle:
        header = handle.read(44)
        if len(header) < 44:
            raise SystemExit(f"Audio file is too short to be valid WAV: {path}")
        sample_rate = struct.unpack("<I", header[24:28])[0]
        byte_rate = struct.unpack("<I", header[28:32])[0]
        data_size = struct.unpack("<I", header[40:44])[0]
        if byte_rate == 0:
            raise SystemExit(f"Invalid WAV byte rate in {path}")
        return data_size / byte_rate


def generate_audio(entry: dict[str, Any], pipeline: "KPipeline") -> tuple[list[float], int]:
    segments: list[list[float]] = []
    generator = pipeline(
        entry["text"],
        voice=entry["voice"],
        speed=entry["speed"],
        split_pattern=r"\n+",
    )
    sample_rate = DEFAULT_SAMPLE_RATE

    for _, _, audio in generator:
        audio_list = audio.tolist() if hasattr(audio, "tolist") else list(audio)
        segments.append(audio_list)

    flattened = [sample for segment in segments for sample in segment]
    return flattened, sample_rate


def write_outputs(audio_dir: Path, entry: dict[str, Any], audio_samples: list[float], sample_rate: int) -> None:
    audio_dir.mkdir(parents=True, exist_ok=True)
    wav_path = audio_path(audio_dir, entry["sceneId"])
    sf.write(wav_path, audio_samples, sample_rate)

    duration_seconds = calculate_duration_seconds(len(audio_samples), sample_rate)
    metadata = {
        "sceneId": entry["sceneId"],
        "voice": entry["voice"],
        "langCode": entry["langCode"],
        "speed": entry["speed"],
        "sampleRate": sample_rate,
        "durationSeconds": round(duration_seconds, 4),
        "maxDurationFrames": entry["maxDurationFrames"],
        "textHash": compute_text_hash(entry),
    }
    metadata_path(audio_dir, entry["sceneId"]).write_text(f"{json.dumps(metadata, indent=2)}\n")


def should_skip(audio_dir: Path, entry: dict[str, Any], force: bool) -> bool:
    if force:
        return False
    wav_path = audio_path(audio_dir, entry["sceneId"])
    metadata = read_metadata(audio_dir, entry["sceneId"])
    return bool(
        wav_path.exists()
        and metadata
        and metadata.get("textHash") == compute_text_hash(entry)
    )


def verify_existing(audio_dir: Path, entry: dict[str, Any]) -> None:
    wav_path = audio_path(audio_dir, entry["sceneId"])
    metadata = read_metadata(audio_dir, entry["sceneId"])
    if not wav_path.exists():
        raise SystemExit(f"Missing audio file for scene {entry['sceneId']}: {wav_path}")
    if metadata is None:
        raise SystemExit(
            f"Missing metadata file for scene {entry['sceneId']}: {metadata_path(audio_dir, entry['sceneId'])}",
        )
    if metadata.get("textHash") != compute_text_hash(entry):
        raise SystemExit(
            f"Audio metadata for scene {entry['sceneId']} does not match the current narration input.",
        )
    duration_seconds = wave_duration_seconds(wav_path)
    assert_duration(entry, duration_seconds)
    print(f"checked {entry['sceneId']}: {wav_path} ({duration_seconds:.2f}s)")


def main() -> int:
    os.environ.setdefault("HF_HOME", str(HF_HOME_DIR))
    os.environ.setdefault("HUGGINGFACE_HUB_CACHE", str(HF_HOME_DIR / "hub"))

    args = parse_args()
    narration_path, audio_dir, scene_order_path = resolve_project_paths(args.project)
    expected_scene_ids = load_scene_order(scene_order_path)
    entries = validate_entries(load_manifest(narration_path), expected_scene_ids)
    selected_entries = select_entries(entries, args.scene_ids)

    if args.check_only:
        for entry in selected_entries:
            verify_existing(audio_dir, entry)
        return 0

    pipeline: KPipeline | None = None

    for entry in selected_entries:
        if should_skip(audio_dir, entry, args.force):
            verify_existing(audio_dir, entry)
            print(f"skipped {entry['sceneId']}: existing audio is current")
            continue

        if pipeline is None:
            from kokoro import KPipeline

            pipeline = KPipeline(
                lang_code=load_narration_contract()["default_lang_code"],
                repo_id="hexgrad/Kokoro-82M",
            )

        audio_samples, sample_rate = generate_audio(entry, pipeline)
        duration_seconds = calculate_duration_seconds(len(audio_samples), sample_rate)
        assert_duration(entry, duration_seconds)
        write_outputs(audio_dir, entry, audio_samples, sample_rate)
        print(
            f"generated {entry['sceneId']}: {audio_path(audio_dir, entry['sceneId'])} ({duration_seconds:.2f}s)",
        )

    return 0


if __name__ == "__main__":
    sys.exit(main())
