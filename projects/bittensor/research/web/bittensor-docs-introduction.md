# Bittensor — Docs Introduction (Components and Personas)

- **URL:** https://docs.bittensor.com/learn/introduction
- **Last edit (per doc):** December 5, 2025
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape
- **Reliability:** Company-generated (technical reference)

## Components of the platform

1. **Pool of subnets** — each subnet is an "incentive-based competition
   marketplace" producing a specific digital commodity related to AI.
2. **Bittensor blockchain** — system of record; TAO token incentivizes
   participation; records balances and transactions; allows TAO holders to
   stake.
3. **Bittensor SDK** — supports miner/validator interactions, blockchain
   interactions.

## Personas

| Role | Description |
|---|---|
| Miners | Produce digital commodities |
| Validators | Evaluate the quality of miners' work |
| Subnet creators | Manage incentive mechanisms |
| Stakers | TAO holders delegating to validators |
| Blockchain operator | Local Subtensor instance (offline testing) |

## Subnet development flow

1. **Local testing** of incentive mechanism
2. **Testchain** (Bittensor testnet)
3. **Mainnet** (Bittensor mainchain — "Finney")

## Subnet listing

- TAO.app maintains current subnet listings.
- Subnet 1 is the original text-prompting subnet developed by Open Tensor
  Foundation.

## Notes for analyst

- "Open Tensor Foundation" is the development organization; not all subnets
  are operated by it. Most subnets are run by third-party teams.
- The system implicitly delegates a wide range of decisions (incentive
  mechanism, validation function, miner eligibility) to subnet creators,
  meaning quality varies subnet by subnet.
