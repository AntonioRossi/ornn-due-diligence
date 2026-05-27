# Igra Labs Litepaper v1.0 - "Real-time Programmability over BlockDAGs"

Source: https://github.com/IgraLabs/research/blob/main/igra-litepaper-v1.0.pdf (26 pages)
Scraped: 2026-05-27 via firecrawl PDF parser

## Architecture (based rollup over Kaspa)

Igra is a decentralized EVM-compatible programmability layer atop Kaspa. **Based rollup** design per Justin Drake's 2023 construction: users transact by posting Kaspa base-layer transactions; **sequencing is delegated to Kaspa consensus** rather than a separate sequencer set.

Four-component node architecture:

- **Gateway**: EVM-compliant API (MetaMask-compatible). Wraps L2 txns into Kaspa txns using a `txid_mask` prefix-matching scheme.
- **ViaDuct**: Scans Kaspa for wrapped txns, shallow validation, reorg detection, feeds Ethereum Engine API stream to IgReth.
- **IgReth**: Execution engine forked from Reth (Rust Ethereum client). EIP-1559 with enforced minimum gas price (DoS protection). Mempool cleared each block.
- **ATAN (Accepted Transaction Archival Node)**: Novel data-availability primitive (proposed by Igra as KIP-15, shipped in Kaspa's Crescendo hard fork May 5, 2025). Decouples chain-validation data from transaction data so a syncing node only needs minimal "ATAN data" plus a trusted (or self-run) pruned Kaspa node.

## Throughput / finality

- Block window: ~10 Kaspa blocks ≈ 1 second per Igra block
- Reorg delay buffer: 3-4 seconds (current, unoptimized)
- Kaspa block rate (assumed): 10 BPS
- Posterity header cadence: every 12 hours post-Crescendo (was 24h)
- ECDSA signature ≈ 100,000 Blake3 hashes (rationale for cheap txid_mask PoW)
- Design claim: "internet-fast finality with proof-of-work security"
- **No explicit TPS figure is stated in the litepaper itself** (vs the 3,000 TPS marketing claim on igralabs.com)

## Two tokens

- **iKAS**: 1:1 wrapped Kaspa, minted only against locked KAS; bridging/gas only.
- **IGRA**: Network token. Utilities:
  - Staking for attestation of L2 state
  - Rewards for node operators (ATAN runners)
  - Payment for ZK provers (once ZK opcodes ship on Kaspa)
  - Reduced fees / privileged access for holders
  - DAO governance voting (window size, txid_mask length, staking rewards, bridge operator thresholds)

**No supply, emission schedule, allocation, vesting, or distribution figures disclosed in litepaper** - these are on igralabs.com/igra-token instead.

## Security model (three flows)

- **Synchronization**: Permissionless 1-of-n trust (best possible without ZK) once ATANs are in production; pre-ATAN state would have required prohibitive archival nodes.
- **Processing**: PoS-style 2n/3-of-n via IGRA attesters; ZK-based validation planned post Kaspa ZK fork.
- **Bridging** (worst trust bottleneck):
  - **Community bridging** (interim): k-of-n trusted multisig with time-lock + community-elected operators + waivers. **Worst case = full theft of locked assets.**
  - **MPC bridging**: FROST threshold signatures + PoS-staked IGRA validators; same trust as PoS.
  - **ZK bridging**: Canonical, contingent on Kaspa adding ZK opcodes - currently undefined. FROST threshold: 2/3 stake for MPC.

## Risks acknowledged in-text (no dedicated section)

1. Community bridging can lose all locked funds if multisig is breached
2. Kaspa ZK opcodes "may never be introduced" (MPC fallback exists)
3. Reorg-handling latency is unoptimized
4. Gas-price floor needed against DoS
5. Reth's strict monotonic-timestamp assumption requires careful adaptation (DAA-score proxy)

## Comparison framings

- Explicit contrast with non-based optimistic and ZK rollups (Ethereum L2s) as "**parasitic**" (citing Heimbach & Milionis 2025) - accrue revenue without compensating the L1.
- Based rollups route activity through L1, sharing revenue with Kaspa.
- Ethereum's archival-node centralization ("chain not validated from genesis in 5+ years") cited as anti-pattern that ATANs avoid.

## Disclosed quantitative metrics

| Metric | Value |
|--------|-------|
| Block window | ~10 Kaspa blocks ≈ 1 second |
| Reorg delay | 3-4 seconds (unoptimized) |
| Kaspa block rate | 10 BPS |
| Posterity header cadence | 12 hours (post-Crescendo) |
| Gas pricing | EIP-1559 with enforced lower bound |
| FROST threshold | 2/3 stake |
| Crescendo activation | May 5, 2025 |

## Gaps / not disclosed in litepaper

- No tokenomics numerics (supply, allocations, vesting)
- No dated roadmap
- No legal entity disclosure (Swiss Association mentioned on website, not in paper)
- No team / contributor names
- No formal risk-factors section
- No quantitative TPS/security-budget/gas-cost benchmarks

## Investor takeaways

- Architecture is well-formed and references peer-reviewed constructions (Drake based rollups, Heimbach & Milionis 2025)
- Bridging is the highest-risk trust surface and is explicitly tiered (community → MPC → ZK) — disclosure is honest
- Throughput marketing claim (3,000 TPS) does not appear in the litepaper - investigate the gap between marketing and paper
- Litepaper alone is insufficient for institutional diligence; supplementary disclosures (team, legal, governance) live elsewhere on the site
- The "parasitic L2" framing is sharp and political - this is a differentiator for capital that holds an opinion on L1-L2 value capture
