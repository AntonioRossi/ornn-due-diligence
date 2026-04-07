# Multi-project implementation plan v2

Turn the current single-project Ornn repo into a repo that can host multiple
independent research/video projects without cloning the shared Remotion app or
the shared Python audio toolchain.

## What changes and what stays shared

- Project-owned:
  - source documents
  - project notes and review docs
  - iteration prompt
  - scene data, citations, and narration inputs
  - project composition file
  - generated project audio and rendered outputs
- Shared:
  - `video/src/components/`
  - `video/src/theme.ts`
  - `video/src/utils/`
  - `video/src/index.ts`
  - `video/src/Root.tsx`
  - `video/eslint.config.mjs`
  - `video/remotion.config.ts`
  - `scripts/generate-audio.py`
  - `scripts/project.mjs`
  - root Python dependency management in `pyproject.toml` and `uv.lock`
- Derived staging only:
  - `video/public/audio/<project>/`
  - `video/out/`
- Non-goal:
  - do not turn the repo root into a pnpm workspace right now
  - `video/` remains a standalone Node project inside the repo

## Repo facts this plan assumes

- There is no `pnpm-workspace.yaml` today.
- `video/public/audio/*` and `video/out/*` are already scratch/output
  directories that are ignored by git, with only `.gitkeep` tracked.
- `projects/silicon-data/` already exists, but today it is a research/source
  tree rather than an onboarded Remotion/audio project.
- `management-response-evaluation-guide.md` is Ornn-specific and should move
  with the rest of the Ornn project materials.
- This plan must not assume docx exports or helper scripts exist in git. If
  local-only files exist on disk, move them manually under the matching project
  root, but do not make the tracked migration depend on them.

## Scope of this migration

- Ornn is the first project being migrated into the shared `video/` app.
- `projects/silicon-data/` remains in its current research/source-only shape
  during this migration. Do not force it into the target `video/` subtree yet.
- Any new shared rules introduced here must tolerate projects that exist in
  `projects/<slug>/` without yet being wired into Remotion or the audio
  pipeline.

## Target layout

```text
projects/
  ornn/
    README.md                         # optional project-only notes
    iteration-prompt.xml
    v1-review-notes.md
    management-response-evaluation-guide.md
    sources/
      investment-committee-memo.md
      management-diligence-request-list.md
    video/
      project.ts                      # project manifest consumed by shared app
      data/
        scenes.ts                     # renamed from ornn-ic-v1.ts
        citations.ts
        narration.json
        narration.ts
      compositions/
        OrnnIcV1.tsx
      public/
        audio/                        # project-owned generated WAV + metadata
      out/                            # project-owned renders + stills

video/
  README.md                           # shared infrastructure + commands
  public/
    audio/
      .gitkeep
      <project>/...                   # derived staging rebuilt by wrapper
    fonts/
    marks/
  out/
    .gitkeep                          # optional shared scratch renders only
  src/
    index.ts
    Root.tsx
    components/
    theme.ts
    utils/
    types.ts                          # only minimal shared contracts
  eslint.config.mjs
  package.json
  remotion.config.ts
  tsconfig.json

scripts/
  generate-audio.py                   # shared, project-aware
  project.mjs                         # shared wrapper for stage/dev/render

pyproject.toml
uv.lock
```

## Artifact and review policy

Make the generated-artifact policy explicit instead of leaving it implicit.

- Check in:
  - source documents
  - prompts and notes
  - TypeScript/TSX source
  - shared tooling
- Ignore generated artifacts:
  - `projects/*/video/public/audio/*`
  - `projects/*/video/out/*`
  - `video/public/audio/<project>/*`
  - `video/out/*`
- Keep `.gitkeep` files only where empty directories are useful.
- Rationale:
  - WAV, JSON metadata, MP4, and still exports are reproducible outputs and are
    too noisy for normal review.
  - The authoritative source of truth is the checked-in editorial and code
    inputs, not the binary outputs.
- If the team later decides to review generated binaries in PRs, change that in
  a separate policy decision. Do not mix it into this migration.

## Import and runtime boundary rules

- Shared app code may import project manifests through `@projects/*`.
- Project code may import shared code through `@shared/*`.
- Project-local modules may import each other with short relative paths inside
  the project tree.
- Do not use deep relative traversals such as `../../../../video/src/...`
  across the shared/project boundary.
- `video/public/` is runtime staging only. Project code must never treat it as
  canonical storage.

## Phase 1 - Establish `projects/ornn/`

### 1.1 Move primary source documents

```text
investment-committee-memo.md                -> projects/ornn/sources/
management-diligence-request-list.md        -> projects/ornn/sources/
```

### 1.2 Move Ornn-specific supporting docs

```text
management-response-evaluation-guide.md     -> projects/ornn/
remotion-video-iteration-prompt.xml         -> projects/ornn/iteration-prompt.xml
video/v1-review-notes.md                    -> projects/ornn/v1-review-notes.md
```

### 1.3 Optional local-only artifacts

If there are untracked docx exports, reference docs, or helper scripts on disk,
move them manually under `projects/ornn/`. Do not make the tracked migration
depend on files that are not currently in the repo.

## Phase 2 - Move Ornn-owned video code and outputs

### 2.1 Move project data and composition files

```text
video/src/data/ornn-ic-v1.ts                -> projects/ornn/video/data/scenes.ts
video/src/data/citations.ts                 -> projects/ornn/video/data/citations.ts
video/src/data/narration.json               -> projects/ornn/video/data/narration.json
video/src/data/narration.ts                 -> projects/ornn/video/data/narration.ts
video/src/compositions/OrnnIcV1.tsx         -> projects/ornn/video/compositions/OrnnIcV1.tsx
```

### 2.2 Move generated outputs into the project tree

```text
video/public/audio/*.wav                    -> projects/ornn/video/public/audio/
video/public/audio/*.json                   -> projects/ornn/video/public/audio/
video/out/ornn-ic-v1.mp4                    -> projects/ornn/video/out/
video/out/stills/*                          -> projects/ornn/video/out/stills/
```

For the extra one-off stills currently under `video/out/`, either move them
into `projects/ornn/video/out/` if they are still useful or delete them if they
are stale workbench artifacts.

### 2.3 Create `projects/ornn/video/project.ts`

This file is the shared app's registry entrypoint for the Ornn project. Keep it
small and browser-safe. It should describe the composition, not filesystem
operations.

```tsx
import type {ProjectManifest} from "@shared/types";
import {OrnnIcV1} from "./compositions/OrnnIcV1";
import {ornnIcV1, totalDurationInFrames} from "./data/scenes";

export const ornnProject: ProjectManifest = {
  slug: "ornn",
  compositionId: "OrnnIcV1",
  title: ornnIcV1.meta.title,
  component: OrnnIcV1,
  fps: ornnIcV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
};
```

Do not force the Node wrapper to import TSX just to discover output paths. The
wrapper should derive project paths from the project slug and shared
conventions.

## Phase 3 - Wire the shared Remotion app to project directories

Treat Phase 3.1 through 3.4 as one atomic cutover. TypeScript aliases without
matching webpack aliases, or registry changes without updated project imports,
leave the shared app broken. Land and verify this block together.

### 3.1 Add explicit TypeScript path aliases and includes

Update `video/tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["src/*"],
      "@projects/*": ["../projects/*"]
    }
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "../projects/*/video/**/*.ts",
    "../projects/*/video/**/*.tsx"
  ],
  "exclude": ["remotion.config.ts"]
}
```

Use explicit `include` patterns so project code is typechecked intentionally
rather than only incidentally through imports.

### 3.2 Mirror the aliases in `video/remotion.config.ts`

Remotion uses webpack internally. The alias rules in webpack must match the
rules in TypeScript.

Spell this out explicitly rather than leaving it implied:

```ts
import path from "node:path";
import {fileURLToPath} from "node:url";
import {Config} from "@remotion/cli/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

Config.overrideWebpackConfig((currentConfig) => {
  currentConfig.resolve = currentConfig.resolve ?? {};
  currentConfig.resolve.alias = {
    ...(currentConfig.resolve.alias ?? {}),
    "@shared": path.resolve(__dirname, "src"),
    "@projects": path.resolve(__dirname, "../projects"),
  };
  return currentConfig;
});
```

Keep the existing `Config.setVideoImageFormat()` and
`Config.setOverwriteOutput()` calls alongside this override.

### 3.3 Turn `video/src/Root.tsx` into a manifest registry

```tsx
import {Composition} from "remotion";
import {ornnProject} from "@projects/ornn/video/project";

const projects = [ornnProject];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <Composition
          key={project.compositionId}
          id={project.compositionId}
          component={project.component}
          durationInFrames={project.durationInFrames}
          fps={project.fps}
          width={project.width}
          height={project.height}
        />
      ))}
    </>
  );
};
```

### 3.4 Update imports inside `projects/ornn/video/compositions/OrnnIcV1.tsx`

- Shared imports move to `@shared/*`.
- Project-local imports stay relative inside `projects/ornn/video/`.
- The audio path must include the project namespace.
- This change depends on `scripts/project.mjs` staging audio into
  `video/public/audio/ornn/` before every Studio or render run. Do not leave
  staging as a manual prerequisite.

```tsx
import {Frame} from "@shared/components/Frame";
import {theme} from "@shared/theme";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";

const sceneAudio = (sceneId: keyof typeof narrationByScene) =>
  staticFile(`audio/ornn/${narrationByScene[sceneId].sceneId}.wav`);
```

## Phase 4 - Generalize the audio and staging pipeline

### 4.1 Add `--project` to `scripts/generate-audio.py`

The script currently hardcodes Ornn's single-project paths. Make it
project-aware:

```bash
python scripts/generate-audio.py --project ornn
```

Internally:

```python
PROJECT_DIR = ROOT / "projects" / args.project
NARRATION_PATH = PROJECT_DIR / "video" / "data" / "narration.json"
AUDIO_DIR = PROJECT_DIR / "video" / "public" / "audio"
```

Keep `--scene`, `--force`, and `--check-only` behavior unchanged.

Allow a short-lived default to Ornn only during the migration if that keeps the
repo working between commits. Remove that default once the wrapper and docs have
been updated.

### 4.2 Add `scripts/project.mjs`

This wrapper owns cross-project staging and command dispatch. Implement it in
Node, not shell-specific `cp`, `rsync`, or environment-variable tricks.

Suggested commands:

```bash
node ../scripts/project.mjs stage --project ornn
node ../scripts/project.mjs audio --project ornn
node ../scripts/project.mjs dev --project ornn
node ../scripts/project.mjs render --project ornn --composition OrnnIcV1 --output-name ornn-ic-v1.mp4
```

Command contract:

- `stage --project <slug>`
  - rebuild `video/public/audio/<slug>/` from canonical project audio files
- `audio --project <slug> [-- <python-args...>]`
  - run the Python generator for the project, then restage audio
- `dev --project <slug>`
  - restage audio, then launch `remotion studio src/index.ts`
- `render --project <slug> --composition <compositionId> [--output-name <file.mp4>]`
  - restage audio, then render the requested composition into the project-owned
    output directory

Implementation strategy:

- Resolve the repo root with `fileURLToPath(import.meta.url)` and `node:path`.
  Do not depend on `process.cwd()` for correctness.
- Use `node:fs/promises` for directory creation, cleanup, file enumeration, and
  copying. Clear only `video/public/audio/<project>/`, not the entire staging
  tree.
- Copy only `.wav` and `.json` files from `projects/<project>/video/public/audio/`
  into `video/public/audio/<project>/`. Missing canonical audio should fail fast
  with a clear message that points users at `project:audio`.
- Use a small `run(command, args, {cwd, env})` helper around
  `child_process.spawn()` with `stdio: "inherit"` and exit-code propagation.
- When invoking Python, run from `video/` and default these env vars if they
  are unset:
  - `UV_CACHE_DIR=<repo>/.uv-cache`
  - `HF_HOME=<repo>/.hf-home`
  - `HUGGINGFACE_HUB_CACHE=<repo>/.hf-home/hub`
- Invoke audio generation as:

```bash
uv run --project .. python ../scripts/generate-audio.py --project <slug>
```

- `audio` must run Python generation first and then `stage`.
- `dev` must always run `stage` first so `staticFile("audio/<slug>/...")`
  resolves without a separate manual setup step.
- `render` must always run `stage` first, ensure
  `projects/<slug>/video/out/` exists, and then invoke:

```bash
remotion render src/index.ts <compositionId> ../projects/<slug>/video/out/<output-name>
```

Prefer deterministic copying over symlinks. Symlinks are acceptable only as a
developer convenience, not as a correctness requirement.

### 4.3 Update `video/package.json` scripts and lint coverage

Keep ergonomic shortcuts for the current Ornn project, but make the generic
project-aware commands first-class:

```jsonc
{
  "scripts": {
    "project:audio": "node ../scripts/project.mjs audio",
    "project:dev": "node ../scripts/project.mjs dev",
    "project:render": "node ../scripts/project.mjs render",
    "audio:generate": "node ../scripts/project.mjs audio --project ornn",
    "dev": "node ../scripts/project.mjs dev --project ornn",
    "render": "node ../scripts/project.mjs render --project ornn --composition OrnnIcV1 --output-name ornn-ic-v1.mp4",
    "typecheck": "tsc --noEmit",
    "lint": "eslint \"src/**/*.ts\" \"src/**/*.tsx\" \"../projects/**/*.ts\" \"../projects/**/*.tsx\""
  }
}
```

Also update the package description so it no longer claims that `video/` is an
Ornn-only app.

Do not use `--ext` here. This repo uses ESLint 9 flat config, where that flag
is not available.

## Phase 5 - Extract only the minimal shared types

Do this after the file moves, not before.

Create `video/src/types.ts` with only the contracts that are already clearly
shared:

```typescript
import type React from "react";

export interface ProjectManifest {
  readonly slug: string;
  readonly compositionId: string;
  readonly title: string;
  readonly component: React.ComponentType;
  readonly fps: number;
  readonly durationInFrames: number;
  readonly width: number;
  readonly height: number;
}

export interface NarrationEntry<S extends string = string> {
  readonly sceneId: S;
  readonly text: string;
  readonly voice?: string;
  readonly langCode?: string;
  readonly speed?: number;
  readonly maxDurationFrames: number;
}

export type CitationMap<S extends string = string> = Record<S, readonly string[]>;
```

Do not invent a generic scene-data interface yet. The current scene payloads are
editorial data, and the shared structure is not proven with only one project.

## Phase 6 - Rewrite docs and prompts for the new layout

### 6.1 Rewrite `video/README.md` as shared infrastructure docs

It should describe:

- where project source documents live
- the shared `video/` app structure
- the wrapper-based commands
- the staging model for audio assets

It should no longer point at root-level Ornn files as if they were still the
canonical inputs.

### 6.2 Move and rewrite the iteration prompt

After moving:

```text
remotion-video-iteration-prompt.xml -> projects/ornn/iteration-prompt.xml
```

Update the prompt so every path reflects the new layout, including:

- primary sources under `projects/ornn/sources/`
- review notes under `projects/ornn/`
- implementation files under `projects/ornn/video/`
- generated audio under `projects/ornn/video/public/audio/`
- rendered output under `projects/ornn/video/out/`

### 6.3 Add `projects/ornn/README.md` only if it is useful

Keep project-only notes there. Do not duplicate the shared workflow from
`video/README.md`.

## Phase 7 - Verification and cleanup

Run the migration in a sequence that leaves the repo working after each major
step.

### 7.1 Verification commands

From `video/`:

```bash
pnpm typecheck
pnpm lint
pnpm project:audio -- --project ornn
pnpm project:dev -- --project ornn
pnpm project:render -- --project ornn --composition OrnnIcV1 --output-name ornn-ic-v1.mp4
```

Verify:

- Remotion Studio still opens
- Studio opened via `project:dev` after automatic staging, without a separate
  manual copy step
- the Ornn composition is registered from `projects/ornn/video/project.ts`
- staged audio exists under `video/public/audio/ornn/`
- canonical generated audio exists under `projects/ornn/video/public/audio/`
- the rendered MP4 lands under `projects/ornn/video/out/`

### 7.2 Git ignore updates

Update the ignore rules so they match the explicit artifact policy:

- keep `video/public/audio/` staging ignored
- keep `video/out/` ignored
- ignore `projects/*/video/public/audio/*`
- ignore `projects/*/video/out/*`
- keep only the necessary `.gitkeep` exceptions

### 7.3 Remove stale single-project assumptions

Clean up any remaining references that still assume Ornn lives at the repo root,
including:

- `video/README.md`
- `projects/ornn/iteration-prompt.xml`
- `video/package.json` description
- any script help text that still says "Ornn" when it really means "project"

## Optional only after a second real video project exists

Do not do these during the Ornn migration.

`projects/silicon-data/` does not count for this threshold yet because it is
not currently wired into the shared Remotion/audio pipeline.

### Prompt template

Create `templates/iteration-prompt-template.xml` only after a second real
project confirms which fields are genuinely shared.

### Scaffolding script

Create `scripts/new-project.sh` or `scripts/new-project.mjs` only after the
directory conventions survive one real second project.

Minimum behavior:

1. Accept a project slug.
2. Create the standard `projects/<slug>/` directory tree.
3. Seed empty but valid starter files.
4. Print the next required manual steps.

## Migration checklist

Execute these steps in order:

1. [ ] Create `projects/ornn/` and `projects/ornn/sources/`.
2. [ ] Move the two primary source markdown files into `projects/ornn/sources/`.
3. [ ] Move `management-response-evaluation-guide.md` into `projects/ornn/`.
4. [ ] Move `remotion-video-iteration-prompt.xml` into `projects/ornn/iteration-prompt.xml`.
5. [ ] Move `video/v1-review-notes.md` into `projects/ornn/v1-review-notes.md`.
6. [ ] Move Ornn data files into `projects/ornn/video/data/`.
7. [ ] Move `OrnnIcV1.tsx` into `projects/ornn/video/compositions/`.
8. [ ] Move generated audio and render outputs into `projects/ornn/video/public/audio/` and `projects/ornn/video/out/`.
9. [ ] Land the shared-app cutover atomically: create `projects/ornn/video/project.ts`, add `@shared/*` and `@projects/*` aliases plus explicit `include` patterns in `video/tsconfig.json`, mirror the alias setup in `video/remotion.config.ts`, update `video/src/Root.tsx`, and update Ornn composition imports plus `staticFile()` paths.
10. [ ] Add `--project` to `scripts/generate-audio.py`.
11. [ ] Add `scripts/project.mjs` with explicit `stage`, `audio`, `dev`, and `render` command contracts.
12. [ ] Update `video/package.json` scripts, render arguments, lint coverage, and shared wording.
13. [ ] Extract only minimal shared types into `video/src/types.ts`.
14. [ ] Rewrite `video/README.md` and `projects/ornn/iteration-prompt.xml` for the new layout and the stage-before-dev/render workflow.
15. [ ] Update gitignore rules for canonical and staged generated artifacts.
16. [ ] Run typecheck, lint, project audio generation, Studio smoke test, and project render for Ornn.
17. [ ] Confirm `projects/silicon-data/` remains untouched as a research/source-only project during this migration.

## What this plan does not do

- It does not build a generic markdown-to-slides system.
- It does not introduce Nx, Turborepo, or a root pnpm workspace.
- It does not force a generic scene-data model before a second project proves
  one exists.
- It does not rely on symlink-only behavior for correctness.
- It does not keep generated WAV, JSON metadata, MP4, or still files under
  version control by default.
- It does not add prompt templating or project scaffolding before they are
  justified by a second real project.
