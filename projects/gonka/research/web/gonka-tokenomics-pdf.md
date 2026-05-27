# Gonka — Tokenomics (PDF)

- **URL:** https://gonka.ai/tokenomics.pdf
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape with parsers=[pdf]
- **Dated on document:** 2025-07-31 ("Gonka: Designing a Compute-Native Decentralized Economy")
- **Reliability:** Company-generated (formal technical document)

## Headline facts

- **Total supply:** 1,000,000,000 GNK (1B), fixed cap
- **Allocation:**
  - **Incentives to Hosts: 800M (80%)**
    - Core incentive: **680M (68%)** — distributed via Bitcoin-style epoch rewards
    - Community Pool: **120M (12%)** — Host-governed
  - **Founders' allocation: 200M (20%)**

## Reward system

- **Bitcoin-style epoch rewards**
  - Initial reward: **323,000 GNK per epoch**
  - Decay: exponential, **-0.000475 per epoch** → halving ~every 1,460 epochs
    (~4 years)
  - Formula: `current_epoch_reward = initial_reward × exp(decay_rate × epochs_since_genesis)`
  - Distributed proportionally to each Host's Proof of Compute (PoC) weight
- **Work Coins** — fees paid by Developers for inference work, distributed by
  computational work completed
- **Utilization bonuses** — for MLNodes serving high-demand models
- **Model coverage incentives** — for Hosts supporting all governance-approved
  models

## Vesting

- All rewards (Epoch-minted + Work Coins) vest via personalized daily-release
  schedule.
- Daily oldest-entry release; no participant action required.
- Designed to suppress short-term speculation and align Hosts with long-term
  network growth.

## Collateral-backed influence

- **Base Weight Ratio: 20%** (default, governance-votable). 20% of compute-derived
  voting weight is automatically active.
- The remaining **80% (Collateral-Eligible Weight)** requires locking GNK as
  collateral.
- **Collateral Per Weight Unit:** governance parameter; default example **0.0625
  GNK per valid nonce** (computed from H100-class GPU yielding ~1600 nonces per
  epoch → 100 GNK locks the full Collateral-Eligible Weight).
- **Grace period:** First **180 epochs (~6 months)** new participants get full
  governance rights via PoC alone, no collateral required.
- Slashing parameters (defaults, governance-adjustable):
  - **Malicious behavior penalty: 20%**
  - **Poor performance penalty: 10%**
  - **Performance threshold: 5% missed work**
- **Withdrawal/unbonding period: 1 network epoch** (collateral remains slashable
  during this window).
- **Voting power is never derived from coin holdings alone** — locked collateral
  unlocks voting but does not provide it. Real influence requires continuous
  computational contribution.

## Dynamic pricing

- Per-model, EIP-1559-inspired, recalculated every block.
- **Stability zone: 40%–60% utilization** → no price change.
- Linear elasticity, max 2% change per block (elasticity 0.05).
- **Price floor: 1 nicoin per AI token.**
- **Grace period: first 90 epochs** → inference prices set to **zero** for
  experimentation and onboarding.

## Decentralized AI Training Fund

- **20% of all inference revenue** (fees + mining rewards) → fund training of
  new models.
- Pays for unit-of-compute used during training; some allocation may be granted
  via voting to specific training procedures.
- Mechanism's revenue-allocation percentage is **fixed until Year 5**; after
  Year 5, governance may adjust.
- Listed alongside two rejected alternatives: New Coin Issuance, Shareholding
  Structure.

## Risks (acknowledged by Gonka)

1. **Market volatility risk** — coin value fluctuations may erode reward value,
   deter long-term infra investment.
2. **Regulatory uncertainty risk** — explicit caveat:
   > "The model assumes compliance with decentralized network principles and
   > thus, no classification as a security in the United States and other
   > jurisdictions with similar approaches to crypto asset regulation."
   - GNK reward recipients may have tax obligations; Gonka does not provide tax
     advice; legal environment "rapidly evolving and highly unpredictable."
   - "There is no guarantee that regulators, now or in the future, will agree
     with the positions taken by the Gonka project regarding the classification,
     treatment, or operation of GNK coins."
3. **Technological & market competition risk** — centralized providers or
   competing decentralized networks may build more efficient systems.

## Quoted disclaimers

> All figures and growth projections are theoretical and should not be construed
> as investment promises.

## On-chain denomination

- Base unit on-chain: **`ngonka`**
- Display unit: `gonka` = **1,000,000,000 ngonka** (off-chain only; no automatic
  Cosmos SDK conversion).

## Notes for analyst

- The tokenomics PDF is dated **July 31, 2025** in its body text. This predates
  the May 2026 mainnet-live state shown on the homepage. Treat numeric
  parameters as **proposed defaults**; live network parameters can be verified
  against the on-chain governance endpoint at
  `http://node2.gonka.ai:8000/v1/governance/pricing`.
