# Akash Network — "What is Akash?" docs

- **URL:** https://akash.network/docs/getting-started/what-is-akash
- **Fetched:** 2026-05-26
- **Reliability:** Company-generated (technical reference)

## Headline framing

- "Akash Network is the world's first decentralized cloud computing marketplace."
- "Up to 85% lower cost than traditional cloud providers"
- "Censorship-resistant, permissionless"
- "Providers in 85+ countries"

## Core mechanics

- User defines deployment in YAML (SDL — Stack Definition Language)
- Independent providers compete via bid auction
- User selects best offer
- App runs on provider's infrastructure; pay-per-block, close anytime
- Lease is the active agreement; deployment is the app definition; bid is the provider's offer

## Token model

| Token | Purpose | On-chain? |
|---|---|---|
| **AKT** | Native PoS staking, governance, gas | Yes |
| **ACT** | USD-pegged compute credit (non-transferable); funds deployments and pays providers | Yes (minted by burning AKT or via credit card) |

- Pay-with-AKT option only "when the circuit breaker is in effect"
- Pay-by-credit-card via Akash Console with $100 free credits, 30-day trial, 24-hour deployment max
- Self-custody path via Keplr wallet (Cosmos)

## Use cases

- Web applications, APIs, microservices
- Databases (PostgreSQL, MySQL, MongoDB, Redis, etc.)
- AI/ML training, inference, Jupyter notebooks, LLMs
- Game servers (Minecraft, Valheim, ARK)
- Development tools (CI/CD, build servers)

## Trial vs Wallet differentiation (verbatim)

| Feature | Traditional Cloud | Akash – Trial | Akash – Wallet |
|---|---|---|---|
| Cost | High, fixed | $100 free credits | Up to 85% cheaper, market-driven |
| KYC | Credit card + KYC | Credit card (KYC for verification) | No KYC, permissionless |
| Payment | Credit card monthly | Credit card (funds ACT) | Crypto (ACT; or AKT when CB) |
| Deployment Limit | None | 24 hours per deployment | None |

## Notes for analyst

- "ACT" appears multiple times — it's the **Akash Compute Token**, the USD-pegged stablecoin minted from burned AKT.
- The "circuit breaker" mention refers to **BME** (Burn-Mint Equilibrium) — when activated, users can fall back to paying with AKT directly.
- The "trial users with credit card no charge" model is what differentiates Akash from purely permissionless DePIN: it has a Web2-style onboarding ramp that competitors like Gonka don't have.
