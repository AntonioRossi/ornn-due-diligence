import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const akashIcV1 = {
  meta: {
    title: "Akash IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "Akash Network",
      subtitle: "AKT token / preliminary IC memo",
      date: "May 26, 2026",
      recommendation: "Authorize gated phase-two diligence.",
      body:
        "Of the AI-DePIN tokens reviewed, Akash presents the strongest credibility-adjusted profile: 5.5 years of mainnet, Grayscale Top-20 designation 3 quarters running, Osuri congressional testimony, BME live March 2026, deepest customer list. But six gates remain.",
      status: "Phase-two diligence recommended",
      statusNote:
        "Reassess for capital deployment after AEP-79 migration completes and Q2-Q3 momentum extends Q1 inflection.",
      gatingSummary:
        "6 gates: AEP-79 Cosmos-to-Solana migration risk, Starbonds SEC framework, Overclock Labs corporate opacity, US tier-1 listing gap, drawdown vs prior cycle, audit history.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "AEP-79 Shared Security Migration off Cosmos by Dec 30 2026 — largest pivot in network history",
        },
        {
          label: "Issue 2",
          body: "Starbonds SEC-regulated $75M bond framework; ongoing SEC oversight",
        },
        {
          label: "Issue 3",
          body: "Overclock Labs jurisdiction, board, financials not publicly disclosed",
        },
        {
          label: "Issue 4",
          body: "Tier-1 US listing gap relative to TAO/IO; XT and Bithumb are primary",
        },
        {
          label: "Issue 5",
          body: "−89% from April 2021 ATH — failed to retest in AI cycle",
        },
        {
          label: "Issue 6",
          body: "No comprehensive tier-1 smart-contract audit history in public record",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "The most mature AI-DePIN: 5.5 years, Grayscale Top-20, Osuri congressional credibility.",
      body:
        "Akash is a decentralized cloud marketplace built by Overclock Labs since 2015, mainnet since September 2020. Providers compete in reverse auctions; deployments priced 70-85% below AWS. Native AKT secures the chain; ACT (USD-pegged) settles compute.",
      points: [
        {
          label: "Founder credibility",
          body: "Greg Osuri: IBM consultant, Kaiser Permanente cloud architect, AngelHack founder (200k+ devs). May 2025 House testimony. California AB 2658 expert witness.",
        },
        {
          label: "Customer base",
          body: "ai16z/ElizaOS default inference, Venice.ai (Voorhees), Envision Labs, Morpheus Compute, Codex Storage, Akave. Anthropic MCP integration.",
        },
        {
          label: "BME live",
          body: "Burn-Mint Equilibrium activated March 23, 2026. Every compute payment burns AKT and mints ACT. Q1 2026: $5M compute spend ATH.",
        },
      ],
      accentBlock: {
        label: "Institutional recognition",
        value: "Grayscale Top 20",
        body:
          "AKT named a Top 20 Asset with High Potential for three consecutive quarters in 2025. AkashML on OpenRouter processing 1.7B tokens/day, outpacing Cloudflare.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Mainnet since 2020, 75.7% of supply circulating, real customer revenue.",
      intro:
        "Akash has the strongest commercial substantiation and longest mainnet history of any AI-DePIN reviewed. Continuous upgrades through Mainnet 14 (Oct 2025), BME live (March 2026), AkashML on OpenRouter. The Cosmos-to-Solana migration is the largest open architectural question.",
      events: [
        {
          date: "Sep 2020",
          title: "Mainnet launch on Cosmos SDK",
          body:
            "Network live continuously since; 5.5+ years of operational track record.",
        },
        {
          date: "Oct 28, 2025",
          title: "Mainnet 14 upgrade",
          body:
            "JWT auth (AEP-63), WASM smart contracts, Multi-Depositor Escrow, Pyth oracle, bare metal foundation.",
        },
        {
          date: "Mar 23, 2026",
          title: "BME activated (Proposal 318)",
          body:
            "Burn-Mint Equilibrium replaces inflation-based emissions. Every compute payment burns AKT and mints USD-pegged ACT.",
        },
        {
          date: "Dec 30, 2026",
          title: "AEP-79 migration target",
          body:
            "Shared Security Migration off Cosmos SDK; Solana is the leading candidate per Osuri. Largest architectural pivot in network history.",
        },
      ],
      stats: [
        {
          label: "Market cap",
          value: "$257M",
          body: "Price $0.87; FDV $339.8M; 75.7% of supply circulating; CMC rank #127. ATH $8.08 (Apr 2021) — −89% from ATH.",
        },
        {
          label: "Q1 2026 compute",
          value: "$5M ATH",
          body: "All-time high total compute spend crossed in Q1. AkashML processing 1.7B tokens/day on OpenRouter, outpacing Cloudflare.",
        },
        {
          label: "Customer adoption",
          value: "8+ named",
          body: "ai16z/ElizaOS, Venice.ai, Envision Labs, EaveAI, Morpheus Compute, Codex Storage, Akave, Anthropic MCP integration.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Credibility-adjusted leader in AI-DePIN with material architectural transition ahead.",
      layers: [
        {
          label: "Strategic edge",
          title: "Strongest founder profile and institutional recognition in AI-DePIN.",
          body:
            "Osuri 25-year track record, congressional testimony, Voorhees alliance. Grayscale Top-20 three consecutive quarters. Cleanest customer reference list among the cohort.",
        },
        {
          label: "Competitive field",
          title: "Bittensor pulls institutional capital; Solana DePIN density attracts migration.",
          body:
            "TAO at $3.1B vs AKT at $257M despite arguably stronger commercial substantiation. Cosmos exodus pattern (Akash, Nillion) suggests Solana DePIN concentration thesis is real.",
        },
        {
          label: "Operating burden",
          title: "AEP-79 migration plus Starbonds plus chain transition all in 2026.",
          body:
            "Greg Osuri carries simultaneous execution risk on chain migration, SEC-regulated bond program, BME mechanism validation, and listing posture.",
        },
      ],
      summary:
        "Akash is the most credibility-adjusted AI-DePIN investment available — but the December 30 2026 migration deadline materially affects timing of any capital commitment.",
      note:
        "The investment thesis depends on (a) the AEP-79 migration executing cleanly, (b) Q1 2026 inflection metrics extending through Q2-Q3, and (c) Overclock Labs closing the corporate-transparency gap.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "AEP-79 migration plus Starbonds SEC framework reshape Akash's regulatory and architectural footprint.",
      summary:
        "December 30, 2026 target completion for moving off Cosmos SDK. Solana is leading candidate but not final. Starbonds is the first DePIN SEC-regulated bond program ($75M target, 7,200 GB200 GPUs). Both introduce regulatory and execution risk.",
      items: [
        {
          label: "Chain migration",
          title: "AEP-79: moving an entire L1 with $257M mcap in 8 months",
          body:
            "Solana liveness, finality model differences, IBC compatibility on non-Cosmos chains, validator transition — all unprecedented at this scale.",
        },
        {
          label: "Starbonds SEC oversight",
          title: "$75M SEC-regulated bond program — first DePIN to issue under SEC framework",
          body:
            "Provides regulatory legitimacy but introduces ongoing SEC compliance obligations differentiating Akash from pure DAO tokens.",
        },
        {
          label: "AKT classification",
          title: "BME mechanism complicates the securities-law analysis",
          body:
            "Burn-Mint Equilibrium creates new connection between compute revenue and token supply that has not been adjudicated.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Treat the December 30 2026 migration as a structural milestone; pre-migration capital deployment carries different risk than post-migration.",
      askText:
        "What is the current month-by-month migration plan, the Starbonds capital raised against $75M, and the outside-counsel AKT classification opinion under BME?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "Overclock Labs corporate opacity and US tier-1 listing gap.",
      summary:
        "Despite 5.5 years of mainnet history and $257M market cap, Overclock Labs's jurisdiction, board, employee count, and financials are not publicly disclosed. The token page promotes only XT and Bithumb as primary CEX listings, suggesting tier-1 US listing friction.",
      items: [
        {
          label: "Corporate opacity",
          title: "No public Overclock Labs jurisdiction, board, or financials",
          body:
            "For a 10-year-old company with $257M-mcap project, this is materially below institutional disclosure norms.",
        },
        {
          label: "US listing gap",
          title: "AKT page promotes only XT and Bithumb as primary CEX listings",
          body:
            "Coinbase, Binance, Kraken not highlighted. Compare to TAO (Coinbase + Grayscale OTCQX + pending Spot ETF) and IO (Coinbase + Binance).",
        },
        {
          label: "Audit history",
          title: "No comprehensive tier-1 smart-contract audit history in public record",
          body:
            "BME contracts activated March 2026 without publicly disclosed tier-1 audit. Cosmos chain has 5+ years live without disclosed Trail of Bits / Halborn audit.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A protocol where commercial and institutional credibility are unusually strong but corporate disclosure standards lag and US tier-1 listing posture is incomplete.",
      askText:
        "When will Overclock Labs disclose its corporate structure, audited financials, and tier-1 audit history? Is a Coinbase listing in active discussion?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Drawdown story, execution-load concentration, and post-migration mechanics.",
      summary:
        "AKT is −89% from its April 2021 ATH, never retested during the AI/DePIN narrative. Overclock Labs faces simultaneous execution load: chain migration, Starbonds raise, BME validation, listing posture. Q1 2026 inflection must extend through Q2-Q3 to validate the thesis.",
      items: [
        {
          label: "Cycle dynamics",
          title: "Failed to retest April 2021 ATH during AI/DePIN narrative",
          body:
            "Bull thesis: room to run if narrative re-engages. Bear thesis: structural buyer-base limitation relative to Coinbase-listed peers.",
        },
        {
          label: "Execution load",
          title: "Four parallel initiatives in 2026: migration, Starbonds, BME, listings",
          body:
            "Forum analysis notes execution risk of doing too many things at once. Each is company-defining; all in parallel is brilliant or fragile.",
        },
        {
          label: "Post-migration mechanics",
          title: "AKT post-migration mechanics depend on destination chain selection",
          body:
            "Wrap, swap, or snapshot? Native IBC or bridge-based? Customer continuity during transition? All unresolved publicly.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real engineering capacity, real customer adoption, strong founder credibility. The institutional thesis is gated by transition-period observability and corporate disclosure.",
      askText:
        "What is the AKT post-migration mechanic, the Q2 2026 compute-spend trajectory, and the Overclock Labs corporate disclosure timeline?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Strongest credibility-adjusted AI-DePIN profile; phase-two diligence warranted.",
      summary:
        "5.5 years of mainnet, Grayscale Top-20 three quarters running, Osuri congressional credibility, deepest customer list, BME live.",
      conclusion:
        "Authorize phase-two diligence: corporate disclosure, customer reference calls, Starbonds offering review, tier-1 audit commission. Size capital around the December 2026 migration milestone.",
      questions: [
        {
          label: "Ask 1",
          body: "What is Overclock Labs's jurisdiction, board, and audited financial status?",
        },
        {
          label: "Ask 2",
          body: "Which chain wins the AEP-79 RFP, and what is the week-by-week migration plan?",
        },
        {
          label: "Ask 3",
          body: "What is the Starbonds capital raised against $75M and the SEC exemption used?",
        },
        {
          label: "Ask 4",
          body: "Where are the tier-1 audits of the Cosmos chain, BME contracts, and AkashML?",
        },
        {
          label: "Ask 5",
          body: "Can Venice.ai, ai16z, Envision Labs, Morpheus, and Codex all provide reference calls?",
        },
        {
          label: "Ask 6",
          body: "Is a Coinbase listing in discussion, and what is the post-migration AKT mechanic?",
        },
      ],
      closingNote:
        "P0 first: corporate disclosure, migration plan, Starbonds, audits, customer references, US listing.",
    },
  },
} as const;

export type SceneId = keyof typeof akashIcV1.scenes;
const sceneTimeline = buildSceneTimeline(akashIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
