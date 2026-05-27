# Bittensor — Governance Overview

- **URL:** https://docs.bittensor.com/governance
- **Last edit (per doc):** December 8, 2025
- **Fetched:** 2026-05-26
- **Tool:** firecrawl_scrape
- **Reliability:** Company-generated

## Headline (verbatim)

> Bittensor's governance protocol transitions the management of the network
> from centralization within the foundation to community ownership over time.

## Bicameral structure

| Body | Composition | Role |
|---|---|---|
| **Triumvirate** | Opentensor Foundation employees | Creates and closes proposals |
| **Senate** | Top K delegate hotkeys (default K=12) | Approves proposals (50% + 1) |

- Senate members must own **>2% of network's total stakes**
- Proposal execution requires: (a) (50% + 1) Senate approval AND (b) Triumvirate
  closes proposal
- Pre-governance: all admin actions ran through a single privileged `sudo`
  private key

## Security model

> Under the governance protocol, a malicious actor would have to compromise a
> Triumvirate member and control a majority of Senate seats in order to approve
> a proposal.

## Notes for analyst

- The Triumvirate-Senate model is **explicit foundation-led governance with
  community approval rights** — not full decentralization.
- The Triumvirate retains:
  - Proposal **creation** monopoly (Senate cannot create proposals)
  - Proposal **closure** authority (a Triumvirate member must execute)
- This means even if the Senate would approve a community-driven change, it
  cannot enter governance unless the foundation drafts it.
- Public framing of "no entity owns or operates the Bittensor Network" (per
  the REX-Osprey SEC filing) must be evaluated against this clear
  foundation-control structure documented in Bittensor's own governance docs.
- The "K=12" Senate cap creates concentration: with 65%+ of TAO staked across
  many delegates, only the top 12 hotkeys participate in approval votes.
