# Harden `project:verify` With Tests Tracker

## Objective

Keep `project:verify` as the final automated acceptance command for managed
projects, but remove its role as the primary regression-defense mechanism.

The target shape is:

- fast shared tests for shared workflow logic
- fixture-based integration tests for project layout contracts
- `project:verify` retained as the final end-to-end proof for real projects

This work is about reducing brittleness as the number of managed projects grows.
Each new project should reuse one tested shared system, not increase dependence
on heavyweight end-to-end renders as the main safety net.

## Why This Exists

Today the repo has:

- shared wrapper logic in `scripts/project.mjs`
- shared verification orchestration in `scripts/project-verify.mjs`
- shared Python validation and audio logic in `scripts/generate-audio.py`
- shared narration validation in `video/src/validation/narration.ts`
- shared scene-order validation in `video/src/utils/sceneOrder.ts`

But it does not yet have a real automated test layer around that shared logic.
That makes `project:verify` carry too much burden and turns regressions into
slow, coarse-grained failures.

## Refactor Rules

- Extract testable seams before adding heavy tests.
- Land the first direct tests before broad helper extraction where existing
  shared modules are already testable.
- Prefer pure helpers over mocking opaque CLI behavior.
- Do not replace `project:verify`; reposition it.
- Keep the shared contracts defined once and tested once.
- Avoid per-project special cases in the shared workflow layer.
- Use minimal tooling; do not build a large test framework unless the repo
  actually needs it.
- Prefer fixture projects and pure function tests to brittle render-heavy tests.
- Do not extract helpers speculatively; each extraction should pay for itself by
  unlocking a concrete direct test or removing real duplication.
- Delete duplicated validation logic when a shared tested validator replaces it.

## XP Constraints

- One obvious regression-defense model:
  - unit/integration tests for shared code
  - `project:verify` for final acceptance
- Do not hide logic in CLI files when it can be extracted and tested.
- Eliminate duplication between runtime validators where practical.
- Add tests close to the shared behavior they protect.
- Keep tests fast enough to run often.
- Use real fixture data instead of complicated mocks when possible.

## Scope

### Core Workflow Touchpoints

- `scripts/project.mjs`
- `scripts/project-verify.mjs`
- `scripts/generate-audio.py`
- `video/package.json`
- `video/tsconfig.json`
- `pyproject.toml`

### Shared Validation Touchpoints

- `video/src/validation/narration.ts`
- `video/src/utils/sceneOrder.ts`
- `video/src/schemas/narration-manifest.schema.json`
- `video/src/types.ts`

### Project Contract Touchpoints

- `projects/*/video/project.config.json`
- `projects/*/video/data/scene-order.json`
- `projects/*/video/data/narration.json`
- `projects/*/video/data/narration.ts`
- `projects/*/video/project.ts`

### Docs To Update After Implementation

Do not block the first useful shared tests on these doc updates.

- `video/README.md`
- `PROJECT-HOWTO.md`
- `projects/ornn/iteration-prompt.xml`
- `projects/silicon-data/iteration-prompt.xml`

## Baseline Inventory

Before editing, capture the current state:

```bash
git status --short
rg -n "project:verify|project:audio|project:render|generate-audio|scene-order|narration" scripts video projects -g '!**/out/**'
find scripts video tests projects -maxdepth 4 \( -iname '*test*' -o -iname '*spec*' \) 2>/dev/null | sort
```

Use this to confirm what is currently tested versus only validated through full
project runs.

## Delivery Strategy

Keep the first useful milestone intentionally small:

- add one lightweight JS test runner
- add one lightweight Python test runner
- make `scripts/generate-audio.py` import-safe for test collection
- land direct tests for `validateNarrationManifest`
- land direct tests for `buildSceneTimeline`

Do not let fixture support, broad helper extraction, or path-abstraction work
delay that first milestone.

## Phase 1: Add Test Harnesses And Make Python Imports Safe

### JavaScript / TypeScript

- [x] Choose one lightweight JS test runner for the shared video/workflow code.
      Recommended: `vitest`.
- [x] Add the test dependency to `video/package.json`.
- [x] Add `test` and `test:watch` scripts to `video/package.json`.
- [x] Add test-compatible TypeScript config:
  - update `video/tsconfig.json`, or
  - add `video/tsconfig.test.json`
- [x] Decide test file location:
  - recommended: `video/src/**/*.test.ts`
  - acceptable: `video/tests/**/*.test.ts`

### Python

- [x] Add `pytest` to the Python tooling surface in `pyproject.toml`.
- [x] Add Python test configuration if needed.
- [x] Decide test file location:
  - recommended: `tests/python/`
  - acceptable: `scripts/tests/`
- [x] Make `scripts/generate-audio.py` safe to import during test collection:
  - defer `from kokoro import KPipeline` until the generation path, or inject it
  - move schema loading behind a cached helper or equivalent import-safe seam
  - keep pure validation helpers importable without generation-time setup
- [x] If minimal extraction is required to make Python helper imports clean, do
      only that extraction in this phase.

Validation after Phase 1:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest --collect-only
```

Success criteria:

- Both runtimes have a real test harness.
- Python helper imports and `pytest --collect-only` do not depend on the audio
  generation stack being initialized at module import time.
- Adding the first direct tests no longer requires more scaffolding.

## Phase 2: Land First Fast Shared Tests And Centralize The Obvious Shared Contract

This phase should start paying off before any broad workflow refactor.

Minimum useful win for this phase:

- direct tests for the existing shared TS validators
- enough direct Python coverage to prove the import-safe harness is real
- one shared `project.config.json` validator used by both CLI entrypoints

### JavaScript / TypeScript Tests

- [x] Add tests for `validateNarrationManifest`:
  - valid manifest
  - missing required field
  - duplicate scene ids
  - wrong scene order
  - unknown fields
  - default value application
- [x] Add tests for `buildSceneTimeline`:
  - valid order
  - unknown scene id
  - duplicate scene id
  - wrong scene count
  - duration accumulation

### Python Tests

- [x] Add the first direct tests for existing validation helpers in
      `scripts/generate-audio.py`:
  - required in the first pass: `load_scene_order`
  - required in the first pass: `validate_entries`
  - add `select_entries`, `should_skip`, and `verify_existing` in this phase if
    they stay cheap after the Phase 1 import-safety work
- [x] If Python helpers are still awkward to import or isolate after Phase 1,
      perform only the minimum extraction needed to expose them cleanly.
- [x] Do not block this phase on extracting `project.mjs` or
      `project-verify.mjs` helpers.
- [x] Add one thin shared test command or helper script that runs the JS and
      Python shared tests together.

### Project Runtime Config Contract

- [x] Add a shared runtime validator for `project.config.json`.
- [x] Land this before broad workflow-helper extraction or fixture-project
      support.
- [x] Use the same validator from:
  - `scripts/project.mjs`
  - `scripts/project-verify.mjs`
- [x] Ensure it enforces:
  - `slug`
  - `defaultCompositionId`
  - `defaultOutputName`
  - `runtimeAssetKinds`
- [x] Add direct tests for the shared project-config validator:
  - valid config
  - slug mismatch
  - missing output name
  - invalid asset kind
  - invalid output file name

Validation after Phase 2:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
```

Success criteria:

- The repo has meaningful fast regression coverage before workflow refactors.
- Existing shared validators and pure helpers fail fast on contract regressions.
- The duplicate `project.config.json` contract logic is centralized before
  deeper workflow extraction.
- The repo has one obvious fast shared-test command to run before deeper
  workflow changes.

## Phase 3: Consolidate Remaining Shared Contracts

### Narration Contract

- [x] Keep `video/src/validation/narration.ts` as the shared JS validator.
- [x] Keep the current schema-driven contract authoritative, whether Python
      consumes it directly or mirrors it.
- [x] Prefer shared schema plus explicit parity fixtures over forcing deeper
      cross-runtime implementation unification.
- [x] If mirrored implementations remain, add explicit cross-runtime fixture
      tests so they cannot silently drift.

### Scene Order Contract

- [x] Keep `video/src/utils/sceneOrder.ts` as the shared JS validation point.
- [x] Add equivalent contract coverage for the runtime wrapper’s scene-order
      parsing logic.

Validation after Phase 3:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
```

Success criteria:

- Project contract rules are centralized or explicitly cross-checked.
- Duplicated ad hoc validation is reduced.

## Phase 4: Extract Only The Workflow Seams Still Blocking Direct Tests

Only extract where direct tests are still awkward or impossible. When a seam is
extracted, add the direct tests for that seam in the same change. If a behavior
is already directly testable in place, test it in place.

### `scripts/project.mjs`

- [x] Extract argument parsing into a directly testable helper module if direct
      tests against the CLI file are still awkward.
- [x] Extract scene-order manifest parsing or output-name validation only if the
      existing functions cannot be tested cleanly in place.
- [x] Extract audio-staging policy only if isolated tests need it.
- [x] Do not extract path resolution by default; make it injectable only where
      fixture or helper tests prove that hardcoded repo-root assumptions are the
      blocker.
- [x] Keep the CLI file thin: parse, call helpers, run commands.

### `scripts/project-verify.mjs`

- [x] Extract verify-step planning into a directly testable helper only if the
      sequencing logic is still awkward to test in place.
- [x] Use the shared project-config validator; do not reintroduce duplicated
      project-config validation in the CLI wrapper.
- [x] Keep the CLI file thin: parse, call helpers, run commands, assert output.

### `scripts/generate-audio.py`

- [x] If still needed after Phase 2, extract pure validation helpers into
      importable Python functions or a shared module under `scripts/`.
- [x] Separate pure manifest/scene-order validation from actual audio generation
      where it meaningfully improves direct testing.
- [x] Separate file-path resolution from side-effectful generation only where it
      materially improves direct tests or fixture support.
- [x] Keep the CLI entrypoint thin.

### Node Workflow Tests

- [x] Add tests for `project.mjs` helper logic:
  - argument parsing
  - missing `--project`
  - separator passthrough handling
  - stage/audio/render option handling
  - canonical audio completeness checks
  - partial `--scene` behavior
- [x] Add tests for `project-verify.mjs` helper logic:
  - missing `--project`
  - command sequence
  - canonical output path selection
  - output-file existence enforcement

### Python Workflow Tests

- [x] Add tests for any newly extracted Python helper logic that remains outside
      the direct validation coverage from Phase 2.

Validation after Phase 4:

```bash
pnpm --dir video typecheck
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
```

Success criteria:

- Workflow orchestration decisions have direct fast tests.
- Basic workflow regressions fail before any full render is attempted.

## Phase 5: Add Fixture-Project Integration Tests

This is the highest-risk scope-expansion phase because the current workflow
code assumes the live repo root in multiple places. Do not start this phase
until Phases 1-4 are already paying off. If fixture support starts pushing
toward a broad path-abstraction layer, stop and cut scope back to the smallest
seam that unlocks one concrete fixture test.

### Fixture Layout

- [x] Add minimal fixture projects for shared wrapper tests.
- [x] Recommended location: `tests/fixtures/projects/`
- [x] Keep fixtures minimal and contract-focused; do not turn them into full
      substitutes for the real projects.
- [x] Recommended fixtures:
  - `minimal-valid`
  - `missing-project-config`
  - `bad-scene-order`
  - `bad-narration-order`
  - `missing-audio`

### Refactor Needed To Support Fixtures

- [x] Treat repo-root/project-root hardcoding as the likely blocker, not as a
      routine cleanup item.
- [x] Make repo-root/project-root resolution injectable in shared helpers or test
      harnesses, rather than hardcoding only the live repo root.
- [x] Avoid baking global filesystem assumptions into helper logic where fixtures
      need local temp directories.
- [x] If one injectable root or one narrow seam is enough, stop there.
- [x] Do not introduce a broad path-abstraction layer unless fixture tests
      actually need it.
- [x] If fixture support still demands a broad abstraction layer, narrow the
      fixture scope before building framework plumbing.

### Fixture Tests

- [x] Add Node integration tests proving:
  - shared wrapper accepts valid project layout
  - invalid config fails clearly
  - invalid scene-order fails clearly
  - render path selection resolves correctly
  - staging writes to the right derived location
- [x] Keep fixture tests below the real-project acceptance layer:
  - do not invoke real renders
  - do not require Kokoro generation
  - do not try to replace `project:verify`

Validation after Phase 5:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
```

Success criteria:

- The shared multi-project contract is tested against fixture projects.
- Shared workflow regressions can be detected without rendering real projects.
- Fixture tests stay focused on project-layout and orchestration contracts.
- Fixture support does not leave behind a broad generic path-abstraction layer
  unless it proved necessary for a concrete test.

## Phase 6: Finalize The Layered Validation Model

### Reposition `project:verify`

- [x] Keep `project:verify` in `video/package.json`.
- [x] Keep it documented as the final acceptance gate, not the primary test path.
- [x] Ensure docs explain the layered model:
  - fast tests first
  - project verify second
- [x] Ensure prompts do not imply that shared workflow correctness is proven only
      by per-project verify runs.

### Manual Validation Workflow

- [x] Document the default layered local gate:
  - run test TypeScript checks first
  - run JS shared tests second
  - run Python shared tests third
  - run real-project `project:verify` only for final acceptance
- [x] Add one thin manual acceptance command or helper script so the full local
      gate is easy to run consistently.
- [x] Document when fast shared tests are sufficient versus when final
      `project:verify` runs are required.
- [x] Add a short manual sign-off checklist for shared workflow changes:
  - JS tests passed
  - Python tests passed
  - required real-project verify runs passed

### Cleanup

This step is mandatory once shared tests exist.

- [x] Delete duplicated validation logic if replaced by a shared tested helper.
- [x] Delete dead helper branches exposed during extraction.
- [x] Delete unused test scaffolding or temporary fixtures.
- [x] Remove docs wording that still treats render-based verification as the only
      trustworthy validation.

Validation after Phase 6:

```bash
pnpm --dir video exec tsc --noEmit --noUnusedLocals --noUnusedParameters
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
pnpm --dir video project:verify -- --project ornn
pnpm --dir video project:verify -- --project silicon-data
rg -n "project:verify" video/README.md PROJECT-HOWTO.md projects/ornn/iteration-prompt.xml projects/silicon-data/iteration-prompt.xml
rg -n "TODO|FIXME|temporary|temp fixture|legacy validator" scripts video tests
git status --short
```

Success criteria:
- The command remains useful and its role is clear.
- The local validation path is clear and repeatable without CI.
- Fast shared tests are the default regression-defense layer.
- Full project verify is reserved for intentional final acceptance.
- The final shape is simpler than the intermediate extraction steps.
- No orphaned helpers or dead validation branches remain.

## End-To-End Acceptance

After the shared test layer exists, keep these as the real-project acceptance
checks:

```bash
pnpm --dir video project:verify -- --project ornn
pnpm --dir video project:verify -- --project silicon-data
```

These commands should remain, but they should no longer be the first or only
way to discover shared workflow regressions.

## Acceptance Criteria

- The repo has a real JS test harness.
- The repo has a real Python test harness.
- Python shared helpers can be imported and collected without triggering heavy
  generation-time setup.
- Shared workflow logic is testable without full project renders.
- Shared contracts have direct tests.
- `project.config.json` validation is defined once and reused by the workflow
  wrappers.
- Fixture-project integration tests exist.
- `project:verify` remains as the final acceptance gate.
- The manual validation workflow is documented and repeatable.
- Docs describe the layered validation model clearly.
- No redundant or orphaned validation code remains after extraction.

## Non-Goals

- Do not remove `project:verify`.
- Do not add CI in this pass.
- Do not add a large test framework unless a minimal one suffices.
- Do not add per-project special cases to the shared test strategy.
- Do not turn every UI component into snapshot-test noise.
- Do not rely on render-heavy tests for basic shared workflow correctness.
- Do not let fixture infrastructure delay the first shared validator tests.

## Implementation Notes

- Prefer testing existing exported modules first before extracting more helpers.
- Prefer extracting pure helpers first, then testing them.
- Treat import-time side effects in shared workflow code as testability bugs.
- If extraction is needed only to expose importable logic, do the smallest
  extraction that unlocks direct tests.
- Keep heavy runtime dependencies behind lazy seams where direct helper tests do
  not need them.
- Avoid testing through subprocesses when direct helper tests are enough.
- Use fixtures for project-layout behavior, not mocks alone.
- Treat fixture support as a cost center; add only the minimum seam needed for
  one concrete fixture test at a time.
- Keep real-project verify commands for final confidence only.
