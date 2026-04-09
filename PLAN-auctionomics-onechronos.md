# Implementation Plan: Auctionomics / OneChronos Project

**Date:** April 9, 2026
**Status:** Draft — awaiting review before execution
**Slug:** `auctionomics` (short, unambiguous; the OneChronos partnership is the
subject but Auctionomics is the primary entity driving the compute-market thesis)

---

## 0. Context

The Ornn IC memo (`projects/ornn/sources/investment-committee-memo.md`)
identifies Auctionomics and OneChronos as a credible competitive entrant in the
GPU-compute market-infrastructure space:

> Auctionomics and OneChronos publicized a GPU-compute market partnership in
> August 2025; Auctionomics was co-founded by Paul Milgrom, a 2020 Nobel
> laureate in economics, and OneChronos already operates a Smart Market in
> financial markets.

This plan creates a dedicated managed video project for the
Auctionomics/OneChronos initiative, following the same workflow and standards
used for `projects/ornn/` and `projects/silicon-data/`.

---

## 1. Create the research-only project skeleton

Create the directory structure and initial scaffolds:

```
projects/auctionomics/
  research/
    sources.md             # Master source inventory (empty scaffold)
    gaps.md                # Research gap tracker (initial questions)
    web/                   # One markdown file per fetched source
      .gitkeep             # Track directory before source captures exist
  research-brief.md        # Phase 1 brief governing research acquisition
  sources/                 # Empty until Stage 2 drafting begins
    .gitkeep               # Track directory until source documents exist
```

### 1a. Write `research-brief.md`

Model on `projects/silicon-data/research-brief.md`. Must define:

- Relationship to the existing repo (third managed project candidate)
- Target directory structure
- Research scope and constraints (public-record only, same evidentiary standard
  as Ornn and Silicon Data memos)
- Source inventory table (initial rows for known sources)
- Research gaps to resolve (see section 2 below)
- Target documents and acceptance criteria
- Sequencing rules (research before drafting)
- Completion criteria
- Tooling requirement: all web data acquisition via Firecrawl MCP tools

### 1b. Write `research/gaps.md`

Initial gap tracker. Key questions to resolve:

**Corporate / entity structure:**
- What is Auctionomics' legal entity structure?
- What is OneChronos' legal entity structure (ATS registration, broker-dealer status)?
- What is the legal form of the partnership — JV, contractual, equity stake, or informal?
- Where are they incorporated?

**Product and market design:**
- What is the GPU-compute market product? Auction mechanism, continuous market, or hybrid?
- Is there a public benchmark, index, or reference price?
- Is there a live product or only an announcement?
- What is the relationship to OneChronos' existing Smart Market ATS?
- Is the compute product operating under OneChronos' existing ATS registration or separately?

**Team and principals:**
- Paul Milgrom's current role at Auctionomics (active or advisory)?
- Who runs day-to-day operations at Auctionomics?
- OneChronos leadership (CEO, CTO, key personnel)?
- Combined team size and control-function hires (legal, compliance, risk)?

**Funding and backers:**
- Auctionomics funding history and investors?
- OneChronos funding history and investors?
- Partnership-specific funding or commitments?

**Traction and distribution:**
- Any visible customers, trading partners, or integrations?
- Any evidence of actual compute-market trading activity?
- Any data vendor distribution (Bloomberg, Refinitiv, etc.)?

**Regulatory and legal:**
- OneChronos' ATS registration status and scope (equities only, or broader)?
- Any CFTC, NFA, or SEC registrations relevant to compute derivatives?
- Any visible legal disclosures or risk statements for the compute product?

**Competitive positioning:**
- How does their market-design approach differ from Ornn (benchmark + bilateral
  swaps) and Silicon Data (index + marketplace matching)?
- Is the auction-mechanism approach a structural advantage or a niche play?

### 1c. Write `research/sources.md`

Initial source inventory with rows for:

| # | Source | URL / Reference | Status |
|---|--------|----------------|--------|
| 1 | Auctionomics — website | auctionomics.com | Not fetched |
| 2 | Auctionomics — press / media | auctionomics.com/home-1/inthepress | Not fetched |
| 3 | OneChronos — website | onechronos.com | Not fetched |
| 4 | OneChronos — about / team | onechronos.com (team/about section) | Not fetched |
| 5 | GPU-compute partnership announcement (Aug 2025) | TBD | Not fetched |
| 6 | Paul Milgrom — Nobel / public bio | TBD | Not fetched |
| 7 | OneChronos ATS — SEC/FINRA filings | TBD | Not fetched |
| 8 | Third-party press coverage | TBD | Not fetched |

---

## 2. Gather research

Using Firecrawl MCP tools exclusively:

1. `firecrawl_map` on `auctionomics.com` and `onechronos.com` to discover pages
2. `firecrawl_scrape` each relevant page → save to `research/web/`
3. `firecrawl_search` for:
   - "Auctionomics OneChronos GPU compute"
   - "Auctionomics GPU market partnership"
   - "OneChronos compute market"
   - "Paul Milgrom GPU compute"
   - "OneChronos ATS registration SEC"
4. Save all search results and scraped pages to `research/web/` with URL,
   date, tool used, and reliability tag
5. Update `research/sources.md` and `research/gaps.md` continuously

**Gate:** Do not proceed to Step 3 until `research/gaps.md` has every gap
either resolved (with a pointer to the `web/` file) or explicitly marked
unanswerable. If the public record is too thin, document that finding and
pause rather than drafting speculatively.

---

## 3. Produce authoritative source documents

Draft the two critical source documents under `projects/auctionomics/sources/`,
plus the recommended evaluation guide unless explicitly deferred:

### 3a. `investment-committee-memo.md`

Same section structure as the Ornn and Silicon Data memos:

| Section | Content focus |
|---------|--------------|
| Recommendation | Gated recommendation with enumerated open issues |
| Company snapshot | What Auctionomics and OneChronos are, the partnership, principals, backing |
| What appears real today | Dated, sourced proof points only |
| Competitive context | Position vs. Ornn, Silicon Data/Compute Exchange, and other visible players — neutral market view |
| Team and operating-model risk | Named personnel, backgrounds, team size, control gaps |
| Core risks (numbered) | At minimum: (1) product/regulatory clarity, (2) market-design feasibility for compute, (3) partnership durability and governance, (4) market formation and competitive position |
| Bottom line | Restate recommendation, name gating issues |
| References | Numbered footnotes with URLs |

### 3b. `management-diligence-request-list.md`

Same structure as existing projects. Must address Auctionomics/OneChronos-specific
items: ATS scope, auction-mechanism governance, Milgrom's operational role,
partnership legal structure, compute-product regulatory pathway.

### 3c. `management-response-evaluation-guide.md`

Recommended companion document. Reuse the scoring framework from existing
projects, with Auctionomics/OneChronos-specific questions and behavioral
descriptions. This is useful for diligence workflow quality but is not a hard
promotion blocker if the memo and diligence list are complete.

### 3d. Promotion readiness gate

Do not promote the project to managed video until all of the following are true:

- `investment-committee-memo.md` is strong enough to support a coherent scene
  sequence without speculative claims.
- `management-diligence-request-list.md` is clear enough to support a closing
  ask set.
- `research/gaps.md` marks every material gap as resolved, unanswerable, or
  intentionally deferred with rationale.
- The evidence base is stable enough to freeze a first video version.

If this gate fails, stop at the research/source-document state and do not create
video code or generated artifacts.

---

## 4. Promote to managed video project

After the readiness gate passes, create the full `projects/auctionomics/video/`
tree, using `projects/silicon-data/video/` as the structural template:

```
projects/auctionomics/
  iteration-prompt.xml              # Project-specific workflow prompt
  video/
    project.config.json
    project.ts
    compositions/
      AuctionomicsIcV1.tsx
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

Track `.gitkeep` in generated artifact directories, but do not commit generated
WAV files, generated audio metadata, or rendered MP4s by default unless the
execution scope explicitly calls for checked-in artifacts.

### 4a. `project.config.json`

```json
{
  "slug": "auctionomics",
  "defaultCompositionId": "AuctionomicsIcV1",
  "defaultOutputName": "auctionomics-ic-v1.mp4",
  "runtimeAssetKinds": ["audio"]
}
```

### 4b. `data/scene-order.json`

Use the same 8-scene structure unless the memo's editorial content demands a
different scene breakdown. Both existing projects use:

```json
["opening", "whyMatters", "traction", "attractive", "riskLegal", "riskCounterparty", "riskGovernance", "closing"]
```

Adjust scene IDs only if the Auctionomics risk structure genuinely differs
(e.g., if the core risks do not map cleanly to "legal", "counterparty",
"governance"). Keep IDs stable if the standard set works.

### 4c. `data/scenes.ts`

Primary narrative implementation. Structure follows the existing pattern:

- Export a `const auctionomicsIcV1` object with `meta` and `scenes` properties
- Each scene has `durationInFrames`, `sectionLabel`, `title`, and scene-type-specific fields
- Export `SceneId` type, `sceneOrder`, `sceneStartsInFrames`, `totalDurationInFrames`
- Use `buildSceneTimeline` from `@shared/utils/sceneOrder`

Scene durations should be calibrated to narration text length. Use existing
projects as duration reference points (typically 360–645 frames per scene at
30fps).

### 4d. `data/citations.ts`

Map each scene to its memo source citations, same `CitationMap<SceneId>` type.

### 4e. `data/narration.json`

One entry per scene, matching `scene-order.json`. Fields:
- `sceneId`, `text`, `voice` (default `"af_bella"`), `langCode` (default `"a"`),
  `speed` (typically 1.2–1.35), `maxDurationFrames`

`maxDurationFrames` must equal the scene's `durationInFrames` from `scenes.ts`.

### 4f. `data/narration.ts`

Boilerplate — import `narration.json`, validate with `validateNarrationManifest`,
export `narrationByScene`. Copy from `projects/silicon-data/video/data/narration.ts`
and update the import path.

### 4g. `project.ts`

Export an `auctionomicsProject: ProjectManifest` binding the composition, fps,
dimensions (1920×1080), and total duration.

### 4h. `compositions/AuctionomicsIcV1.tsx`

Use `InvestorMemoComposition` from `@shared/components/InvestorMemoComposition`.
Pass project-specific data and a tailored `whyMattersHeadline`. Add
`titleSizes` overrides only if the default sizing produces layout issues.

### 4i. `iteration-prompt.xml`

Create `projects/auctionomics/iteration-prompt.xml`, adapted from
`projects/ornn/iteration-prompt.xml`. This is the project-specific workflow
prompt that governs re-execution when source documents change.

Key adaptations from the Ornn version:

- **`<repository>`:** Update all paths to `projects/auctionomics/...`, set
  `<mainComposition id="AuctionomicsIcV1" />`, set
  `<renderOutput>projects/auctionomics/video/out/auctionomics-ic-v1.mp4</renderOutput>`
- **`<primarySources>`:** Point to
  `projects/auctionomics/sources/investment-committee-memo.md` and
  `projects/auctionomics/sources/management-diligence-request-list.md`
- **`<derivedArtifacts>`:** List all files under
  `projects/auctionomics/video/data/`, `projects/auctionomics/video/compositions/`,
  `projects/auctionomics/video/public/audio/`, and
  `projects/auctionomics/video/out/`
- **`<sceneBackbone>`:** Rewrite each `<scene>` element to reflect the
  Auctionomics/OneChronos memo structure — source sections, purpose, and
  preferred data fields must correspond to the actual IC memo sections, not
  Ornn's. If core risks differ (e.g., partnership durability replaces
  counterparty risk), the backbone must reflect that.
- **`<commands>`:** Replace `--project ornn` with `--project auctionomics`
  throughout
- **`<coreWorkflow>` principles:** Keep all generic principles (source
  authority, no generic pipeline, manual editorial curation, institutional
  tone, af_bella voice). Update path references to `projects/auctionomics/`.
- **`<filePolicy>`:** Update every path to the auctionomics project. Keep the
  shared-infra entries (`video/src/components/`, `video/src/theme.ts`, etc.)
  unchanged.

The iteration prompt must be self-contained — a future Claude Code session
should be able to run the full workflow from this file alone without referring
back to the Ornn version.

---

## 5. Register in the shared Remotion app

Edit `video/src/Root.tsx`:

```typescript
import {auctionomicsProject} from "@projects/auctionomics/video/project";

const projects = [ornnProject, siliconDataProject, auctionomicsProject];
```

---

## 6. Update repo-level references

### 6a. `README.md`

Add `projects/auctionomics/` to the "Current Managed Projects" list.

### 6b. `CLAUDE.md`

Add `projects/auctionomics/` to the managed projects list.

---

## 7. Validate and render

Install dependencies if the local toolchains are not already current:

```bash
pnpm --dir video install
uv sync
```

Run the validation path:

```bash
# Fast shared gate
pnpm --dir video test:shared

# Full verify (typecheck + lint + audio + render + output check)
pnpm --dir video project:verify -- --project auctionomics

# Confirm existing projects still pass
pnpm --dir video acceptance -- --all
```

Use `pnpm --dir video project:audio -- --project auctionomics` only when
debugging narration/audio before the full verify path; `project:verify` reruns
audio generation and staging. Also run a manual Studio inspection before final
sign-off:

```bash
pnpm --dir video project:dev -- --project auctionomics
```

Confirm composition registration, layout, typography, staged audio, and obvious
timing issues. Capture post-render review notes in
`projects/auctionomics/v1-review-notes.md` if useful.

---

## 8. Commit strategy

Commit in logical stages rather than one monolithic commit:

1. **Research skeleton** — `research-brief.md`, `research/gaps.md`,
   `research/sources.md`, `research/web/.gitkeep`, `sources/.gitkeep`
2. **Research materials** — `research/web/` files, updated `sources.md` and
   `gaps.md`
3. **Source documents** — `investment-committee-memo.md`,
   `management-diligence-request-list.md`, and the evaluation guide if produced
4. **Managed video project** — tracked source files under
   `projects/auctionomics/video/`, `.gitkeep` placeholders for generated
   artifact directories, `iteration-prompt.xml`, `Root.tsx` registration,
   `README.md` and `CLAUDE.md` updates

Do not include generated WAV files, generated audio metadata, staged
`video/public/` files, or rendered MP4s in normal commits unless explicitly
requested.

---

## 9. Open questions for review

Before execution, please confirm:

1. **Slug:** Is `auctionomics` acceptable, or do you prefer something else
   (e.g., `auc-onechronos`, `milgrom-compute`, `smart-market`)?
2. **Scope of research:** Should this cover only the Auctionomics/OneChronos
   GPU-compute partnership, or also Auctionomics' broader business and
   OneChronos' existing equities ATS?
3. **Scene structure:** Should I use the standard 8-scene structure, or do you
   expect the risk profile to warrant a different scene breakdown?
4. **Research depth:** The Silicon Data research brief was very thorough
   (19 web sources, detailed gap tracker). Should I target the same depth, or
   is a lighter pass acceptable given that this is a partnership rather than a
   standalone company?
5. **Artifact policy:** Should rendered MP4/audio artifacts remain local-only
   by default, or should this project intentionally check in final artifacts?
