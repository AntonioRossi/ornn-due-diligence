# Auctionomics / OneChronos — Management Response Evaluation Guide

As of **April 9, 2026**.

## Purpose

This document converts the core open diligence questions for Auctionomics Inc. / OCX Group Inc. (OneChronos) into a substantive underwriting rubric. It is meant to help an analyst — including one unfamiliar with the partnership — run a management call, score responses, and separate polished rhetoric from operating reality.

The scoring approach matches the Ornn and Silicon Data evaluation frameworks: a polished answer without documents, data, controls, or external corroboration is not enough.

## How to score each question

Each question should be scored on **two tracks**:

- **Management representation**: Did management answer directly, precisely, and consistently?
- **Proof status**: Do documents, transactional data, policies, system evidence, and third-party corroboration support the answer?

**Rule:** the overall rating for a question defaults to the weaker of the two tracks.

- A polished answer with no support cannot score above **Concerning**.
- A strong document package cannot rescue a contradictory or evasive management answer.
- If management cannot explain a core operating fact, treat that as a higher-severity issue than a missing but remediable workstream.

## Failure types

When a question scores poorly, classify the failure before making an investment decision:

- **Competence / credibility failure**: management does not understand, cannot explain, or materially misstates a core fact.
- **Structural thesis failure**: the business may be real, but the economics, market structure, or defensibility do not support the investment case.
- **Remediable build gap**: the issue is real but can likely be fixed with time, budget, and counsel.
- **Proof gap**: the answer may be true, but the diligence package does not yet prove it.

---

## 1. What is the partnership legal structure, and who controls the compute-market initiative?

The public record describes a "partnership" between Auctionomics and OCX Group Inc. without specifying the legal form. The governance, IP ownership, and durability of the arrangement are undisclosed.

**What must be shown**

- The executed partnership agreement (or term sheet if not yet executed).
- Legal form: JV, contractual, equity, or IP license.
- IP ownership: which entity owns the compute-market auction design, the standardization framework, and the "building block."
- Governance: who controls product design, market rules, regulatory strategy, and participant access.
- Termination: what triggers termination, what happens to the product and IP, and what notice is required.
- Milgrom's contractual role and time commitment.

**Acceptable**

- Management produces an executed agreement with clear governance, IP ownership, and termination provisions.
- The partnership has a dedicated legal entity or clear ring-fencing within an existing entity.
- IP ownership is documented with proper assignment chains from individual contributors.
- The governance framework is practical — not overly complex but sufficient to resolve disputes and protect each party's interests.
- Milgrom's role is defined with specific deliverables and minimum time commitment, not just an advisory title.

**Concerning**

- The partnership agreement exists but is in draft or unsigned.
- IP ownership is understood in principle but not formally documented.
- Governance relies on informal understanding rather than documented decision-rights.
- Milgrom's involvement is described as "advisory" without specific commitments.
- Termination provisions are vague or heavily favor one party.

**Unacceptable**

- No executed agreement exists — the partnership is informal or based on a handshake.
- IP ownership is disputed, unclear, or dependent on individual contributors who could leave.
- There is no governance framework for resolving disagreements on product design or regulatory strategy.
- Management cannot articulate what happens if the partnership terminates.
- Milgrom's involvement is essentially honorary.

**Likely failure type if poor**

- Usually `proof gap` (early-stage arrangement not yet formalized) or `structural thesis failure` (if the partnership lacks the governance to survive disagreements).

---

## 2. What is the product, and does the standardization framework work?

The partnership announcement describes bilateral forwards for compute capacity using combinatorial auctions, but provides no product specification. The standardization framework (what is actually being traded) is described as proprietary "magic sauce."

**What must be shown**

- A written product specification: what is being traded, how auctions are structured, how prices are discovered, and how settlement works.
- The standardization framework: the unit of compute being traded, how heterogeneity is represented, and how quality is verified.
- Evidence that the framework has been tested (simulation, sandbox, or pilot) with realistic compute-market data.
- How physical delivery differs from financial settlement and what infrastructure is needed.

**Acceptable**

- Management walks through a written product spec that is internally consistent and addresses the key dimensions of compute heterogeneity (GPU type, memory, interconnect, location, power, time).
- The standardization framework has been tested in simulation with realistic market scenarios and the results are documented.
- The auction mechanism is well-defined: bid format, clearing frequency, optimization algorithm, and winner-determination rules.
- Management can explain how the "building block" balances standardization (for liquidity) against heterogeneity (for usefulness) with concrete examples.

**Concerning**

- The product concept is clear but the specification is still evolving.
- The standardization framework exists in concept but has not been tested with real or realistic data.
- Management can describe the auction mechanism in general terms but cannot specify operational parameters.
- The physical-delivery and settlement workflows are acknowledged as unsolved but scoped.

**Unacceptable**

- No written product specification exists.
- The standardization framework cannot be explained beyond "we're working on it" or "it's proprietary."
- The auction mechanism has not been simulated or tested in any form.
- Management cannot explain how compute-resource heterogeneity is handled.

**Likely failure type if poor**

- Usually `proof gap` (early stage) or `competence / credibility failure` (if the team cannot explain its own design).

---

## 3. What is the regulatory pathway, and has counsel opined?

The compute-market product involves bilateral forwards for future delivery of compute capacity. The regulatory classification is undisclosed.

**What must be shown**

- Outside-counsel analysis of whether bilateral compute forwards are exempt commercial forwards or could be classified as swaps, futures, or securities.
- Identification of the specific facts that would cause the product to cross into regulated territory.
- Analysis of whether the platform requires registration as an exchange, SEF, DCM, or ATS for the compute product.
- Any engagement with CFTC, SEC, FINRA, or state regulators.
- A credible regulatory roadmap with timeline, milestones, and contingency plans.

**Acceptable**

- Management produces an outside-counsel memo analyzing the forward/swap/futures classification with specificity.
- The analysis identifies bright-line rules and facts that would trigger registration requirements.
- Management has a documented regulatory roadmap with realistic timelines.
- If regulatory engagement has occurred, the status and feedback are disclosed.
- Contingency plans exist for scenarios where registration is required.

**Concerning**

- Outside counsel has been engaged but the analysis is not yet complete.
- Management has a directional view on classification but it is not supported by a written memo.
- No regulatory engagement has occurred, but management can articulate when and how it will.
- The contingency plan is acknowledged as needed but not yet developed.

**Unacceptable**

- No outside-counsel analysis has been obtained or even commissioned.
- Management asserts the product is exempt without legal support.
- There is no regulatory roadmap or timeline.
- Management is dismissive of regulatory risk or believes it can be deferred indefinitely.
- The analysis, if it exists, ignores the CFTC swap/futures classification question entirely.

**Likely failure type if poor**

- Usually `remediable build gap` (if counsel has not yet been engaged) or `competence / credibility failure` (if management dismisses the regulatory question).

---

## 4. Who has committed to participate, and is there real demand?

The public record shows no named compute-market participants. Johnson stated: "We think there's some interest in this from the broad ecosystem."

**What must be shown**

- Named institutions that have expressed interest, signed LOIs, or committed to participate.
- Evidence of outreach: who has been approached, at what level, and what was the response.
- Any pilot programs, sandbox testing, or trial auctions conducted or planned.
- Evidence that the target participant types (data center operators, cloud providers, chip manufacturers, enterprise buyers, financial institutions) actually want an auction-based compute market versus existing alternatives.

**Acceptable**

- Management names specific institutions with documented interest (LOIs, pilot commitments, or formal evaluation agreements).
- The pipeline includes participants from at least two distinct categories (e.g., both supply-side and demand-side).
- A pilot or sandbox test has been conducted or is scheduled with committed participants.
- Participant feedback on the product design is documented and has influenced the specification.

**Concerning**

- Management describes broad interest but can name only a small number of specific institutions.
- Interest is at the "exploratory conversation" level without formal commitments.
- No pilot or sandbox test has been conducted, but one is planned with a specific timeline.
- Participant feedback is anecdotal rather than systematically collected.

**Unacceptable**

- No specific institutions can be named.
- "Interest" is inferred from market conditions rather than actual conversations with potential participants.
- No pilot or sandbox test is planned.
- Management believes participants will come once the product is built, without evidence of pre-launch demand.

**Likely failure type if poor**

- Usually `structural thesis failure` (if there is no demand) or `proof gap` (if demand exists but is not yet documented).

---

## 5. How much resource is allocated to compute versus equities and FX?

OneChronos is simultaneously expanding equities, launching FX, entering Europe and Japan, and building the compute market. The compute-market initiative's share of budget and attention is undisclosed.

**What must be shown**

- Budget allocation: what percentage of engineering, product, legal, and operations resources are dedicated to compute.
- Team allocation: who is working on compute full-time versus part-time versus advisory-only.
- Capital allocation: how much of the $80M+ raised is reserved or earmarked for compute.
- Milestone-based funding: what triggers additional investment in the compute initiative versus reallocation to equities/FX.
- A credible plan for how the compute initiative does not become a "side project" if equities/FX growth demands attention.

**Acceptable**

- Management provides specific budget and team allocation numbers.
- The compute initiative has dedicated engineering and product resources (not shared with equities/FX except for core infrastructure).
- Capital earmarked for compute can sustain 18+ months of development without revenue.
- Milestones are defined that trigger go/no-go decisions and resource adjustments.
- The organizational structure ensures compute is not subordinated to equities/FX in resource conflicts.

**Concerning**

- Resources are shared across equities, FX, and compute with no formal allocation.
- The compute team relies heavily on Auctionomics' academic advisors rather than dedicated engineers.
- Capital allocation is directional ("we plan to invest significantly") rather than specific.
- No formal go/no-go milestones exist for the compute initiative.

**Unacceptable**

- The compute initiative has no dedicated budget or team.
- Resources are pulled from compute to equities/FX without a formal process.
- Management cannot quantify how much is being spent on compute.
- The initiative depends entirely on Milgrom's and Console Battilana's availability from Auctionomics' consulting schedule.

**Likely failure type if poor**

- Usually `structural thesis failure` (if compute is not prioritized) or `remediable build gap` (if resources are insufficient but could be increased).

---

## 6. How does the auction-based model compete with entrants that are further along?

Ornn has live bilateral activity, partner integrations, and Bloomberg distribution. Silicon Data has a published index and a marketplace. Auctionomics/OneChronos has an announcement.

**What must be shown**

- A clear articulation of why the auction-based approach is structurally superior for compute, with specific examples of value it creates that bilateral or marketplace models cannot.
- An honest assessment of the timing gap and what the partnership will do to close it.
- Evidence that potential participants prefer or would consider an auction-based model.
- A competitive-positioning strategy that does not depend on competitors failing.

**Acceptable**

- Management can articulate specific, concrete scenarios where a combinatorial auction produces better outcomes than bilateral matching (e.g., multi-resource bundles, cross-location optimization, temporal flexibility).
- The timing strategy is realistic: management acknowledges the gap and has a plan to move quickly.
- Participant conversations have surfaced interest in auction-based features that existing competitors do not offer.
- The positioning does not depend on being first — it depends on being structurally better for a defined segment.

**Concerning**

- The structural advantage argument is theoretical but not backed by simulation results or participant feedback.
- The timing plan is ambitious but depends on assumptions that have not been validated.
- Competitive analysis is generic ("we're different because we use auctions") rather than specific.

**Unacceptable**

- Management cannot explain a concrete scenario where the auction model is superior.
- The competitive strategy is simply "Nobel Prize credibility" or "better technology" without specifics.
- Management is dismissive of competitors or unaware of their progress.
- The timing plan ignores the gap entirely.

**Likely failure type if poor**

- Usually `structural thesis failure` (if the auction model does not offer a real advantage for compute) or `competence / credibility failure` (if management is unaware of competitive dynamics).

---

## Decision framework

### Immediate pass

If **any** of the following is true, recommend **pass** without further diligence:

- No partnership agreement exists, and neither party has a clear commitment to formalize one.
- The product has no specification, no standardization framework, and no simulation evidence after 9+ months since the announcement.
- Management cannot articulate the regulatory pathway and has not engaged outside counsel.
- No potential participant has been approached or expressed interest.
- The compute initiative has no dedicated budget, team, or timeline.

### Hold for evidence

If the partnership is formalized, the product is specified, and regulatory counsel has been engaged, but traction is still pre-revenue and pre-participant, recommend **hold** with a defined check-in period (3-6 months) and specific evidence milestones:

- First pilot auction completed with real or simulated participants.
- At least 3 named institutions with LOIs or formal evaluation commitments.
- Outside-counsel regulatory memo completed and reviewed.
- Dedicated compute-market team hired (not just Auctionomics advisors).

### Proceed to deeper diligence

If the partnership is formalized, the product is specified and tested, regulatory counsel has opined favorably, at least 5 named institutions are engaged, and a dedicated team is in place — proceed to full financial, technical, and legal diligence with the same rigor applied to Ornn and Silicon Data evaluations.

### Strict gating

**P0 first:** partnership structure, product specification, regulatory analysis, participant pipeline, and resource allocation. Do not proceed to financial, technical, or operational diligence until the P0 package demonstrates that the compute-market initiative is a real venture, not an announcement.
