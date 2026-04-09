# Project HOWTO

This document describes the end-to-end workflow for taking a project from raw
research to a managed video project and then producing a final rendered video
artifact in this repository.

It is intentionally repo-specific. It describes the current contract used by the
shared Remotion app under `video/` and the project-owned content under
`projects/<slug>/`.

## Project States

Projects in this repo live in one of two states:

1. Research-only project
   - The project has collected evidence and source material.
   - It is not yet wired into the shared Remotion/audio pipeline.
   - No committed example today.
2. Managed video project
   - The project owns typed scene data, narration, composition code, audio
     artifacts, and render outputs.
   - It is registered in the shared Remotion app and can be rendered with the
     shared commands.
   - Examples today: `projects/ornn/`, `projects/silicon-data/`

## Repo Layout

At a high level:

```text
projects/
  <slug>/
    research/                      # optional evidence gathering and notes
    research-brief.md              # optional project brief
    sources/                       # authoritative source docs for the video
    iteration-prompt.xml           # optional project workflow prompt
    v1-review-notes.md             # optional project review notes
    management-response-evaluation-guide.md
    video/                         # present only after promotion to managed project
      project.config.json
      project.ts
      compositions/
      data/
      public/
      out/

video/
  src/                             # shared Remotion app
  public/                          # derived staged runtime assets only
  README.md                        # shared infra commands

scripts/
  generate-audio.py                # shared project-aware audio tool
  project.mjs                      # shared wrapper for stage/audio/dev/render
  project-verify.mjs               # shared verification wrapper
```

## Stage 1: Research Collection

Start by creating or maintaining a research-only project directory:

```text
projects/<slug>/
  research/
  research-brief.md
  sources/
```

Recommended research material:

- `projects/<slug>/research-brief.md`
  - high-level framing for what the project is and why it matters
- `projects/<slug>/research/gaps.md`
  - unresolved diligence questions and missing evidence
- `projects/<slug>/research/sources.md`
  - index of collected evidence
- `projects/<slug>/research/web/*.md`
  - captured pages, excerpts, and source-specific notes

This research material is working context. It is not yet the canonical input to
the video pipeline.

## Stage 2: Produce the Authoritative Source Documents

The video workflow depends on project-owned source documents under:

```text
projects/<slug>/sources/
```

For a full investment-committee style project, the expected files are:

- `projects/<slug>/sources/investment-committee-memo.md`
  - the primary narrative source for the video
- `projects/<slug>/sources/management-diligence-request-list.md`
  - the primary source for open asks and management follow-up
- `projects/<slug>/sources/management-response-evaluation-guide.md`
  - recommended companion document for evaluating responses

For the current managed video workflow, the first two files are the critical
inputs. They should be treated as authoritative and stable in naming.

Rules for these source documents:

- Keep them under `projects/<slug>/sources/`.
- Use markdown.
- Treat them as human-authored editorial inputs, not generated scene data.
- Do not mix raw web captures into `sources/`; keep those in `research/`.
- When the memo or diligence list changes materially, the downstream scene data,
  narration, audio, and final render must be regenerated.

## Stage 3: Decide Whether the Project Is Ready for Video

Promote a project from research-only to managed video only when:

- the memo is strong enough to support a coherent scene sequence
- the diligence list is clear enough to support a closing ask set
- the evidence base is stable enough to freeze a first video version

Do not promote a project just because research exists. The managed project
contract adds code, generated artifacts, and validation requirements.

## Stage 4: Promote to a Managed Video Project

To promote `projects/<slug>/` into a managed video project, create this tree:

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
- This is the project-owned runtime contract used by the shared wrapper.

`project.ts`

- Exports the project manifest consumed by the shared Remotion root.
- Binds the composition component, dimensions, fps, duration, and title.

`data/scene-order.json`

- The canonical ordered list of scene ids.
- This file is shared across:
  - runtime narration validation
  - audio generation validation
  - staged-audio completeness checks

`data/scenes.ts`

- The primary typed implementation of the narrative.
- Defines:
  - scene ids
  - durations
  - text content
  - layout-facing data

`data/citations.ts`

- Maps scene ids to citation footer entries.

`data/narration.json`

- The canonical narration manifest.
- Must contain one entry per scene.
- Must match `scene-order.json` exactly in both count and order.

`data/narration.ts`

- Loads `narration.json` and validates it against the shared schema and
  `scene-order.json`.

`compositions/<CompositionName>.tsx`

- The project-owned Remotion composition.
- Usually imports shared components from `@shared/*`.
- Imports project-owned data from relative `../data/*` paths.

### Optional Runtime Assets

If the project needs project-specific runtime assets, store them under:

- `projects/<slug>/video/public/fonts/`
- `projects/<slug>/video/public/marks/`
- or another project-specific runtime directory

If you do this, declare the asset kind in `project.config.json` under
`runtimeAssetKinds`.

The shared wrapper will stage those directories into:

- `video/public/fonts/<slug>/`
- `video/public/marks/<slug>/`
- `video/public/<asset-kind>/<slug>/`

## Stage 5: Register the Project in the Shared App

The shared Remotion app only knows about projects that are registered in:

- `video/src/Root.tsx`

To onboard a new project:

1. Import `@projects/<slug>/video/project`
2. Add the manifest to the `projects` array

Until this happens, the project cannot be rendered through the shared app.

## Stage 6: Author the First Video Version

Once the managed project skeleton exists, the normal authoring order is:

1. Write `data/scenes.ts`
2. Write `data/citations.ts`
3. Write `data/scene-order.json`
4. Write `data/narration.json`
5. Write `data/narration.ts`
6. Build the project composition in `compositions/`
7. Export the manifest in `project.ts`

Rules:

- Treat `scenes.ts` as the primary narrative implementation.
- Keep scene ids stable unless a real editorial change requires renaming.
- Keep `narration.json` scene ids aligned with `scene-order.json`.
- Keep citation entries aligned with what the scene actually claims.
- Reuse the shared visual system unless there is a strong reason not to.

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

What this does:

1. Validates `narration.json`
2. Validates that it matches `scene-order.json`
3. Generates or reuses one WAV per scene under
   `projects/<slug>/video/public/audio/`
4. Writes matching JSON metadata files
5. Stages the runtime copy into `video/public/audio/<slug>/`

Important:

- `projects/<slug>/video/public/audio/` is the canonical generated location.
- `video/public/audio/<slug>/` is derived runtime state only.
- Do not hand-edit staged runtime audio.

## Stage 9: Use Remotion Studio

To open the project in Studio:

```bash
pnpm --dir video project:dev -- --project <slug>
```

This stages runtime assets first, then opens Remotion Studio.

Use Studio to:

- confirm the composition is registered
- inspect typography and layout
- confirm staged audio is present
- catch obvious timing or visual regressions

## Stage 10: Run Fast Shared Tests

Run the shared regression-defense layer before any real-project acceptance run:

```bash
pnpm --dir video typecheck:test
pnpm --dir video test:run
uv run --project . python -m pytest
pnpm --dir video test:shared
```

Use `pnpm --dir video test:shared` as the default fast local gate when you want
one command that runs test TypeScript checks and both runtimes.

These tests cover the shared narration validator, scene-order timeline logic,
shared `project.config.json` validation, workflow helper behavior, fixture
project layout contracts, and the import-safe Python narration validation
helpers.

## Stage 11: Run Final Acceptance

After the fast shared tests pass, run the end-to-end verification pass for the
real project you changed:

```bash
pnpm --dir video project:verify -- --project <slug>
```

`project:verify` remains the final acceptance gate. It does:

1. `typecheck`
2. `lint`
3. project audio generation and staging through `project:audio`
4. a render using the project's default output name from `project.config.json`
5. a final output-file existence check

Keep Studio checks manual through `project:dev`; do not treat Studio startup as
an automated test target.

If you want one command that runs the layered path for one or more real
projects, use:

```bash
pnpm --dir video acceptance -- --project <slug>
pnpm --dir video acceptance -- --all
```

## Stage 12: Render the Final Video

If you need a render-only pass without rerunning full verification, render the
project with:

```bash
pnpm --dir video project:render -- --project <slug>
```

This uses the defaults from `projects/<slug>/video/project.config.json`:

- `defaultCompositionId`
- `defaultOutputName`

The final canonical output is written to:

- `projects/<slug>/video/out/<defaultOutputName>`

You can override the output name if needed:

```bash
pnpm --dir video project:render -- --project <slug> --output-name custom-name.mp4
```

## Stage 13: Review and Iterate

After the first render:

1. Review the MP4 under `projects/<slug>/video/out/`
2. Capture review notes under `projects/<slug>/v1-review-notes.md` if useful
3. Update:
   - `scenes.ts` for editorial changes
   - `citations.ts` for evidence changes
   - `narration.json` for audio copy changes
   - composition code only when layout or motion changes are needed
4. Re-run `pnpm --dir video test:shared`
5. Re-run `pnpm --dir video project:verify -- --project <slug>`

If the primary source documents changed materially, rerun the full chain:

1. update `scenes.ts`
2. update `citations.ts`
3. update `narration.json`
4. run `pnpm --dir video test:shared`
5. run `pnpm --dir video project:verify -- --project <slug>`

Manual sign-off checklist for shared workflow changes:

- `pnpm --dir video typecheck:test` passed
- `pnpm --dir video test:run` passed
- `uv run --project . python -m pytest` passed
- the required real-project `pnpm --dir video project:verify -- --project <slug>` runs passed

## Iteration Workflow Contract

This section defines the generic re-execution contract for any managed video
project in this repo.

Project-specific prompts may add editorial detail, project tone, scene
backbones, output names, or reporting expectations, but they should not weaken
these repo-level rules.

Core rules:

- Treat the project's canonical source documents under `projects/<slug>/sources/`
  as the authoritative editorial inputs.
- Do not rewrite source documents during normal implementation work unless the
  user explicitly asks for source-document edits.
- Do not supplement the project's source documents with outside research by
  default.
- Treat iteration as manual editorial curation from source prose into typed
  scene data. Do not build or rely on a generic markdown-to-slides pipeline.
- Start by inspecting current repo state, including uncommitted changes, so you
  do not overwrite unrelated work.
- Compare current source documents against the existing implementation before
  editing. Do not assume every iteration requires broad rewrites.
- Treat `projects/<slug>/video/data/scenes.ts` as the primary implementation of
  the narrative. Update it first, then update citations, narration, and
  composition/layout code only where the editorial delta requires it.
- Keep stable scene ids, composition ids, filenames, and component structure
  unless a real editorial or structural change requires otherwise.
- Prefer no-op outcomes over churn. If the current implementation already
  matches the source documents and the generated artifacts are current, report a
  no-op rather than rewriting code or regenerating outputs unnecessarily.
- If a canonical source document changes materially, rerun the full derived
  artifact chain: scene data, citations, narration inputs, canonical audio, and
  final render.
- If source documents did not change materially but canonical audio artifacts or
  the final render are missing or stale, regenerate only the missing or stale
  artifacts without unnecessary source edits.
- A source-driven rerun is not complete until the final rendered artifact is
  refreshed and consistent with the current source documents and typed data.
- Treat `projects/<slug>/video/public/` and `projects/<slug>/video/out/` as the
  canonical generated artifact locations. Treat `video/public/<asset-kind>/<slug>/`
  as derived staging for runtime use only.
- Use the shared project wrapper commands for audio generation, staging, Studio,
  verification, and render. Do not create project-specific
  ad hoc execution paths unless the repo workflow itself is changing.

Reference example:

- `projects/ornn/iteration-prompt.xml` is the current fully worked example of a
  project-specific iteration prompt in this repo.
- Use it as a model for the level of detail expected in a project prompt, while
  keeping repo-wide workflow rules centralized in this HOWTO.

## Artifact Policy

Generated artifacts are intentionally split into canonical and derived locations.

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

## Minimum Contract for a New Managed Project

Before trying to render a new project, confirm all of the following exist:

- `projects/<slug>/sources/investment-committee-memo.md`
- `projects/<slug>/sources/management-diligence-request-list.md`
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

## Silicon Data Status

`projects/silicon-data/` is now the second managed video project in this repo.
Its source documents remain under `projects/silicon-data/sources/`, and its
managed video implementation lives under `projects/silicon-data/video/`.

## Practical Defaults

When creating a new managed project, start by copying an existing managed
project shape and then replacing only project-owned data and composition
details.

Use Ornn or Silicon Data as the structural reference for:

- `projects/ornn/video/project.config.json`
- `projects/ornn/video/project.ts`
- `projects/ornn/video/data/`
- `projects/ornn/video/compositions/`
- `projects/silicon-data/video/project.config.json`
- `projects/silicon-data/video/project.ts`
- `projects/silicon-data/video/data/`
- `projects/silicon-data/video/compositions/`

Reuse the shared app. Do not create a second Remotion app per project.
