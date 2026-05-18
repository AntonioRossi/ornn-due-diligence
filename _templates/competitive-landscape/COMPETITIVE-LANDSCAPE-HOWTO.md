# Competitive Landscape Project HOWTO

This document describes the concrete end-to-end workflow for projects that use
the `competitive-landscape` template in this repository.

Use this template for a managed comparison video that synthesizes multiple
existing project source sets into one side-by-side investor view.

## Project States

Projects that fit the `competitive-landscape` template live in one of two
states:

1. Comparative-source project
   - The project has identified its upstream projects and comparative thesis.
   - It owns a comparative analysis document under `sources/`.
   - It is not yet wired into the shared Remotion/audio pipeline.
2. Managed comparison video project
   - The project owns a comparative analysis, typed comparison scene data,
     narration, composition code, audio artifacts, and render outputs.
   - It is registered in the shared Remotion app and can be rendered with the
     shared commands.
   - Example today: `projects/competitive-landscape/`

## Repo Layout

At a high level:

```text
projects/
  <slug>/
    sources/
      competitive-analysis.md      # authoritative comparative narrative
    iteration-prompt.xml           # recommended project workflow prompt
    video/
      project.config.json
      project.ts
      compositions/
      data/
      public/
      out/
```

## Iteration Prompt Template

A reusable starting point for project-specific comparative prompts lives at:

- `_templates/competitive-landscape/COMPETITIVE-LANDSCAPE-ITERATION-PROMPT.xml`

Purpose:

- preserve the current upstream-to-synthesis-to-video execution contract
- give contributors a copy-edit starting point that supports arbitrary upstream
  project counts while staying close to the live
  `projects/competitive-landscape/iteration-prompt.xml`
- keep new comparative projects aligned on provenance checks, visual QA, and
  full-field re-evaluation
- keep new comparative projects aligned with the shared N-way comparison runtime,
  which now uses array-based scene data plus adaptive layouts for higher company
  counts

Use it this way:

1. Copy it to `projects/<slug>/iteration-prompt.xml`.
2. Replace the project slug, composition id, composition filename, output
   file, upstream source blocks, layout-sensitive scene list, and any source-
   section references that differ.
3. Keep the provenance gate, visual QA gate, and the upstream -> comparative
   analysis -> scene-data chain intact unless the repo workflow itself changed.
4. Treat the live `projects/competitive-landscape/iteration-prompt.xml` as the
   current three-way worked example, not as the only allowed comparison shape.
5. If the covered company count is high enough to create additional pages in the
   shared layouts, increase scene durations and narration pacing accordingly.

The shared comparison runtime now accepts arbitrary company counts. The current
implementation keeps the seven-scene comparison grammar but uses adaptive
layouts when the covered field grows:

- `overview` pages overview cards once the field exceeds the compact first page
- `approaches` and `recommendation` page cards instead of forcing an unreadable
  single grid
- `traction` pages timeline lanes
- `riskComparison` and `gatingIssues` page matrix columns
- `positioning` keeps a single spectrum view but supports arbitrary placement
  counts with stable ordering and a larger color palette

That runtime flexibility does not remove editorial constraints. If the field is
large enough that pages become too brief or the narrative becomes unfocused,
extend scene durations or revise the comparison thesis before rendering.

The current project also depends on three upstream `ic-memo` projects:

```text
projects/ornn/sources/
  investment-committee-memo.md
  management-diligence-request-list.md

projects/silicon-data/sources/
  investment-committee-memo.md
  management-diligence-request-list.md

projects/auctionomics/sources/
  investment-committee-memo.md
  management-diligence-request-list.md
```

Those six upstream files are read-only inputs to the comparative project.

## Stage 1: Confirm the Upstream Comparison Set

Before writing any comparative narrative, lock the upstream project set.

For the current project, the covered companies are:

- `ornn`
- `silicon-data`
- `auctionomics`

For each company, the comparative workflow reads:

- `projects/<company>/sources/investment-committee-memo.md`
- `projects/<company>/sources/management-diligence-request-list.md`

Rules:

- Treat the upstream files as authoritative evidence inputs.
- Treat the upstream files as read-only during comparative iteration.
- Do not supplement them with outside research by default.
- If one upstream project changes materially, re-read the full upstream set
  rather than updating one company in isolation.

## Stage 2: Produce the Comparative Analysis

For this template, the project-owned source document is:

- `projects/<slug>/sources/competitive-analysis.md`

This file is the primary comparative narrative. It is a synthesis layer built
from the upstream projects. It is not a loose notes file.

The current project uses this section structure:

1. `Market overview`
2. `Approach comparison`
3. `Traction comparison`
4. `Risk dimension comparison`
5. `Gating issues comparison`
6. `Relative positioning and recommendation`
7. `Claim-provenance appendix`

Rules for `competitive-analysis.md`:

- Every factual claim must come from the approved upstream source set.
- If the upstream record is silent, say so explicitly instead of filling the
  gap.
- Keep the comparison relational. A change in one company can change the
  framing for the rest of the field.
- Keep claim-level provenance visible in the appendix so downstream scenes can
  be traced back to source.
- Do not bypass this document by writing new claims directly into `scenes.ts`.

The required editorial chain for this template is:

1. Upstream memos and diligence lists
2. `sources/competitive-analysis.md`
3. `video/data/scenes.ts`
4. citations, narration, audio, and render artifacts

## Stage 3: Decide Whether the Comparative Project Is Ready for Video

Promote a comparative project into a managed video project only when:

- the upstream project set is stable enough to compare side by side
- the comparative thesis is clear enough to drive a coherent scene sequence
- the comparative analysis is strong enough to support concrete claims,
  rankings, and diligence recommendations
- provenance is complete enough that every scene can be defended from source

Do not promote a comparative project just because multiple memos exist. The
project needs a stable comparative narrative, not just a bundle of inputs.

## Stage 4: Promote to a Managed Comparison Video Project

To promote `projects/<slug>/` into a managed comparison video project, create
this tree:

```text
projects/<slug>/video/
  project.config.json
  project.ts
  compositions/
    <CompositionName>.tsx
  data/
    scene-order.json
    scenes.ts
    citations.ts
    narration.json
    narration.ts
  public/
    audio/
      .gitkeep
  out/
    .gitkeep
```

### Required Files

`project.config.json`

- Defines:
  - `slug`
  - `defaultCompositionId`
  - `defaultOutputName`
  - `runtimeAssetKinds`

`project.ts`

- Exports the project manifest consumed by the shared Remotion root.
- Binds the composition component, dimensions, fps, duration, and title.

`data/scene-order.json`

- The canonical ordered list of comparison scene ids.

`data/scenes.ts`

- The primary typed implementation of the comparative narrative.
- Uses the project-owned synthesis from `competitive-analysis.md`.
- The shared comparison runtime now supports arbitrary company counts via
  array-based scene data.
- When the covered field expands enough to trigger paged layouts, increase
  `durationInFrames` so each page remains readable.

`data/citations.ts`

- Maps scene ids to comparison citations and source footers.

`data/narration.json`

- The canonical narration manifest.
- Must match `scene-order.json` exactly in both count and order.

`data/narration.ts`

- Loads `narration.json` and validates it against the shared schema and
  `scene-order.json`.

`compositions/<CompositionName>.tsx`

- The project-owned Remotion composition.
- Usually imports shared comparison components from `@shared/*`.

## Stage 5: Register the Project in the Shared App

The shared Remotion app only knows about projects that are registered in:

- `video/src/Root.tsx`

To onboard a new comparison project:

1. Import `@projects/<slug>/video/project`
2. Add the manifest to the `projects` array

Until this happens, the project cannot be rendered through the shared app.

## Stage 6: Build the Comparative Video

Once the managed project skeleton exists, use this authoring order:

1. Re-read the full upstream source set
2. Write or update `sources/competitive-analysis.md`
3. Write `data/scenes.ts`
4. Write `data/citations.ts`
5. Write `data/scene-order.json`
6. Write `data/narration.json`
7. Write `data/narration.ts`
8. Build the composition in `compositions/`
9. Export the manifest in `project.ts`

Rules:

- Treat `competitive-analysis.md` as the narrative driver.
- Treat `scenes.ts` as the primary implementation of that approved synthesis.
- Do not change one company's placement without re-evaluating the rest of the
  field.
- Keep compared company slugs stable across scenes, citations, and layout data.
- Keep the presentation institutional, restrained, and deterministic.

### Current Scene Backbone

The live `competitive-landscape` project was devised by mapping the three
covered projects into these seven scenes:

1. `overview`
   - Uses the recommendation sections from all three IC memos plus the market
     overview section of `competitive-analysis.md`.
   - Purpose: frame the market and establish that the comparison is about
     relative execution and risk, not abstract theory.
2. `approaches`
   - Uses company snapshot and operating-model material from all three IC memos
     plus the approach comparison section.
   - Purpose: show the structural model difference between benchmark, index,
     and auction.
3. `traction`
   - Uses the "What appears real today" sections from the three IC memos plus
     the traction comparison section.
   - Purpose: compare dated evidence side by side.
4. `riskComparison`
   - Uses the core-risk sections from all three IC memos plus the risk
     dimension comparison section.
   - Purpose: compare risk profiles on the same dimensions.
5. `gatingIssues`
   - Uses the P0 portions of the three diligence request lists plus the gating
     issues comparison section.
   - Purpose: show which diligence asks are shared and which are company-
     specific.
6. `positioning`
   - Uses traction, regulatory, and bottom-line sections from the IC memos plus
     the relative positioning section.
   - Purpose: place the companies on factually observable spectrums.
7. `recommendation`
   - Uses the bottom-line sections from the three IC memos plus the final
     recommendation section.
   - Purpose: allocate diligence priority across the field.

This scene backbone is what makes the project comparative rather than a stitched
bundle of summaries.

## Stage 7: Install Dependencies

Python dependencies are managed from the repo root:

```bash
uv sync
```

Node dependencies live under `video/`:

```bash
pnpm --dir video install
```

## Stage 8: Generate Audio

Audio is project-aware and generated canonically into:

- `projects/<slug>/video/public/audio/`

Run:

```bash
pnpm --dir video project:audio -- --project <slug>
```

For the current project, the mandated narration voice is `af_bella`.

Important:

- `projects/<slug>/video/public/audio/` is the canonical generated location.
- `video/public/audio/<slug>/` is derived runtime state only.
- Do not hand-edit staged runtime audio.

## Stage 9: Use Remotion Studio

To open the project in Studio:

```bash
pnpm --dir video project:dev -- --project <slug>
```

The current comparison project has four layout-sensitive scenes that should be
checked manually:

- `traction`
- `riskComparison`
- `gatingIssues`
- `positioning`

For larger-field projects, also check:

- `overview`
- `approaches`
- `recommendation`

Verify:

- no content overlaps the footer or progress bar
- all text is fully visible and not truncated
- timeline lanes stay readable and chronologically ordered
- paged cards and matrices stay on screen long enough to read
- spectrum markers remain visually distinguishable

## Stage 10: Run Fast Shared Tests

Run the shared regression-defense layer before any real-project acceptance run:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
pnpm --dir video test:shared
```

## Stage 11: Run Final Acceptance

After the fast shared tests pass, run the end-to-end verification pass for the
real project you changed:

```bash
pnpm --dir video project:verify -- --project <slug>
```

For the current project, this should leave:

- current comparison scene data
- current audio under `projects/competitive-landscape/video/public/audio/`
- a current render at
  `projects/competitive-landscape/video/out/competitive-landscape-v1.mp4`

## Stage 12: Render the Final Video

If you need a render-only pass without rerunning full verification, render the
project with:

```bash
pnpm --dir video project:render -- --project <slug>
```

The current project renders `CompetitiveLandscapeV1` to:

- `projects/competitive-landscape/video/out/competitive-landscape-v1.mp4`

## Stage 13: Review and Iterate

After the first render:

1. Review the MP4 under `projects/<slug>/video/out/`
2. Confirm the claims still match the current upstream source set
3. Update `competitive-analysis.md` before editing scene data if the
   comparative thesis changed
4. Re-run `pnpm --dir video test:shared`
5. Re-run `pnpm --dir video project:verify -- --project <slug>`

If any upstream source changes materially, use this order:

1. Re-read all upstream memos and diligence lists
2. Decide whether `competitive-analysis.md` changes
3. If not, report a no-op
4. If yes, update `competitive-analysis.md`
5. Update `scenes.ts`
6. Update citations and narration
7. Regenerate audio
8. Re-render and verify

## Iteration Workflow Contract

This section defines the re-execution contract for any managed video project
that uses the `competitive-landscape` template.

Core rules:

- Treat upstream project source documents as read-only evidence inputs.
- Treat `projects/<slug>/sources/competitive-analysis.md` as the authoritative
  project-owned comparative narrative.
- Do not introduce any claim in `competitive-analysis.md` that is absent from
  the approved upstream inputs.
- Do not introduce any claim in `scenes.ts` that is absent from
  `competitive-analysis.md`.
- Prefer no-op outcomes over churn when upstream changes do not materially alter
  the relative comparison.
- Re-evaluate the comparison as a full field, not as independent company
  updates.
- Use shared wrapper commands for audio generation, Studio, verification, and
  render.

### Provenance Gate

Before generating narration or audio:

- verify that every factual claim in `scenes.ts` exists in
  `competitive-analysis.md`
- verify that the claim-provenance appendix names a valid upstream source for
  that claim
- remove or rewrite any scene claim that cannot be traced

### Current Upstream Dependency Set

The live project depends on these six source files:

- `projects/ornn/sources/investment-committee-memo.md`
- `projects/ornn/sources/management-diligence-request-list.md`
- `projects/silicon-data/sources/investment-committee-memo.md`
- `projects/silicon-data/sources/management-diligence-request-list.md`
- `projects/auctionomics/sources/investment-committee-memo.md`
- `projects/auctionomics/sources/management-diligence-request-list.md`

Reference examples:

- `_templates/competitive-landscape/COMPETITIVE-LANDSCAPE-ITERATION-PROMPT.xml`
  is the reusable starting point for new comparative projects.
- `projects/competitive-landscape/iteration-prompt.xml` is the current fully
  worked example of a project-specific comparative iteration prompt.

## Artifact Policy

Canonical project-owned generated artifacts:

- `projects/<slug>/video/public/audio/`
- `projects/<slug>/video/out/`

Derived staged runtime artifacts:

- `video/public/audio/<slug>/`
- `video/public/fonts/<slug>/`
- `video/public/marks/<slug>/`
- `video/public/<asset-kind>/<slug>/`

Policy:

- Do not treat `video/public/` as source of truth.
- Do not store raw research captures in `sources/`.
- Do not hand-edit generated WAV metadata as a substitute for fixing
  `narration.json`.
- Keep only `.gitkeep` tracked under generated artifact directories by default.

## Minimum Contract for a New Managed Competitive Landscape Project

Before trying to render a new project, confirm all of the following exist:

- the full upstream dependency set for the comparison
- `projects/<slug>/sources/competitive-analysis.md`
- a claim-provenance appendix inside `competitive-analysis.md`
- `projects/<slug>/video/project.config.json`
- `projects/<slug>/video/project.ts`
- `projects/<slug>/video/compositions/<CompositionName>.tsx`
- `projects/<slug>/video/data/scene-order.json`
- `projects/<slug>/video/data/scenes.ts`
- `projects/<slug>/video/data/citations.ts`
- `projects/<slug>/video/data/narration.json`
- `projects/<slug>/video/data/narration.ts`
- project registration in `video/src/Root.tsx`

If any of these are missing, the project is not fully managed yet.

## Current Template Example

The current managed project that fits this template is:

- `projects/competitive-landscape/`

## Practical Defaults

When creating or revising a project in this template:

- use the current `projects/competitive-landscape/` scene backbone as the
  structural reference
- use the current prompt template and live prompt together when adapting the
  upstream dependency set
- keep comparison dimensions stable unless the comparative thesis really
  changed
- reuse the shared comparison components and validation path rather than
  creating a second custom runtime
