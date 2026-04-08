# Shared Remotion Video App

This directory contains the shared Remotion app for project-owned video code
stored under `../projects/<slug>/video/`.

Managed video projects today:

- `projects/ornn/`
- `projects/silicon-data/`

## Setup

Sync Python dependencies from the repo root:

```bash
cd ..
uv sync
```

Install Node dependencies:

```bash
cd video
pnpm install
```

## Project Commands

Run every workflow through the shared wrapper:

```bash
pnpm project:stage -- --project <slug>
pnpm project:audio -- --project <slug>
pnpm project:dev -- --project <slug>
pnpm project:render -- --project <slug>
pnpm project:smoke -- --project <slug>
pnpm project:verify -- --project <slug>
```

Static checks:

```bash
pnpm typecheck
pnpm lint
```

`project:smoke` runs typecheck, lint, audio validation in `--check-only` mode,
and a render to `projects/<slug>/video/out/smoke-<slug>.mp4`.

`project:verify` runs typecheck, lint, real audio generation, validates the
canonical scene audio artifacts, and renders the project's default output from
`project.config.json`.

## Audio Staging Model

Canonical project audio lives under `../projects/<slug>/video/public/audio/`.
The shared Remotion app reads staged runtime audio from `public/audio/<slug>/`.

- `pnpm project:audio -- --project <slug>` validates or regenerates canonical audio and then stages it.
- `pnpm project:dev -- --project <slug>` stages first, then starts Remotion Studio.
- `pnpm project:render -- --project <slug>` stages first, then renders into the project-owned output directory.

`project:dev` is a manual Studio workflow, not part of the automated smoke or
verification checks.

Do not treat `video/public/` as source of truth. It is derived runtime state for
Studio and renders.

## Runtime Asset Staging

Projects may declare staged runtime asset directories in
`../projects/<slug>/video/project.config.json`.

- Canonical project-owned runtime assets live under `../projects/<slug>/video/public/<asset-kind>/`.
- The shared app stages them into `video/public/<asset-kind>/<slug>/`.
- `audio` is required when declared and stages only the canonical `.wav` and `.json` scene artifacts.
- Other asset kinds stage as whole directories when present.

`project:render` and `project:verify` use the default composition id and output
name from the selected project's `project.config.json`.

## Shared Layout

```text
src/
  index.ts
  Root.tsx
  components/
  theme.ts
  types.ts
  utils/
```

Project-owned code and editorial inputs live under `../projects/<slug>/video/`.
