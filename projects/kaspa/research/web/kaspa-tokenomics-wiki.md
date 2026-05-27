# Kaspa Tokenomics (Kaspa Wiki, last edited 2025-02-20)

Source: https://wiki.kaspa.org/en/tokenomics
Scraped: 2026-05-27

## Launch model

- Fair launch coin; PoW; **no premine, no preallocation, no ICO, no vesting**
- Every KAS mined in highly competitive environment from mainnet launch (Nov 7, 2021)

## Monetary policy phases

1. **Pre-deflationary phase** (Nov 7, 2021 – May 8, 2022):
   - First 2+ weeks: random reward 1-1000 KAS/block (averaged ~750 due to randomness)
   - Then 500 KAS/sec constant for ~6 months
2. **Chromatic phase** (May 8, 2022 onward):
   - Initial block reward: 440 KAS
   - Halves once per year, but smoothly: every month reward decreased by factor (1/2)^(1/12)
   - Ratio mirrors tempered chromatic scale; year = "octave"
   - Policy dictates emission per second, regardless of block rate

## Supply schedule (selected dates)

| Date | % of total mined |
|------|------------------|
| Jan 1, 2023 | 53.3% (~15.3B KAS) |
| Jan 1, 2024 | 76.3% (~21.9B KAS) |
| Jan 1, 2025 | 87.4% (~25.1B KAS) |
| Jul 10, 2026 | ~95% |
| ~36 years post-mainnet | Block reward < 1 Sompi (effectively 0) |

## Total supply

- Approximately **28,704,026,601 KAS** (hard cap in code is 29B, but emission tightly bounded below 28.71B)
- Variation explained by: random-reward subphase pseudorandom average (~750 vs 500 expected), DAA score parallel calculations, anti-chain rewarded blocks, DAA score jumps

## Fees

- Minimum tx fee: 1 sompi per gram (~0.000023 KAS for typical tx)
- Some wallets use fixed "0.0001 KAS per UTXO" formula
- Fees rise on congestion; KIP-9 mass constraints can raise fees even when uncongested

## Long-term miner incentive narrative

- By 2029 Kaspa expected to have lower inflation rate than Bitcoin
- Expected drivers of fee revenue: 100 BPS speed, smart contracts, ETH settlement support (planned), L2 fee streams
- If fees insufficient: alternatives include increasing standard fee, tail emission, demurrage on stationary UTXOs - none currently planned for implementation, discussed by community

## Investor takeaways

- Fair launch + cap + chromatic schedule = closer to Bitcoin tokenomics than Ethereum or Solana
- 95% mining completion by July 10, 2026 - supply compression milestone within 6 weeks of current date
- No central foundation treasury - cannot be diluted by foundation grants or "operational" sales
- Long-tail miner incentive is unresolved (~2058 onward) but not near-term investor risk
