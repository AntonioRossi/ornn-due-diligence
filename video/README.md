# Ornn Remotion Project

This directory contains the standalone Remotion project for the Ornn investor video work.

The main composition is `OrnnIcV1`, a first-cut investor presentation based on:

- `../investment-committee-memo.md`
- `../management-diligence-request-list.md`

## Commands

Sync the Python audio toolchain:

```bash
cd ..
uv sync
```

Install dependencies:

```bash
pnpm install
```

Generate narration audio:

```bash
pnpm audio:generate
```

Start Remotion Studio:

```bash
pnpm dev
```

Render the current composition:

```bash
pnpm render
```

Run static checks:

```bash
pnpm typecheck
pnpm lint
```

## Audio Workflow

The project now supports scene-based voice commentary generated locally with Kokoro on CPU.

- Narration source: `src/data/narration.json`
- Voice policy: `af_bella`
- Generated assets: `public/audio/*.wav`

Typical workflow:

1. Update `../investment-committee-memo.md` and `../management-diligence-request-list.md`.
2. Update on-screen copy in `src/data/ornn-ic-v1.ts` if needed.
3. Update narration copy in `src/data/narration.json`.
4. Run `uv sync` from the repo root if Python dependencies changed or are not installed yet.
5. Run `pnpm audio:generate` from `video/`.
6. Run `pnpm dev` to review pacing and audio alignment.
7. Run `pnpm render` for the final MP4.

## Project Layout

```text
src/
  index.ts
  Root.tsx
  compositions/
  components/
  data/
  utils/
```
