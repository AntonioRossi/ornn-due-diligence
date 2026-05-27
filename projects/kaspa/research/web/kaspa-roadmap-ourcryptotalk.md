# Kaspa Roadmap 2026-2027: Every Upgrade and What It Means (Our Crypto Talk, Apr 24 2026)

Source: https://ourcryptotalk.com/blog/kaspa-roadmap-2026-2027
Author: Kritika Gupta
Published: April 24, 2026
Scraped: 2026-05-27

## Roadmap summary

| Milestone | Status | Date / Target |
|-----------|--------|---------------|
| Crescendo (10 BPS) | DONE | May 5, 2025 |
| Covenant (Toccata) Hardfork | UPCOMING | June 5–20, 2026 |
| Block Rate 25 BPS | PLANNED | 2026 |
| DAGKnight | PLANNED | TBD post-hardfork |
| Block Rate 100 BPS | PLANNED | 2027 |
| VProgs | RESEARCH | TBD |
| 95% mined | PLANNED | July 10, 2026 |

## Delivered milestones

- **Rust rewrite**: full transition from Go implementation to Rusty Kaspa. Improved performance, memory efficiency, long-term maintainability; reduced attack surface.
- **Crescendo hardfork**: activated May 5, 2025. Increased BPS from 1 to 10. Tightened block intervals to 100 ms; kept block sizes roughly constant.
- **Network metrics post-Crescendo**:
  - Surpassed 600 million cumulative transactions
  - Single-day peak of 158 million transactions on October 5, 2025

## Covenant Hardfork (Toccata) details

Three simultaneous capabilities:

1. **Native assets**: KRC-20 moves from inscription-style mechanism to consensus-level support. Enables lower fees, trustless atomic swaps, integration without bridges or wrapped assets.
2. **Covenants++**: enforceable spending conditions; bounded programmability (not Turing-complete). Use cases: escrow systems, vaults, time-locked transfers, programmable wallets with multi-step execution rules.
3. **Native Groth16 ZK**: on-chain verification of proofs without revealing data. Shielded transactions, anonymous voting, trust-minimized bridging.

Additional tools:
- **SilverScript**: developer-friendly programming language for covenant logic.
- **Computational DAG (CDAG)**: tracks execution costs across blockDAG, ensures fair resource pricing, prevents abuse.

## Block rate scaling plan

- Current: 10 BPS
- Next: 25 BPS, 40 BPS, ultimately 100 BPS target
- Proportional design: block rewards adjusted per-second, total emission unchanged
- Depends on DAGKnight deployment + infrastructure maturity (node performance, bandwidth, propagation)

## DAGKnight

- Parameterless, adaptive consensus model
- Replaces or extends GHOSTDAG
- Adjusts dynamically to real-world latency/connectivity (vs fixed assumptions)
- Sub-second finality potential under favorable conditions
- Improves resistance to delays, partitions, adversarial conditions
- December 2022: community crowdfunded 70 million KAS in 12 days to support research/implementation

## VProgs

- Separates execution from verification: complex logic runs off-chain, network verifies results on-chain with ZK proofs
- VProgs Yellow Paper draft v0.01 published September 11, 2025 by Michael Sutton and collaborators
- Programs manage own accounts, gas, storage; interoperable across blockDAG; parallel execution environments coexist
- Currently research stage, not near-term

## Ecosystem L2s

- **Igra Network**: first based rollup directly on Kaspa. EVM-compatible. Decentralized architecture (no centralized sequencer). Target: DeFi, gaming, NFT applications.
- **Kasplex**: launched August 2025. >100 dApps. Smart contract capabilities not yet native to L1. Bridges between current ecosystem needs and upcoming L1 programmability.
- **KRC-20**: currently inscription-style with off-chain indexing. Will move to native consensus support after Toccata.

## Supply milestone

- Total supply cap: ~28.7 billion KAS
- Chromatic emission schedule (monthly reduction by factor (1/2)^(1/12))
- **By July 10, 2026: ~95% of total supply mined**
- Remaining ~5% emitted over following decades
- Similar to Bitcoin halving but gradual rather than discrete

## Investor takeaways

- Third-party roadmap source confirms Toccata June 2026 window matches Michael Sutton's primary-source post.
- Supply compression event coincides with hard-fork window: 95% mined + Toccata activation both in Q2-Q3 2026.
- Layer-2 strategy is two-track (Igra EVM-compat + Kasplex KRC-20) → reduces dependence on a single ecosystem builder.
- Kaspa's programmability philosophy is explicitly different from Ethereum's full Turing-complete approach - "bounded programmability that prioritizes security and auditability."
