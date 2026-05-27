# Akash Network / Overclock Labs — Management Response Evaluation Guide

As of **May 26, 2026**.

## Purpose

This document converts the core open diligence questions for **Akash Network** and **Overclock Labs** into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the project — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the IC-memo evaluation framework used across this firm. For Akash, the bar is **calibrated for a mature, institutionally-recognized AI-DePIN protocol** with strong founder credibility but unfinished structural transitions (AEP-79 migration, Starbonds raise, tier-1 US listing gap). Current management must demonstrate not only continued operational execution but also that the major architectural pivots arrive on schedule with documented risk management.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, on-chain data, audit reports, regulatory correspondence, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- For the AEP-79 migration, the bar is **engineering changelogs and named smart-contract auditor engagement** — not "we're on track" assertions.
- For Starbonds, the bar is **SEC filings and capital-raised-to-date verification** — not "we're SEC-compliant" assertions.

## Failure types

When a question scores poorly, classify the failure:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, regulatory posture, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Migration execution risk**: a finding specific to the AEP-79 Cosmos-to-Solana migration timeline and competence.

---

## 1. Overclock Labs corporate structure

Overclock Labs's corporate disclosure is the load-bearing first question. Despite Akash being a $257M-mcap project with 5.5 years of mainnet history, the public record does not disclose jurisdiction of incorporation, board, employee count, or audited financials.

**What must be shown**

- Legal form, jurisdiction (Delaware? Wyoming? Cayman? other?), registered office, date of incorporation.
- Board of directors / managers with named members, biographies, related-party disclosures.
- Subsidiaries and affiliated entities including any Akash Foundation / DAO LLC.
- Two years of audited (or reviewed) financial statements.
- Domain registration and IP ownership confirmation.

**Acceptable**

- A US (Delaware or Wyoming) Inc/LLC with named board including at least one independent director, audited financials for two fiscal years, and clear domain/IP ownership.
- General Counsel, Chief Compliance Officer, and Head of Security are named full-time hires.
- A separate Akash Foundation or DAO LLC exists with documented bylaws to handle protocol governance independent of Overclock Labs's commercial operations.

**Concerning**

- US Inc/LLC but financials are unaudited (only reviewed).
- Board is composed entirely of co-founders and one outside investor with no independent directors.
- General Counsel role is filled by outside counsel rather than full-time hire.
- No separate Foundation; all protocol governance flows through Overclock Labs corporate decisions.

**Unacceptable**

- Overclock Labs is unable to produce a corporate registry extract.
- Financials have never been prepared.
- Domain and IP ownership are in personal-name capacity (Greg Osuri's personal IP) rather than corporate.

**Likely failure type if poor**

- `Competence/credibility failure` for a 10-year-old company.

---

## 2. AEP-79 Shared Security Migration

The single largest architectural decision in Akash's history. December 30, 2026 target completion.

**What must be shown**

- Current status of 15+ blockchain foundation RFP responses.
- Top-3 candidate chains with documented comparison.
- Detailed week-by-week migration schedule with engineering milestones.
- Validator transition plan.
- Customer-deployment continuity plan during migration.
- AKT token migration mechanics (wrap, swap, or snapshot).
- IBC compatibility implementation plan on destination chain.
- Outage / failure contingency plan.

**Acceptable**

- Destination chain selected with public technical comparison published.
- Engineering schedule shows clear milestones with named owners.
- Tier-1 smart-contract auditor engaged for the destination-chain codebase.
- Customer-deployment continuity is documented with named test cases.
- AKT migration mechanics are simple (1:1 wrap or snapshot) and don't require active user action.
- Contingency plan handles a 1-3 month slip without material network disruption.

**Concerning**

- Destination chain decision is still pending.
- Engineering schedule is high-level rather than week-by-week.
- Audit firm not yet named for destination-chain codebase.
- Customer continuity is "we'll communicate."

**Unacceptable**

- Migration is materially behind schedule (>3 months slip likely).
- No customer continuity plan exists.
- Audit firm engagement is uncertain or scheduled to begin <90 days before migration.
- AKT migration mechanics require active user opt-in (creates risk of stranded holders).

**Likely failure type if poor**

- `Migration execution risk` — this is the dominant 2026 risk for Akash.

---

## 3. Starbonds SEC-regulated framework

Akash is the first DePIN to raise via SEC-approved instruments. The Starbonds framework introduces both regulatory legitimacy and ongoing oversight exposure.

**What must be shown**

- Starbonds offering memorandum or equivalent SEC filing.
- Capital raised to date against the $75M target.
- Investor base composition.
- Use-of-proceeds detail (7,200 GB200 GPU allocation, Nodekeeper selection).
- The legal entity that issued the bonds and its ongoing SEC reporting obligations.

**Acceptable**

- Documented SEC exemption used (Reg D, Reg A+, or other clearly identified).
- At least 50% of $75M target raised.
- Investor base is appropriately accredited or Reg A+ compliant.
- Use-of-proceeds is on track with GPU deployment milestones documented.
- The issuing entity has ongoing SEC reporting requirements that have been met.

**Concerning**

- <50% of target raised.
- Investor base concentrated in a few large positions.
- Use-of-proceeds is behind milestones.

**Unacceptable**

- The offering has been paused or restructured due to SEC concerns.
- Less than 25% of target raised, suggesting the offering is failing.
- Compliance failures with the chosen SEC exemption have surfaced.

**Likely failure type if poor**

- `Structural thesis failure` — the Starbonds model is innovative but only valuable if it scales to the targeted capital raise.

---

## 4. Smart-contract security audits

Despite 5.5 years of mainnet operation, no comprehensive tier-1 audit history is publicly disclosed.

**What must be shown**

- Completed third-party audits from tier-1 firms for the Cosmos SDK chain, BME smart contracts, AkashML stack.
- Live Bug Bounty program with named scope and paid-bounty history.
- Audit schedule for the upcoming destination-chain codebase.

**Acceptable**

- At least one tier-1 audit (Trail of Bits, Halborn, Quantstamp, OtterSec) covering the Cosmos chain in 2024-2025.
- BME contracts audited prior to March 23, 2026 mainnet activation.
- AkashML stack audited prior to November 2025 launch.
- Live Bug Bounty with documented paid bounties.

**Concerning**

- Some tier-2 or tier-3 audits exist; tier-1 audits are scheduled but not complete.
- Bug Bounty exists but has paid zero bounties (low engagement).

**Unacceptable**

- No comprehensive audit has been performed.
- BME shipped to mainnet without a pre-deployment audit.

**Likely failure type if poor**

- `Remediable build gap` — but gating for institutional capital.

---

## 5. Customer reference calls

Akash claims the deepest set of named production customers in AI-DePIN. The 5+ named customers (Venice.ai, ElizaOS/ai16z, Envision Labs, Morpheus, Codex) should all be reachable.

**What must be shown**

- Reference calls scheduled within 30 days for Venice.ai (Erik Voorhees), ElizaOS / ai16z, Envision Labs, Morpheus, and Codex.
- Per customer: monthly GPU hours / inference token volume; monthly USD spend; specific hardware mix; contract term.

**Acceptable**

- 4+ of 5 reference calls happen within 30 days with disclosed monthly compute spend.
- Erik Voorhees personally confirms continued operational dependency on Akash.
- Total disclosed customer revenue supports the $5M Q1 2026 compute spend ATH.

**Concerning**

- 2-3 of 5 reference calls happen.
- Some customers describe partial migration to other DePIN networks (io.net, Bittensor).

**Unacceptable**

- Fewer than 2 customers will reference.
- Venice.ai declines or has reduced Akash usage materially.
- Stated customer spend doesn't reconcile with on-chain Akash revenue.

**Likely failure type if poor**

- `Proof gap` if real customers but unsupported; `competence/credibility failure` if customer claims turn out to be promotional rather than commercial.

---

## 6. AkashML / OpenRouter substantiation

The 1.7B-tokens/day claim on OpenRouter outpacing Cloudflare is striking and verifiable.

**What must be shown**

- Direct OpenRouter-side data or third-party-router-volume audit confirming the figure.
- Cloudflare-comparison methodology (single-model? aggregate?).
- Customer breakdown by inference model and traffic source.

**Acceptable**

- OpenRouter confirms 1.7B+ daily tokens through AkashML provider listing.
- Methodology is sound (e.g., aggregate across all models routed via AkashML).
- Customer breakdown shows reasonable diversification.

**Concerning**

- OpenRouter can confirm directional volume but not the specific 1.7B claim.
- Most traffic is from a single customer or a single model.

**Unacceptable**

- OpenRouter cannot or will not confirm the figure.
- The Cloudflare comparison turns out to be a single-model cherry-pick.

**Likely failure type if poor**

- `Competence/credibility failure` if exaggerated; `proof gap` if directionally true but unverifiable.

---

## 7. AKT supply, BME performance, listing posture

The BME mechanism is the structural fix for AKT supply-demand alignment. Performance since March 23, 2026 activation should be documented.

**What must be shown**

- Cumulative AKT burned via BME since March 23, 2026.
- Cumulative ACT minted.
- Net supply effect.
- Unlock schedule for remaining 94M AKT (from 294M circulating to 388M max).
- Top-10 holder concentration.
- Active listing applications at Coinbase / Binance / Kraken / OKX.

**Acceptable**

- BME is on-track per the original modeled performance.
- Unlock schedule is published with monthly granularity.
- Top-10 holder concentration is healthy (<40%).
- At least one tier-1 US listing application is in active discussion.

**Concerning**

- BME modeled vs actual show notable divergence.
- Unlock schedule has large cliffs.
- Top-10 holders include Overclock Labs or Greg Osuri at >15% individual share.

**Unacceptable**

- BME is materially underperforming the model (insufficient revenue to support meaningful burn).
- Single holder owns >25% of circulating supply.
- No tier-1 US listing on the roadmap.

**Likely failure type if poor**

- `Structural thesis failure` if BME isn't delivering; `remediable build gap` if listings haven't been pursued.

---

## 8. Greg Osuri and Overclock Labs people-risk

Osuri is the strongest founder profile in the AI-DePIN sector this firm has reviewed. Key concentration and succession risks must still be addressed.

**What must be shown**

- Osuri's AKT holdings with lockup or vesting if any.
- Any retained founder rights or board controls.
- Succession plan if Osuri were unable to continue as CEO.
- Co-founder Adam Bozanich and Boz Menzalji current status, AKT holdings, operational involvement.

**Acceptable**

- Osuri's AKT holdings are reasonable (<10% of circulating supply) with documented lockup.
- No supermajority board control; board includes independent directors.
- Documented succession plan with named CFO/COO who could step into CEO role.
- Co-founders continue active engagement with positive working relationship.

**Concerning**

- Osuri holds 10-25% with limited lockup.
- Board is co-founder-controlled with no independent oversight.
- Succession plan is informal.

**Unacceptable**

- Osuri holds >25% of circulating supply with no lockup.
- Co-founder dispute or material disagreement on strategic direction (especially the AEP-79 migration).
- No succession plan exists.

**Likely failure type if poor**

- `Competence/credibility failure` for poor concentration management; `structural thesis failure` if co-founder dispute exists.

---

## 9. Regulatory posture going into post-migration era

The Cosmos-to-Solana migration plus Starbonds plus AKT US securities classification combine into a complex regulatory picture.

**What must be shown**

- Outside-counsel US securities opinion on AKT classification (pre- and post-migration).
- SEC engagement history (any inquiries, no-action letters, formal subpoenas).
- Non-US counsel coverage (EU MiCA, UK FCA, MAS, ADGM at minimum).
- Crisis-communications and stakeholder-management plan for adverse regulatory event.
- D&O insurance covering crypto-specific risks.

**Acceptable**

- Counsel of record retained in at least US, EU, UK, Switzerland.
- US opinion treats AKT, ACT, BME, and Starbonds separately.
- No pending SEC enforcement matters.
- D&O insurance includes crypto coverage.
- Greg Osuri's congressional engagement is documented in writing (not just verbal claims).

**Concerning**

- Counsel only in US.
- D&O lacks crypto-specific coverage.

**Unacceptable**

- Active SEC enforcement against Overclock Labs or named officers.
- Management dismisses regulatory risk because of Osuri's congressional engagement (engagement is not protection).

**Likely failure type if poor**

- `Structural thesis failure` if regulatory analysis is dismissive.

---

## 10. Q2-Q3 2026 momentum sustainment

Q1 2026 showed strong inflection ($5M compute spend ATH, BME live, Homenode launch, AkashML on OpenRouter outpacing Cloudflare). The investment thesis depends on this momentum continuing.

**What must be shown**

- Q2 2026 monthly compute spend trajectory.
- BME burn-rate trend.
- Homenode operator growth.
- AkashML / OpenRouter daily-token-volume trend.
- New customer wins in Q2 2026.

**Acceptable**

- Monthly compute spend continues to grow vs Q1.
- BME burn rate is meaningful (>1M AKT per quarter).
- Homenode is onboarding 10+ operators per month.
- AkashML tokens/day continues to grow.
- New named customers added in Q2 (at minimum 2-3).

**Concerning**

- Monthly compute spend plateaus.
- BME burn is below model.
- Homenode growth is slow.

**Unacceptable**

- Compute spend declines from Q1 ATH.
- BME burn is materially below model.
- No new customer wins in Q2.

**Likely failure type if poor**

- `Structural thesis failure` — the post-IDE inflection must continue or the thesis weakens materially.

---

## Decision framework

Once all questions have been scored, classify the overall posture:

- **Pause or pass.** One or more **Unacceptable** scores in questions 1, 2, 3, 4, 8, or 9. Examples: Overclock Labs cannot produce a corporate registry; AEP-79 migration is materially behind schedule; Starbonds compliance failure; no comprehensive audit history exists; Osuri holds >25% AKT with no lockup; active SEC enforcement.

- **Strict gating.** No Unacceptable in the gating questions, but multiple Concerning scores. Proceed with a written, time-bounded remediation plan — for example: "Overclock Labs publishes audited financials and corporate registry by Q3 2026; tier-1 audit firm engaged for destination-chain codebase within 60 days; Starbonds capital-raise milestone of $40M by Q3 2026."

- **Hold for evidence.** Mostly Acceptable scores with one or two data gaps that can be filled in 4-8 weeks (e.g., customer reference calls, OpenRouter verification).

- **Acceptable for AKT position discussion / Starbonds participation.** All gating questions Acceptable; minimal Concerning scores. Note that **AEP-79 migration completion (December 30, 2026) is a structural milestone** — position-sizing for any pre-migration capital deployment should be smaller than post-migration. The term sheet for any institutional position should specify: (i) per-AKT entry methodology; (ii) lock-up alignment with founder vesting; (iii) information rights including BME monthly burn reporting; (iv) regulatory most-favored-nation protection; (v) explicit treatment of any post-migration AKT-wrap-token mechanics.

Across this firm's portfolio, the **default posture for institutionally-recognized AI-DePIN investments with material architectural transitions in progress** is **strict gating** at minimum, with capital deployment phased around the migration milestone.
