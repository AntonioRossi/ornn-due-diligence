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
pnpm project:verify -- --project <slug>
```

Fast shared validation:

```bash
pnpm typecheck:test
pnpm test:run
pnpm test:shared
```

`pnpm typecheck:test` typechecks test files, repo scripts, and project video
code. `pnpm test:run` is the fast JS shared-test pass. `pnpm test:shared` runs
`typecheck:test`, `test:run`, and the Python shared tests through
`uv run --project . python -m pytest`.

Final acceptance:

```bash
pnpm project:verify -- --project <slug>
pnpm acceptance -- --project <slug>
pnpm acceptance -- --all
```

`project:verify` remains the final real-project acceptance pass. It runs
typecheck, lint, real project audio generation through `project:audio`, and a
render using the defaults from `project.config.json`.

`acceptance` runs the fast shared tests first and then executes one or more
real-project `project:verify` passes.

## Audio Staging Model

Canonical project audio lives under `../projects/<slug>/video/public/audio/`.
The shared Remotion app reads staged runtime audio from `public/audio/<slug>/`.

- `pnpm project:audio -- --project <slug>` validates or regenerates canonical audio and then stages it.
- `pnpm project:dev -- --project <slug>` stages first, then starts Remotion Studio.
- `pnpm project:render -- --project <slug>` stages first, then renders into the project-owned output directory.

`project:dev` is a manual Studio workflow, not part of the automated
verification path.

Do not treat `video/public/` as source of truth. It is derived runtime state for
Studio and renders.

## Runtime Asset Staging

Projects may declare staged runtime asset directories in
`../projects/<slug>/video/project.config.json`.

- Canonical project-owned runtime assets live under `../projects/<slug>/video/public/<asset-kind>/`.
- The shared app stages them into `video/public/<asset-kind>/<slug>/`.
- `audio` is required when declared and stages only the canonical `.wav` and `.json` scene artifacts.
- Other asset kinds stage as whole directories when present.

`project:verify` uses the default composition id and output name from the
selected project's `project.config.json`.

Use `project:render` when you want an explicit render-only pass without rerunning
the full verification path.

The intended layered model is:

1. run fast shared tests first
2. run `project:verify` only for final acceptance on the affected real project

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
