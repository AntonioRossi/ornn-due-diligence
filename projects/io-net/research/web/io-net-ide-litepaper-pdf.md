# io.net — Incentive Dynamic Engine (IDE) Litepaper PDF

- **URL:** https://io.net/documents/ionet_Tokenomics_Litepaper.pdf
- **Title:** "The Incentive Dynamic Engine (IDE): Building a sustainable token economy for io.net"
- **Pages:** 8
- **Fetched:** 2026-05-26 (via subagent due to PDF parsing)
- **Reliability:** Company-generated (formal tokenomic document)

## ⚠️ Document-level red flags

- No date or version in body
- **No legal entity named** anywhere in the litepaper
- **No allocation breakdown, no total supply cap, no vesting schedule disclosed**
- **No securities disclaimers, no forward-looking-statements legend**
- No smart-contract audit references — only CryptoEcon Lab (CEL) economic simulation
- No investor / partner mentions
- No board, no team, no signatory

## IDE mechanism

- **Reward Vault (Y₁)** — funded by emissions; primary reserve buffer
- **Fee Vault (Y₂)** — funded by client payments in USD; secondary reserve
- **Sustainability ratio: ψ = R / H**
  - R = revenue (USD-converted)
  - H = hourly payout target = N × (ROI + Z)
  - N = active GPUs, ROI = target return per supplier, Z = operational costs
- Three regime states:
  - **Surplus** (ψ > 1): excess funds — at least 50% of remaining revenue burned in $IO
  - **Equilibrium** (ψ = 1): no inflation, system self-sustains
  - **Deficit** (ψ < 1): temporary supply expansion to maintain stable USD supplier payouts

## Supply / burn facts (verbatim)

> Currently, there are 300M $IO tokens in emissions supply, minus what was
> already emitted, for the old incentive model.

> One goal of the IDE is to burn at least 50% of these over time.

> After GPU suppliers get paid, at least 50% of the remaining revenue in the
> form of $IO tokens gets permanently burned.

## CryptoEcon Lab (CEL) third-party stress tests

- 55% demand drop: supplier ROI remained stable
- 50% token price crash: IDE compensated by issuing tokens while maintaining
  USD payouts

## Governance (verbatim)

> Through these mechanisms, the IDE transforms tokenomics management into a
> dynamic, data-driven governance process, ensuring resilience through
> constant oversight.

- Four KPIs tracked: sustainability ratio, reserve runway, Reward Vault
  balance, total token burn volume
- **No on-chain DAO, no token-voting, no council, no multisig described**
- Governance is "technical/data-driven oversight"

## Acknowledged risks (verbatim)

> While the IDE represents a major step forward in tokenomic design, it is not
> a 'set-and-forget' system. Its strength lies in its ability to adapt
> dynamically, but this adaptability depends on continuous monitoring and
> technical governance.

> Nevertheless, risks remain. One such risk is that in order to attract
> high-quality, long-term partners and suppliers they will receive stable
> USD-equivalent income. This could lead suppliers to become detached from
> the long-term value of the $IO token, but this is viewed as a calculated
> risk needed to protect them from potential market downturns.

> Vault drift introduces an additional consideration. If emissions are set too
> low relative to fee inflows, reserves may gradually decrease over time even
> under normal operating conditions.

## Notable quotes (verbatim)

> Most networks bootstrap supply by issuing tokens at a fixed rate, rewarding
> early adopters through inflationary emissions. This works, until the market
> turns.

> Unlike many projects that rely on hype and speculation, the IDE is a
> demand-driven model. The token's value comes from actual usage from people
> paying to use GPU computing power.

> io.net evolves beyond a decentralized compute provider and becomes its own
> self-sustaining, on-chain economy, seamlessly integrating real-world utility
> for humans and agents.

## Roadmap

- December 2025: Initial litepaper released for community review
- 2026: Transition phase
- **Q2 2026: IDE fully implemented**
- Future: Agent Cloud integration for autonomous-agent compute economy

## Notes for analyst

- The IDE design is **structurally sophisticated** — the Y₁/Y₂ dual-vault
  model with USD-stable supplier payouts is the most ambitious tokenomic
  redesign in the AI-DePIN sector reviewed by this firm.
- However: as of late May 2026, it is **not yet implemented**. The investment
  thesis is critically dependent on Q2 2026 implementation arriving on
  schedule and on actual revenue supporting the burn mechanism.
- The **suppliers-detached-from-token-value risk** acknowledged in the
  litepaper is significant: if suppliers earn USD-stable payouts, their
  alignment with $IO token holders weakens — token holders bear the
  volatility while suppliers do not.
- The 300M $IO emissions pool with 50% burn target = potential 150M $IO
  removed from circulation (matching the December 2025 launch announcement).
- The absence of named investors, legal entity, or auditors in a tokenomic
  litepaper is **below institutional disclosure norms** for a $60M+ market-cap
  asset listed on Coinbase, Binance, and other tier-1 exchanges.
