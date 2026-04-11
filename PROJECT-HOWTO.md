# Project HOWTO

This document is the repo-level entry point for project workflows.

The real operating HOWTOs now live under `_templates/`. Use this file to choose
the right project template, then follow the concrete template-specific guide.

## Choose a Template

Use the `ic-memo` template for a single-company investment-committee style
video driven by project-owned memo and diligence documents.

- HOWTO: [IC-MEMO-HOWTO.md](_templates/ic-memo/IC-MEMO-HOWTO.md)
- Iteration-prompt template:
  [IC-MEMO-ITERATION-PROMPT.xml](_templates/ic-memo/IC-MEMO-ITERATION-PROMPT.xml)
- Current examples: `projects/ornn/`, `projects/silicon-data/`,
  `projects/auctionomics/`

Use the `competitive-landscape` template for a comparative synthesis video that
combines two or more existing IC projects into one side-by-side view.

- HOWTO:
  [COMPETITIVE-LANDSCAPE-HOWTO.md](_templates/competitive-landscape/COMPETITIVE-LANDSCAPE-HOWTO.md)
- Iteration-prompt template:
  [COMPETITIVE-LANDSCAPE-ITERATION-PROMPT.xml](_templates/competitive-landscape/COMPETITIVE-LANDSCAPE-ITERATION-PROMPT.xml)
- Current example: `projects/competitive-landscape/`

## Repo-Wide Conventions

These rules apply regardless of template:

- Managed projects live under `projects/<slug>/`.
- Every template has canonical project-owned inputs under `projects/<slug>/sources/`.
- Some templates, such as `competitive-landscape`, also declare explicit
  read-only upstream inputs from other projects' `sources/` directories.
- Managed project runtime code lives under `projects/<slug>/video/`.
- Canonical generated artifacts live under:
  - `projects/<slug>/video/public/audio/`
  - `projects/<slug>/video/out/`
- `video/public/` is derived staging only, not source of truth.
- Managed projects must be registered in `video/src/Root.tsx`.
- Use the shared wrapper commands for audio, Studio, render, and verify:
  - `pnpm --dir video project:audio -- --project <slug>`
  - `pnpm --dir video project:dev -- --project <slug>`
  - `pnpm --dir video project:render -- --project <slug>`
  - `pnpm --dir video project:verify -- --project <slug>`
- Use `pnpm --dir video test:shared` as the default fast shared gate.

## Project States

Projects in this repo usually live in one of two states:

1. Research-only project
   - Evidence and working materials exist under `projects/<slug>/`.
   - The project is not yet wired into the shared Remotion and audio pipeline.
2. Managed video project
   - The project owns source documents, typed scene data, narration,
     composition code, audio artifacts, and render outputs.
   - The project is registered in the shared Remotion app and can be rendered
     with the shared commands.

## Minimal Managed Contract

Before trying to render a managed project, confirm all of the following exist:

- the source-document set required by the chosen template
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

## Practical Defaults

When creating a new managed project:

- choose the template first
- copy the matching iteration-prompt template into `projects/<slug>/`
- copy an existing project shape from the same template family
- keep the shared app and wrapper commands intact unless the repo workflow
  itself is changing

For shared video infrastructure commands and local Remotion details, see
[video/README.md](video/README.md).
