# Silicon Data — Research Brief

**Status:** Completed Phase 1 brief; Silicon Data has since been promoted into a managed video project
**Created:** April 7, 2026
**Purpose:** Govern the acquisition of baseline source documents for Silicon Data
as the second project case, producing project-owned artifacts that can enter
the now-completed multi-project video workflow once provenance cleanup is complete.

---

## 1. Relationship to the multi-project migration

This brief is **Phase 1** of the two-phase approach:

- **Phase 1 (this brief):** Research, draft, and stabilize the Silicon Data
  source documents. Place them directly in the Phase 2 directory structure so
  they never need to move.
- **Phase 2 (completed):** Restructure the repo for multi-project support,
  migrate Ornn into `projects/ornn/`, and wire both managed projects to the
  shared Remotion infrastructure.

Phase 2 should not begin until every target document in this brief reaches
**Reviewed** status and the provenance requirements in section 10 are met.

---

## 2. Target directory structure

All artifacts produced by this brief land here:

```
projects/
  silicon-data/
    sources/
      investment-committee-memo.md          # Target document 1
      management-diligence-request-list.md  # Target document 2
      management-response-evaluation-guide.md # Target document 3
    research/
      sources.md                            # Master source inventory with full notes
      gaps.md                               # Updated gap tracker after research
      web/                                  # Saved page content, one file per source
        silicondata-about.md
        silicondata-home.md
        compute-exchange-about.md
        compute-exchange-home.md
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
`silicondata-about.md`, `drw-wikipedia.md`, `search-carmen-li.md`). Each
file must include:

- URL fetched
- Date fetched
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

1. Use `firecrawl_map` on a domain (e.g., `silicondata.com`) to discover all pages
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

**Note:** This brief was written during Phase 1. Silicon Data has since been
promoted, so `projects/silicon-data/video/` and
`projects/silicon-data/iteration-prompt.xml` now exist. Keep this document as
the historical research brief rather than as the current implementation
contract.

---

## 3. Research scope and constraints

### In scope

- Public corporate website and product pages (Silicon Data, Compute Exchange)
- Press releases, news coverage, and partner announcements
- LinkedIn profiles of key personnel (team composition, backgrounds)
- Regulatory filings, registrations, or exemption notices (CFTC, NFA, SEC, state)
- Investor announcements, funding disclosures, and backer profiles (DRW, Jump)
- Public API documentation, methodology papers, data portals
- Conference presentations, podcasts, and published interviews
- Competitor and market-context materials that inform the thesis

### Out of scope

- Private or confidential information
- Speculation presented as fact — if the public record is silent, say so
- Filling gaps with analogies from Ornn — Silicon Data must stand on its own evidence

### Evidentiary standard

Match the Ornn IC memo's discipline:

- Every factual claim must be attributed to a specific public source
- Self-reported figures must be labeled as such ("self-reported", "company-stated")
- Distinguish between what is **verified by third parties** vs. **company-generated**
- Distinguish between what is **live** vs. **announced** vs. **planned**
- Where the public record is silent, say "the public record does not show X"
  rather than omitting the topic

---

## 4. Target documents and acceptance criteria

### Document 1: Investment committee memo

**File:** `projects/silicon-data/sources/investment-committee-memo.md`

Must follow the same section structure as the Ornn IC memo:

| Section | Acceptance criteria |
|---|---|
| **Recommendation** | Clear gated recommendation with enumerated open issues. Not a pitch. |
| **Company snapshot** | What Silicon Data / Compute Exchange is, key claims, founding, backing. Every self-reported figure flagged. |
| **What appears real today** | Dated, sourced proof points only. No inferred traction. |
| **Competitive context** | Position relative to Ornn, Auctionomics/OneChronos, and any other visible players. Must not be written from Silicon Data's perspective — neutral market view. |
| **Team and operating-model risk** | Named personnel, backgrounds, team size, control-function gaps, related-party items (DRW/Jump relationship). |
| **Core risks (numbered)** | At minimum: (1) regulatory/legal structure, (2) index methodology and governance, (3) conflicts from prop-trading-firm parentage, (4) market formation and competitive durability. Each risk must cite specific public evidence or specific public-record gaps. |
| **Bottom line** | Restate recommendation, name the hardest gating issues, and state what would change the conclusion. |
| **References** | Numbered footnotes with URLs, matching the Ornn memo format. |

**Done when:** Every section populated, every claim sourced, editorial tone
matches the Ornn memo (analytical, not promotional), and a self-review finds
no unsourced assertions.

### Document 2: Management diligence request list

**File:** `projects/silicon-data/sources/management-diligence-request-list.md`

Must follow the same structure as the Ornn diligence request list:

| Aspect | Acceptance criteria |
|---|---|
| **Preamble** | Scoped to Silicon Data, dated, public-information-based framing. |
| **Priority labeling** | P0 / gating vs. P1 / important, same convention as Ornn. |
| **Domain sections** | At minimum: Corporate/legal/regulatory, Tax/entity, IP/data/index governance, Commercial traction/liquidity, Counterparty/risk/conflicts, Finance/capitalization, Technology/ops/privacy, Management/governance. |
| **Silicon Data-specific items** | Must address the DRW/Jump relationship, Carmen Li dual-CEO structure, Compute Exchange relationship, prop-trading-firm conflict stack, and H100 index methodology — not just copy-paste Ornn's list with names swapped. |
| **First-call questions** | Tailored set of management-call questions specific to Silicon Data's public-record gaps. |

**Done when:** Each section has substantive, Silicon Data-specific requests
that could not be mistaken for generic templates.

### Document 3: Management response evaluation guide

**File:** `projects/silicon-data/sources/management-response-evaluation-guide.md`

Must follow the same rubric structure as the Ornn evaluation guide:

| Aspect | Acceptance criteria |
|---|---|
| **Scoring framework** | Reuse the two-track scoring (management representation + proof status) and the four failure types. These are generic — copy them. |
| **Questions** | Each question must be Silicon Data-specific. The conflict-stack question, for instance, must address the DRW/Jump prop-trading parentage rather than the Ornn self-dealing structure. |
| **Acceptable / Concerning / Unacceptable** | Concrete behavioral descriptions for each question, not generic placeholders. |
| **Decision framework** | Reuse the Ornn structure (pause-or-pass, strict gating, hold for evidence) but with Silicon Data-specific examples in each category. |

**Done when:** An analyst unfamiliar with Silicon Data could use this document
to run a management call and score the answers without additional context.

---

## 5. Source inventory

Track every source found during research. Update this table as sources are
discovered.

| # | Source | URL / Reference | Date | Covers | Reliability | Status |
|---|--------|----------------|------|--------|-------------|--------|
| 1 | Silicon Data — About Us | silicondata.com/about-us | — | Company overview, team, backers | Company-generated | Not fetched |
| 2 | Compute Exchange — About | compute.exchange/about | — | Carmen Li, Don Wilson, entity relationship | Company-generated | Not fetched |
| 3 | Competitive-context source pack (Ornn and other visible entrants) | TBD | — | Named-player competitive context | Third-party / company-generated | To fetch |
| | | | | | | |

**Rows should be added as research progresses.** Do not remove rows for sources
that turned out to be thin — mark them as "Low value" in the Reliability column
so the gap is visible.

---

## 6. Known information baseline

What the current public-source pack already supports:

- Silicon Data positions itself as a compute pricing, index, and analytics
  platform with a five-product suite.
- Compute Exchange is presented as a separate marketplace entity under the
  same CEO, Carmen Li.
- DRW and Jump Trading Group are publicly associated with the company and the
  broader compute-market thesis.
- Bloomberg and Refinitiv distribution are central to the current commercial
  positioning.
- The public record still does not cleanly resolve the entity map,
  regulatory pathway, conflict governance, or marketplace traction.

This is the starting point, not the finish line. Final documents must still
stand on directly persisted public sources under `research/web/`.

---

## 7. Research gaps to resolve

These are the questions the public-record research must answer (or explicitly
declare unanswerable) before drafting can begin.

### Corporate structure
- [ ] What is the legal relationship between Silicon Data and Compute Exchange? Same entity, parent/sub, or sibling under a holding company?
- [ ] What entities exist and what does each one do?
- [ ] Where are they incorporated?

### Product and index
- [ ] What exactly is the H100 rental index? Daily close, real-time, methodology?
- [ ] Is there a public methodology document or data portal?
- [ ] What other products exist beyond the index (derivatives, data API, exchange)?
- [ ] What is Compute Exchange's product — is it a trading venue, OTC platform, or something else?
- [ ] Is there any visible regulatory registration or exemption for any product?

### Team
- [ ] Who else is on the team beyond Carmen Li and Don Wilson?
- [ ] What are their backgrounds?
- [ ] What is the team size?
- [ ] Are there visible control-function hires (legal, compliance, risk)?

### Funding and backers
- [ ] What is the total funding raised?
- [ ] Who are all the investors beyond DRW and Jump?
- [ ] What is the relationship structure — are DRW/Jump investors, strategic partners, both?

### Traction and distribution
- [ ] Is the index distributed through any terminal or data vendor?
- [ ] Are there visible trading partners, customers, or integrations?
- [ ] Is there any evidence of actual trading activity?
- [ ] Any press coverage beyond company-generated materials?

### Regulatory and legal
- [ ] Any CFTC, NFA, or SEC registrations visible?
- [ ] Any visible legal disclosures, risk statements, or terms of service?
- [ ] Any regulatory posture discernible from public materials?

### Conflicts specific to prop-trading parentage
- [ ] Do DRW or Jump trade in compute markets or adjacent markets?
- [ ] Is there any visible information-barrier or governance structure?
- [ ] Does the dual-CEO structure (Carmen Li at both Silicon Data and Compute Exchange) create visible governance questions?

---

## 8. Document status tracker

| Document | Status | Blockers |
|----------|--------|----------|
| IC memo — Recommendation | Drafted | Provenance cleanup |
| IC memo — Company snapshot | Drafted | Provenance cleanup |
| IC memo — What appears real | Drafted | Provenance cleanup |
| IC memo — Competitive context | Drafted | Named-player source pack incomplete |
| IC memo — Team risk | Drafted | Provenance cleanup |
| IC memo — Core risks | Drafted | Provenance cleanup |
| IC memo — Bottom line | Drafted | Provenance cleanup |
| Diligence request list | Drafted | Align public-record references to persisted sources |
| Evaluation guide | Drafted | Align public-record references to persisted sources |

**Status values:** `Not started` → `Research in progress` → `Drafted` → `Reviewed` → `Final`

**Rule:** The diligence request list should not be drafted until the IC memo
reaches at least `Drafted`, because the memo identifies the gating issues that
the request list must operationalize. The evaluation guide should not be drafted
until the request list reaches at least `Drafted`, because the guide scores the
questions the list defines.

---

## 9. Sequencing

```
1.  Create projects/silicon-data/sources/ and research/web/   (directories only)
2.  Create research/sources.md and research/gaps.md           (initial scaffolds)
3.  Web research: fetch primary sources, save each to research/web/
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
14. Mark all documents Reviewed → ready for Phase 2
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
   `projects/silicon-data/sources/`
5. Every document meets its acceptance criteria in section 4
6. The document status tracker (section 8) shows `Reviewed` for all documents
7. No unsourced factual assertions remain in any document
8. Every factual claim in `sources/` can be traced to a file in `research/web/`
