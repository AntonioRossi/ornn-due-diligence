# Bittensor / Opentensor Foundation — Management Response Evaluation Guide

As of **May 26, 2026**.

## Purpose

This document converts the core open diligence questions for **Bittensor** and the **Opentensor Foundation (OTF)** into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the project — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the IC-memo evaluation framework used across this firm. For Bittensor, the bar is **higher** than for the Gonka and Silicon Data evaluation guides, because Bittensor is a $3.1B+ at-scale asset with public-market exposure (Coinbase, Grayscale OTCQX, pending Spot ETF). Institutional capital flowing into TAO via the ETF channel will rely on OTF's representations; the diligence assessment must reflect that gravity.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, on-chain data, audit reports, regulatory correspondence, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- For decentralization claims (Triumvirate-Senate model, "no entity owns or operates the Bittensor Network"), the bar is **on-chain operational evidence** — not assertions.
- For regulatory claims, the bar is **written counsel opinions** from US, EU, UK, and Swiss firms — not management's verbal interpretation.

## Failure types

When a question scores poorly, classify the failure:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, regulatory posture, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Proof gap**: the answer may be true, but the diligence package does not yet prove it.

---

## 1. What is the Opentensor Foundation, structurally?

The OTF is described as Swiss-domiciled. No board members, no employee count, no audited financials, and no FINMA correspondence are in the public record. The Triumvirate is described as composed of OTF employees, with exclusive proposal-creation and proposal-closure authority. The Yuma Group institutional services arm exists with an unclear relationship to OTF.

**What must be shown**

- Swiss legal form (Verein / Stiftung / AG), canton, formation date, registered office, council/board members with bios and disclosed conflicts.
- Articles of Association and internal Reglemente.
- Three years of audited (or reviewed) financial statements with notes on TAO holdings, fiat treasury, payroll, and related-party transactions.
- FINMA classification, ruling requests, no-action letters, or correspondence history.
- Clear delineation between OTF, Yuma Group, and any other affiliated entities.

**Acceptable**

- A clean Swiss Stiftung or Verein with named council, published Statuten, audited financials for at least the past two years, and a stated FINMA utility-token classification with corroborating correspondence.
- Yuma Group is either a fully-disclosed subsidiary with documented IP/treasury separation, or an arm's-length contractor with documented terms.
- The org chart names a General Counsel, CCO, CTO, and Head of Security at minimum.

**Concerning**

- Foundation structure is broadly understandable but financials are unreviewed, council is partly disclosed, and FINMA correspondence is verbal rather than documented.
- Yuma Group's relationship to OTF is described in narrative but lacks contractual evidence.
- Control-function roles exist but are partly external counsel / consultants rather than full-time hires.

**Unacceptable**

- OTF cannot produce a Swiss registry extract.
- OTF refuses or is unable to disclose council membership.
- No financials have ever been prepared.
- Yuma Group turns out to share key personnel with OTF without disclosure.
- No General Counsel or compliance officer exists.

**Likely failure type if poor**

- Usually `competence / credibility failure` for a $3B+ asset with public-market exposure.

---

## 2. How does TAO survive US securities-law scrutiny — and what is the live SEC ETF process?

The Grayscale Spot Bittensor ETF S-1 filing (December 30, 2025) is the single most important regulatory event in Bittensor's history. The REX-Osprey ETF filing language ("no entity owns or operates the Bittensor Network") is the cleanest decentralization-defense framing in US regulatory filings to date, but its survivability is untested. TAO's delegation-and-reward structure shares characteristics with prior SEC enforcement targets.

**What must be shown**

- Outside-counsel opinion addressing each of the five TAO distribution mechanisms separately (miners 41% / validators 41% / delegated stakers / subnet owners 18% / subnet alpha tokens).
- Counsel-of-record retainer in the US (recognized crypto-securities firm).
- Full status of OTF's engagement with the SEC on the Grayscale Spot ETF filing — any direct or indirect communication, conditions indicated, expected timeline.
- Documented contingency plan if the ETF is rejected or restricted.
- Disclosure of any subpoenas, Wells notices, no-action letter requests, or formal/informal SEC inquiries to OTF or named officers.

**Acceptable**

- Counsel memo from a recognized US crypto-securities firm (Latham, Wilson Sonsini, Cooley, Sullivan & Cromwell, Davis Polk, etc.) addressing each TAO distribution mechanism separately.
- OTF has filed substantive responses to SEC questions, has named counsel of record, and can describe the engagement.
- A documented contingency plan exists for ETF rejection.
- Non-US analysis covers EU MiCA, UK FCA, Swiss FINMA, and at least Singapore MAS or Hong Kong SFC.

**Concerning**

- A single US counsel opinion exists but does not address each of the five mechanisms separately.
- OTF describes the SEC process verbally without showing filings or response packages.
- MiCA classification is asserted without a counsel memo.
- The contingency plan is "we will respond if the SEC asks us to."

**Unacceptable**

- No US counsel opinion exists.
- The legal theory rests entirely on the "no entity" framing without addressing the staking, subnet-owner cut, and dTAO mechanics separately.
- OTF has received SEC inquiries that have not been disclosed in their representations.
- Counsel of record is absent in major non-US jurisdictions.

**Likely failure type if poor**

- `Structural thesis failure` if the legal posture cannot survive informed scrutiny. ETF rejection without a remediation path would materially change the institutional thesis. `Remediable build gap` if the work simply has not been done — but the gap is gating.

---

## 3. How decentralized is governance, in operational terms?

Bittensor's docs candidly say governance "transitions … from centralization within the foundation to community ownership over time." The Triumvirate (OTF employees) retains exclusive proposal-creation and proposal-closure authority. Top 64 validators control 100% of subnet emission weights. Top 10 by stake hold a supermajority-equivalent share in scoring scenarios.

**What must be shown**

- Triumvirate membership history, with each member's tenure, role at OTF, and voting record.
- Senate composition since governance launch, with each delegate's identity, controlled stake, and voting record.
- Quarterly Senate-vote-participation rate, top-10 voter concentration trend, and any proposals the Senate has rejected over Triumvirate preference.
- Top-100 validators on-chain analysis, including the overlap between subnet owners and validators, and the overlap between OTF affiliates and top validators.

**Acceptable**

- Triumvirate and Senate composition are documented with vote-by-vote records.
- The Senate has rejected at least one substantive Triumvirate proposal (evidence of independence).
- Top-10 validator concentration is bounded — no single entity controls >15% of total stake; top-3 control <33%.
- Subnet-owner-vs-validator overlap is disclosed and bounded by a published policy.
- OTF affiliates are not in the top 10 validators by stake.

**Concerning**

- Triumvirate has never had a proposal rejected by the Senate.
- Top-10 validator concentration is high (top-5 control 25-40% of stake) but not yet supermajority.
- Subnet-owner / validator overlap is acknowledged but unbounded.

**Unacceptable**

- The Triumvirate operates as a de facto board that the Senate has never overridden.
- Top-3 validators by stake collectively control >51% of voting power.
- OTF affiliates are dominant in the top-10 by stake, contradicting the "no entity owns or operates" framing.
- Subnet owners and the validators scoring their own subnets are pervasively overlapping.

**Likely failure type if poor**

- `Structural thesis failure`. The "transitions from centralization to community ownership over time" narrative becomes "still centralized; community ownership is rhetorical."

---

## 4. Validator concentration on-chain — what does Taostats actually show?

Yellow research and on-chain data indicate the top 64 root-network validators control 100% of subnet emission weights, and the top 10 by stake form supermajority blocs in scoring scenarios.

**What must be shown**

- Live Taostats-equivalent data export covering: top-10 / top-50 / top-100 validators by total stake (TAO + alpha); geographic distribution; subnet-owner overlap; OTF-affiliate overlap.
- Trend data showing whether concentration is rising or falling over the past 12 months.
- Documented mechanisms (cap, decay, anti-concentration penalty) by which OTF or governance is reducing concentration.

**Acceptable**

- On-chain data shows top-10 controlling <40% of stake, with a documented downward trend.
- A live anti-concentration mechanism (e.g. validator decay curve, take-rate cap, registration friction) is operating.
- Geographic distribution is meaningful (no single jurisdiction >40% of stake).

**Concerning**

- Top-10 controls 40-50% of stake; trend is flat.
- No anti-concentration mechanism is operating; one is "on the roadmap."
- Geographic distribution is opaque.

**Unacceptable**

- Top-3 controls >51%.
- Concentration is rising.
- OTF or known affiliates dominate the top-10.

**Likely failure type if poor**

- `Structural thesis failure`. Yuma Consensus depends on a diverse, honest validator set; concentration erodes the mechanism.

---

## 5. Audit posture — has Subtensor, Yuma Consensus, dTAO, or the bridge been audited?

Per Messari (December 2024): "no publicly disclosed audits." OTF announced intentions on July 3, 2024 to increase audit frequency, but no completion announcements in the public record.

**What must be shown**

- Completed third-party code audits for: Subtensor runtime, Yuma Consensus pallet, dTAO mechanism, EVM bridge, Bittensor SDK, CLI.
- Each audit: scope, methodology, findings by severity, resolution status, and any acknowledged-but-unresolved findings.
- A continuous-audit relationship with at least one tier-1 security firm.
- The status of the Bug Bounty program (Immunefi, HackenProof, or equivalent), including paid bounties to date.

**Acceptable**

- Subtensor and Yuma Consensus have completed audits from tier-1 firms (Trail of Bits, Halborn, Quantstamp, etc.) with no Critical findings outstanding.
- dTAO mechanism has been audited as part of v9.x or v10.x release.
- A live Bug Bounty exists with paid bounties documented.
- Continuous-audit cadence is documented (annual or post-major-release).

**Concerning**

- Subtensor has been audited but Yuma Consensus pallet specifically has not.
- The most recent audit is older than 18 months and predates dTAO.
- Bug Bounty exists but has paid zero bounties (suggesting low engagement).

**Unacceptable**

- No comprehensive completed audit exists.
- The Yuma Consensus implementation pallet has never been formally audited.
- The dTAO mechanism shipped without independent verification.

**Likely failure type if poor**

- `Remediable build gap` if audits are simply not yet completed, but the gap itself is gating for institutional capital.

---

## 6. PyPi breach post-mortem — has the supply-chain vector been remediated?

The 2024 PyPi Package Manager breach resulted in private-key exposure and 32,000+ TAO stolen. The post-incident response included safe-mode + Nexus Mutual $25M insurance cover.

**What must be shown**

- Root-cause analysis identifying the compromised package, attack vector, and timeline.
- Remediation: code-signing, dependency pinning, CI/CD security, package-manifest verification.
- User compensation: was any TAO restored or reimbursed?
- Confirmation that no further supply-chain incidents have occurred since.

**Acceptable**

- The root cause is documented and the remediation is comprehensive (code-signing + automated dependency scanning + post-install hooks audited).
- Affected users were compensated or made whole through Nexus Mutual or treasury reserves.
- A repeat supply-chain attack has not occurred in the 18+ months since.

**Concerning**

- The remediation is operational but partial (e.g. no code-signing on releases).
- Affected users were not compensated.
- Other minor supply-chain near-misses have occurred since.

**Unacceptable**

- Root cause is undocumented or contested.
- No remediation framework exists.
- Tensorplex / tTAO Bridge wind-down (May 2026) turns out to be a follow-on supply-chain incident.

**Likely failure type if poor**

- `Competence / credibility failure` if OTF cannot articulate post-mortem; `structural thesis failure` if supply-chain vectors remain open.

---

## 7. Taoflow and PoC v2 — have the recent emissions mechanisms been stress-tested?

The November 2025 Taoflow transition and the February 1, 2026 PoC v2 upgrade are recent and complex. They have not run through a sustained downturn.

**What must be shown**

- Documented stress-test results for sustained negative-net-flow scenarios.
- Documented engineering changelog reconciling pre-PoC-v2 Yuma Consensus with PoC v2.
- Live spot-check rate, slashing events, executor-cheating detections since the upgrade.
- Adversarial red-team or academic stress-test reports.

**Acceptable**

- Stress-test simulations run by OTF or third parties, with results publicly available.
- PoC v2 mechanism is reconciled in a written technical doc with clear rationale.
- Slashing events have occurred (evidence the mechanism is detecting issues).
- At least one third-party adversarial paper has been commissioned.

**Concerning**

- Stress-test is internal verbal-only.
- PoC v2 is documented but no slashing has occurred (implausible).
- No academic stress-test exists.

**Unacceptable**

- Management cannot articulate the engineering rationale for the upgrade.
- The Taoflow model has not been simulated against adversarial flows.
- Slashing has never been triggered.

**Likely failure type if poor**

- `Structural thesis failure` if the mechanism design quietly relaxed earlier guarantees.

---

## 8. Subnet quality — how does OTF / governance handle Goodhart's Law gaming?

Yellow research documents that "miners deployed models that maximize score on the specific distribution of queries validators use while performing poorly on held-out test sets" on smaller subnets.

**What must be shown**

- Documented cases of subnets where gaming was detected and remediated.
- The de-registration mechanism in practice — which subnets have been de-registered and why.
- Subnet quality-monitoring infrastructure: hold-out test sets, external benchmarking, validator scoring audits.

**Acceptable**

- At least three documented cases of subnet remediation since the October 2023 subnet launch.
- A documented quality-monitoring infrastructure (e.g. external benchmark periodic reports).
- The de-registration mechanism has been triggered.

**Concerning**

- Subnet quality issues are acknowledged but remediation is informal.
- No de-registration cases on record.
- Quality monitoring is "trust the validators."

**Unacceptable**

- OTF claims no Goodhart's Law gaming has occurred (implausible given third-party research).
- The de-registration mechanism has never operated.

**Likely failure type if poor**

- `Structural thesis failure`. The Yuma Consensus thesis depends on validators detecting and penalizing low-quality miners; if Goodhart's Law gaming routinely succeeds, the protocol's claimed AI-quality coordination is rhetorical.

---

## 9. Named institutional customers beyond Corcel

Public sources cite Corcel (50M+ inference calls) and Macrocosmos (HuggingFace LLM weights). No other named institutional customers are visible.

**What must be shown**

- At least five named institutional customers with monthly inference token volume, monthly USD-equivalent spend, subnet mix, contract term, and reference contact.
- Corcel-specific verification of the 50M+ inference calls figure, with breakdown by customer.
- Macrocosmos external-researcher named-reference list.

**Acceptable**

- Five+ named customers will speak to us with disclosed monthly usage.
- Corcel verifies its public figures and provides customer mix.
- At least two academic / research institutions are named users of Macrocosmos weights.

**Concerning**

- Two-to-three named customers available.
- Corcel verifies its top-line figure but does not provide customer mix.
- "Macrocosmos weights have been downloaded" without named external users.

**Unacceptable**

- No customers can be named beyond Corcel and Macrocosmos.
- Corcel's relationship to OTF turns out to make Corcel an affiliate rather than an independent customer.
- The 50M+ inference figure cannot be substantiated on-chain.

**Likely failure type if poor**

- `Proof gap` if the customers exist but lack documentation; `structural thesis failure` if Bittensor turns out to be substantially powered by internal emission farming rather than external consumption.

---

## 10. Founder disputes and the "centralized control" allegation

IQ.wiki references Covenant AI's founder accusing Jacob Steeves of maintaining centralized control. Blocmates references a Sam-vs-Jacob OTF founder dispute. Specifics are not in the public sources reviewed.

**What must be shown**

- OTF's official position on each allegation, in writing.
- Any responsive filings, settlement agreements, or governance changes resulting from the disputes.
- The identity, role, and current status of the "Sam" referenced and the Covenant AI founder.

**Acceptable**

- OTF candidly addresses the allegations with documentation showing they were resolved without material protocol changes.
- The allegations are characterized as personality disputes rather than governance disputes.
- All co-founders or alleged ex-co-founders have signed releases.

**Concerning**

- The allegations are acknowledged but not specifically addressed.
- Settlement terms are confidential, leaving the underlying governance posture unclear.
- The Sam-vs-Jacob dispute is dismissed as a misunderstanding.

**Unacceptable**

- OTF cannot or will not address the allegations.
- Internal governance changes happened in response that materially advantaged Steeves at the expense of co-founders.
- The Covenant AI allegation has merit on the facts and OTF has not remediated.

**Likely failure type if poor**

- `Competence / credibility failure` if OTF dodges; `structural thesis failure` if the centralized-control claim is substantiated.

---

## Decision framework

Once all questions have been scored, classify the overall posture as one of the following:

- **Pause or pass.** One or more **Unacceptable** scores in questions 1, 2, 3, 4, or 10. These are gating issues that cannot be resolved by adjusting terms or sequencing. Examples: OTF cannot produce a Swiss registry extract; no US counsel opinion exists; top-3 validators control >51% of stake; concentration is rising; the Covenant AI centralized-control claim is substantiated.

- **Strict gating.** No Unacceptable in the gating questions, but multiple Concerning scores and material proof gaps. Proceed to phase-two diligence only with a written, time-bounded remediation plan — for example: "OTF will publish audited financials within 90 days; complete a Subtensor + Yuma Consensus pallet audit within 180 days; the SEC ETF process resolves one way or the other."

- **Hold for evidence.** Mostly Acceptable scores with one or two clear data gaps that can be filled in 4-8 weeks (named institutional customers, Senate vote concentration data, post-incident audit reports). Continue active engagement; revisit IC recommendation when data arrives.

- **Acceptable for ETF / OTC discussion.** All gating questions Acceptable; no more than a small number of Concerning scores, each with a documented remediation plan. Note that for a TAO position, the entry vehicle (direct on-chain TAO, GTAO OTCQX, Coinbase, pending Spot ETF) materially changes the structural exposure, and the term sheet for any institutional vehicle must specify: (i) the per-TAO entry price methodology, (ii) lock-up consideration if any, (iii) information rights including regular on-chain treasury and traction reporting, (iv) regulatory most-favored-nation protection in case classification changes, (v) explicit treatment of subnet alpha tokens received as TAO staking rewards.

Across this firm's portfolio, the **default posture for at-scale public-market crypto-network investments where the regulatory framework is unsettled** is **strict gating** at minimum, with a written remediation plan before any capital is committed. The Grayscale Spot ETF SEC decision will materially update this posture in either direction.
