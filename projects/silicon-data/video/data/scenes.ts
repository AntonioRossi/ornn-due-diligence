import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const siliconDataIcV1 = {
  meta: {
    title: "Silicon Data IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 390,
      sectionLabel: "Recommendation",
      title: "Silicon Data",
      subtitle: "Compute Exchange / preliminary IC memo",
      date: "April 7, 2026",
      recommendation: "Authorize gated phase-two diligence only.",
      body:
        "The public record shows a credible team, real distribution, and commercially relevant backers, but the underwrite is still blocked by regulatory ambiguity, methodology opacity, conflict risk, and unproven market formation.",
      status: "No term sheet yet",
      statusNote:
        "Advance only if management can produce an auditable legal map, governance proof, conflict controls, and real traction metrics.",
      gatingSummary:
        "6 gates remain open: entity and regulatory mapping, forward-contract classification and derivatives path, IOSCO and benchmark governance, DRW and Jump conflict controls, marketplace traction, and cash runway.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Entity chart and unexplained Silicon Derivatives naming",
        },
        {
          label: "Issue 2",
          body: "Forward contracts, no-license posture, and CFTC path",
        },
        {
          label: "Issue 3",
          body: "Index methodology, IOSCO readiness, and replication",
        },
        {
          label: "Issue 4",
          body: "DRW and Jump conflicts, governance, and information barriers",
        },
        {
          label: "Issue 5",
          body: "Marketplace trades, counterparties, and commercial durability",
        },
        {
          label: "Issue 6",
          body: "Burn, runway, and operating depth across two linked entities",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "A benchmark plus marketplace bet on compute becoming financeable.",
      body:
        "Silicon Data is trying to own the benchmark layer while Compute Exchange supplies a marketplace and forward-contract workflow. If GPU capacity becomes a financeable commodity, benchmark trust plus transaction data can reinforce each other.",
      points: [
        {
          label: "Distribution",
          body: "Bloomberg and Refinitiv matter because they put the benchmark into institutional workflow, not because they validate the methodology.",
        },
        {
          label: "Data loop",
          body: "The marketplace thesis is that transaction and listing data can strengthen the index and make the data surface harder to replicate.",
        },
        {
          label: "End market",
          body: "Public materials target traders, financial institutions, compute buyers, and future derivatives products tied to GPU benchmarks.",
        },
      ],
      accentBlock: {
        label: "Financing signal",
        value: "$4.7M seed",
        body:
          "Announced May 20, 2025, with DRW and Jump Trading Group co-leading the round. That is commercially relevant, but it also creates conflict questions.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Distribution and visibility are real. Underwriting proof is still thinner.",
      intro:
        "The public record supports a real product surface: benchmark publication, Bloomberg and Refinitiv distribution, an API and portal footprint, third-party press coverage, and a visible marketplace story. It does not yet prove durable liquidity, benchmark independence, or regulatory completeness.",
      events: [
        {
          date: "May 20, 2025",
          title: "Launch plus seed financing",
          body:
            "Silicon Data launched with a $4.7 million seed round led by DRW and Jump Trading Group.",
        },
        {
          date: "May 28, 2025",
          title: "IEEE Spectrum coverage",
          body:
            "Independent coverage made the H100 index legible to the broader market and confirmed Carmen Li's Bloomberg background.",
        },
        {
          date: "Oct 7, 2025",
          title: "Dual-CEO structure becomes explicit",
          body:
            "Carmen Li was appointed CEO of Compute Exchange, tightening the strategic link between the benchmark company and the marketplace.",
        },
        {
          date: "Oct 8, 2025",
          title: "Refinitiv distribution expansion",
          body:
            "Silicon Data announced dxFeed distribution to Refinitiv, extending the benchmark footprint beyond Bloomberg.",
        },
      ],
      stats: [
        {
          label: "Data points",
          value: "3.5M+",
          body: "Self-reported scale of the data surface, not independently audited.",
        },
        {
          label: "Daily records",
          value: "150k",
          body: "Self-reported daily verified pricing records across 40 to 50 countries and 50 to 100 platforms.",
        },
        {
          label: "Distribution",
          value: "Bloomberg + Refinitiv",
          body: "A real institutional workflow advantage, but not proof of methodology endorsement.",
        },
      ],
    },
    attractive: {
      durationInFrames: 405,
      sectionLabel: "Context",
      title: "The strategic logic is real, but the company is still early and exposed.",
      layers: [
        {
          label: "Strategic edge",
          title: "Benchmark distribution plus marketplace adjacency is differentiated.",
          body:
            "Few entrants appear to combine institutional benchmark distribution, a visible marketplace, and backers with real derivatives-market infrastructure.",
        },
        {
          label: "Competitive field",
          title: "Winning is more about trust and adoption than first-mover timing.",
          body:
            "GPU pricing and market-structure products are still forming. A benchmark is defensible only if users trust the methodology and wire it into contracts and workflow.",
        },
        {
          label: "Operating burden",
          title: "Two linked entities and a thin public team are hard to underwrite.",
          body:
            "The public record does not yet show the legal, compliance, risk, treasury, surveillance, and bench depth needed for the company's stated ambition.",
        },
      ],
      summary:
        "This is not a commodity-data story yet. It is a market-formation story with real upside and real execution risk.",
      note:
        "The burden of proof is higher because the same ecosystem may eventually publish the benchmark, run the marketplace, and provide liquidity around products tied to that benchmark.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 390,
      sectionLabel: "Risk 1",
      title: "The entity map and regulatory posture are still the first gating issue.",
      summary:
        "The public record still does not reconcile Silicon Data, Silicon Derivatives, and Compute Exchange into a clean legal and regulatory map. The marketplace says it has no regulatory license while public materials point toward swaps, futures, and structured products.",
      items: [
        {
          label: "Entity structure",
          title: "Silicon Derivatives appears in the terms without explanation",
          body:
            "That may be benign, but until management explains it, the entity architecture and risk allocation remain unclear.",
        },
        {
          label: "Forward contracts",
          title: "Current matching-plus-forward language needs legal proof",
          body:
            "The public record does not show the outside-counsel analysis that keeps current forward-contract workflows outside regulated derivatives treatment.",
        },
        {
          label: "Roadmap gap",
          title: "The path from no-license marketplace to regulated products is not visible",
          body:
            "Management still needs to show the trigger, timeline, and fallback plan for any CFTC-regulated product strategy.",
        },
      ],
      framingLabel: "Investment threshold",
      framingText:
        "Assume the current public positioning overstates legal finality until the company produces a product-by-product legal status matrix and outside-counsel support.",
      askText:
        "Which entity offers what today, what is legally exempt, and what changes when the company moves from benchmark distribution to derivatives products?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "The DRW and Jump conflict stack requires visible controls, not just credible names.",
      summary:
        "The backer set is commercially powerful, but it also creates structural questions about information asymmetry, methodology influence, marketplace participation, and future liquidity-provider conflicts.",
      items: [
        {
          label: "Information flow",
          title: "No visible information-barrier or governance architecture",
          body:
            "The public record does not show Chinese walls, committee controls, or surveillance structures separating benchmark production from investor or marketplace activity.",
        },
        {
          label: "Influence",
          title: "Methodology independence is not evidenced",
          body:
            "The company calls the benchmark independent and objective, but the public record does not show who can influence methodology changes or publication decisions.",
        },
        {
          label: "Market participation",
          title: "Marketplace and future-liquidity roles could overlap",
          body:
            "If investors, co-founders, or affiliates transact on Compute Exchange or provide liquidity around benchmark-linked products, governance has to be explicit and auditable.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "An early market-infrastructure business where governance and conflict management are core product requirements, not back-office details.",
      askText:
        "Who sits on methodology and governance bodies, what rights do DRW and Jump hold, and what prevents benchmark production from advantaging related trading activity?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "The benchmark still needs replication, IOSCO mapping, and hard operating proof.",
      summary:
        "The methodology narrative sounds plausible, but the public record still does not show the documents, independent validators, concentration data, or replication package needed for institutional confidence.",
      items: [
        {
          label: "Methodology",
          title: "Principles are public, full mechanics are not",
          body:
            "The company describes normalization, coverage, and outlier logic at a high level, but not enough for an outside party to recalculate the benchmark independently.",
        },
        {
          label: "Governance",
          title: "IOSCO readiness and validator independence are not visible",
          body:
            "The public record does not show an IOSCO mapping, governance committee structure, or the identity and independence of the claimed calculation agents and data validators.",
        },
        {
          label: "Durability",
          title: "Market formation and runway proof are still missing",
          body:
            "There is still no public evidence of completed trades, counterparty count, or current runway, so the benchmark and marketplace durability remain open questions.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real distribution and real ambition. Not yet enough public proof on replication, governance, or durability to underwrite the benchmark as institutional infrastructure.",
      askText:
        "When can management open the replication room, show the contributor and validator pack, and prove both runway and marketplace traction?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Proceed only if the company can close the structural proof gaps.",
      summary:
        "Real signal exists: Bloomberg and Refinitiv distribution, third-party coverage, a visible data and marketplace surface, and a backer set that fits the compute-finance thesis.",
      conclusion:
        "Advance only if management resolves the legal map, methodology and IOSCO proof, DRW and Jump governance, real marketplace traction, and cash runway. Otherwise, pass.",
      questions: [
        {
          label: "Ask 1",
          body: "What is the exact entity chart, and why does Silicon Derivatives appear in the legal stack?",
        },
        {
          label: "Ask 2",
          body: "Why are current forward contracts outside CFTC registration today, and what changes that answer?",
        },
        {
          label: "Ask 3",
          body: "When can we begin independent replication of each published Silicon Index?",
        },
        {
          label: "Ask 4",
          body: "What governance rights do DRW, Jump, and Don Wilson hold over methodology or marketplace decisions?",
        },
        {
          label: "Ask 5",
          body: "How many completed trades, active counterparties, and repeat customers exist today?",
        },
        {
          label: "Ask 6",
          body: "What are the current cash balance, burn rate, and financing plan to reach product-market and regulatory milestones?",
        },
      ],
      closingNote:
        "P0 first: legal map, replication pack, conflict controls, traction metrics, and runway.",
    },
  },
} as const;

export type SceneId = keyof typeof siliconDataIcV1.scenes;
const sceneTimeline = buildSceneTimeline(siliconDataIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
