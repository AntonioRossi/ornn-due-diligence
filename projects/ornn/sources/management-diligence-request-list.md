Tailored to **Ornn** as of **April 6, 2026** and based on public information only. The public record is now strong enough to justify deeper diligence, but not strong enough to underwrite the business. The main open questions are no longer just product vision or partner logos. The gating issues are the legal and regulatory map, swap-dealer threshold monitoring, the DCM path, OCPI governance and replicability, valuation and principal-risk controls, technology and privacy controls, tax and IP structure, and whether a four-person team can safely run a benchmark and derivatives stack. ([ornn.com][1])

## Management diligence request list

**Instruction to management:** please provide the following in a dataroom, with one folder owner per section, latest revision date on each file, and a short note indicating whether the file is final, draft, or board-only.

**Diligence sequencing:** populate all **P0 / gating** items first. No exclusivity, term sheet, or final IC recommendation should be considered until the P0 package is substantially complete, management interviews are held, and the OCPI replication workstream is finished.

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

4. **All outside-counsel memos and regulatory analyses**

   * All memos, slide decks, email summaries, and board materials addressing the current structure under CFTC, NFA, SEC, state, Bermuda, or other applicable law
   * Include draft, superseded, adverse, risk-flagging, or alternative-structure analyses, not only the materials ultimately relied upon
   * Include any exemption, no-action, interpretive, licensing, or registration analysis relied upon

5. **Regulatory interaction log**

   * All past and current inquiries, deficiency letters, exam requests, subpoenas, complaints, or threatened actions
   * Any internal incident escalation tied to compliance, eligibility, suitability, benchmark integrity, or customer treatment

6. **Litigation and dispute log**

   * Current, threatened, or settled disputes with customers, partners, vendors, or former employees

7. **Swap-dealer de minimis threshold monitoring pack**

   * Current and trailing-12-month gross notional by product, entity, customer type, and affiliate
   * Analysis of whether any affiliated activity must be aggregated toward the threshold
   * Monitoring procedures, escalation triggers, board reporting, and owner
   * Contingency plan if the threshold is breached, including registration timeline, capital/compliance buildout, and cost estimate

8. **DCM application status and readiness pack**

   * Current DCM application materials and all CFTC feedback received to date
   * Timeline, milestones, dependencies, and outside-counsel view on probability and timing
   * Capital, surveillance, governance, and compliance gap analysis between current state and DCM requirements
   * Contingency plan if the application is denied, materially delayed, or narrowed in scope

### B. Tax structure and intercompany economics (**P0 / gating**)

9. **Entity-level tax structure memorandum**

   * Tax treatment of each legal entity and each major revenue stream
   * Federal, state, local, and foreign filing posture
   * Analysis of tax treatment for swap revenue, benchmark licensing, data/API revenue, and any residual-value products

10. **Transfer pricing and intercompany-flow analysis**

   * Current and proposed transfer-pricing framework between **Ornn AI Inc.**, **ORNNX LLC**, and **Ornn Data LLC**
   * Intercompany services, IP licensing, cost-sharing, and revenue-allocation mechanics
   * Any transfer-pricing studies, outside opinions, or draft analyses

11. **Nexus, withholding, and tax-risk log**

   * State and local nexus analysis, including New York
   * Any withholding, sales/use, gross-receipts, or franchise-tax exposure
   * Any tax authority correspondence, audits, or opinions relating to derivatives classification or benchmark/data revenue

### C. Intellectual property, data rights, and benchmark governance (**P0 / gating**)

12. **IP ownership and chain-of-title pack**

   * Patent filings, applications, invention disclosures, and trademark filings
   * IP assignment agreements from all founders, employees, and contractors
   * Any prior-employer consent, invention-assignment carveout, or encumbrance issue

13. **Trade-secret and IP protection pack**

   * Trade-secret inventory for OCPI methodology, calculation stack, contributor-normalization logic, and valuation models
   * Protection measures, access controls, confidentiality practices, and enforcement history
   * Protectability analysis addressing whether the methodology can be replicated without infringing Ornn IP

14. **Open-source and third-party software audit**

   * Full dependency inventory for the calculation stack, API stack, and trade/risk systems
   * License obligations, copyleft risk, and remediation plan for any incompatibilities
   * Any third-party software, data, or model licenses material to OCPI or swap operations

15. **Full OCPI methodology document**

   * Definitions, sampling rules, weighting, normalization, exclusions, settlement procedures, calculation timing, fallback methodology, and methodology governance

16. **Methodology change log**

   * Every methodology revision since inception
   * Rationale, approval path, and affected products / customers

17. **Contributor universe, concentration, and minimum-viability pack**

   * Number of contributors by GPU SKU, geography, customer type, and venue/source
   * Top contributor concentration by volume and by count, with top-3, top-5, and top-10 views
   * Minimum number of contributors required for publication by SKU and region
   * Scenario analysis for loss of the top 1, top 3, and top 5 contributors
   * Percentage of index derived from direct transaction data versus inferred or normalized adjustments

18. **Raw data pack for independent replication**

   * All available anonymized contributor data since OCPI launch, plus any pre-launch backtesting data used to validate the methodology
   * Include timestamps, SKU attributes, region, provider type, transaction status, validation flags, and any normalization inputs
   * Provide enough detail for an independent party to recalculate OCPI and reconcile the result to published values

19. **Verification and anti-manipulation controls**

   * How transactions are verified as arm's-length
   * Outlier filters, stale-print handling, wash-trade / circular-pricing protections
   * Restatement triggers, publication controls, and incident escalation procedures

20. **IOSCO benchmark governance and compliance assessment**

   * Current mapping against the IOSCO Principles for Financial Benchmarks
   * Identified gaps, remediation roadmap, owners, and target dates
   * Governance committee charter, minutes, escalation framework, conflicts policy, and any independent reviewer or calculation-agent arrangement

21. **Data rights and exclusivity**

   * Contracts or summaries showing Ornn's right to use third-party data for index creation and commercial redistribution
   * Any exclusivity, minimum data volume, termination, audit, or data-quality obligations

### D. Commercial traction and liquidity formation (**P0 / gating**)

22. **Revenue bridge by product line**

   * data/API
   * index licensing
   * swaps / hedging contracts
   * structured / residual-value products
   * partnership / exchange-related revenue
   * professional services or one-off fees

23. **Monthly KPI deck since launch**

   * New customers, paying customers, retained customers, churn
   * ARR/MRR or equivalent recurring data revenue
   * ACV, sales cycle, pipeline conversion, win/loss analysis
   * segment split: providers / buyers / lenders / traders

24. **Trading and liquidity KPI pack**

   * Gross notional traded
   * open interest
   * number of unique active counterparties
   * repeat trade rate
   * average trade size and tenor
   * bid/ask spreads
   * time-to-execution
   * cancelled / failed / offboarded counterparties
   * hedging versus speculative flow mix
   * order-book depth or equivalent pre-trade liquidity metrics where applicable

25. **Top-customer and counterparty concentration**

   * Top 20 customers by revenue
   * Top 20 counterparties by notional
   * Revenue concentration and notional concentration by cohort

26. **Market-maker and liquidity-provider agreements**

   * Rebates, fee tiers, quoting obligations, inventory support, loss-sharing, exclusivity

27. **Pipeline and backlog**

   * Qualified pipeline by product and expected close date
   * Signed-but-not-live customers
   * Churned or declined opportunities and reasons

28. **Customer and market references**

   * At least 2 compute providers
   * At least 2 compute buyers
   * At least 2 lenders/investors
   * At least 1 trader / market maker
   * At least 1 data/API customer
   * At least 2 references from churned or declined prospects
   * At least 1 reference to be independently identified by the diligence team rather than management-provided
   * Include counterparties who have completed a full margin-call or settlement cycle where available

### E. Counterparty, collateral, valuation, and risk warehousing (**P0 / gating**)

29. **Master trading docs**

   * ISDA or equivalent master agreement
   * CSA
   * product definitions and confirmations
   * close-out and early-termination provisions

30. **Margin and collateral methodology**

   * Initial / variation margin logic
   * eligible collateral
   * haircuts
   * valuation source hierarchy
   * intraday call process
   * concentration limits

31. **Custody and segregation architecture**

   * Where collateral sits
   * legal title and beneficial ownership
   * whether collateral is segregated, pledged, rehypothecated, or commingled
   * bankruptcy-remoteness analysis

32. **Risk limits and treasury policy**

   * VaR / stress / scenario framework
   * single-counterparty exposure limits
   * SKU/region concentration limits
   * stop-trading triggers
   * board-approved risk appetite

33. **Re-hedging arrangements**

   * Whether Ornn offsets customer risk
   * counterparties used for offset
   * residual basis left on Ornn's balance sheet
   * unhedged exposures by product

34. **Default waterfall and liquidation playbook**

   * Who decides liquidation
   * liquidation venues / process
   * dispute resolution
   * capital at risk before customer losses
   * post-default funding plan

35. **Principal-risk inventory**

   * Current marked exposure by SKU, tenor, and counterparty
   * Worst historical mark-to-market swing
   * largest customer default exposure

36. **Valuation, mark-to-market, and model-risk governance**

   * Mark-to-market methodology for open positions
   * Independent valuation source or price-verification process, including any reliance on internally produced indices
   * Valuation committee materials, model-validation documentation, and change-control process
   * Valuation dispute-resolution procedures and historical disputes

37. **Prop trading, personal trading, and information-barrier controls**

   * Formal information-barrier policy between index production, trading, sales, and partner-distribution functions
   * Personal trading policy for all employees and contractors
   * Front-running, pre-hedging, and customer-flow surveillance controls
   * Revenue attribution showing facilitation versus proprietary-risk revenue

38. **Insurance and credit support**

   * D&O, E&O, cyber, crime, fidelity, and any insurance tied to custody / collateral
   * Any guarantees, credit lines, key-person coverage, or parent support

39. **Residual-value / value-protection economics**

   * For any GPU residual-value product: premium model, floor provider, reserve funding, loss absorber, and accounting treatment

### F. Finance, capitalization, and runway (**P0 / gating**)

40. **Historical financials**

   * Monthly P&L, balance sheet, cash flow since inception
   * Most recent year-end financial statements
   * Management versus GAAP bridge if applicable

41. **Cash and burn**

   * Current cash
   * unrestricted versus restricted cash
   * monthly burn
   * 12-24 month runway model

42. **Cap table**

   * Fully diluted ownership
   * SAFEs, notes, warrants, option pool
   * pro forma for current financing

43. **Budget and operating plan**

   * 24-month plan by headcount, legal/compliance, sales, market making, tech, and risk

44. **Unit economics**

   * Gross margin by product line
   * customer acquisition cost
   * payback period
   * contribution margin after market/risk infrastructure costs

### G. Technology, privacy, security, and operational controls (**P0 / gating**)

45. **System architecture**

   * Index calculation stack
   * API infrastructure
   * trade/risk engine
   * settlement workflow
   * data lineage

46. **Operational metrics**

   * API uptime
   * index publication SLA
   * incident history
   * postmortems
   * latency and recovery metrics

47. **Security and controls**

   * Pen tests, SOC 2 / equivalent, access controls, key management, and privileged-access reviews

48. **Privacy and cross-border data compliance**

   * GDPR, CCPA, and other applicable privacy analyses
   * Data-processing agreements and vendor/subprocessor list
   * Cross-border data-transfer mechanisms
   * Privacy impact assessments and incident log

49. **BCP / DR**

   * Disaster recovery plan
   * tabletop exercises
   * RTO/RPO targets
   * single points of failure

50. **Surveillance, audit trail, and immutable logging**

   * Monitoring for spoofing, manipulation, abusive trading, bad data submission, and unauthorized methodology changes
   * Immutable logs, retention policy, and evidence-preservation controls

### H. Management, governance, and organization (**P0 / gating**)

51. **Org chart and bios**

   * Full management team
   * risk/compliance leadership
   * reporting lines

52. **Board materials**

   * Last 4 board decks
   * KPI packages
   * risk committee materials
   * major incident memos

53. **Key-person risk, founder vesting, and succession**

   * Founder vesting schedules, acceleration triggers, and current vesting status
   * Key-person dependencies by function, succession plans for CEO and CTO, and knowledge-transfer plan
   * Non-compete, non-solicit, and confidentiality enforceability analysis

54. **Hiring plan**

   * Priority hires in legal, compliance, risk, treasury, surveillance, and institutional sales

55. **Compensation and incentives**

   * Senior management comp
   * bonus metrics
   * equity grants
   * any risk-taking incentives tied to volume or P&L

56. **Related-party and conflicts disclosures**

   * Any related-party transactions
   * founders / board members participating as customers, lenders, or counterparties
   * Any founder, board, or investor relationship that bears on governance or conflict review

57. **Management presentations, individual interviews, and site visit**

   * Individual sessions with CEO, CTO, commercial lead, and any risk/compliance owner
   * Live walkthrough of index calculation, risk management, and incident-handling workflows
   * HQ or operational site visit schedule and attendee list

### I. Partnerships and distribution (**P1 / important after P0 closes**)

58. **Architect / AX agreement and Bermuda regulatory interface**

   * Index licensing
   * economics
   * exclusivity
   * launch conditions
   * liability allocation
   * regulatory responsibilities
   * Bermuda legal analysis applicable to AX or related perpetual / futures products

59. **Hydra agreement**

   * Data contribution terms
   * rights to use data in indices
   * exclusivity
   * termination rights

60. **Bloomberg inclusion**

   * Commercial economics, if any
   * symbol / field map
   * support obligations
   * eligibility / methodology review requirements

61. **Kalshi or other event-market arrangements**

   * Any direct agreement, data license, settlement verification role, or liability allocation

62. **Robinhood or other broker / retail distribution arrangements**

   * Any agreement, revenue share, compliance allocation, customer-disclosure responsibility, or settlement-data role tied to OCPI or related contracts

#### First-call questions for management

1. Which products are **actually live today**, by entity and jurisdiction?
2. Who is **regulated for what**, and where is the cleanest legal memo proving it?
3. What is your current **gross notional against the de minimis threshold**, how is it monitored, and what happens when you cross it?
4. What is the current **DCM application status**, what has the CFTC said, and what is the contingency if approval slips or fails?
5. Does Ornn currently take **principal risk**? If yes, how much, where is it hedged, and how is it marked?
6. Who provides the **independent mark-to-market** on open positions if Ornn is both the benchmark producer and the counterparty?
7. What percentage of OCPI is sourced from **verifiable transaction prints** versus normalized adjustments, and when can we begin independent replication?
8. What is the minimum contributor set required for OCPI to publish, and what happens if the top contributors disappear?
9. Are customer collateral and Ornn operating assets **segregated**, and where exactly do they sit in a default?
10. Show us the last 90 days of **order-book depth, repeat-trade metrics, and active counterparty counts**, broken out by counterparty type.
11. Which individual departure would create the largest operational gap today, and what is the concrete succession plan?

[1]: https://ornn.com/#:~:text=Ornn%20created%20the%20first%20market,The%20standard "Ornn | Financial Products for AI Infrastructure"
