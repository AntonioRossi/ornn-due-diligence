# Management Response Evaluation Guide — Kaspa + Igra Network

Date: 2026-05-27
Audience: investment-committee members and phase-two diligence evaluators

This guide pairs the 10 first-call questions in `management-diligence-request-list.md` with what a credible answer looks like (green flag), what a partial answer looks like (yellow flag), and what disqualifies the response (red flag). At the end, a decision framework summarizes how individual responses aggregate to a go/no-go.

---

## Q1 — Toccata mainnet activation date and TN10 rehearsal status

- **Green**: A hardcoded mainnet activation block height with a Gregorian date inside the announced June 5–20, 2026 window, plus a TN10 rehearsal report (or live link to one) describing simulated transition, defects found, and remediation. Aligns with Sutton's published roadmap [3].
- **Yellow**: Activation still pending TN10 rehearsal completion, with a credible "weeks not months" framing and a public TN12 status. We accept this if TN10 rehearsal is scheduled within 2 weeks of the call.
- **Red**: Vague "soon" with no rehearsal schedule, or a date outside the originally announced window without a public technical explanation matching Sutton's published reasoning around KIP-21.

## Q2 — Sigma Prime audit scope, findings, remediation

- **Green**: Direct link to the audit PDF, willingness to walk through severity distribution (info / low / medium / high / critical), explicit list of findings and remediation status per finding, plus a written statement of what was out of scope (e.g., Kaspa L1, off-chain infrastructure).
- **Yellow**: PDF link only with "no unresolved issues" claim - no walkthrough offered. Acceptable only if the PDF itself contains a clear severity table.
- **Red**: Reluctance to share scope or rationale for scope choices; refusal to identify out-of-scope components; or any contradiction with the Sigma Prime public-audits GitHub repository.

## Q3 — Bridge security mode currently live + roadmap

- **Green**: Identifies the active mode (community multisig at launch), names the signers and their independence, time-lock parameters, current locked KAS supply, and a written commitment to MPC FROST migration within a defined window (e.g., H2 2026).
- **Yellow**: Identifies the mode but cannot share signer list publicly; offers diligence-only signer disclosure under NDA.
- **Red**: Cannot identify the active bridging mode; signer list undisclosed even under NDA; no timeline to MPC; or contradicts the litepaper's stated three-tier escalation.

## Q4 — Core developer employment / funding

- **Green**: Names the employer for each named core developer (Sutton, Newman, Moog, Safstrom) and the funding source - whether Kaspa Ecosystem Foundation grant, Igra Labs employment, independent contract, or other. Includes per-developer multi-year commitment runway.
- **Yellow**: General statement that "KEF supports developer grants" without per-developer breakdown.
- **Red**: Cannot answer; admits that core developers work uncompensated; or contradicts publicly visible affiliations (e.g., Mike Zak listed on Igra Labs team page [16]).

## Q5 — Kaspa Ecosystem Foundation legal/financial disclosure

- **Green**: Discloses the foundation's legal entity name, jurisdiction (likely a similar Swiss/Cayman/Singapore structure), board composition, audited financials for the most recent two fiscal years, and a public-facing transparency report cadence. Clarifies relationship to Kaspa Industrial Initiative Foundation (Kii).
- **Yellow**: Provides legal entity + jurisdiction but no audited financials yet; commits to a transparency timeline within 6 months.
- **Red**: No legal entity disclosure; conflation of KEF with informal community efforts; or any indication that "the foundation" is in practice an unaccountable multisig with anonymous signers.

## Q6 — Polychain residual KAS disposition

- **Green**: Confirms the IP-rights waiver per ByteTree and Kaspa Wiki [9][10]; provides on-chain proof or a notarized statement that the originally-mined KAS used for repayment has been dispersed; identifies the wallet addresses if any residual position is held.
- **Yellow**: Confirms the waiver and the repayment but says further on-chain disposition is "not tracked"; offers to investigate.
- **Red**: Disputes the waiver; refuses to engage with the question; or indicates Polychain retains material undisclosed control.

## Q7 — Igra Association multisig + DAO transition

- **Green**: Specifies the multisig topology for Association-controlled allocations (signers, m-of-n, time-lock), the trigger conditions for DAO control (e.g., year-N post-TGE, governance participation thresholds), and a written DAO transition plan.
- **Yellow**: Provides multisig details but DAO transition is described in narrative terms only - no triggers or dates.
- **Red**: Multisig details undisclosed even under NDA; or DAO transition is "TBD" with no roadmap.

## Q8 — Tier 1 exchange engagement + Kraken status

- **Green**: Clarifies the Kraken Nov 2024 listing status (confirm or refute); shares ongoing engagement narrative for Binance and Coinbase including any application reference numbers or expected timelines.
- **Yellow**: Acknowledges that Tier 1 listings are not under their control but provides factual status (whether KAS/IGRA are listed, applied, in conversation, rejected, etc.) without specific timelines.
- **Red**: Cannot confirm or refute Kraken listing; or makes confident listing-date claims that lack source backing.

## Q9 — IGRA dilution projections

- **Green**: Provides a 24-month projected circulating-supply table consistent with the published distribution schedule (10% TGE, 60-month linear for Ecosystem/Community, 36-month for Team, etc.) [11]. Articulates a per-quarter dilution rate in basis points.
- **Yellow**: References the published distribution table on the website but no analytical projection.
- **Red**: Contradicts the public distribution table; or implies a different unlock schedule than what was published.

## Q10 — Concrete covenant and zk use cases post-Toccata

- **Green**: Names 3+ teams already building covenant-based or zk-based applications targeting post-Toccata deployment - escrow vaults, atomic swap providers, ZK rollup builders. Specific commitments from Kaskad, Zealous Swap, or named third parties.
- **Yellow**: General use-case categories (DeFi, NFT, agent payments) without named developers.
- **Red**: Cannot name a single covenant- or zk-specific use case; only references generic EVM dApp migration.

---

## Decision framework

- **9 or 10 greens, 0 reds**: Proceed to full phase-two diligence (audit close-out review, treasury verification, custody setup). Aim to size capital around the Toccata activation window and 95% mined supply milestone (July 10, 2026).
- **6–8 greens, ≤ 1 red**: Conditional proceed. Issue a follow-up list with specific 30-day deadlines on the reds before any commitment. Do not warehouse position size beyond minimal phase-two diligence cost.
- **3–5 greens, or 2 reds**: Pause. Either Kaspa is not yet institutionally ready, or our diligence questions were not specific enough. Reissue with sharper asks and re-evaluate in 90 days post-Toccata activation.
- **2 reds in (Q2, Q3, Q5, Q7, Q9)**: Decline. These map to bridge counterparty risk + foundation accountability + tokenomics integrity - the three structural premises of the investment thesis. Any two fails together undermine the recommendation.

## Sizing rationale

If diligence clears:
- Size initial position **post-Toccata activation** (confirmed mainnet activation block height).
- Layer additional accumulation **post-July 10, 2026 95%-mined milestone** if KAS price has not pre-discounted the supply cliff.
- Maintain optionality on IGRA via the Zealous Swap secondary market; do NOT lead size on IGRA before Sigma Prime audit close-out review and bridge tier confirmation.
- Hard exit triggers: (a) Toccata activation slips by >60 days vs hardcoded date; (b) any successful bridge exploit on Igra; (c) any disclosed material residual Polychain position emerging from on-chain proof Q6.
