# Bittensor — Understanding Subnets

- **URL:** https://docs.bittensor.com/subnets/understanding-subnets
- **Last edit (per doc):** January 29, 2026
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape
- **Reliability:** Company-generated (technical reference)

## Subnet anatomy

1. **Incentive mechanism** — defines miner work and validator scoring (off-chain,
   per-subnet, maintained as a code repository)
2. **Miners** — produce useful work per the subnet's mechanism
3. **Validators** — score miners; produce weight matrix as Yuma Consensus input
4. **Yuma Consensus** — on-chain, determines emissions

## Liquidity pools (per subnet)

Each subnet is its own **automated market maker (AMM)** with two reserves:

- TAO reserves (τ)
- Alpha reserves (α, subnet-specific token)
- Alpha outstanding (held by participants)

**Subnet token price** = TAO in reserve / alpha in reserve (linear AMM).

## Token-naming convention

Each subnet has its own currency (e.g., apex/α, omron/β, templar/γ, targon/δ,
pretrain/ι, etc.). In abstract docs, called "alpha" tokens.

## Example subnet state (from btcli output)

```text
Netuid  Name           Price        Market Cap   Emission
 0      τ root         1.00 τ/T     τ 5.93m      τ 0.0000
 3      γ templar      0.02 τ/γ     τ 57.32      τ 0.0197
 9      ι pretrain     0.02 τ/ι     τ 55.38      τ 0.0194
 1      α apex         0.02 τ/α     τ 54.45      τ 0.0192
 2      β omron        0.02 τ/β     τ 54.45      τ 0.0192
 4      δ targon       0.02 τ/δ     τ 54.45      τ 0.0192
   ...
```

## Root subnet (Subnet 0)

- Special — only validators+stakers, no miners, no alpha currency
- TAO holders can stake to root validators for subnet-agnostic exposure
- Over time, emissions to root TAO stakers decrease relative to alpha holders
  (see TAO Weight mechanic)

## Validator stake weight

```
Validator stake weight = α_stake + τ_stake × TAO_weight
```

Validator's relative weight in subnet determines voting power and emission
share.

## Decentralized subnet evaluation

- TAO holders stake into subnets "voting with their TAO" for which subnets
  deserve emissions
- Net positive flow → more emissions; net negative flow → reduced or zero
  emissions
- Flow-based model active since November 2025

## Notes for analyst

- Each subnet is a **separate AMM with thin liquidity**. Initial pool seeded
  with negligible alpha (1e-9). Prices can move sharply with small flows.
- The btcli output example shows root subnet at ~$5.93m TAO market cap and
  most other subnets at ~$54-57 TAO market cap. This is illustrative; live
  subnet sizes vary widely.
- The introduction of subnet alpha tokens (dTAO) creates a layered token
  economy: TAO + 64+ active alpha tokens. From a portfolio perspective, a
  "bet on Bittensor" is now a basket of correlated but distinct token bets.
