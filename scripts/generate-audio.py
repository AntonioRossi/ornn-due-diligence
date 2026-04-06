#!/usr/bin/env python3

from __future__ import annotations

import argparse
import hashlib
import json
import os
import struct
import sys
from pathlib import Path
from typing import Any

import soundfile as sf
from kokoro import KPipeline


ROOT = Path(__file__).resolve().parent.parent
VIDEO_DIR = ROOT / "video"
NARRATION_PATH = VIDEO_DIR / "src" / "data" / "narration.json"
AUDIO_DIR = VIDEO_DIR / "public" / "audio"
HF_HOME_DIR = ROOT / ".hf-home"
DEFAULT_SAMPLE_RATE = 24_000
DEFAULT_SPEED = 1.0
DEFAULT_VOICE = "af_bella"
DEFAULT_LANG_CODE = "a"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate scene-based narration WAV files for the Ornn Remotion project.",
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


def load_manifest() -> list[dict[str, Any]]:
    if not NARRATION_PATH.exists():
        raise SystemExit(f"Missing narration manifest: {NARRATION_PATH}")

    data = json.loads(NARRATION_PATH.read_text())
    if not isinstance(data, list):
        raise SystemExit("Narration manifest must be a JSON array.")
    return data


def validate_entries(entries: list[dict[str, Any]]) -> list[dict[str, Any]]:
    seen_scene_ids: set[str] = set()
    validated: list[dict[str, Any]] = []

    for entry in entries:
        if not isinstance(entry, dict):
            raise SystemExit("Each narration entry must be a JSON object.")

        scene_id = entry.get("sceneId")
        text = entry.get("text")
        max_duration_frames = entry.get("maxDurationFrames")
        speed = entry.get("speed", DEFAULT_SPEED)
        voice = entry.get("voice", DEFAULT_VOICE)
        lang_code = entry.get("langCode", DEFAULT_LANG_CODE)

        if not isinstance(scene_id, str) or not scene_id:
            raise SystemExit("Each narration entry requires a non-empty string sceneId.")
        if scene_id in seen_scene_ids:
            raise SystemExit(f"Duplicate narration sceneId: {scene_id}")
        if not isinstance(text, str) or not text.strip():
            raise SystemExit(f"Scene {scene_id} requires non-empty text.")
        if not isinstance(max_duration_frames, int) or max_duration_frames <= 0:
            raise SystemExit(f"Scene {scene_id} requires a positive integer maxDurationFrames.")
        if not isinstance(speed, (float, int)) or speed <= 0:
            raise SystemExit(f"Scene {scene_id} requires a positive speed value.")
        if voice != DEFAULT_VOICE:
            raise SystemExit(
                f"Scene {scene_id} uses voice {voice!r}. This workflow mandates {DEFAULT_VOICE!r}.",
            )
        if lang_code != DEFAULT_LANG_CODE:
            raise SystemExit(
                f"Scene {scene_id} uses langCode {lang_code!r}. This workflow mandates {DEFAULT_LANG_CODE!r}.",
            )

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


def metadata_path(scene_id: str) -> Path:
    return AUDIO_DIR / f"{scene_id}.json"


def audio_path(scene_id: str) -> Path:
    return AUDIO_DIR / f"{scene_id}.wav"


def read_metadata(scene_id: str) -> dict[str, Any] | None:
    path = metadata_path(scene_id)
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


def generate_audio(entry: dict[str, Any], pipeline: KPipeline) -> tuple[list[float], int]:
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


def write_outputs(entry: dict[str, Any], audio_samples: list[float], sample_rate: int) -> None:
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    wav_path = audio_path(entry["sceneId"])
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
    metadata_path(entry["sceneId"]).write_text(f"{json.dumps(metadata, indent=2)}\n")


def should_skip(entry: dict[str, Any], force: bool) -> bool:
    if force:
        return False
    wav_path = audio_path(entry["sceneId"])
    metadata = read_metadata(entry["sceneId"])
    return bool(
        wav_path.exists()
        and metadata
        and metadata.get("textHash") == compute_text_hash(entry)
    )


def verify_existing(entry: dict[str, Any]) -> None:
    wav_path = audio_path(entry["sceneId"])
    metadata = read_metadata(entry["sceneId"])
    if not wav_path.exists():
        raise SystemExit(f"Missing audio file for scene {entry['sceneId']}: {wav_path}")
    if metadata is None:
        raise SystemExit(f"Missing metadata file for scene {entry['sceneId']}: {metadata_path(entry['sceneId'])}")
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
    entries = validate_entries(load_manifest())
    selected_entries = select_entries(entries, args.scene_ids)

    if args.check_only:
        for entry in selected_entries:
            verify_existing(entry)
        return 0

    pipeline: KPipeline | None = None

    for entry in selected_entries:
        if should_skip(entry, args.force):
            verify_existing(entry)
            print(f"skipped {entry['sceneId']}: existing audio is current")
            continue

        if pipeline is None:
            pipeline = KPipeline(
                lang_code=DEFAULT_LANG_CODE,
                repo_id="hexgrad/Kokoro-82M",
            )

        audio_samples, sample_rate = generate_audio(entry, pipeline)
        duration_seconds = calculate_duration_seconds(len(audio_samples), sample_rate)
        assert_duration(entry, duration_seconds)
        write_outputs(entry, audio_samples, sample_rate)
        print(f"generated {entry['sceneId']}: {audio_path(entry['sceneId'])} ({duration_seconds:.2f}s)")

    return 0


if __name__ == "__main__":
    sys.exit(main())
