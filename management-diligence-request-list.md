Tailored to **Ornn** as of **April 6, 2026** and based on public information only. The key public gaps are clear: Ornn markets a benchmark/exchange/risk-transfer stack around **OCPI** and compute derivatives; the public legal documents split activity across **Ornn AI Inc.**, **ORNNX LLC**, and **Ornn Data LLC**; the swap disclosure flags direct counterparty, liquidity, and collateral risk; and there is enough visible product/distribution progress, including API/docs, Bloomberg availability, Hydra data integration, and the Architect partnership, to justify deeper diligence rather than dismissing the company outright. ([ornn.com][1])

## Management diligence request list

**Instruction to management:** please provide the following in a dataroom, with one folder owner per section, latest revision date on each file, and a short note indicating whether the file is final, draft, or board-only.

### A. Corporate, legal, and regulatory (**P0 / gating**)

1. **Full legal entity chart**

   * Include **Ornn AI Inc.**, **ORNNX LLC**, **Ornn Data LLC**, and any SPVs or foreign subsidiaries.
   * For each entity: jurisdiction, formation date, ownership, directors/managers, employees, bank accounts, revenue booking, IP ownership, and intercompany agreements.

2. **Product-by-product legal status matrix**

   * For each product or workflow, including OCPI data/API, bilateral swaps, any residual-value or "GPU Value Protection" product, and any partner-listed contracts, state:

     * offering entity
     * regulator / exemption / legal basis
     * customer type
     * jurisdictions permitted / blocked
     * live / beta / pending status
     * settlement source
     * margin model
     * clearing model
     * who is principal counterparty

3. **Copies of all key customer and market documents**

   * Website terms, data/API terms, swap terms, master agreement templates, CSA templates
   * participant agreement
   * clearing agreement
   * rulebook
   * fee schedules
   * market data policy
   * KYC/AML, sanctions, onboarding, and eligibility policies

4. **Outside-counsel memos and regulatory analyses**

   * Any memo supporting current structure under CFTC/NFA/SEC/state law
   * Any Bermuda legal memo related to AX / partner-venue listing
   * Any exemption, no-action, or interpretive analysis relied upon

5. **Regulatory interaction log**

   * All past and current inquiries, deficiency letters, exam requests, subpoenas, complaints, or threatened actions
   * Any internal incident escalation tied to compliance or suitability

6. **Litigation and dispute log**

   * Current, threatened, or settled disputes with customers, partners, vendors, or former employees

### B. OCPI methodology, data rights, and benchmark governance (**P0 / gating**)

7. **Full OCPI methodology document**

   * Definitions, sampling rules, weighting, normalization, exclusions, settlement procedures, calculation timing, fallback methodology, and methodology governance

8. **Methodology change log**

   * Every methodology revision since inception
   * Rationale, approval path, and affected products / customers

9. **Contributor universe and concentration pack**

   * Number of contributors by GPU SKU, geography, customer type, and venue/source
   * Top-10 contributor concentration by volume and by count
   * Percentage of index derived from direct transaction data vs inferred / normalized adjustments

10. **Raw anonymized contributor sample**

    * At least 6-12 months of anonymized input data sufficient for independent replication testing
    * Include timestamps, SKU attributes, region, provider type, transaction status, and validation flags

11. **Verification and anti-manipulation controls**

    * How transactions are verified as arm's-length
    * Outlier filters, stale-print handling, wash-trade / circular-pricing protections
    * Restatement triggers and publication controls

12. **Benchmark governance materials**

    * Governance committee charter, minutes, escalation framework, conflicts policy
    * Any independent calculation-agent, auditor, or methodology reviewer arrangement

13. **Data rights and exclusivity**

    * Contracts or summaries showing Ornn's right to use third-party data for index creation and commercial redistribution
    * Any exclusivity, minimum data volume, or termination provisions

### C. Commercial traction and liquidity formation (**P0 / gating**)

14. **Revenue bridge by product line**

* Data/API
* index licensing
* swaps / hedging contracts
* structured / residual-value products
* partnership / exchange-related revenue
* professional services or one-off fees

15. **Monthly KPI deck since launch**

* New customers, paying customers, retained customers, churn
* ARR/MRR or equivalent recurring data revenue
* ACV, sales cycle, pipeline conversion, win/loss analysis
* segment split: providers / buyers / lenders / traders

16. **Trading and liquidity KPI pack**

* Gross notional traded
* open interest
* number of unique active counterparties
* repeat trade rate
* average trade size and tenor
* bid/ask spreads
* time-to-execution
* cancelled / failed / offboarded counterparties
* hedging vs speculative flow mix

17. **Top-customer concentration**

* Top 20 customers by revenue
* Top 20 counterparties by notional
* Revenue concentration and notional concentration by cohort

18. **Market-maker and liquidity-provider agreements**

* Rebates, fee tiers, quoting obligations, inventory support, loss-sharing, exclusivity

19. **Pipeline and backlog**

* Qualified pipeline by product and expected close date
* Signed-but-not-live customers
* Churned opportunities and reasons

20. **Customer references**

* At least:

  * 2 compute providers
  * 2 compute buyers
  * 2 lenders/investors
  * 1 trader / market maker
  * 1 data/API customer

### D. Counterparty, collateral, treasury, and risk warehousing (**P0 / gating**)

21. **Master trading docs**

* ISDA or equivalent master agreement
* CSA
* product definitions and confirmations
* close-out and early-termination provisions

22. **Margin and collateral methodology**

* Initial / variation margin logic
* eligible collateral
* haircuts
* valuation source hierarchy
* intraday call process
* concentration limits

23. **Custody and segregation architecture**

* Where collateral sits
* legal title and beneficial ownership
* whether collateral is segregated, pledged, rehypothecated, or commingled
* bankruptcy-remoteness analysis

24. **Risk limits and treasury policy**

* VaR / stress / scenario framework
* single-counterparty exposure limits
* SKU/region concentration limits
* stop-trading triggers
* board-approved risk appetite

25. **Re-hedging arrangements**

* Whether Ornn offsets customer risk
* counterparties used for offset
* residual basis left on Ornn's balance sheet
* unhedged exposures by product

26. **Default waterfall and liquidation playbook**

* Who decides liquidation
* liquidation venues / process
* dispute resolution
* capital at risk before customer losses
* post-default funding plan

27. **Principal-risk inventory**

* Current marked exposure by SKU, tenor, and counterparty
* Worst historical mark-to-market swing
* largest customer default exposure

28. **Insurance and credit support**

* D&O, E&O, cyber, crime, fidelity, and any insurance tied to custody / collateral
* Any guarantees, credit lines, or parent support

29. **Residual-value / value-protection economics**

* For any GPU residual-value product: premium model, floor provider, reserve funding, loss absorber, and accounting treatment

### E. Finance, capitalization, and runway (**P1**)

30. **Historical financials**

* Monthly P&L, balance sheet, cash flow since inception
* Most recent year-end financial statements
* Management vs GAAP bridge if applicable

31. **Cash and burn**

* Current cash
* unrestricted vs restricted cash
* monthly burn
* 12-24 month runway model

32. **Cap table**

* Fully diluted ownership
* SAFEs, notes, warrants, option pool
* pro forma for current financing

33. **Budget and operating plan**

* 24-month plan by headcount, legal/compliance, sales, market making, tech, and risk

34. **Unit economics**

* Gross margin by product line
* customer acquisition cost
* payback period
* contribution margin after market/risk infrastructure costs

### F. Technology, security, and operational controls (**P1**)

35. **System architecture**

* Index calculation stack
* API infrastructure
* trade/risk engine
* settlement workflow
* data lineage

36. **Operational metrics**

* API uptime
* index publication SLA
* incident history
* postmortems
* latency and recovery metrics

37. **Security and controls**

* Pen tests, SOC 2 / equivalent, access controls, key management, model governance

38. **BCP / DR**

* Disaster recovery plan
* tabletop exercises
* RTO/RPO targets
* single points of failure

39. **Surveillance and audit trail**

* Monitoring for spoofing, manipulation, abusive trading, bad data submission
* immutable logs and retention policy

### G. Management, governance, and organization (**P1**)

40. **Org chart and bios**

* Full management team
* risk/compliance leadership
* reporting lines

41. **Board materials**

* Last 4 board decks
* KPI packages
* risk committee materials
* major incident memos

42. **Hiring plan**

* Priority hires in legal, compliance, risk, treasury, and institutional sales

43. **Compensation and incentives**

* Senior management comp
* bonus metrics
* equity grants
* any risk-taking incentives tied to volume or P&L

44. **Related-party and conflicts disclosures**

* Any related-party transactions
* founders / board members participating as customers, lenders, or counterparties

### H. Partnerships and distribution (**P0/P1**)

45. **Architect agreement**

* Index licensing
* economics
* exclusivity
* launch conditions
* liability allocation
* regulatory responsibilities

46. **Hydra agreement**

* Data contribution terms
* rights to use data in indices
* exclusivity
* termination rights

47. **Bloomberg inclusion**

* Commercial economics, if any
* symbol / field map
* support obligations
* eligibility / methodology review requirements

48. **Kalshi / verification arrangements**

* Any direct agreement, data license, or settlement verification role

#### First-call questions for management

1. Which products are **actually live today**, by entity and jurisdiction?
2. Who is **regulated for what**, and where is the cleanest legal memo proving it?
3. Does Ornn currently take **principal risk**? If yes, how much and where is it hedged?
4. What percentage of OCPI is sourced from **verifiable transaction prints** vs normalized adjustments?
5. What are the current **notional traded, active counterparties, and repeat trading metrics**?
6. Are customer collateral and Ornn operating assets **segregated**?
7. What would make management say **no** to a customer or product even if revenue were attractive?
8. What is the single strongest proof that Ornn is building a **market**, not just a dataset?

[1]: https://ornn.com/#:~:text=Ornn%20created%20the%20first%20market,The%20standard "Ornn | Financial Products for AI Infrastructure"
