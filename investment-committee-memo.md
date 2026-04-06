## Draft 2-page investment committee memo

**To:** Investment Committee
**From:** [Analyst]
**Date:** April 6, 2026
**Re:** **Ornn - preliminary IC memo (public-information based)**

### Recommendation

**Authorize phase-two diligence only; do not approve an investment or term sheet yet.**
The public record is now strong enough to justify deeper work, but not strong enough to underwrite the business. Six issues remain unresolved: **(1) product/entity/regulatory mapping, (2) OCPI governance and data rights, (3) counterparty/collateral/capital adequacy, (4) real two-sided liquidity, (5) competitive position, and (6) management/control-function sufficiency.** Most of the positive public evidence is still company-generated or partner-generated rather than independently validated.

### Company snapshot

Ornn is trying to build the **pricing and risk infrastructure for AI compute**. Public materials position the company around the **Ornn Compute Price Index (OCPI)** as a reference price for compute and around **cash-settled products** for compute providers, buyers, lenders, and traders. The data portal and docs show a real API/data surface, and on **April 2, 2026** Ornn announced that OCPI had been added to the **Bloomberg Terminal**. In the same release, Ornn said that **400+** data center operators, investors, and AI companies access the platform; that figure should be treated as **self-reported and directional only**, because "access" is undefined and no third-party validation is visible in the public record. Bloomberg distribution improves discoverability, but it should not be read as methodology validation by Bloomberg. ([ornn.com][1])

### What appears real today

There is enough public evidence to treat Ornn as more than a concept. The benchmark/data layer appears live; Hydra announced a partnership that integrates real-time infrastructure data from **30,000+ GPUs under management** into Ornn's indices and analytics; Architect announced plans to launch exchange-traded compute futures tied to **Ornn Data LLC** indices, **pending regulatory approval**; and DatacenterDynamics reported that Kalshi users can trade contracts whose outcome is verified using Ornn data. That is meaningful progress on productization and distribution. It is **not** yet proof of durable liquidity, benchmark governance quality, or regulatory completeness. ([PR Newswire][3]) ([PR Newswire][4]) ([DatacenterDynamics][5])

### Competitive context

Ornn is **not** operating in a vacuum. Silicon Data launched a daily H100 rental index in **May 2025**, says it is building the transparency layer for compute markets, and is backed by **DRW** and **Jump Trading Group**. Compute Exchange says **Carmen Li** is CEO of both Silicon Data and Compute Exchange, and **Don Wilson**, founder of DRW, is a co-founder. Separately, **Auctionomics** and **OneChronos** publicized a GPU-compute market partnership in **August 2025**; Auctionomics was co-founded by **Paul Milgrom**, a 2020 Nobel laureate in economics, and OneChronos already operates a Smart Market in financial markets. The implication is straightforward: Ornn may still win, but any thesis that OCPI is the inevitable or singular standard is too optimistic. Competitive risk here is not abstract; it includes better-capitalized, better-connected, and in some cases more market-structure-native competitors. ([Silicon Data][8]) ([Compute Exchange][10]) ([Auctionomics][11]) ([OneChronos][12])

### Team and operating-model risk

The public-facing Ornn team appears technically credible, but the public record does **not yet show** the control-function bench one would normally want for an early derivatives-infrastructure business: dedicated legal, compliance, treasury, risk, and surveillance leadership. That is a **public-record gap, not proof those roles do not exist**, but it is still a diligence issue. One visible governance item should also be flagged explicitly: **Kush Bavaria** previously worked as an investing associate at **Link Ventures**, and **Link Ventures** later participated in Ornn's seed round. That is not disqualifying, but it should be covered in related-party and governance diligence. Architect adds a separate reputational diligence angle because its CEO, **Brett Harrison**, previously served as president of **FTX US** before founding Architect. ([PR Newswire][2]) ([Link Ventures][13]) ([TechCrunch][16])

### Core risk #1: legal and regulatory contradiction

This remains the largest diligence issue, and it should be stated more directly than before. Ornn's public-facing marketing uses language associated with a **regulated exchange** and a market standard. But Ornn's own legal disclosures say the data services are for **informational and reference purposes** and do **not** constitute exchange or brokerage services, while the swap risk disclosure says compute futures swaps are offered by **ORNNX LLC**, that there is **no organized exchange** for those swaps, and that Ornn is the **direct counterparty** rather than a clearinghouse. Those statements may ultimately be reconcilable across different entities and products, but the public record does **not** currently prove that reconciliation. Until management produces a clean product-by-product, entity-by-entity regulatory map, the safest assumption is that the marketing narrative overstates present-day regulatory finality. ([ornn.com][6]) ([ornn.com][7])

Operating under the CFTC's **de minimis** swap-dealer threshold may be sufficient for current bilateral activity, but it is not the same thing as possessing the end-state exchange and clearing architecture implied by the company's broader positioning. The transition from bilateral swaps and benchmark data into a durable exchange/clearing model is a separate execution and regulatory risk, not a detail. ([CFTC][15])

### Core risk #2: market-structure and liquidity risk

Even if Ornn is legally sound, the harder question is whether a meaningful compute derivatives market can form. Historical base rates for new futures products are not favorable; a Bank of England survey of the literature notes that prior work found a **majority of futures contracts failed within ten years of introduction**, with many dying much earlier. A key inference from current compute-market structure is that the natural hedgers may be the smaller and weaker credits, while the largest hyperscalers often internalize exposure, secure supply directly, or have far more bargaining power than the rest of the market. If that inference is right, Ornn faces a classic chicken-and-egg problem: the parties who most need hedging may not be the parties best positioned to support institutional-grade derivatives liquidity. ([Bank of England][14])

### Core risk #3: benchmark and data quality risk

OCPI is the fulcrum of the entire model, but the public record still does not make it institutionally underwritable. Ornn's risk disclosure says the benchmark depends on **proprietary methodology**, uses **third-party provider data**, and can be changed by Ornn. The public materials still do not show contributor concentration, restatement history, percentage of direct transaction data versus normalized adjustments, or the governance process for methodology changes. That matters even more because Ornn is **not clearly first** to the category: Silicon Data's public materials show a competing GPU pricing benchmark that predates OCPI's Bloomberg availability. If benchmark standardization converges elsewhere, Ornn's downstream derivatives and licensing economics weaken materially. ([ornn.com][1]) ([ornn.com][7]) ([Silicon Data][8])

### Core risk #4: balance-sheet and counterparty risk

If Ornn is taking principal exposure, it should be underwritten more like an **OTC principal / emerging market-infrastructure business** than like a software company. Ornn's own disclosure says customers can lose more than posted collateral, margin can be called quickly, positions may be liquidated without prior notice, and collateral segregation depends on contract terms. That is not unusual in derivatives; what matters is whether the firm has the capital, treasury controls, custody architecture, hedge counterparties, and default-management capability to support it. None of that is visible publicly today. Because the only disclosed financing is a **$5.7 million seed round**, the burden of proof on capital adequacy is high. ([PR Newswire][2]) ([ornn.com][7])

### Bottom line

Ornn remains interesting because the company appears to be pursuing the benchmark, hedging, and distribution layers of a potentially important market. But the evidence is still too thin, too self-referential, and too incomplete to justify an investment decision. The right next step is **gated phase-two diligence** using the separate [management-diligence-request-list.md](management-diligence-request-list.md) document. If management can resolve the legal mapping, show benchmark governance and real liquidity, demonstrate adequate control functions, and prove that counterparty risk is tightly managed, Ornn could still become a differentiated infrastructure investment. If not, the likely conclusion should be **pass due to regulatory ambiguity, benchmark competition, and balance-sheet risk**. Public materials also do not disclose valuation terms beyond the seed financing, so there is no basis yet for a risk-adjusted entry-price view.

[1]: https://www.prnewswire.com/news-releases/ornn-compute-price-index-added-to-bloomberg-terminal-302732184.html "Ornn Compute Price Index Added to Bloomberg Terminal"
[2]: https://www.prnewswire.com/news-releases/ornn-raises-5-7-million-seed-round-to-launch-the-worlds-first-compute-futures-exchange-302596938.html "Ornn Raises $5.7 Million Seed Round to Launch the World's First Compute Futures Exchange"
[3]: https://www.prnewswire.com/news-releases/ornn-compute-exchange-and-hydra-host-partner-to-financialize-compute-302592103.html "Ornn Compute Exchange and Hydra Host Partner to Financialize Compute"
[4]: https://www.prnewswire.com/news-releases/architect-financial-technologies-partners-with-compute-index-provider-ornn-to-launch-exchange-traded-futures-on-gpu-and-ram-prices-302666613.html "Architect Financial Technologies Partners with Compute Index Provider Ornn to Launch Exchange-Traded Futures on GPU and RAM Prices"
[5]: https://www.datacenterdynamics.com/en/news/kalshi-users-able-to-gamble-on-nvidia-gpu-compute-prices-based-on-ornns-compute-derivatives-platform/ "Kalshi users able to wager on Nvidia GPU compute prices, based on Ornn's compute derivatives platform"
[6]: https://ornn.com/ "Ornn | Financial Products for AI Infrastructure"
[7]: https://ornn.com/risk-disclosure-statement "Risk Disclosure Statement for SWAP Transactions - Ornn"
[8]: https://www.silicondata.com/about-us "About Silicon Data"
[10]: https://compute.exchange/about "Compute Exchange About"
[11]: https://www.auctionomics.com/home-1/inthepress "Media Coverage - Auctionomics"
[12]: https://www.onechronos.com/ "OneChronos ATS: The Smart Market for Institutional Investors"
[13]: https://www.linkventures.com/team/kush-bavaria "Kush Bavaria - Link Ventures"
[14]: https://www.bankofengland.co.uk/-/media/boe/files/working-paper/1997/the-determinants-of-successful-financial-innovation.pdf "The determinants of successful financial innovation"
[15]: https://www.cftc.gov/LawRegulation/FederalRegister/finalrules/2020-16489.html "CFTC Final Rule on Cross-Border Application of the Registration Thresholds and Certain Requirements Applicable to Swap Dealers and Major Swap Participants"
[16]: https://techcrunch.com/2023/01/20/coinbase-and-others-back-ex-ftx-us-presidents-crypto-trading-infra-startup-architect/ "Coinbase and others back ex-FTX US president's crypto trading infra startup Architect"
