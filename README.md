# ORNN Project Video Workspace

This repository is a project-to-video production workspace. It collects project
research, turns selected projects into managed video projects, and renders final
video artifacts through a shared Remotion app.

The repo is designed so project content stays project-owned, while reusable
video infrastructure stays shared. A project owns its source documents, scene
data, narration, composition code, canonical audio artifacts, and final renders
under `projects/<slug>/`. The shared app under `video/` provides the common
Remotion runtime, components, validation logic, and package scripts used by all
managed projects.

## Current Managed Projects

- `projects/ornn/`
- `projects/silicon-data/`

Each managed project has a `video/` directory with a `project.config.json`,
typed scene data, narration data, composition code, canonical public assets, and
render outputs.

## How The Repo Is Devised

The workflow has three main layers:

1. **Project research and source material**
   - Lives under `projects/<slug>/research/` and `projects/<slug>/sources/`.
   - Contains the evidence, briefs, memos, and diligence material that drive the
     video.

2. **Project-owned video content**
   - Lives under `projects/<slug>/video/`.
   - Defines the project runtime config, scene order, narration manifest,
     project composition, canonical audio, and final output files.

3. **Shared video and workflow infrastructure**
   - Lives under `video/` and `scripts/`.
   - Provides the shared Remotion app, reusable validation code, audio
     generation tooling, staging commands, render commands, and verification
     commands.

`video/public/` is derived runtime state used by Studio and renders. Treat the
canonical project assets under `projects/<slug>/video/public/` as the source of
truth.

## Common Commands

Install the toolchains:

```bash
pnpm --dir video install
uv sync
```

Run the fast shared test gate:

```bash
pnpm --dir video test:shared
```

Run final verification for a managed project:

```bash
pnpm --dir video project:verify -- --project <slug>
```

Run the full layered acceptance path:

```bash
pnpm --dir video acceptance -- --project <slug>
pnpm --dir video acceptance -- --all
```

## Adding New Content

Use [PROJECT-HOWTO.md](PROJECT-HOWTO.md) as the authoritative guide for adding
or changing project content. It explains how to move from research collection to
source documents, how to promote a project into a managed video project, how to
structure scene and narration data, and how to run the final verification path.

For shared video infrastructure commands and local Remotion details, see
[video/README.md](video/README.md).
