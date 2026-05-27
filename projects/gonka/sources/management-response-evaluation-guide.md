# Gonka / Product Science — Management Response Evaluation Guide

As of **May 26, 2026**.

## Purpose

This document converts the core open diligence questions for the **Gonka network** and **Product Science Inc.** into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the project — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the IC-memo evaluation framework used across this firm: a polished answer without documents, transactional data, controls, or external corroboration is not enough. For a token-issuing decentralized AI network targeting institutional capital, the evidentiary bar is **higher**, not lower, than for a conventional venture-backed software company — because the regulatory, treasury, and decentralization claims are themselves the product.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, transactional data, on-chain evidence, audit reports, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- If management cannot explain a core operating fact (e.g. which entity received the Bitfury wire), treat that as a higher-severity issue than a missing but remediable workstream.
- For decentralization claims (the "no foundation" narrative), the bar is **operational evidence** (key custody, governance contract upgrade rights, code-merge authority), not assertions.

## Failure types

When a question scores poorly, classify the failure before making an investment decision:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, regulatory posture, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Proof gap**: the answer may be true, but the diligence package does not yet prove it.

---

## 1. What is the legal-entity map, and which entity owns what?

The public record shows **Product Science Inc.** as the incubating company and the network as community-governed with **"no foundation."** The whitepaper is signed by a single individual with a `gmx.com` email; the Bitfury press contact remains `andrey@productscience.ai`. There is no public document showing IP transfer, treasury transfer, or operational handoff between Product Science Inc. and any successor.

**What must be shown**

- A clean legal entity chart covering Product Science Inc., any Gonka-related entity (foundation, DAO LLC, Cayman/BVI/Swiss structure), and all subsidiaries.
- For each entity: jurisdiction, formation date, ownership (with each Liberman sibling's stake disclosed), directors, employees, bank accounts, revenue booking, IP ownership.
- Specific answers on: who holds gonka.ai domain registration; who owns protocol IP; who signed Bitfury subscription docs; who custodies the 200M Founders' GNK; who controls community-pool smart-contract keys.
- Documented reconciliation between the "no foundation" claim and Product Science Inc.'s continuing operational role.

**Acceptable**

- Management walks through every entity with precision, and the entity map matches the operational facts (media contact, code-merge authority, multisig signers, on-chain treasury controllers).
- Either (a) a successor foundation exists with documented IP/treasury transfer from Product Science, or (b) management is candid that Product Science Inc. retains material protocol authority and explains why this is still consistent with the public decentralization narrative.
- All cross-entity relationships are documented, not just described.

**Concerning**

- Entity structure is broadly understandable but the IP/treasury transfer is informal or undocumented.
- Management asserts decentralization but cannot identify a successor entity, and Product Science Inc. clearly retains operational fulcrum status.
- Some entities are referenced verbally but not in writing; ownership stakes are described in ranges, not numbers.

**Unacceptable**

- Management cannot identify which entity received the Bitfury wire.
- Management cannot identify which entity owns the protocol IP.
- Management cannot or will not name the holders of the Founders' Allocation.
- The "no foundation" narrative is unreconcilable with the operational facts on the ground, and management cannot explain the contradiction.

**Likely failure type if poor**

- Usually `competence / credibility failure`. May also indicate structural exposure to a future SEC or non-US enforcement claim that the network is, in effect, an unregistered issuer-controlled offering masquerading as a permissionless network.

---

## 2. How does GNK survive US securities-law scrutiny across its five distinct distribution mechanisms?

The GNK token is **not a classic PoW reward** — it is a hybrid of (a) epoch-minted PoC rewards, (b) Work Coins paid by Developers for inference, (c) utilization and model-coverage bonuses, (d) the 200M Founders' Allocation, and (e) the Community Pool sale mechanism (USDT/ETH/BTC → GNK preprogrammed minting). The SEC Staff Statement of March 20, 2025 cleanly covers only (a); the others require independent legal theories. The tokenomics PDF explicitly disclaims that there is "no guarantee that regulators, now or in the future, will agree with the positions taken."

**What must be shown**

- Written outside-counsel memo treating each of the five mechanisms separately, with an independent reasoning for each as to why it does not constitute the offer and sale of a security under *Howey*.
- Specific treatment of: (i) the collateral-backed influence model (PoS-like staking), (ii) the Work Coin payment as "service fee" rather than investment return, (iii) the Founders' Allocation as a pre-mined founder grant, (iv) the Community Pool sale as not an ongoing issuance.
- Confirmation of any sales (community pool, OTC, bounty, airdrop, partner sale) made to US persons since genesis, with eligibility/restriction documentation.
- Disclosure of any prior SEC, CFTC, FinCEN, OFAC, state-AG inquiries or no-action requests.

**Acceptable**

- Counsel memo from a recognized US crypto-securities firm (Latham, Wilson Sonsini, Cooley, Sullivan & Cromwell, Davis Polk, etc.) addresses each of the five mechanisms individually and not by aggregate label.
- Each mechanism has a defended legal theory; where the safe harbor does not cover, the alternative theory is named (e.g. fair launch, sufficient decentralization, software sale, etc.).
- A separate non-US analysis covers EU MiCA, UK FCA, Singapore MAS, and ADGM at minimum.
- Geo-blocking and marketing restrictions are documented and operational.

**Concerning**

- A single legal opinion exists but treats GNK monolithically without separating the five mechanisms.
- Non-US analysis is verbal only or limited to one jurisdiction.
- Management states no US persons have purchased GNK but cannot produce eligibility-screening documentation.

**Unacceptable**

- No outside-counsel opinion exists.
- The legal theory rests solely on the March 20, 2025 PoW Staff Statement without addressing the Work Coin / collateral / Founders' Allocation / Community Pool mechanisms separately.
- The Founders' Allocation is treated as outside the analysis because "founders earned it for work" with no further reasoning.
- The Community Pool's preprogrammed USDT-to-GNK sale is unaddressed in the legal opinion.

**Likely failure type if poor**

- `Structural thesis failure` if the legal posture cannot survive informed scrutiny, since a securities reclassification would be project-defining.
- `Remediable build gap` if the work simply has not been done yet — but the gap itself is gating.

---

## 3. What is the Founders' Allocation policy?

The 200M GNK (20% of total supply) Founders' Allocation is disclosed in the tokenomics PDF but **no vesting, cliff, lock-up, or distribution schedule is public**. At current price ($0.26) the nominal value is ~$52M; at the Jan 2026 ATH ($2.61), ~$522M. The Liberman siblings are named as Anna, David, Daniil, Maria; no sub-allocation is published.

**What must be shown**

- Full vesting, cliff, lock-up, and distribution schedule, with start date, mechanics, and any acceleration triggers.
- Sub-allocation between named recipients (including any allocation to advisors, contractors, early employees).
- Custody arrangements: where the GNK is held, who the key custodians are, what slashing/clawback provisions apply.
- On-chain proof of current Founders' Allocation balances and transfer history.

**Acceptable**

- A standard 4-year vest with a 1-year cliff, or stricter, with on-chain enforcement (e.g. a vesting contract) is in place.
- Sub-allocation between Libermans (and any non-Liberman recipients) is documented in writing.
- Custody is multisig with at least one independent signer or a regulated qualified custodian.
- No Founders' GNK has been sold to date, or any sale is small, disclosed, and at-market.

**Concerning**

- Vesting is described verbally but lacks on-chain enforcement.
- Sub-allocation is undisclosed but management asserts "fair split among siblings."
- Some founders' GNK has been used as personal-wallet test transactions but not sold.

**Unacceptable**

- No vesting schedule exists or has been documented.
- Any portion of the Founders' Allocation has already been sold to a non-affiliated party or transferred off the Liberman family wallets.
- Custody is concentrated in a single private key without multisig.
- Management refuses to disclose any portion of the schedule.

**Likely failure type if poor**

- `Structural thesis failure` — an undisclosed and unvested 20% supply allocation is incompatible with the "fair launch" narrative and creates clear and material dump risk for any institutional capital partner.

---

## 4. Reconcile the price-discovery and liquidity picture: $0.26 reference price, $0 24-hour volume, ATH $2.61, ~90% drawdown.

CoinMarketCap shows GNK at $0.2598 with 0% 24h change and $0 volume; ATH $2.61 on Jan 15, 2026. CertiK Pulse noted a $14k volume spike on May 21, 2026. The token is not listed on any major CEX or DEX. The community-pool sale mechanism is the most plausible price-discovery surface.

**What must be shown**

- Full mechanism documentation for the community-pool USDT/ETH/BTC → GNK sale: pricing oracle, current per-GNK conversion rate, total inflow/outflow since genesis, current contract balances.
- Reconciliation between (a) the published reference price ($0.26), (b) Bitfury's $12M community-pool purchase rate, and (c) the ATH ($2.61).
- Explanation of any large discrete liquidity events since mainnet launch (the May 21 spike, any others), including counterparty and rationale.
- Roadmap and timeline for CEX and DEX listings, with named exchange partners if any.

**Acceptable**

- The community-pool mechanism is clearly documented and the pricing follows a transparent, smart-contract-enforced rule.
- Bitfury's $12M purchase rate is disclosed and ties cleanly to the published mechanism.
- Management has named exchange partners and a credible listing timeline (next 6–12 months).
- The ATH $2.61 / current $0.26 drawdown is explainable (e.g. early listing in a thin market, gradually corrected as community-pool supply unlocked).

**Concerning**

- Pricing-oracle mechanism documented but management cannot explain the ATH discrepancy.
- No named exchange listing roadmap; "we are in conversations" is the answer.
- Reference price is partially set off-chain (e.g. a published rate update controlled by Product Science).

**Unacceptable**

- The community-pool sale price is administered manually by a Product Science employee or multisig with no smart-contract enforcement.
- Bitfury's purchase rate is materially different from the published reference rate without disclosed rationale.
- Management cannot explain how $0.26 is the live price when no liquid market sets it.

**Likely failure type if poor**

- `Structural thesis failure` (the decentralization and price-integrity narrative is broken) or `competence / credibility failure` (management cannot articulate the live mechanism).

---

## 5. Substantiate the traction figures with operational definitions and reproducible data.

Every traction claim — ~11,000 H100-equivalent compute, ~100M tokens/day, ~600 nodes, 30+ countries, ~2,200 developers — is self-attributed via gonkascan.com. No independent verification exists.

**What must be shown**

- Operational definition for each term: "active node," "active host," "active validator," "active developer," "active user," "device integration," "country."
- Read-only on-chain query access (or a raw export) sufficient for the firm's technical diligence to reproduce each headline figure.
- Methodology for the H100-equivalent conversion across heterogeneous hardware.
- At least three named institutional Developer references with monthly inference token volumes.

**Acceptable**

- Each metric has a precise operational definition and is reproducible from public on-chain data within ±5%.
- The H100-equivalent conversion uses a published, defensible weighting (e.g. based on MLPerf inference benchmark for each GPU class).
- Three or more named institutional Developers will speak to us this week with disclosed monthly usage.
- Geographic distribution is based on a defensible inference (e.g. validator IP geo-location at handshake, voluntarily attested, etc.) and the methodology is disclosed.

**Concerning**

- Operational definitions exist but vary between management's verbal answer and the gonkascan.com surface.
- Two named references available; third is "coming."
- H100-equivalent methodology is described qualitatively but not specified.

**Unacceptable**

- No operational definitions can be produced.
- "Active developer" turns out to mean "registered API key" with no usage threshold.
- No institutional Developer references can be named.
- The 30+ countries figure is based on self-attestation that has not been validated.
- Management cannot or will not provide read-only data access.

**Likely failure type if poor**

- `Proof gap` if the data is genuine but the documentation gap is real; `competence / credibility failure` if management does not actually understand its own metrics.

---

## 6. Reconcile the whitepaper-era "Proof of Compute" with the live "Proof of Contribution v2" upgrade.

The whitepaper specifies a Transformer-based PoW with a 2.3B-parameter sprint model and 1-in-900 difficulty. CertiK's milestone tracker shows v0.2.9 mainnet upgrade on **Feb 1, 2026** activated **"Proof of Contribution v2."** The change is not documented in the public record.

**What must be shown**

- A written engineering reconciliation between whitepaper-era PoC and live PoC v2, including any changes to the Transformer architecture, difficulty target, verification thresholds, or slashing parameters.
- Sprint duration and frequency in the live network (whitepaper: ~10 min once per cycle; tokenomics: 17,280 blocks ≈ 24 hours per epoch — these must be reconciled).
- Live validation statistics: spot-check rate, slashing events to date, executor-cheating detections.
- Adversarial-test or red-team reports.

**Acceptable**

- A written technical doc reconciles the upgrade and explains its motivation.
- Live statistics are reported transparently and consistent with the whitepaper's design targets (1–10% spot-check rate, < N% cheat detection per cycle).
- At least one red-team or independent academic review has been performed.

**Concerning**

- Reconciliation is verbal only; no written technical changelog.
- Spot-check rate is unobservable from on-chain data.
- No independent adversarial testing has been performed.

**Unacceptable**

- Management cannot reconcile whitepaper PoC with live PoC v2.
- Slashing has never been triggered, suggesting either no cheating exists (implausible) or detection does not work.
- The Transformer specification has been silently changed without disclosure.

**Likely failure type if poor**

- `Competence / credibility failure` if engineering can't explain its own upgrade; `structural thesis failure` if the PoC v2 mechanism quietly relaxes the verification rigor that makes the PoW alignment thesis credible.

---

## 7. Decentralization claims and operational reality.

The Bitfury press release states **"all control passed to an on-chain self-governed mechanism"** and **"no foundation or similar entity was established to gatekeep its evolution."** Product Science Inc. remains the operational center; CertiK reports one acknowledged Centralization (Privilege) finding; the GitHub `gonka-ai/gonka` repo has committer/maintainer privileges that may amount to de facto governance.

**What must be shown**

- Documentary proof of who controls on-chain governance: contract addresses, signer sets, multisig thresholds, upgrade authority.
- The text and resolution path of CertiK's outstanding Centralization (Privilege) finding.
- GitHub commit-merge authority list with the identities behind each maintainer; any required code-signing or sign-off processes.
- Governance-proposal history and voter-distribution data (top-10 voter concentration in PoC weight terms).

**Acceptable**

- No single entity has unilateral upgrade authority; protocol changes require a documented on-chain governance vote with quorum, majority, and veto thresholds matching the whitepaper.
- The CertiK Centralization finding has a credible mitigation roadmap with a target date.
- GitHub maintainer list is published; merge authority is distributed across at least 3 independent contributors.
- Voter concentration is below 50% for the top 5 voters in recent proposals.

**Concerning**

- Some governance functions still require a Product Science multisig to execute; the multisig is intended to be retired but has not been.
- The Centralization finding is acknowledged but no mitigation date is set.
- GitHub maintainer privileges are concentrated in 1–2 individuals from Product Science.

**Unacceptable**

- A Product Science multisig or Liberman family wallet retains unilateral protocol upgrade or treasury authority.
- The CertiK Centralization finding turns out to be a hard-coded admin role that no on-chain vote can revoke.
- Voter concentration shows the top 1 voter exceeds majority in recent proposals.
- Management refuses to identify the signers behind any privileged role.

**Likely failure type if poor**

- `Structural thesis failure`. The "no foundation, no gatekeeper" framing is load-bearing for both the regulatory thesis and the partner-trust thesis. If it is not operationally true, both fail.

---

## 8. Host unit economics and network sustainability at current GNK price.

George Kikvadze states the cost to mine one GNK is **approximately $1**; the live market is **$0.26**. If accurate, Hosts are running at a fiat loss subsidized by speculative belief in token-price recovery.

**What must be shown**

- Internal unit-economics model for representative Host configurations (H100, H200, A100, RTX 4090 paired) including electricity, hardware amortization, bandwidth, opex.
- Sensitivity analysis: at what GNK price do Hosts break even? At what price do Hosts churn out?
- Trailing 90 days of host-count and compute-power data, broken out by hardware class, to identify any deceleration or churn.
- Survey or interview data with named institutional Hosts (Gcore, Hyperfusion, others) on their economic targets.

**Acceptable**

- The model is internally consistent and shows Hosts are at break-even or modest profitability at $0.26, or, if at a loss, the Host-churn cliff price is disclosed and is well below $0.26.
- Trailing 90 days of host data shows stable or growing participation.
- Gcore / Hyperfusion / etc. are willing to confirm their economic terms in writing.

**Concerning**

- The model shows Hosts are slightly below break-even but management argues the recent token-price decline is temporary.
- Host count is stable but compute is plateauing (suggesting low-end Hosts churning out).
- Named institutional Hosts are reluctant to confirm economics in writing.

**Unacceptable**

- Hosts are materially loss-making at $0.26 and management's response is "Bitcoin had the same dynamic early on."
- No unit-economics model exists.
- Host count is materially declining, masked by aggregate compute claims.
- Gcore / Hyperfusion are no longer active on the network.

**Likely failure type if poor**

- `Structural thesis failure` — network economics that depend on speculative token appreciation are fragile and prone to negative feedback loops.

---

## 9. Control-function staffing and people risk.

No general counsel, chief compliance officer, head of security, head of finance, or chief operating officer is publicly named for either Product Science Inc. or the Gonka network. The Liberman siblings appear to lead across both ventures plus the Libermans Co. portfolio (Human, Humanism, Quantum Biology Center).

**What must be shown**

- Full org chart for both Product Science Inc. and any Gonka-related entity, with named control-function leaders and their tenure.
- Time-allocation disclosure for the Libermans: what percentage of each sibling's working time is devoted to Gonka.
- Key-person insurance coverage on at least David and Daniil Liberman.
- Documented continuity plan for protocol leadership if a founder ceased participation.

**Acceptable**

- General Counsel, Chief Compliance Officer, and Head of Security are named, with credible backgrounds.
- Founders' time allocation is disclosed and consistent with the network's needs.
- Key-person insurance is in place.

**Concerning**

- One or two control-function roles are filled by outside counsel/consultants on retainer rather than full-time hires.
- Founders are time-stretched across multiple ventures and the allocation to Gonka is described as "majority of working time" without specifics.
- Key-person insurance is intended but not yet executed.

**Unacceptable**

- No general counsel of record exists.
- No compliance function exists.
- The Libermans spend less than half their working time on Gonka but the public narrative treats it as their primary venture.
- No continuity or succession plan exists.

**Likely failure type if poor**

- `Remediable build gap` (these are standard institutional hires) if the project is otherwise solid; `competence / credibility failure` if management does not recognize the gaps.

---

## 10. Worst-case regulatory scenario and mitigation plan.

The tokenomics PDF explicitly acknowledges that regulators may disagree with Gonka's positions. A token reclassification (US or EU) or an enforcement action against Product Science Inc. or the Libermans would be project-defining.

**What must be shown**

- A written risk-and-mitigation memo identifying the highest-probability adverse regulatory scenarios across the next 24 months.
- Counterparty-risk mitigation: what happens to Bitfury's $50M and to the community-pool sale flows if a regulator orders the network to cease US-person sales?
- Counsel-of-record retainer in at least the US, EU, and UK.
- Crisis-communications and stakeholder-management plan.

**Acceptable**

- The risk memo names specific scenarios with probability ratings (e.g. "US SEC enforcement against Product Science Inc. for unregistered offering of GNK via the Community Pool — 15%"), and each has a documented mitigation path.
- Counsel of record is retained in at least three material jurisdictions.
- Insurance coverage (D&O, professional liability) is in place for Product Science Inc. and named directors.

**Concerning**

- Management has thought about the scenarios verbally but has no written memo.
- Counsel of record is only retained in the US.
- D&O insurance is in place but does not cover crypto-specific risks.

**Unacceptable**

- Management dismisses the risk on the basis of the March 20, 2025 PoW Staff Statement without engaging the nuances.
- No counsel is retained in the EU or UK despite material activity in those markets.
- No D&O insurance is in place.

**Likely failure type if poor**

- `Structural thesis failure` if the regulatory analysis is dismissive; `competence / credibility failure` if management has not done the work.

---

## Decision framework

Once all questions have been scored, classify the overall posture as one of the following:

- **Pause or pass.** One or more **Unacceptable** scores in questions 1, 2, 3, 4, 7, or 10. These are gating issues that cannot be resolved by adjusting terms or sequencing. Examples: management cannot identify which entity owns the protocol IP; no outside-counsel securities opinion exists; Founders' Allocation has already been sold off; the "no foundation" claim is contradicted by operational facts; no governance vote has ever displaced a Product Science decision; management dismisses regulatory risk.

- **Strict gating.** No Unacceptable in the gating questions, but multiple Concerning scores and material proof gaps. Proceed to phase-two diligence only with a written, time-bounded remediation plan, explicit milestones (e.g. "produce a non-US counsel opinion within 60 days; appoint a GC within 90 days; publish a Founders' Allocation vesting schedule within 30 days"), and a firm hold on any capital commitment until the milestones are hit.

- **Hold for evidence.** Mostly Acceptable scores with one or two clear data gaps that can be filled in 2–4 weeks (e.g. obtaining named institutional Developer references, an independent on-chain audit). Continue active engagement; revisit IC recommendation when data arrives.

- **Acceptable for term-sheet discussion.** All gating questions Acceptable; no more than a small number of Concerning scores, each with a documented remediation plan. Note that for a token investment, the term sheet itself must specify (i) the GNK tranche purchase price and any volume-weighted-average-price floor, (ii) lock-up terms aligned with founders' vesting, (iii) information rights including regular on-chain treasury and traction reporting, (iv) regulatory most-favored-nation protection in case classification changes, and (v) exit liquidity provisions given the current absence of CEX listing.

Across this firm's portfolio, the **default posture for first-time crypto-network investments where the regulatory framework is unsettled** is **strict gating** at minimum, with a written remediation plan before any capital is committed.
