# Kaspa + Igra Research Gaps Register

Compiled: 2026-05-27

## Resolved during research

- Toccata hard fork mainnet activation date: **June 5–20, 2026** (per Sutton's Medium post, Kasmedia, Our Crypto Talk)
- IGRA public auction result: cleared 0.1652 iKAS, 528 unique bidders, 49.36M IGRA sold (Kasmedia)
- Sigma Prime audit: completed with no unresolved issues, PDF on github.com/sigp/public-audits
- DAGLabs funding: $8M from Polychain + Accomplice, repaid via initially-mined KAS, IP rights formally waived
- Kaspa supply: ~28.7B max; 95% mined by July 10, 2026
- Igra Labs legal: Swiss Association ("Igra Association"), Zug, Switzerland
- Igra Labs team: 8 named members + 1 advisor; 3 ex-DAGLabs (Mashkevich, Zak, Melnikov)
- Kaspa "founder": Dr. Yonatan Sompolinsky (Harvard); no current formal entity (DAGLabs dissolved Nov 2021)

## Open / unresolved gaps

### Material gaps (P0 - resolve before phase-two diligence)

1. **Kaspa Foundation legal jurisdiction and financial disclosure**
   - KEF (kaspafoundation.org) exists but jurisdiction, audited financials, board composition not disclosed publicly
   - Separate "Kaspa Industrial Initiative Foundation" (Kii) - relationship to KEF and to core devs unclear
   - **Ask**: legal entity name, jurisdiction, board, audited financials, treasury composition

2. **Igra Association financials and IGRA treasury controls**
   - 20% of IGRA supply allocated to Association under "phased DAO control"
   - Disposition rules, multisig signers, and transition timeline to DAO not specified in public sources
   - **Ask**: Igra Association articles, signer roster, treasury report, DAO transition plan

3. **Toccata mainnet activation date hardcoding**
   - Public sources say June 5–20, 2026 - but exact date is "scheduled after TN10 rehearsal"
   - As of 2026-05-27, no hardcoded mainnet date is confirmed
   - **Ask**: when will the date be hardcoded? Has TN10 rehearsal completed?

4. **Kraken KAS listing status (conflicting reports)**
   - Community sources cite Nov 19, 2024 as Kraken's KAS listing date
   - Bitget Academy (March 2026) reports KAS "Not Listed" on Kraken
   - **Ask**: confirm directly with kraken.com

5. **Igra Litepaper omissions**
   - No team disclosure in litepaper (only on website)
   - No dated roadmap in litepaper
   - No supply numerics in litepaper
   - No formal risk-factors section
   - **Ask**: when will a comprehensive whitepaper (with team, supply, roadmap, risk) be released?

### Strategic gaps (P1 - useful for sizing but not blocking)

6. **KAS liquidity outside Tier 2 exchanges**
   - Daily volume ~$12M is thin for institutional position sizes
   - Tier 1 listing status remains uncertain (Binance/Coinbase no; Kraken conflicting)
   - **Ask**: OTC desks, market makers, and liquidity providers active in KAS

7. **Sigma Prime audit scope**
   - Public PDF available but scope (core protocol vs only smart contracts?) not summarized here
   - **Action**: read Sigma Prime audit PDF to extract scope, severity distribution, remediation status

8. **vProgs timeline**
   - "Research stage" per Sutton; no roadmap commitment
   - **Ask**: is there a published target window? Who is funding the research full-time?

9. **DAGKnight deployment dependency on hardware**
   - Roadmap places DAGKnight "post-Toccata"
   - Hardware/node requirements not disclosed
   - **Ask**: target node specs and decentralization metrics for DAGKnight

10. **Igra bridge security in production**
    - Litepaper acknowledges community bridging worst case = full loss
    - "MPC bridging via FROST threshold signatures" planned but not confirmed live
    - **Ask**: which bridging mode is currently active on mainnet? Multisig signer list?

### Catalyst tracking gaps (P2 - watch as events near)

11. **Coinbase / Binance listing timeline**
12. **Toccata mainnet activation window (June 5–20, 2026)**
13. **Igra Block-STM v2 execution engine launch (H2 2026)**
14. **95% mined supply milestone (July 10, 2026)**
15. **Sompolinsky / Sutton speaking calendar (Oxford Union 2026, Tokenize 2026 follow-ups)**

## Critical assumptions to validate

- Polychain holds no remaining KAS allocation (claimed via IP waiver, but no on-chain proof of dispersal published)
- Core developer attrition risk: Michael Sutton, Ori Newman, Hans Moog, Alexander Safstrom unfunded (no foundation paying them) - sustainability question
- Reproducibility of genesis proof has been independently verified by some community members, but no third-party audit of the proof code itself exists publicly
