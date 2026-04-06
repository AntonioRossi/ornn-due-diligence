# Remotion v1 Build Plan

## Objective

Build a **reviewable investor-grade video v1** inside this repo that presents the current Ornn financial/investment analysis as a short, polished, text-led Remotion video.

This v1 is intended to communicate the current conclusion clearly to a professional investor audience:

> **Authorize phase-two diligence; do not approve an investment or term sheet yet.**

The implementation should focus on **editorial clarity, institutional visual tone, and deterministic rendering**, not on building a reusable media platform.

## What exists today

The repo currently contains two source documents only:

- `investment-committee-memo.md`
- `management-diligence-request-list.md`

These are strong enough to support a first video, but they are **not structured data**. For v1, the correct approach is to **manually curate** the narrative into typed scene content rather than trying to auto-convert Markdown into slides.

## v1 Output

The v1 deliverable should be a single main composition with these target specs:

- Format: `MP4`
- Resolution: `1920x1080`
- Frame rate: `30fps`
- Duration: `105-120 seconds`
- Tone: restrained, institutional, high-signal
- Audio: none for v1
- Narrative mode: on-screen text + motion graphics + citations

## Narrative Scope

The source narrative should come primarily from the memo:

- Recommendation
- Company snapshot
- Why this matters
- What appears real today
- What is attractive
- Core risk #1
- Core risk #2
- Core risk #3
- Bottom line

The diligence list should be used selectively, mainly for:

- closing frame content
- next-step diligence framing
- first-call management questions

## Proposed Repo Additions

Create a standalone Remotion app under `video/` so the current research files remain clean and independent.

```text
video/
  package.json
  tsconfig.json
  remotion.config.ts
  public/
    fonts/
    marks/
  src/
    index.ts
    Root.tsx
    theme.ts
    data/
      ornn-ic-v1.ts
      citations.ts
    compositions/
      OrnnIcV1.tsx
    components/
      Frame.tsx
      SectionTitle.tsx
      ThesisCard.tsx
      Timeline.tsx
      ThreeLayerModel.tsx
      RiskPanel.tsx
      DiligenceQuestions.tsx
      CitationFooter.tsx
      ProgressBar.tsx
    utils/
      timing.ts
      layout.ts
  out/
```

## Editorial Approach

Do **not** build a generic Markdown parser for v1.

Instead:

- extract the final on-screen copy manually from the memo
- store it in `video/src/data/ornn-ic-v1.ts`
- keep each scene as a typed content object
- keep citations in a separate structured file

This is lower risk, faster to review, and much more controllable for an investor-facing first cut.

## Visual Direction

Use a visual language that reads like institutional research, not startup marketing.

- Background: deep slate or warm off-black
- Accent color: muted gold or copper for emphasis
- Supporting colors: steel, stone, off-white
- Typography pairing: one serious serif for emphasis + one technical sans for body labels
- Motion: low-amplitude, precise, linear or eased, no flashy transitions
- Graphics: timelines, cards, dividers, simple diagrams, restrained data bars

The video should feel closer to an investment committee memo in motion than to a product promo.

## Scene Plan

### Scene 1. Opening thesis

Duration: `10-12s`

Purpose:

- establish company, date, and recommendation immediately

Content:

- title: `Ornn`
- subtitle: `Preliminary IC memo`
- thesis line: `Authorize phase-two diligence; do not approve an investment yet.`

Deliverable:

- animated title card with clean entrance and progress indicator

### Scene 2. Why this matters

Duration: `12-15s`

Purpose:

- frame the market-structure thesis

Content:

- Ornn as pricing and risk infrastructure for AI compute
- benchmark ownership as strategic leverage
- compute as a financeable infrastructure input

Deliverable:

- text-led thesis card with 2-3 supporting statements

### Scene 3. What appears real today

Duration: `18-22s`

Purpose:

- show there is real traction signal, not just concept

Content:

- OCPI / API exists
- Bloomberg Terminal inclusion
- Hydra partnership
- Architect / AX launch announcement
- Kalshi-related verification signal

Deliverable:

- animated milestone timeline with dated events

### Scene 4. Why the company is attractive

Duration: `12-15s`

Purpose:

- show the reinforcing business model layers

Content:

- benchmark data
- risk-transfer products
- liquidity / distribution

Deliverable:

- three-layer model diagram with short explanatory captions

### Scene 5. Risk 1: legal and regulatory ambiguity

Duration: `14-16s`

Purpose:

- explain the biggest gating issue

Content:

- mismatch between exchange-style marketing and legal disclosures
- multi-entity structure ambiguity
- unclear live product / jurisdiction / regulatory mapping

Deliverable:

- risk panel with highlighted contradictions and entity references

### Scene 6. Risk 2: counterparty and collateral risk

Duration: `14-16s`

Purpose:

- explain why this should be underwritten more like principal risk than SaaS

Content:

- direct counterparty exposure
- collateral segregation uncertainty
- need for capitalization, risk limits, and default management

Deliverable:

- risk panel with balance-sheet framing and controlled animation

### Scene 7. Risk 3: OCPI governance and liquidity proof

Duration: `14-16s`

Purpose:

- show why benchmark quality and actual market depth remain unresolved

Content:

- proprietary methodology risk
- contributor concentration unknowns
- lack of public metrics on notional, spreads, active counterparties, repeat behavior

Deliverable:

- risk panel with metric placeholders and unresolved-proof framing

### Scene 8. Bottom line and next step

Duration: `12-15s`

Purpose:

- close on the recommendation and diligence ask

Content:

- move to gated phase-two diligence
- do not approve final investment yet
- include 3-5 priority diligence asks

Deliverable:

- final recommendation card plus short diligence checklist

## Exact v1 Deliverables

The v1 implementation should produce the following concrete outputs.

### Code deliverables

- standalone Remotion project in `video/`
- one root composition: `OrnnIcV1`
- one typed content source file for scene copy
- one typed citations file
- shared theme tokens for color, spacing, type, and motion
- reusable components for title card, timeline, model diagram, risk panel, and citation footer
- one render command that outputs the main video locally

### Review deliverables

- one primary render at `1920x1080`
- one frame reference sheet or screenshot set from major scenes
- one markdown note listing any copy compromises or unresolved asset decisions

### Editorial deliverables

- final on-screen script for each scene
- citations mapped to scene claims
- explicit list of what was omitted from the source documents to keep the cut concise

## Acceptance Criteria

The v1 should be considered complete when all of the following are true:

- the video renders locally without manual editing after setup
- the runtime is within `105-120 seconds`
- every factual claim on screen maps back to the repo source text or memo citations
- all text remains readable at normal review size on a laptop
- no scene feels like a dense bullet wall
- the visual tone is credible for a financial professional audience
- the ending recommendation is unambiguous

## Out of Scope for v1

These should be explicitly excluded from the first implementation:

- generic Markdown-to-video automation
- voiceover recording or TTS
- background music or sound design
- live data pulls from external APIs
- reusable multi-company templating
- 4K export
- alternate aspect ratios
- deep charting system with real financial data ingestion

## Implementation Plan

### Phase 1. Editorial extraction

Estimated effort: `2-3 hours`

Tasks:

- extract the exact scene copy from the memo
- reduce dense paragraphs into investor-readable lines
- choose which diligence items survive into the closing frame
- define scene-by-scene citations

Output:

- approved story outline
- approved on-screen script draft

### Phase 2. Project setup

Estimated effort: `1.5-2.5 hours`

Tasks:

- initialize standalone Remotion app in `video/`
- set up TypeScript, root composition, render config, and scripts
- establish folder structure and theme tokens

Output:

- runnable local Remotion project

### Phase 3. Design system and motion language

Estimated effort: `2-3 hours`

Tasks:

- define typography, color system, spacing, and scene grid
- implement frame shell, title treatment, progress bar, footer citation style
- define motion primitives for fade, slide, stagger, and timeline reveal

Output:

- reusable presentation shell for all scenes

### Phase 4. Scene implementation

Estimated effort: `6-8 hours`

Tasks:

- build all 8 scenes
- wire scene timing
- connect scene copy and citation data
- keep transitions consistent and restrained

Output:

- complete first cut renderable end to end

### Phase 5. Review and polish

Estimated effort: `2-4 hours`

Tasks:

- tighten copy density
- fix timing issues
- improve readability and hierarchy
- render review cut
- make one revision pass

Output:

- review-ready v1 render

## Total Effort

Expected effort for this v1:

- Low end: `13.5 hours`
- Likely: `16-19 hours`
- High end with one revision pass: `20-23 hours`

That is roughly:

- `2 working days` for a focused build
- `3 working days` if review feedback is folded in during the same cycle

## Risks to Delivery

The main risks are not technical.

- Source material is prose-heavy and needs careful condensation.
- The repo does not contain charts, brand assets, or structured datasets.
- Investor-grade tone depends heavily on typography, pacing, and information density discipline.
- If the narrative expands beyond 120 seconds, quality will drop quickly.

## Recommended Review Gates

Review should happen at these three points:

1. **Narrative gate**
   Approve the 8-scene outline and the exact recommendation framing before any visual work deepens.

2. **Design gate**
   Approve 3 still frames:
   opening thesis, timeline, and risk panel.

3. **Cut gate**
   Review the first full render and limit changes to copy tightening, timing, and emphasis.

## Recommendation

Proceed with a **curated v1** in `video/`, not a generalized content engine.

That gives the best tradeoff between speed, quality, and investor credibility for the material currently in this repo.
