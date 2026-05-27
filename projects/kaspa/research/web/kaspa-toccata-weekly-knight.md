# The Weekly Knight: Toccatta Forks and Pie (KasMedia, Apr 11 2026)

Source: https://kasmedia.com/article/weekly-knight-development-is-wild
Authors: Jennifer Ghelardini, Nicholas Sismil
Published: April 11, 2026
Scraped: 2026-05-27

## Key items

### Toccata hard-fork roadmap

- Michael Sutton published roadmap April 2, 2026
- Mainnet activation expected June 5–20, 2026
- Activates Silverscript L1 programmability, zk verification opcodes, partitioned sequencing commitment scheme (KIP-21)
- KIP-21 finalization the reason for slip from May 5, 2026 target

### KIP context

- **KIP-16**: zk verification opcodes (Groth16 + RISC Zero STARK)
- **KIP-17**: extended script-engine opcode support (covenants backbone)
- **KIP-20**: covenant IDs (lineage tracking)
- **KIP-21**: partitioned sequencing commitment scheme (locks ordering structure for ZK circuits)

### vProgs path clarified (Hans Moog)

Four components for full vProgs:

1. Runtime to drive application state transitions
2. Mechanism for cryptographic proofs of runtime activity
3. System for settling proofs on L1 using covenant infrastructure
4. Meta-program coordinating user-deployed apps with composability constraints

Current development focused on **step 3** (covenant infrastructure). Step 4 unlocks full synchronous composability.

Quote (Sutton): *"I'm careful not to call it vProgs but rather 'standalone based zk apps,' because they are not the complete vProgs. They will not support synchronous composability at this stage yet."*

### Igra token (IGRA) public auction concluded

- **Permissionless on-chain auction** operated by ZealousSwap on Igra Mainnet
- **March 28 – April 3, 2026**
- Cleared at **0.1652 iKAS per IGRA**
- **1,915 total bids from 528 unique participants**
- **49.36 million IGRA tokens sold**
- Mechanism: ZealousSwap's ZAP batch auction (block-by-block, uniform market price per block)
- Tokens released block-by-block based on active bids
- Igra Network "now live, with its attestation system verifying state consistency between rollup and Kaspa base layer"
- Token claims open April 10, 2026
- Liquidity pools to be seeded on DEXs after claims

### Igra Network added to viem registry

- Chain ID: **38833**, native token **iKAS**
- Compatible with wagmi, RainbowKit, ConnectKit, Reown AppKit
- CEO: **Pavel Emdin**

### Kasplex bridge

- Kasperia Wallet v1.10.78 supports Kasplex stablecoin bridge
- USDT and USDC bridged from BNB Chain into Kasplex
- In-wallet flow for cross-network transfers

### Other ecosystem updates

- **Kaspa_stream** analytics: miner version tracking, payload decoding for Igra transactions, covenant decoding, search by currencies/locales
- **Builder hub** preview by IzioDev: structured integration guide (wallets, transactions, payload data, node operation)
- **Kaskad**: MCP server allowing AI agents to interact with testnet lending dApp (supply/borrow/repay/rebalance)
- **KasProof**: file timestamping tool anchoring SHA-256 hashes via 3 KAS tx
- **KNS** (Kaspa Name Service): >45,000 .kas domains registered
- **Kastle Wallet**: Explore page for in-app verified app browser; demoed with ZealousSwap
- **Wolfpack Poker Night** (Apr 2, London, Wolfy's Bar): KAS payments, sponsored by Kaspa Ecosystem Foundation and Kastle Wallet
- May 7, 2026 follow-up meetup at Wolfy's Bar London: "Industry Adoption: Kaspa's Unstoppable Scalability – Part 2"

## Investor takeaways

- Independent confirmation of Toccata June 5–20, 2026 window from secondary news outlet
- Igra token auction structure is on-chain, permissionless, and broad (528 unique bidders) - mitigates VC-allocation concentration risk
- "Kaspa Ecosystem Foundation" mentioned for the first time in our research - need to verify legal form, jurisdiction, and treasury
- Kaspa_stream and builder hub indicate active developer relations work, but tooling is community-led, not core-team-led
