# Silicon Data / Compute Exchange — Management Response Evaluation Guide

As of **April 7, 2026**.

## Purpose

This document converts the core open diligence questions for Silicon Data Inc. / Compute Exchange Inc. into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the company — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the Ornn evaluation framework: a polished answer without documents, data, controls, or external corroboration is not enough.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, transactional data, policies, system evidence, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- If management cannot explain a core operating fact, treat that as a higher-severity issue than a missing but remediable workstream.

## Failure types

When a question scores poorly, classify the failure before making an investment decision:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Proof gap**: the answer may be true, but the diligence package does not yet prove it.

---

## 1. What is the entity structure, and what does each entity actually do?

The public record shows three named entities — Silicon Data Inc., "Silicon Derivatives Inc." (terms of use), and Compute Exchange Inc. — with unclear relationships, overlapping leadership, and no public explanation of why "Silicon Derivatives Inc." appears in the terms of use while "Silicon Data Inc." appears everywhere else.

**What must be shown**

- A clean legal entity chart covering Silicon Data Inc., "Silicon Derivatives Inc.," Compute Exchange Inc. (also "CEX" / "TCEX"), and any SPVs, holding companies, or foreign subsidiaries.
- An explanation of the "Silicon Derivatives Inc." discrepancy: same entity after a name change, parent/subsidiary, or separate legal person?
- For each entity: jurisdiction, formation date, ownership, directors, employees, bank accounts, revenue booking, IP ownership, and all intercompany agreements.
- A product-by-entity map: which entity offers which product (SiliconNavigator, SiliconMark, SiliconPriceIQ, SiliconCarbon, the Silicon Index family, CX spot, CX reserved, CX forwards, CX auction, and any planned futures/options), and on what legal basis.
- The nature of any cross-ownership or contractual affiliation between Silicon Data and CX beyond Carmen Li's dual-CEO role and Don Wilson's co-founder/investor status.

**Acceptable**

- Management walks through every entity with precision and can reconcile the "Silicon Derivatives Inc." discrepancy to a documented corporate action (e.g., name change with state filing evidence, or subsidiary with an intercompany agreement).
- Each product maps cleanly to one entity with a stated legal basis, customer type, and jurisdictional scope.
- The product-by-entity map is consistent across management's oral answer, public materials, terms of use, and regulatory filings.
- Cross-entity relationships (shared leadership, data flows, IP ownership) are documented, not just described.

**Concerning**

- The entity structure is broadly understandable, but the "Silicon Derivatives Inc." point is explained verbally without supporting documentation.
- The product-by-entity map is directionally coherent, but some products straddle entities or the routing logic is informal.
- Intercompany agreements exist in principle but are not yet documented or are in draft form.

**Unacceptable**

- Management cannot explain why "Silicon Derivatives Inc." appears in the terms of use or what it is.
- Products cannot be cleanly attributed to specific entities.
- The entity structure appears designed to obscure regulatory exposure rather than to serve legitimate operational or corporate purposes.
- The answer changes depending on whether the question is posed as commercial, legal, or regulatory.

**Likely failure type if poor**

- Usually `competence / credibility failure`.

---

## 2. What is the regulatory posture for forward contracts and the derivatives roadmap?

CX's marketplace terms state: "CEX does not provide services subject to a regulatory license." Silicon Data's own homepage positions the benchmark as infrastructure for swaps, futures, and structured notes. That gap — no license today, exchange-traded derivatives planned — is the central regulatory question.

**What must be shown**

- Outside-counsel analysis of CX forward contracts as currently structured: are they exempt commercial forwards, or could they be characterized as swaps or futures under the Commodity Exchange Act?
- Identification of the specific facts that would cause current forward contracts to cross the line into regulated territory (standardization, financial settlement, transferability, CX's role in price discovery).
- The full futures/options roadmap: product specifications, regulatory pathway (DCM, SEF, or foreign-exchange licensing), timeline, milestones, and dependencies.
- Evidence of any CFTC interaction — applications filed, pre-filing meetings, informal guidance, or the absence thereof.
- Contingency plan if the derivatives pathway is denied, delayed, or narrowed in scope.
- Quantification of how much of the medium-term revenue model depends on regulated products versus products available under the current "no license" posture.

**Acceptable**

- Management states the regulatory status of every product precisely and can produce dated outside-counsel memos supporting the characterization.
- The transition from "no regulatory license" to exchange-traded derivatives is mapped with specific triggers, milestones, and budget.
- Management quantifies how much of the forward plan requires CFTC registration and how much does not.
- The forward-contract exemption analysis addresses standardization, settlement method, and CX's role with specificity, not just "we are a matching platform."
- A credible economic fallback exists if the derivatives pathway is delayed by 12-24 months.

**Concerning**

- Management can articulate the regulatory distinction between current and planned products, but outside-counsel memos are not yet available or are still in draft.
- The futures/options timeline is described in general terms without milestones, budget, or regulator feedback.
- The forward-contract exemption analysis exists but has not been updated since the product evolved.
- Management has not quantified the revenue dependency on regulated versus unregulated products.

**Unacceptable**

- Management treats the "no regulatory license" statement as settled and permanent despite the public commitment to futures and options.
- There is no outside-counsel analysis of forward-contract characterization under the Commodity Exchange Act.
- The derivatives roadmap is aspirational with no regulatory engagement, no budget, and no timeline.
- Management cannot explain what specific facts keep current forward contracts outside CFTC jurisdiction.
- The "matching platform" characterization is asserted without addressing whether CX sets standard terms, determines pricing, or provides settlement infrastructure.

**Likely failure type if poor**

- `Structural thesis failure` if the medium-term model depends on regulated products and there is no credible pathway.
- `Competence / credibility failure` if management does not understand the regulatory boundary between exempt forwards and regulated derivatives.

---

## 3. Is the Silicon Index methodology governed, auditable, and replicable?

The Silicon Index is the fulcrum of the entire thesis. If the index is credible, the downstream products (swaps, futures, structured notes) have a foundation. If it is not, the entire value chain is fragile. The public record shows broad principles (150,000 daily records, 40-50 countries, proprietary normalization) but no published methodology document, no IOSCO mapping, no named calculation agents, and no replication package.

**What must be shown**

- A full methodology document for each published index (H100, A100, B200): definitions, sampling rules, weighting, normalization procedures, exclusion criteria, outlier-removal methods, settlement procedures, fallback methodology, and methodology-change governance.
- The percentage of the 150,000 daily records that are direct transaction or listing prices versus normalized, inferred, or estimated values.
- Contributor concentration: top-3, top-5, and top-10 data-source share by volume.
- Minimum publication thresholds: what happens if data sources fall below a minimum?
- A replication package sufficient for an independent party to recalculate each index and reconcile to published and Bloomberg/Refinitiv-distributed values.
- IOSCO Principles for Financial Benchmarks gap assessment, remediation roadmap, and target dates.
- Identity and independence of the "calculation agents and data validators" referenced on the Silicon Index product page.
- Methodology change log since inception and governance process for approving changes.

**Acceptable**

- Management can produce the full methodology document and it is more than the blog post.
- The raw-versus-modeled data mix is quantified honestly and the modeled share is reasonable for the asset class.
- Contributor concentration is disclosed and does not create single-source fragility.
- The company can support an independent replication workstream and has committed to a timeline.
- IOSCO readiness has been honestly assessed with a gap list, owners, and remediation dates.
- Benchmark governance is more than founder judgment — there is a documented process, and DRW/Jump representatives do not have methodology decision rights.

**Concerning**

- Management can describe the methodology in detail, but the formal document is still being finalized.
- The raw-versus-modeled data mix is described directionally but not precisely quantified.
- Replication is permitted in principle, but the data package is not yet assembled.
- IOSCO is acknowledged as a target, but the workplan is immature or has no owner.
- The "calculation agents and data validators" are internal team members rather than independent third parties.

**Unacceptable**

- Management cannot distinguish the blog post from the actual production methodology.
- The methodology is effectively a black box and management resists replication.
- No one can quantify how much of the index is derived from direct market evidence versus estimation.
- There is no IOSCO assessment and no plan to create one.
- Methodology changes are made unilaterally by the founder with no governance process.
- DRW or Jump representatives have direct or indirect influence over methodology decisions without disclosed safeguards.

**Likely failure type if poor**

- Usually `structural thesis failure`.

---

## 4. How are DRW/Jump conflicts governed, and what information barriers exist?

DRW and Jump Trading Group are among the world's largest proprietary trading firms. They co-led the seed round, Don Wilson co-founded CX, and both firms would be natural participants in any GPU compute derivatives market. The public record shows no information-barrier, Chinese-wall, or governance-committee structure between Silicon Data and its investor-backers.

**What must be shown**

- Whether DRW, Jump, or any affiliated entity currently participates in the CX marketplace (as buyer, seller, or auction participant), uses Silicon Data indices for trading or risk management, or has informational access to data or methodology beyond what is publicly available.
- A formal information-barrier policy between index production, marketplace operations, and investor-affiliated trading activity.
- Board and governance structure addressing DRW/Jump conflicts: recusal procedures, consent rights, methodology-decision exclusion, and data-access controls.
- Surveillance and monitoring for trading by DRW, Jump, or other investor-affiliated entities that reference Silicon Data indices.
- Revenue attribution if any backer-affiliated entity is also a customer, marketplace participant, or data contributor.

**Acceptable**

- Management addresses each conflict layer separately: investment governance, marketplace participation, index influence, and informational access.
- There is a written information-barrier policy and it has been implemented operationally, not just drafted.
- Board governance explicitly excludes DRW/Jump representatives from methodology decisions and data-access decisions (or documents and discloses the basis for their inclusion).
- If DRW or Jump participate in the CX marketplace, the terms are disclosed and equivalent to those available to unaffiliated parties.
- Surveillance covers backer-affiliated trading activity, and the surveillance function is independent of the backers.

**Concerning**

- Management acknowledges the conflict and has the right instincts, but the information-barrier policy is still being built or has not been tested.
- Board governance addresses conflicts in principle but lacks formal recusal or exclusion mechanics.
- DRW/Jump marketplace participation or index usage is unclear — management says "we don't think so" rather than providing definitive answers.
- Surveillance exists for marketplace activity but does not extend to backer-affiliated trading outside the platform.

**Unacceptable**

- Management dismisses the conflict as immaterial because DRW and Jump are "strategic partners" or "sophisticated investors."
- There is no information-barrier policy and no plan to create one.
- DRW or Jump representatives participate in methodology decisions without disclosure or safeguards.
- Management cannot confirm whether DRW or Jump entities trade on or around Silicon Data indices.
- The Silicon Index product page describes the index as "Independent and Objective" while listing prop-trading backers in the same sentence — and management cannot explain what independence means in practice.

**Likely failure type if poor**

- Usually `structural thesis failure`, sometimes `competence / credibility failure`.

---

## 5. What is the actual marketplace traction?

The public record shows zero evidence of completed CX trades, volumes, or active counterparty counts. CX positions itself as a matching platform with a 4% commission, but whether the marketplace has generated any transactions is unknown.

**What must be shown**

- Total transaction value facilitated on the CX marketplace since launch, broken out by product type (spot, reserved, forward, auction).
- Number of completed transactions by product type.
- Gross notional of forward contracts executed.
- Number of unique active counterparties — buyers and sellers, separately.
- Repeat transaction rate: what percentage of buyers or sellers return for a second transaction?
- Average transaction size and tenor.
- Failed, cancelled, or abandoned transactions and reasons.
- If no marketplace transactions have been completed, an explicit statement to that effect plus the timeline and pipeline for first transactions.

Before the management call, the investor should define minimum acceptable thresholds for each relevant metric. Do not grade marketplace traction ad hoc.

**Acceptable**

- Management provides the full KPI set with actual numbers and the numbers clear the investor's predeclared thresholds on most relevant dimensions.
- Activity is not entirely explained by one provider, one buyer, or one backer-affiliated entity (e.g., DRW or Jump).
- Repeat participation and completed settlement cycles support the claim that a marketplace is forming.
- If activity is early, management is explicit about what is real, what is pipeline, and what is aspirational.

**Concerning**

- There is some real activity, but it is thin, recent, or highly concentrated in a small number of participants.
- Management has registered-participant counts or pipeline evidence but not enough completed transactions to prove a functioning marketplace.
- Backer-affiliated entities account for a significant share of early activity.

**Unacceptable**

- Management cannot state how many transactions CX has completed or falls back on registered-user counts, "interest," or partner logos.
- No transactions have been completed and there is no credible timeline to first close.
- The marketplace traction claim is reduced to the existence of the platform, not observed trading behavior.
- Activity is entirely or predominantly between affiliated parties (DRW, Jump, Woodside AI) without disclosure.

**Likely failure type if poor**

- Usually `structural thesis failure`.

---

## 6. How does the dual-CEO governance work across Silicon Data and CX?

Carmen Li was appointed CEO of Compute Exchange in October 2025, replacing Simeon Bochev, and now leads both Silicon Data and CX. She has drawn an explicit analogy to LSEG's integration of Refinitiv and FTSE Russell. The dual-CEO structure across two entities with separate investors, separate terms of use, and potentially divergent interests requires explicit governance.

**What must be shown**

- Formal governance structure: who does Carmen Li report to at each entity? Are the boards separate or overlapping?
- Time allocation between Silicon Data and CX: percentage split, decision-making authority, and any protocol for managing conflicts between the two entities' interests.
- Succession plan for the CEO role at each entity if Li becomes unavailable.
- Compensation structure across both entities and whether incentives create misalignment (e.g., rewarding CX volume at the expense of index integrity, or vice versa).
- Information-flow controls: what prevents commercially sensitive information from one entity being used to the advantage of the other in ways that harm counterparties?

**Acceptable**

- Management describes a documented governance structure with separate reporting lines, defined decision rights, and a conflict protocol.
- Time allocation is specific (not "roughly half") and reviewed by the boards.
- Succession is named — not "we would figure it out."
- Compensation is transparent and does not create perverse incentives between the two entities.
- The LSEG/Refinitiv/FTSE Russell analogy is supported by actual structural parallels, not just aspiration.

**Concerning**

- Governance exists but is largely informal — the dual-CEO arrangement works because the entities are small, not because the structure demands it.
- Succession is identified at a general level but not tested or documented.
- Compensation is reasonable but has not been independently reviewed for cross-entity incentive alignment.
- The LSEG analogy is acknowledged as aspirational rather than currently operative.

**Unacceptable**

- Management treats the dual-CEO arrangement as self-evidently efficient and does not acknowledge the governance risks.
- There is no succession plan for either entity.
- The boards are identical and meet jointly, with no separation of entity-level interests.
- Compensation incentives reward integrated outcomes without controlling for conflicts.
- Information flows freely between entities with no policy or monitoring.

**Likely failure type if poor**

- Usually `competence / credibility failure`.

---

## 7. Where does the data come from, and how fragile is it?

The company claims 150,000 daily pricing records across 40-50 countries and 50-100 platforms with "80%+ coverage of the global H100 rental market." Those are self-reported figures. The index's credibility depends on the depth, diversity, and durability of the data-contributor base.

**What must be shown**

- Number of contributors by GPU SKU, geography, provider type, and source platform — reconciled to the claimed "50-100 platforms" and "40-50 countries."
- Top contributor concentration by volume: top-3, top-5, and top-10 views.
- Contracts or summaries for each material data source showing Silicon Data's right to use the data for index creation and commercial redistribution (including Bloomberg/Refinitiv distribution).
- Minimum data-volume commitments, termination rights, audit rights, and notice periods in contributor agreements.
- Scenario analysis for loss of the top 1, top 3, and top 5 data sources — what happens to index publication?
- Whether CX marketplace transaction data feeds into the Silicon Index, what percentage it represents, and how related-party data-integrity concerns are managed.
- Exclusivity provisions: can the same data sources provide data to competing index providers?
- Percentage of the 150,000 daily records that are direct transaction/listing data versus normalized, inferred, or estimated values.

**Acceptable**

- Management provides contributor counts reconciled to the public claims and the numbers are credible.
- Concentration is disclosed and no single source accounts for a dominant share of the index.
- Contributor agreements grant clear rights for the use cases that matter (index production, Bloomberg/Refinitiv redistribution).
- Loss-of-source scenarios have been analyzed and the index can survive the departure of major contributors.
- CX data's role in the index is quantified and governed by explicit integrity controls.
- The "80%+ coverage" claim has a defined denominator that can be independently tested.

**Concerning**

- Contributor counts are broadly consistent with public claims, but the data is directional rather than precisely reconciled.
- Concentration is higher than ideal, but management acknowledges it and has a diversification plan.
- Contributor agreements exist but are informal, unsigned, or based on platform terms of service rather than bilateral contracts.
- Loss-of-source analysis has not been formally conducted.

**Unacceptable**

- Management cannot reconcile the claimed data scale to actual contributor contracts or platform relationships.
- A single platform or small group of platforms accounts for the majority of index data and there is no fallback.
- Contributor agreements do not clearly authorize commercial redistribution (Bloomberg/Refinitiv) or index construction.
- CX transaction data feeds into the index with no governance or integrity controls.
- The "80%+ coverage" claim cannot be substantiated — the denominator is unknown or assumed.

**Likely failure type if poor**

- `Structural thesis failure` if the contributor base is too concentrated or too fragile to support an institutional-grade benchmark.
- `Proof gap` if the answer is plausible but the agreements and data have not been produced.

---

## 8. Is there enough capital to support two entities and five-plus products?

The disclosed funding in the currently persisted public-source pack is $4.7 million from May 2025. The company operates two entities, has built at least five named products, and maintains Bloomberg/Refinitiv distribution. The public record may contain later statements about total capital raised, but those references have not yet been fully reconciled into the persisted source pack. The futures/options roadmap implies significant additional legal, compliance, and regulatory buildout costs.

**What must be shown**

- Reconciliation of the announced $4.7 million seed round against any later public statements or interview references about total capital raised.
- Current cash position (unrestricted versus restricted) and monthly burn rate, split by entity and by function.
- Runway under current burn and under the planned hiring/expansion scenario.
- Date by which follow-on funding is required to maintain operations.
- Capital required to reach the futures/options product launch — and what happens if that capital is not raised.
- Revenue bridge: what is generating cash today across both entities, and when does the company expect to cover operating costs from revenue?

**Acceptable**

- Management provides the precise current cash position, burn rate, and runway with supporting financials.
- The funding discrepancy is resolved with a clear explanation (e.g., SAFE conversion, additional tranche, inclusion of in-kind contributions).
- Runway extends at least 12 months under the current plan with identified and credible sources for follow-on capital.
- Management quantifies the capital required for the derivatives buildout and has a credible plan if that capital is delayed.
- Revenue, even if small, is real and verifiable — not projected.

**Concerning**

- Management provides directional answers on burn and runway but has not produced formal financial statements.
- The funding discrepancy is explained verbally but not documented.
- Runway is less than 12 months under the current plan, and follow-on funding is not yet secured.
- The derivatives buildout budget is estimated but has not been stress-tested against delay scenarios.

**Unacceptable**

- Management cannot state the current cash position or monthly burn rate.
- The funding discrepancy is unresolved or dismissed as immaterial.
- Runway is clearly insufficient to reach any meaningful milestone without follow-on funding, and no credible source has been identified.
- The company is burning through seed capital across two entities and five-plus products without revenue and without acknowledging the implied capital constraint.
- The futures/options roadmap has no associated capital plan.

**Likely failure type if poor**

- `Structural thesis failure` if the runway-to-milestone gap is too wide.
- `Competence / credibility failure` if management cannot explain its own capitalization.

---

## 9. Is the team deep enough to govern an index provider and a marketplace?

The public-facing team shows Carmen Li as the only named senior operator. Blog authorship credits (Yang Gao, Yuhua Yu, Platon Slynko, Jason Cornick) suggest additional team members, but their titles and seniority are undisclosed. No dedicated legal, compliance, risk, treasury, or surveillance hires appear in the public record for either entity.

**What must be shown**

- Full org chart for both entities with titles, reporting lines, and start dates.
- Key-person dependencies by function: who is a single point of failure?
- Control-function staffing: legal, compliance, risk, and surveillance — if unfilled, a hiring plan with timeline and budget.
- Founder vesting schedules, acceleration triggers, and current vesting status for both entities.
- Non-compete and non-solicit enforceability for key personnel.

**Acceptable**

- Management is candid about the team's current size and identifies every single-point-of-failure role.
- Control-function hiring has started or is budgeted with named roles, job descriptions, and target close dates.
- Vesting and incentive alignment are documented and do not reward growth at the expense of control integrity.
- The team is small but management can explain how work gets done today and who is responsible for each critical function.

**Concerning**

- Management acknowledges the staffing gap but control-function hiring is still "planned" without commitments.
- Blog authors turn out to be junior or part-time contributors rather than senior operating team members.
- Key-person risk is concentrated in Carmen Li and one or two others, with no near-term mitigation.

**Unacceptable**

- Management presents a four-to-six-person team running two entities, an index business, and a marketplace as normal and not a material risk.
- No legal, compliance, or risk hiring is planned or budgeted.
- The blog authors cannot be confirmed as current employees or their roles are misrepresented.
- There is no plan to staff control functions before launching regulated products.

**Likely failure type if poor**

- Usually `competence / credibility failure`.

---

## 10. Why did Bochev and Metzdorf leave, and is the knowledge transfer complete?

Simeon Bochev (founding CEO of CX) and Bjoern Metzdorf (CTO) moved to advisory roles in October 2025 — less than six months after CX's apparent launch. Carmen Li replaced Bochev as CEO. The speed and circumstances of the transition are unexplained in the public record.

**What must be shown**

- The reason for the transition: was this planned from inception (e.g., Don Wilson always intended Carmen Li to lead both entities) or did circumstances change (strategic disagreement, performance, personal)?
- Current advisory scope, time commitment, and compensation for Bochev and Metzdorf.
- Knowledge-transfer documentation: was CX's marketplace technology, customer pipeline, provider relationships, and institutional knowledge formally transferred to the current team?
- Separation agreements, non-competes, non-solicits, IP assignment confirmations, and any equity forfeiture or acceleration provisions.
- Whether Bochev or Metzdorf retained any rights, code, data, or customer relationships.

**Acceptable**

- Management explains the transition candidly and the explanation is internally consistent.
- The transition was documented: separation agreements, IP confirmations, and knowledge-transfer deliverables are available.
- Bochev and Metzdorf's advisory roles are clearly scoped, and their residual involvement does not create governance confusion.
- The current team can demonstrate operational independence from the former leaders — CX technology and operations do not depend on Bochev or Metzdorf's continued involvement.

**Concerning**

- The transition explanation is plausible but relies on verbal accounts rather than documentation.
- Knowledge transfer happened informally and some institutional knowledge may have been lost.
- Bochev or Metzdorf retain equity or advisory compensation but their advisory scope is vague.
- Separation agreements exist but non-competes are weak or unenforceable.

**Unacceptable**

- Management cannot explain why the transition happened or provides inconsistent accounts.
- There is no separation agreement or IP assignment confirmation for either departing leader.
- CX's marketplace technology or provider relationships still depend on Bochev or Metzdorf, and there is no mitigation plan.
- The transition raises the possibility of a disputed departure, unresolved IP claims, or a potential competitive threat.
- Management is defensive or evasive about the circumstances, especially if the timing (less than six months post-launch) is not addressed.

**Likely failure type if poor**

- `Competence / credibility failure` if the explanation is inconsistent or evasive.
- `Proof gap` if the explanation is plausible but undocumented.

---

## 11. What should the investor conclude from the full pattern of answers?

**Acceptable overall pattern**

- Management answers directly, uses exact labels (live / beta / planned), admits what is not yet built, and provides supporting materials quickly.
- Representation and proof generally line up.
- Weak areas are framed as bounded build gaps with owners, dates, and budgets.
- The dual-entity complexity is acknowledged and governed, not minimized.

**Concerning overall pattern**

- Management may be directionally credible, but several claims still depend on future buildout or follow-up evidence.
- The gap between the current "no regulatory license" posture and the planned derivatives business remains wide.
- Key structural questions (conflicts, methodology, traction) are answered in principle but not yet supported by documents.
- The company may be investable only with a tighter gating structure, lower valuation tolerance, or staged capital plan.

**Unacceptable overall pattern**

- Management defaults to category rhetoric (GPU commoditization, AI infrastructure megatrend) when asked for current operating facts.
- Different questions surface different versions of the entity structure, regulatory posture, or product status.
- The conflicts question is treated as a non-issue despite the structural reality of prop-trading-firm parentage.
- Core issues — methodology, traction, regulatory pathway, conflicts — remain unsupported, circular, or strategically evasive.

---

## Decision framework

Do not treat all unacceptable answers as equal.

### Default `pause or pass`

Use this when the issue reflects a `competence / credibility failure` or a `structural thesis failure`, especially in:

- entity structure and the "Silicon Derivatives Inc." discrepancy,
- regulatory posture and the forward-contract/derivatives gap,
- index methodology governance and IOSCO readiness,
- DRW/Jump conflict governance and information barriers,
- marketplace traction (if no transactions have been completed and no credible timeline exists),
- dual-CEO governance (if there is no succession plan and no separation of entity interests),
- data sourcing (if the contributor base is too concentrated or too fragile),
- or capital adequacy (if runway-to-milestone is clearly unworkable).

### Continue only with strict gating

Use this when the issue is a `remediable build gap`, for example:

- control-function hiring is planned but not yet completed,
- IOSCO gap assessment is in progress but immature,
- contributor agreements are being formalized,
- the knowledge-transfer documentation from the Bochev/Metzdorf transition is incomplete but the advisory relationship is functional,
- privacy and cross-border data compliance work is underway but not finished,
- tax and intercompany transfer-pricing analysis is in early stages.

In those cases, require owners, deadlines, outside counsel or audit support, and documentary proof before closing.

### Hold for evidence, not for storytelling

Use this when management may be right, but the answer is still only a `proof gap`.

- Do not upgrade the rating based on confidence or polish.
- Time-box the dataroom request: set a specific date by which evidence must arrive.
- If evidence does not arrive quickly, downgrade the answer.
- Be especially skeptical of "we will provide that in the dataroom" responses to questions that management should be able to answer on a live call (e.g., number of completed marketplace transactions, current cash position, identity of the "calculation agents and data validators").

### Silicon Data-specific escalation triggers

The following patterns should trigger an immediate escalation to the investment committee regardless of how other questions score:

- **Regulatory misrepresentation**: management states that no CFTC analysis is needed for forward contracts, despite the public commitment to futures and options.
- **Conflict denial**: management asserts there is no conflict issue with DRW/Jump without producing a governance framework.
- **Traction fabrication**: management claims marketplace transactions that cannot be verified, or uses registered-user counts as a proxy for completed trades.
- **Methodology opacity**: management refuses to support a replication workstream or cannot distinguish the blog post from the production methodology.
- **Funding confusion**: the announced funding history is not reconciled to later public statements, or management cannot state the current cash position.
