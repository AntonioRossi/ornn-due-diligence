# Kaspa Covenants++ "Toccata" Hard-Fork Outlook (Michael Sutton, Medium, Apr 2 2026)

Source: https://medium.com/@michaelsuttonil/kaspa-covenants-toccata-hard-fork-outlook-a4d81a40900c
Author: Michael Sutton (core developer, Kaspa)
Published: April 2, 2026
Scraped: 2026-05-27

## Naming / context

- Hard fork name: "Toccata" - continuation of Kaspa's musical naming convention (Crescendo was the prior hard fork).
- Originally initiated by Ori Newman to introduce covenants into Kaspa's script engine, partly in response to the OP_CAT discussion in Bitcoin circles.
- Scope expanded well beyond covenants since inception.

## Two new programmability paths

1. **Native L1 covenant programming** via the **Silverscript** compiler (github.com/kaspanet/silverscript). Targets peer-to-peer applications, including stateful multi-contract flows, while remaining grounded in local UTXO computation. Initiated by Ori Newman, Michael Sutton, IzioDev, and Manyfest.
2. **Based zk infrastructure** - zk verification opcodes, sequencing commitment access, and partitioned sequencing commitment architecture (KIP-21). Enables based zk applications including canonical bridging.

## Background research links (research.kas.pa)

- "On the design of based zk rollups over Kaspa's UTXO-based DAG consensus" - thread 208
- "L1-L2 canonical bridge entry/exit mechanism" - thread 258

## VProgs roadmap context

- Long-term destination: synchronously composable verifiable programs (vProgs yellow paper at github.com/kaspanet/research/blob/main/vProgs/vProgs_yellow_paper.pdf).
- Current scope is **standalone based zk applications**, not full vProgs. They communicate via L1 proof-based bridging rather than synchronous composition.
- VProgs runtime layer (github.com/kaspanet/vprogs) primarily developed by Hans Moog; intended as highly optimized, parallel-centric execution environment.

## Already in (delivered in development branches)

- **KIP-17**: extended script-engine opcode support - covenants backbone.
- **KIP-20**: covenant IDs, lineage management.
- **KIP-16**: zk opcodes with zk-verifier precompile subsystem (authored/implemented by Alexander Safstrom). Supports:
  - Flexible Groth16 verifier (arbitrary parameters and verification keys)
  - RISC Zero STARK verifier (active on testnet 12; mainnet activation TBD)
- Sequencing commitment access opcode for based applications.
- Inline zk covenants and based zk covenants with KAS canonical bridge PoCs (implemented by Maxim).

## Finalized now

- Feature freeze target: **April 15, 2026**
- Final script-engine pricing policies (implemented; KIP pending)
- **KIP-21** (Sutton + Maxim Biryukov) - fully implemented, pending review
- Subnet and gas commitment support, complementing KIP-21

## Why mainnet date moved from May 5 → ~June 5–20, 2026

- Original target May 5, 2026 chosen partly for Crescendo symbolism.
- Sequencing commitment architecture had to be finalized correctly before activation, especially for the zk-oriented path.
- Quote: *"Once ZK circuits and runtimes bind to a sequencing commitment hashing structure, later structural changes become breaking changes. So we prefer to take this extra time and lock in the right design from the start."*
- KIP-21 is future-compatible with the CD commitment scheme required by vProgs.
- KIP-21 enables proof work proportional to app's own activity, not DAG-wide activity.

## Road from feature freeze to mainnet

1. Restart TN12 as clean network with all final features (dedicated branch of rusty-kaspa).
2. Merge long-lived pending branch into master; final auditing, todo cleanup, hard-fork activation logic, DB upgradability.
3. Schedule test hard fork on TN10 to simulate full mainnet-style transition.
4. Once rehearsal is satisfactory, finalize mainnet date and hardcode it.

## Operational impact for miners/ecosystem

- Upgrade nodes; existing functionality should continue working.
- Disk requirements: **~20–50% increase**.
- New SDKs and APIs target the new developer audience; classic Kaspa APIs continue unchanged.

## Closing positioning (verbatim)

> "Toccata marks the point where Kaspa's high-frequency monetary base layer meets programmability in two layered forms: native L1 covenant systems, and based zk systems built on top of the same foundations."

> "The remaining work is not about expanding scope further, but about freezing the right interfaces, rehearsing the transition properly, and bringing this to mainnet in a way the ecosystem can rely on, while keeping the underlying L1 lean, sound, and stable."

## Investor takeaways

- This is the canonical, primary-source roadmap for Toccata, authored by a named core developer with a multi-year track record (Crescendo hard fork roadmap, Rusty Kaspa first stable release).
- The window (June 5–20, 2026) is now ~2-5 weeks from the current date - a near-term catalyst.
- Programmability paradigm differs from Ethereum/Solana: bounded scripting + zk verification rather than Turing-complete execution.
- The hard fork does **not** ship applications, only protocol infrastructure - second-order revenue/adoption surfaces depend on app developers shipping covenants/zk apps after activation.
