# CoinMarketCap — Gonka (GNK) Live Market Data

- **URL:** https://coinmarketcap.com/currencies/gonka/
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape, formats: markdown, onlyMainContent: true
- **Reliability:** Third-party (industry-standard market data aggregator)

## Live price snapshot

| Metric | Value |
|---|---|
| Price | **$0.2598 USD** |
| 24h change | 0.00% |
| Market cap | N/A |
| 24h volume | **$0** ⚠️ |
| Vol/Mkt Cap | — |
| FDV | $0 |
| Total supply | 0 GNK (CMC has not indexed on-chain supply) |
| Circulating supply | 0 GNK |
| All-time high | **$2.61** (Jan 15, 2026) → currently **–90.04%** from ATH |
| All-time low | **$0.2397** (May 20, 2026) → +8.37% from ATL |
| CMC rank | #7957 |
| CMC UCID | 39328 |
| CertiK rating | 4.2 |

## Tags / classification

- AI & Big Data, DePIN, Distributed Computing

## "About" section (verbatim, useful for context)

> Currently, the Gonka network has scaled to an aggregate compute capacity
> equivalent of approximately **11,000 H100 GPUs** and keeps growing. The Gonka
> coin is **not yet listed on major centralized exchanges**. Gonka can be
> acquired:
> - through mining, or
> - designated bounty and incentive programs.

> Gonka has been incubated by the American AI developer, **Product Science
> Inc.**, started by the Web2 industry veterans, **Libermans Siblings, former
> Directors of Product at Snap Inc.** Gonka development kicked off in 2024 in
> a stealth mode as a passion project and was completed in **February 2025**.
> **Mainnet launched in August, 2025.**

> The GNK coin is the native utility and economic unit of the Gonka
> decentralized AI compute network. It is used:
> - to compensate participants who contribute computational resources
> - to execute AI inference and training workloads
> - to price access to those computing services within the network.

## Supported wallets

- Keplr, Leap Wallet, Fox Wallet, `inferenced` CLI

## Explorer

- gonkascan.com

## Notes for analyst

- **No CEX listing, 24h volume = $0.** The token is effectively illiquid on
  public order books. The CMC price of $0.2598 likely derives from indexed
  P2P / OTC activity (CertiK pulse showed brief $14k volume spike on May 21,
  2026) and/or the community-pool liquidity-pool sale mechanism described in
  the tokenomics PDF.
- **All-time high $2.61 (Jan 15, 2026) → current $0.26 = ~90% drawdown.**
- "Compute equivalent of ~11,000 H100 GPUs" per CoinMarketCap ≈ matches the
  Dec 17, 2025 PANews/Bitget figure of 10,729; CMC text may be using a more
  recent snapshot but the same order of magnitude.
- Total/Circulating supply showing as 0 GNK on CMC implies on-chain
  supply oracle is not yet integrated — CMC has not formally indexed the token,
  so the rank, market cap, and price are partial / unverified.
- Cosmos ecosystem wallet support implies Gonka is a Cosmos SDK chain with
  IBC-compatible address format (`gonka1…` and `gonkavaloper1…` prefixes
  observed in earlier scrape).
