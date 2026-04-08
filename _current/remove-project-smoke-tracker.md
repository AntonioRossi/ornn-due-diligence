# Remove `project:smoke` Tracker

## Objective

Remove `project:smoke` as a separate workflow and collapse the repo onto one
automated validation path:

- `project:verify` for automated end-to-end validation
- `project:dev` for manual Studio review
- `project:render` for explicit render-only work when needed

This refactor must reduce cognitive load, remove brittle branching, preserve a
working repo after each step, and delete orphaned or unused code introduced by
the old smoke-mode split.

## Refactor Rules

These rules are mandatory for the implementation:

- Work in small live-refactor steps. The repo should stay runnable after each
  major edit.
- Prefer deletion over compatibility shims.
- Do not keep both old and new workflow paths alive longer than necessary.
- Rename files so names match behavior. Do not leave misleading file names in
  place.
- Remove dead branches, dead docs, dead commands, and dead outputs in the same
  change when they are clearly obsolete.
- Do not add new flags, fallback modes, or migration-only adapters.
- Keep one source of truth for automated validation: `project:verify`.
- Validate after each slice with real commands, not only by reading the code.

## XP Constraints

- Small commits in spirit, even if the work lands in one working tree diff.
- One obvious way to do the automated check.
- Eliminate duplication instead of documenting around it.
- Keep the code intention-revealing.
- Delete unused code immediately once the new path is in place.
- If a file or branch exists only to support smoke mode, remove it.

## Scope

### Must Change

- `video/package.json`
- `scripts/smoke-test.mjs`
- `video/README.md`
- `PROJECT-HOWTO.md`
- `projects/ornn/iteration-prompt.xml`
- `projects/silicon-data/iteration-prompt.xml`

### Conditional / Policy-Driven

Update these only if they are treated as current operating docs rather than
historical records:

- `SILICON_DATA_MANAGED_PROJECT_PLAN.md`
- `MULTI_PROJECT_PLAN.md`

### Cleanup Targets

- old `project:smoke` script entry
- smoke-specific mode parsing
- smoke-only output naming (`smoke-<slug>.mp4`)
- smoke-specific docs and prompt commands
- obsolete script file name if behavior is verify-only
- stale references to `--mode smoke`
- orphaned generated smoke outputs if they are no longer wanted

## Baseline Inventory

Before editing, capture the current smoke touchpoints:

```bash
rg -n "project:smoke|smoke-test\\.mjs|--mode smoke|smoke-|Smoke test" . -g '!**/out/**'
git status --short
```

Use this inventory to confirm that every reference is either removed or
explicitly left as historical documentation.

## Phase 1: Collapse The CLI Surface

- [ ] Remove `"project:smoke"` from `video/package.json`.
- [ ] Keep `"project:verify"` as the only automated validation command.
- [ ] Decide the final script name:
  - Recommended: rename `scripts/smoke-test.mjs` to `scripts/project-verify.mjs`
  - Acceptable: `scripts/verify-project.mjs`
- [ ] Update `video/package.json` to point `project:verify` at the renamed file.

Validation after Phase 1:

```bash
node -e "const p=require('./video/package.json'); console.log(p.scripts)"
```

Success criteria:

- No `project:smoke` script remains.
- The remaining script names reflect actual behavior.

## Phase 2: Hard Live Refactor The Verification Script

Refactor the script itself as a delete-and-simplify change, not as a layered
compatibility edit.

- [ ] Rename the file from `scripts/smoke-test.mjs` to the verify-only name.
- [ ] Remove `validModes`.
- [ ] Remove `--mode` parsing.
- [ ] Remove the smoke default mode.
- [ ] Remove smoke-specific output naming logic.
- [ ] Remove smoke-specific label strings.
- [ ] Remove the `audio -- --check-only` branch.
- [ ] Keep one path only:
  - `typecheck`
  - `lint`
  - `project.mjs audio --project <slug>`
  - canonical artifact check if still useful
  - `project.mjs render --project <slug>`
  - final output existence check
- [ ] Keep usage text aligned with the new interface.
- [ ] Ensure error messages mention verification, not smoke tests.

Validation after Phase 2:

```bash
pnpm --dir video typecheck
pnpm --dir video lint
node scripts/<verify-script-name>.mjs --help
rg -n "smoke|--mode" scripts/<verify-script-name>.mjs
```

Success criteria:

- The script has one behavior only.
- No dead branch remains for smoke mode.
- The file name and usage string match the actual command.

## Phase 3: Update Current Shared Docs

### `video/README.md`

- [ ] Remove `project:smoke` from the command list.
- [ ] Replace the smoke/verify split with one description of `project:verify`.
- [ ] Remove references to `--check-only` smoke validation.
- [ ] Remove references to `smoke-<slug>.mp4`.
- [ ] Keep `project:dev` clearly manual.

### `PROJECT-HOWTO.md`

- [ ] Remove `smoke-test.mjs` from the shared script layout if the file is renamed.
- [ ] Rewrite Stage 10 so it describes only `project:verify`.
- [ ] Remove “run smoke first”.
- [ ] Remove “smoke test” from iteration loops and full-chain rerun guidance.
- [ ] Keep the guidance simple: verify, then render if a distinct canonical render
      step is still needed.

Validation after Phase 3:

```bash
rg -n "project:smoke|smoke-test\\.mjs|smoke-|Smoke test|--check-only" video/README.md PROJECT-HOWTO.md
```

Success criteria:

- Current docs present one automated validation path.
- There is no contradictory guidance between docs and code.

## Phase 4: Update Project Prompts

### `projects/ornn/iteration-prompt.xml`

- [ ] Replace `project:smoke` command references with `project:verify`.
- [ ] Remove wording that implies smoke is a standard validation tier.
- [ ] Keep the rest of the prompt intact.

### `projects/silicon-data/iteration-prompt.xml`

- [ ] Replace `project:smoke` command references with `project:verify`.
- [ ] Remove wording that implies smoke is a standard validation tier.
- [ ] Keep the rest of the prompt intact.

Validation after Phase 4:

```bash
rg -n "project:smoke|smoke" projects/ornn/iteration-prompt.xml projects/silicon-data/iteration-prompt.xml
```

Success criteria:

- Project prompts no longer command the deleted workflow.
- Prompts still point at real shared commands.

## Phase 5: Remove Orphaned And Unused Code

This phase is mandatory. Do not stop after the happy path works.

### Code Cleanup

- [ ] Delete the old script file if it was renamed and the old path is no longer used.
- [ ] Delete any helper function, constant, or string branch that only supported smoke mode.
- [ ] Delete any output-name logic used only for `smoke-<slug>.mp4`.
- [ ] Delete any docs section that exists only to explain smoke mode.

### Repo Reference Sweep

- [ ] Search for `project:smoke`, `smoke-test.mjs`, `--mode smoke`, `smoke-`.
- [ ] Remove remaining references from current docs and code.
- [ ] Decide explicitly whether to leave historical plan references untouched.

### Derived Artifact Cleanup

Derived files are not source of truth. If smoke mode is removed, delete obsolete
derived smoke outputs that no longer have a supported producer.

- [ ] Remove `projects/*/video/out/smoke-*.mp4` artifacts if they exist and are
      no longer part of the workflow.
- [ ] Remove any stale staged runtime state that exists only because smoke mode
      used to produce it.

Cleanup commands:

```bash
rg -n "project:smoke|smoke-test\\.mjs|--mode smoke|smoke-" . -g '!MULTI_PROJECT_PLAN.md'
find projects -path '*/video/out/smoke-*.mp4' -print
git status --short
```

Success criteria:

- No orphaned code remains from smoke mode.
- No unused command path remains.
- No stale generated smoke outputs remain unless intentionally preserved.

## Phase 6: Historical Docs Decision

Make an explicit decision before editing historical planning docs.

### Option A: Leave Historical Plans Intact

Recommended default.

- [ ] Leave `MULTI_PROJECT_PLAN.md` unchanged if it is historical.
- [ ] Leave historical references in place if they describe what was planned at
      the time, not current policy.

### Option B: Normalize Historical Plans To Current Policy

Only do this if the repo treats these docs as living operational docs.

- [ ] Update `MULTI_PROJECT_PLAN.md`
- [ ] Update `SILICON_DATA_MANAGED_PROJECT_PLAN.md`

If Option B is chosen, remove smoke references there too.

## Phase 7: End-To-End Validation

Run real validation after the refactor, not just static checks.

### Static

```bash
pnpm --dir video typecheck
pnpm --dir video lint
pnpm --dir video exec tsc --noEmit --noUnusedLocals --noUnusedParameters
```

### Managed Projects

```bash
pnpm --dir video project:verify -- --project ornn
pnpm --dir video project:verify -- --project silicon-data
```

### Final Reference Sweep

```bash
rg -n "project:smoke|smoke-test\\.mjs|--mode smoke|smoke-" . -g '!MULTI_PROJECT_PLAN.md' -g '!SILICON_DATA_MANAGED_PROJECT_PLAN.md'
git diff --stat
git status --short
```

Success criteria:

- Both managed projects pass `project:verify`.
- Typecheck and lint pass.
- No unused locals or params remain.
- No current repo code or current operational docs reference smoke mode.

## Acceptance Criteria

- `project:smoke` no longer exists.
- There is one automated validation command.
- The verification script has one behavior only.
- Current docs and project prompts match the code.
- Orphaned code and unused code from smoke mode are removed.
- The repo is simpler than before, not merely different.

## Non-Goals

- Do not add a replacement “lightweight” validation mode.
- Do not add flags to preserve legacy behavior.
- Do not keep aliases for `project:smoke`.
- Do not keep misleading file names for backward familiarity.

## Implementation Notes

- Use `apply_patch` for file edits.
- Prefer small slices with validation after each slice.
- If any refactor step introduces temporary duplication, remove it before
  ending the change.
- If any stale output or helper survives only because it was once convenient,
  delete it.
