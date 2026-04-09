# Competitive Analysis: GPU-Compute Market Infrastructure

**To:** Investment Committee
**From:** [Analyst]
**Date:** April 9, 2026
**Re:** Cross-portfolio comparative analysis -- Ornn, Silicon Data / Compute Exchange, Auctionomics / OneChronos

---

## 1. Market overview

GPU-compute market infrastructure is emerging as an investable asset class. Three separate seed- and growth-stage entrants are attempting to build the pricing, risk-transfer, and liquidity layers that commoditize AI compute capacity. Each approaches the problem differently, but all three share a core thesis: compute is becoming a traded resource that requires benchmarks, standardized contracts, and institutional-grade market structure. The space is early enough that no entrant has established durable liquidity, and the historical base rate for new futures products is unfavorable -- a Bank of England survey of the literature notes that a majority of futures contracts failed within ten years of introduction [Source: ornn/IC memo, Core risk #4]. The investment question is not which model is theoretically superior but which can form durable liquidity first [Source: auctionomics/IC memo, Competitive context].

---

## 2. Approach comparison

| Dimension | Ornn | Silicon Data / Compute Exchange | Auctionomics / OneChronos |
|---|---|---|---|
| **Model** | Benchmark + bilateral cash-settled swaps + exchange pathway [Source: ornn/IC memo, Company snapshot] | Index + analytics platform + matching marketplace (spot, reserved, forward, auction) [Source: silicon-data/IC memo, Company snapshot] | Combinatorial auction-based market design + bilateral forwards [Source: auctionomics/IC memo, Company snapshot] |
| **Core product** | Ornn Compute Price Index (OCPI), added to Bloomberg Terminal Apr 2, 2026 [Source: ornn/IC memo, Company snapshot] | Silicon Index family (H100, A100, B200) on Bloomberg and Refinitiv; Compute Exchange marketplace with 4% commission [Source: silicon-data/IC memo, Company snapshot] | Smart Market technology adapted from equities ATS; standardization framework undisclosed ("magic sauce") [Source: auctionomics/IC memo, Core risk #3] |
| **Settlement** | Cash-settled swaps; Ornn (via ORNNX LLC) is direct counterparty [Source: ornn/IC memo, Core risk #1] | CX positions as matching platform, not counterparty; forward contracts are bilateral between buyer and seller [Source: silicon-data/IC memo, Core risk #1] | Bilateral forwards with physical or hybrid delivery; auction platform facilitates matching [Source: auctionomics/IC memo, Core risk #2] |
| **Team** | Four-person seed-stage organization; no disclosed legal, compliance, risk, or treasury leadership [Source: ornn/IC memo, Team and operating-model risk] | Carmen Li (CEO of both entities) is only publicly named senior leader at Silicon Data; total headcount undisclosed; no disclosed compliance or risk hires [Source: silicon-data/IC memo, Team and operating-model risk] | 25+ Auctionomics members (mostly academic advisors); OneChronos is an operating company with proven equities infrastructure; no disclosed dedicated compute-market team [Source: auctionomics/IC memo, Team and operating-model risk] |
| **Backing** | $5.7M seed; Link Ventures participated [Source: ornn/IC memo, Company snapshot] | $4.7M seed co-led by DRW and Jump Trading Group [Source: silicon-data/IC memo, Company snapshot] | OneChronos: $80M+ total, including $32M expansion round (Nov 2024) from Addition, DCVC, DST Global; Douglas L. Peterson (fmr. CEO S&P Global) as Executive Chairman (Sep 2025); Auctionomics: self-funded consulting firm; Paul Milgrom (2020 Nobel, Economics) co-founder [Source: auctionomics/IC memo, Company snapshot] |
| **Regulatory posture** | Operating under CFTC de minimis swap-dealer threshold; stated DCM application path [Source: ornn/IC memo, Core risk #1] | CX explicitly disclaims regulatory licensing; Silicon Data positions index for swaps/futures/structured notes with no disclosed regulatory filing [Source: silicon-data/IC memo, Core risk #1] | Compute market described as "off-exchange" bilateral forwards; OneChronos Markets LLC is SEC/FINRA-regulated for equities only; no disclosed regulatory analysis for compute [Source: auctionomics/IC memo, Core risk #2] |

---

## 3. Traction comparison

**Ornn (as of April 6, 2026):**
- OCPI added to Bloomberg Terminal, Apr 2, 2026 [Source: ornn/IC memo, Company snapshot]
- Self-reported 400+ data center operators, investors, and AI companies accessing the platform; "access" undefined and unvalidated [Source: ornn/IC memo, Company snapshot]
- Hydra Host partnership integrating real-time infrastructure data from 30,000+ GPUs under management [Source: ornn/IC memo, What appears real today]
- Architect announced plans to launch exchange-traded compute futures tied to Ornn Data LLC indices, pending regulatory approval [Source: ornn/IC memo, What appears real today]
- Kalshi users can trade contracts verified using Ornn data [Source: ornn/IC memo, What appears real today]

**Silicon Data / Compute Exchange (as of April 7, 2026):**
- H100 index live on Bloomberg (SDH100RT) and Refinitiv via dxFeed partnership; A100 and B200 tickers also live on Bloomberg [Source: silicon-data/IC memo, Company snapshot]
- Claims 3.5 million data points and 150,000 daily verified pricing records across 40-50 countries and 50-100 platforms; all self-reported [Source: silicon-data/IC memo, What appears real today]
- Third-party coverage from IEEE Spectrum (May 2025), WatersTechnology (Oct 2025), and AIthority (Oct 2025) [Source: silicon-data/IC memo, What appears real today]
- Zero public evidence of completed marketplace trades, volumes, or active counterparty counts [Source: silicon-data/IC memo, Core risk #4]

**Auctionomics / OneChronos (as of April 9, 2026):**
- Partnership announced Jul 29, 2025 [Source: auctionomics/IC memo, Company snapshot]
- OneChronos equities ATS: $10B daily trading volume, FINRA top-10 ATSs, $2T+ facilitated since 2022 launch; spot FX venue launched Mar 2026 [Source: auctionomics/IC memo, Company snapshot]
- No named compute-market participants; Littlepage stated no specific businesses signed on as of Jul 2025 [Source: auctionomics/IC memo, What appears real today]
- No completed compute-market transactions, no published product specification, no disclosed timeline for launch [Source: auctionomics/IC memo, What appears real today]

---

## 4. Risk dimension comparison

### Regulatory pathway

- **Ornn:** Has the most explicit (though incomplete) regulatory narrative -- operating under de minimis threshold with a stated DCM application path. Public disclosures show awareness of the swap-dealer framework. Key gap: no public disclosure of current threshold utilization, CFTC feedback, or contingency plan for denial [Source: ornn/IC memo, Core risk #1].
- **Silicon Data / CX:** CX explicitly disclaims regulatory licensing while Silicon Data positions its benchmark for swaps, futures, and structured notes. The forward-contract structure raises CFTC classification questions. No disclosed regulatory filings or applications [Source: silicon-data/IC memo, Core risk #1].
- **Auctionomics / OneChronos:** No disclosed regulatory analysis for compute. OneChronos has SEC/FINRA registration for equities only. Compute market described as "off-exchange" bilateral forwards, which may be exempt as commercial forwards but has not been tested [Source: auctionomics/IC memo, Core risk #2].

### Benchmark / methodology governance

- **Ornn:** OCPI methodology is proprietary; no IOSCO mapping, independent replication package, or published methodology document visible. Contributor concentration, minimum publication thresholds, and restatement history undisclosed [Source: ornn/IC memo, Core risk #2].
- **Silicon Data:** Methodology blog describes principles but is not the actual methodology document. Claims "independent oversight" by unnamed "calculation agents and data validators." No IOSCO mapping. Normalization framework is proprietary [Source: silicon-data/IC memo, Core risk #2].
- **Auctionomics / OneChronos:** Not building a standalone benchmark index. Price discovery occurs through the auction mechanism itself, which removes some benchmark governance questions but introduces auction-design validation questions -- the standardization framework ("building block") is undisclosed [Source: auctionomics/IC memo, Core risk #3].

### Counterparty / conflict risk

- **Ornn:** Acts as direct counterparty via ORNNX LLC. Produces the benchmark (OCPI) and trades risk around it, creating a self-referencing valuation concern. No visible independent mark-to-market process, information barriers, or segregation architecture in the public record. Kush Bavaria/Link Ventures related-party flag [Source: ornn/IC memo, Core risk #2; Core risk #3; Team and operating-model risk].
- **Silicon Data / CX:** DRW and Jump Trading Group are both lead investors and major proprietary trading firms. If they trade compute markets referencing Silicon Data indices, structural conflict exists. No disclosed information barriers, Chinese walls, or governance committees. CX co-founder (Don Wilson) is also DRW founder. Index product page claims "Independent and Objective" alongside backer names without governance disclosure [Source: silicon-data/IC memo, Core risk #3].
- **Auctionomics / OneChronos:** Conflict profile is lower -- neither party is a trading firm or market-maker. Principal risk: Auctionomics may consult for entities that could be compute-market participants; OneChronos investors may have compute-related positions. No disclosed information-barrier policies for the compute initiative [Source: auctionomics/IC memo, Core risk #1; DDQ, Section I item 24].

### Market formation

- **Ornn:** Most advanced in visible bilateral activity but faces classic chicken-and-egg: natural hedgers may be smaller credits, while hyperscalers internalize exposure. Seed-stage capital ($5.7M) limits runway [Source: ornn/IC memo, Core risk #4].
- **Silicon Data / CX:** Marketplace product surface exists but no evidence of completed trades. Dual-entity burn across five named products strains $4.7M seed capital [Source: silicon-data/IC memo, Core risk #4].
- **Auctionomics / OneChronos:** Strongest capital position ($80M+ at OneChronos), but compute initiative competes internally with equities ATS expansion, FX launch, and European/Asian entry. No visible compute-market participants. Combinatorial auctions require more participants for critical mass than bilateral models [Source: auctionomics/IC memo, Core risk #4].

---

## 5. Gating issues comparison (selected P0 asks by shared theme)

### Entity and regulatory clarity

All three IC memos flag entity-by-entity, product-by-product legal mapping as P0. The specific gaps differ:
- **Ornn:** Product/entity/regulatory mapping across Ornn AI Inc., ORNNX LLC, and Ornn Data LLC; de minimis threshold monitoring; DCM application status [Source: ornn/DDQ, Section A items 1-2, 7-8].
- **Silicon Data:** Unexplained "Silicon Derivatives Inc." entity in terms of use; forward-contract CFTC analysis; futures/options roadmap regulatory pack [Source: silicon-data/DDQ, Section A items 1-4].
- **Auctionomics / OneChronos:** Partnership legal form itself is unknown (JV, contract, equity?); regulatory analysis for bilateral compute forwards; relationship to existing ATS registration [Source: auctionomics/DDQ, Section A items 1-2; Section C items 8-9].

### Benchmark / index replication

Ornn and Silicon Data both face identical asks for a full methodology document, raw data for independent replication, IOSCO mapping, and contributor concentration analysis [Source: ornn/DDQ, Section C items 15-20; silicon-data/DDQ, Section C items 15-20]. Auctionomics/OneChronos faces the analogous ask in the form of the product specification and standardization framework disclosure [Source: auctionomics/DDQ, Section B items 5-6].

### Conflict governance

- **Ornn:** Prop trading, personal trading, and information-barrier controls; related-party disclosures (Kush Bavaria / Link Ventures) [Source: ornn/DDQ, Section E items 36-37; Section H item 56].
- **Silicon Data:** DRW/Jump conflict-of-interest governance; information barriers between index production, marketplace, and investor-affiliated trading; related-party inventory covering all backer transactions [Source: silicon-data/DDQ, Section C item 19; Section H item 50].
- **Auctionomics / OneChronos:** Conflicts between Auctionomics' consulting clients and compute-market initiative; investor compute-related positions; information barriers across equities, FX, and compute [Source: auctionomics/DDQ, Section I item 24; Section A item 2].

### Cash, burn, and runway

All three face P0 cash and runway scrutiny, but the magnitudes differ:
- **Ornn:** $5.7M seed, four-person team, principal risk exposure [Source: ornn/IC memo, Core risk #4; ornn/DDQ, Section F items 40-41].
- **Silicon Data:** $4.7M seed, dual-entity operations, five named products [Source: silicon-data/IC memo, Core risk #4; silicon-data/DDQ, Section F items 32-34].
- **OneChronos:** $80M+ total funding, but compute initiative competes with equities/FX expansion for budget allocation [Source: auctionomics/IC memo, Core risk #4; auctionomics/DDQ, Section E item 14].

---

## 6. Relative positioning and recommendation

No entrant is investable today. All three IC memos recommend gated phase-two diligence only [Source: ornn/IC memo, Recommendation; silicon-data/IC memo, Recommendation; auctionomics/IC memo, Recommendation].

**Ornn** is furthest along in visible execution (live bilateral activity, Bloomberg distribution, named partners including Hydra, Architect, Kalshi) but carries the highest structural risk because it takes principal exposure on a seed-stage balance sheet with proprietary, unaudited benchmark governance [Source: ornn/IC memo, Bottom line].

**Silicon Data / Compute Exchange** has the strongest distribution footprint (Bloomberg + Refinitiv) and the most commercially relevant backer profile for derivatives (DRW, Jump), but presents unaddressed conflict-of-interest concerns and zero evidence of marketplace activity [Source: silicon-data/IC memo, Bottom line].

**Auctionomics / OneChronos** has the strongest institutional credibility (Nobel laureate, proven ATS at scale, Peterson as Executive Chairman, $80M+ capital), the lowest conflict profile, and a structurally differentiated approach (combinatorial auctions), but is the furthest from a live compute product and has no visible participants or timeline [Source: auctionomics/IC memo, Bottom line].

**Diligence resource allocation recommendation:** Proceed with phase-two diligence on all three in parallel, but sequence the work:

1. **Ornn** -- highest priority for immediate diligence because it has the most live activity and the most acute risk (principal exposure, de minimis threshold, benchmark governance). The OCPI independent replication workstream should begin first. Key gating item: the legal/regulatory map and DCM status.
2. **Silicon Data / Compute Exchange** -- second priority. The entity clarification ("Silicon Derivatives Inc."), DRW/Jump conflict governance, and marketplace traction questions can be resolved through a single management call and dataroom review. Key gating item: evidence of any completed marketplace transaction.
3. **Auctionomics / OneChronos** -- third priority for compute-specific diligence, but the initiative warrants monitoring because the team quality and capital base could allow rapid catch-up. Key gating item: the product specification and evidence of participant interest.

If diligence resources are constrained, Ornn and Silicon Data should proceed first given their more advanced execution states. Auctionomics/OneChronos can be revisited when the partnership demonstrates a working product.

---

## Claim-provenance appendix

### Section 1: Market overview
| Claim | Source |
|---|---|
| Majority of futures contracts failed within ten years of introduction (Bank of England survey) | ornn/IC memo, Core risk #4 |
| The investment question is which model can form durable liquidity first | auctionomics/IC memo, Competitive context |

### Section 2: Approach comparison
| Claim | Source |
|---|---|
| Ornn model: benchmark + bilateral cash-settled swaps + exchange pathway | ornn/IC memo, Company snapshot |
| OCPI added to Bloomberg Terminal Apr 2, 2026 | ornn/IC memo, Company snapshot |
| ORNNX LLC is direct counterparty for swaps | ornn/IC memo, Core risk #1 |
| Ornn: four-person seed-stage organization | ornn/IC memo, Team and operating-model risk |
| No disclosed legal, compliance, risk, or treasury leadership at Ornn | ornn/IC memo, Team and operating-model risk |
| Ornn: $5.7M seed; Link Ventures participated | ornn/IC memo, Company snapshot |
| Ornn: operating under de minimis threshold; stated DCM application path | ornn/IC memo, Core risk #1 |
| Silicon Data: index + analytics + matching marketplace | silicon-data/IC memo, Company snapshot |
| Silicon Index family (H100, A100, B200) on Bloomberg and Refinitiv | silicon-data/IC memo, Company snapshot |
| Compute Exchange: 4% commission | silicon-data/IC memo, Company snapshot |
| CX positions as matching platform, not counterparty | silicon-data/IC memo, Core risk #1 |
| Carmen Li: CEO of both entities; only publicly named senior leader at Silicon Data | silicon-data/IC memo, Team and operating-model risk |
| No disclosed compliance or risk hires at Silicon Data / CX | silicon-data/IC memo, Team and operating-model risk |
| Silicon Data: $4.7M seed co-led by DRW and Jump Trading Group | silicon-data/IC memo, Company snapshot |
| CX disclaims regulatory licensing; Silicon Data positions index for swaps/futures/structured notes | silicon-data/IC memo, Core risk #1 |
| Auctionomics / OneChronos: combinatorial auction-based market design + bilateral forwards | auctionomics/IC memo, Company snapshot |
| Smart Market technology; standardization framework undisclosed ("magic sauce") | auctionomics/IC memo, Core risk #3 |
| Auctionomics: 25+ members, mostly academic advisors | auctionomics/IC memo, Team and operating-model risk |
| OneChronos: proven equities infrastructure; no disclosed dedicated compute-market team | auctionomics/IC memo, Team and operating-model risk |
| OneChronos: $80M+ total, $32M expansion round Nov 2024 | auctionomics/IC memo, Company snapshot |
| Douglas L. Peterson (fmr. CEO S&P Global) as Executive Chairman, Sep 2025 | auctionomics/IC memo, Company snapshot |
| Auctionomics: self-funded; Paul Milgrom 2020 Nobel co-founder | auctionomics/IC memo, Company snapshot |
| Compute market described as "off-exchange" bilateral forwards; equities ATS only | auctionomics/IC memo, Core risk #2 |

### Section 3: Traction comparison
| Claim | Source |
|---|---|
| OCPI added to Bloomberg Terminal, Apr 2, 2026 | ornn/IC memo, Company snapshot |
| Ornn: 400+ self-reported platform users | ornn/IC memo, Company snapshot |
| Hydra Host partnership: 30,000+ GPUs | ornn/IC memo, What appears real today |
| Architect: exchange-traded compute futures pending regulatory approval | ornn/IC memo, What appears real today |
| Kalshi users can trade contracts verified using Ornn data | ornn/IC memo, What appears real today |
| Silicon Data H100 index on Bloomberg (SDH100RT) and Refinitiv; A100 and B200 tickers also live | silicon-data/IC memo, Company snapshot |
| 3.5M data points, 150K daily records, 40-50 countries, 50-100 platforms (self-reported) | silicon-data/IC memo, What appears real today |
| Third-party coverage: IEEE Spectrum, WatersTechnology, AIthority | silicon-data/IC memo, What appears real today |
| Zero evidence of completed marketplace trades at CX | silicon-data/IC memo, Core risk #4 |
| Auctionomics/OneChronos partnership announced Jul 29, 2025 | auctionomics/IC memo, Company snapshot |
| OneChronos equities ATS: $10B daily volume, FINRA top-10, $2T+ since 2022 launch; FX venue Mar 2026 | auctionomics/IC memo, Company snapshot |
| No named compute-market participants; Littlepage confirmed none signed as of Jul 2025 | auctionomics/IC memo, What appears real today |
| No completed compute-market transactions or published product specification | auctionomics/IC memo, What appears real today |

### Section 4: Risk dimension comparison
| Claim | Source |
|---|---|
| Ornn: de minimis threshold operation; stated DCM path; no disclosure of threshold utilization or CFTC feedback | ornn/IC memo, Core risk #1 |
| CX disclaims regulatory licensing; forward contracts raise CFTC classification questions | silicon-data/IC memo, Core risk #1 |
| No regulatory analysis disclosed for Auctionomics/OneChronos compute initiative | auctionomics/IC memo, Core risk #2 |
| OCPI: proprietary methodology; no IOSCO mapping or independent replication | ornn/IC memo, Core risk #2 |
| Silicon Data: methodology blog is not actual methodology document; unnamed "calculation agents" | silicon-data/IC memo, Core risk #2 |
| Auctionomics/OneChronos: no standalone benchmark; auction-based price discovery; standardization undisclosed | auctionomics/IC memo, Core risk #3 |
| Ornn: direct counterparty + benchmark producer; no visible independent mark-to-market | ornn/IC memo, Core risk #2; Core risk #3 |
| Kush Bavaria / Link Ventures related-party flag | ornn/IC memo, Team and operating-model risk |
| DRW and Jump as both lead investors and prop trading firms; no disclosed information barriers | silicon-data/IC memo, Core risk #3 |
| Don Wilson: CX co-founder and DRW founder | silicon-data/IC memo, Core risk #3 |
| Index product page claims "Independent and Objective" alongside backer names | silicon-data/IC memo, Core risk #3 |
| Auctionomics/OneChronos: lower conflict profile; no trading firm parentage | auctionomics/IC memo, Core risk #1 |
| Ornn: chicken-and-egg with smaller-credit hedgers; $5.7M limits runway | ornn/IC memo, Core risk #4 |
| Silicon Data: no evidence of completed trades; $4.7M across dual entities and five products | silicon-data/IC memo, Core risk #4 |
| OneChronos: $80M+ but compute competes with equities/FX expansion; combinatorial auctions need more participants | auctionomics/IC memo, Core risk #4 |

### Section 5: Gating issues comparison
| Claim | Source |
|---|---|
| Ornn: entity mapping across Ornn AI Inc., ORNNX LLC, Ornn Data LLC | ornn/DDQ, Section A items 1-2 |
| Ornn: de minimis monitoring; DCM application status | ornn/DDQ, Section A items 7-8 |
| Silicon Data: "Silicon Derivatives Inc." entity discrepancy | silicon-data/DDQ, Section A items 1-4 |
| Silicon Data: forward-contract CFTC analysis; futures roadmap | silicon-data/DDQ, Section A items 3-4 |
| Auctionomics/OneChronos: partnership legal form unknown | auctionomics/DDQ, Section A items 1-2 |
| Auctionomics/OneChronos: regulatory analysis for compute forwards; ATS relationship | auctionomics/DDQ, Section C items 8-9 |
| Ornn: full methodology document, raw data for replication, IOSCO mapping, contributor concentration | ornn/DDQ, Section C items 15-20 |
| Silicon Data: identical benchmark replication asks | silicon-data/DDQ, Section C items 15-20 |
| Auctionomics/OneChronos: product specification and standardization framework | auctionomics/DDQ, Section B items 5-6 |
| Ornn: prop trading, information barriers, related-party disclosures | ornn/DDQ, Section E items 36-37; Section H item 56 |
| Silicon Data: DRW/Jump conflict governance; information barriers; related-party inventory | silicon-data/DDQ, Section C item 19; Section H item 50 |
| Auctionomics/OneChronos: consulting-client conflicts; investor positions; cross-business information barriers | auctionomics/DDQ, Section I item 24; Section A item 2 |
| Ornn: $5.7M seed, four-person team, principal risk exposure | ornn/IC memo, Core risk #4; ornn/DDQ, Section F items 40-41 |
| Silicon Data: $4.7M seed, dual-entity operations, five named products | silicon-data/IC memo, Core risk #4; silicon-data/DDQ, Section F items 32-34 |
| OneChronos: $80M+ total; compute competes with other priorities | auctionomics/IC memo, Core risk #4; auctionomics/DDQ, Section E item 14 |

### Section 6: Relative positioning and recommendation
| Claim | Source |
|---|---|
| All three IC memos recommend gated phase-two diligence only | ornn/IC memo, Recommendation; silicon-data/IC memo, Recommendation; auctionomics/IC memo, Recommendation |
| Ornn: furthest in visible execution; highest structural risk from principal exposure on seed balance sheet | ornn/IC memo, Bottom line |
| Silicon Data: strongest distribution (Bloomberg + Refinitiv); most relevant backer profile; unaddressed conflicts; zero marketplace activity | silicon-data/IC memo, Bottom line |
| Auctionomics/OneChronos: strongest institutional credibility; lowest conflict profile; furthest from live compute product | auctionomics/IC memo, Bottom line |
