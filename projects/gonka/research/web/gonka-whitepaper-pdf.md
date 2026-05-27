# Gonka — Whitepaper PDF (Decentralized AI Network)

- **URL:** https://gonka.ai/whitepaper.pdf
- **PDF title (Firecrawl metadata):** "EXTERNAL Decentralized AI_ Whitepaper"
- **Document title (in PDF):** *Decentralized AI: Meaningful utilization of
  computational power for real-world application*
- **Pages:** 27
- **Fetched:** 2026-05-26 (via firecrawl_scrape with PDF parser; subagent
  produced this summary from the 81k-char extracted markdown)
- **Reliability:** Company-generated (technical design document)

## ⚠️ Document-level red flags (verbatim findings)

1. **No date, no version.** Searches for 2023/2024/2025/2026, "Copyright",
   "Version", "©" all returned NOT FOUND.
2. **No company / legal entity named.** No "Product Science", "Gonka
   Foundation", "Gonka Inc", "Cayman", "BVI", "Switzerland" — none.
3. **Single named author:** **David Liberman, `liberman@gmx.com`** — a free
   gmx.com personal email, not a corporate domain.
4. **No legal disclaimers, securities-law statements, jurisdictional notices,
   or "not investment advice" language anywhere.**
5. **No audit references** (CertiK, Halborn, Trail of Bits, etc. — NOT FOUND in
   document body).
6. **No dated milestones** (no genesis, testnet, or mainnet calendar).
7. **No tokenomics specifics in the whitepaper itself** — the 1B supply, 80/20
   split, 323k initial epoch reward, 4-year halving all live in the **separate
   "Gonka: Tokenomics" PDF** which the whitepaper references twice.
8. **No named investors, exchanges, or partners.** Only competitors and
   adversaries are named (AWS, Azure, OpenAI, Anthropic, Meta as the
   centralized status quo; Bittensor and Bitcoin as comparison networks).

## Technical architecture

- Three participant roles: **Hosts** (hardware providers), **Developers**
  (build/deploy AI apps via OpenAI-style API), **Users** (end users).
  Validators are not a separate class — any Host can act as Validator.
- Consensus is a **hybrid of PoW and PoS** branded "Transformer-based
  Proof-of-Work" / "Sprint" — PoS-style block finality (majority sign-off),
  but voting weight derived from Sprint compute output rather than staked
  capital. Optional GNK collateral can top up voting weight.
- **Sprint:** ~10-minute time-bound competition where Hosts run a
  Transformer-shaped function. Sprint occurs once per cycle ("could correspond
  to … 24 hours") — i.e. one Sprint per day. Weights reset per cycle.
- **Off-chain compute, on-chain coordination.** Compute (Sprint + inference +
  training) runs off-chain on Host hardware; voting weights, task assignment,
  validation results, and rewards are coordinated on-chain.
- **Models named in whitepaper era:** `Qwen/Qwen2.5-7B-Instruct` and
  `Qwen/QwQ-32B`. (The live network now supports 9 models per the docs —
  significant evolution since the whitepaper.)
- **Blockchain framework:** Not named. "Cosmos SDK", "Tendermint", "CometBFT",
  "IBC", "EVM" all NOT FOUND. **Governance terminology (Quorum 33.4% / Majority
  >50% / NoWithVeto 33.4% / "Genesis Code")** is Cosmos SDK gov-module idiom —
  the chain is almost certainly Cosmos SDK + CometBFT, but the whitepaper does
  not confirm this.

## PoC ("Transformer-based PoW") details

- **Sprint model architecture:** 64 layers, 128 attention heads, embedding dim
  512, vocab 8192, FFN hidden 8192, sequence length 4 → **~2.3B parameters**.
- **Nonce mechanism:** Each Host iterates nonces combined with per-Host Node
  Seed (from public key) and global Sprint Seed. Runs Transformer forward; final
  output vector is randomly permuted. A vector is "Appropriate" if Euclidean
  distance to a shared Target Vector falls under a fixed threshold.
- **Difficulty:** Threshold calibrated so that **chance of finding an
  Appropriate Vector from one nonce is ~1 in 900**.
- **Anti-cheating:** Random permutation prevents NN-continuity exploits.
  Sprint Seed generated via threshold cryptography + commit-reveal with timed
  reveal (Appendix C).
- **Work validation:** Three-step reconstruction — rebuild Transformer + Target
  Vector from Sprint Seed, regenerate inputs from nonces + Node Seed, run
  forward passes, confirm all proofs are Appropriate Vectors. Voting weight =
  number of valid proofs.
- **Inference-layer cheating detection:** Honest-majority verification (>50%
  voting weight confirms) + randomized spot-check (~1 in 10 to 1 in 100 tasks
  depending on verifier weight). Statistical thresholding handles hardware
  non-determinism; persistent error → slashing of accumulated cycle rewards +
  reputation reset to zero.
- **User-driven oversight:** Paid "dislike/report" mechanism — users can pay
  to flag results.

## Governance model

- PoC-weighted voting.
- **Default activation: 20% of each Host's PoC voting weight is auto-active**;
  remaining 80% unlocks by locking GNK as collateral.
- Parameters (verbatim from whitepaper §10):

| Parameter | Default | Notes |
|---|---|---|
| Quorum | 33.4% of total PoC-weighted power | Governance-parameterized |
| Majority Threshold | >50% Yes (excl. Abstain) | Configurable on-chain |
| Veto Threshold | 33.4% non-abstaining "NoWithVeto" | Forcibly rejects |

- "All these parameters are defined in the Genesis Code and can be modified via
  governance proposals."

## Notable verbatim quotes

> The proposed decentralized AI network addresses these inefficiencies by
> ensuring that almost 100% of computational resources are directed toward
> meaningful tasks such as AI model training and inference.
> *— Abstract / Introduction*

> in systems like Bittensor, 60% of rewards are allocated to staking, which,
> while necessary for network security, does not contribute to AI computation.
> Furthermore, the remaining 40% of rewards are also used inefficiently, as
> contributors to AI computation often repeat tasks to ensure accuracy and meet
> network validation requirements, leading to suboptimal hardware utilization.
> *— Section 1 (Bittensor critique)*

> the subsidies have the potential to reduce the cost of training and inference
> for developers and customers by as much as 50% or more compared to current
> centralized providers, particularly during the network's initial growth phase.
> *— Section 2*

> If Ethereum had been a Proof-of-Stake network from the start, nearly all of
> its $300 billion market capitalization (aside from a percentage allocated to
> ICO) — would have been paid as subsidies to capital rather than being
> invested in hardware subsidies.
> *— Section 3 (PoS critique)*

> This method reduces the resource waste typically associated with redundant
> checks in current decentralized utility systems, lowering the required
> repetition rate to as little as 1-10%.
> *— Section 6 (verification efficiency)*

> By default, only 20% of each Host's PoC-derived voting weight is activated
> automatically. To unlock the remaining 80%, Hosts must lock GNK coins as
> collateral, linking governance influence to real economic commitment.
> *— Section 10*

## Acknowledged risks (technical only — no legal)

- Host fraud (incomplete tasks, simpler-model substitution, misinformation
  injection)
- Non-deterministic hardware producing false positives
- Need for statistical (not deterministic) verification

(No market/regulatory/legal risks disclosed in the whitepaper itself — those
live in the tokenomics document.)

## References cited (15 entries, full list)

1. Joe-Wong, Carlee and Sen, Soumya. *Pricing the Cloud: Resource Allocations,
   Fairness, and Revenue.*
2. Jones, Mike. "Microsoft Azure Negotiation Strategy – Large Deals." uscloud.com
3. Wang, Sarah and Casado, Martin. "The Cost of Cloud, a Trillion Dollar
   Paradox." a16z.com
4. Peters, Keaton. "US Government Launches New Attempt to Gather Data on
   Electricity Usage of Bitcoin Mining." insideclimatenews.org
5. Nakamoto, Satoshi. "A Peer-to-Peer Electronic Cash System." bitcoin.org
6. Douillard, Arthur, et al. **DiLoCo: Distributed low-communication training
   of language models.**
7. Jia, Hengrui, et al. **Proof-of-learning: Definitions and practice.**
8. McMahan, Brendan, et al. "Communication-efficient learning of deep networks
   from decentralized data." (FedAvg)
9. Reddi, Sashank, et al. "Adaptive federated optimization." ICLR.
10. Charles, Zachary, et al. "Communication-Efficient Language Model Training
    Scales Reliably and Robustly: Scaling Laws for DiLoCo."
11. Lepikhin, Dmitry, et al. **GShard.**
12. Ryabinin, Max, and Anton Gusev. "Towards crowdsourced training of large
    neural networks using decentralized mixture-of-experts."
13. Douillard, Arthur, et al. **DiPaCo: Distributed path composition.**
14. Bitcoin Block Reward Halving Countdown. bitcoinblockhalf.com
15. "How The Merge impacted ETH supply." ethereum.org

## Notes for IC memo

- The whitepaper's **anonymity** (single author with a gmx.com email, no entity,
  no jurisdiction, no copyright, no disclaimers) is itself a load-bearing
  finding for the regulatory and corporate-governance sections of the memo.
- **Bittensor 60/40 critique** is the single most load-bearing competitive
  positioning claim. The 60/40 number's basis is **not** sourced inside the
  whitepaper — should be stress-tested against Bittensor's actual emission and
  validation overhead documentation.
- The whitepaper supports **training** as a workload, not just inference. Public
  marketing emphasizes inference; the **Decentralized AI Training Fund (20% of
  inference revenue)** in tokenomics is the funding mechanism for training
  workloads. Whether any training has actually run on-network is **not
  documented**.
- The **Cosmos SDK + CometBFT** stack is strongly implied but never confirmed
  in the whitepaper. Other sources (Cosmos-style validator addresses, Ping
  Dashboard explorer support) confirm Cosmos SDK in practice.
- The **technical training references (DiLoCo, DiPaCo, GShard, Proof-of-Learning)**
  ground the protocol design in mainstream ML research, suggesting credible
  research-engineering depth.
- No ZK / optimistic rollup / TEE attestation in the design — verification is
  purely **statistical (probabilistic spot-check)**. Material implication:
  a sophisticated cheating Host that beats the spot-check rate by smart
  selection could earn rewards without performing real work.
