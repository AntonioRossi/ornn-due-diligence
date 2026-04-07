# Multi-project implementation plan

Turn the current single-project Ornn repo into a workspace that can govern
multiple independent research projects, each with its own source documents,
scene data, narration, and rendered video artifact.

## Design decision: directory-per-project with shared infrastructure

```
projects/
  ornn/                              # existing project, relocated
    README.md                        # project-specific notes only
    v1-review-notes.md
    iteration-prompt.xml             # project-level LLM workflow prompt
    sources/
      investment-committee-memo.md
      management-diligence-request-list.md
    video/                           # project-specific data + composition
      project.ts                     # manifest/entrypoint consumed by shared app + tooling
      data/
        scenes.ts                    # was ornn-ic-v1.ts
        citations.ts
        narration.json
        narration.ts
      compositions/
        OrnnIcV1.tsx
      public/audio/                  # canonical generated WAVs
      out/                           # canonical rendered MP4
  <next-deal>/                       # same shape, different content
    README.md
    v1-review-notes.md
    iteration-prompt.xml
    sources/
    video/

video/                               # shared Remotion app (single pnpm workspace)
  README.md                          # shared commands and workflow
  public/
    audio/                           # staged static assets, rebuilt from projects/*
  src/
    index.ts
    Root.tsx                         # registers project manifests
    components/                      # shared, generic components
    theme.ts                         # shared visual system
    utils/                           # shared timing/layout helpers
    types.ts                         # only genuinely shared types
  package.json
  remotion.config.ts
  tsconfig.json

scripts/
  generate-audio.py                  # shared, now accepts --project flag
  project.mjs                        # project-aware wrapper for dev/render/staging

pyproject.toml                       # shared Python deps (unchanged)
uv.lock
```

Each project owns its content and canonical generated artifacts. The
Remotion app, components, theme, and audio pipeline are shared
infrastructure that every project imports from. Anything staged under
`video/public/` is a derived implementation detail, not the source of truth.

---

## Phase 1 — Create the project directory structure

### 1.1 Create `projects/ornn/sources/`

Move the two root-level markdown source documents:

```
investment-committee-memo.md   -> projects/ornn/sources/
management-diligence-request-list.md -> projects/ornn/sources/
```

Also move the docx exports and `tighten_reference.py` + `reference.docx`
into `projects/ornn/` since they are Ornn-specific artifacts.

### 1.2 Create `projects/ornn/video/`

Move the project-specific files out of `video/src/` into the project
directory:

```
video/src/data/ornn-ic-v1.ts       -> projects/ornn/video/data/scenes.ts
video/src/data/citations.ts        -> projects/ornn/video/data/citations.ts
video/src/data/narration.json      -> projects/ornn/video/data/narration.json
video/src/data/narration.ts        -> projects/ornn/video/data/narration.ts
video/src/compositions/OrnnIcV1.tsx -> projects/ornn/video/compositions/OrnnIcV1.tsx
video/public/audio/*.wav           -> projects/ornn/video/public/audio/
video/public/audio/*.json          -> projects/ornn/video/public/audio/
video/out/                         -> projects/ornn/video/out/
```

### 1.3 Move the iteration prompt

```
remotion-video-iteration-prompt.xml -> projects/ornn/iteration-prompt.xml
```

### 1.4 Relocate supporting docs

```
video/v1-review-notes.md           -> projects/ornn/v1-review-notes.md
```

Keep `video/README.md` in place as the shared infrastructure and workflow
document. If Ornn needs project-only notes, create `projects/ornn/README.md`
instead of moving the shared README.

After this phase the `projects/ornn/` directory is self-contained for
content, while `video/` contains only shared infrastructure plus rebuilt
staging assets under `video/public/`.

---

## Phase 2 — Wire the shared Remotion app to project directories

### 2.1 TypeScript path aliases

Add `baseUrl` plus mandatory aliases in `video/tsconfig.json` so shared and
project-specific code import each other through stable boundaries rather than
relative path traversals:

```jsonc
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@shared/*": ["src/*"],
      "@projects/*": ["../projects/*"]
    }
  }
}
```

Remotion bundles with webpack internally, so the same aliases must also be
defined in `remotion.config.ts` via `Config.overrideWebpackConfig`. The
TypeScript and webpack resolution rules must stay identical.

### 2.2 Update `Root.tsx` — composition registry

`Root.tsx` becomes a registry of project manifests. Each project exports a
single entrypoint, such as `projects/ornn/video/project.ts`, that contains
its Remotion registration metadata and component reference. Root imports
those manifests and registers them all:

```tsx
// video/src/Root.tsx
import { Composition } from "remotion";
import { ornnProject } from "@projects/ornn/video/project";
// future: import { xyzProject } from "@projects/xyz/video/project";

const projects = [ornnProject];

export const RemotionRoot = () => (
  <>
    {projects.map((project) => (
      <Composition
        key={project.id}
        id={project.id}
        component={project.component}
        durationInFrames={project.durationInFrames}
        fps={project.fps}
        width={project.width}
        height={project.height}
      />
    ))}
  </>
);
```

### 2.3 Update imports inside `OrnnIcV1.tsx`

The composition file now lives under `projects/ornn/` and should import
shared code through `@shared/*` aliases only:

```tsx
import { Frame } from "@shared/components/Frame";
import { theme } from "@shared/theme";
```

Do not use deep relative imports like `../../../../video/src/...`; they are
too brittle for a directory layout that is explicitly meant to scale to
multiple projects.

### 2.4 Audio asset resolution

Remotion's `staticFile()` resolves against `video/public/`. Each project's
canonical audio should live under `projects/<name>/video/public/audio/`, and
shared tooling should stage those assets into `video/public/audio/<project>/`
before `dev` or `render`.

- Canonical source of truth: `projects/<name>/video/public/audio/`
- Derived staging location: `video/public/audio/<project>/`
- Composition reference: `staticFile("audio/ornn/<sceneId>.wav")`

Prefer a deterministic staging step in shared tooling over symlinks.
Symlinks are acceptable as a local convenience, but they must not be
required for correctness, CI, or cross-platform operation.

---

## Phase 3 — Generalize the audio pipeline

### 3.1 Add `--project` flag to `generate-audio.py`

The script currently hardcodes paths relative to the repo root. Add a
`--project` argument that resolves the narration manifest and audio output
directory from the project path:

```
scripts/generate-audio.py --project ornn
```

Internally:

```python
PROJECT_DIR = ROOT / "projects" / args.project
NARRATION_PATH = PROJECT_DIR / "video" / "data" / "narration.json"
AUDIO_DIR = PROJECT_DIR / "video" / "public" / "audio"
```

Keep the current behavior as the default when `--project` is not supplied
(backward compat during migration), then remove the default once migration
is complete.

### 3.2 Update `package.json` scripts

Update `video/package.json` to call a project-aware wrapper instead of
relying on shell-specific environment expansion or a growing list of
`render:<project>` scripts:

```jsonc
{
  "scripts": {
    "project:audio": "node ../scripts/project.mjs audio --project ornn",
    "project:render": "node ../scripts/project.mjs render --project ornn",
    "dev": "node ../scripts/project.mjs dev"
  }
}
```

The wrapper can stage assets, invoke the Python audio generator, and route
Remotion renders to the correct project output path. The exact wrapper
language is less important than keeping the interface portable and
project-aware.

---

## Phase 4 — Extract shared types

### 4.1 Extract only the types that are truly shared

Create `video/src/types.ts` with small shared contracts that have already
proven reusable:

```typescript
export interface ProjectMeta {
  readonly id: string;           // Remotion composition ID
  readonly title: string;
  readonly fps: number;
  readonly durationInFrames: number;
  readonly width: number;
  readonly height: number;
}

export interface NarrationEntry {
  readonly sceneId: string;
  readonly text: string;
  readonly voice?: string;
  readonly langCode?: string;
  readonly speed?: number;
  readonly maxDurationFrames: number;
}
```

Do not force a generic scene-data interface during the first migration.
Current scene payloads are editorially heterogeneous, so each project's
scene data should remain project-specific until at least one more real
project reveals stable shared structure.

### 4.2 Shared citation type

```typescript
export type CitationMap<S extends string = string> = Record<S, readonly string[]>;
```

---

## Phase 5 — Optional after the second project exists: templatize the iteration prompt

### 5.1 Create a prompt template only after the common shape is proven

Create `templates/iteration-prompt-template.xml` with variable placeholders
for project-specific values:

- `{{PROJECT_NAME}}`
- `{{PRIMARY_SOURCES}}` (file list)
- `{{COMPOSITION_ID}}`
- `{{AUDIO_VOICE}}`
- `{{SCENE_BACKBONE}}` (scene list with source mappings)
- `{{DERIVED_ARTIFACTS}}` (file list)

### 5.2 Each project gets a filled-in copy

`projects/ornn/iteration-prompt.xml` is the current prompt with paths
updated to the new layout. New projects start by copying and filling in the
template.

---

## Phase 6 — Optional after the second project exists: add scaffolding

Create `scripts/new-project.sh` only after the Ornn migration and a second
real project confirm the directory and prompt conventions:

1. Accepts a project name: `./scripts/new-project.sh my-deal`
2. Creates `projects/my-deal/sources/`, `projects/my-deal/video/data/`,
   `projects/my-deal/video/compositions/`, `projects/my-deal/video/public/audio/`,
   `projects/my-deal/video/out/`
3. Copies starter files:
   - Empty `narration.json` (valid empty array)
   - Skeleton `scenes.ts` with the shared type imports
   - Skeleton composition file importing shared components
   - Filled-in iteration prompt from the template
4. Configures the staged public-audio location used by shared tooling
5. Prints next steps

---

## Phase 7 — Update the shared Remotion app for multi-project rendering

### 7.1 Per-project render commands

Each project registers its composition ID. Rendering should go through the
shared wrapper so staging, composition selection, and output paths are all
resolved in one place:

```bash
pnpm project:render -- --project ornn
pnpm project:render -- --project xyz
```

### 7.2 Remotion Studio shows all compositions

`pnpm dev` opens Remotion Studio with every registered composition visible
in the sidebar. The shared wrapper should ensure staged public assets exist
before Studio starts.

---

## Migration checklist (Ornn)

Execute these steps in order. Each step should leave the repo in a working
state (typecheck + lint pass, audio generation works, render works).

1. [ ] Create `projects/ornn/sources/` and move the two markdown files
2. [ ] Create `projects/ornn/video/data/` and move the four data files
3. [ ] Create `projects/ornn/video/compositions/` and move `OrnnIcV1.tsx`
4. [ ] Create `projects/ornn/video/project.ts` as the project manifest/entrypoint
5. [ ] Move canonical audio artifacts to `projects/ornn/video/public/audio/`
6. [ ] Move canonical render output to `projects/ornn/video/out/`
7. [ ] Move supporting docs (`v1-review-notes.md`, docx files, iteration prompt) into `projects/ornn/`
8. [ ] Keep `video/README.md` as the shared workflow doc; add `projects/ornn/README.md` only if project-specific notes are needed
9. [ ] Set up `baseUrl`, `@shared/*`, and `@projects/*` aliases in `video/tsconfig.json`
10. [ ] Mirror the same aliases in `video/remotion.config.ts`
11. [ ] Update all project composition imports to use shared aliases instead of relative traversals
12. [ ] Update `Root.tsx` to import project manifests from the new project locations
13. [ ] Stage project audio into `video/public/audio/<project>/` and update `staticFile()` calls to use the `audio/<project>/` prefix
14. [ ] Add `--project` flag to `generate-audio.py`
15. [ ] Add a project-aware wrapper script for staging, audio generation, and rendering
16. [ ] Update `video/package.json` scripts to call the wrapper
17. [ ] Run `pnpm typecheck && pnpm lint`
18. [ ] Run project-scoped audio generation for Ornn
19. [ ] Run project-scoped render for Ornn and verify output
20. [ ] Extract only the minimal shared types into `video/src/types.ts`
21. [ ] Update Ornn files to consume those shared types where useful
22. [ ] Update root `.gitignore` so staged assets under `video/public/` stay untracked while canonical project artifacts follow the intended review policy
23. [ ] If and only if a second real project exists, create the prompt template and scaffolding script
24. [ ] Final full verification: typecheck, lint, audio, render

---

## What this plan does NOT do

- **Does not build a generic markdown-to-slides system.** Each project still
  requires manual editorial curation from prose into typed scene data.
- **Does not change the visual system.** The theme, components, and
  institutional tone remain shared and unchanged.
- **Does not rely on deep relative imports or symlink-only behavior.** Import
  boundaries and staged assets must work the same way in local development
  and CI.
- **Does not introduce a monorepo tool** (nx, turborepo). The structure is
  simple enough that tsconfig paths + a flat directory convention suffice.
  Revisit if the project count exceeds ~5.
- **Does not abstract scene composition patterns.** Each project writes its
  own composition with its own scene components, composing shared building
  blocks. Premature abstraction here would fight the editorial nature of the
  work.
- **Does not force prompt templating or project scaffolding before they are
  justified.** Those become worthwhile only after the second real project
  confirms the common shape.
