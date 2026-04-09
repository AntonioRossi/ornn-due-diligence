# Implementation Plan: Competitive Landscape Comparison Project

**Date:** April 9, 2026
**Status:** Revised draft (v6) — awaiting review before execution
**Slug:** `competitive-landscape`

---

## 0. Purpose

This project **does not conduct new research**. It assembles a comparative
analysis by reading the existing source documents from three already-completed
managed projects and producing a single video that shows all three GPU-compute
market infrastructure entrants side by side — their theses, traction, risk
profiles, and gating issues — so an investment committee can see the
competitive field in one view rather than reviewing three separate memos
sequentially.

**Target audience:** The investment committee — the same audience as the
three upstream IC memos. The video is an analyst-to-IC deliverable that
shows relative positioning across three GPU-compute market infrastructure
candidates so the committee can allocate diligence resources without
reviewing three separate memos sequentially. The tone, evidentiary
standard, and editorial posture (analytical, not promotional; sourced, not
speculative; gated recommendations, not pitches) match the individual
project memos exactly.

**Dependency rule:** If any approved upstream source document changes, the
comparative project must be re-evaluated and potentially re-rendered. The
iteration prompt (section 10) encodes this dependency explicitly.

---

## 1. Approved upstream source manifest

The comparison draws exclusively from the following files. No other files
are in scope. No new research or outside sources are permitted.

| # | File | Role | In scope |
|---|------|------|----------|
| 1 | `projects/ornn/sources/investment-committee-memo.md` | Ornn IC memo | **Yes** |
| 2 | `projects/ornn/sources/management-diligence-request-list.md` | Ornn diligence list | **Yes** |
| 3 | `projects/silicon-data/sources/investment-committee-memo.md` | Silicon Data IC memo | **Yes** |
| 4 | `projects/silicon-data/sources/management-diligence-request-list.md` | Silicon Data diligence list | **Yes** |
| 5 | `projects/auctionomics/sources/investment-committee-memo.md` | Auctionomics IC memo | **Yes** |
| 6 | `projects/auctionomics/sources/management-diligence-request-list.md` | Auctionomics diligence list | **Yes** |
| 7 | `projects/ornn/management-response-evaluation-guide.md` | Ornn eval guide | **No** — excluded |
| 8 | `projects/silicon-data/sources/management-response-evaluation-guide.md` | Silicon Data eval guide | **No** — excluded |
| 9 | `projects/auctionomics/sources/management-response-evaluation-guide.md` | Auctionomics eval guide | **No** — excluded |

**Why evaluation guides are excluded:** They define scoring rubrics for
management responses that have not yet occurred. They contain no facts
about the companies. The comparison synthesizes facts and sourced
observations from IC memos and diligence lists; it does not synthesize
unfulfilled scoring frameworks.

The iteration prompt (section 10) watches exactly these 6 approved files
plus the project's own `competitive-analysis.md`. No more, no fewer.

---

## 2. Write the comparative source document

Before any code, draft a single source document:

**File:** `projects/competitive-landscape/sources/competitive-analysis.md`

This memo is the editorial backbone. It is written by reading the six
approved upstream files side by side and extracting comparative observations.

### Structure

| Section | Content |
|---------|---------|
| **Market overview** | GPU-compute market infrastructure as an emerging asset class. Why three credible entrants have appeared. Total addressable opportunity framing. |
| **Approach comparison** | Three columns: Ornn (benchmark + bilateral swaps), Silicon Data (index + marketplace), Auctionomics/OneChronos (combinatorial auction marketplace). What each is building, how it works, and what makes it structurally different. Includes team and backing comparison inline. |
| **Traction comparison** | Side-by-side timeline of dated proof points from all three IC memos. Who has live products, who has distribution, who has partnerships, who is still at announcement stage. |
| **Risk dimension comparison** | For each of 4 risk dimensions (regulatory pathway, benchmark/methodology governance, counterparty/conflict risk, market formation and execution depth), where each company sits — with explicit citations to the specific risk sections in each IC memo. |
| **Gating issues comparison** | Selected P0 asks from each diligence request list, grouped around shared comparison themes. Where do the same questions arise for all three? Where does one company face a unique gate? |
| **Relative positioning and recommendation** | How to allocate diligence resources across the three. Which to prioritize, which to watch, which to defer. Qualitative positioning, not numeric scoring. |

### Claim-provenance requirement

Every factual claim in `competitive-analysis.md` must include an inline
source tag identifying the upstream file and section. Format:

```
The Ornn Compute Price Index was added to the Bloomberg Terminal in
April 2026. [Source: ornn/IC memo § What appears real today]
```

The document must end with a **claim-provenance appendix** that lists every
factual claim and its source tag, grouped by section. This appendix prevents
drift — if a claim cannot be traced to a specific upstream section, it must
be removed.

### Acceptance criteria

- Every factual claim traces to a specific section in one of the six
  approved upstream files (3 IC memos + 3 diligence lists)
- No new research or outside sources — this is synthesis only
- The tone is neutral market analysis, not advocacy for any company
- Each company is assessed on the same dimensions with the same rigor
- The claim-provenance appendix is complete and consistent
- `scenes.ts` must not introduce any claim absent from
  `competitive-analysis.md`

---

## 3. Text and layout budgets

Every component and data field has a hard character or item limit. These
are enforced at import time by `validateComparisonProject` (called when
`scenes.ts` loads) and checked independently by unit tests (section 8).
Exceeding any budget is an import-time error — any code that imports
the project module will fail, including Studio launch, Remotion bundling,
rendering, and `project:verify`. Note: `tsc --noEmit` does not execute
modules, so plain typechecking alone will not trigger the validators.
The validators fire when the module is actually imported and executed.

### Per-component budgets

| Component | Field | Max chars | Max items |
|-----------|-------|-----------|-----------|
| **SideBySideCards** | headline | 60 | — |
| **SideBySideCards** | body | 120 | — |
| **SideBySideCards** | cards | — | 3 (fixed) |
| **ComparisonMatrix** | dimension label | 40 | — |
| **ComparisonMatrix** | cell value | 80 | — |
| **ComparisonMatrix** | rows | — | 5 |
| **ParallelTimeline** | event label | 50 | — |
| **ParallelTimeline** | events per lane | — | 5 |
| **DimensionSpectrum** | dimension label | 40 | — |
| **DimensionSpectrum** | scale labels | 30 | — |
| **DimensionSpectrum** | company labels | 20 | — |
| **CitationFooter** | items | — | 4 per scene |
| **CitationFooter** | item text | 60 | — |

### Per-scene budgets

| Scene field | Max chars |
|-------------|-----------|
| Scene title | 70 |
| Narration text | calibrated to `maxDurationFrames` at the scene's speed |

### Enforcement architecture

Create `video/src/validation/comparison.ts` with two categories of exports:

**Validators** — pure functions that throw on budget violations:

```typescript
// Per-item validators
export function validateComparisonRow(row: ComparisonRow): void
export function validateCompanyCard(card: CompanyCard): void
export function validateTimelineLane(lane: TimelineLane): void
export function validateSpectrumPlacement(p: SpectrumPlacement): void
export function validateSceneTitle(title: string): void

// Aggregate validators (check collection-level constraints)
export function validateComparisonMatrix(
  matrix: { headers: readonly [string, string, string]; rows: readonly ComparisonRow[] }
): void    // throws if rows > 5, then delegates to validateComparisonRow per row

export function validateDimensionSpectrumData(
  data: DimensionSpectrumData
): void    // throws if dimension > 40 chars, scaleMin/scaleMax > 30 chars,
           // or any placement label > 20 chars; delegates to
           // validateSpectrumPlacement per placement

export function validateSceneCitations(
  citations: readonly string[]
): void    // throws if items > 4 or any item > 60 chars

// Top-level project validator (calls all others)
export function validateComparisonProject(
  project: ComparisonProject,
  citations: CitationMap<ComparisonSceneId>
): void    // validates every scene, every component data shape, every citation set
```

**Pure helpers** — functions that transform data without side effects:

```typescript
// Sort timeline entries by sortDate, returns new readonly array
export function sortTimelineEntries(
  events: readonly TimelineEntry[]
): readonly TimelineEntry[]

// Clamp a spectrum position to [0, 1]
export function clampSpectrumPosition(position: number): number
```

**Why the split:** Validators return `void` and throw — they answer "is this
valid?" Pure helpers return new values — they answer "give me the normalized
form." A `void` validator on readonly inputs cannot cleanly return
sorted/clamped data. Components call the validator first (fail fast), then
use the pure helper for transformed data.

**Import-time enforcement:** `scenes.ts` calls `validateComparisonProject`
at module scope after constructing the project data object. This means any
budget violation fails when the module is imported and executed — which
happens during Studio launch, Remotion bundling, rendering, and
`project:verify`. Plain `tsc --noEmit` does not execute modules, so
typechecking alone will not trigger validators; the actual import must run.

```typescript
// In scenes.ts, after the project object definition:
validateComparisonProject(competitiveLandscapeV1, sceneCitations)
```

---

## 4. New shared components

Build 3 new components under `video/src/components/` plus a restricted-use
spectrum component. All follow existing patterns: spring-based entrance
animations, theme colors, and the existing font/spacing system.

### 4a. `ComparisonMatrix.tsx`

A table-style component showing 3 companies across N dimensions.

**Props:** Imports `ComparisonRow` from `@shared/types/comparison`.

```typescript
type ComparisonMatrixProps = {
  readonly headers: readonly [string, string, string];
  readonly rows: readonly ComparisonRow[];
};
```

**Layout:** Full-width grid. Left column (dimension label, 280px). Three
equal-width value columns. Each row is a card with surface background.
Strong/weak highlights use accent/warning border tints respectively.

**Animation:** Header row enters first. Data rows stagger in (4-frame offset
per row). Highlight tints fade in after the row entrance completes.

**Validation:** Calls `validateComparisonMatrix({headers, rows})` at render
time — checks row count ≤ 5 and delegates per-row validation.

### 4b. `SideBySideCards.tsx`

Three equal-width cards showing parallel information for each company.

**Props:** Imports `CompanyCard` from `@shared/types/comparison`.

```typescript
type SideBySideCardsProps = {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard];
};
```

**Layout:** 3-column grid with `cardGap`. Each card: surface background,
border, 24px padding, company label in mono accent text at top.

**Animation:** Cards enter simultaneously with left-to-right stagger
(3-frame offset). Label enters first, then headline, then body.

**Validation:** Calls `validateCompanyCard` for each card at render time.

### 4c. `ParallelTimeline.tsx`

Three vertical timeline lanes side by side, showing dated events per company.

**Props:** Imports `TimelineLane` from `@shared/types/comparison`.

```typescript
type ParallelTimelineProps = {
  readonly lanes: readonly [TimelineLane, TimelineLane, TimelineLane];
};
```

**Layout:** 3-column grid. Each column has a vertical accent line with
circular nodes at each event date. Events are positioned chronologically
(earliest at top) based on `sortDate`. Cross-lane alignment: events with
the same `sortDate` are vertically aligned.

**Animation:** Timeline lines draw downward. Events appear as the line
reaches their position. Left lane enters first, middle second, right third
(6-frame stagger per lane).

**Validation:** Calls `validateTimelineLane` for each lane (throws if > 5
events or any label > 50 chars). Then calls `sortTimelineEntries` to get
the rendering order.

### 4d. `DimensionSpectrum.tsx` — restricted use

A horizontal spectrum bar showing where each company sits on a single
factually measurable dimension.

**Props:** Imports `SpectrumPlacement` from `@shared/types/comparison`.

```typescript
type DimensionSpectrumProps = {
  readonly dimension: string;
  readonly scaleMin: string;
  readonly scaleMax: string;
  readonly placements: readonly [SpectrumPlacement, SpectrumPlacement, SpectrumPlacement];
};
```

**Restriction:** This component may only be used for dimensions where the
position can be determined from **observable, sourced facts** — not editorial
judgment. Examples of permitted use:

- "Disclosed compute-product stage" — positions determined by factual
  status: pre-announcement, announced, live bilateral, regulated exchange.
  Scope: the compute-market initiative specifically, not other business
  lines.
- "Disclosed regulatory posture for compute" — positions determined by
  whether the entity holds a relevant registration or has disclosed a
  filing for the compute product. Note: OneChronos' SEC/FINRA ATS
  registration is for equities, not compute; Ornn's de minimis posture
  applies to swaps; Silicon Data/CX explicitly disclaim regulatory
  licensing. Every marker rationale must state the scope.

Examples of **prohibited use:**

- "Structural thesis strength" — inherently subjective
- "Overall risk" — requires weighting that the sources do not provide
- "Competitive advantage" — editorial judgment, not observable fact

**Editorial rubric requirement:** Every `position` value must have a
non-empty `rationale` string that cites a specific upstream source, section,
and fact, including the scope of what the fact applies to. The rationale is
not rendered in the video but is required in `scenes.ts` and must appear in
the claim-provenance appendix of `competitive-analysis.md`.

**Layout:** Full-width. Dimension label at top. Horizontal bar (track color)
with three circular markers positioned at their `position` value. Company
labels below each marker.

**Animation:** Bar draws left to right. Markers drop in from above with
spring physics once the bar passes their position.

**Validation:** Calls `validateDimensionSpectrumData(data)` at render time —
checks dimension label (≤ 40 chars), scale labels (≤ 30 chars), and
placement labels (≤ 20 chars), then delegates to `validateSpectrumPlacement`
per placement (throws if `rationale` is empty). Uses `clampSpectrumPosition`
to normalize each `position` value to `[0, 1]`.

---

## 5. New TypeScript types

All shared data types live in a single file:
`video/src/types/comparison.ts`. Components import from there.
`CompanySlug` and `ComparisonSceneId` are added to `video/src/types.ts`
for consistency with the existing type export pattern.

### `video/src/types.ts` additions

```typescript
export type CompanySlug = "ornn" | "silicon-data" | "auctionomics";

export type ComparisonSceneId =
  | "overview"
  | "approaches"
  | "traction"
  | "riskComparison"
  | "gatingIssues"
  | "positioning"
  | "recommendation";
```

### `video/src/types/comparison.ts`

```typescript
import type {CompanySlug} from "../types";

// --- Component data types (single source for all components) ---

export type HighlightLevel = "neutral" | "strong" | "weak";

export type ComparisonRow = {
  readonly dimension: string;
  readonly values: readonly [string, string, string];
  readonly highlights?: readonly [HighlightLevel, HighlightLevel, HighlightLevel];
};

export type CompanyCard = {
  readonly slug: CompanySlug;
  readonly label: string;
  readonly headline: string;
  readonly body: string;
  readonly accent?: HighlightLevel;
};

export type TimelineEntry = {
  readonly displayDate: string;
  readonly sortDate: string;
  readonly label: string;
};

export type TimelineLane = {
  readonly slug: CompanySlug;
  readonly label: string;
  readonly events: readonly TimelineEntry[];
};

export type SpectrumPlacement = {
  readonly slug: CompanySlug;
  readonly label: string;
  readonly position: number;
  readonly rationale: string;
};

export type DimensionSpectrumData = {
  readonly dimension: string;
  readonly scaleMin: string;
  readonly scaleMax: string;
  readonly placements: readonly [SpectrumPlacement, SpectrumPlacement, SpectrumPlacement];
};

// --- Scene data types ---

type ComparisonSceneBase = {
  readonly durationInFrames: number;
  readonly sectionLabel: string;
  readonly title: string;
};

export type OverviewScene = ComparisonSceneBase & {
  readonly body: string;
  readonly companies: readonly [
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
  ];
};

export type ApproachesScene = ComparisonSceneBase & {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard];
};

export type TractionScene = ComparisonSceneBase & {
  readonly intro: string;
  readonly lanes: readonly [TimelineLane, TimelineLane, TimelineLane];
};

export type RiskComparisonScene = ComparisonSceneBase & {
  readonly intro: string;
  readonly matrix: {
    readonly headers: readonly [string, string, string];
    readonly rows: readonly ComparisonRow[];
  };
};

export type GatingIssuesScene = ComparisonSceneBase & {
  readonly intro: string;
  readonly matrix: {
    readonly headers: readonly [string, string, string];
    readonly rows: readonly ComparisonRow[];
  };
};

export type PositioningScene = ComparisonSceneBase & {
  readonly spectrums: readonly DimensionSpectrumData[];
  readonly summary: string;
};

export type RecommendationScene = ComparisonSceneBase & {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard];
  readonly closingNote: string;
};

export type ComparisonProject = {
  readonly meta: {
    readonly title: string;
    readonly fps: number;
  };
  readonly companies: readonly [string, string, string];
  readonly scenes: {
    readonly overview: OverviewScene;
    readonly approaches: ApproachesScene;
    readonly traction: TractionScene;
    readonly riskComparison: RiskComparisonScene;
    readonly gatingIssues: GatingIssuesScene;
    readonly positioning: PositioningScene;
    readonly recommendation: RecommendationScene;
  };
};
```

---

## 6. `CompetitiveLandscapeComposition.tsx`

New shared composition at
`video/src/components/CompetitiveLandscapeComposition.tsx`.

### Scene plan (7 scenes)

| # | Scene ID | Component(s) | Purpose | Est. frames |
|---|----------|--------------|---------|-------------|
| 1 | `overview` | Frame + custom intro | Market context: 3 entrants, different approaches, same opportunity. | 390 |
| 2 | `approaches` | Frame + SideBySideCards | What each builds, how it works, who backs it. Team and backing integrated. | 540 |
| 3 | `traction` | Frame + ParallelTimeline | Side-by-side dated proof points. Who has what, when. | 540 |
| 4 | `riskComparison` | Frame + ComparisonMatrix | 4 risk dimensions compared across all three. Factual status only. | 510 |
| 5 | `gatingIssues` | Frame + ComparisonMatrix | Selected P0 asks grouped around shared comparison themes. | 480 |
| 6 | `positioning` | Frame + DimensionSpectrum (×2 max) | Factually measurable spectrums only: compute-product stage, compute regulatory posture. | 420 |
| 7 | `recommendation` | Frame + SideBySideCards | Diligence resource allocation: prioritize, watch, or defer. Closing note. | 390 |

**Total:** ~3,270 frames ≈ 109 seconds ≈ 1:49

### Composition props

```typescript
type CompetitiveLandscapeCompositionProps = {
  readonly projectSlug: string;
  readonly project: ComparisonProject;
  readonly sceneCitations: CitationMap<ComparisonSceneId>;
  readonly narrationByScene: Record<
    ComparisonSceneId,
    ResolvedNarrationEntry<ComparisonSceneId>
  >;
  readonly sceneStartsInFrames: Record<ComparisonSceneId, number>;
  readonly totalDurationInFrames: number;
  readonly titleSizes?: Partial<Record<ComparisonSceneId, number>>;
};
```

---

## 7. Project skeleton

```
projects/competitive-landscape/
  sources/
    competitive-analysis.md
  video/
    project.config.json
    project.ts
    compositions/
      CompetitiveLandscapeV1.tsx
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
  iteration-prompt.xml
```

### 7a. `project.config.json`

```json
{
  "slug": "competitive-landscape",
  "defaultCompositionId": "CompetitiveLandscapeV1",
  "defaultOutputName": "competitive-landscape-v1.mp4",
  "runtimeAssetKinds": ["audio"]
}
```

### 7b. `data/scene-order.json`

```json
[
  "overview",
  "approaches",
  "traction",
  "riskComparison",
  "gatingIssues",
  "positioning",
  "recommendation"
]
```

### 7c. `data/scenes.ts`

Export a `const competitiveLandscapeV1` object typed as `ComparisonProject`.
Use `buildSceneTimeline` from `@shared/utils/sceneOrder`.

Import `validateComparisonProject` from `@shared/validation/comparison` and
`sceneCitations` from `./citations`. Call `validateComparisonProject` at
module scope after the project object and citations are defined:

```typescript
import {validateComparisonProject} from "@shared/validation/comparison"
import {sceneCitations} from "./citations"

export const competitiveLandscapeV1 = { /* ... */ } as const

// Import-time validation — fails on budget violations before rendering
validateComparisonProject(competitiveLandscapeV1, sceneCitations)
```

**Circular import avoidance:** `citations.ts` must import
`ComparisonSceneId` from `@shared/types` — not from `./scenes`. This
ensures `scenes.ts` can import `sceneCitations` from `./citations`
without creating a runtime cycle. Neither file depends on the other's
runtime exports for its own construction; `scenes.ts` only needs the
citations object after its own data is defined.

### 7d–7f. Remaining files

Same patterns as existing projects: thin composition wrapper, standard
`ProjectManifest`, standard narration boilerplate.

---

## 8. Testing

### 8a. Validation and helper tests

The Vitest configuration uses `environment: "node"` and includes only
`.test.ts` files. No jsdom, no React Testing Library. All new tests are
pure-function `.test.ts` files.

Create `video/src/validation/comparison.test.ts`:

**Validators (throw on invalid input):**

- `validateComparisonRow` throws if `dimension` exceeds 40 chars
- `validateComparisonRow` throws if any cell value exceeds 80 chars
- `validateComparisonRow` passes with valid input
- `validateComparisonMatrix` throws if rows exceed 5
- `validateComparisonMatrix` delegates to `validateComparisonRow` per row
- `validateTimelineLane` throws if lane has more than 5 events
- `validateTimelineLane` throws if any event label exceeds 50 chars
- `validateSpectrumPlacement` throws if `rationale` is empty
- `validateDimensionSpectrumData` throws if dimension label exceeds 40 chars
- `validateDimensionSpectrumData` throws if scale labels exceed 30 chars
- `validateDimensionSpectrumData` throws if any placement label exceeds 20 chars
- `validateDimensionSpectrumData` delegates to `validateSpectrumPlacement`
  per placement
- `validateCompanyCard` throws if headline exceeds 60 chars
- `validateCompanyCard` throws if body exceeds 120 chars
- `validateSceneTitle` throws if title exceeds 70 chars
- `validateSceneCitations` throws if items exceed 4
- `validateSceneCitations` throws if any item exceeds 60 chars
- `validateComparisonProject` catches all of the above across a full
  project object, including citation validation for every scene
- `validateComparisonProject` throws if citation keys do not match scene
  IDs exactly (rejects missing keys, extra keys, or mismatched keys —
  same contract enforcement as existing narration validation)

**Pure helpers (return transformed values):**

- `sortTimelineEntries` sorts entries by `sortDate` regardless of input order
- `sortTimelineEntries` returns a new array (does not mutate input)
- `clampSpectrumPosition` clamps values below 0 to 0
- `clampSpectrumPosition` clamps values above 1 to 1
- `clampSpectrumPosition` passes through values in `[0, 1]`

### 8b. Project-level validation

The existing `project:verify` and `acceptance` pipelines handle narration
parity, scene-order validation, typecheck, lint, audio, render, and output
checks. The real Remotion render in `project:verify` serves as the React
component smoke test. The import-time `validateComparisonProject` call in
`scenes.ts` means any budget violation fails project import during Studio
launch, Remotion bundling, rendering, or `project:verify` — not just at
the point of rendering a specific scene.

---

## 9. Register and update docs

Edit `video/src/Root.tsx`:

```typescript
import {competitiveLandscapeProject} from "@projects/competitive-landscape/video/project";

const projects = [
  ornnProject,
  siliconDataProject,
  auctionomicsProject,
  competitiveLandscapeProject,
];
```

Update **all three** docs files:

- `README.md` — add `projects/competitive-landscape/` to managed projects
- `CLAUDE.md` — add `projects/competitive-landscape/` to managed projects
- `AGENTS.md` — update the managed projects list (currently stale: lists
  only ornn and silicon-data; should list ornn, silicon-data, auctionomics,
  and competitive-landscape)

---

## 10. Iteration prompt — multi-source dependency

Create `projects/competitive-landscape/iteration-prompt.xml`.

Critical difference from single-project prompts: it watches **six upstream
source files** across three projects, plus the project's own comparative
memo. Total: **7 watched files**.

### Source dependency map

```xml
<primarySources>
  <file path="projects/ornn/sources/investment-committee-memo.md"
        role="upstream IC memo — Ornn" />
  <file path="projects/ornn/sources/management-diligence-request-list.md"
        role="upstream diligence list — Ornn" />
  <file path="projects/silicon-data/sources/investment-committee-memo.md"
        role="upstream IC memo — Silicon Data" />
  <file path="projects/silicon-data/sources/management-diligence-request-list.md"
        role="upstream diligence list — Silicon Data" />
  <file path="projects/auctionomics/sources/investment-committee-memo.md"
        role="upstream IC memo — Auctionomics" />
  <file path="projects/auctionomics/sources/management-diligence-request-list.md"
        role="upstream diligence list — Auctionomics" />
  <file path="projects/competitive-landscape/sources/competitive-analysis.md"
        role="primary comparative narrative — this project" />
</primarySources>
```

No other files are watched. Evaluation guides are explicitly excluded
(section 1).

### Trigger rules

```xml
<sourceUpdateTrigger>
  <rule>
    If ANY of the six upstream source files changes materially, first
    re-read ALL six to capture the current state, then determine whether
    competitive-analysis.md needs updating.
  </rule>
  <rule>
    If competitive-analysis.md is updated (either manually or because
    upstream sources changed), rerun the full artifact chain: scenes →
    citations → narration → audio → render.
  </rule>
  <rule>
    If an upstream source change does NOT materially affect the comparative
    analysis (e.g., a formatting-only edit), report a no-op.
  </rule>
  <rule>
    When re-reading upstream sources, do NOT modify them. Treat them as
    read-only inputs. Only modify files under projects/competitive-landscape/.
  </rule>
  <rule>
    When an upstream source changes, the comparative document may need to
    update its relative positioning. A change in one company's traction
    section can affect the competitive-context framing for all three.
    Re-evaluate the full comparison, not just the section about the
    changed company.
  </rule>
  <rule>
    Scene data in scenes.ts must reflect the current state of all three
    upstream memos simultaneously. Do not update one company's data
    without checking whether the other two companies' relative positions
    have shifted.
  </rule>
  <rule>
    The comparative-analysis.md is a synthesis document. It must never
    introduce factual claims absent from the six approved upstream files.
    If an upstream memo is silent on a dimension, the comparative document
    must say "the public record does not address this" rather than filling
    the gap.
  </rule>
  <rule>
    scenes.ts must not introduce any claim absent from
    competitive-analysis.md. The chain is: upstream sources →
    competitive-analysis.md → scenes.ts. No shortcuts.
  </rule>
</sourceUpdateTrigger>
```

### Provenance gate

Before narration generation or audio rendering, the person executing the
iteration prompt must manually verify that every factual claim in
`scenes.ts` has a corresponding entry in the claim-provenance appendix of
`competitive-analysis.md`. This is a manual gate because the repo has no
machine tooling to enforce it.

```xml
<provenanceGate>
  <rule>
    Before proceeding to narration or audio generation, verify that every
    factual claim in scenes.ts exists in competitive-analysis.md and is
    listed in the claim-provenance appendix with a valid source tag. If
    any claim in scenes.ts cannot be traced, remove or rewrite it before
    generating narration.
  </rule>
  <rule>
    Report the provenance check result explicitly in the final response:
    how many claims were checked, how many passed, and whether any were
    removed or rewritten.
  </rule>
</provenanceGate>
```

### Visual QA gate

Before committing the final render, inspect stills from the 4 most
layout-sensitive scenes.

```xml
<visualQaGate>
  <rule>
    After audio generation and before or during the render step, inspect
    stills or Studio output for the following scenes: traction,
    riskComparison, gatingIssues, and positioning. Verify that: (a) no
    content overlaps the footer or progress bar, (b) all text is fully
    visible and not truncated, (c) timeline lanes are readable and
    chronologically ordered, and (d) spectrum markers are visually
    distinguishable. Report any issues before proceeding to final render.
  </rule>
</visualQaGate>
```

### Scene backbone — all 7 scenes fully specified

```xml
<sceneBackbone>
  <scene id="overview">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Recommendation" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Recommendation" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Recommendation" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Market overview" />
    </sources>
    <purpose>Frame the market: 3 credible entrants, different approaches,
    same opportunity. Set the analytical tone — this is a positioning map,
    not a ranking.</purpose>
  </scene>

  <scene id="approaches">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Company snapshot" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Team and operating-model risk" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Company snapshot" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Team and operating-model risk" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Company snapshot" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Team and operating-model risk" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Approach comparison" />
    </sources>
    <purpose>Show the three models side by side: benchmark + swaps vs.
    index + marketplace vs. combinatorial auction. Include team and
    backing inline — who leads each, who funds it, what scale of
    operations exists.</purpose>
  </scene>

  <scene id="traction">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Traction comparison" />
    </sources>
    <purpose>Parallel timeline of dated proof points from all three memos.
    Show who has live activity vs. distribution vs. announcement only.</purpose>
  </scene>

  <scene id="riskComparison">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Core risk #1: legal, regulatory, and threshold-path ambiguity" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Core risk #2: benchmark governance, IOSCO readiness, IP, and valuation independence" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Core risk #3: balance-sheet, technology, privacy, and conflicts risk" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Core risk #4: market formation, runway, and key-person risk" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Core risk #1: entity structure, regulatory ambiguity, and forward-contract/derivatives positioning" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Core risk #2: index methodology governance, IOSCO readiness, and benchmark independence" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Core risk #3: conflicts from proprietary-trading-firm parentage" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Core risk #4: market formation, competitive durability, and runway" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Core risk #1: partnership structure, governance, and durability" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Core risk #2: product regulatory pathway" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Core risk #3: market-design feasibility for compute" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Core risk #4: market formation, competitive timing, and traction" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Risk dimension comparison" />
    </sources>
    <purpose>Compare risk profiles across 4 dimensions: regulatory pathway,
    benchmark/methodology governance, counterparty/conflict risk, and
    market formation. All 4 core risks from each IC memo are in scope.
    Use ComparisonMatrix with factual status per cell. No subjective
    scoring — each cell states the observable fact.</purpose>
  </scene>

  <scene id="gatingIssues">
    <sources>
      <source path="projects/ornn/sources/management-diligence-request-list.md"
              section="A. Corporate, legal, and regulatory (**P0 / gating**)" />
      <source path="projects/ornn/sources/management-diligence-request-list.md"
              section="C. Intellectual property, data rights, and benchmark governance (**P0 / gating**)" />
      <source path="projects/ornn/sources/management-diligence-request-list.md"
              section="D. Commercial traction and liquidity formation (**P0 / gating**)" />
      <source path="projects/ornn/sources/management-diligence-request-list.md"
              section="F. Finance, capitalization, and runway (**P0 / gating**)" />
      <source path="projects/ornn/sources/management-diligence-request-list.md"
              section="First-call questions for management" />
      <source path="projects/silicon-data/sources/management-diligence-request-list.md"
              section="A. Corporate, legal, and regulatory (P0 / gating)" />
      <source path="projects/silicon-data/sources/management-diligence-request-list.md"
              section="C. Intellectual property, data rights, and index governance (P0 / gating)" />
      <source path="projects/silicon-data/sources/management-diligence-request-list.md"
              section="D. Commercial traction and marketplace formation (P0 / gating)" />
      <source path="projects/silicon-data/sources/management-diligence-request-list.md"
              section="F. Finance, capitalization, and runway (P0 / gating)" />
      <source path="projects/silicon-data/sources/management-diligence-request-list.md"
              section="First-call questions for management" />
      <source path="projects/auctionomics/sources/management-diligence-request-list.md"
              section="A. Partnership structure and governance (P0 / gating)" />
      <source path="projects/auctionomics/sources/management-diligence-request-list.md"
              section="B. Product specification and market design (P0 / gating)" />
      <source path="projects/auctionomics/sources/management-diligence-request-list.md"
              section="C. Regulatory pathway (P0 / gating)" />
      <source path="projects/auctionomics/sources/management-diligence-request-list.md"
              section="E. Team, budget, and timeline (P0 / gating)" />
      <source path="projects/auctionomics/sources/management-diligence-request-list.md"
              section="First-call questions for management" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Gating issues comparison" />
    </sources>
    <purpose>Show selected P0 diligence asks grouped around shared
    comparison themes, drawn from the P0 sections and first-call questions
    of each diligence list. Not every P0 section is included — the
    editorial selection focuses on themes that are comparable across all
    three (regulatory pathway, traction proof, runway) plus themes unique
    to one company (partnership structure for Auctionomics, entity
    confusion for Silicon Data, de minimis threshold for Ornn).
    ComparisonMatrix with theme rows and company columns.</purpose>
  </scene>

  <scene id="positioning">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Core risk #1: legal, regulatory, and threshold-path ambiguity" />
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Core risk #1: entity structure, regulatory ambiguity, and forward-contract/derivatives positioning" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="What appears real today" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Core risk #2: product regulatory pathway" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Relative positioning and recommendation" />
    </sources>
    <purpose>At most 2 factually measurable spectrums.
    Spectrum 1: "Disclosed compute-product stage" — positions based on
    observable product status from "What appears real today" sections.
    Spectrum 2: "Disclosed regulatory posture for compute" — positions
    based on disclosed registrations, filings, or exemptions from the
    regulatory risk sections. OneChronos' equities ATS registration does
    not count toward compute posture. Every position rationale must state
    scope explicitly.</purpose>
  </scene>

  <scene id="recommendation">
    <sources>
      <source path="projects/ornn/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/silicon-data/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/auctionomics/sources/investment-committee-memo.md"
              section="Bottom line" />
      <source path="projects/competitive-landscape/sources/competitive-analysis.md"
              section="Relative positioning and recommendation" />
    </sources>
    <purpose>Diligence resource allocation: which to prioritize, which to
    watch, which to defer. SideBySideCards with one card per company
    showing the recommended next action and the hardest gating issue.
    Closing note summarizes the comparative view.</purpose>
  </scene>
</sceneBackbone>
```

### Derived artifacts

```xml
<derivedArtifacts>
  <artifact path="projects/competitive-landscape/sources/competitive-analysis.md" />
  <artifact path="projects/competitive-landscape/video/data/scenes.ts" />
  <artifact path="projects/competitive-landscape/video/data/citations.ts" />
  <artifact path="projects/competitive-landscape/video/data/narration.json" />
  <artifact path="projects/competitive-landscape/video/data/narration.ts" />
  <artifact path="projects/competitive-landscape/video/compositions/CompetitiveLandscapeV1.tsx" />
  <artifact path="projects/competitive-landscape/video/public/audio/" />
  <artifact path="projects/competitive-landscape/video/out/competitive-landscape-v1.mp4" />
</derivedArtifacts>
```

---

## 11. Commit strategy

1. **Shared types, validation, and components** — `types/comparison.ts`,
   `validation/comparison.ts`, `validation/comparison.test.ts`,
   `ComparisonMatrix.tsx`, `SideBySideCards.tsx`, `ParallelTimeline.tsx`,
   `DimensionSpectrum.tsx`
2. **Comparative source document** — `competitive-analysis.md` with
   claim-provenance appendix
3. **Video project** — all files under
   `projects/competitive-landscape/video/`, `iteration-prompt.xml`,
   `Root.tsx` registration, `README.md`, `CLAUDE.md`, and `AGENTS.md`
   updates

---

## 12. Validation

```bash
# Fast shared gate (includes new validation tests)
pnpm --dir video test:shared

# Full verify
pnpm --dir video project:verify -- --project competitive-landscape

# Confirm all projects still pass
pnpm --dir video acceptance -- --all
```

---

## 13. Decided design choices

The following were open questions in earlier drafts. They are now decided.

1. **Company colors:** Use distinct but restrained company accent colors
   derived from the existing theme palette. Three-company comparison views
   need persistent visual identity to be readable. Keep the accents muted
   — this is an IC deliverable, not a marketing piece.

2. **Narration approach:** Use company names. Structural labels
   ("benchmark-first entrant") are useful as appositives on first mention
   but should not replace names throughout. An IC viewer should not have to
   translate labels back to company names while watching.

3. **Source document depth:** Lighter 2-3 page synthesis plus the
   claim-provenance appendix. A full 5-8 page memo risks duplicating the
   upstream IC memos instead of serving the video. The comparative memo's
   job is to frame the relative positioning, not to re-argue each company's
   case.
