# Management Diligence Request List — Kaspa + Igra Network

Date: 2026-05-27
Recipient (Igra Labs side): Pavel Emdin (CEO), contacts@igra.network; Igra Association (Zug, Switzerland)
Recipient (Kaspa side): Kaspa Ecosystem Foundation, support@kaspafoundation.org; Michael Sutton (core developer)
Audience for this document: phase-two diligence team

## Priority 0 — Required before any capital commitment

### Legal & corporate

1. **Igra Association articles of incorporation** and most recent registry filings (Switzerland - canton of Zug).
2. **Signer roster and multisig topology** for the Igra Association treasury and for the IGRA tokenomics allocations (especially the 20% Association tranche and the 22% Ecosystem Development & Grants tranche).
3. **DAO transition plan**: written timeline and triggers under which "phased DAO control" of the Ecosystem (22%), Community (25%), and Association (20%) allocations transfers to on-chain governance.
4. **Kaspa Ecosystem Foundation (KEF) and Kaspa Industrial Initiative Foundation (Kii)**: legal entity names, jurisdictions, articles, board composition, audited financials for the most recent two fiscal years, treasury composition.
5. **Disposition of original Polychain KAS allocation**: written and on-chain proof that the KAS used to repay the $8M Polychain investment has been dispersed and that no surviving allocation exists.

### Security

6. **Sigma Prime Igra Core Smart Contracts audit v2.1**: full PDF + scope description, severity distribution of findings, remediation evidence per finding, retest results.
7. **Audit coverage of the Kaspa L1 protocol** (rusty-kaspa, KIP-16, KIP-17, KIP-20, KIP-21): which firms have audited Kaspa L1 protocol code? Provide reports.
8. **Bridge security mode currently live on Igra mainnet** (community multisig vs FROST MPC vs ZK), signer roster for the active mode, time-lock parameters, and a roadmap to the next bridging tier.
9. **Incident history** for the Kaspa network, Kasplex, and Igra Network — exploits, near-misses, halts, reorgs > 6 blocks since mainnet.

### Toccata

10. **Toccata hard fork mainnet activation date hardcode** — once finalized after TN10 rehearsal, full activation block details and node upgrade window.
11. **TN10 rehearsal status report**: results of the test hard fork, defects discovered, and remediation.
12. **vProgs roadmap dependencies**: which Toccata-introduced primitives unblock future vProgs stages (3 → 4), and the expected timeline.

## Priority 1 — Required before sizing decision

### Tokenomics

13. **IGRA cap table / vesting tracker**: monthly minted/circulating supply chart, projected dilution per quarter under the 60-month linear vesting of Ecosystem and Community allocations.
14. **Treasury cash position** (in KAS, USDT, USDC, fiat) for KEF, Kaspa Kii, and Igra Association.
15. **Burn or sink mechanisms** for IGRA fee revenue: how does network usage translate to token demand?

### Operations

16. **Active developer headcount** (Kaspa core + Igra Labs + Kasplex), and which entity employs each — including funding source for unfunded core devs.
17. **Node operator distribution** for Igra Network: number of independent operators, geographic distribution, hardware specifications.
18. **Active validator/attester set on Igra**: count, stake distribution, slashing parameters.
19. **Customer / dApp pipeline** for Igra over the next 6 months — committed deployments, target TVL contribution.

### Exchange & liquidity

20. **Tier 1 exchange engagement status** — Coinbase, Binance, Kraken (verify Nov 2024 listing or refute). Listing-application correspondence summary.
21. **OTC desks and market makers** with active KAS / IGRA quotation; depth-of-book at the time of inquiry.
22. **Custody support**: which institutional custodians (Fireblocks, BitGo, Anchorage, Copper) currently support KAS and IGRA?

## Priority 2 — Useful for thesis refinement

### Strategic

23. **Sompolinsky's current capacity and intent** — academic vs core-dev allocation; how is his research funded?
24. **DAGLabs personnel migration to Igra** — how many ex-DAGLabs engineers are with Igra now vs other projects?
25. **Multi-VM atomic composability ("rooftop") roadmap** — what would Phase 2 of the Igra vision (Solana VM, Move, WASM interop) require from Kaspa's vProgs, and what is the realistic timeline?
26. **Competitive intelligence** — Kasplex, Igra, and direct competitors (Sui, Aptos, Monad). How does Igra position vs Block-STM-based PoS L1s on throughput and decentralization claims?
27. **Regulatory engagement** — any active dialogue with SEC, FINMA, MAS, or other authorities? IGRA token classification stance?
28. **Press / IR cadence** — quarterly disclosure plan for institutional investors?

## First management call - 10 questions

1. Confirm the Toccata mainnet activation date and the TN10 rehearsal status.
2. Walk us through the Sigma Prime audit: scope, the most material findings before remediation, and what was explicitly out of scope.
3. Which bridge security mode is currently live on Igra mainnet, and what's the timeline to the next tier?
4. Who employs Michael Sutton, Ori Newman, Hans Moog, Alexander Safstrom today, and is there a Kaspa Foundation budget to underwrite their work?
5. What is the legal jurisdiction and financial disclosure status of the Kaspa Ecosystem Foundation?
6. Have Polychain Capital and DAGLabs's residual KAS positions been fully dispersed? Can you point us to on-chain proof?
7. What is the Igra Association's multisig topology, and when does DAO control of the 47% "phased" allocations begin?
8. What is your engagement status with Coinbase and Binance, and can you confirm or refute the November 2024 Kraken KAS listing?
9. What is the projected IGRA dilution per quarter over the next 24 months under current vesting schedules?
10. What customer-level use cases for covenants and zk applications are concretely in development for the post-Toccata window?
