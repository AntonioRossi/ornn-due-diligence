# Investment Committee Memo — Kaspa (KAS) + Igra Network (IGRA)

Date: 2026-05-27
Audience: Professional investors / institutional allocators
Recommendation: **Authorize gated phase-two diligence.** Kaspa is the most architecturally and legally clean PoW-L1 + EVM-rollup pair in the current cohort: fair launch with formal IP-rights waiver [9][10], a near-term protocol catalyst (Toccata hard fork, June 5–20 2026) authored by a named core developer [3], and the only L2 in this cohort with both a named Swiss legal entity and a Tier 1 smart-contract audit ("Sigma Prime, the firm behind Ethereum's Lighthouse consensus client") completed clean [4][5][17]. Risks concentrate in the absence of a Kaspa L1 legal counterparty [13], bridge counterparty exposure on Igra L1↔L2 [12], thin Tier 1 exchange liquidity [14], and an 84% drawdown from August 2024 ATH that has not retested in the post-Crescendo cycle [8].

---

## 1. Why this matters now

Kaspa is approaching three discrete catalysts within an eight-week window:

- **Toccata hard fork** — mainnet activation expected June 5–20, 2026 [3][6][7]. Activates Silverscript covenants, Groth16/RISC Zero STARK zk verifiers (KIP-16), covenant IDs (KIP-20), and the partitioned sequencing commitment scheme (KIP-21) that locks the cryptographic structure zk-rollups will bind to [3].
- **95% mined milestone** — by **July 10, 2026**, ~95% of the 28.7 billion KAS hard cap will have been mined under the chromatic emission schedule [2]. Daily new supply collapses thereafter.
- **Igra Network public mainnet** — already live since March 19, 2026, with 730,000+ testnet transactions across 21 million blocks at zero state divergence, 15 launch protocols, $5M+ ecosystem TVL, and Sigma Prime audit clean [17][5].

The combined posture is a programmability-and-zk catalyst on the L1 stacked against an L2 already in production. For an allocator with PoW-aligned conviction, this is a structurally rare combination.

## 2. Differentiation vs the cohort

- **Fair launch, structurally**: every KAS was mined under PoW from an empty genesis [1]. DAGLabs (the original $8M Polychain + Accomplice-funded research vehicle) **repaid Polychain via initially-mined KAS and both parties formally waived all Kaspa IP rights** [9][10]. There is no surviving cap table on the L1 — closer to Bitcoin tokenomics than to any AI-DePIN or PoS L1 in the cohort.
- **Cumulative throughput delivery**: Crescendo hard fork (May 5, 2025) lifted block rate from 1 BPS to 10 BPS; cumulative network transactions surpassed 600 million with a 158M single-day peak (Oct 5, 2025) [7][8].
- **Tier 1 audit credential via Igra**: Sigma Prime's audit is the same firm responsible for Ethereum's Lighthouse consensus client [5][17]. No other AI-DePIN project in the current cohort has surfaced this level of audit firm.
- **Swiss-anchored L2**: Igra Association registered in Zug, Switzerland [11][17] — "Legal entity for accountability, no single operator to subpoena" [4]. Igra Labs core team is publicly named and includes three ex-DAGLabs engineers (Mashkevich, Zak, Melnikov) who contributed to shipping Kaspa's original mainnet [16].

## 3. Traction & ecosystem density

- 500,000+ active Kaspa addresses; market cap $899.5M (rank 62 on CMC) [8][17].
- KRC-20 launch day single-day volume $486M, yet pre-Igra DeFi TVL was sub-$1M — the gap Igra is closing [17].
- Igra ecosystem includes 20+ protocols across DEXs (Zealous Swap, Aporia CLOB, Kaspa.com), lending (Kaskad, Kyo, Fervent Finance), wallets (Kasperia, Kastle, Kasware, Zelcore, Tangem), launchpads (Moonbound, ZAP), oracles (Quex/TEE), cross-chain (Hyperlane: USDC, USDT, USDS, sUSDS, cbBTC, wstETH, WETH, SOL, iKAS across 7 EVM chains + Solana), and NFT (Spectre Market) [4][6][18].
- Public IGRA token auction (ZealousSwap ZAP, Mar 28 – Apr 3 2026): cleared 0.1652 iKAS, 528 unique bidders, 49.36M tokens sold — broad participation, no whale concentration disclosed [6][11].

## 4. Tokenomics

- KAS: 28.7B hard cap, fair-launched, chromatic emission schedule [2]. 95% mined by July 10, 2026 [2][7]. Circulating supply 27.46B / max 28.7B (95.69%) [8].
- IGRA: 18% team (1.8% TGE + 6-mo lockup + 36-mo vest), 22% ecosystem + grants (60-mo vest), 10% early sale (6-mo lockup + 18-mo vest), 25% community (60-mo vest), 5% public sale (12-mo vest), 20% association (24-mo vest). **TGE float ~10%** [11]. No undisclosed VC tranche.
- KAS price -84% from Aug 2024 ATH ($0.2075 → $0.03275); never retested ATH in post-Crescendo cycle [8].

## 5. Risk profile

### 5.1 Legal / counterparty (P0)

- **Kaspa L1 has no central legal entity**. DAGLabs dissolved at Kaspa's 2021 fair launch [9][10]. "Kaspa remains an open-source, permissionless project with no central governance or business model" [8]. For institutional onboarding: no entity to invoice, no DPA to sign, no roadmap accountability beyond core developer goodwill. Two parallel foundations (KEF + Kaspa Industrial Initiative Foundation Kii) exist but jurisdiction and financials are not publicly disclosed [13].
- **Igra Association is named but lightly disclosed**: Swiss-registered, governance via Igra DAO, but signer rosters, audited treasury, and Association articles are not on the public site [4][11].

### 5.2 Bridge & smart-contract (P0)

- Igra Litepaper explicitly states community bridging worst case = full theft of locked assets if multisig is breached [12]. Three-tier bridging plan (community → MPC via FROST → ZK) but only the first stage is live at mainnet.
- Sigma Prime audit covered "Igra Core Smart Contracts" v2.1 with no unresolved issues [5][17] — scope is smart-contract layer, not the full protocol/node stack.

### 5.3 Execution / governance (P1)

- Toccata mainnet date is "expected June 5–20, 2026" but **not hardcoded** as of report date [3]. Activation contingent on TN10 rehearsal completion.
- Core developers (Sutton, Newman, Moog, Safstrom) appear unfunded by any formal entity — sustainability question.
- Kraken KAS listing status is contradictory across sources (community: Nov 2024; Bitget Academy: March 2026 reports "Not Listed") [14]. Verify directly.

### 5.4 Market / liquidity (P1)

- KAS daily volume ~$12M is thin for institutional position sizing [8].
- Binance and Coinbase have not listed KAS as of March 2026; no public timeline [14].
- 84% drawdown from ATH suggests structural overhang that has not cleared [8].
- Bear thesis (CrowdFund Insider, May 2026): "Bitcoin's first-mover advantage and network effects will prevail" — Decred, Bitcoin Cash, Nano cited as PoW-alternative precedents that failed to gain durable adoption [15].

## 6. Recommendation

**Authorize gated phase-two diligence**, scoped to:

1. Sigma Prime audit close-out review (scope, severity, remediation)
2. Kaspa Ecosystem Foundation legal/financial disclosure
3. Igra Association articles, treasury controls, and DAO transition plan
4. Toccata mainnet activation confirmation (target window June 5–20, 2026)
5. Tier 1 exchange engagement (Coinbase, Binance, confirm Kraken)
6. Bridge security mode currently active on Igra mainnet

Size capital around two milestones: **Toccata activation** (June 2026) and **95% mined supply** (July 10, 2026). Both are dated and externally verifiable. Phase-two diligence should complete inside that window so position sizing decisions are post-Toccata, post-supply-cliff.

---

## References

[1] Kaspa Homepage, kaspa.org — fair-launch / genesis proof.
[2] Kaspa Tokenomics Wiki, wiki.kaspa.org/en/tokenomics — 28.7B cap, chromatic emission, 95% Jul 10 2026.
[3] Michael Sutton, "Kaspa Covenants++ 'Toccata' Hard-Fork Outlook" (Medium, Apr 2 2026).
[4] Igra Labs Homepage, igralabs.com — Swiss-governed, Sigma Prime audit, naval roadmap.
[5] Sigma Prime Igra Core Smart Contracts Audit, github.com/sigp/public-audits.
[6] Kasmedia, "The Weekly Knight: Toccatta Forks and Pie" (Apr 11 2026).
[7] Our Crypto Talk, "Kaspa Roadmap 2026-2027" (Apr 24 2026).
[8] CoinMarketCap, Kaspa (KAS) market page (2026-05-27).
[9] ByteTree Token Takeaway, "Beyond Bitcoin: Kaspa's Ascent" (Aug 2024) — IP-rights waiver.
[10] Kaspa Wiki / DAGLabs page, wiki.kaspa.org/daglabs — $8M Polychain funding, repaid.
[11] Igra Labs IGRA Token, igralabs.com/igra-token — distribution + Swiss Association.
[12] Igra Litepaper v1.0, github.com/IgraLabs/research — based-rollup architecture, three-tier bridging.
[13] Kaspa Ecosystem Foundation, kaspafoundation.org — KEF mission and grants.
[14] Bitget Academy, "Is Kaspa on Binance?" (Mar 17 2026) — exchange listing status.
[15] CrowdFund Insider, "Kaspa's Hype Is Unjustified" (May 4 2026) — bearish institutional view.
[16] Igra Labs Team, igralabs.com/team — named core team with ex-DAGLabs lineage.
[17] Chainwire / TradingView / CryptoBriefing, "Igra Network Launches Public Mainnet" (Mar 19 2026).
[18] Igra Fleet Ecosystem, igralabs.com/ecosystem — 20+ ecosystem participants.
