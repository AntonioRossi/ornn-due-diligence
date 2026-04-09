# Test Guide

This repo uses a layered test model. Fast shared tests protect reusable video,
workflow, narration, and audio-artifact contracts. Real project verification
stays as the final acceptance layer because it can generate audio and render
videos.

## Setup

Install the Node and Python toolchains before running tests:

```bash
pnpm --dir video install
uv sync
```

## Main Commands

Run the JavaScript/TypeScript shared tests once:

```bash
pnpm --dir video test:run
```

Run TypeScript checks for tests, repo scripts, and project video code:

```bash
pnpm --dir video typecheck:test
```

Run the Python tests once:

```bash
uv run --project . python -m pytest
```

Run the default fast shared gate across test typechecking and both runtimes:

```bash
pnpm --dir video test:shared
```

Run production type checking and linting for the shared video app and managed
project video code:

```bash
pnpm --dir video typecheck
pnpm --dir video lint
```

Run final acceptance for one managed project:

```bash
pnpm --dir video project:verify -- --project <slug>
```

Run the full layered acceptance path for one or more projects, or every managed
project:

```bash
pnpm --dir video acceptance -- --project <slug>
pnpm --dir video acceptance -- --project <slug> --project <other-slug>
pnpm --dir video acceptance -- --all
```

## Command Roles

`pnpm --dir video test:run` is the non-interactive Vitest command. Use it for
automation and local proof runs. Do not pass Vitest's run flag after a
package-script separator; that can leave Vitest in watch mode in an interactive
terminal.

`pnpm --dir video test:watch` is the explicit interactive Vitest watch command.
Use it while developing shared TypeScript code.

`pnpm --dir video typecheck` runs the production TypeScript check. It covers the
shared video app and managed project video TypeScript through `video/tsconfig.json`.

`pnpm --dir video typecheck:test` runs `video/tsconfig.test.json`. It covers the
test files under `video/tests`, source-adjacent test files, imported repo
scripts, `video/vitest.config.ts`, and managed project video TypeScript.

`pnpm --dir video lint` checks shared video source and managed project video
TypeScript through `scripts/lint.mjs`.

`pnpm --dir video test:shared` runs `typecheck:test`, then `test:run`, then
`uv run --project . python -m pytest`. This is the default fast regression gate
before real-project verification.

`pnpm --dir video project:verify -- --project <slug>` is the final real-project
acceptance gate. It runs typecheck, lint, project audio generation/staging,
rendering, and an output-file existence check.

`pnpm --dir video acceptance -- --project <slug>` runs `test:shared` first, then
`project:verify` for the selected project. You can pass repeated `--project`
values; the script dedupes them before verification. `--all` discovers managed
projects by looking for `projects/<slug>/video/project.config.json`.

## Workflow Commands

These commands are part of the managed project workflow and are covered by
helper-level tests, not full subprocess tests:

- `pnpm --dir video project:stage -- --project <slug>` stages declared runtime
  assets into `video/public/<asset-kind>/<slug>/`.
- `pnpm --dir video project:audio -- --project <slug>` validates or regenerates
  canonical audio, then stages runtime assets.
- `pnpm --dir video project:audio -- --project <slug> -- <python-args...>`
  forwards passthrough args to `scripts/generate-audio.py`.
- `pnpm --dir video project:render -- --project <slug>` stages assets and
  renders with project defaults.
- `pnpm --dir video project:render -- --project <slug> --composition <id> --output-name <file.mp4>`
  renders with explicit overrides.
- `pnpm --dir video project:dev -- --project <slug>` stages assets and starts
  Remotion Studio for manual inspection.

## Heavy Commands

`project:verify` and `acceptance` are not fast unit-test commands. They can:

- generate or validate canonical audio under
  `projects/<slug>/video/public/audio/`
- stage derived runtime assets under `video/public/`
- render video through Remotion
- write final outputs under `projects/<slug>/video/out/`

Use `test:shared` for the fast shared gate. Use `project:verify` or
`acceptance` when you intentionally want final real-project acceptance.

## Test Locations

JavaScript and TypeScript tests are run by Vitest from `video/`:

- `video/src/**/*.test.ts` covers source-adjacent shared video logic.
- `video/tests/**/*.test.ts` covers cross-boundary workflow and contract logic.
- `video/vitest.config.ts` sets the Node test environment and the test include
  globs.
- `video/tsconfig.test.json` is run by `pnpm --dir video typecheck:test` and
  includes tests plus imported repo scripts, Vitest config, and project video
  files.

Python tests are run by pytest from the repo root:

- `tests/python/test_generate_audio.py` covers import-safe audio helper logic,
  narration validation, scene ordering, audio metadata checks, and existing
  artifact validation.
- `pyproject.toml` pins the pytest test path to `tests/python`.

Shared fixtures live under `tests/fixtures/projects/`:

- `minimal-valid` is the smallest valid managed-project layout.
- `missing-project-config` proves missing config failures.
- `bad-scene-order` proves scene-order validation failures.
- `missing-audio` proves required canonical audio failures.
- `bad-narration-order` is shared by TypeScript and Python narration contract
  tests to prevent validator drift.

## Current Coverage Map

Vitest currently covers:

- scene-order timeline validation in `video/src/utils/sceneOrder.test.ts`
- narration manifest validation in `video/src/validation/narration.test.ts`
- cross-runtime narration fixture parity in `video/tests/narration-parity.test.ts`
- project config validation in `video/tests/project-config.test.ts`
- package-script argument handling in `video/tests/project-entrypoint.test.ts`
- project workflow parsing, staging, render planning, and fixture integration in
  `video/tests/project-workflow.test.ts`
- project verification planning and output checks in
  `video/tests/project-verify.test.ts`
- the shared JS/Python test runner command sequence in
  `video/tests/test-shared.test.ts`

Pytest currently covers:

- safe importing of `scripts/generate-audio.py`
- `scene-order.json` loading and duplicate detection
- narration entry defaults and scene-order enforcement
- bad narration fixture parity
- scene selection ordering
- audio skip logic and stale/current metadata validation

## What This Does Not Cover

The fast shared suite does not prove every end-to-end runtime behavior:

- no automated tests currently target `scripts/acceptance.mjs` directly
- no fast-suite test performs a real Remotion render
- no fast-suite test performs real Kokoro model audio generation
- package-script behavior is mostly covered through exported helpers, not broad
  CLI subprocess tests
- `project:dev` is only covered at the workflow-helper level and still requires
  manual Studio inspection

## What To Run

For shared TypeScript or workflow helper changes, run:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
pnpm --dir video typecheck
pnpm --dir video lint
```

For Python audio-generation or narration-helper changes, run:

```bash
uv run --project . python -m pytest
```

For changes that cross the TypeScript/Python narration or audio contract, run:

```bash
pnpm --dir video test:shared
```

For changes to a real managed project, run the fast shared gate first, then the
project verification gate:

```bash
pnpm --dir video test:shared
pnpm --dir video project:verify -- --project <slug>
```

Use `acceptance` when you want one command to enforce that layered path:

```bash
pnpm --dir video acceptance -- --project <slug>
```

## Adding Tests

Prefer direct helper tests for shared behavior. Use fixture projects for
project-layout and orchestration contracts. Keep render-heavy checks in
`project:verify` unless the behavior cannot be protected by a faster direct
test.

When adding a new managed-project contract, add the smallest fixture under
`tests/fixtures/projects/` that proves the behavior. When TypeScript and Python
implement the same contract, add a shared fixture or parity test so the two
implementations cannot drift silently.
