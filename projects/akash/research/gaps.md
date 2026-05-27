# Akash Network — Research Gap Tracker

Updated: 2026-05-26

## Corporate structure

- [x] What is the legal entity?
  → **Resolved.** **Overclock Labs** is the parent company; founded June 2015
  by Greg Osuri, Adam Bozanich, Boz Menzalji. (phemex-greg-osuri-profile.md)
- [ ] Where is Overclock Labs incorporated?
  → **Not resolved.** Public sources do not disclose Overclock Labs's
  jurisdiction of incorporation, registered office, or board composition.
  **Open.**
- [ ] Is there a separate Akash Foundation or DAO entity?
  → **Not resolved.** Governance is described as "community-owned" via AKT
  holders, but no separate foundation entity is named in the public record.

## Token (AKT) classification and economics

- [x] What is AKT's supply structure?
  → **Resolved.** Max supply 388.53M; circulating 294.15M (75.7%); ATH $8.08
  on April 6, 2021. (coinmarketcap-akt.md, akash-token-page.md)
- [x] What is the BME mechanism?
  → **Resolved.** Burn-Mint Equilibrium activated March 23, 2026 via
  Proposal 318. Every compute payment auto-buys AKT, burns it, mints ACT
  (USD-pegged non-transferable credit), settles with provider. Stable USD
  pricing for buyers, USD-stable settlements for providers, AKT demand from
  every transaction. (akash-q1-2026-report.md)
- [x] What was the prior tokenomic problem?
  → **Resolved.** Pre-BME, AEP-23 allowed USDC payments which decoupled AKT
  from network activity. Inflation was issued regardless of usage.
  (akash-q1-2026-report.md)
- [ ] How does AKT fare under US securities-law scrutiny?
  → **Partially resolved.** No outside-counsel opinion is public. AKT is
  listed on US exchanges (XT.com, Bithumb) but limited tier-1 US listings
  (no Coinbase / Kraken listed per the company token page). Greg Osuri has
  testified to Congress, indicating active engagement; the **Starbonds
  SEC-regulated bond framework** explicitly subjects Akash to SEC oversight.

## Network technology and architecture

- [x] What chain does Akash currently run on?
  → **Resolved.** Cosmos SDK Layer-1 chain, launched September 2020.
- [x] Is Akash migrating off Cosmos?
  → **Resolved (major).** **Yes.** Announced October 13, 2025 (per RootData
  via search results); AEP-79 Shared Security Migration. Open RFP to 15+
  blockchain foundations; **Solana** is "strong contender" per Osuri.
  **Target completion: December 30, 2026.** IBC compatibility maintained.
  (blockeden-cosmos-to-solana-migration.md, akash-2025-year-in-review.md)
- [ ] Has the new chain been selected publicly?
  → **Not resolved.** As of May 2026, the destination chain is still in
  public evaluation per Year-in-Review. Solana remains the leading candidate
  but not committed.
- [x] What was Mainnet 14?
  → **Resolved.** October 28, 2025 upgrade with JWT auth (AEP-63), IAVL
  storage optimization, Multi-Depositor Escrow (AEP-75), WASM smart
  contracts, Pyth oracle, bare metal foundation.
  (akash-2025-year-in-review.md)
- [x] What is the current architecture pipeline for 2026?
  → **Resolved.** AEP-29 Hardware Verification (Jan), AEP-49 KubeVirt VMs
  (Feb 19), AEP-65 Confidential Computing (March), Lease-to-Lease Private
  Networking (May 30), AEP-79 Shared Security Migration (Dec 30 2026).

## Team and operating-model

- [x] Who founded Akash and who runs it?
  → **Resolved (strong founder profile).** **Greg Osuri** (CEO/co-founder)
  + Adam Bozanich + Boz Menzalji. Osuri has 25-year open-source / cloud
  track record (IBM, Kaiser Permanente, AngelHack 200K+ devs). Osuri
  testified before US House Financial Services Committee on May 21, 2025;
  also expert witness for California AB 2658 first state blockchain law.
  (phemex-greg-osuri-profile.md, akash-2025-year-in-review.md)
- [ ] What is the Overclock Labs employee count and org chart?
  → **Not resolved.** No public disclosure.
- [ ] Is there a General Counsel / CCO / CISO at Overclock Labs?
  → **Not resolved.** No public disclosure.

## Traction and customers

- [x] What is the 2025 vs 2024 growth picture?
  → **Resolved.** Total USD Spent: $1.38M → $3.15M (+128%). Deployments
  +466%. Active deployments −69% (workload shift to short-duration agent
  inference). Daily fees ATH $13k+ (Feb 2025).
  (akash-2025-year-in-review.md)
- [x] What is Q1 2026 traction?
  → **Resolved.** $5M total compute spend ATH crossed in Q1. AkashML on
  OpenRouter processing 1.7B tokens/day. Homenode beta launched.
  (akash-q1-2026-report.md)
- [x] Are there named institutional customers?
  → **Resolved (strong).** **ElizaOS/ai16z (default inference for agent
  ecosystem), Envision Labs (dozens of A100/H100), EaveAI (X Spaces
  transcription), Venice.ai (Erik Voorhees), Codex Storage, Akave Network,
  Akash MCP Server (Anthropic Model Context Protocol), Morpheus Compute
  Network.** (akash-2025-year-in-review.md)
- [x] What's the GPU footprint?
  → **Resolved.** 1,000+ GPUs deployed (as of 2025 EOY year-in-review),
  60% utilization rate. Hardware mix: H100, H200, A100, L40S, Blackwell
  B200/B300 (rolling in late 2025-2026), RTX 4090/5090/Quadro 6000 Ada via
  Homenode.

## Institutional recognition

- [x] Has any institutional research firm flagged AKT?
  → **Resolved (strong).** **Grayscale Research named AKT a "Top 20 Asset
  with High Potential" for three consecutive quarters in 2025**.
  (akash-2025-year-in-review.md)
- [ ] Is there a Grayscale Trust for AKT (analogous to GTAO for Bittensor)?
  → **Not resolved.** Search did not surface a Grayscale Trust product
  specifically for AKT — different from the Grayscale Bittensor Trust on
  OTCQX.

## Market and price

- [x] What is the current market state?
  → **Resolved.** $0.8745 (May 26, 2026); mcap $257M; FDV $339.8M; 24h
  volume $20.6M; 75.7% circulating; CMC rank #127. **−89% from $8.08 ATH
  (April 2021)**. (coinmarketcap-akt.md)
- [x] What exchanges list AKT?
  → **Partially resolved.** Per token page, only **XT and Bithumb** are
  highlighted as primary CEX listings. Per Phemex profile, Phemex itself
  lists. Search results suggest broader CEX availability but Akash's own
  page does not heavily promote Coinbase/Binance/Kraken listings —
  **possible US listing gap** relative to TAO/IO/RNDR.
- [ ] What is the upcoming AKT unlock schedule?
  → **Not resolved.** Public token page says "What is the unlock schedule"
  exists as a FAQ but the FAQ body is not visible in the scrape.

## Starbonds / Starcluster regulatory structure

- [x] What are Starbonds?
  → **Resolved.** SEC-regulated investment instruments at $1,000/bond
  targeting up to $75M for ~7,200 NVIDIA GB200 GPUs. 5-year Nodekeeper
  contracts. Phase 2 home deployment.
  (blockeden-cosmos-to-solana-migration.md)
- [ ] Is the Starbonds Reg D or Reg A+ or similar?
  → **Not resolved.** "SEC-regulated" framing but specific exemption
  classification not in public sources reviewed.
- [ ] How much has actually been raised vs the $75M target?
  → **Not resolved.** Open.

## Open items summary

P0 (gating) unresolved items:
1. AEP-79 Shared Security Migration destination chain selection
2. Starbonds offering structure (Reg D vs Reg A+, capital raised to date)
3. Overclock Labs corporate structure (jurisdiction, board, financials)
4. Comprehensive smart-contract security audit history
5. AKT unlock schedule for remaining 94M tokens
6. US securities-law outside-counsel opinion on AKT

P1 (important) unresolved items:
7. Grayscale or other institutional product (Trust / ETF) status for AKT
8. Migration risk model: what if Solana experiences major outage during transition?
9. Independent verification of AkashML / OpenRouter traction claims
10. Top-100 validator concentration on the Akash PoS chain
11. Greg Osuri / Overclock Labs concentration of AKT holdings
12. Independent benchmarking of 70-85% AWS cost-savings claim
