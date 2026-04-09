from __future__ import annotations

import importlib.util
import json
import sys
import wave
from pathlib import Path

import pytest


SCRIPT_PATH = Path(__file__).resolve().parents[2] / "scripts" / "generate-audio.py"
FIXTURE_PROJECTS_DIR = Path(__file__).resolve().parents[1] / "fixtures" / "projects"


def load_generate_audio_module(module_name: str = "generate_audio_under_test"):
    spec = importlib.util.spec_from_file_location(module_name, SCRIPT_PATH)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Unable to load module from {SCRIPT_PATH}")

    module = importlib.util.module_from_spec(spec)
    sys.modules[module_name] = module
    spec.loader.exec_module(module)
    return module


def write_json(path: Path, payload: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload))


def write_wav(path: Path, *, frames: int = 2400, sample_rate: int = 24_000) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as handle:
        handle.setnchannels(1)
        handle.setsampwidth(2)
        handle.setframerate(sample_rate)
        handle.writeframes(b"\x00\x00" * frames)


@pytest.fixture
def generate_audio_module():
    return load_generate_audio_module()


def test_import_is_safe_for_collection():
    module = load_generate_audio_module("generate_audio_import_safety")

    assert module.load_narration_schema.cache_info().currsize == 0
    assert module.load_narration_contract.cache_info().currsize == 0


def test_load_scene_order_accepts_valid_manifest(tmp_path: Path, generate_audio_module) -> None:
    scene_order_path = tmp_path / "scene-order.json"
    write_json(scene_order_path, ["opening", "closing"])

    assert generate_audio_module.load_scene_order(scene_order_path) == ["opening", "closing"]


def test_load_scene_order_rejects_duplicates(tmp_path: Path, generate_audio_module) -> None:
    scene_order_path = tmp_path / "scene-order.json"
    write_json(scene_order_path, ["opening", "opening"])

    with pytest.raises(SystemExit, match="Duplicate scene-order entry: opening"):
        generate_audio_module.load_scene_order(scene_order_path)


def test_validate_entries_applies_defaults(generate_audio_module) -> None:
    validated = generate_audio_module.validate_entries(
        [
          {
            "sceneId": "opening",
            "text": " Opening scene ",
            "maxDurationFrames": 90,
          },
          {
            "sceneId": "closing",
            "text": "Closing scene",
            "maxDurationFrames": 120,
          },
        ],
        ["opening", "closing"],
    )

    assert validated == [
        {
            "sceneId": "opening",
            "text": "Opening scene",
            "maxDurationFrames": 90,
            "speed": 1.0,
            "voice": "af_bella",
            "langCode": "a",
        },
        {
            "sceneId": "closing",
            "text": "Closing scene",
            "maxDurationFrames": 120,
            "speed": 1.0,
            "voice": "af_bella",
            "langCode": "a",
        },
    ]


def test_validate_entries_rejects_wrong_order(generate_audio_module) -> None:
    with pytest.raises(SystemExit, match=r"Narration entry 1 must use sceneId 'opening', got 'closing'\."):
        generate_audio_module.validate_entries(
            [
                {
                    "sceneId": "closing",
                    "text": "Closing scene",
                    "maxDurationFrames": 120,
                },
                {
                    "sceneId": "opening",
                    "text": "Opening scene",
                    "maxDurationFrames": 90,
                },
            ],
            ["opening", "closing"],
        )


def test_bad_narration_order_fixture_fails_in_python(generate_audio_module) -> None:
    fixture_dir = FIXTURE_PROJECTS_DIR / "bad-narration-order" / "video" / "data"
    entries = generate_audio_module.load_manifest(fixture_dir / "narration.json")
    expected_scene_ids = generate_audio_module.load_scene_order(fixture_dir / "scene-order.json")

    with pytest.raises(SystemExit, match=r"Narration entry 1 must use sceneId 'opening', got 'closing'\."):
        generate_audio_module.validate_entries(entries, expected_scene_ids)


def test_select_entries_preserves_requested_order(generate_audio_module) -> None:
    entries = [
        {"sceneId": "opening", "text": "Opening scene", "maxDurationFrames": 90},
        {"sceneId": "closing", "text": "Closing scene", "maxDurationFrames": 120},
    ]

    assert generate_audio_module.select_entries(entries, ["closing", "opening"]) == [
        {"sceneId": "closing", "text": "Closing scene", "maxDurationFrames": 120},
        {"sceneId": "opening", "text": "Opening scene", "maxDurationFrames": 90},
    ]


def test_should_skip_requires_matching_audio_and_metadata(tmp_path: Path, generate_audio_module) -> None:
    entry = {
        "sceneId": "opening",
        "text": "Opening scene",
        "voice": "af_bella",
        "langCode": "a",
        "speed": 1.0,
        "maxDurationFrames": 90,
    }
    audio_dir = tmp_path / "audio"
    audio_dir.mkdir()
    write_wav(audio_dir / "opening.wav")
    write_json(
        audio_dir / "opening.json",
        {
            "textHash": generate_audio_module.compute_text_hash(entry),
        },
    )

    assert generate_audio_module.should_skip(audio_dir, entry, force=False) is True
    assert generate_audio_module.should_skip(audio_dir, entry, force=True) is False


def test_verify_existing_rejects_stale_metadata(tmp_path: Path, generate_audio_module) -> None:
    entry = {
        "sceneId": "opening",
        "text": "Opening scene",
        "voice": "af_bella",
        "langCode": "a",
        "speed": 1.0,
        "maxDurationFrames": 90,
    }
    audio_dir = tmp_path / "audio"
    audio_dir.mkdir()
    write_wav(audio_dir / "opening.wav")
    write_json(audio_dir / "opening.json", {"textHash": "stale"})

    with pytest.raises(
        SystemExit,
        match="Audio metadata for scene opening does not match the current narration input.",
    ):
        generate_audio_module.verify_existing(audio_dir, entry)


def test_verify_existing_accepts_current_audio(tmp_path: Path, generate_audio_module) -> None:
    entry = {
        "sceneId": "opening",
        "text": "Opening scene",
        "voice": "af_bella",
        "langCode": "a",
        "speed": 1.0,
        "maxDurationFrames": 90,
    }
    audio_dir = tmp_path / "audio"
    audio_dir.mkdir()
    write_wav(audio_dir / "opening.wav")
    write_json(
        audio_dir / "opening.json",
        {
            "textHash": generate_audio_module.compute_text_hash(entry),
        },
    )

    generate_audio_module.verify_existing(audio_dir, entry)
