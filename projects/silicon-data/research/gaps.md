# Silicon Data — Research Gap Tracker

Updated: 2026-04-07

## Corporate structure
- [x] What is the legal relationship between Silicon Data and Compute Exchange?
  → **Resolved.** Carmen Li bio (compute-exchange-about.md): "Silicon Data builds the intelligence layer — data, benchmarks, and derivatives; Compute Exchange builds the marketplace — where real trading happens." Separate companies, unified leadership under Carmen Li as CEO of both. Prior CX leadership (Bochev, Metzdorf) moved to advisory. (aithority-carmen-li-ceo-appointment.md)
- [x] What entities exist and what does each one do?
  → **Resolved.** Silicon Data Inc. (registered trademark owner, data/index/analytics), "Silicon Derivatives Inc." (named in terms — entity name discrepancy), Compute Exchange Inc. / "CEX" / "TCEX" (marketplace). (silicondata-terms.md, compute-exchange-marketplace-terms.md)
- [ ] Where are they incorporated?
  → **Partially resolved.** CX marketplace terms: Delaware governing law, Santa Clara County CA forum. Silicon Data: New York address appears in press releases. Full incorporation details not publicly visible.

## Product and index
- [x] What exactly is the H100 rental index? Daily close, real-time, methodology?
  → **Resolved.** Daily calculation, Bloomberg ticker SDH100RT, 150k daily pricing records, 40-50 countries, 50-100 platforms. Proprietary normalization framework. (silicondata-methodology-blog.md, silicondata-index-product.md)
- [ ] Is there a public methodology document or data portal?
  → **Partially resolved.** Blog post describes methodology principles but no formal methodology document published. Portal at portal.silicondata.com exists. API docs at docs.silicondata.com/introduction exist but not scraped.
- [x] What other products exist beyond the index?
  → **Resolved.** SiliconNavigator (market intelligence), SiliconMark (benchmarking), SiliconPriceIQ (forecasting), SiliconCarbon (carbon tracking), RAM Index (GDDR6), Token MarketPulse, Token PriceBook. (silicondata-home.md, silicondata-seed-funding.md)
- [x] What is Compute Exchange's product?
  → **Resolved.** GPU compute marketplace (spot + reserved), forward contracts, auction mechanism, provider listing, referral program. NOT a counterparty — matching/platform model. (compute-exchange-about.md, compute-exchange-forward-contracts.md)
- [x] Is there any visible regulatory registration or exemption?
  → **Resolved (negative).** CX marketplace terms Section 5(f): "CEX does not provide services subject to a regulatory license." No CFTC/NFA/SEC registration visible for either entity. (compute-exchange-marketplace-terms.md)

## Team
- [x] Who else is on the team beyond Carmen Li and Don Wilson?
  → **Resolved.** Suna Said (Co-Founder CX, CEO Woodside AI). Prior CX: Simeon Bochev (founding CEO), Bjoern Metzdorf (CTO). Blog authors: Yang Gao, Yuhua Yu, Platon Slynko, Jason Cornick. (compute-exchange-about.md, aithority-carmen-li-ceo-appointment.md, silicondata-methodology-blog.md)
- [x] What are their backgrounds?
  → **Partially resolved.** Carmen Li: financial services, ex-Bloomberg (IEEE Spectrum). Don Wilson: DRW founder, derivative trading, venture/crypto (Digital Asset, ErisX, Hashnote). Suna Said: Woodside AI CEO, early investor (Palantir, Instacart, Anduril, etc.), Bitwise advisor. Others: not detailed.
- [ ] What is the team size?
  → **Not resolved.** Blog has 5 named authors. CX about page shows 3 named leaders. Total headcount not disclosed.
- [ ] Are there visible control-function hires (legal, compliance, risk)?
  → **Not resolved.** No legal, compliance, risk, or treasury personnel visible in public record.

## Funding and backers
- [x] What is the total funding raised?
  → **Partially resolved.** The persisted public source pack supports the announced $4.7M seed round (May 2025). Search-result leads suggest later interview materials may reference a higher total, but that direct source has not yet been persisted into `research/web/`. (silicondata-seed-funding.md, search-carmen-li-background.md)
- [x] Who are all the investors beyond DRW and Jump?
  → **Resolved.** Woodside AI, Wintermute Ventures, Sancus Ventures, SoGal Ventures. Angels: Max Kolysh, Joel Gantcher, Leo de Luna, Andrew Tan. (silicondata-seed-funding.md)
- [x] What is the relationship structure?
  → **Resolved.** DRW and Jump are co-lead investors AND strategic partners. Don Wilson is co-founder of CX. Suna Said (Woodside AI) is both investor and CX co-founder. (silicondata-seed-funding.md, compute-exchange-about.md)

## Traction and distribution
- [x] Is the index distributed through any terminal or data vendor?
  → **Resolved.** Bloomberg (SDH100RT, SDA100RT, SDB200RT) and Refinitiv via dxFeed. Also Kaiko. Homepage claims "the only compute data provider available on Bloomberg and Refinitiv." (silicondata-index-product.md, silicondata-dxfeed-refinitiv.md)
- [ ] Are there visible trading partners, customers, or integrations?
  → **Partially resolved.** "enterprise clients since Q1 2025" (dxFeed press release). "hundreds of users" (seed announcement). Introl blog references index data. No named customers beyond distribution partners.
- [ ] Is there any evidence of actual trading activity?
  → **Not resolved.** CX has auction mechanism and sandbox demo. Forward contracts page exists. No public evidence of completed trades, volumes, or active counterparty counts.
- [x] Any press coverage beyond company-generated materials?
  → **Partially resolved.** Yes — IEEE Spectrum, WatersTechnology, and AIthority are already persisted. Additional third-party items (for example dxFeed confirmation, Business Insider, and WEKA/theCUBE appearances) are identified but not yet fully persisted into `research/web/`. (ieee-spectrum-gpu-prices.md, waterstechnology-gpu-indexes.md, aithority-carmen-li-ceo-appointment.md, search-third-party-coverage.md)

## Regulatory and legal
- [x] Any CFTC, NFA, or SEC registrations visible?
  → **Resolved (negative).** No registrations visible. CX explicitly states it does not provide services subject to a regulatory license.
- [x] Any visible legal disclosures, risk statements, or terms of service?
  → **Resolved.** Silicon Data terms (silicondata-terms.md), CX marketplace terms, CX compute service terms, CX fees, and CX privacy policy all exist. No swap risk disclosure or derivatives disclaimer is visible in the public materials reviewed.
- [x] Any regulatory posture discernible from public materials?
  → **Resolved.** Marketplace/platform model (not counterparty). "CEX does not provide services subject to a regulatory license." Forward contracts are described as a matching service, not principal risk.

## Conflicts specific to prop-trading parentage
- [ ] Do DRW or Jump trade in compute markets or adjacent markets?
  → **Not resolved from direct evidence.** DRW and Jump are major prop trading firms active across many asset classes. Whether they trade compute or use Silicon Data's indices for trading is not disclosed.
- [ ] Is there any visible information-barrier or governance structure?
  → **Not resolved.** No information barriers, Chinese walls, or governance committees described in any public material.
- [x] Does the dual-CEO structure create visible governance questions?
  → **Resolved (yes).** Carmen Li is CEO of both the data/index company and the marketplace. Carmen Li's own bio describes the combined vision, and the AIthority article frames it as intentional integration (LSEG/Refinitiv analogy). This creates a clear benchmark-versus-marketplace conflict question that still needs direct governance proof.
