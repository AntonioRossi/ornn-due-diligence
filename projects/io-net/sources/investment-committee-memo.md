# Investment committee memo — io.net (IO token)

**To:** Investment Committee
**From:** [Analyst]
**Date:** May 26, 2026
**Re:** **io.net (IO) — preliminary IC memo (public-information based)**

### Recommendation

**Pause. Do not authorize phase-two diligence on the IO token, an OTC purchase, or any equity-equivalent exposure to IO Research at this time. Reassess only after (a) the Q2 2026 Incentive Dynamic Engine (IDE) implementation completes and is observable through a full subsequent quarter, and (b) the founder-risk story stabilizes with documented separation between current management and the former Shadid-era protocol.** The public record shows a working Solana-based decentralized GPU cloud with real third-party consumption evidence (Leonardo.Ai, Wondera, Frodobots/UC Berkeley RAIL, Vistara Labs, KayOS — all with disclosed cost-savings metrics), $30M Series A backing from a Tier-1 syndicate (Hack VC, Multicoin, Solana Labs, Aptos Labs, Animoca Brands), 800M-supply Solana SPL token listed on Coinbase, Binance, and other tier-1 venues, and a candidly-acknowledged tokenomics redesign (the IDE) addressing the structural failure of the original inflationary model. **However, six structural issues materially impair the underwrite today**: **(1) the founder, Ahmad Shadid, was forced out as CEO in June 2024 days before the token launch, with a six-figure severance reportedly intended to "distance the company from him"; an independent investigations.org open-source intelligence report rates Shadid as HIGH RISK (C 63/100) for a pattern of metric-misrepresentation that explicitly includes allegations of "reported inflated GPU supply claims" during io.net's growth phase, (2) the token has drawn down ~97% from its $6.44 April 2024 ATH to $0.18 today — among the worst drawdowns in the AI-DePIN sector and consistent with the company's own admission that the original tokenomics "created misalignment between token supply and actual network value", (3) the Incentive Dynamic Engine (IDE) — a structurally sophisticated demand-driven redesign — is acknowledged but not yet implemented; full implementation is slated for Q2 2026 and the investment case depends critically on it arriving on schedule, (4) no legal entity is publicly disclosed (IDE litepaper names no signing entity; CMC refers to "ionet-official"; Multicoin's announcement uses "IO Research" without jurisdiction), (5) the network-scale claim discrepancy — homepage states 30,000+ GPUs; the company's own Jan 2026 Year in Review reports 2,752 verified GPUs — mirrors the historical "inflated GPU supply" allegations, and (6) no comprehensive smart-contract security audits of the Solana program, bridge, staking module, or IDE vaults are in the public record; only third-party economic simulation by CryptoEcon Lab.** Until these are addressed, this firm should not commit capital to IO.

### Company snapshot

io.net is a **decentralized GPU compute marketplace built on Solana** that aggregates underutilized hardware from data centers, miners, and independent suppliers into clusters available for AI/ML workloads. The protocol settles transactions on Solana using **Solana Pay rails**, uses the **Ray framework** (an open-source distributed-computing library developed at UC Berkeley) to orchestrate workloads, and enforces **Proof-of-Compute** on-chain verification with **staking-and-slashing** SLAs [1][2]. The native token is **IO** (Solana SPL: BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K), with **800M total supply** and 333.52M (~41.69%) currently circulating [3].

The protocol's origin is unusual: per the company's own docs, **prior to June 2022, io.net was an institutional-grade quantitative HFT trading systems developer** monitoring 1,000 stocks and 150 cryptocurrencies for 30,000+ clients across ETrade, Alpaca, and Binance. The pivot to DePIN was triggered by the team's own internal GPU pricing pain — NVIDIA A100 at ~$80/day/card, ~$100k/month for their HFT infrastructure [4].

The protocol was founded by **Ahmad Shadid, Tory Green, Basem Oubah, and Matej Tomazin** [3]. Shadid was CEO until **June 2024**, when he resigned **days before the token launch** amid what The Block, Decrypt, Blocmates, and DePIN Scan reported as "allegations surrounding his past and misreported company metrics" [5][6]. IO.net paid Shadid a **six-figure severance reportedly intended specifically to distance the company from him** [5][6]. The current CEO is publicly described as **Tory Green** (per CoinMarketCap) but the company's own 2025 Year in Review references **Gaurav Sharma** as the CEO who delivered the "Decentralize or Die" keynote at Super AI Singapore in June 2025 [3][7]. This **CEO-name discrepancy is unresolved** in the public record and is itself a P0 diligence item.

**Funding**: $30M Series A in March 2024 at a stated $1B token valuation, led by Hack VC and Multicoin Capital, with participation from Solana Labs, Aptos Labs, 6th Man Ventures, Modular Capital, Animoca Brands, OKX, and a syndicate of angels [8][9]. Tracxn reports total funding of ~$40M including a prior seed round [10]. **No legal entity, jurisdiction of incorporation, board, or audited financials are publicly disclosed** [11][6].

**Market state (May 26, 2026)**:

| Metric | Value |
|---|---|
| Price | $0.1808 [3] |
| Market cap | $60.32M [3] |
| FDV | $144.68M [3] |
| 24h volume | $94.95M [3] |
| Vol/Mcap | **157%** (extreme — speculative trading dominates) [3] |
| Circulating / max supply | 333.52M / 800M (41.69%) [3] |
| Holders | 84,870 [3] |
| ATH | $6.44 (June 12, 2024) — **−97.19% from ATH** [3] |
| ATL | $0.09111 (Feb 6, 2026) [3] |
| Listing exchanges | Coinbase, Binance, Kraken, KuCoin, Bitget, OKX, MEXC + Solana DEXes [3] |

### What appears real today

The following items are dated, sourced, and triangulated across the company's own filings and at least one independent reference. They are not "investor-friendly framing"; they are the floor under any subsequent thesis.

- **Working Solana mainnet** running since April 2024 with a continuous upgrade cadence; SPL token live on Coinbase since 2024.
- **Real customer case studies with disclosed savings vs AWS** [7]:
  - **Leonardo.Ai** scaled from 14,000 to 19 million users while cutting GPU costs by **>50% vs tier-1 cloud**.
  - **Wondera** saved **$2.48M** vs AWS using 552,000 GPU hours (64×H100 + 32×H200).
  - **Frodobots × UC Berkeley RAIL Lab** demonstrated **92.8% savings vs AWS H100** across 12,696 GPU hours, producing a peer-reviewed paper.
  - **Vistara Labs** built 4,200 apps in two months on its Zaara AI platform.
  - **KayOS** (two-person startup) cut compute from $2,500 to $1,000 per customer.
- **138+ countries** of supply distribution; **2,752 verified GPUs** and **80,000 CPUs** as of Jan 2026 [7]. (Note: the homepage "30,000+ GPUs" claim is significantly larger and unverified — see Core Risk #5.)
- **io.intelligence** unified API with 15+ open-source models (Llama, DeepSeek) on OpenAI-compatible endpoints, with built-in RAG and multi-modal support [7].
- **Real partnerships in 2025**: 21 named integrations including ai16zdao, Injective, Nexus Labs, Nillion Network, Oasis Protocol, GaiaNet AI, Flock.io, Sahara AI, Walrus Protocol, Vistara Labs, Orbofi, Allora Network mainnet [7].
- **The Incentive Dynamic Engine (IDE)** — a structurally sophisticated dual-vault, USD-stable-supplier-payout, ≥50%-revenue-burn tokenomic redesign — is fully documented in a litepaper that includes third-party economic stress-testing by CryptoEcon Lab (CEL) [11].
- **Tier-1 Series A backing** from Hack VC, Multicoin Capital, Solana Labs, Aptos Labs, 6th Man Ventures, Modular Capital, Animoca Brands, OKX [8][9].
- **Coinbase listing** (April 2024) and continued top-tier CEX presence indicate the asset has cleared institutional listing due diligence at multiple major venues.

### Competitive context

io.net operates in a **crowded but maturing** decentralized AI compute category that this firm has now reviewed across four data points (this memo plus the prior Bittensor, Gonka, and broader competitive landscape memos) [12]:

| Project | Native token | Market cap | Approach | Status (May 2026) |
|---|---|---|---|---|
| **Bittensor** | TAO | $3.1B | Yuma Consensus subnet marketplace | Mature; live since 2023; first halving Dec 2025 |
| **io.net** | IO | $60M | Solana-native GPU aggregation; IDE Q2 2026 | Mid-stage; live since 2024; redesigning tokenomics |
| **Gonka** | GNK | ~$50M (illiquid) | Bitcoin-style PoW; Cosmos SDK | Early-stage; live since Sept 2025; pre-CEX listing |
| **Render Network** | RNDR | ~$1B+ | GPU rendering; expanding to AI | Mature; pivoted to AI inference |
| **Akash** | AKT | ~$220M+ | General decentralized cloud | Mature; broader than AI |
| **Aethir** | ATH | varies | Distributed GPU; gaming + AI focus | Mid-stage |
| **Gensyn** | — | Pre-token | Verifiable compute for training | Pre-mainnet |

io.net's stated differentiation is **architectural**: Solana settlement vs Bittensor's Substrate / Gonka's Cosmos SDK; Ray-framework integration for low-friction ML migration; and aggregation from heterogeneous supply (hyperscaler-grade datacenters down to consumer RTX 4090s). Its **commercial differentiation** is the deepest set of named external customer case studies in the AI-DePIN sector — Leonardo.Ai, Wondera, Frodobots, Vistara Labs, KayOS — with disclosed cost savings vs AWS.

The **principal competitive vulnerabilities** are: (a) **Bittensor's institutional advantage** — Grayscale OTCQX product, pending Spot ETF, $3.1B mcap, ETH-style halving discipline — pulls institutional flows that io.net cannot match at $60M mcap and post-Shadid founder-risk profile; (b) **Render Network and io.net both target GPU coordination**, but Render's longer track record and clearer governance (no Shadid-equivalent overhang) make it the safer GPU-DePIN bet for many allocators; (c) **Gensyn's verifiable-compute primitives**, when mainnet, would address the Proof-of-Compute heuristic-trust foundation io.net relies on.

### Team and operating-model risk

This is the single most consequential section of this memo.

**Ahmad Shadid (former CEO).** Shadid resigned as io.net CEO in June 2024, days before the token launch. The Block reported the resignation as "amid allegations surrounding his past and misreported company metrics" [5]. Decrypt reported that **io.net paid Shadid a six-figure severance "intended to distance the company from him"** [6]. Shadid then deleted his public departure statement from Twitter/X [6]. Investigations.org's structured open-source intelligence review (May 2026) rates Shadid as **HIGH RISK with a composite C 63/100 score**, listing among substantiated concerns: "Shadid's previous venture IO.NET has been under scrutiny over reported inflated GPU supply claims during its growth phase" [13]. The investigation explicitly identifies a "pattern of misrepresentation across two consecutive ventures" — IO.net and Shadid's subsequent venture O.XYZ, where Decrypt's November 2024 investigation documented disputed claims about Cerebras Systems hardware acquisition, SpaceX/Starlink integration, satellite program existence, and the O.XYZ token launch [6][13].

For this memo, three Shadid-era facts are load-bearing:

1. **The six-figure severance to distance the company from Shadid** was paid by IO.net's own legal counsel — which means IO.net's own counsel concluded that the protocol carried founder-risk exposure post-token-launch.
2. **The "reported inflated GPU supply claims" allegation** explicitly applies to the IO.net growth narrative, not just the subsequent O.XYZ venture. The homepage "30,000+ GPUs" claim vs Year-in-Review "2,752 verified GPUs" is consistent with this pattern.
3. **The token launch immediately followed Shadid's resignation** — token launches and CEO departures are inversely correlated in well-governed protocols. The post-launch −97% drawdown is consistent with public-market interpretation of the founder-event.

**Current operational leadership.** The company's 2025 Year in Review references CEO **Gaurav Sharma** delivering the Super AI Singapore keynote [7]. CoinMarketCap lists CEO **Tory Green** [3]. The discrepancy is unresolved. Both individuals have less public profile than Shadid had, and no public board of directors, named General Counsel, or named Chief Compliance Officer is disclosed.

**Underlying VC syndicate.** The Series A backers (Multicoin, Hack VC, Solana Labs, Aptos Labs, 6th Man, Modular, Animoca Brands, OKX, angels) are credible. Multicoin's lead-investor thesis post (March 2024) characterized Shadid as "smart, capable" with "singular focus on democratizing access to compute resources" [9] — written three months before the founder departure. Whether Multicoin still holds its position is not public; that disclosure would materially update the institutional view.

### Core risks (numbered)

**Risk #1 — Founder-history overhang.** Even with Shadid removed, the protocol bears the cleanup cost of his tenure: severance paid to distance the company from him, the deleted Twitter departure statement, the "metric-misrepresentation" allegations carrying over into the public-record characterization of the IO.net growth phase, and the 97% post-launch drawdown that public-market participants associate with the founder event. Current management must prove not only operational competence but a clean break from Shadid-era data and narrative. Institutional capital underwriting requires that proof to be **documented**, not asserted.

**Risk #2 — Tokenomic redesign timing risk.** The Incentive Dynamic Engine (IDE), launched as a litepaper in December 2025 with full implementation slated for Q2 2026, is the structural fix for the original failed model. As of late May 2026, **it is not yet live**. The investment thesis is critically dependent on Q2 2026 implementation arriving on schedule and on actual revenue supporting the burn mechanism (≥50% of post-payout revenue). The litepaper itself acknowledges acknowledged residual risks: supplier detachment from token value (USD-stable payouts insulate suppliers from token-holder volatility), vault drift (reserves can decay even under normal operations), and the explicit statement that the IDE "is not a 'set-and-forget' system" [11]. **Risk-adjusted entry should wait at least one quarter past IDE implementation to observe behavior through a real market cycle.**

**Risk #3 — Network-scale claim integrity.** The homepage claim of "30,000+ GPUs" and "Deploy 10,000 GPU cluster in 10 seconds" sits against the company's own Year in Review figure of **2,752 verified GPUs** as of January 2026. This is approximately an order-of-magnitude gap. Even allowing that the homepage figure includes intermittent / unverified / pending-onboarding supply, the gap pattern-matches to the historical "inflated GPU supply claims" allegation against Shadid-era io.net [13]. Diligence must establish (i) the precise definition of "verified" vs the homepage figure; (ii) whether the verified figure is post-Shadid-restructuring or includes pre-restructuring "active" claims that have since been culled; (iii) the operational definition of "GPU" — does it include consumer RTX 4090s on a 4-8-node cluster basis equivalent to one A100?

**Risk #4 — Audit and corporate-transparency gap.** No comprehensive smart-contract security audit of the Solana program, bridge, staking module, or IDE vaults is publicly disclosed. The IDE litepaper references CryptoEcon Lab (CEL) third-party **economic simulation**, which is not equivalent to a code audit by Trail of Bits, Halborn, OtterSec, or Quantstamp. No legal entity behind IO Research is publicly disclosed. No board, no Articles of Association, no audited financials, no named General Counsel or CCO. For a $60M+ market-cap asset on Coinbase, this is **materially below institutional disclosure norms**.

**Risk #5 — Solana-systemic risk.** io.net's settlement is on Solana. Solana has had multiple historical outages (2021–2023) where transaction processing halted for hours. A Solana outage during a critical inference job would cause SLA failures and slashing events that the IDE cannot cleanly handle. The IDE's behavior under chain-outage scenarios is not addressed in the litepaper. Additionally, io.net's competitive positioning explicitly bets on "Solana DePIN density" — if Solana loses its DePIN-platform-of-choice status, io.net loses optionality.

**Risk #6 — Unit-economics and the supplier-detachment problem.** Under the IDE, suppliers receive USD-stable payouts insulated from $IO token volatility. This solves the supplier-retention problem but **transfers volatility risk fully to token holders**. Combined with the 157% Vol/Mcap turnover indicating speculative trading dominates, the structure means $IO holders bear the asymmetric downside of a sub-economic period (supplier payouts continue via temporary supply expansion) while suppliers bear no downside. Whether this asymmetry survives a real demand downturn is the central untested question.

### Bottom line

io.net is a real product with real customers (Leonardo.Ai, Wondera, Frodobots, Vistara Labs, KayOS) and a credible Series A syndicate (Multicoin, Hack VC, Solana Labs). The Solana-native architecture, the Ray-framework ML integration, and the IDE tokenomic redesign are individually defensible engineering and economic choices. Among the four AI-DePIN tokens this firm has now reviewed (Bittensor, io.net, Gonka, Render-comparable), io.net has the deepest set of named customer references with disclosed savings against AWS.

**But the founder-risk story changes the underwrite class entirely.** No other AI-DePIN token reviewed by this firm has a CEO who was removed days before token launch with a six-figure severance specifically intended to distance the company from him, with subsequent independent investigation explicitly citing "reported inflated GPU supply claims" against the company under his tenure. The 97% drawdown from ATH is the public-market price of that story.

**The conclusion would change if**: (a) the Q2 2026 IDE implementation completes on schedule and runs through at least one full quarter without supply-expansion edge cases; (b) current management (Tory Green / Gaurav Sharma — clarify which) publicly discloses the post-Shadid governance structure, including any retained Shadid equity or governance rights; (c) the verified-GPU figure is reconciled with the headline "30,000+" claim and either the homepage is updated or the verified figure is brought to parity; (d) a comprehensive code audit by a tier-1 firm of the Solana program, IDE vault contracts, and bridge is published; (e) the IO Research legal entity is publicly disclosed with jurisdiction, board, and at least reviewed financial statements; and (f) Multicoin or Hack VC publicly confirms continued investment alignment.

Until then, **io.net is on the watchlist. Capital does not move until the IDE is live and the Shadid-era discount cleanly separates from current management's track record.**

### References

[1] io.net — Solana DePIN architecture blog, io.net/blog/io-net-on-solana-the-place-for-depin-in-2026-and-beyond (Mar 2, 2026). Solana settlement, Ray framework, Proof-of-Compute, staking SLAs, real-time IO buyback.
[2] io.net — Company Origins (docs), io.net/docs/guides/inception (undated). HFT-trading origin, Ray.io adoption, pivot rationale.
[3] CoinMarketCap — io.net (IO), coinmarketcap.com/currencies/io-net (May 26, 2026). $0.1808 / $60.32M mcap / $144.68M FDV / 84,870 holders / ATH $6.44 → −97.19% / Solana SPL: BZLbGTNCSFfoth2GYDtwr7e4imWzpR5jqcUuGEwr646K.
[4] io.net — Company Origins (docs) — institutional HFT trading pre-June 2022.
[5] The Block — "io.net CEO Ahmad Shadid Steps Down From CEO Role Days Before Token Launch" (June 2024). Verified via Investigations.org timeline; corroborated by Binance Square, Blocmates, DePIN Scan.
[6] Decrypt — "AI Crypto Startup O.XYZ Faces Allegations of Misrepresentation and Internal Turmoil: Sources" (Nov 23, 2024). Contains the IO.net six-figure-severance-to-distance-from-Shadid finding; deleted Twitter departure statement; "would never work with Shadid again" employee/investor quotes; the verbatim Shadid Slack message ("created a pool on Uniswap, and tokens went live by mistake").
[7] io.net — 2025 Year in Review, io.net/blog/2025-io-net-year-in-review (Jan 9, 2026). 2,752 verified GPUs / 80,000 CPUs / 138+ countries; customer case studies; CEO Gaurav Sharma keynote at Super AI Singapore June 2025; 21 strategic partnerships.
[8] Reuters — "AI-focused blockchain startup IO Research raises $30 mln in Series A funding round" (Mar 5, 2024). Identifies Hack VC, Solana Labs, OKX as investors; $30M total; corroborates The Block's $1B token valuation framing.
[9] Multicoin Capital — "Building The Internet of GPUs" by Shayon Sengupta (Mar 5, 2024). Lead-investor thesis; Series A composition (Multicoin, Hack VC, 6th Man Ventures, Modular Capital, angels); 57,000 compute hours at publication; Shadid character assessment ("smart, capable individual") written 3 months before resignation.
[10] Tracxn — io.net funding (cited via search; not independently scraped). Reports total ~$40M raised across Seed and Series A.
[11] io.net — Incentive Dynamic Engine (IDE) Litepaper, io.net/documents/ionet_Tokenomics_Litepaper.pdf (Dec 2025, revised). Dual-vault (Y₁ Reward / Y₂ Fee) mechanics; sustainability ratio ψ = R/H; ≥50% post-payout revenue burned in IO; 300M IO emissions pool with 150M burn target; CryptoEcon Lab (CEL) economic stress-test (55% demand drop / 50% token-price crash); acknowledged risks (supplier detachment, vault drift, "not set-and-forget"); Q2 2026 implementation target; no legal entity, no securities disclaimers, no code audit references.
[12] Competitive landscape — derived from this firm's prior Bittensor, Gonka, Ornn, Silicon Data, and Auctionomics IC memos plus independent third-party comparisons.
[13] Investigations.org — "Ahmad Shadid: IO.NET Metrics Dispute & Fraud Allegations" (published May 1, 2026; last updated May 26, 2026). Composite risk score C 63/100; HIGH RISK rating across Governance, Reputational, Financial categories; ELEVATED on Regulatory; cites verbatim: "Shadid's previous venture IO.NET has been under scrutiny over reported inflated GPU supply claims during its growth phase."
