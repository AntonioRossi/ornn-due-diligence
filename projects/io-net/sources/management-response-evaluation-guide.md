# io.net / IO Research — Management Response Evaluation Guide

As of **May 26, 2026**.

## Purpose

This document converts the core open diligence questions for **io.net** and **IO Research** into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the project — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the IC-memo evaluation framework used across this firm. For io.net, the bar is **specifically calibrated for a post-founder-event protocol** trading at −97% from ATH with a publicly documented "metric misrepresentation" allegation against its founding CEO. Current management must demonstrate not only operational competence but a **clean break** from Shadid-era data, narrative, and governance.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, on-chain data, audit reports, regulatory correspondence, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- For Shadid-era claims, **the bar is on-chain or signed-document evidence** — not management's verbal characterization.
- For Q2 2026 IDE implementation timing, **the bar is written engineering changelogs and named smart-contract auditor engagements** — not "we're on track" assertions.

## Failure types

When a question scores poorly, classify the failure:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, regulatory posture, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Proof gap**: the answer may be true, but the diligence package does not yet prove it.
- **Founder-era contamination**: a finding from the Shadid era that current management has not (yet) cleanly separated from the live protocol.

---

## 1. Founder-history and the Shadid separation

The Investigations.org report rates Shadid as HIGH RISK with explicit allegations of "reported inflated GPU supply claims" during io.net's growth phase. IO.net paid him a six-figure severance "to distance the company from him." He deleted his public departure statement. The token launched days after his resignation; the price has fallen ~97% from its post-launch ATH.

**What must be shown**

- The executed Ahmad Shadid separation agreement (under appropriate NDA if needed) showing: severance amount, retained equity/token rights, governance rights (if any), non-disparagement scope, clawback/restitution provisions.
- IO Research's official written position on the "inflated GPU supply claims" allegation, including any internal investigation findings.
- Shadid's current IO holdings (whether held in his wallets, in escrow, or burned/forfeited under the separation).
- Confirmation of any continued role, advisory position, or board seat held by Shadid.
- A documented governance / data-integrity policy adopted **after** the Shadid separation, with named accountability.

**Acceptable**

- The separation agreement explicitly distances Shadid from the protocol, includes meaningful clawback or restitution provisions for misrepresentation findings, restricts him from making post-departure statements about io.net.
- IO Research's official position on the inflated-supply allegation is supported by: (a) revised methodology for "verified GPU" counting; (b) an external review (consultant or auditor) of pre- vs post-June 2024 network-scale claims; (c) a documented data-integrity reset.
- Shadid holds either zero IO or a small minority share held in escrow with vesting/forfeiture triggers.
- Shadid has no ongoing role with IO Research or any affiliated entity.

**Concerning**

- The separation agreement is described verbally but not produced.
- IO Research declines to comment publicly on the Investigations.org allegations but acknowledges them privately.
- Shadid retains a meaningful IO position (>1% of supply) with limited transfer restrictions.

**Unacceptable**

- The separation agreement is undisclosed and cannot be obtained.
- IO Research's official position is that the inflated-supply allegation is "false" without producing the revised methodology.
- Shadid retains material IO holdings (>5% of supply) or any board seat / advisory role.
- IO Research has not adopted any documented post-Shadid data-integrity policy.

**Likely failure type if poor**

- `Founder-era contamination` + `competence/credibility failure`. The post-Shadid era is then not actually separated from the Shadid era.

---

## 2. Current CEO identity and post-Shadid org chart

CoinMarketCap lists **Tory Green** as CEO; the 2025 Year in Review references **Gaurav Sharma** as the CEO delivering the Super AI Singapore keynote. This is unresolved in the public record.

**What must be shown**

- A named, dated org chart showing the post-Shadid leadership transition with: incoming CEO date, CFO, CTO, CPO, General Counsel, CCO, CISO.
- Each named officer's biography with prior roles and tenure at io.net.
- Time-allocation disclosure for the CEO (% of working time devoted to IO Research vs other ventures).
- A documented succession plan for key roles.

**Acceptable**

- The CEO identity is unambiguous (single name, with a documented transition date if there has been one).
- Org chart includes a named General Counsel and CCO at minimum.
- CEO is full-time on io.net.

**Concerning**

- Org chart exists but key roles (GC, CCO, Head of Security) are filled by outside counsel/consultants rather than full-time hires.
- CEO transition occurred recently and the new CEO has limited public track record.

**Unacceptable**

- The CMC vs Year-in-Review CEO discrepancy is unresolved (suggesting an internal communication breakdown or undisclosed transition).
- No General Counsel of record.
- CEO is part-time or has primary obligations to another venture.

**Likely failure type if poor**

- `Competence/credibility failure` for unresolved identity; `remediable build gap` for missing control-function hires.

---

## 3. Network-scale claim integrity

Homepage claim: "30,000+ GPUs" and "Deploy 10,000 GPU cluster in 10 seconds." Company's own 2025 Year in Review: **2,752 verified GPUs**. Order-of-magnitude gap.

**What must be shown**

- Precise operational definitions for "GPU" in (a) the homepage figure and (b) the verified figure.
- Verification methodology: uptime threshold, work-submitted threshold, staking-deposit threshold.
- On-chain dataset showing live, active, staked GPU count over the last 12 months by hardware class (H100, H200, A100, RTX 4090, etc.).
- Geographic distribution methodology for "138+ countries."
- Trend data showing whether the verified-GPU count has grown, plateaued, or contracted post-Shadid.

**Acceptable**

- Both figures are explicitly defined and the gap is reconciled (e.g., "verified" is a strict SLA threshold while "30,000+" includes lower-tier intermittent supply).
- On-chain data confirms a credible verified-GPU trajectory.
- The verified figure has grown post-Shadid.

**Concerning**

- The gap is acknowledged but the reconciliation is verbal.
- The verified figure has plateaued or declined post-Shadid.

**Unacceptable**

- Management cannot define what "verified" means operationally.
- The homepage figure includes any supply that has not transacted in the last 30 days.
- The verified figure has declined materially post-Shadid and is hidden via aggregate "30,000+" framing.

**Likely failure type if poor**

- `Founder-era contamination` — this pattern would be exactly what the "reported inflated GPU supply claims" allegation describes, persisting under current management.

---

## 4. IDE Q2 2026 implementation timing

The IDE is the structural fix for the failed original tokenomics. As of late May 2026, it is not yet live. Q2 2026 implementation is the public commitment.

**What must be shown**

- Current implementation timeline (week-by-week if possible).
- Engineering changelogs and testnet results for the IDE Solana program.
- Named smart-contract audit firm engaged for the IDE deployment.
- Stress-test results beyond CryptoEcon Lab (CEL) economic simulation — specifically: Solana chain outage scenarios, supplier mass-exit scenarios, vault-drift scenarios.
- Contingency plan if Q2 2026 implementation slips past Q3.

**Acceptable**

- Implementation is on track for Q2 2026 with documented engineering progress.
- A tier-1 audit firm (Trail of Bits, Halborn, Quantstamp, OtterSec) is engaged for the IDE contracts with a defined timeline.
- Stress-test results cover the Solana-outage and supplier-mass-exit scenarios beyond CEL's demand-drop / price-crash tests.

**Concerning**

- Implementation is on schedule but the audit firm is not yet engaged.
- Stress-tests are CEL-only and have not been extended.
- Contingency plan is "we'll communicate if delayed."

**Unacceptable**

- Implementation has slipped or is at risk of slipping past Q3 2026.
- No tier-1 audit firm has been engaged for the IDE contracts.
- The contingency for vault drift or supplier mass exit is not documented.

**Likely failure type if poor**

- `Structural thesis failure` — the investment thesis depends on the IDE arriving on schedule.

---

## 5. Smart-contract audit coverage

No comprehensive code audit is publicly disclosed for the Solana program, bridge, staking module, or IDE vaults.

**What must be shown**

- Completed third-party audits from tier-1 firms for: Solana program (IO token, staking, rewards), bridge contracts (if applicable), IDE vault contracts.
- Each audit: scope, methodology, severity-tagged findings, resolution status, acknowledged-but-unresolved findings.
- Live Bug Bounty program (Immunefi / HackenProof) with named scope and paid-bounty history.

**Acceptable**

- All major contract surfaces have completed tier-1 audits with no Critical findings outstanding.
- A live Bug Bounty exists with documented paid bounties.

**Concerning**

- Some surfaces audited but the IDE contracts (most consequential) are not yet audited.
- Audits are by tier-2 or tier-3 firms only.

**Unacceptable**

- No comprehensive audit of the Solana program exists.
- The IDE will ship without a tier-1 audit.
- No Bug Bounty program exists.

**Likely failure type if poor**

- `Remediable build gap` — but gating for institutional capital.

---

## 6. Series A investor positions and continued conviction

The Series A syndicate (Multicoin, Hack VC, Solana Labs, Aptos Labs, 6th Man Ventures, Modular Capital, Animoca Brands, OKX, angels) provides institutional credibility. Whether each investor still holds is load-bearing.

**What must be shown**

- Confirmation from at least 2-3 named Series A investors of continued portfolio position with willingness to give reference calls.
- Multicoin Capital and Hack VC are the highest-priority references given Multicoin led the seed and participated in the Series A.
- Any documented secondary-sale activity by Series A investors.

**Acceptable**

- Multicoin and Hack VC both confirm continued positions and willingness to reference.
- At least one additional Series A investor (Solana Labs / Aptos Labs / Animoca / OKX) is available for reference.
- No material secondary sales since token launch.

**Concerning**

- One of Multicoin / Hack VC will reference but not the other.
- Some secondary sales have occurred but are not material.

**Unacceptable**

- Multicoin and Hack VC both decline to reference.
- Material secondary sales (>50% reduction of original Series A allocation) have occurred.
- Any Series A investor has publicly written down or written off their position.

**Likely failure type if poor**

- `Structural thesis failure` — institutional capital following institutional capital is a load-bearing dynamic for sub-$100M crypto positions.

---

## 7. Customer case-study verification

Five named case studies (Leonardo.Ai, Wondera, Frodobots/UC Berkeley RAIL Lab, Vistara Labs, KayOS) with disclosed AWS-comparison savings.

**What must be shown**

- For each customer: signed reference contact, monthly inference-token or GPU-hour consumption, monthly USD spend, contract term, model mix.
- Disclosure of any subsidies, IO-token incentives, or revenue-share arrangements baked into the publicly stated savings figures.
- Post-Shadid customer-cohort breakdown.

**Acceptable**

- All five customers will give reference calls.
- The savings figures are net of any subsidies / incentives, with disclosure of how they were calculated.
- At least three of the five customers were onboarded post-Shadid.

**Concerning**

- 2-3 of five customers will reference.
- One or more savings figures includes a subsidy.

**Unacceptable**

- Fewer than 2 customers will reference.
- Most savings figures include unstated subsidies or token-rebate arrangements.
- The customer base is overwhelmingly pre-Shadid-departure.

**Likely failure type if poor**

- `Proof gap` if real but unsupported; `founder-era contamination` if pre-Shadid claims dominate.

---

## 8. Revenue substantiation

The IDE's burn mechanism (≥50% of post-payout revenue) requires substantive revenue. Without it, the IDE cannot maintain the deflationary pressure that anchors the token thesis.

**What must be shown**

- Aggregate quarterly USD-equivalent revenue from io.cloud and io.intelligence for the last 8 quarters.
- Breakdown by paying-customer count, ARPU, and top-10 customer concentration.
- A pro-forma showing post-IDE behavior under current revenue (i.e., does current revenue support stable USD supplier payouts + the 50% burn?).

**Acceptable**

- Quarterly revenue is disclosed with growth trajectory; pro-forma shows IDE supports stable payouts at current revenue levels.
- Customer concentration is reasonable (top-10 < 50% of revenue).

**Concerning**

- Revenue is disclosed only in aggregate; pro-forma shows IDE marginally supports the model.
- Top-10 customers > 50% of revenue.

**Unacceptable**

- Management will not disclose revenue figures.
- Pro-forma shows the IDE requires materially higher revenue than current to work.
- Top-3 customers > 50% of revenue.

**Likely failure type if poor**

- `Structural thesis failure` — without revenue, the IDE is a slogan.

---

## 9. Solana ecosystem-systemic risk

io.net's settlement is on Solana. Solana has had multiple historical outages.

**What must be shown**

- Documented Solana-outage contingency plan: SLA behavior, supplier-slashing protection, customer-refund provisions during chain outages.
- Disclosure of any cross-chain bridge exposure.
- Bridge security model and any incidents.

**Acceptable**

- Outage contingency is documented with explicit supplier-slashing protection and customer SLAs.
- Any bridge contracts are tier-1 audited with no outstanding findings.

**Concerning**

- Outage contingency is verbal but not documented.
- Bridge contracts are audited by tier-2 firms.

**Unacceptable**

- No outage contingency exists.
- Supplier slashing fires during Solana outages without protection.

**Likely failure type if poor**

- `Remediable build gap` — but a real Solana outage would force this into structural-thesis territory.

---

## 10. Worst-case regulatory scenario and mitigation

IO is listed on Coinbase, Binance, and other tier-1 venues. Regulatory exposure exists for both IO Research (issuer side) and listing exchanges. The IDE's USD-stable supplier payouts and ≥50% burn mechanism may strengthen "utility token" framing but also create new investment-contract concerns if holders are seen as relying on the IDE's adaptive supply expansion for token value.

**What must be shown**

- A written risk-and-mitigation memo for the next 24 months covering: US securities classification (under SEC PoW Staff Statement framework + post-IDE staking-equivalent characterization); MiCA classification in EU; FCA qualifying-cryptoasset framework in UK.
- Counsel of record retained in at least US, EU, UK, and Switzerland.
- Crisis-communications and stakeholder-management plan.
- D&O insurance covering crypto-specific risks for named officers.

**Acceptable**

- The risk memo identifies specific scenarios with probability ratings and documented mitigation paths.
- Counsel of record is retained in at least three material jurisdictions.
- D&O insurance is in place with crypto coverage.

**Concerning**

- Counsel only in the US.
- D&O insurance lacks crypto-specific coverage.
- The risk memo is verbal-only.

**Unacceptable**

- Management dismisses regulatory risk because "Coinbase listed it."
- No counsel retained in EU or UK despite IO trading activity in those markets.
- No D&O insurance.

**Likely failure type if poor**

- `Structural thesis failure` if the regulatory analysis is dismissive.

---

## Decision framework

Once all questions have been scored, classify the overall posture as one of the following:

- **Pause or pass.** One or more **Unacceptable** scores in questions 1, 3, 4, 6, or 10. Given the founder-history overhang, this is the **default presumption** for io.net until proven otherwise.
  - Examples: separation agreement undisclosed; verified-GPU figure is hidden behind "30,000+" claim; IDE implementation slips past Q3 2026; Multicoin or Hack VC will not reference; regulatory analysis is dismissive.

- **Strict gating.** No Unacceptable in the gating questions, but multiple Concerning scores. Proceed to phase-two diligence with a written, time-bounded remediation plan — for example: "IO Research will publish the corporate registry, post-Shadid governance policy, and IDE smart-contract audit by Q3 2026; IDE implementation completes in Q2 2026; at least three of five customer case studies provide reference calls within 30 days."

- **Hold for evidence.** Mostly Acceptable scores with one or two data gaps that can be filled in 4-8 weeks (e.g., customer references, Multicoin position confirmation, post-IDE first-quarter observability).

- **Acceptable for IO purchase / OTC discussion.** All gating questions Acceptable; no more than a small number of Concerning scores; **IDE is live with at least one quarter of post-implementation observability**. Note that for an IO position, the entry vehicle (direct Solana on-chain, Coinbase, Binance) and the timing relative to the IDE implementation materially change the structural exposure. The term sheet for any institutional position must specify: (i) per-IO entry price methodology, (ii) lock-up consideration if any, (iii) information rights including regular on-chain treasury and traction reporting, (iv) regulatory most-favored-nation protection, (v) explicit treatment of any retained Shadid-era IO that may be subject to clawback.

Across this firm's portfolio, the **default posture for post-founder-event crypto-network investments where the regulatory framework is unsettled** is **pause or pass** at minimum, with a written remediation plan before reassessment. The IDE Q2 2026 implementation outcome will materially update this posture in either direction.
