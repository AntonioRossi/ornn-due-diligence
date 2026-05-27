# Gonka — Pricing Mechanism (Live Docs)

- **URL:** https://gonka.ai/docs/wallet/pricing
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape, formats: markdown, onlyMainContent: true
- **Reliability:** Company-generated

## Mechanism summary

- Dynamic per-model pricing, recalculated every block.
- **Stability zone: 40%–60% model utilization** → no price change.
- Outside: linear adjustment proportional to deviation, capped at **2% per block**.
- Elasticity default: **0.05**.
- **Price floor: 1 nicoin per AI token.**

## Default network configuration (snapshot of live governance endpoint)

From `curl http://node2.gonka.ai:8000/v1/governance/pricing`:

```json
{
  "unit_of_compute_price": 100,
  "models": [
    {
      "id": "Qwen/Qwen3-235B-A22B-Instruct-2507-FP8",
      "units_of_compute_per_token": 10000,
      "price_per_token": 1
    }
  ],
  "dynamic_pricing_enabled": true
}
```

(Only one entry shown in the docs snapshot. The live endpoint can be queried for
the current full model list.)

## Denominations

| Unit | Purpose | On-chain | Ratio |
|---|---|---|---|
| `ngonka` | Base on-chain unit | Yes | 1 |
| `gonka` | Display unit only | No | 1 gonka = 1,000,000,000 ngonka |

## Notes for analyst

- The "$1 price_per_token" in the snapshot is **1 ngonka per AI token**, not
  $1. Off-chain conversions to fiat depend on GNK market price, which is **not
  documented in the public docs**.
- Per-model independent pricing implies models with stronger demand may price
  themselves out of the stability zone before others.
- References point to `proposals/tokenomics-v2/dynamic-pricing.md` in the
  gonka-ai/gonka GitHub repo — open-source implementation of the proposal exists.
