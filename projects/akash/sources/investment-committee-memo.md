# Investment committee memo — Akash Network / Overclock Labs (AKT token)

**To:** Investment Committee
**From:** [Analyst]
**Date:** May 26, 2026
**Re:** **Akash Network (AKT) — preliminary IC memo (public-information based)**

### Recommendation

**Authorize gated phase-two diligence. Of the AI-DePIN tokens this firm has now reviewed (Bittensor, Gonka, io.net, Akash), Akash presents the strongest credibility-adjusted profile: longest operating history (mainnet since September 2020), most credible founder (Greg Osuri — 25-year open-source veteran with IBM/Kaiser Permanente background, AngelHack track record, congressional testimony, working alliance with Erik Voorhees), three consecutive quarters of Grayscale "Top 20 Asset" designation in 2025, deepest set of named production customers (ElizaOS/ai16z, Venice.ai, Envision Labs, Codex Storage, Morpheus Compute Network), demonstrated tokenomic accountability (Burn-Mint Equilibrium live March 23, 2026), Q1 2026 $5M compute spend ATH crossed, AkashML on OpenRouter processing 1.7B tokens/day outpacing Cloudflare, and 75.7% of max supply already circulating (less remaining dilution than IO at 41.69% or GNK at <30%).** However, six structural issues require resolution before committing capital: **(1) the AEP-79 Shared Security Migration off Cosmos SDK to Solana (or alternative) targeted for December 30, 2026 is the largest architectural pivot in the network's history and carries execution risk on both ends — Cosmos liquidity drainage and destination-chain integration; (2) the Starbonds SEC-regulated $75M bond program for ~7,200 NVIDIA GB200 GPUs subjects Akash to ongoing SEC oversight in ways that differentiate it from pure DAO tokens and creates new regulatory exposure; (3) Overclock Labs's corporate structure (jurisdiction, board, employee count, audited financials) is not publicly disclosed despite Akash being a $257M-mcap project listed on multiple exchanges with five years of mainnet operation; (4) the company's own token page does not highlight Coinbase/Binance/Kraken listings — possible US institutional listing gap relative to Bittensor TAO and io.net IO; (5) the −89% drawdown from April 2021 ATH means AKT has failed to retest its prior cycle high during the AI/DePIN narrative — bullish framing is "room to run if narrative re-engages"; bearish is "missed the cycle"; (6) no comprehensive third-party smart-contract security audit history is in the public record reviewed.** All six are diligenceable; none are gating in the way io.net's Shadid founder-risk overhang or Gonka's anonymous-whitepaper opacity were.

### Company snapshot

Akash Network is a **decentralized cloud computing marketplace** built and maintained by **Overclock Labs**, founded June 2015 by Greg Osuri (CEO), Adam Bozanich, and Boz Menzalji [1]. The network launched mainnet in September 2020 on Cosmos SDK as a peer-to-peer compute marketplace. Providers compete via reverse-auction to host developer workloads defined in YAML (Stack Definition Language, "SDL"). Lease settlement occurs on-chain; pricing typically settles 70-85% below AWS/Azure/GCP for equivalent workloads [2][3].

The native token **AKT** has three stated utilities: (a) PoS staking and chain security, (b) on-chain governance (community-owned), and (c) value-exchange / liquidity. **ACT (Akash Compute Token)** is a non-transferable USD-pegged credit minted by burning AKT (or via credit card in Akash Console); compute payments and provider settlements run in ACT, isolating users from AKT price volatility while creating constant AKT demand-pressure via the **Burn-Mint Equilibrium (BME)** mechanism activated March 23, 2026 [3][4].

**Market state (May 26, 2026)** [5]:

| Metric | Value |
|---|---|
| Price | $0.8745 |
| Market cap | **$257.26M** |
| FDV | $339.80M |
| 24h volume | $20.6M |
| Circulating / max supply | 294.15M / 388.53M (**75.7%**) |
| CMC rank | #127 |
| CertiK rating | 4.2 |
| ATH | $8.08 (April 6, 2021) → **−89.18% from ATH** |
| ATL | $0.1672 (Nov 21, 2022) → +422.95% from ATL |

The 2026 YTD performance is **approximately +72%** per Phemex (from ~$0.45 → $0.78 in early May) [1], coinciding with BME activation. Across the AI-DePIN cohort this firm has reviewed, AKT's drawdown profile is the most measured (TAO −63%, AKT −89%, IO −97%, GNK −90% from respective ATHs); the **−89% drawdown reflects a 2021-cycle ATH that pre-dates the AI/DePIN narrative**, which is a different structural story than IO's or GNK's launch-then-collapse profile.

### What appears real today

These are dated, sourced, triangulated facts. They are not investor-friendly framing; they are the floor.

- **Continuous mainnet operation since September 2020** (5.5+ years), executing major upgrades on a regular cadence: Mainnet 14 (October 28, 2025) "eliminated eight years of technical debt in a single coordinated upgrade" [3].
- **Grayscale Research designated AKT a "Top 20 Asset with High Potential" for three consecutive quarters in 2025** [3] — the only AI-DePIN token (alongside TAO via the Grayscale Bittensor Trust on OTCQX) to receive this level of institutional research recognition.
- **Real customer adoption** [3]:
  - **ElizaOS / ai16z** — default inference for the ai16z agent ecosystem
  - **Envision Labs** — dozens of A100/H100 GPUs for generative AI clients (scales up and down with customer demand)
  - **Venice.ai** (Erik Voorhees) — privacy-focused uncensored AI; routes inference through Akash
  - **EaveAI** — X Spaces transcription via OpenAI Whisper instances on Akash
  - **Codex Storage**, **Akave Network**, **Morpheus Compute Network** — Web3 infrastructure customers
  - **Akash MCP Server** — Anthropic Model Context Protocol integration (April 2025) — Akash is one of the first DePIN networks to support MCP
- **Q1 2026 inflection metrics** [4]:
  - Total compute spend ATH crossed at **$5M**
  - **BME (Burn-Mint Equilibrium)** went testnet → mainnet on **March 23, 2026** via Proposal 318
  - **Akash Homenode** beta launched (consumer GPU supply via RTX 4090, 5090, Quadro 6000 Ada)
  - **AkashML on OpenRouter: 1.7 billion tokens/day, outpacing Cloudflare**
- **2025 growth vs 2024** [3]:
  - Total USD spent: $1.38M → $3.15M (+128%)
  - Deployments created: 553K → 3.14M (+466%)
  - Active deployments (EOY): 4,294 → 1,330 (−69%) — workload shift to short-duration agent inference
- **Greg Osuri's public regulatory engagement** [3][1]:
  - **May 21, 2025**: Testified before US House Financial Services Committee on cloud infrastructure and decentralization
  - Helped pass California AB 2658 (first state blockchain law) via expert witness testimony at the State Senate
  - Regular speaker at Token2049, Consensus, Permissionless, NVIDIA GTC, NeurIPS, ETH Denver
- **Working alliance with Erik Voorhees / Venice.ai** [1] — joint Akash Accelerate 2024 session "The Power of Permissionless"; Voorhees is one of the highest-credibility cypherpunks in crypto and his architectural endorsement of Akash as inference layer is a structural validation.
- **Coinbase / Erik Voorhees-grade community credibility**: AKT has the cleanest founder-and-community-credibility profile in the AI-DePIN cohort.
- **AkashML** (November 2025) [3]: serverless inference layer offering Llama 3.3-70B, DeepSeek V3, Qwen 2.5-30B, QwQ-32B reasoning model, and Llama 3.3 Neomotron at **$2-4 per million tokens vs OpenAI's $15/million for GPT-4** — a measurable 70-85% cost gap.
- **NVIDIA Blackwell B200/B300 support live** [1] — Akash is one of the first decentralized networks to integrate Blackwell-class GPUs, offering a "second source" against hyperscaler allocation lock-up.

### Competitive context

Across the four AI-DePIN tokens this firm has reviewed, the **competitive set** is meaningfully differentiated:

| Project | Market cap (May 2026) | Drawdown from ATH | Mainnet history | Strongest signal | Critical weakness |
|---|---|---|---|---|---|
| **Bittensor (TAO)** | $3.1B | −63% | March 2023 | Grayscale Spot ETF pending | Validator concentration; subjective scoring gameable |
| **Akash (AKT)** | $257M | −89% (April 2021 ATH) | Sept 2020 | Grayscale Top-20; Osuri congressional testimony; Voorhees alliance | Cosmos-to-Solana migration risk |
| **io.net (IO)** | $60M | −97% | April 2024 | Strong customer references (Leonardo.Ai, Wondera) | Founder Shadid HIGH RISK / six-figure severance |
| **Gonka (GNK)** | ~$50M (illiquid) | −90% | Sept 2025 | Recent Bitfury $50M; CertiK A-rating | Founder anonymity; no entity disclosed; $0 24h volume |

Among these four:

- **Akash has the strongest founder profile** (Osuri vs Shadid vs anonymous Liberman/whitepaper authors).
- **Akash has the longest mainnet track record** (5.5 years vs 3 years for TAO, 2 years for IO, < 1 year for GNK).
- **Akash has the most credible institutional recognition** (Grayscale Top 20 + Osuri congressional testimony).
- **Akash has the cleanest customer reference list** combining Web2 brands (Envision Labs, Wondera adjacency) and Web3 ecosystem (ai16z, Venice.ai, Morpheus, Codex, Akave).
- **Akash has the smallest market cap relative to network operational maturity** — at $257M, it is materially smaller than TAO ($3.1B) despite arguably stronger commercial substantiation.
- **Akash carries the migration risk** that none of the others face — moving an entire L1 chain in 8 months is unprecedented in production-DePIN scale.

The principal **competitive vulnerabilities** are: (a) **Bittensor's institutional advantage** (Grayscale OTCQX, pending Spot ETF) pulls institutional flows that Akash cannot match at $257M-mcap without its own ETF product; (b) **io.net's customer references and Solana-native integration** are direct overlaps if io.net's IDE Q2 2026 implementation succeeds; (c) **Gensyn's verifiable-compute proofs** (when mainnet) would address the heuristic-trust foundation that bidding-marketplace models like Akash rely on; (d) **hyperscaler price compression** — AWS/Azure/GCP are aggressively cutting GPU prices to defend share, which compresses the "85% cheaper" gap over time.

### Team and operating-model risk

**Greg Osuri (CEO/co-founder)** [1][3]:
- 25-year open-source / cloud architecture veteran
- IBM consultant 2006 (Verizon, Sprint, JP Morgan, Blue Cross Blue Shield)
- Designed Kaiser Permanente's first cloud architecture (2008) — one of the earliest production cloud deployments at a US healthcare provider
- Founded AngelHack (2011) — grew to 200,000+ developers in 164 cities
- Founded Overclock Labs (June 2015)
- Testified before US House Financial Services Committee (May 21, 2025)
- California State Senate expert witness for AB 2658 (first state blockchain law)
- Working alliance with Erik Voorhees (Venice.ai)
- "Cypherpunk in the AI compute conversation" — the public anchor of the decentralized cloud thesis

This is the **strongest founder profile in the AI-DePIN sector** this firm has reviewed. He is the structural opposite of io.net's Ahmad Shadid story.

**Operating-model gaps** that should be diligenced:
- **Overclock Labs jurisdiction and corporate structure** are not publicly disclosed (employee count, board, audited financials, Swiss/US/Cayman incorporation).
- **No named General Counsel / Chief Compliance Officer / Head of Security** in the public record.
- **Greg Osuri / Overclock Labs's AKT holdings concentration** is not aggregated publicly.
- **Co-founders Bozanich and Menzalji** have lower public profiles than Osuri — succession planning is unclear.

### Core risks (numbered)

**Risk #1 — AEP-79 Shared Security Migration (Cosmos → Solana or alternative) execution risk.** Announced October 13, 2025; target completion December 30, 2026. The migration involves moving an entire L1 chain with $257M+ market cap, 1,000+ GPU providers, and live deployments to a new settlement layer. Solana is the "strong contender" per Osuri's public comments [6][3]. Risks: (a) **Solana liveness track record** (multiple historical outages — chain liveness is non-optional for compute settlement); (b) **finality model change** (Solana's optimistic confirmation vs Cosmos's instant BFT finality — material for compute lease integrity during reorg scenarios); (c) **IBC compatibility on non-Cosmos chains** — bridge-based IBC introduces trust assumptions different from native IBC; (d) **Cosmos liquidity drainage** as AKT migrates off Osmosis-based DEX pools; (e) **destination-chain integration risk** — new validator set, new wallet ecosystem, new tooling. Forum analysis flags this migration alongside Nillion's similar Cosmos-to-Ethereum migration as a category-defining trend; if executed cleanly, Akash strengthens its competitive position by joining the Solana DePIN ecosystem (Helium, Grass, Hivemapper, Render). If executed poorly, the network bleeds users during transition.

**Risk #2 — Starbonds regulatory and execution risk.** Announced at Akash Accelerate 2025: SEC-regulated $1,000-per-bond investment instruments targeting **up to $75M** in capital to acquire **~7,200 NVIDIA GB200 GPUs**; 5-year Nodekeeper contracts; Phase 2 targets home deployment to 22M households [6]. This is the first DePIN to raise via SEC-approved instruments rather than purely crypto-native means. Risks: (a) subjects Akash to ongoing SEC oversight; (b) introduces a centralized-datacenter component into a decentralization-first thesis (creating "Starcluster" centralized infrastructure alongside the marketplace); (c) capital-raise execution risk against the $75M target; (d) Nodekeeper performance over 5-year contracts must meet SLAs to generate Starbond returns; (e) Phase 2 home-deployment plan to 22M households is aspirational at scale Akash has not yet operated. The Starbonds framework is **innovative and gutsy** but introduces execution risk that none of the other AI-DePIN projects this firm has reviewed carry.

**Risk #3 — Overclock Labs corporate-transparency gap.** Despite Akash being a $257M-mcap project listed on multiple exchanges with 5.5+ years of mainnet history, Overclock Labs's corporate structure is not publicly disclosed: jurisdiction of incorporation, employee count, board composition, audited financials, named control-function roles. For an institutional investor underwriting AKT exposure or considering equity in Overclock Labs directly, this gap must be closed.

**Risk #4 — AKT listing and US institutional access.** Akash's own token page promotes **only XT.com and Bithumb (KRW market)** as primary CEX listings [2]. While Phemex also lists AKT, the token page does not highlight Coinbase, Binance, Kraken, OKX, or other tier-1 US listings. Compare to Bittensor TAO (Coinbase + Grayscale OTCQX + pending Spot ETF) and io.net IO (Coinbase + Binance). If AKT lacks Coinbase listing, US institutional capital faces friction. This may be a gap to be diligenced or remediated post-Solana-migration.

**Risk #5 — Drawdown story and prior-cycle ATH dynamics.** AKT's ATH was set April 6, 2021 ($8.08) during the alt-cycle peak. Current price ($0.87) is −89% from that high. Throughout the 2024-2025 AI / DePIN narrative, AKT has not retested the April 2021 ATH, while peer narratives (TAO hit $752 in March 2024, even IO hit $6.44 in June 2024). Two interpretations: (a) **bullish** — there is room to run if the AI narrative re-engages and BME structurally compounds AKT demand from compute revenue; (b) **bearish** — Akash missed the prior cycle's narrative momentum, suggesting the asset is overlooked, undervalued, or facing structural buyer-base limitations relative to peers with stronger CEX presence.

**Risk #6 — Audit and smart-contract security gap.** No comprehensive third-party security audit (Trail of Bits, Halborn, Quantstamp, OtterSec) of the Cosmos SDK chain, BME contracts, AkashML stack, or upcoming Solana migration is in the public record reviewed. The CertiK Skynet rating of 4.2 suggests some review has occurred but not at the depth institutional capital requires for $257M-mcap exposure. The BME mechanism specifically — given it touches AKT supply mechanics directly — should have a dedicated tier-1 audit before deployment.

### Bottom line

Akash Network is the **most credibility-adjusted AI-DePIN investment** this firm has reviewed. The combination of: (a) Greg Osuri's track record and regulatory engagement; (b) 5.5 years of continuous mainnet operation; (c) Grayscale Top-20 institutional recognition for three consecutive quarters in 2025; (d) deepest set of named production customers including Voorhees's Venice.ai; (e) demonstrated tokenomic accountability via BME activation March 23, 2026; (f) Q1 2026 $5M compute spend ATH and 1.7B-tokens/day OpenRouter throughput outpacing Cloudflare; and (g) 75.7% of max supply already circulating (less dilution risk than peers) — together create a credibility-adjusted profile that materially differentiates Akash from io.net (founder risk) and Gonka (anonymity).

**The conclusion would not change today** if the AEP-79 Shared Security Migration completed cleanly, the Starbonds raise hit at least 50% of its $75M target, Overclock Labs published its corporate structure, and a tier-1 audit firm completed a comprehensive review of the BME contracts and pre-migration Cosmos chain. **The conclusion could change adversely** if (a) the migration experiences a major disruption that affects live customer leases; (b) Osuri's regulatory engagement turns into an SEC enforcement vector; (c) Starbonds offering encounters compliance issues; or (d) Q2-Q3 2026 compute-spend growth fails to extend the Q1 momentum.

**Recommended action**: authorize phase-two diligence including (i) Overclock Labs corporate-structure disclosure request, (ii) direct reference calls with at least 3 of the named production customers (suggested: Venice.ai, Envision Labs, Morpheus Compute Network), (iii) outside-counsel review of the Starbonds structure and AKT US securities classification, (iv) commission a tier-1 security audit of the BME contracts and the upcoming Solana-migration architecture, and (v) request Greg Osuri / Overclock Labs AKT holdings disclosure. Position-sizing for any subsequent capital deployment should anticipate the post-migration period and use the Dec 30, 2026 target completion as a structural milestone for re-evaluation.

### References

[1] Phemex Academy — "Who Is Greg Osuri and How Akash Built the Decentralized GPU Cloud" by Dan, updated May 10, 2026. Osuri career chronology (IBM, Kaiser Permanente, AngelHack), Overclock Labs founding June 2015, AKT YTD +72%, working alliance with Erik Voorhees, BME activation March 23, 2026.
[2] Akash Network — "What is Akash?" docs, akash.network/docs/getting-started/what-is-akash. Marketplace mechanics, AKT/ACT token model, 70-85% AWS cost comparison, 85+ countries provider footprint.
[3] Akash Network — 2025 Year in Review (akash.network/blog/akash-2025-year-in-review, Jan 9, 2026). Mainnet 14 (Oct 28 2025) upgrade summary, AkashML launch (Nov 2025), Grayscale Top-20 designation (three consecutive quarters), 2024-vs-2025 growth metrics (+128% USD spent), customer integrations, Osuri congressional testimony (May 21, 2025).
[4] Akash Network — Q1 2026 Report (akash.network/blog/akash-network-q1-2026-report, April 1, 2026). $5M compute spend ATH, BME mainnet live March 23 2026 via Proposal 318, Homenode beta, AkashML on OpenRouter at 1.7B tokens/day outpacing Cloudflare.
[5] CoinMarketCap — Akash Network (AKT), coinmarketcap.com/currencies/akash-network (May 26, 2026). $0.87 price, $257.26M mcap, $339.8M FDV, 75.7% circulating, ATH $8.08 on April 6, 2021, CMC rank #127.
[6] Blockeden Forum — "Akash Network Ditches Cosmos SDK, Eyes Solana as New Home for Decentralized AI Compute" (Feb 23, 2026). Migration rationale (Greg Osuri Oct 13, 2025 announcement), Solana as leading candidate, IBC compatibility requirement, Starbonds SEC-regulated $75M / 7,200 GB200 GPU framework, technical-developer-forum expert commentary on finality/IBC/bridge risk.
[7] Akash Token page (akash.network/token, May 26, 2026). Live AKT metrics (CoinGecko-sourced), three stated token utilities, BME circuit-breaker logic, listing references (XT.com, Bithumb), max supply 388.53M.
