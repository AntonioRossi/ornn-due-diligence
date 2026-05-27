# Management diligence request list — Overclock Labs / Akash Network (AKT)

Tailored to **Akash Network / Overclock Labs** as of **May 26, 2026** and based on public information only. The public record — 5.5 years of continuous mainnet operation since September 2020, Grayscale "Top 20 Asset" designation for three consecutive quarters in 2025, Greg Osuri's congressional testimony and California state legislature expert witness work, demonstrated commercial adoption with named customers (ElizaOS, Venice.ai, Envision Labs, Morpheus, Codex, Akave), Burn-Mint Equilibrium activated March 23, 2026, Q1 2026 $5M compute spend ATH crossed, AkashML on OpenRouter at 1.7B tokens/day, and 75.7% of max supply already circulating — is **substantial and warrants serious phase-two diligence**. The gating issues are: **(1) Overclock Labs corporate-structure disclosure (jurisdiction, board, employee count, audited financials); (2) the AEP-79 Shared Security Migration off Cosmos SDK targeted for December 30, 2026 (destination chain selection, execution plan, contingency); (3) Starbonds SEC-regulated $75M bond framework status and ongoing SEC oversight implications; (4) comprehensive smart-contract security audit history (BME contracts, Cosmos chain, AkashML stack); (5) US tier-1 exchange listing posture (Coinbase / Binance / Kraken gap relative to TAO/IO); (6) Greg Osuri / Overclock Labs AKT holdings and concentration disclosure.**

## Management diligence request list

**Instruction to Overclock Labs:** please provide the following in a dataroom, with one folder owner per section, latest revision date on each file, and a short note indicating whether the file is final, draft, or board-only. For items requiring on-chain data, read-only Cosmos chain or stats.akash.network query access is acceptable in lieu of a static export.

**Diligence sequencing:** populate all **P0 / gating** items first. The Q4 2026 AEP-79 migration deadline materially affects timing — pre-migration capital deployment carries different risk than post-migration. We recommend phase-two diligence completion before the BME first-anniversary observation window (March 2027).

### A. Corporate, legal, and regulatory (P0 / gating)

1. **Overclock Labs legal entity disclosure**

   * Confirm Overclock Labs's legal form (LLC, Inc., other), jurisdiction of incorporation (US Delaware? Wyoming? Cayman? other?), registered office, date of incorporation (verify June 2015), and registered representatives.
   * Provide the board of directors / managers with named members, biographies, related-party disclosures, and tenure.
   * Confirm subsidiaries, affiliated entities, or foundations connected to Akash Network or the AKT token (any Akash Foundation, Akash DAO LLC, etc.).
   * Provide audited (or reviewed if audit not yet performed) financial statements for the most recent two fiscal years.
   * Disclose the legal entity that holds the **akash.network domain**, IP for the Cosmos SDK chain code, and the upcoming Solana-migration codebase.

2. **AKT classification under US securities law**

   * Provide the outside-counsel opinion(s) addressing AKT's classification under the Securities Act of 1933 and the Securities Exchange Act of 1934, with explicit treatment of:
     - (a) AKT emissions to validators / stakers (PoS rewards)
     - (b) AKT purchased by US persons on listed exchanges
     - (c) ACT (USD-pegged compute credit) minting and burning
     - (d) The BME (Burn-Mint Equilibrium) mechanism's potential impact on AKT classification
     - (e) Greg Osuri's congressional testimony and any subsequent SEC/CFTC engagement
   * Confirm whether Overclock Labs has received any SEC, CFTC, FinCEN, OFAC, or state-AG inquiries, subpoenas, no-action requests, or Wells notices.

3. **Starbonds offering structure**

   * Provide the **Starbonds offering memorandum** or equivalent SEC filing (Reg D, Reg A+, or other exemption).
   * Total capital raised to date against the $75M target.
   * Investor base composition (accredited vs retail vs institutional).
   * Use-of-proceeds detail (~7,200 NVIDIA GB200 GPUs allocation, Nodekeeper selection, deployment timeline).
   * Disclose the legal entity that issued the bonds and the ongoing SEC reporting obligations.
   * Provide the Starbonds-to-Nodekeeper-to-bondholder revenue split mechanics with worked examples at various GPU utilization rates.

4. **Non-US regulatory analysis**

   * Outside-counsel memos for: EU (MiCA), UK (FCA), Singapore (MAS), ADGM (FSRA), DIFC, Hong Kong (SFC), Switzerland (FINMA), Canada (CSA), Japan (FSA), Australia (ASIC).
   * Specifically: MiCA classification of AKT and ACT; FCA "qualifying cryptoasset" framework; how the BME's USD-pegging affects EU e-money classification.

5. **Litigation, enforcement, and regulatory inquiry history**

   * For Overclock Labs and named officers: all current and prior litigation, arbitration, enforcement actions, regulatory inquiries (formal or informal), subpoenas, government investigations, and threatened or actual cease-and-desist letters.

### B. AEP-79 Shared Security Migration (P0 / gating)

6. **Destination chain selection and rationale**

   * Current status of the 15+ blockchain foundation RFP responses.
   * Top-3 candidate chains with documented technical and economic comparison.
   * Greg Osuri's public commentary identified Solana as "strong contender" — confirm whether Solana remains the leading candidate.
   * Decision timeline and any conditions that would change the selection.

7. **Migration execution plan**

   * Detailed week-by-week migration schedule from current state to December 30, 2026 completion target.
   * Validator transition plan (current Cosmos validators → destination chain).
   * Customer-deployment continuity plan during migration (active lease handling, payment continuity).
   * AKT token migration mechanics (1:1 wrap? swap? snapshot?).
   * IBC compatibility implementation (native IBC on destination, or bridge-based).

8. **Contingency planning**

   * Solana outage scenario plan: what happens to active leases and supplier slashing during chain-level outages.
   * What if Q4 2026 migration deadline slips by 1, 3, 6 months — communication plan and treasury reserves.
   * Plan B if Solana is ultimately not selected.

### C. Smart-contract security and audits (P0 / gating)

9. **Audit history and current state**

   * Provide all completed third-party audits (Trail of Bits, Halborn, Quantstamp, OtterSec, NCC Group, ConsenSys Diligence, OpenZeppelin) for:
     - Akash Cosmos SDK chain (the full 5+ years of validator-state history)
     - The BME smart contracts activated March 23, 2026 (Proposal 318)
     - AkashML inference layer
     - Akash Console / managed wallet infrastructure
     - The forthcoming destination-chain codebase
   * For each audit: scope, methodology, severity-tagged findings, resolution status, acknowledged-but-unresolved findings.
   * Live Bug Bounty program (Immunefi, HackenProof) — scope, paid-bounty history.

10. **Mainnet 14 review**

    * Engineering changelogs for the Oct 28, 2025 upgrade.
    * Post-upgrade incident history.
    * AEP-63 JWT Authentication implementation review.
    * AEP-75 Multi-Depositor Escrow security model.

### D. Commercial and customer (P0 / gating)

11. **Named customer reference calls**

    * Direct reference contacts (with permission) for at least:
      - **Venice.ai** (Erik Voorhees) — most strategic relationship
      - **ElizaOS / ai16z** — default agent inference
      - **Envision Labs** — A100/H100 cluster client
      - **Morpheus Compute Network** — Smart Agent Builders integration
      - **Codex Storage** — Web3 decentralized storage
    * Per customer: monthly GPU hours or inference token volume; monthly USD spend; contract term; specific hardware mix.

12. **AkashML on OpenRouter substantiation**

    * Verify the 1.7B-tokens-per-day claim with OpenRouter-side data or direct router-volume audit.
    * Cloudflare comparison methodology.
    * Customer breakdown by model (Llama 3.3-70B, DeepSeek V3, Qwen 2.5-30B, etc.) and by enterprise vs retail traffic.

13. **Network economics**

    * Aggregate quarterly USD-equivalent revenue from compute leases.
    * Provider economics: average revenue per provider, top-10 provider concentration, GPU class mix.
    * Customer concentration: top-10 customers as % of revenue.
    * 70-85% AWS cost-savings claim — independent benchmarking or methodology.

### E. AKT supply and holder concentration (P0)

14. **AKT distribution audit**

    * On-chain holder distribution: top-10, top-100, top-1000 holders.
    * Overclock Labs / Greg Osuri / co-founders' AKT holdings and any lockup status.
    * Forthcoming unlock schedule for the remaining ~94M AKT (from 294M circulating to 388M max supply).
    * Validator stake concentration on the Cosmos chain.

15. **BME live performance audit**

    * Since March 23, 2026 activation: cumulative AKT burned via BME; cumulative ACT minted; net AKT supply effect.
    * BME's actual deflationary impact vs the original modeled projections.
    * Any unexpected mechanism behavior, edge-case fixes, or governance proposals adjusting parameters.

16. **AKT listing posture**

    * Confirm current tier-1 CEX listings (Coinbase, Binance, Kraken, OKX status).
    * Active listing applications or pending discussions.
    * Geographic restrictions imposed by any listing exchange (particularly for US persons).

### F. Greg Osuri and Overclock Labs people-risk (P0)

17. **Organizational structure**

    * Full Overclock Labs org chart with named officers: CEO, CFO, CTO, COO, General Counsel, Chief Compliance Officer, Head of Security / CISO, Head of Engineering.
    * Total Overclock Labs headcount and breakdown by function.
    * Greg Osuri's time-allocation disclosure: % of working time devoted to Overclock Labs / Akash Network vs any other ventures.

18. **Greg Osuri founder concentration**

    * Osuri's AKT holdings and any liquidity events to date.
    * Any retained founder rights, board controls, or governance reserves.
    * Succession planning if Osuri were unable to continue as CEO.

19. **Co-founder current status**

    * **Adam Bozanich** and **Boz Menzalji** — current roles, AKT holdings, ongoing operational involvement.
    * Any co-founder disputes or material disagreements with Osuri on strategic direction.

### G. Roadmap and product (P1)

20. **Pre-migration roadmap items**

    * **Lease-to-Lease Private Networking** launch on May 30, 2026 — current status.
    * **AEP-29 Hardware Verification (TEE)** — Jan 2026 — completion status.
    * **AEP-49 KubeVirt VMs** — Feb 19, 2026 — production deployment status.
    * **AEP-65 Confidential Computing** — March 2026 — current state.
    * **NVIDIA Blackwell B200/B300 integration** — supply chain status and provider count.

21. **Homenode beta**

    * Current registered hardware (RTX 4090, 5090, Quadro 6000 Ada count).
    * Geographic distribution.
    * Earnings per Homenode operator at current utilization.
    * Expansion plans for additional GPU classes.

22. **Starcluster Phase 2 (consumer-edge)**

    * Plan timeline for the "22M households" target.
    * Pilot results from current Starcluster deployments.
    * Capital requirements for Phase 2 vs Phase 1.

### H. Tax, accounting, and compliance (P1)

23. **Tax characterization of AKT/ACT**

    * Outside-counsel memos for US, UK, EU, Switzerland.
    * Provider tax reporting (1099 / W-8BEN equivalents).
    * Treatment of BME burn-mint events for AKT holders.

24. **AML/KYC posture**

    * KYC requirements for providers above stake/revenue thresholds.
    * AML/CFT policy and OFAC sanctions-screening for Akash Console managed-wallet users.

### First-call questions

The following are the questions to be asked on the first management call. Each is designed to obtain a verbal commitment or an immediate document pointer.

1. **Walk us through Overclock Labs: jurisdiction, board, employee count, and current audited financial status.**
2. **Which destination chain is most likely to win the AEP-79 RFP, and what is the current month-by-month migration plan to December 30, 2026?**
3. **What is the current Starbonds capital raised against the $75M target, and what SEC exemption is the offering structured under?**
4. **Where are the tier-1 third-party audits of the Cosmos chain, BME contracts, and AkashML?**
5. **Can Venice.ai (Erik Voorhees), Envision Labs, ai16z, Morpheus, and Codex all provide reference calls in the next 30 days with disclosed monthly compute spend?**
6. **Has the SEC, CFTC, or any state-AG contacted Overclock Labs or its officers regarding AKT, BME, or Starbonds?**
7. **What is Greg Osuri's current AKT position, and is any of it subject to lockup or vesting?**
8. **Why is AKT primarily listed on XT and Bithumb rather than Coinbase / Binance / Kraken — is there a Coinbase listing in active discussion?**
9. **Verify the 1.7B-tokens/day AkashML-on-OpenRouter claim — what is the methodology and can OpenRouter confirm directly?**
10. **What is the highest-probability scenario for the AEP-79 migration to fail, slip, or require pivot — and what is the contingency?**
