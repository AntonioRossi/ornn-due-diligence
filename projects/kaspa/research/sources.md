# Kaspa + Igra Research Sources

Compiled: 2026-05-27
Audience: investment-committee diligence on Kaspa (KAS) + Igra Network (IGRA) for professional investors

## Primary sources (project-controlled)

### Kaspa core team / community

- [Kaspa Homepage / Genesis Proof](web/kaspa-homepage.md) — kaspa.org. Fair-launch positioning; reproducible genesis proof notebook (kaspagang/kaspad-py-explorer).
- [Kaspa Tokenomics Wiki](web/kaspa-tokenomics-wiki.md) — wiki.kaspa.org/en/tokenomics. Authoritative emission schedule, supply cap (28.7B), 95%-mined milestone (Jul 10 2026).
- [Kaspa / Kasplex KRC-20 Wiki](web/kasplex-krc20-wiki.md) — wiki.kaspa.org/en/Kasplex_KRC_20. Third-party Kasplex protocol details, wallets, indexers.
- [Kaspa Covenants++ "Toccata" Hard-Fork Outlook (Michael Sutton, Medium)](web/kaspa-toccata-michael-sutton.md) — primary source for Toccata roadmap (mainnet June 5–20, 2026).
- [Kaspa Ecosystem Foundation (KEF)](web/kaspa-ecosystem-foundation.md) — kaspafoundation.org. Grants, partnerships, featured projects.

### Igra Labs

- [Igra Labs Homepage / Roadmap](web/igra-labs-homepage.md) — igralabs.com. Swiss-governed, naval-themed roadmap, Sigma Prime audit.
- [Igra Labs Team](web/igra-labs-team.md) — igralabs.com/team. 8 named team members + advisor. 3 of 8 are ex-DAGLabs.
- [Igra Labs Vision](web/igra-labs-vision.md) — igralabs.com/vision. Multi-VM "rooftop" thesis, 3,000 TPS / sub-second finality target.
- [IGRA Token](web/igra-labs-token.md) — igralabs.com/igra-token. Distribution table, Swiss Association governance, ZAP auction.
- [Igra Litepaper v1.0](web/igra-litepaper.md) — github.com/IgraLabs/research. 26-page technical paper; based rollup, ATAN data availability, three-tier bridging.
- [Igra Fleet / Ecosystem](web/igra-labs-ecosystem.md) — igralabs.com/ecosystem. 20+ live or testnet protocols.

## Independent third-party / institutional

- [Igra Network Public Mainnet Launch (Chainwire press release)](web/igra-mainnet-launch.md) — distributed via TradingView, CryptoBriefing, Globe and Mail. Mar 19 2026.
- [Sigma Prime Igra Smart Contracts Audit (PDF)](https://github.com/sigp/public-audits/blob/master/reports/igra/Sigma_Prime_Igra_Core_Smart_Contracts_Security_Assessment_Report_v2_1.pdf) — public report. Same firm as Ethereum Lighthouse consensus client.
- [Kasmedia Weekly Knight (Apr 11 2026)](web/kaspa-toccata-weekly-knight.md) — kasmedia.com. Toccata June 5–20 confirmation; IGRA auction summary; ecosystem updates.
- [Kaspa Roadmap 2026-2027 (Our Crypto Talk)](web/kaspa-roadmap-ourcryptotalk.md) — ourcryptotalk.com. Third-party roadmap explainer; Toccata + 100 BPS + DAGKnight + VProgs.
- [Kaspa Notes — Igra Labs L2](web/kaspa-igra-labs-notes.md) — community summary.
- [Kaspa on CoinMarketCap](web/kaspa-coinmarketcap.md) — live market data (rank 62, $899.5M mcap, -84% from ATH, 95.69% circulating).
- [ByteTree Token Takeaway: Kaspa](web/bytetree-kaspa-analysis.md) — bytetree.com institutional research (Aug 2024). Confirms DAGLabs/Polychain IP waiver.
- [DAGLabs / Polychain Funding History](web/kaspa-daglabs-funding-history.md) — synthesis from wiki.kaspa.org/daglabs, hashdag.medium.com, investing.com.
- [Exchange Listing Status (Bitget Academy)](web/kaspa-exchange-listings.md) — bitget.com. Binance/Coinbase NOT listed as of March 2026.
- [Kaspa's Hype Is Unjustified (CrowdFund Insider)](web/kaspa-criticism-crowdfundinsider.md) — bearish institutional view. May 2026.

## Source citation index for IC memo

| # | Source | Anchor claim |
|---|--------|--------------|
| 1 | kaspa.org | Fair-launch, no premine, reproducible genesis proof |
| 2 | wiki.kaspa.org/en/tokenomics | 28.7B supply cap; 95% mined by Jul 10 2026 |
| 3 | medium.com/@michaelsuttonil (Toccata) | Mainnet hard fork June 5–20 2026; covenants + zk + Silverscript |
| 4 | igralabs.com | Swiss Association; Sigma Prime audit clean |
| 5 | github.com/sigp/public-audits (Sigma Prime Igra) | Public audit report PDF |
| 6 | kasmedia.com | Toccata roadmap and IGRA auction confirmations |
| 7 | ourcryptotalk.com | Roadmap (Toccata, DAGKnight, vProgs); ecosystem detail |
| 8 | coinmarketcap.com/currencies/kaspa | Live market metrics; -84% from ATH |
| 9 | bytetree.com Token Takeaway | DAGLabs + Polychain IP rights waiver |
| 10 | wiki.kaspa.org/daglabs | $8M Polychain funding, repaid |
| 11 | igralabs.com/igra-token | IGRA tokenomics; Swiss Association |
| 12 | github.com/IgraLabs/research/blob/main/igra-litepaper-v1.0.pdf | Technical architecture, three-tier bridging |
| 13 | kaspafoundation.org | KEF mission, grants, featured projects |
| 14 | bitget.com/academy (March 2026) | Binance/Coinbase listing status |
| 15 | crowdfundinsider.com (May 2026) | Bearish "hype unjustified" institutional view |
| 16 | igralabs.com/team | Named team; ex-DAGLabs lineage (Mashkevich, Zak, Melnikov) |
| 17 | tradingview.com Chainwire (Mar 19 2026) | Mainnet launch metrics; 730K txns testnet; $5M ecosystem TVL |
| 18 | igralabs.com/vision | Multi-VM atomic composability long-term thesis |

## Notes on collection methodology

- All scrapes conducted via Firecrawl MCP between 2026-05-25 and 2026-05-27
- PDF (Igra Litepaper) parsed via firecrawl `parsers: ["pdf"]` through a delegated subagent
- No outside research beyond Firecrawl sources unless explicitly cross-referenced
- Conflicting fact (Kraken KAS listing) flagged in gaps.md
