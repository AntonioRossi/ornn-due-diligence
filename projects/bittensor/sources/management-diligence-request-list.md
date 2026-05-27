# Management diligence request list — Opentensor Foundation / Bittensor (TAO)

Tailored to **Bittensor / Opentensor Foundation (OTF)** as of **May 26, 2026** and based on public information only. The public record — a continuously upgraded Substrate mainnet since March 2023, 64 active subnets, ~65% staking participation, Coinbase listing, Grayscale OTCQX listing (GTAO), pending Spot Bittensor ETF S-1, and the first Bitcoin-style halving completed December 15, 2025 — is sufficient to justify deeper diligence on what is arguably the most mature decentralized-AI-compute network in the public market. It is not sufficient to underwrite a TAO position, a treasury allocation, an OTC purchase, an ETF subscription, or a strategic infrastructure investment in any subnet ecosystem. The gating issues are: **(1) validator and stake concentration documentation and remediation roadmap, (2) US securities-law posture and the active Grayscale Spot ETF SEC process, (3) the absent comprehensive third-party audit of Subtensor, the Yuma Consensus pallet, and the dTAO mechanism, (4) Opentensor Foundation corporate transparency (board, employees, financials, FINMA correspondence), (5) the founder-dispute and "centralized control" allegations surfaced in community sources, and (6) operational durability evidence for the November 2025 Taoflow and February 2026 PoC v2 redesigns through a sustained downturn.**

## Management diligence request list

**Instruction to Opentensor Foundation:** please provide the following in a dataroom, with one folder owner per section, latest revision date on each file, and a short note indicating whether the file is final, draft, or board-only. Where a document does not exist, please say so explicitly rather than substituting a marketing-page or blog-post equivalent. For items requiring on-chain data, read-only query access to a dedicated archive node is acceptable in lieu of a static export.

**Diligence sequencing:** populate all **P0 / gating** items first. No TAO purchase, equity-equivalent investment in OTF or any Bittensor-ecosystem entity, treasury allocation, ETF subscription, or strategic partnership should be considered until the P0 package is substantially complete, management interviews are held, and an independent on-chain audit of validator concentration and treasury flows is finished.

### A. Corporate, legal, and regulatory (P0 / gating)

1. **Opentensor Foundation legal entity disclosure**

   * Confirm OTF's Swiss legal form (Verein? Stiftung? AG?), Swiss canton of incorporation, formation date, registered office, and registered representatives.
   * Provide the full board of directors / foundation council, with each member's name, title, biography, related-party affiliations, and tenure.
   * Provide the published Articles of Association (Statuten) and any internal Reglemente governing decision-making.
   * Provide audited financial statements (or reviewed if audit not yet performed) for the most recent three fiscal years, with notes covering TAO holdings, fiat treasury, payroll, third-party grants, and any related-party transactions with subnet owners or validators.
   * Confirm OTF's stated FINMA classification (FinSA Article 3 / Article 11 token classification) and provide any correspondence with FINMA, including no-action letters, ruling requests, or rejection letters.
   * Confirm OTF's tax residency, VAT registration, and treatment of TAO emissions for OTF-controlled wallets.

2. **TAO classification under US securities laws**

   * Provide the outside-counsel opinion addressing TAO's classification under the Securities Act of 1933 and the Securities Exchange Act of 1934, with explicit treatment of each of the following separately:
     - (a) The TAO emission to **miners** (Yuma Consensus output, 41% of subnet emissions)
     - (b) The TAO emission to **validators** (41% of subnet emissions, weighted by stake)
     - (c) The TAO emission to **delegated stakers** via validator proxies (the staking arrangement that most closely mirrors prior SEC enforcement targets)
     - (d) The TAO emission to **subnet owners** (18% of subnet emissions)
     - (e) Subnet **alpha tokens** (dTAO mechanism) — each alpha token's separate Howey analysis
   * Confirm whether OTF or affiliated entities have received any SEC, CFTC, FinCEN, OFAC, or state-AG inquiries, subpoenas, no-action requests, or Wells notices related to TAO or Bittensor.
   * Provide the status, communications, and expected timeline of the **Grayscale Spot Bittensor ETF S-1 filing** (December 30, 2025). Specifically: which OTF representatives, if any, are participating in the SEC review process; what concessions or conditions the SEC has indicated may be required; and what contingency plan applies if the ETF is rejected or restricted.
   * Provide the REX-Osprey ETF filing context — was OTF a party to that filing's representations, and what is the legal status of the "no entity owns or operates the Bittensor Network" statement under Swiss and US law?

3. **Non-US securities and crypto-asset analysis**

   * Outside-counsel memos for the following jurisdictions: **EU (MiCA)**, **UK (FCA)**, **Singapore (MAS)**, **ADGM (FSRA)**, **DIFC**, **Hong Kong (SFC)**, **Canada (CSA)**, **Japan (FSA)**, and **Australia (ASIC)**.
   * Specifically address: (i) MiCA classification of TAO and subnet alpha tokens (utility, asset-referenced, e-money, or other); (ii) whether the Triumvirate-Senate governance structure constitutes a "qualifying issuer" under MiCA Article 16; (iii) FCA's "qualifying cryptoasset" framework as applied to TAO staking rewards.
   * Disclose any geo-blocking or marketing restrictions OTF has implemented, and any jurisdictional advisories OTF has received from third parties.

4. **Subnet-owner registration and fee policies**

   * Full historical record of subnet registration fees, including peak fees in 2025 (Yellow research cites "briefly exceeded 100 TAO" — confirm).
   * The economic basis for the 18% subnet-owner emission cut, with policy rationale and any plans to revise it.
   * Identify any "house-controlled" subnets — subnets that are owned, operated, or majority-validator-staked by OTF or OTF-affiliated entities, with full transparency on overlapping control.

5. **Litigation, enforcement, and regulatory inquiry history**

   * Full disclosure for OTF, named officers, and the Bittensor Network: current and prior litigation, arbitration, enforcement actions, regulatory inquiries (formal or informal), subpoenas, government investigations, and threatened or actual cease-and-desist letters.
   * Specific clarification on the **Covenant AI** founder's public allegation of "centralized control" against Jacob Steeves [IQ.wiki entry], including OTF's official position and any responsive filings.
   * Specific clarification on the **"TAO Saga"** founder dispute referenced in third-party press (Blocmates), including the identity, role, and current status of the "Sam" referenced and any settlement or governance changes resulting from the dispute.

### B. Governance, decentralization, and Foundation control (P0 / gating)

6. **Triumvirate composition and rotation**

   * Full Triumvirate membership history since governance launch, with each member's name, role at OTF, tenure on Triumvirate, voting record, and disclosed conflicts.
   * The criteria and process by which Triumvirate seats are filled and replaced.
   * Whether the Triumvirate has any veto authority beyond its proposal-creation and proposal-closure roles.

7. **Senate composition, concentration, and voting record**

   * Full Senate composition since governance launch, with each delegate hotkey's identity, controlled stake (TAO + alpha), and voting record.
   * Quarterly Senate-vote-participation rate (% of total PoC-stake-weight participating in votes).
   * Top-10 voter concentration as a share of total Senate voting power, with trend data over the past 12 months.
   * Any proposals that the Senate **rejected**, the rationale, and whether OTF has publicly disagreed with any Senate decision.

8. **Validator concentration on-chain analysis**

   * Read-only access to a Taostats-equivalent dataset showing:
     - Top 10, top 50, and top 100 validators by total stake (TAO + alpha)
     - Geographic distribution of top 100 validators (inferred or self-attested)
     - The overlap between subnet owners and top validators (which validators run subnets they also score)
     - The overlap between OTF-affiliated entities and the top 100 validators
   * The current top 64 validators on the root network — and the documented mechanism by which they collectively control 100% of subnet emission weights.

9. **Foundation TAO and alpha-token holdings**

   * Complete inventory of OTF-controlled wallets and smart contracts on Subtensor, with current TAO balance, alpha-token balances, and historical transfer records.
   * Disclosure of any treasury TAO that has been sold, swapped, or transferred to OTF officers, affiliates, or third parties since genesis.
   * Vesting / lock-up schedules, if any, for OTF-held TAO and for any TAO allocated to founders, early team, or early investors.

### C. Technology, security, and operations (P0 / gating)

10. **Comprehensive code audit package**

    * Provide all completed third-party code audits (Trail of Bits, Halborn, Quantstamp, OpenZeppelin, Chainsulting, NCC Group, ToB, ConsenSys Diligence, or equivalent) for: **Subtensor** runtime; **Yuma Consensus pallet**; the **dTAO** subnet-emission mechanism; the **EVM bridge** (bridge.bittensor.com); the **Bittensor SDK**; the **CLI tools**.
    * For each audit: scope, methodology, findings (Critical / Major / Medium / Minor / Informational), resolution status, and any acknowledged-but-unresolved findings with mitigation roadmaps.
    * If no comprehensive audit exists for a module, confirm explicitly and provide the planned audit timeline and named firm.
    * Specific clarification on Messari's December 16, 2024 statement that "Bittensor project has no publicly disclosed audits" — what has changed since then, and what is the schedule announced by OTF on July 3, 2024?

11. **2024 PyPi Package Manager breach — full post-mortem**

    * Root-cause analysis, indicators of compromise, the compromised package version(s), the attack vector (supply-chain vs. credential theft vs. other), and the timeline from discovery to mitigation.
    * Recovery: which user accounts were affected, what was the total TAO loss (Messari cites 32,000+ TAO ≈ $9M at today's price), and how were affected users compensated (if at all).
    * Remediation: what dependency-management, code-signing, and CI/CD security controls were instituted following the breach; what package-manifest verification is in place today.
    * Confirm whether the **$25M Nexus Mutual smart-contract insurance** cover (February 2025) has been claimed against any incident, and what the current coverage scope and exclusions are.

12. **November 2025 Taoflow transition documentation**

    * Full technical reference for the flow-based emissions transition, including: the 86.8-day EMA window with 30-day half-life rationale, the FlowCutoff parameter, the power normalization (p=1) decision, and the rationale for keeping de-registration price-based while making emissions flow-based.
    * Stress-test results for the Taoflow model under simulated sustained negative-net-flow scenarios. How would the model behave if 10 subnets simultaneously experienced sustained 30%+ net outflows for 60 days?
    * Documented threat model for the "TAO Treasury" gaming pattern that the Taoflow model was designed to prevent. What evidence is there that the pattern is no longer exploitable post-transition?

13. **February 2026 PoC v2 mainnet upgrade (v0.2.9 → Proof of Contribution v2)**

    * Written engineering changelog reconciling Yuma Consensus pre-PoC-v2 with the live PoC v2 mechanism.
    * Documented changes to validator-scoring logic, slashing parameters, and any consensus thresholds.
    * Live statistics on PoC v2 spot-check rate, slashing events to date by category, and any executor-cheating detections since the upgrade.

14. **Subnet quality control mechanisms**

    * Documentation of how OTF or governance handles subnets with documented Goodhart's Law gaming (Yellow research cites "observed empirically on several smaller subnets").
    * The de-registration mechanism for subnets that produce no real consumer value despite collecting emissions.
    * Specific subnet remediation cases since subnet launch in October 2023.

15. **dTAO subnet-alpha-token economic analysis**

    * The mathematical model showing how subnet alpha tokens accrue value, how TAO is extracted from subnet AMMs by stakers, and what prevents the "pump-extract" pattern described in third-party research [Yellow.com, April 2026].
    * Historical analysis of subnet alpha token price-discovery integrity since dTAO activation, with attention to AMM-liquidity manipulation events.
    * Confirm whether OTF or affiliated entities have purchased subnet alpha tokens in any subnet, and the rationale.

### D. Commercial and customer (P0 / gating)

16. **Named institutional consumer references**

    * At least **five** named institutional consumers using Bittensor for production inference or training, with: identity, monthly inference token volume / training compute consumed, monthly USD-equivalent spend, subnet mix, contract term, and written reference contact.
    * **Corcel API** specifics: signed verification that 50M+ inference calls (Yellow research figure) is correct, the breakdown by subnet and customer, and the operational relationship between Corcel and OTF.
    * **Macrocosmos** specifics: documented external downloads of the Subnet 9 LLM weights from HuggingFace, named third-party researchers using the weights, and any commercial agreements between Macrocosmos and OTF.

17. **External revenue substantiation**

    * Aggregate TAO inflows to subnets from genuine non-mining consumers (developers paying for inference) vs. internal emission farming, broken out by quarter for the past 8 quarters.
    * Identify the top 10 subnets by external customer revenue, with the absolute and percentage contribution of each.

### E. Token holdings, market structure, and supply (P0)

18. **Stakers and delegators concentration**

    * On-chain distribution of staked TAO across delegators, with top-10 / top-100 delegator concentration metrics over time.
    * Whether any institutional stakers (named CEX delegations such as Coinbase, Binance, Kraken; Grayscale Bittensor Trust; or institutional custodians) hold dominant delegation positions.
    * The **Grayscale Bittensor Trust (GTAO)** TAO holdings and staking arrangements — does the Trust stake on behalf of GTAO holders, and if so, with which validators?

19. **TAO supply audit**

    * Live TAO supply audit reconciling actual on-chain emission since genesis with the documented Bitcoin-style halving schedule.
    * The 546,113 TAO migrated from Kusanagi → Nakamoto (Nov 2021) — full per-wallet migration audit.
    * Burn history: how much TAO has been burned to date (subnet registration fees recycle), and the total cumulative burn relative to total emission.

20. **CEX listing dynamics**

    * The full listing-application package, due-diligence responses, and any conditions or restrictions imposed by Coinbase (Feb 2025), Binance, Kraken, MEXC, Bitget, Gate.io, KuCoin, and other CEXs.
    * Any pending listing applications or de-listing notices.
    * Geographic restrictions imposed by any listing exchange on TAO trading (particularly for US persons).

### F. Foundation governance and people (P0)

21. **OTF organizational structure**

    * Full org chart with named officers and reporting lines: CEO / Managing Director, CTO, General Counsel, Chief Compliance Officer, Head of Security / CISO, Head of Finance, Head of Research.
    * Total OTF headcount, breakdown by function.
    * Disclose the time allocation of named co-founders (Steeves, Shaabana) — % of working time devoted to OTF / Bittensor versus other ventures.

22. **Yuma Group institutional services arm**

    * Confirm the legal and operational relationship between **Yuma Group** (institutional services / Crypto.com partnerships) and the **Opentensor Foundation**.
    * Yuma Group's validator and subnet positions, and any conflicts arising from Yuma Group serving as both an institutional-services provider and a Bittensor ecosystem participant.
    * Recent Crypto.com / Yuma announcement regarding TAO and subnet-token staking — full economic terms.

23. **Tensorplex / tTAO Bridge wind-down**

    * Full disclosure of the Tensorplex Stake and tTAO Bridge wind-down (announced May 2026 for cybersecurity reasons).
    * Whether any TAO loss occurred or is at risk.
    * The named entities behind Tensorplex, their relationship to OTF, and any ecosystem-fund implications.

### G. dTAO and roadmap (P1)

24. **Recent and upcoming protocol upgrades**

    * Full release-notes and engineering changelogs for v8.x, v9.x, and v10.x of the Bittensor SDK and Subtensor.
    * The roadmap for the next 12 months, including any planned major emission-mechanism changes, governance restructurings, or token-economy redesigns.
    * Specific clarification on the **Root Claim / Airdrop mechanism** introduced in v10.0.0, and the **MEV Shield Protection** added in the same release.

25. **Subnet 1 and Opentensor-developed subnets**

    * OTF's plans for Subnet 1 (text prompting) — is OTF still operating it, or has it been transferred to community ownership?
    * Inventory of all subnets where OTF or affiliated entities act as validators, miners, or subnet owners.

### H. Tax, accounting, and compliance posture (P1)

26. **Tax characterization of TAO rewards**

    * Outside-counsel memo on miner / validator / staker tax obligations (income vs. capital gain, timing of recognition, valuation methodology) across at least US, UK, EU, and Switzerland.
    * Disclose whether OTF, Yuma Group, or affiliated entities provide any 1099 / W-8BEN / equivalent reporting infrastructure to TAO recipients.

27. **AML/KYC posture**

    * Confirm whether OTF performs KYC on subnet owners, validators above a stake threshold, or large delegators.
    * The AML/CFT policy applied to OTF treasury inflows and outflows.
    * The OFAC sanctions-screening approach for the EVM bridge (bridge.bittensor.com).

### I. Competitive and academic context (P1)

28. **Verifiable compute alternatives**

    * OTF's written position on **Gensyn**'s verifiable-compute approach and the implications for Yuma Consensus's heuristic-trust foundation.
    * Any internal research or roadmap items investigating ZK-proof or TEE-based attestation primitives for subnet validation.

29. **Independent academic stress-testing**

    * Any independent academic papers commissioned by OTF or third-party-funded researchers analyzing Yuma Consensus, Taoflow, or dTAO under adversarial conditions.
    * The status of the June 2025 arXiv analysis cited in Yellow research that found Bittensor's Yuma Consensus produced the lowest validator collusion rate in simulated environments.

### First-call questions

The following are the questions to be asked on the first management call. Each is designed to obtain a verbal commitment or an immediate document pointer, and to surface where management is rehearsed vs. unrehearsed.

1. **Walk us through the Opentensor Foundation: what Swiss legal entity, what board, what employees, and what FINMA classification governs it today?**
2. **Help us understand the Triumvirate-Senate model in practice: how often does the Senate reject a Triumvirate proposal, and can you name any proposal where the Senate's view materially modified the Triumvirate's original draft?**
3. **The top 64 validators control 100% of subnet emission weights. Walk us through the top 10 by stake — who are they, and what is each one's overlap with subnet ownership?**
4. **The 2024 PyPi breach cost ~32,000 TAO. What is in place today to prevent a recurrence, and has the $25M Nexus Mutual cover ever been claimed against?**
5. **Can you name at least three named institutional consumers of Bittensor — beyond Corcel — with monthly inference-token volume?**
6. **What is your engagement status with the SEC on the Grayscale Spot Bittensor ETF S-1 filing? Have you received any indications about timing, conditions, or rejection probability?**
7. **The IQ.wiki entry on Jacob Steeves references Covenant AI's allegation of "maintaining centralized control." What is OTF's official response?**
8. **The Bittensor whitepaper is signed by "Yuma Rao" — a pseudonym. The Yuma Group is now your institutional services arm. Help us reconcile that.**
9. **Goodhart's Law gaming on small subnets is publicly documented. Which subnets has OTF de-registered or sanctioned for gaming, and which subnets are currently under quality-review?**
10. **What is the highest-probability scenario in which a US, EU, UK, or Swiss regulator takes adverse action against TAO or OTF within the next 18 months, and what is your mitigation plan?**
