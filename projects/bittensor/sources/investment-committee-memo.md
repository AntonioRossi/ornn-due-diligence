# Investment committee memo — Bittensor (TAO token)

**To:** Investment Committee
**From:** [Analyst]
**Date:** May 26, 2026
**Re:** **Bittensor (TAO) — preliminary IC memo (public-information based)**

### Recommendation

**Authorize gated phase-two diligence; do not initiate a token position or treasury allocation yet.** The public record is materially stronger than for any other AI-DePIN token we have reviewed to date: a working Substrate mainnet that has run continuously since March 2023, **64 active subnets**, ~**65% of circulating supply staked**, real third-party consumption evidence (Corcel API: 50M+ inference calls; Macrocosmos LLM weights on HuggingFace), a $3.1B market cap with $275–$373M in daily exchange volume across Coinbase, Binance, Kraken and others, completion of the **first Bitcoin-style halving** on December 15, 2025, and a **pending Grayscale Spot Bittensor ETF S-1 filing**. However, six structural issues remain unresolved: **(1) deep validator and stake concentration (top 64 validators control 100% of subnet emission weights, and the Triumvirate / Senate governance retains Opentensor Foundation veto-equivalent control over what proposals reach the floor), (2) US securities-law exposure that the SEC has not adjudicated — Grayscale's pending ETF decision is the single biggest near-term catalyst, (3) a 2024 PyPi-package security breach that resulted in ~32,000 TAO (~$9M at today's price) stolen and no publicly disclosed code audits as of December 2024, (4) the November 2025 "Taoflow" emissions transition and the broader dTAO redesign are still recent and have not been fully battle-tested through a downturn, (5) opaque founder/operator structure (Swiss-domiciled Opentensor Foundation with no publicly disclosed board, audit history, or employee roster; a documented Const-vs-co-founder dispute alleged in community sources), and (6) Goodhart's Law gaming on validator scoring observed empirically on smaller subnets.** Until these can be triangulated through direct diligence with Opentensor Foundation, named institutional consumers, and qualified counsel opinions, no investment decision is supportable.

### Company snapshot

Bittensor is a **decentralized network for AI commodity production** built on a **Substrate (Polkadot SDK) blockchain called Subtensor** [1]. The protocol coordinates a marketplace where machine-learning miners produce outputs and validators score those outputs through the **Yuma Consensus** mechanism. Emissions of the native token **TAO** flow to miners, validators, stakers, and subnet owners based on a 41 / 41 / 18% three-way split per subnet, per tempo (~360 blocks ≈ 72 minutes) [2]. The network operates under what is publicly described as **"transitioning from centralization within the foundation to community ownership over time"** [3] — a candid admission of current operational reality.

The protocol was founded by **Jacob Robert Steeves** (pseudonym "Const"; former Google Brain engineer, prior involvement with Knowm) and **Ala Shaabana** (former Postdoctoral Fellow at the University of Waterloo, Assistant Professor at the University of Toronto, ex-Instacart senior software engineer) [4][5]. **James Woodman** is the publicly named Head of Growth [6]. The foundational whitepaper at bittensor.com/whitepaper is authored by **"Yuma Rao"** — a pseudonym now reused as the name of the Yuma Group institutional services arm — with **no date, no version, no entity attribution, and no legal disclaimers** [7]. CBInsights lists the founding year as 2019; Jacob Steeves' LinkedIn states he has worked on Bittensor since March 2016 [4]. The development organization is **Opentensor Foundation (OTF)**, **Swiss-domiciled** [8] — a jurisdiction with relatively clearer crypto regulatory frameworks than the United States.

The Bittensor network's chronology is well-documented:
- **January 3, 2021**: first iteration "Kusanagi" mainnet launched
- **May 2021**: Kusanagi halted ("consensus issues")
- **November 2, 2021**: "Nakamoto" launched as fork; 546,113 TAO (~2.61% of total supply) migrated
- **January 10, 2023**: "Finney" testnet launched
- **March 20, 2023**: Finney mainnet (the current live version of Subtensor)
- **October 2, 2023**: subnets went live on Finney
- **August 16, 2022**: first TAO trade on BitMart
- **February 20, 2025**: Coinbase listing of TAO
- **November 2025**: "Taoflow" flow-based emissions transition activated
- **December 11, 2025**: Grayscale Bittensor Trust (GTAO) publicly listed on OTCQX — **first publicly quoted US investment product offering TAO exposure**
- **December 15, 2025**: **first halving event completed** (daily issuance 7,200 → 3,600 TAO)
- **December 30, 2025**: **Grayscale filed S-1 to convert GTAO into a Spot Bittensor ETF**
- **February 1, 2026**: "Proof of Contribution v2" upgrade activated

**Market state (May 26, 2026):**

| Metric | Value |
|---|---|
| Price | ~$283 [9] |
| Market cap | $3.09B (CMC) / $3.16B (Messari) [9][10] |
| FDV | $5.92–5.94B [9][10] |
| 24h volume | $275–373M [9][10] |
| Circulating / max supply | 10.94M / 21M (52.11%) [9] |
| 30D volatility | 73.25% [10] |
| Futures Open Interest | $214M [10] |
| ATH | $752 (Mar 7, 2024) / $767 (Apr 11, 2024) — current −63% [9][10] |
| Cycle low | $144.64 (Feb 11, 2026) [10] |
| % staked / delegated | ~65% [8] |
| Active subnets | 64 [8] |
| CMC sector rank | DePIN #1, AI #1 [10] |

### What appears real today

These are the dated, sourced, and triangulated facts under which any subsequent thesis must sit. They are not investor-friendly framing; they are the floor.

- **Operational mainnet with continuous upgrade cadence.** Subtensor has run since March 20, 2023, with major versions through v10.3.1 (May 26, 2026 — CVE fixes, exception handling, compatibility) [10]. Continuous engineering activity is visible at github.com/opentensor [4].
- **Marquee strategic milestones.** **Coinbase listing** (Feb 20, 2025) brought TAO to the largest US retail brokerage with crypto exposure [10]. **Grayscale Bittensor Trust public OTCQX listing** (Dec 11, 2025) was the first publicly quoted US investment product offering TAO exposure [10]. **The pending Grayscale Spot Bittensor ETF S-1 filing** (Dec 30, 2025) is the most important institutional product event in Bittensor's history; its SEC outcome will be a major near-term catalyst.
- **Verified subnet expansion.** The 64-subnet architecture covers text generation (Subnet 1), pretraining (Subnet 9 / Macrocosmos), multimodal (Subnet 21 / Omega), decentralized storage with BTC PoW hybrid (Subnet 14 / TaoHash), and dozens of other tasks [8][11]. Subnet-specific alpha tokens (Targon, celium, Score, templar, iota, Gradients, Ridges AI, OpenKaito, etc.) trade as separate listed assets on CoinMarketCap [9].
- **Verified external consumption.** **Corcel API** has reported 50M+ inference calls routed through Bittensor on behalf of independent developers, AI startups, and research institutions, billed in fiat and TAO [8]. **Macrocosmos** publishes openly downloadable LLM weights on HuggingFace from Subnet 9's collaborative pretraining effort — externally usable, externally verifiable quality [8].
- **First-halving completed.** The December 15, 2025 halving reduced daily TAO emission from 7,200 → 3,600, mirroring the Bitcoin supply discipline. This is the single most important structural supply event in Bittensor's history to date [10]. **Annualized new TAO emission post-halving:** approximately 1.3M TAO ≈ $370M at current prices [8].
- **Real on-chain staking participation.** **~65% of circulating supply is staked or delegated** [8] — among the highest staking participation rates of any top-50 crypto asset.
- **Documented network upgrade infrastructure.** "Taoflow" flow-based emissions (November 2025), "Proof of Contribution v2" (February 1, 2026), root-claim user-controlled reward realization, MEV Shield Protection (v10.0.0), Crowdloan integration, Subtensor v3.2.x hotfix series — all visible in the public release record [10][2].
- **CertiK Skynet rating: 4.0** [9] — modest but present.
- **$25M Nexus Mutual smart-contract insurance cover** purchased in February 2025 as a post-PyPi-breach risk mitigation [10].

### Competitive context

The decentralized-AI-compute category has consolidated meaningfully since Bittensor's 2021 launch. The competitive set, as observed in our prior IC memos and in independent industry research [8][12]:

| Project | Native token | Approach | Status (May 2026) |
|---|---|---|---|
| **Bittensor** | TAO | Yuma Consensus-scored multi-subnet marketplace | **Live, $3.1B mcap, 64 subnets** |
| **Artificial Superintelligence Alliance (FET)** | FET | Fetch.ai + SingularityNET + Ocean autonomous-agent merger | Live, merged 2024 |
| **Gensyn** | — | Verifiable compute for training (probabilistic proofs) | Pre-mainnet |
| **Ritual** | — | AI inference embedded in smart contracts | Live, different stack point |
| **Render Network (RNDR)** | RNDR | Decentralized GPU rendering, expanding to AI | Live |
| **io.net** | IO | GPU aggregation marketplace | Live |
| **Akash** | AKT | General-purpose decentralized cloud | Live |
| **Gonka** | GNK | Bitcoin-style PoW + Cosmos SDK | Live (Sept 2025), pre-CEX listing, $0 daily volume |

Bittensor's **first-mover advantage is real**: it has the largest live mainnet, the most subnets, the most external consumption evidence, and the only product on the OTCQX market (GTAO) and pending spot-ETF S-1. The protocol's stated differentiator — **"Bittensor rewards the AI models themselves for producing measurable output quality, not the developers who wrote them"** [8] — is structurally distinct from most competitors which use token rewards as developer-grant marketing.

The **principal competitive vulnerabilities** are: (a) Gensyn's verifiable-compute proof system, when mainnet, would mathematically eliminate the validator-trust problem that Yuma Consensus relies on heuristically; (b) Bittensor's own dTAO upgrade redistributes power into subnet-token markets that introduce new manipulation vectors not yet stress-tested; and (c) the rapid Gonka growth (per our recent Gonka IC memo: $0.26 → $2.61 → $0.26 round-trip in <8 months; 11,000 H100-equivalent compute) demonstrates that capital can flow elsewhere quickly if AI-DePIN sentiment shifts.

In a multi-asset framing across our Ornn / Silicon Data / Auctionomics / Gonka portfolio, **Bittensor is the only mature, exchange-listed, publicly-traded AI-DePIN comparable**. The other four cover earlier-stage GPU pricing/financialization (Ornn, Silicon Data, Auctionomics) or earlier-stage supply layers (Gonka). Bittensor is the **incumbent** of decentralized AI compute and trades that way.

### Team and operating-model risk

**Founders.** Jacob Robert Steeves ("Const") and Ala Shaabana are the publicly named co-founders [4][5]. James Woodman is Head of Growth [6]. Beyond these three named individuals, the Opentensor Foundation team is not publicly disclosed. The Aug 2023 OK Senate PDF used the phrase **"Sudo Decentralization"** to describe Bittensor's governance state at that time [6] — a candid label that explicitly acknowledges the gap between architectural decentralization and operational control.

**Operating-model concerns specific to Bittensor:**

- **Anonymous foundational documents.** The Yuma Rao whitepaper has no date, no entity, no legal disclaimers, and no audit references — same pattern observed in the Gonka whitepaper. Bittensor's "About" page is signed by "Const" (a pseudonym), not a legal entity [1][7]. For a $3B+ market cap, this is below institutional documentation norms.
- **Pre-governance "sudo" inheritance.** Until late 2023, all administrative actions ran through a single `sudo` private key controlled by Opentensor Foundation [3]. Even the current Triumvirate-Senate model retains exclusive proposal-creation and proposal-closure authority within OTF — the Senate can only approve or reject, not initiate [3]. Real decentralization in code-merge authority, treasury control, and emergency upgrade rights is **not documented in the public record**.
- **Founder dispute alleged in community sources.** IQ.wiki's Steeves entry references "**Covenant AI's founder accused Jacob Steeves of maintaining centralized control**" [4]. The Blocmates "TAO Saga" article references a Sam-vs-Jacob OTF founder dispute [13]. Specifics not captured in this research pass. **Open for direct diligence.**
- **Foundation transparency gap.** No publicly disclosed board, no employee count, no audit committee, no Swiss FINMA correspondence, no financial statements. Despite the OTF being Swiss-domiciled (a jurisdiction with clear company-registry obligations), the public record on the corporate side is opaque.

### Core risks (numbered)

**Risk #1 — Validator and stake concentration is real, measurable, and self-reinforcing.** The protocol design tasks 64 root-network validators with controlling **100% of subnet emission weights** [8]. On-chain data from Taostats shows the top 10 validators by stake "hold a combined share large enough to form a supermajority in scoring scenarios" [8]. New validators face a compounding disadvantage: lower stake → lower scoring weight → fewer delegators trust them → stake grows slowly. This rich-get-richer dynamic is **structurally embedded in the Yuma Consensus design**. The Senate K=12 governance cap further concentrates approval authority among the largest delegate hotkeys. Combined with the 18% subnet-owner emission cut [2], the practical consequence is that **subnet owners and large validators can effectively form economic alliances that control which AI models survive in the protocol** — a pattern community observers have flagged on multiple subnets and that academic research on adversarial reward optimization predicts as structurally likely [8].

**Risk #2 — US securities law exposure is unresolved and load-bearing.** The Grayscale Spot Bittensor ETF S-1 filing (December 30, 2025) is the single most important regulatory test Bittensor has faced. The SEC has issued no specific guidance on TAO classification. Critically, **TAO's delegation-and-reward structure — where stakers earn emissions through validator proxies — closely mirrors staking arrangements the SEC has previously characterized as securities offerings** in 2023-era enforcement [8]. The Opentensor Foundation's Swiss domicile and FINMA-friendly utility-token framing provide partial insulation but do not insulate the protocol from US enforcement when a substantial portion of TAO holders and economic participants are US persons [8]. The REX-Osprey ETF filing language — "no entity owns or operates the Bittensor Network, although its development was initiated by the Opentensor Foundation" [14] — is the cleanest decentralization-defense framing in public US regulatory filings, but its survivability under SEC scrutiny is untested. **The dTAO subnet-alpha-token mechanism compounds this risk**: each subnet alpha token whose value depends on the subnet's AI models attracting more TAO emissions looks structurally like an investment contract in a subnet-specific AI venture, and may carry its own Howey analysis [8].

**Risk #3 — Audit posture and demonstrated security incident history.** Per Messari (December 16, 2024): **"The Bittensor project has no publicly disclosed audits"** [10]. OTF announced intentions on July 3, 2024 to increase audit frequency, but no completed audit reports have been released in the public record reviewed. Against this audit gap, the network has a documented major security incident: the **2024 PyPi Package Manager breach**, in which a compromised package led to private-key exposure and **32,000+ TAO stolen** (~$9M at today's price). The post-incident response — entering "safe mode," halting transactions, firewall-shielding validators, and purchasing the **$25M Nexus Mutual smart-contract insurance** in February 2025 — was operationally credible, but insurance is not an equivalent to audit-driven prevention. The May 2026 Tensorplex Stake / tTAO Bridge wind-down for cybersecurity reasons indicates the ecosystem continues to surface security incidents [10].

**Risk #4 — Recent emissions and governance redesigns have not been stress-tested through a sustained downturn.** The **November 2025 Taoflow flow-based emissions transition** [2] and the **dTAO subnet-alpha-token framework** are recent, sophisticated, and add new manipulation vectors. The flow-based EMA window (86.8 days, 30-day half-life) is designed to prevent short-term gaming, but no one has yet tested whether sustained, multi-month negative net-flow scenarios cause subnet death-spirals. Yellow research raises a specific concern: **"A well-capitalized actor could accumulate a subnet's [alpha] token, pump its market price, capture a larger emission allocation, then sell, effectively extracting TAO at the expense of legitimate subnet participants"** [8]. The academic literature on automated-market-maker manipulation in thin-liquidity environments supports this concern. The "Proof of Contribution v2" February 1, 2026 upgrade further changed validator-scoring mechanics with limited public documentation [10]. Until these mechanisms have run through a sustained price drawdown — recall that the cycle low of $144.64 was just three months ago on February 11, 2026 — their resilience is unproven.

**Risk #5 — Opentensor Foundation transparency and operational governance.** Despite the Swiss FINMA-domiciled non-profit framing [8], there is **no publicly disclosed OTF board, no audited financial statements, no employee count, no detailed corporate registry information, no FINMA correspondence**. The Triumvirate retains exclusive proposal creation and closure authority [3], meaning the OTF de facto controls what governance actions can reach the Senate floor. Two community-sourced allegations of internal founder disputes (Sam vs. Jacob; Covenant AI accusations of centralized control [4][13]) are not yet substantiated by primary sources but are flagged for direct diligence. The 18% subnet-owner emission cut, combined with the implicit ability of subnet owners to influence their own validators, creates a layered principal-agent problem that the Foundation has not publicly addressed [8].

**Risk #6 — Goodhart's Law gaming and verification limits.** When a measure becomes a target, it ceases to be a good measure. Miners on Bittensor optimize for validator scores, not for AI utility to end consumers. On subnets where validator scoring is opaque or poorly calibrated, miners can learn to game the scoring function without improving underlying model quality. **This has been observed empirically on several smaller subnets** [8], where miners deployed models that maximized score on the specific query distribution validators used while performing poorly on held-out test sets. Bittensor's competitor Gensyn proposes mathematically verifiable compute proofs precisely to solve this problem — Gensyn's eventual mainnet would directly attack Yuma Consensus's heuristic-trust foundation. Until Bittensor either adopts verifiable compute primitives in its scoring or demonstrates that Yuma Consensus survives sustained adversarial pressure, this is a structural durability risk to the network's competitive position.

### Bottom line

Bittensor is **substantially the most mature decentralized-AI-compute token in the public market**: $3.1B market cap, $300M+ daily exchange volume, 65% staking participation, 64 active subnets, real third-party consumption (Corcel, Macrocosmos), Coinbase-listed, OTCQX-listed via Grayscale, pending Spot ETF, post-first-halving, and a continuously upgraded Substrate mainnet running since March 2023. The investment thesis — that decentralized AI-compute infrastructure becomes a permanent layer in the global AI stack and that TAO is the reference asset for that layer — has the strongest evidentiary base among the AI-DePIN tokens reviewed in this firm's portfolio.

The reasons for the gated recommendation are **structural rather than execution-related**. They are: (i) the validator-and-stake concentration that the protocol's own design tilts toward and that Yuma Consensus depends on a sufficiently diverse validator set to remain credible against; (ii) the US securities-law exposure that the Grayscale Spot ETF decision will define one way or the other; (iii) the audit gap and demonstrated security-incident history; (iv) the untested-through-downturn nature of the November 2025 Taoflow / February 2026 PoC v2 redesigns; (v) the Opentensor Foundation's opacity at the corporate level despite Swiss domicile; and (vi) the validator-trust foundation of Yuma Consensus that competitors propose to replace with verifiable compute primitives.

**The conclusion would change if**: (a) the SEC approves the Grayscale Spot Bittensor ETF without restrictive conditions, materially de-risking the US classification question; (b) OTF discloses board composition, employee count, audited financials, and a published FINMA correspondence history; (c) at least one tier-1 security firm publishes a comprehensive completed audit of Subtensor + the Yuma Consensus pallet + the dTAO mechanism; (d) on-chain governance produces evidence that the Senate has approved a substantive proposal against Triumvirate preferences; (e) subnet-owner-vs-validator overlap analysis confirms that the top 10 stake-weighted validators are not also subnet owners; and (f) Goodhart's Law gaming on small subnets is shown to be remediated by post-Taoflow incentive design.

Until then, **Bittensor warrants further diligence as an at-scale incumbent worth investment-committee attention, but not capital today**.

### References

[1] Bittensor — Paradigm ("About" page), bittensor.com/about. "Const"-authored vision narrative; YC framing; Substrate basis.
[2] Bittensor — Emissions / Taoflow, docs.bittensor.com/emissions (last edited Jan 25, 2026). 18 / 41 / 41% split; 360-block tempos; 86.8-day EMA window; 0.5 TAO per block emission post-halving.
[3] Bittensor — Governance, docs.bittensor.com/governance (last edited Dec 8, 2025). Triumvirate (OTF employees) + Senate (top K=12 delegate hotkeys) bicameral; (50%+1) Senate approval and Triumvirate closure required; "transitions … from centralization within the foundation to community ownership over time."
[4] IQ.wiki — Jacob Robert Steeves entry; LinkedIn (Steeves: Bittensor since March 2016). Bittensor co-founder; former Google Brain; Peru-based.
[5] Ala Shaabana — co-founder; former U Waterloo Postdoctoral Fellow, U Toronto Assistant Professor, ex-Instacart.
[6] OK Senate — "Bittensor Overview Aug 2023" PDF. Team listing including James Woodman as Head of Growth; references "Sudo Decentralization."
[7] Bittensor whitepaper — "Bittensor: A Peer-to-Peer Intelligence Market," sole author Yuma Rao, no date / version / entity / disclaimers.
[8] Yellow.com — Bondarev, *Bittensor Built A $2.7B Decentralized AI Market Nobody Saw Coming* (May 5, 2026) and Merchant, *Bittensor's Decentralized AI Network Is Growing, But Who Actually Controls It?* (Apr 27, 2026). Validator concentration, 65% staked, Corcel 50M API calls, Macrocosmos HuggingFace weights, Swiss FINMA domicile.
[9] CoinMarketCap — Bittensor (TAO), coinmarketcap.com/currencies/bittensor (May 26, 2026). Live price $283; ATH $767.68; mcap $3.09B; 24h volume $373M; 845 on-chain holders; subnet alpha tokens listed.
[10] Messari — Bittensor project page, messari.io/project/bittensor (May 26, 2026). $3.16B mcap; $5.92B FDV; 73.25% 30D vol; first halving Dec 15, 2025 (7,200 → 3,600); Grayscale OTCQX Dec 11; Grayscale Spot ETF S-1 Dec 30; PyPi breach + 32k TAO stolen; $25M Nexus Mutual cover Feb 2025; no publicly disclosed audits as of Dec 2024.
[11] Bittensor — Understanding Subnets, docs.bittensor.com/subnets/understanding-subnets (last edited Jan 29, 2026). AMM-per-subnet with TAO/alpha reserves; Subnet 0 root; validator stake weight = α_stake + τ_stake × TAO_weight (18%).
[12] Competitive landscape — derived from our recent Ornn, Silicon Data, Auctionomics, Gonka IC memos plus independent third-party comparisons (Yellow research, Messari sector classification).
[13] Blocmates — *Everything You Need To Know About the TAO Saga*, blocmates.com/articles/everything-you-need-to-know-about-the-tao-saga. Identified, not extracted in full; references Sam-vs-Jacob OTF founder dispute.
[14] REX-Osprey 485APOS SEC filing — sec.gov/Archives/edgar/data/1771146/.../rex_485apos-100325.htm. Contains the "no entity owns or operates the Bittensor Network, although its development was initiated by the Opentensor Foundation" framing.
