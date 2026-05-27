# Bittensor — Whitepaper ("Bittensor: A Peer-to-Peer Intelligence Market")

- **URL:** https://bittensor.com/whitepaper (PDF mirror at drive.google.com/file/d/1VnsobL6lIAAqcA1_Tbm8AYIQscfJV4KU)
- **Sole listed author:** **Yuma Rao**
- **No date, version, or corporate entity in the document body**
- **Fetched:** 2026-05-26 (via subagent due to PDF size)
- **Reliability:** Company-affiliated (pseudonymous academic-style paper)

## Document-level red flags

- Single anonymous author ("Yuma Rao" — name now reused for the Yuma Group
  institutional services arm)
- No date, no version, no Opentensor Foundation reference in body
- No legal disclaimers, no securities language, no jurisdictional notice
- No audit references
- No investor or partner mentions
- Pure academic/technical paper — does **not** specify TAO supply, halving,
  emissions, dTAO, or governance

## Technical contribution

- **Peer-to-peer intelligence market** based on n stake-weighted ML peers
  `F = f_0, ..., f_n` with stake `S`
- Peers score each other via mutual outputs, build weight matrix W
- Ranking: `R = Wᵀ·S` (stake-weighted)
- Consensus sigmoid: `C = σ(ρ(TᵀS − κ))` with ρ=10, κ=0.5
- Incentive: `I = R · C`
- **Bonds** (speculation layer): `bᵢⱼ` = peer i's bond in peer j; bond accrual
  `ΔB = W·S`; redistribution `ΔS = 0.5·BᵀI + 0.5·I`
- Stake update: `S_{t+1} = S_t + τΔS` with inflation rate `τ`

## Collusion analysis

> The solution is an incentive mechanism that maximally rewards honestly
> selected weights, making the system resistant to collusion of up to 50
> percent of the network weight.

- Sub-50% cabal stake decays via super-linear incentive gradient `δI/δS = 5/2`

## Notable verbatim quotes

> Standalone engineers cannot directly monetize their work and what results is
> centralization where a small set of large corporations control access to the
> best artificial intelligence (OpenAI [2020]).

> A new commodity needs a new type of market. This paper suggests a framework
> in which machine intelligence is measured by other intelligence systems.

> Like market based speculation on traditional equities, the peers that have
> accumulated bonds in peers that others will later value attain increased
> inflation themselves.

## What is NOT in the whitepaper

- TAO ticker, 21M supply, halving cadence — these come from later docs
- dTAO / alpha tokens — not in this paper
- Subnet architecture — paper is pre-subnet; this is the precursor incentive
  math, not the live network
- Opentensor Foundation — never named
- Yuma Consensus by name — the consensus math is there but not the brand
- Validator vs miner split — single "peer" abstraction
- Legal disclaimers, securities-law statements, jurisdictional notices — none
- Audit references — none

## References cited (selected)

Schwartz et al. [2019], OpenAI [2020], Devlin et al. [2019], Radford et al.
[2019], Chollet [2019], Hinton et al. [2015], Shazeer et al. [2017], Ryabinin
and Gusev [2020], Sanh et al. [2020], LeCun et al. [1989], Lample and Conneau
[2019].

## Notes for analyst

- The whitepaper is **academic mechanism design**, not investor disclosure.
  Like Gonka's whitepaper, it is signed by a single (here pseudonymous)
  individual with no entity attribution.
- "Yuma Rao" is widely understood in the community to be a pseudonym for Jacob
  Steeves (Const) and/or the early Opentensor team. There is no formal
  attribution.
- The bonds mechanism (in-network speculation on peer value) is the
  conceptual antecedent of dTAO, but the full dTAO model with subnet alpha
  tokens is a 2024-2025 evolution layered on top.
- This is consistent with the broader pattern in decentralized-AI tokens:
  technical whitepapers omit the legal/securities framing entirely, even when
  the live protocol issues tradable, listed tokens with deflationary supply
  schedules.
