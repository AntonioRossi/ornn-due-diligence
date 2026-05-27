import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const gonkaIcV1 = {
  meta: {
    title: "Gonka IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "Gonka",
      subtitle: "Decentralized AI compute network / preliminary IC memo",
      date: "May 26, 2026",
      recommendation: "Authorize gated phase-two diligence only.",
      body:
        "The public record shows a credible serial-founder team, a working mainnet, a CertiK-audited code base, real on-chain compute traction, and a marquee strategic backer in Bitfury. The underwrite is still blocked by an undisclosed legal entity, an unresolved securities-law posture, a 20% founders' allocation with no public vesting, effectively zero exchange liquidity, and traction figures with no independent verification.",
      status: "No token purchase yet",
      statusNote:
        "Advance only if management produces a binding legal map, jurisdiction-specific counsel opinions, a vesting schedule for the founders' allocation, and named institutional customer references with disclosed usage.",
      gatingSummary:
        "6 gates remain open: legal-entity map, US and non-US securities classification, founders' allocation vesting, market liquidity and price-discovery integrity, traction verification, and control-function disclosure.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "No disclosed legal entity behind GNK, the whitepaper, or the founders' tranche",
        },
        {
          label: "Issue 2",
          body: "Hybrid PoC + collateral + Work-Coin token unresolved across US, EU, UK regimes",
        },
        {
          label: "Issue 3",
          body: "200M GNK founders' allocation with no public vesting or lock-up schedule",
        },
        {
          label: "Issue 4",
          body: "Zero CEX/DEX liquidity, ~90% drawdown from a January 2026 ATH",
        },
        {
          label: "Issue 5",
          body: "Active node, throughput, and developer counts self-attributed only",
        },
        {
          label: "Issue 6",
          body: "No public GC, CCO, head of security; no named institutional Developer references",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "A Bitcoin-style PoW bet on decentralized AI inference.",
      body:
        "Gonka is a Cosmos SDK Layer 1 where nearly all contributed compute goes to productive AI inference rather than synthetic consensus work. The thesis is that Bitcoin's incentive design, applied to inference, can break the centralized hyperscaler grip.",
      points: [
        {
          label: "Founders",
          body: "Liberman siblings (Anna, David, Daniil, Maria). Prior Kernel AR was acquired by Snap; Product Science Inc. counts Walmart, JPMorgan, Airbnb as customers.",
        },
        {
          label: "Distribution",
          body: "Open mainnet on Cosmos SDK with an OpenAI-compatible API and nine governance-approved open-weight LLMs including DeepSeek, Llama-3.1, Qwen3-235B.",
        },
        {
          label: "End market",
          body: "Permissionless inference for developers, plus sovereignty-AI engagement with UAE and Kazakhstan governments per the founders.",
        },
      ],
      accentBlock: {
        label: "Strategic backing",
        value: "$50M Bitfury",
        body:
          "Announced December 2, 2025 as the first commitment under Bitfury's $1 billion initiative. $12M of the $50M was a community-pool purchase approved on-chain.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Real mainnet, real growth, real audit. Independent verification is still thin.",
      intro:
        "A Cosmos SDK chain shipped September 2025, with ongoing upgrades through Proof of Contribution v2, a CertiK A-rating, and a roughly doubling compute trajectory since the Bitfury round. Every traction figure is self-attributed via the project's explorer; no independent verification of throughput, nodes, or developers is public.",
      events: [
        {
          date: "Sep 15-16, 2025",
          title: "Mainnet launch",
          body:
            "Network shipped with GNK token rewards for early contributors per CertiK's milestone tracker and Dealroom.",
        },
        {
          date: "Nov 19, 2025",
          title: "5,000 H100-equivalent",
          body:
            "First public compute scale milestone, achieved before Bitfury's strategic round.",
        },
        {
          date: "Dec 2, 2025",
          title: "Bitfury announcement",
          body:
            "BusinessWire release of the $50M commitment; the Liberman siblings named for the first time in a major financial press venue.",
        },
        {
          date: "Feb 1, 2026",
          title: "Proof of Contribution v2",
          body:
            "v0.2.9 mainnet upgrade activated a revised consensus mechanism; the engineering delta vs. the whitepaper PoC is not publicly documented.",
        },
      ],
      stats: [
        {
          label: "Compute scale",
          value: "~11,000 H100-eq",
          body: "Self-reported via gonkascan.com as of May 2026; conversion methodology across heterogeneous hardware not disclosed.",
        },
        {
          label: "Daily throughput",
          value: "~100M tokens",
          body: "Aggregate across nine governance-approved open-weight LLMs; Qwen3-235B alone is ~30M tokens/day per project sources.",
        },
        {
          label: "Audit posture",
          value: "CertiK A / 84.17",
          body: "Three modules audited; 0 Critical, 4 Major resolved, 10 Medium resolved, 1 Centralization (Privilege) acknowledged.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Differentiation is real, but the category is crowded and the unit economics depend on token-price recovery.",
      layers: [
        {
          label: "Strategic edge",
          title: "Pure PoW alignment in a stake-weighted category.",
          body:
            "Bittensor, io.net, Akash, Render all use stake-weighted or marketplace-fee designs. Gonka's Bitcoin-style alignment is design-philosophical, not yet measurably superior.",
        },
        {
          label: "Competitive field",
          title: "Crowded with at least eight funded competitors.",
          body:
            "Bittensor alone runs at ~$2.7B market cap in early 2026. Gonka's growth must be evaluated against mature subnet economies and commercial GPU marketplaces.",
        },
        {
          label: "Operating burden",
          title: "Host economics depend on token-price recovery to work in fiat.",
          body:
            "Bitfury's blog cites a roughly $1 cost to mine one GNK against a $0.26 market price. The growth curve depends on belief in recovery.",
        },
      ],
      summary:
        "This is a market-formation bet on Proof of Work alignment displacing stake-weighted decentralized AI compute, not a steady-state cash-flow asset.",
      note:
        "The burden of proof is higher because the project carries dual narratives of corporate incubation and post-launch decentralization that have not been reconciled in any public document.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "The legal-entity map and securities posture are the first gating issue.",
      summary:
        "The canonical whitepaper is signed by a single individual with a personal email and names no entity. The tokenomics document explicitly disclaims that regulators may disagree with Gonka's positions. The 200M founders' allocation, the Work Coin payments, and the community-pool sale mechanism each sit outside the cleanest SEC Proof of Work safe harbor.",
      items: [
        {
          label: "Entity ambiguity",
          title: "Bitfury's press release claims no foundation; Product Science Inc. remains operational",
          body:
            "Press contact, technical leadership, and original IP all still trace back to Product Science. No public document records IP, treasury, or key-custody transfer from the incubating company to any successor.",
        },
        {
          label: "Hybrid token",
          title: "Five distinct distribution mechanisms, only one cleanly inside the PoW safe harbor",
          body:
            "Epoch-minted Reward Coins, Work Coin payments, utilization bonuses, the founders' allocation, and the community-pool USDT-to-GNK sale each require independent securities-law theories. No outside-counsel opinion is public.",
        },
        {
          label: "Non-US exposure",
          title: "MiCA, FCA, MAS, and ADGM frameworks all unaddressed in the public record",
          body:
            "Founders cite sovereignty engagement with UAE and Kazakhstan ministers. Marketing or sales in those jurisdictions and the EU triggers analyses Gonka has not publicly performed.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Treat the current public posture as best-case until management produces a jurisdiction-by-jurisdiction counsel opinion that addresses each of the five distribution mechanisms separately.",
      askText:
        "Which entity owns the protocol IP, which entity signed Bitfury's documents, which entity custodies the founders' allocation, and what is the written legal theory for each of the five GNK distribution mechanisms?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "The 200M founders' allocation and the absence of exchange liquidity create concentrated dump risk.",
      summary:
        "The founders' tranche is 20% of total supply with no public vesting schedule. The token has zero 24-hour volume on the listed reference price; a single-day spike to $14,000 of volume on May 21, 2026 is the only recent liquidity event recorded by CertiK. Bitfury's $12M community-pool purchase rate is the only large-print transaction visible.",
      items: [
        {
          label: "Founder concentration",
          title: "200M GNK with no documented vesting or lock-up",
          body:
            "Nominal value is ~$52M at the current price and ~$522M at the January 2026 all-time high. Sub-allocation between Anna, David, Daniil, and Maria Liberman is undisclosed.",
        },
        {
          label: "Price discovery",
          title: "$0.26 reference price with $0 of 24-hour volume",
          body:
            "The community-pool USDT-to-GNK sale mechanism appears to set the reference rate. Bitfury's $12M purchase price relative to that mechanism has not been disclosed.",
        },
        {
          label: "Drawdown",
          title: "~90% below the January 2026 all-time high of $2.61",
          body:
            "If a brief listing window in early 2026 set the high, the subsequent collapse is not narrative-explained in any public document. The Host economics at $0.26 depend on that price recovering.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "An illiquid early-stage token with material insider concentration, where any meaningful institutional position would itself move the reference price.",
      askText:
        "What is the founders' vesting schedule, what was Bitfury's per-GNK purchase price, and what is the named exchange-listing roadmap that would create two-sided market liquidity?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Traction figures, control-function staffing, and decentralization claims all need operational proof.",
      summary:
        "Every headline traction figure is self-attributed via gonkascan.com. No general counsel, chief compliance officer, head of security, or head of finance is publicly named for either Product Science or any Gonka entity. CertiK records one Centralization (Privilege) finding acknowledged but unresolved.",
      items: [
        {
          label: "Traction verification",
          title: "11,000 H100-equivalent and 100M tokens/day require operational definitions",
          body:
            "Active node, active developer, and H100-equivalent conversion methodology are not disclosed. No independent customer references with named monthly usage exist in the public record.",
        },
        {
          label: "Control functions",
          title: "No public GC, CCO, head of security, or treasurer",
          body:
            "For a token-issuing platform soliciting institutional capital, this is below institutional norms. The Liberman siblings appear to lead across Gonka, Product Science, and a broader family-portfolio of companies.",
        },
        {
          label: "Decentralization claim",
          title: "No foundation exists per Bitfury, but Product Science still controls the operational fulcrum",
          body:
            "Governance-vote history, top-voter concentration, the CertiK Centralization finding text, and the GitHub maintainer authority list all remain unaddressed in the public record.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real engineering and real growth exist. The institutional underwriting case is blocked by disclosure gaps that are remediable but that have not been remediated.",
      askText:
        "When will management publish operational definitions, named institutional Developer references, the org chart with control-function leaders, and the governance-vote history with concentration data?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Proceed only when the structural disclosure gaps are closed.",
      summary:
        "Real signal exists: working mainnet, CertiK audit, Bitfury validation, credible serial founders, and meaningful on-chain compute.",
      conclusion:
        "Advance only if management produces the legal map, securities opinions, vesting schedule, named references, two-sided liquidity, and control-function hires. Otherwise, pass.",
      questions: [
        {
          label: "Ask 1",
          body: "Which entity owns the protocol IP, signed the Bitfury documents, and custodies the founders' allocation?",
        },
        {
          label: "Ask 2",
          body: "Where is the outside-counsel opinion addressing each of the five GNK distribution mechanisms separately?",
        },
        {
          label: "Ask 3",
          body: "What is the founders' allocation vesting schedule and any sales to date?",
        },
        {
          label: "Ask 4",
          body: "Who are three named institutional Developers, with monthly inference token volume?",
        },
        {
          label: "Ask 5",
          body: "What is the named exchange-listing roadmap and Bitfury's per-GNK purchase price?",
        },
        {
          label: "Ask 6",
          body: "Who, by name, is your General Counsel, Chief Compliance Officer, and Head of Security?",
        },
      ],
      closingNote:
        "P0 first: entity map, counsel opinions, founder vesting, named references, liquidity path, and control-function hires.",
    },
  },
} as const;

export type SceneId = keyof typeof gonkaIcV1.scenes;
const sceneTimeline = buildSceneTimeline(gonkaIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
