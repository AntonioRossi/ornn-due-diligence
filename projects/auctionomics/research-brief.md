# Auctionomics / OneChronos — Research Brief

**Status:** Phase 1 brief; research and source-document production in progress
**Created:** April 9, 2026
**Purpose:** Govern the acquisition of baseline source documents for the
Auctionomics/OneChronos GPU-compute market partnership as the third project
case, producing project-owned artifacts that can enter the managed video
workflow once research and drafting are complete.

---

## 1. Relationship to the multi-project workspace

This brief is **Phase 1** of the two-phase approach:

- **Phase 1 (this brief):** Research, draft, and stabilize the Auctionomics
  source documents. Place them directly in the Phase 2 directory structure so
  they never need to move.
- **Phase 2:** Promote the project into a managed video project under
  `projects/auctionomics/video/`, wire it to the shared Remotion
  infrastructure, and register it alongside Ornn and Silicon Data.

Phase 2 should not begin until every target document in this brief reaches
**Reviewed** status and the promotion readiness gate (section 10) is met.

---

## 2. Target directory structure

All artifacts produced by this brief land here:

```
projects/
  auctionomics/
    sources/
      investment-committee-memo.md          # Target document 1
      management-diligence-request-list.md  # Target document 2
      management-response-evaluation-guide.md # Target document 3
    research/
      sources.md                            # Master source inventory with full notes
      gaps.md                               # Updated gap tracker after research
      web/                                  # Saved page content, one file per source
        auctionomics-home.md
        onechronos-home.md
        ...                                 # one file per fetched source
```

Create this directory structure before writing any content. Do not place
files at the repo root or in any temporary location.

### Research artifacts (`research/`)

Raw research material is stored separately from final documents so that:

- **Auditability** — every claim in the final documents can be traced back
  to a specific file in `research/web/`
- **Resumability** — if work spans multiple sessions, the raw material is on
  disk rather than trapped in conversation history
- **Separation of concerns** — raw research stays raw; editorial judgment
  happens only in `sources/`

**`research/web/`** — one markdown file per fetched web page or search
result set. File name should reflect the source (e.g.,
`auctionomics-home.md`, `onechronos-about.md`, `search-gpu-compute-partnership.md`).
Each file must include:

- URL fetched
- Date fetched
- Tool used and parameters
- Raw content or relevant excerpts
- Reliability tag (company-generated / third-party / regulatory / unknown)

**`research/sources.md`** — the master source inventory table (mirrors
section 5 of this brief but lives on disk with full notes, not just a
summary row). Updated continuously as sources are acquired.

**`research/gaps.md`** — the gap tracker (mirrors section 7 of this brief
but lives on disk and is updated as gaps are resolved or declared
unanswerable). Each gap entry should note which `web/` file resolved it, or
state why it remains open.

### Tooling requirement

All web data acquisition **must** use the **Firecrawl MCP** server tools.
Do not use `WebSearch`, `WebFetch`, or `curl` for research data gathering.

The available Firecrawl tools and their intended use:

| Tool | Use for |
|------|---------|
| `firecrawl_search` | Keyword/topic web searches (replaces `WebSearch`) |
| `firecrawl_scrape` | Fetching and extracting a single URL's content (replaces `WebFetch`) |
| `firecrawl_crawl` | Crawling an entire site to discover all pages |
| `firecrawl_map` | Discovering URL structure of a site before targeted scraping |
| `firecrawl_extract` | Structured data extraction from pages |

**Recommended workflow per source:**

1. Use `firecrawl_map` on a domain (e.g., `auctionomics.com`) to discover all pages
2. Use `firecrawl_scrape` on each relevant page to get content
3. Save the scraped content to `research/web/<source-name>.md`
4. Use `firecrawl_search` for topic queries that span multiple domains

Each `research/web/` file must record which Firecrawl tool was used and the
parameters passed, so the fetch is reproducible.

### Workflow rule

The `research/` directory must be substantially populated before drafting
begins in `sources/`. Drafting directly from conversation context without
persisting the raw material first is not permitted — if a session is
interrupted, the research must survive.

---

## 3. Research scope and constraints

### In scope

- Public corporate website and product pages (Auctionomics, OneChronos)
- Press releases, news coverage, and partner announcements
- The August 2025 GPU-compute market partnership announcement
- LinkedIn profiles of key personnel (team composition, backgrounds)
- Paul Milgrom's public academic and professional profile
- Regulatory filings, registrations, or exemption notices (SEC, FINRA, CFTC, NFA)
- OneChronos ATS registration status and scope
- Investor announcements, funding disclosures, and backer profiles
- Public API documentation, methodology papers, whitepapers
- Conference presentations, podcasts, and published interviews
- Competitor and market-context materials that inform the thesis
- Auctionomics' broader business beyond GPU compute (as context for capability assessment)
- OneChronos' existing equities ATS (as context for market-design capability)

### Out of scope

- Private or confidential information
- Speculation presented as fact — if the public record is silent, say so
- Filling gaps with analogies from Ornn or Silicon Data — Auctionomics must
  stand on its own evidence

### Evidentiary standard

Match the Ornn and Silicon Data IC memos' discipline:

- Every factual claim must be attributed to a specific public source
- Self-reported figures must be labeled as such ("self-reported", "company-stated")
- Distinguish between what is **verified by third parties** vs. **company-generated**
- Distinguish between what is **live** vs. **announced** vs. **planned**
- Where the public record is silent, say "the public record does not show X"
  rather than omitting the topic

---

## 4. Target documents and acceptance criteria

### Document 1: Investment committee memo

**File:** `projects/auctionomics/sources/investment-committee-memo.md`

Must follow the same section structure as the Ornn and Silicon Data IC memos:

| Section | Acceptance criteria |
|---|---|
| **Recommendation** | Clear gated recommendation with enumerated open issues. Not a pitch. |
| **Company snapshot** | What Auctionomics and OneChronos are, the partnership, principals, backing. Every self-reported figure flagged. |
| **What appears real today** | Dated, sourced proof points only. No inferred traction. |
| **Competitive context** | Position relative to Ornn, Silicon Data, and any other visible players. Must not be written from Auctionomics' perspective — neutral market view. |
| **Team and operating-model risk** | Named personnel, backgrounds, team size, control-function gaps, related-party items. |
| **Core risks (numbered)** | At minimum: (1) product/regulatory clarity, (2) market-design feasibility for compute, (3) partnership durability and governance, (4) market formation and competitive position. Each risk must cite specific public evidence or specific public-record gaps. |
| **Bottom line** | Restate recommendation, name the hardest gating issues, and state what would change the conclusion. |
| **References** | Numbered footnotes with URLs, matching the Ornn and Silicon Data memo format. |

**Done when:** Every section populated, every claim sourced, editorial tone
matches the existing memos (analytical, not promotional), and a self-review
finds no unsourced assertions.

### Document 2: Management diligence request list

**File:** `projects/auctionomics/sources/management-diligence-request-list.md`

Must follow the same structure as the Ornn and Silicon Data diligence request lists:

| Aspect | Acceptance criteria |
|---|---|
| **Preamble** | Scoped to Auctionomics/OneChronos, dated, public-information-based framing. |
| **Priority labeling** | P0 / gating vs. P1 / important, same convention as existing projects. |
| **Domain sections** | At minimum: Corporate/legal/regulatory, Partnership structure, Market design and mechanism, Tax/entity, IP/data/methodology, Commercial traction/liquidity, Counterparty/risk/conflicts, Finance/capitalization, Technology/ops/privacy, Management/governance. |
| **Auctionomics-specific items** | Must address the partnership legal form, Milgrom's operational role, ATS scope for compute, auction-mechanism governance, and compute-product regulatory pathway — not copy-paste from existing lists with names swapped. |
| **First-call questions** | Tailored set of management-call questions specific to Auctionomics/OneChronos public-record gaps. |

**Done when:** Each section has substantive, Auctionomics/OneChronos-specific
requests that could not be mistaken for generic templates.

### Document 3: Management response evaluation guide

**File:** `projects/auctionomics/sources/management-response-evaluation-guide.md`

Must follow the same rubric structure as the Ornn and Silicon Data evaluation guides:

| Aspect | Acceptance criteria |
|---|---|
| **Scoring framework** | Reuse the two-track scoring (management representation + proof status) and the four failure types. These are generic — copy them. |
| **Questions** | Each question must be Auctionomics/OneChronos-specific. The partnership-governance question must address the Milgrom/OneChronos structure, not a generic partnership template. |
| **Acceptable / Concerning / Unacceptable** | Concrete behavioral descriptions for each question, not generic placeholders. |
| **Decision framework** | Reuse the existing structure (pause-or-pass, strict gating, hold for evidence) but with Auctionomics/OneChronos-specific examples. |

**Done when:** An analyst unfamiliar with Auctionomics could use this document
to run a management call and score the answers without additional context.

---

## 5. Source inventory

Track every source found during research. Update this table as sources are
discovered.

| # | Source | URL / Reference | Date | Covers | Reliability | Status |
|---|--------|----------------|------|--------|-------------|--------|
| 1 | Auctionomics — website | auctionomics.com | — | Company overview, team, services | Company-generated | Not fetched |
| 2 | Auctionomics — press / media | auctionomics.com/home-1/inthepress | — | Press coverage, announcements | Company-generated | Not fetched |
| 3 | OneChronos — website | onechronos.com | — | Company overview, ATS, Smart Market | Company-generated | Not fetched |
| 4 | OneChronos — about / team | onechronos.com (team/about section) | — | Team, backgrounds | Company-generated | Not fetched |
| 5 | GPU-compute partnership announcement (Aug 2025) | TBD | — | Partnership scope, mechanism | TBD | Not fetched |
| 6 | Paul Milgrom — Nobel / public bio | TBD | — | Background, credentials, role | Third-party | Not fetched |
| 7 | OneChronos ATS — SEC/FINRA filings | TBD | — | Registration, scope, regulatory status | Regulatory | Not fetched |
| 8 | Third-party press coverage | TBD | — | Independent reporting | Third-party | Not fetched |

**Rows should be added as research progresses.** Do not remove rows for sources
that turned out to be thin — mark them as "Low value" in the Reliability column
so the gap is visible.

---

## 6. Known information baseline

What the existing Ornn IC memo already tells us about Auctionomics/OneChronos:

- Auctionomics and OneChronos publicized a GPU-compute market partnership in
  August 2025.
- Auctionomics was co-founded by Paul Milgrom, a 2020 Nobel laureate in
  economics.
- OneChronos already operates a Smart Market in financial markets.
- They are identified as a credible competitive entrant in the GPU-compute
  market-infrastructure space alongside Ornn and Silicon Data.

This is the starting point, not the finish line. Final documents must still
stand on directly persisted public sources under `research/web/`.

---

## 7. Research gaps to resolve

These are the questions the public-record research must answer (or explicitly
declare unanswerable) before drafting can begin.

### Corporate / entity structure
- [ ] What is Auctionomics' legal entity structure?
- [ ] What is OneChronos' legal entity structure (ATS registration, broker-dealer status)?
- [ ] What is the legal form of the partnership — JV, contractual, equity stake, or informal?
- [ ] Where are they incorporated?

### Product and market design
- [ ] What is the GPU-compute market product? Auction mechanism, continuous market, or hybrid?
- [ ] Is there a public benchmark, index, or reference price?
- [ ] Is there a live product or only an announcement?
- [ ] What is the relationship to OneChronos' existing Smart Market ATS?
- [ ] Is the compute product operating under OneChronos' existing ATS registration or separately?

### Team and principals
- [ ] Paul Milgrom's current role at Auctionomics (active or advisory)?
- [ ] Who runs day-to-day operations at Auctionomics?
- [ ] OneChronos leadership (CEO, CTO, key personnel)?
- [ ] Combined team size and control-function hires (legal, compliance, risk)?

### Funding and backers
- [ ] Auctionomics funding history and investors?
- [ ] OneChronos funding history and investors?
- [ ] Partnership-specific funding or commitments?

### Traction and distribution
- [ ] Any visible customers, trading partners, or integrations?
- [ ] Any evidence of actual compute-market trading activity?
- [ ] Any data vendor distribution (Bloomberg, Refinitiv, etc.)?

### Regulatory and legal
- [ ] OneChronos' ATS registration status and scope (equities only, or broader)?
- [ ] Any CFTC, NFA, or SEC registrations relevant to compute derivatives?
- [ ] Any visible legal disclosures or risk statements for the compute product?

### Competitive positioning
- [ ] How does their market-design approach differ from Ornn (benchmark + bilateral
  swaps) and Silicon Data (index + marketplace matching)?
- [ ] Is the auction-mechanism approach a structural advantage or a niche play?

---

## 8. Document status tracker

| Document | Status | Blockers |
|----------|--------|----------|
| IC memo — Recommendation | Not started | Research incomplete |
| IC memo — Company snapshot | Not started | Research incomplete |
| IC memo — What appears real | Not started | Research incomplete |
| IC memo — Competitive context | Not started | Research incomplete |
| IC memo — Team risk | Not started | Research incomplete |
| IC memo — Core risks | Not started | Research incomplete |
| IC memo — Bottom line | Not started | Research incomplete |
| Diligence request list | Not started | IC memo not drafted |
| Evaluation guide | Not started | Diligence list not drafted |

**Status values:** `Not started` → `Research in progress` → `Drafted` → `Reviewed` → `Final`

**Rule:** The diligence request list should not be drafted until the IC memo
reaches at least `Drafted`, because the memo identifies the gating issues that
the request list must operationalize. The evaluation guide should not be drafted
until the request list reaches at least `Drafted`, because the guide scores the
questions the list defines.

---

## 9. Sequencing

```
1.  Create projects/auctionomics/sources/ and research/web/   (directories only)
2.  Create research/sources.md and research/gaps.md           (initial scaffolds)
3.  Web research: map and scrape primary sources
4.  Web research: search queries, save result sets to research/web/
5.  Update research/sources.md with every source acquired
6.  Update research/gaps.md — mark resolved or unanswerable
7.  Verify research/ is complete enough to support drafting
8.  Draft IC memo in sources/
9.  Self-review IC memo against acceptance criteria (section 4)
10. Draft diligence request list in sources/
11. Self-review diligence request list
12. Draft evaluation guide in sources/
13. Self-review evaluation guide
14. Mark all documents Reviewed — ready for Phase 2
```

**Rule:** Steps 8-13 must not begin until step 7 confirms that `research/`
contains enough material. If the public record is too thin, the gap tracker
in `research/gaps.md` makes that visible and the brief pauses rather than
producing speculative drafts.

---

## 10. Completion criteria

This brief is complete when:

1. `research/web/` contains a saved file for every material source fetched
2. `research/sources.md` is a complete inventory with no `Not fetched`
   entries that are likely to contain material information
3. `research/gaps.md` has every gap either resolved (with a pointer to the
   `web/` file that resolved it) or explicitly marked as unanswerable
4. All three target documents exist at their prescribed paths under
   `projects/auctionomics/sources/`
5. Every document meets its acceptance criteria in section 4
6. The document status tracker (section 8) shows `Reviewed` for all documents
7. No unsourced factual assertions remain in any document
8. Every factual claim in `sources/` can be traced to a file in `research/web/`
