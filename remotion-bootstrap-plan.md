# Remotion Bootstrap Plan

## Purpose

Add Remotion to this repo in a way that is:

- fast to stand up
- easy to review
- isolated from the existing Markdown research files
- stable enough to support the `v1` video plan in `remotion-v1-build-plan.md`

This document covers **bootstrapping only**. It does not cover final scene implementation or editorial polish.

## Current Repo State

Right now this repo is not a JavaScript or React project.

It contains:

- `investment-committee-memo.md`
- `management-diligence-request-list.md`

There is no existing:

- `package.json`
- Node toolchain
- React app
- TypeScript config
- build pipeline

Because of that, the cleanest approach is to **add Remotion as a self-contained sub-project**, not to retrofit the repo root into a frontend workspace.

## Recommended Bootstrap Strategy

Bootstrap Remotion as a standalone app in `video/` using the official scaffold, then customize the generated project for this repo.

### Decision

Use:

- a dedicated `video/` directory
- the official Remotion project scaffold
- the `Hello World` template as the starting point
- TypeScript
- `npm` as the default package manager for v1

### Why this is the right choice

- The repo has no existing JS stack to integrate with.
- A standalone sub-project limits blast radius.
- The official scaffold is lower-risk than assembling a manual brownfield install from scratch.
- The bootstrap can be reviewed independently from the video content work.

## Non-Goals

The bootstrap should **not** try to solve these yet:

- monorepo workspace design
- shared root lint/format tooling
- reusable media platform abstractions
- server-side rendering infrastructure
- cloud render deployment
- generalized template automation

## Bootstrap Outcome

When bootstrapping is complete, this repo should have a functioning Remotion project under `video/` that can:

- open locally in Remotion Studio
- render a placeholder composition to MP4
- provide the file structure needed for the `OrnnIcV1` implementation
- keep generated outputs and dependencies isolated from the repo root

## Environment Decisions

### Runtime

Recommended standard for this repo:

- Node `20 LTS`
- npm

Note:

- Official Remotion docs currently say Remotion requires at least Node `16` or Bun `1.0.3`.
- I am recommending Node `20 LTS` as a project standard because Node `16` is too old for a new setup.

That Node recommendation is an implementation choice, not a direct requirement quoted from the docs.

### Linux considerations

If this repo is bootstrapped on Linux, local rendering may require additional shared libraries for Chrome Headless Shell.

This is a setup risk, not a project-structure risk.

The bootstrap should explicitly include a preflight step for:

- Node version
- npm availability
- libc compatibility
- missing Linux rendering dependencies if local render fails

## Proposed File Layout After Bootstrap

```text
video/
  .gitignore
  package.json
  package-lock.json
  tsconfig.json
  remotion.config.ts
  README.md
  public/
    fonts/
    marks/
  src/
    index.ts
    Root.tsx
    compositions/
      OrnnIcV1.tsx
    components/
    data/
    utils/
  out/
```

Notes:

- `video/` should own its own dependency graph.
- `video/.gitignore` should ignore `node_modules/` and render outputs.
- The repo root should remain mostly unchanged.

## Bootstrap Phases

### Phase 1. Preflight

Estimated effort: `20-40 minutes`

Tasks:

- confirm Node and npm are available
- confirm the chosen Node version meets the repo standard
- confirm Linux prerequisites if applicable
- decide whether bootstrapping will happen with `npm`

Deliverables:

- confirmed local runtime choice
- confirmed ability to run Remotion locally

Exit criteria:

- no blocker remains around runtime or OS dependencies

### Phase 2. Scaffold the project

Estimated effort: `20-40 minutes`

Tasks:

- create `video/` using the official Remotion scaffold
- select the `Hello World` template
- select TypeScript
- install dependencies

Deliverables:

- generated Remotion starter app in `video/`

Exit criteria:

- the generated app starts successfully

## Phase 3. Normalize the generated app for this repo

Estimated effort: `45-75 minutes`

Tasks:

- replace scaffold naming with repo-specific naming
- standardize the main composition name to `OrnnIcV1`
- add the target folders from the v1 plan
- remove starter assets and example components that are not needed
- make sure all Remotion packages stay on the exact same version

Deliverables:

- cleaned project structure aligned to the v1 implementation plan

Exit criteria:

- the scaffold no longer looks like generic starter code

### Phase 4. Add repo-facing scripts and documentation

Estimated effort: `30-60 minutes`

Tasks:

- define scripts for local development and rendering
- add a short `video/README.md`
- document where final renders go
- document the single entrypoint and main composition

Recommended scripts:

- `npm run dev`
- `npm run render`
- `npm run typecheck`

Deliverables:

- predictable commands for any reviewer using the repo

Exit criteria:

- a reviewer can enter `video/` and understand how to run it quickly

### Phase 5. Smoke test

Estimated effort: `30-60 minutes`

Tasks:

- start Remotion Studio locally
- render a placeholder MP4
- verify the output path
- verify there is no dependency leakage into the repo root

Deliverables:

- one successful local render
- one known-good bootstrap state

Exit criteria:

- `video/` is ready for scene implementation

## Exact Bootstrap Deliverables

The bootstrap should produce these concrete artifacts.

### Required files

- `video/package.json`
- `video/tsconfig.json`
- `video/remotion.config.ts`
- `video/.gitignore`
- `video/README.md`
- `video/src/index.ts`
- `video/src/Root.tsx`
- `video/src/compositions/OrnnIcV1.tsx`

### Required behavior

- `npm install` works inside `video/`
- `npm run dev` starts the local project
- `npm run render` renders a placeholder video
- output is written under `video/out/`

### Required cleanup

- no new root-level `package.json`
- no root-level `node_modules/`
- no accidental coupling between root Markdown files and Remotion runtime code

## Acceptance Criteria

Bootstrapping is complete when all of the following are true:

- Remotion lives entirely under `video/`
- the generated project has been renamed and normalized for this repo
- the main composition is named `OrnnIcV1`
- the project starts locally without manual patching after install
- a placeholder MP4 can be rendered end to end
- generated files and dependencies are appropriately ignored
- the project structure matches the needs of `remotion-v1-build-plan.md`

## Estimated Effort

Expected effort for the bootstrap only:

- Low end: `2.5 hours`
- Likely: `3.5-5 hours`
- High end with Linux dependency friction: `5-7 hours`

This estimate excludes:

- scene design
- editorial extraction
- motion design polish
- review iterations on the actual video

## Main Risks

- local Linux rendering may need extra shared libraries
- scaffolded starter code can leave unnecessary noise if not cleaned immediately
- version drift across `remotion` and `@remotion/*` packages can create avoidable issues
- if bootstrap grows into root-level tooling design, scope will expand for no reason

## Recommendation

Proceed with a **scaffold-first, isolated bootstrap** in `video/`.

That keeps the technical setup simple and gives us the fastest path to starting actual video work without overdesigning the repo.

## References

Official Remotion docs reviewed for this plan:

- Creating a new project: https://www.remotion.dev/docs/
- Installing Remotion in an existing project: https://www.remotion.dev/docs/brownfield
- Linux dependencies: https://www.remotion.dev/docs/miscellaneous/linux-dependencies
