# Bittensor — Emissions / Dynamic TAO ("Taoflow") Reference

- **URL:** https://docs.bittensor.com/emissions
- **Last edit (per doc):** January 25, 2026
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape
- **Reliability:** Company-generated (technical reference)

## Headline change (November 2025)

> As of November 2025: Bittensor has transitioned to a **flow-based model
> ("Taoflow")** for determining how TAO emissions are distributed across
> subnets. Emissions are now based on net TAO inflows due to staking activity,
> rather than token prices as previously.

## Two-stage emissions process

### 1. Injection (every block)

- TAO injected into each subnet's TAO reserve
- Alpha injected into subnet's alpha reserve (proportional to TAO injection, to
  maintain price stability)
- Alpha allocated to "alpha outstanding" — set aside for distribution to
  miners, validators, stakers, subnet owner

### 2. Distribution (every tempo, ~360 blocks ≈ 72 minutes)

- 18% to subnet owner
- 41% to miners (split per Yuma Consensus)
- 41% to validators + their stakers (split per Yuma Consensus + stake weights)

## Flow-based emission formula (technical)

1. Track net flows per block: net_flow = staked TAO − unstaked TAO
2. Compute EMA of net flows (86.8-day window, 30-day half-life, smoothing
   factor α ≈ 0.000003209)
3. Offset and clip: zi = max(Si − L, 0) where L = max(FlowCutoff,
   min(Sj, 0)) — ensures subnets with most-negative EMA get zero
4. Power normalization (p=1 default → linear/proportional)
5. Final TAO injection: ΔTi = ΔT̄ × share(i); ΔT̄ = **0.5 TAO per block**
   currently

## Rationale (per Const / Jacob Steeves, October 30, 2025 episode of Novelty Search podcast)

- **Old price-based model problems:**
  - "TAO Treasury" gaming exploit pattern: pump price via treasury → pay for
    liquidity using inflated emissions → slow burn while collecting emissions
  - Small subnets devastated by minor sell pressure; large subnets absorb
    massive selling with minimal emission impact

- **New flow-based model benefits:**
  - Net TAO flow is scale-invariant — does not favor large total liquidity
    pools
  - Subnets with negative net flows receive zero emissions
  - 86.8-day EMA prevents short-term gaming
  - Anti-manipulation by design

## TAO Weight

- Currently planned **18%**
- Reduces TAO stake's contribution to validator weight to "achieve weight
  parity between TAO and total alpha in approximately 100 days"
- Validator stake weight = α_stake + τ_stake × TAO_weight

## De-registration vs emissions

- Emissions: now flow-based
- De-registration: **remains price-based** (intentionally decoupled)

## Notes for analyst

- The November 2025 emissions transition is a **major mechanism change** that
  invalidates earlier (2024) tokenomics analyses.
- The 18% TAO weight effectively dilutes TAO root-stakers in favor of
  alpha-holders. This is a **material policy choice** that benefits subnet
  alpha holders at root-TAO holders' expense.
- Power exponent (p=1 default) can be raised to create "winner-takes-more"
  dynamics — adjustable by governance.
