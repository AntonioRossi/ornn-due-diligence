# Kokoro Audio Implementation Plan

## Goal

Add a repeatable, repo-local workflow for generating scene-based narration with Kokoro on CPU and wiring that audio into the existing Remotion composition.

This plan is implementation-scoped, not design-only. It must cover the repo changes,
local audio generation run, and verified inclusion of the generated narration in the
Remotion composition.

This plan is for the current repo state:

- source research lives at the repo root
- the Remotion app lives under `video/`
- the main composition is `OrnnIcV1`
- the video is currently silent

## Recommendation

Use the direct Python Kokoro path first, not the FastAPI container.

Reasons:

- this repo only needs offline narration assets for a single Remotion render pipeline
- the VM already has Python and Node tooling available
- `uv` gives the repo a repeatable Python dependency workflow instead of ad hoc `pip` installs
- the current `docker compose` path in this VM is unhealthy
- WAV output is sufficient for Remotion and avoids adding `ffmpeg` as a hard dependency

## Non-Goals

- do not switch the repo to an API-first TTS architecture
- do not use the MLX-only `mlx-community/Kokoro-82M-bf16` model for this Ubuntu VM workflow
- do not add music, sound design, captions, or subtitle rendering in the first pass
- do not auto-generate narration from arbitrary Markdown in the first pass

## Voice Mandate

Use `af_bella` for narration.

Requirements:

- the first implementation must use `af_bella` for all scenes
- `scripts/generate-audio.py` must default to `af_bella`
- `video/src/data/narration.json` should assume `af_bella` unless a future plan revision explicitly authorizes another voice
- do not vary voices scene by scene in the initial implementation

## Current Repo Constraints

- `video/src/compositions/OrnnIcV1.tsx` uses eight fixed `Series.Sequence` scenes
- `video/src/data/ornn-ic-v1.ts` defines the scene order and current frame budgets
- there is no audio wiring yet
- `video/public/` currently has no audio assets

## Proposed Output Shape

Generate one narration file per scene:

- `video/public/audio/opening.wav`
- `video/public/audio/whyMatters.wav`
- `video/public/audio/traction.wav`
- `video/public/audio/attractive.wav`
- `video/public/audio/riskLegal.wav`
- `video/public/audio/riskCounterparty.wav`
- `video/public/audio/riskGovernance.wav`
- `video/public/audio/closing.wav`

This matches the existing composition structure and avoids having to manually time a single long narration track.

The implementation is not complete when these paths exist only on paper. The first
implementation should generate these files locally and wire the composition to use them.

## Scene Timing Budget

At 30 fps, the current scene budgets are:

| Scene | Frames | Seconds |
| --- | ---: | ---: |
| `opening` | 330 | 11.0 |
| `whyMatters` | 420 | 14.0 |
| `traction` | 570 | 19.0 |
| `attractive` | 390 | 13.0 |
| `riskLegal` | 420 | 14.0 |
| `riskCounterparty` | 420 | 14.0 |
| `riskGovernance` | 420 | 14.0 |
| `closing` | 360 | 12.0 |
| `total` | 3330 | 111.0 |

The implementation should validate narration length against these budgets.

## Files To Add

### Repo root

- `kokoro-audio-implementation-plan.md`
- `pyproject.toml`
- `uv.lock`
- `scripts/generate-audio.py`

### Remotion app

- `video/src/data/narration.json`
- `video/src/data/narration.ts`
- `video/public/audio/.gitkeep`

### Generated local artifacts

- `video/public/audio/opening.wav`
- `video/public/audio/whyMatters.wav`
- `video/public/audio/traction.wav`
- `video/public/audio/attractive.wav`
- `video/public/audio/riskLegal.wav`
- `video/public/audio/riskCounterparty.wav`
- `video/public/audio/riskGovernance.wav`
- `video/public/audio/closing.wav`

## Files To Update

- `video/package.json`
- `video/tsconfig.json`
- `video/src/compositions/OrnnIcV1.tsx`
- `video/src/data/ornn-ic-v1.ts`
- `video/.gitignore`
- `video/README.md`

## Data Contract

Create a narration source file at `video/src/data/narration.json`.

Each scene entry should include:

- `sceneId`
- `text`
- optional `speed`
- `maxDurationFrames`

The plan mandates `af_bella`, so a `voice` field is not required for the initial implementation. If the field is present, it should still be `af_bella` unless a later plan revision explicitly changes the voice policy.

Example shape:

```json
[
  {
    "sceneId": "opening",
    "text": "Authorize phase-two diligence. Do not approve an investment or term sheet yet.",
    "voice": "af_bella",
    "speed": 1.0,
    "maxDurationFrames": 330
  }
]
```

Rationale:

- Python can read JSON directly
- Remotion can import JSON once `resolveJsonModule` is enabled
- the narration source stays separate from visual scene data
- the narration can evolve independently from on-screen copy

## Python Package Manager Mandate

This implementation must use `uv` as the Python package manager.

Requirements:

- do not use raw `pip install ...` commands in the documented workflow
- do not rely on an unmanaged venv with manually drifted dependencies
- define Python dependencies in a repo-root `pyproject.toml`
- commit `uv.lock` so later runs are reproducible
- use `uv sync` and `uv run` in repo commands and docs

## Python Environment Plan

Use a `uv`-managed local environment, for example `.venv-kokoro/`.

System dependency:

```bash
sudo apt update
sudo apt install -y espeak-ng
```

Install `uv` if it is not already present:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Create a repo-root `pyproject.toml` and lockfile for the Kokoro tooling.

Recommended dependency shape:

```toml
[project]
name = "ornn-kokoro-tools"
version = "0.1.0"
requires-python = ">=3.10,<3.13"
dependencies = [
  "kokoro",
  "soundfile",
  "torch",
  "torchaudio",
  "torchvision",
]

[tool.uv.sources]
torch = [{ index = "pytorch-cpu" }]
torchaudio = [{ index = "pytorch-cpu" }]
torchvision = [{ index = "pytorch-cpu" }]

[[tool.uv.index]]
name = "pytorch-cpu"
url = "https://download.pytorch.org/whl/cpu"
explicit = true
```

Environment setup and sync:

```bash
uv venv .venv-kokoro
uv sync
```

Important:

- use `uv` to resolve and install all Python dependencies
- route `torch`, `torchaudio`, and `torchvision` through the PyTorch CPU index via `pyproject.toml`
- keep the Python environment reproducible through `uv.lock`

## `scripts/generate-audio.py` Plan

The script should:

1. Load `video/src/data/narration.json`
2. For each scene, generate audio with Kokoro using CPU inference
3. Write a WAV file to `video/public/audio/<sceneId>.wav`
4. Measure the output duration
5. Compare duration against `maxDurationFrames / fps`
6. Exit non-zero if a clip exceeds its allowed budget

Recommended flags:

- `--scene <sceneId>` to regenerate one scene only
- `--force` to overwrite existing files
- `--check-only` to validate expected outputs and durations without generating new audio

Recommended defaults:

- default voice: `af_bella`
- default speed: `1.0`
- output sample rate: `24000`
- output format: WAV

Recommended behavior:

- print the generated file path and duration per scene
- skip unchanged files unless `--force` is used
- fail loudly on missing scene ids or missing narration entries
- be runnable through `uv run`

Implementation requirement:

- the first implementation pass should execute the script locally and produce the initial
  WAV files for all scenes, not just define the script

## Remotion Wiring Plan

Update `video/src/compositions/OrnnIcV1.tsx` to import:

- `Audio`
- `staticFile`

Then place one `<Audio>` component inside each `Series.Sequence`, alongside the matching scene component.

Example pattern:

```tsx
<Series.Sequence durationInFrames={ornnIcV1.scenes.opening.durationInFrames}>
  <Audio src={staticFile("audio/opening.wav")} />
  <OpeningScene startFrame={sceneStartsInFrames.opening} />
</Series.Sequence>
```

Why this structure:

- it matches the current sequence boundaries
- it avoids manual frame offsets
- each clip starts exactly when its scene starts
- it keeps the audio implementation simple and easy to inspect

Implementation requirement:

- the first implementation pass should update the composition so a normal `pnpm render`
  consumes the generated scene WAV files without additional manual wiring

## Initial Execution Sequence

After the code changes are in place, the implementation should continue through the first
local execution:

1. install or confirm `uv`
2. run `uv sync`
3. generate all scene WAV files
4. confirm the expected files exist in `video/public/audio/`
5. run Remotion typecheck and lint
6. render the main composition
7. verify that the rendered output includes the narration tracks

This plan is not complete if it stops after code edits without performing the first local
audio generation and render-path verification.

## Missing Audio Handling

The first pass should choose one of these behaviors:

1. strict mode: throw clearly if an expected audio file is missing
2. preview-friendly mode: warn in Studio but skip the missing clip

Recommended choice:

- preview-friendly in development
- strict for final renders once the workflow is stable

## TypeScript Changes

Update `video/tsconfig.json` to allow JSON imports:

- `resolveJsonModule: true`

Then add `video/src/data/narration.ts` as a small typed wrapper that:

- imports `narration.json`
- validates scene ids against the existing `SceneId` union
- exports a typed map for use in Remotion

## Package Script Changes

Add a script in `video/package.json`:

```json
"audio:generate": "uv run --project .. python ../scripts/generate-audio.py"
```

Optional later addition:

```json
"render:with-audio": "pnpm audio:generate && pnpm render"
```

## Git Hygiene

Update `video/.gitignore` to ignore generated WAV files:

```gitignore
public/audio/*.wav
!public/audio/.gitkeep
```

Keep `video/public/audio/.gitkeep` checked in so the expected output directory exists.

## Documentation Changes

Update `video/README.md` to document:

1. `uv` installation and `uv sync`
2. narration source file location
3. audio generation command
4. Remotion preview command
5. final render command

Recommended workflow section:

1. update `investment-committee-memo.md` and `management-diligence-request-list.md`
2. update `video/src/data/ornn-ic-v1.ts` and `video/src/data/narration.json`
3. run `uv sync`
4. run `pnpm audio:generate`
5. run `pnpm dev` and review timing
6. run `pnpm render`

## Validation Plan

Required checks after implementation:

```bash
uv sync
uv run python scripts/generate-audio.py
cd video
pnpm typecheck
pnpm lint
pnpm render
```

Manual checks:

- all eight WAV files exist under `video/public/audio/`
- every scene starts with the correct narration clip
- no clip is truncated
- no clip extends beyond the scene boundary
- the on-screen pacing still feels intentional
- the closing scene lands cleanly with the final audio tail
- the rendered output contains the voice commentary throughout the sequence

## Decision Rules For Future Iterations

When the memo or diligence list changes:

1. update on-screen scene data only where the narrative changed
2. update narration text separately from on-screen text
3. regenerate only the affected scene audio when possible
4. keep file names and scene ids stable
5. keep `af_bella` as the narration voice unless the plan is explicitly revised
6. prefer copy tightening before changing scene durations

## Acceptance Criteria

Implementation is complete when:

- `scripts/generate-audio.py` can generate all eight scene files on CPU in this VM
- the Python tooling is managed through `uv`, with `pyproject.toml` and `uv.lock` checked in
- `video/public/audio/` contains one WAV per scene
- `OrnnIcV1` plays narration in sync with existing scene boundaries
- the first local implementation run has actually generated the WAV files and wired them into the render path
- `pnpm typecheck`, `pnpm lint`, and `pnpm render` succeed
- generated audio is treated as a local artifact rather than committed binary source

## Optional Later Enhancements

- add a duration report that compares generated audio length to scene budget
- add a transcript preview tool
- add caption support using scene-based timestamps
- add a pinned Kokoro-FastAPI alternative for service-style usage
- add a `render:with-audio` command that validates generation before rendering
