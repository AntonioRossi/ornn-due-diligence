# Silicon Data Managed Project Plan

Promote `projects/silicon-data/` from a research/source project into the
second real managed video project in this repo, using the shared Remotion app,
shared audio tooling, and the repo-wide iteration contract already documented in
`PROJECT-HOWTO.md`.

## Implementation Status

Completed on April 8, 2026.

Notes:

- The canonical Silicon Data audio set was generated successfully.
- Smoke and full verification both passed.
- The canonical output `projects/silicon-data/video/out/silicon-data-ic-v1.mp4`
  was rendered through `project:verify`, so a separate final `project:render`
  run was not necessary.
- `uv sync` was completed with `UV_CACHE_DIR="$PWD/.uv-cache"` because the
  sandbox blocked the default home-directory UV cache path.
- Existing `video/` Node dependencies were reused; `pnpm --dir video install`
  was not rerun because the shared app already typechecked and linted cleanly.

## Source Of Truth For This Plan

- `PROJECT-HOWTO.md`
- `MULTI_PROJECT_PLAN.md`
- `video/README.md`
- `projects/silicon-data/research-brief.md`
- The current filesystem state under `projects/silicon-data/`

## Current State

- `projects/silicon-data/` already has `research/` and `sources/`.
- `projects/silicon-data/` does not yet have `video/`.
- `projects/silicon-data/` does not yet have `iteration-prompt.xml`.
- `video/src/Root.tsx` registers only Ornn today.
- The shared wrapper and audio tooling already accept `--project <slug>`, so
  the core command surface is already multi-project aware.
- `.gitignore` already ignores `projects/*/video/public/audio/**` and
  `projects/*/video/out/**`, so no Silicon-Data-specific ignore rule should be
  necessary.

## Goal

At the end of this work, Silicon Data should satisfy the repo's managed-project
contract:

- it has a complete `projects/silicon-data/video/` tree
- it is registered in the shared Remotion app
- it has a project-specific iteration prompt
- canonical scene audio can be generated
- smoke and verify passes succeed
- the canonical default MP4 renders into `projects/silicon-data/video/out/`
- repo docs no longer describe Silicon Data as research-only

## Promotion Gate

Do not start implementation until these are true:

- [ ] Provenance cleanup in `projects/silicon-data/research/` is complete.
- [ ] `projects/silicon-data/sources/investment-committee-memo.md` is stable
      enough to drive a first coherent scene sequence.
- [ ] `projects/silicon-data/sources/management-diligence-request-list.md` is
      stable enough to drive the closing asks.
- [ ] The current evidence base is strong enough to freeze a first managed
      version without immediate structural churn.
- [ ] A clear go/no-go decision has been made that Silicon Data now counts as
      the second real managed project.

## Phase 1: Create The Managed Project Skeleton

- [ ] Create `projects/silicon-data/iteration-prompt.xml`.
- [ ] Create `projects/silicon-data/v1-review-notes.md`.
- [ ] Create `projects/silicon-data/video/project.config.json`.
- [ ] Create `projects/silicon-data/video/project.ts`.
- [ ] Create `projects/silicon-data/video/compositions/SiliconDataIcV1.tsx`.
- [ ] Create `projects/silicon-data/video/data/scene-order.json`.
- [ ] Create `projects/silicon-data/video/data/scenes.ts`.
- [ ] Create `projects/silicon-data/video/data/citations.ts`.
- [ ] Create `projects/silicon-data/video/data/narration.json`.
- [ ] Create `projects/silicon-data/video/data/narration.ts`.
- [ ] Create `projects/silicon-data/video/public/audio/.gitkeep`.
- [ ] Create `projects/silicon-data/video/out/.gitkeep`.

Recommended initial runtime config:

- `slug`: `silicon-data`
- `defaultCompositionId`: `SiliconDataIcV1`
- `defaultOutputName`: `silicon-data-ic-v1.mp4`
- `runtimeAssetKinds`: `["audio"]`

## Phase 2: Author The First Silicon Data Video

- [ ] Use `projects/ornn/video/` as the structural reference, not as a content
      template.
- [ ] Treat the Silicon Data source documents as authoritative inputs.
- [ ] Write `projects/silicon-data/video/data/scenes.ts` first.
- [ ] Write `projects/silicon-data/video/data/citations.ts` from the actual
      scene claims.
- [ ] Define `scene-order.json` with stable scene ids.
- [ ] Write `narration.json` as one scene entry per scene id, aligned exactly
      to `scene-order.json`.
- [ ] Write `narration.ts` using the shared narration schema and validation
      pattern already used by Ornn.
- [ ] Build `SiliconDataIcV1.tsx` using shared components and theme unless a
      real content/layout need requires a small shared extension.
- [ ] Keep the first version text-led, citation-led, and investor-facing rather
      than building new generalized slide machinery.

Recommended initial v1 scene backbone:

- [ ] Opening recommendation and gating issues
- [ ] Company snapshot and why the market matters
- [ ] What appears real today
- [ ] Competitive context and market-formation difficulty
- [ ] Legal and regulatory structure risk
- [ ] Index methodology and governance risk
- [ ] Conflict-stack and counterparty risk
- [ ] Closing recommendation and management asks

## Phase 3: Add The Silicon Data Iteration Prompt

- [ ] Model `projects/silicon-data/iteration-prompt.xml` on
      `projects/ornn/iteration-prompt.xml`.
- [ ] Keep the repo-wide workflow contract consistent with `PROJECT-HOWTO.md`.
- [ ] Make the project prompt Silicon-Data-specific in its source paths, scene
      backbone, composition id, output name, and editorial focus.
- [ ] Do not create a generic template in the same change unless explicitly
      requested as a follow-up after Silicon Data is proven as the second real
      project.

## Phase 4: Register The Project In The Shared App

- [ ] Import `@projects/silicon-data/video/project` in `video/src/Root.tsx`.
- [ ] Add the Silicon Data manifest to the `projects` array.
- [ ] Confirm the project is visible in the shared Remotion root.
- [ ] Confirm no shared path handling still assumes only Ornn exists.

## Phase 5: Update Shared Docs And Repo Assumptions

- [ ] Update `video/README.md` so it no longer says Ornn is the only managed
      project.
- [ ] Update `PROJECT-HOWTO.md` so Silicon Data is no longer described as
      research-only once promotion is complete.
- [ ] Review remaining Ornn-only wording in repo docs and change only the lines
      that are now inaccurate.
- [ ] Leave historical planning documents intact unless there is a specific
      reason to convert them from historical plan into current status.

## Phase 6: Generate Artifacts And Validate

- [ ] Run `uv sync` from the repo root.
- [ ] Run `pnpm --dir video install`.
- [ ] Run `pnpm --dir video project:audio -- --project silicon-data`.
- [ ] Run `pnpm --dir video project:smoke -- --project silicon-data`.
- [ ] Optionally run `pnpm --dir video project:dev -- --project silicon-data`
      for manual Studio review.
- [ ] Run `pnpm --dir video project:verify -- --project silicon-data`.
- [ ] Run `pnpm --dir video project:render -- --project silicon-data`.

Required artifact checks:

- [ ] Canonical audio exists under `projects/silicon-data/video/public/audio/`.
- [ ] Staged runtime audio exists under `video/public/audio/silicon-data/`.
- [ ] The default render exists at
      `projects/silicon-data/video/out/silicon-data-ic-v1.mp4`.
- [ ] Smoke output exists under `projects/silicon-data/video/out/`.

## Definition Of Done

- [ ] The minimum managed-project contract in `PROJECT-HOWTO.md` is satisfied.
- [ ] Silicon Data is renderable through the shared app without ad hoc commands.
- [ ] The project has a checked-in iteration prompt and review-notes file.
- [ ] The first canonical audio set and canonical MP4 have been generated.
- [ ] The shared docs reflect that Silicon Data is now a managed project.
- [ ] Any remaining editorial or timing risks are written down in
      `projects/silicon-data/v1-review-notes.md`.

## Expected Risks

- The source documents may still need editorial tightening before stable scene
  durations and narration can be locked.
- The first Silicon Data composition may expose small shared-component gaps that
  Ornn did not need.
- The project prompt may reveal fields that are reusable across projects, but
  template extraction should remain a follow-up decision after this onboarding
  succeeds.

## Suggested Execution Order

- [ ] Clear the promotion gate.
- [ ] Scaffold the managed-project files.
- [ ] Author the first video data and composition.
- [ ] Add the Silicon Data iteration prompt.
- [ ] Register the project in the shared app.
- [ ] Update the docs that still describe Silicon Data as research-only.
- [ ] Generate audio, run validation, render, and review.
