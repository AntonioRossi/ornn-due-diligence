# io.net — Research Gap Tracker

Updated: 2026-05-26

## Corporate structure

- [ ] What is the legal entity behind io.net today?
  → **Not resolved.** The CoinMarketCap "About" text refers to "the
  organization ionet-official" with contact support@io.net. Multicoin's
  announcement and Series A reporting refer to "IO Research" as the
  operating entity. The IDE litepaper names no legal entity. No registered
  office, no Swiss/Cayman/Delaware corporate registry detail is publicly
  visible. **Open — P0.**
- [ ] Where is io.net / IO Research incorporated?
  → **Not resolved.** Multicoin announced the Series A in March 2024 without
  jurisdictional disclosure. Open.
- [ ] What is the legal relationship between IO Research, the IO token (SPL on
  Solana), and any foundation (if any exists)?
  → **Not resolved.** Open.

## Token (IO) classification and economics

- [x] What is IO's basic tokenomic structure (current)?
  → **Resolved.** 800M IO max supply (Solana SPL token); 333.52M circulating
  (~41.69%); inflationary emissions model from launch (April 2024) being
  transitioned to demand-driven IDE model in Q2 2026.
  (coinmarketcap-io.md, io-net-ide-litepaper-pdf.md)
- [x] What was wrong with the original tokenomics?
  → **Resolved.** Company candidly acknowledges: "our initial tokenomics
  system got us off the ground but created misalignment between token supply
  and actual network value." (io-net-ide-tokenomics-launch.md)
- [x] What does the Incentive Dynamic Engine (IDE) do?
  → **Resolved.** Dual-vault (Y₁ Reward / Y₂ Fee) demand-driven model.
  Sustainability ratio ψ = R/H drives token supply expansion or burn.
  ≥50% of post-payout revenue burned in IO. Suppliers receive USD-stable
  payouts. CryptoEcon Lab stress-tested 55% demand drop and 50% token price
  crash. (io-net-ide-litepaper-pdf.md)
- [ ] When does the IDE actually go live, and what is the failure-mode plan
  if Q2 2026 implementation slips?
  → **Partially resolved.** Implementation slated for Q2 2026. No contingency
  publicly disclosed.
- [ ] How does TAO/IO fare under US securities law?
  → **Not resolved.** No outside-counsel opinion is in the public record. The
  Coinbase listing has implicit institutional review behind it, but no SEC
  ruling has been made on IO classification. The IDE's USD-stable supplier
  payouts may strengthen "utility token" framing but the founder allocation
  and any insider lock-up details are not public. **Open — P0.**
- [ ] Are there ongoing token unlocks?
  → **Not resolved.** The Investigations.org report does not address current
  unlock schedules. Open — material because Coinbase / institutional capital
  exposure makes unlock schedule a load-bearing question.

## Team and operating-model risk

- [x] Who founded io.net and who runs it today?
  → **Partially resolved (with critical caveat).** Founders: **Ahmad
  Shadid** (resigned June 2024), **Tory Green**, **Basem Oubah**, **Matej
  Tomazin**. Current CEO per CoinMarketCap: **Tory Green**. Current CEO per
  io.net's own 2025 Year in Review (Singapore keynote): **Gaurav Sharma**.
  This is a **material CEO-name discrepancy** that needs direct verification.
  (coinmarketcap-io.md, io-net-2025-year-in-review.md)
- [x] Are there documented founder-risk issues?
  → **Resolved — major signal.** Investigations.org rates Ahmad Shadid as
  **HIGH RISK (C 63/100)** based on metric-misrepresentation allegations
  across both IO.net and his subsequent O.XYZ venture. IO.net paid Shadid a
  **six-figure severance specifically intended to distance the company from
  him**. Multiple anonymous former employees and at least one investor stated
  they "would never work with Shadid again." Shadid deleted his public
  departure statement from X. (investigations-ahmad-shadid.md,
  decrypt-oxyz-shadid-investigation.md)
- [ ] Has Tory Green (or Gaurav Sharma) been substantively in charge of IO.net
  for 2+ years and what is the post-Shadid operational evidence?
  → **Partially resolved.** The 2025 Year in Review claims 21 strategic
  partnerships, customer case studies (Leonardo.Ai, Wondera, etc.), 138-
  country footprint, and IDE redesign — all consistent with active operational
  management. But the specific dates of Shadid → Green → (Sharma?) transition,
  any retained equity/governance rights for Shadid, and any continued
  influence are not public. **Open.**
- [ ] What is the OTF-equivalent for io.net — is there a foundation or DAO
  separate from IO Research?
  → **Not resolved.** Open.

## Network and operations

- [x] What is the live network scale?
  → **Resolved (with major caveat).** As of Jan 2026 Year in Review:
  **2,752 verified GPUs / 80,000 CPUs / 138+ countries.** Homepage and
  press materials cite "30,000+ GPUs" — likely includes unverified /
  intermittent supply. Investigations.org references "reported inflated GPU
  supply claims during its growth phase" — implying the gap between marketed
  and verified figures is the same pattern historically alleged against
  Shadid. (io-net-2025-year-in-review.md, investigations-ahmad-shadid.md)
- [x] What customers actually use io.net for production?
  → **Resolved (per company case studies).**
  - **Leonardo.Ai**: 14,000 → 19M users; >50% GPU cost savings
  - **Wondera**: $2.48M savings vs AWS; 552,000 GPU hours for 3 AI music models
  - **Frodobots + UC Berkeley RAIL Lab**: 92.8% savings vs AWS H100; 12,696
    GPU hours / 8 GPUs / 66 days; peer-reviewed paper produced
  - **Vistara Labs**: 4,200 apps in 2 months (Zaara AI platform)
  - **KayOS**: $2,500 → $1,000 per-customer compute cost
  These are **company-attributed**; institutional diligence should triangulate
  with the named customers directly. (io-net-2025-year-in-review.md)
- [ ] What independent verification exists for the network-scale figures?
  → **Not resolved.** Open. The DePIN Scan and similar third-party trackers
  publish io.net data but ultimately source it from io.net's own explorer.
- [x] What is the architecture for hardware-providers and verification?
  → **Resolved.** Solana-based settlement. Ray framework for distributed ML.
  Proof-of-Compute on-chain verification. SLAs enforced via staking with
  slashing. Real-time IO buyback from revenue. (io-net-solana-depin-2026.md)
- [ ] Is there an audited Solana smart contract / program for the IO token,
  the bridge, the staking module, the IDE vaults?
  → **Not resolved.** The IDE litepaper references CryptoEcon Lab (CEL)
  third-party economic simulation but **no smart-contract security audits
  are named**. Open — P0.

## Market and price

- [x] What is the current market state?
  → **Resolved.** Price $0.1808 (May 26, 2026); mcap $60.32M; FDV $144.68M;
  24h volume $94.95M (157% of mcap — extreme turnover); 84,870 holders; CMC
  rank #353. **−97.19% from ATH** of $6.44 (June 12, 2024).
  (coinmarketcap-io.md)
- [x] What exchanges list IO?
  → **Resolved.** Coinbase, Binance, Kraken, KuCoin, Bitget, OKX, MEXC, and
  Solana DEXes (Jupiter, Raydium, etc. via SPL).
- [ ] What is the holder concentration?
  → **Not resolved.** CMC reports 84,870 holders but top-10 / top-100
  concentration is not aggregated publicly. **Open.**

## Competitive context

- [x] Who are io.net's direct competitors?
  → **Resolved.** Bittensor (TAO, $3.1B mcap), Gonka (GNK), Akash (AKT,
  $878 in our data), Render (RNDR, $2.34), Aethir, Fluence, Ankr, plus
  centralized challengers like CoreWeave. (Cross-referenced from our
  Bittensor and Gonka memos.)
- [x] How does io.net's GPU scale compare to competitors?
  → **Partially resolved.** Self-reported 30,000+ GPUs (verified 2,752 in Jan
  2026); Bittensor doesn't measure in GPUs directly; Gonka ~11,000 H100-
  equivalent (self-reported via gonkascan); Akash ~varying. Direct
  comparison is difficult because methodologies differ. **Open.**

## Open items summary

P0 (gating) unresolved items:
1. Legal entity and corporate jurisdiction (IO Research / io.net)
2. US securities-law treatment of IO under Coinbase listing post-IDE
3. Current CEO identity reconciliation (Tory Green per CMC vs. Gaurav Sharma
   per Year in Review)
4. Smart-contract security audit of Solana program, bridge, IDE vaults
5. IDE Q2 2026 implementation timeline and contingency plan
6. Substantiation of the "30,000+ GPUs" homepage claim vs 2,752 verified
   figure — historically tied to the "inflated GPU supply" allegations

P1 (important) unresolved items:
7. Token unlock schedule (next 12-24 months)
8. Holder concentration analysis (top-10 / top-100)
9. Multicoin / Hack VC / Solana Labs current portfolio position (still
   invested? marked down?)
10. Continued Shadid equity / governance rights post-resignation
11. Foundation or DAO structure (if any) separate from IO Research
12. Independent verification of customer case-study metrics (Leonardo.Ai,
    Wondera, etc.)
