# Bittensor — Research Gap Tracker

Updated: 2026-05-26

## Corporate structure

- [x] What is the legal map?
  → **Resolved.** **Opentensor Foundation** is a **Swiss-domiciled non-profit**
  that maintains the core protocol code and seats the Triumvirate. (yellow-who-controls-bittensor.md, messari-bittensor.md)
  The Bittensor Network itself is positioned as "community-owned" with no
  formal entity ownership (per the REX-Osprey SEC filing).
- [x] Where is the foundation incorporated?
  → **Resolved.** Switzerland (per yellow-who-controls-bittensor.md). FINMA
  guidance is the relevant non-US regulatory backdrop.
- [ ] Is there an Opentensor Foundation legal entity in Switzerland disclosed
  publicly with a registered address, board, and audit history?
  → **Not resolved.** No detailed corporate registry information in the public
  sources reviewed. **Open** for diligence.

## Token classification (TAO)

- [x] What is TAO's supply structure?
  → **Resolved.** 21M hard cap (Bitcoin mirror); Bitcoin-style halving every
  ~4 years; first halving completed Dec 15, 2025 reducing daily emission from
  7,200 → 3,600 TAO. (coinbureau-bittensor-review, messari-bittensor.md)
- [x] What is the dTAO mechanism?
  → **Partially resolved.** Each subnet has its own alpha token traded against
  TAO via AMM. Subnet emission share is determined by net TAO flows
  (post-November 2025). (bittensor-emissions-taoflow.md, bittensor-subnets-understanding.md)
  Full mechanic details for de-registration, registration fees, and
  cross-subnet alpha-token interactions require deeper docs review.
- [ ] How does the SEC characterize TAO under existing guidance?
  → **Partially resolved.** No specific SEC statement on TAO. The REX-Osprey
  ETF filing characterizes Bittensor as having "no entity" ownership. The
  delegation-reward structure is acknowledged as similar to prior SEC
  enforcement targets (yellow-who-controls-bittensor.md). The Grayscale Spot
  ETF S-1 filing (Dec 30, 2025) is the **single biggest pending regulatory
  signal**. **Open until SEC ruling.**
- [ ] What is TAO's MiCA classification in the EU?
  → **Not resolved.** Open. Bittensor is operationally present in the EU but
  no MiCA classification has been publicly issued.

## Governance and decentralization

- [x] What is the governance model?
  → **Resolved.** Bicameral: **Triumvirate** (Opentensor Foundation employees,
  create + close proposals) + **Senate** (top K delegate hotkeys, 50%+1 approval
  required). Senate members own >2% of total stakes. K=12 by default. (bittensor-governance.md)
- [x] How concentrated is voting power in practice?
  → **Partially resolved.** Yellow research finds top 10 validators by stake
  hold "a combined share large enough to form a supermajority in scoring
  scenarios"; **top 64 validators control 100% of subnet emission weights.**
  Specific Gini-coefficient data not publicly aggregated. (yellow-who-controls-bittensor.md)
- [x] Does the Opentensor Foundation retain unilateral upgrade authority?
  → **Partially resolved.** Pre-governance: a single `sudo` private key
  controlled everything. Post-governance: Triumvirate (OTF employees) retains
  exclusive proposal creation + closure authority — Senate can only approve,
  not initiate. This is structurally **foundation-led governance** with
  community approval rights. (bittensor-governance.md)
- [ ] What is the current Senate composition and rotation policy?
  → **Not resolved.** Senate seat assignments and rotation are not aggregated
  publicly. **Open.**

## Team and operating-model risk

- [x] Who are the founders?
  → **Resolved.** **Jacob Robert Steeves** ("Const"; former Google Brain
  engineer at Knowm; Peru-based per IQ.wiki) and **Ala Shaabana** (former
  Postdoctoral Fellow at University of Waterloo, Assistant Professor at U
  Toronto, senior software engineer at Instacart). **James Woodman** listed as
  Head of Growth per Aug 2023 OK Senate PDF. (messari-bittensor.md, yellow-bittensor-2.7b-research.md)
- [x] When was Bittensor founded?
  → **Resolved (with caveat).** CBInsights says 2019. Steeves' LinkedIn says
  he worked on Bittensor since March 2016. **Discrepancy** to surface for
  management.
- [ ] What is the Opentensor Foundation org structure?
  → **Not resolved.** Number of employees, named officers, board, advisors,
  audit committee — none publicly disclosed.
- [ ] Are there any active founder-disputes or governance fractures?
  → **Partially resolved.** Blocmates "TAO Saga" article references a "Sam vs
  Jacob" OTF dispute; IQ.wiki mentions "Covenant AI's founder accused Jacob
  Steeves of maintaining centralized control." Specifics not captured in this
  research pass. **Open.**

## Network technology and operations

- [x] What is the consensus mechanism today?
  → **Resolved.** Yuma Consensus running on **Subtensor** (Substrate-based
  chain). Stake-weighted scoring with sigmoid consensus function. (bittensor-paradigm-about.md, bittensor-whitepaper-yuma-rao.md)
- [x] Has the network been audited?
  → **Partially resolved (mostly negative).** Per Messari (Dec 2024): "no
  publicly disclosed audits." Opentensor Foundation announced (Jul 3, 2024)
  intentions to increase audit frequency, but no completion announcements
  visible in the public record reviewed. **$25M Nexus Mutual smart-contract
  insurance** cover purchased in Feb 2025 — partial substitute for audit
  attestations but not equivalent. (messari-bittensor.md)
- [x] Has the network experienced any security incidents?
  → **Resolved.** **2024 PyPi Package Manager breach** — compromised package
  led to private-key exposure; **32,000+ TAO stolen** (~$9M at current price).
  Network entered "safe mode" to halt transactions. (messari-bittensor.md)
  Also: **Tensorplex Stake / tTAO Bridge wind-down (May 2026)** due to
  cybersecurity threats.
- [ ] What is the v10.0.0 / v10.3.1 release history and the Root Claim / MEV
  Shield Protection content?
  → **Partially resolved.** Messari lists release notes verbatim but full
  technical implications need engineering review.

## Traction and customer claims

- [x] How many subnets are active?
  → **Resolved (with caveat).** **64 active subnets** as of April-May 2026 per
  Yellow research. Older sources cite 32 (Coin Bureau, Dec 2024). Lex podcast
  cites 128 (April 2026) — likely includes inactive/registered subnets.
  Max possible per the network: 1,024 logical subnets.
- [x] What is the staking participation rate?
  → **Resolved.** **65% of circulating TAO** is staked or delegated.
  (yellow-bittensor-2.7b-research.md)
- [x] Are there named external consumers of Bittensor's AI output?
  → **Partially resolved.** **Corcel** API has processed 50M+ inference calls
  (third-party startup built on Bittensor). **Macrocosmos (Subnet 9)** has
  publicly downloadable LLM weights on HuggingFace used by external
  researchers. Other named consumer references unverified. (yellow-bittensor-2.7b-research.md)
- [ ] What is the actual GPU footprint backing the network?
  → **Not resolved.** Unlike Gonka's gonkascan H100-equivalent claims, no
  comprehensive figure published. Yellow reports competitive mining requires
  A100/H100 instances with monthly costs of $1.5k-$6k per miner. **Open.**

## Market and price

- [x] What is the current market state?
  → **Resolved.** Price ~$283 (May 26, 2026). Market cap ~$3.09–$3.16B. FDV
  ~$5.92–$5.94B. 24h volume ~$275–$373M. Open Interest $214M (futures).
  Circulating: 10.94M/21M (52.11%). 30D volatility: 73.25%. (messari-bittensor.md, coinmarketcap-tao.md)
- [x] What was the all-time high?
  → **Resolved.** $752.14 (Mar 7, 2024) per Messari / $767.68 (Apr 11, 2024)
  per CMC. Current is ~63% below ATH.
- [x] Where can TAO be bought?
  → **Resolved.** **Coinbase** (listed Feb 20, 2025), Binance, Kraken, MEXC,
  Bitget, Gate.io, KuCoin. Plus DEX trading via Kujira Fin and others.
- [x] Is there an ETF?
  → **Partially resolved.** **Grayscale Bittensor Trust (GTAO)** publicly
  listed on OTCQX since Dec 11, 2025. **Grayscale filed S-1 to convert GTAO
  into a Spot Bittensor ETF on Dec 30, 2025.** SEC decision pending.

## Open items summary

P0 (gating) unresolved items:
1. SEC ruling on Grayscale Spot Bittensor ETF (timing and outcome)
2. Senate composition and rotation; concentration of voting power in named
   delegates
3. Opentensor Foundation legal entity details (registered address, audit
   history, employee count, board)
4. Founder dispute / governance fracture status (Sam vs Jacob; Covenant AI
   centralization accusations)
5. Subnet-owner / validator overlap analysis (who owns which validators in
   which subnets)
6. MiCA classification of TAO and subnet alpha tokens

P1 (important) unresolved items:
7. Named institutional customers beyond Corcel (with monthly usage)
8. Tensorplex / cybersecurity-event follow-up — root cause and any TAO loss
9. v10.0.0 / Root Claim / MEV Shield / Crowdloan technical implications
10. Subnet-token Howey analyses (each alpha token may carry separate exposure)
