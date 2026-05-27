# SEC Staff Statement — PoW Mining (March 20, 2025) [Latham & Watkins analysis]

- **URL:** https://www.fintechanddigitalassets.com/2025/04/sec-staff-clarifies-that-crypto-mining-does-not-implicate-the-securities-laws/
- **Author:** Latham & Watkins (Jenny Cieplak et al.)
- **Subject:** SEC Division of Corporation Finance Staff Statement on Certain
  Proof-of-Work Mining Activities (Mar 20, 2025)
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape, formats: markdown, onlyMainContent: true
- **Reliability:** Third-party legal analysis citing the SEC primary document.
  For binding citation, the SEC's own statement at
  https://www.sec.gov/newsroom/speeches-statements/statement-certain-proof-work-mining-activities-032025
  is the authority.

## Key Staff Statement findings (US securities law)

- The SEC Staff (CorpFin Division) clarified that **PoW mining of "Covered
  Crypto Assets" does not constitute the offer and sale of securities** under
  Section 2(a)(1) of the Securities Act of 1933 nor Section 3(a)(10) of the
  Securities Exchange Act of 1934.
- "Covered Crypto Assets" are defined as crypto assets that:
  - are **intrinsically linked to the programmatic functioning of a public,
    permissionless network**, AND
  - meet at least one of:
    - used to participate in consensus
    - earned for participating in consensus
    - used to maintain technological operation/security
    - earned for maintaining technological operation/security
- Both **solo PoW mining and pooled PoW mining** are categorized as
  "administrative or ministerial activity" — not investment contracts under
  _Howey_.

## Critical caveats (load-bearing for Gonka analysis)

- The Statement is **Staff guidance, not Commission rulemaking** — non-binding
  and revocable.
- The Statement **addresses PoW generally**, not "all of PoW's variations or
  any specific PoW protocol." A novel consensus that calls itself "Proof of
  Work" but operates differently may fall outside the safe harbor.
- The Statement explicitly notes: "where facts vary from those presented … such
  as the way in which pool members may be compensated, how miners or other
  persons may participate in mining pools, or the activities conducted by pool
  operators – the [Staff's] view as to whether the specific Mining Activity
  involves the offer and sale of a security may be different."
- **Commissioner Crenshaw dissented** sharply, arguing the assumption that
  miners only mine for block rewards (rather than to profit from third-party
  managerial efforts) is unsupported. Future SEC composition could revisit.

## Application to Gonka (analyst notes — NOT in the source)

Gonka's "Proof of Compute" / "Proof of Contribution" mechanism is a **variant**
of PoW — productive inference work rather than hash-puzzle solving. Specific
questions the SEC framework leaves open for Gonka:

1. Is GNK "intrinsically linked to the programmatic functioning of a public,
   permissionless network"? Likely yes — GNK is the native unit of a Cosmos SDK
   chain.
2. Is GNK "earned for participating in consensus / maintaining technological
   operation/security"? Arguably yes for Reward Coins (Bitcoin-style PoC
   emissions) — Hosts earn GNK by submitting valid PoC nonces during Sprints.
3. **However**, GNK rewards are not purely consensus-block rewards. They include:
   - **Work Coins** paid by Developers for inference services — these look more
     like **service fees** than mining rewards, blurring the PoW analogy.
   - **Utilization bonuses** and **model coverage incentives** — these are
     **discretionary protocol-defined rewards** that go beyond classic block
     rewards.
   - **Vesting schedule** + **collateral-backed influence** — these features
     more closely resemble **staking** (PoS) than pure PoW.
4. The **180-epoch grace period** where new participants earn full governance
   weight via PoC alone (no collateral) is fine; but after that, the network
   shifts to **collateral-locking for full voting weight** — this is structurally
   a **PoS-like staking model**, which the SEC Staff Statement does NOT cover.
5. The **Founders' Allocation (200M, 20%)** is a pre-mined founder grant, which
   under prior SEC framings (e.g. the Ripple case) has been a major
   investment-contract factor for the founder allocation distribution rather
   than for protocol mining.
6. The **Community Pool sale mechanism** (USDT/ETH/BTC → preprogrammed GNK
   minting) described in the tokenomics PDF could be characterized as an
   ongoing token sale by the network entity — outside the PoW safe harbor.

## Notes for IC memo

- The PoW safe harbor is **partial and conditional** — it cleanly covers the
  Bitcoin/Litecoin/Dogecoin paradigm, but Gonka's hybrid PoC + collateral +
  Work Coins + Founders' Allocation structure has elements that **do not fit
  the safe harbor**.
- Gonka's tokenomics PDF self-acknowledges this risk explicitly:
  > The model assumes compliance with decentralized network principles and
  > thus, no classification as a security in the United States and other
  > jurisdictions with similar approaches to crypto asset regulation… There is
  > no guarantee that regulators, now or in the future, will agree with the
  > positions taken by the Gonka project regarding the classification,
  > treatment, or operation of GNK coins.
- Non-US jurisdictions (EU MiCA, UK FCA, Asian regimes) apply different and
  often stricter analyses. The Gonka regulatory thesis is **US-centric**.
