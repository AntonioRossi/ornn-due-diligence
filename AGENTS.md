# Repository Guidelines

## Project Structure & Module Organization

This repository is a project-to-video workspace. Project-owned research, source documents, and video content live under `projects/<slug>/`; current managed projects are `projects/ornn/`, `projects/silicon-data/`, `projects/auctionomics/`, and `projects/competitive-landscape/`. Each managed project keeps its video contract in `projects/<slug>/video/`: `project.config.json`, `project.ts`, `compositions/`, `data/`, canonical runtime assets in `public/`, and final renders in `out/`.

Shared Remotion code lives in `video/src/`; workflow scripts live in `scripts/`. TypeScript/Vitest tests are in `video/src/**/*.test.ts` and `video/tests/`; Python tests are in `tests/python/`; cross-runtime fixtures are in `tests/fixtures/projects/`.

## Build, Test, and Development Commands

Install dependencies with:

```bash
pnpm --dir video install
uv sync
```

Common commands:

- `pnpm --dir video test:shared` runs the fast shared gate: test typecheck, Vitest, and pytest.
- `pnpm --dir video typecheck` checks production TypeScript for shared and project video code.
- `pnpm --dir video lint` runs the repo ESLint wrapper.
- `pnpm --dir video project:dev -- --project <slug>` stages assets and opens Remotion Studio.
- `pnpm --dir video project:verify -- --project <slug>` runs final project acceptance, including audio, render, and output checks.
- `pnpm --dir video acceptance -- --all` runs shared tests and verifies every managed project.

## Coding Style & Naming Conventions

Use TypeScript strict mode and the Remotion ESLint flat config. TS/TSX files use semicolons, double quotes, PascalCase React components, and camelCase helpers. Repo scripts are ESM `.mjs` files and omit semicolons; match local style. Keep project slugs lowercase kebab-case, such as `silicon-data`.

Use `@shared/*` for `video/src/*` and `@projects/*` for project code. Keep `scene-order.json`, `narration.json`, and scene IDs stable and synchronized.

## Testing Guidelines

Run `pnpm --dir video test:shared` before final verification. Use `pnpm --dir video test:run` for Vitest-only checks and `uv run --project . python -m pytest` for Python-only checks. Add source-adjacent tests for shared utilities and `video/tests/*.test.ts` coverage for workflow behavior.

## Commit & Pull Request Guidelines

Recent history uses concise messages, often Conventional Commit style (`feat: Add ...`, `refactor: ...`) plus imperative sentence-case messages. Prefer `type: summary`.

Pull requests should describe the affected project slug or shared module, list commands run, and call out render/audio artifacts changed under `projects/<slug>/video/public/` or `projects/<slug>/video/out/`. Include screenshots or video notes for visual composition changes.

## Agent-Specific Instructions

Treat `projects/<slug>/sources/` as authoritative editorial input. Do not add outside research unless asked. Use shared wrapper commands rather than ad hoc render or staging paths, and treat `video/public/` as derived runtime state, not source of truth.
