# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A project-to-video production workspace. Projects live under `projects/<slug>/` with research, source documents, and video content. A shared Remotion app under `video/` provides the common runtime, components, validation, and scripts used by all managed projects. Audio generation uses Python/Kokoro under `scripts/generate-audio.py`.

Current managed projects: `projects/ornn/`, `projects/silicon-data/`, `projects/auctionomics/`, `projects/competitive-landscape/`.

## Commands

All Node commands run from the repo root with `pnpm --dir video`. Python uses `uv` from the repo root.

```bash
# Setup
pnpm --dir video install
uv sync

# Fast shared test gate (recommended before any verify)
pnpm --dir video test:shared

# Individual test commands
pnpm --dir video test:run                         # Vitest (JS/TS)
pnpm --dir video typecheck:test                   # TypeScript check (tests + scripts)
uv run --project . python -m pytest               # Python tests

# Production typecheck and lint
pnpm --dir video typecheck
pnpm --dir video lint

# Project workflow (replace <slug> with ornn, silicon-data, etc.)
pnpm --dir video project:stage -- --project <slug>
pnpm --dir video project:audio -- --project <slug>
pnpm --dir video project:dev   -- --project <slug>    # Opens Remotion Studio
pnpm --dir video project:render -- --project <slug>

# Final acceptance
pnpm --dir video project:verify -- --project <slug>   # Full verify (typecheck + lint + audio + render + output check)
pnpm --dir video acceptance -- --project <slug>        # Shared tests + verify
pnpm --dir video acceptance -- --all                   # All projects
```

## Architecture

**Three-layer structure:**

1. **Project research** (`projects/<slug>/research/`, `projects/<slug>/sources/`) — editorial inputs, not code.
2. **Project-owned video** (`projects/<slug>/video/`) — `project.config.json`, typed scene data (`data/scenes.ts`), narration (`data/narration.json`), composition code (`compositions/`), canonical audio (`public/audio/`), final renders (`out/`).
3. **Shared infrastructure** (`video/src/`, `scripts/`) — Remotion app, reusable components, validation logic, workflow scripts.

**TypeScript path aliases** (defined in `video/tsconfig.json`):
- `@shared/*` → `video/src/*`
- `@projects/*` → `projects/*/`

**Project registration:** New projects must be imported and added to the `projects` array in `video/src/Root.tsx`.

**Artifact locations:**
- Canonical: `projects/<slug>/video/public/audio/`, `projects/<slug>/video/out/`
- Derived (staging only, not source of truth): `video/public/`

## Key Contracts

- `scene-order.json` is the canonical ordered list of scene IDs. Narration, audio, and validation all depend on it matching `narration.json` exactly in count and order.
- `scenes.ts` is the primary narrative implementation. Update it first, then cascade to citations, narration, and composition only where the delta requires it.
- Python narration validation mirrors TypeScript for contract parity — both must agree.
- Keep scene IDs, composition IDs, and filenames stable unless an editorial change requires renaming.

## Iteration Rules

- Treat `projects/<slug>/sources/` as authoritative editorial input. Do not rewrite source documents during implementation unless explicitly asked.
- Do not supplement source documents with outside research by default.
- Prefer no-op over churn. If the implementation already matches sources, report a no-op.
- If source documents change materially, rerun the full chain: scenes → citations → narration → audio → render.
- Use the shared project wrapper commands. Do not create ad hoc execution paths.
- Always run `test:shared` before `project:verify`.

## Testing

- Unit tests are source-adjacent (`video/src/**/*.test.ts`).
- Integration tests are in `video/tests/`.
- Python tests are in `tests/python/`.
- Test fixtures in `tests/fixtures/projects/` (minimal-valid, missing-project-config, bad-scene-order, etc.).

## Adding a New Managed Project

See `PROJECT-HOWTO.md` for the repo-level dispatcher. It links to the concrete
template HOWTOs and iteration-prompt templates under `_templates/`. Minimum
contract: the template-required source docs in `projects/<slug>/sources/`, a
`video/` directory with `project.config.json`, `project.ts`, composition, scene
data files, narration files, and registration in `video/src/Root.tsx`.
