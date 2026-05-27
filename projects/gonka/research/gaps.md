# Gonka — Research Gap Tracker

Updated: 2026-05-26

This file tracks open and resolved diligence questions. Each gap notes which
`research/web/` file resolved it, or why it remains open. The IC memo cites
only resolved evidence; unresolved items shape the diligence request list.

## Corporate structure

- [x] What entities are involved?
  → **Resolved.** **Product Science Inc.** (US software company; Los Angeles)
  incubated the Gonka network. **Gonka AI** (network) is positioned as a
  community-governed L1 blockchain after launch. Founders are the **Liberman
  siblings: Anna, David, Daniil, Maria** — David is CTO of Product Science Inc.
  and co-creator of the Gonka protocol. (businesswire-bitfury-50m.md,
  dealroom-gonka-ai.md, libermans-co-forbes-repost.md)

- [x] Where is Gonka headquartered / incorporated?
  → **Partially resolved.** Per Dealroom, HQ is **Los Angeles, US**. Product
  Science Inc. is the US-based incubating entity. Whether a separate "Gonka"
  legal entity exists (e.g. a foundation or DAO LLC) is **not publicly
  disclosed** — Bitfury's press release explicitly states "no foundation or
  similar entity was established to gatekeep [the network's] evolution." This
  raises a question about who **holds IP**, **signs partner contracts**, and
  **receives the $50M Bitfury investment proceeds** in cash terms.

- [ ] What is the legal mechanism by which Bitfury's $50M investment was
  routed? Was it (a) a token purchase, (b) equity in Product Science Inc.,
  (c) ecosystem grant, or (d) all of the above?
  → **Partially resolved.** Of the $50M, **$12M is identified as a community
  pool token purchase** approved by on-chain governance (CertiK milestone Nov
  26-27 = $12M Strategic Round). The remaining **~$38M** is not publicly broken
  down. **Open.**

## Token (GNK) classification and economics

- [x] What is the GNK supply schedule and allocation?
  → **Resolved.** 1B total fixed supply: 680M Hosts core incentive (Bitcoin-
  style epoch reward, halving ~4 years), 120M community pool (Host-governed),
  200M founders' allocation. Initial epoch reward 323k GNK; decay -0.000475 per
  epoch. (gonka-tokenomics-pdf.md)

- [x] Are GNK rewards purely PoW block rewards, or do they include staking-like
  features?
  → **Resolved (hybrid model).** GNK rewards are a hybrid: (1) **Epoch-minted
  Reward Coins** distributed by PoC weight (PoW-like); (2) **Work Coins** paid
  by Developers for actual inference (service-fee-like); (3) **Utilization
  bonuses** and **model-coverage incentives** (discretionary). Additionally,
  **collateral-backed influence** requires GNK locking for full governance
  weight (PoS-like). (gonka-tokenomics-pdf.md, gonka-architecture.md)

- [ ] How does Gonka's hybrid PoC + collateral model fit within the SEC Staff
  Statement on PoW Mining (Mar 20, 2025)?
  → **Partially resolved.** The Staff Statement covers "Covered Crypto Assets"
  earned for participating in consensus on public, permissionless networks.
  Gonka's **Reward Coins** likely qualify; **Work Coins**, **collateral
  locking**, and the **120M community pool sale mechanism (USDT/ETH/BTC →
  GNK)** are not cleanly covered. The Founders' Allocation (200M GNK to
  Libermans) is a pre-mined grant outside any mining safe harbor. **Open;
  qualified legal opinion required.** (sec-pow-mining-statement-2025.md)

- [ ] Outside the US (MiCA / FCA / Asian regimes), how is GNK classified?
  → **Not resolved.** Gonka's tokenomics PDF acknowledges this is
  jurisdiction-by-jurisdiction. No FATF, MiCA, or specific national
  classifications are disclosed. **Open.**

- [ ] What is the actual GNK market price discovery? CoinMarketCap shows
  $0.2598 / 0% 24h change / $0 volume — the price is technically stale.
  → **Partially resolved.** The CMC price likely reflects the **Community Pool
  programmatic sale mechanism** (preprogrammed USDT-to-GNK conversion) rather
  than CEX/DEX liquidity. The "all-time high $2.61" suggests a brief liquidity
  event in mid-Jan 2026, possibly tied to a specific bounty or partnership.
  CertiK noted a $14k volume spike on May 21, 2026. **Open — needs direct
  on-chain inspection of the community pool sale flows.**
  (coinmarketcap-gnk.md, certik-skynet-gonka.md)

## Funding and backers

- [x] What is the total publicly disclosed Gonka-direct funding?
  → **Resolved (with caveats).** **$62M total**, 2 rounds, both led by Bitfury:
  $12M Strategic (Nov 26-27, 2025) + $50M (Dec 2, 2025; includes the $12M).
  Note: Bitfury's $50M announcement is **inclusive** of the Nov $12M tranche
  per CertiK and Dealroom — the press release framing "$50M commitment"
  encompasses the prior $12M Strategic Round. Total net new = closer to $50M.
  Some community sources (joingonka.ai) claim "$80M+" but this likely
  conflates Product Science's prior 2023 $18M raise (from Coatue / Slow
  Ventures) with Gonka-direct funding. (messari-gonka.md, certik-skynet-gonka.md,
  dealroom-gonka-ai.md)

- [x] Who else is supporting Gonka aside from Bitfury?
  → **Partially resolved.** Confirmed institutional backers of Gonka-direct:
  **Bitfury** (lead, both rounds). Confirmed institutional backers of Product
  Science (Gonka's incubator): **Coatue Management, Slow Ventures, K5**. Bitget
  and PANews framing references "**OpenAI investor Coatue, Solana investor
  Slow Ventures, and others**" as supporting Gonka — this language is
  ambiguous; Coatue/Slow appear to be Product-Science-level investors, not
  Gonka-network-direct. **No other VC names confirmed at the Gonka-network
  level.**

- [ ] Is there a token-warrant or SAFT-equivalent structure between Bitfury
  and Product Science / Gonka governance?
  → **Not resolved.** Open. Important for understanding Bitfury's economic
  exposure beyond direct GNK purchases.

## Team and operating-model risk

- [x] Who are the Liberman siblings' prior business histories?
  → **Resolved (high level).** Brothers David and Daniil are serial founders.
  Prior ventures: **Kernel AR (acquired by Snap Inc. for $60M, ~2018)**,
  **Frank Money**, **Product Science Inc.** (current). Both were Directors of
  Product at Snap Inc. post-acquisition. Anna and Maria Liberman are also
  founders per the BusinessWire release but no detailed bios are public.
  (panews-libermans-interview.md, dealroom-gonka-ai.md)

- [ ] How large is the Gonka core team vs. Product Science?
  → **Partially resolved.** Dealroom shows **11–50 employees** for Gonka AI
  (Product Science scale not separately disclosed). No org chart or named
  control-function leadership (legal, finance, compliance, security) is
  public.

- [ ] Are there any control-function hires (general counsel, compliance,
  finance, risk)?
  → **Not resolved.** No public information.

- [ ] What is the Liberman siblings' ownership / control of GNK supply?
  → **Partially resolved.** 200M GNK (20%) is the "founders' allocation" per
  the tokenomics PDF; no vesting schedule or distribution mechanism for the
  founders' tranche is publicly specified. **Open — material concentration
  risk.**

## Network technology and operations

- [x] What consensus mechanism does Gonka use today?
  → **Resolved (with caveat).** Whitepaper describes "Proof of Compute" with
  Sprint epochs (17,280 blocks ≈ 24h). However, CertiK's milestone timeline
  shows the network upgraded to **"Proof of Contribution v2" on Feb 1, 2026
  (v0.2.9 mainnet upgrade)**. The relationship between the original whitepaper
  "Proof of Compute" and the live "Proof of Contribution v2" is **not
  explicitly documented in public sources**. (certik-skynet-gonka.md,
  gonka-architecture.md)

- [x] Has the code been independently audited?
  → **Resolved.** CertiK audited 3 modules (Ethereum Bridge, Inference,
  Consensus) over Jan-May 2026. Findings: 58 total, 0 Critical, 4 Major (all
  resolved), 10 Medium (all resolved), 30 Minor (all resolved), 13
  Informational (5 acknowledged + 8 resolved), **1 Centralization (Privilege)
  Acknowledged but unresolved**. CertiK Skynet Score 84.17/A. (certik-skynet-gonka.md)

- [x] What hardware can participate?
  → **Resolved.** NVIDIA-only (no AMD/Intel support), 40 GB VRAM floor per
  MLNode container. Eligible: H200, H100, A100, RTX 6000 Ada, RTX A6000, L40,
  A40, plus paired RTX 4090/3090/L4. (gonka-hardware-specs.md)

- [x] Which AI models run on the network?
  → **Resolved.** 9 governance-approved models: DeepSeek-R1, DeepSeek-V3,
  Gemma-3-27B, gpt-oss-120b, Kimi-k2.6, Llama-3.1-70B, Llama-3.1-405B,
  Qwen3-32B, Qwen3-235B. All third-party open-weight; no first-party Gonka
  model. (gonka-model-licenses.md)

- [ ] Has Gonka deployed any on-chain governance vote outcomes beyond
  Bitfury's $12M community-pool purchase? What is voter turnout / concentration?
  → **Not resolved.** Open. Important for assessing decentralization claims.

## Traction and customer claims

- [x] What is the live network compute scale?
  → **Resolved (self-reported / explorer-reported).** Trajectory:
  - Nov 19, 2025: 5,000 H100-eq (CertiK)
  - Dec 2, 2025: ~6,000 H100-eq (BusinessWire / Kikvadze)
  - Dec 17, 2025: 10,729 H100-eq (PANews / Bitget via gonkascan.com)
  - May 2026 ("currently"): ~11,000 H100-eq (CoinMarketCap "About" text)
  All figures **self-attributed via gonkascan.com**; no independent third-party
  verification.

- [x] How many AI tokens does the network process per day?
  → **Resolved (self-reported).** ~100M tokens/day total across 5 (now 9)
  models as of Dec 17, 2025; Qwen3-235B-Instruct alone ~30M tokens/day.
  (bitget-panews-10000-h100.md)

- [x] How many developers / nodes / community members?
  → **Resolved (self-reported, Dec 2 2025 baseline).** 448+ hosts/validators
  (Kikvadze) → 600+ active nodes from 30+ countries (Bitget Dec 17); ~2,200
  developers; ~2,000 daily users; 15.4k Discord (CertiK May 2026); 17.6k X
  followers.

- [ ] Are there named institutional customer references besides the founders'
  general claims about Gcore / Hyperfusion / Walmart / JPMorgan Chase / Airbnb
  (the latter three are Product Science customers, not Gonka customers)?
  → **Not resolved.** No named Gonka-network enterprise customers with
  disclosed usage figures. The 2,200-developer count is unattributed.
  **Open.**

- [ ] What does "active node" mean operationally — uptime threshold, work
  threshold? What is churn?
  → **Not resolved.** Open. Required to underwrite the compute-scale claim.

## Competitive and market positioning

- [x] What is the decentralized AI compute competitive set?
  → **Resolved (high level).** Bittensor (TAO), io.net, Akash, Render, Aethir,
  Gensyn, plus several smaller. Bittensor is the closest narrative comparable
  (AI-protocol-layer + native token). (search-competitive-landscape.md)

- [ ] How does Gonka's ~11k-H100-equivalent compute scale compare against
  Bittensor's actual subnet compute, io.net's GPU pool, Akash's GPU listings,
  etc., on a like-for-like basis?
  → **Not resolved.** Founders claim "Bittensor only has ~5,000 data
  center-grade GPUs"; this is unverified and likely cherry-picked. **Open.**

- [ ] What is Gonka's COGS-to-revenue picture? Are Hosts profitable net of
  electricity and hardware amortization at current GNK price ($0.26)?
  → **Not resolved.** Kikvadze claims "cost to mine a GNK token: approximately
  $1" (vs. current market $0.26). If true, miners are operating at a loss
  in fiat terms. This is structurally consistent with PoW early phase
  (Bitcoin's early years showed similar dynamics) but is **material to
  network sustainability**. **Open.**

## Risk and disclaimers

- [x] What risks does Gonka itself acknowledge?
  → **Resolved.** Tokenomics PDF lists: (1) Market volatility, (2) Regulatory
  uncertainty (explicit US securities disclaimer), (3) Technological/market
  competition. Tax obligations flagged as participant responsibility.
  (gonka-tokenomics-pdf.md)

- [ ] Has Gonka or Product Science been the subject of any litigation,
  enforcement actions, or regulatory inquiries?
  → **Not resolved.** No public information; this is a standard P0 diligence
  request.

- [ ] What is Gonka's IP / patent posture?
  → **Not resolved.** Protocol license document is linked but not yet fetched
  (gonka.ai/protocol-license.pdf). Open.

## Open items summary

P0 (gating) unresolved items:
1. Legal entity map and Bitfury investment routing
2. Full SEC + non-US regulatory positioning (legal opinion required)
3. Founders' Allocation (200M GNK) vesting/distribution
4. Named institutional customer references with disclosed usage
5. Control-function hires (GC, compliance, finance, security)
6. Litigation / enforcement history

P1 (important) unresolved items:
7. Token-warrant / SAFT structure between Bitfury and Product Science / Gonka
8. Operational definitions for traction metrics (active node, daily user)
9. Independent verification of Bittensor comparison
10. Host unit economics at current GNK price
11. Governance voter turnout and concentration
12. Protocol-license / IP terms
