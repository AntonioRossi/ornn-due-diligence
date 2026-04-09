import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";
import {validateComparisonProject} from "@shared/validation/comparison";
import type {ComparisonProject} from "@shared/types/comparison";
import type {ComparisonSceneId} from "@shared/types";
import {sceneCitations} from "./citations";

export const competitiveLandscapeV1: ComparisonProject = {
  meta: {
    title: "GPU Compute Market — Competitive Landscape v1",
    fps: 30,
  },
  companies: ["Ornn", "Silicon Data", "Auctionomics"],
  scenes: {
    overview: {
      durationInFrames: 390,
      sectionLabel: "Market Overview",
      title: "Three credible entrants. Different approaches. Same opportunity.",
      body:
        "GPU-compute market infrastructure is forming as a new asset class. Three visible entrants are building the pricing, hedging, and trading layers — each with a structurally different model.",
      companies: [
        {
          slug: "ornn",
          label: "Ornn",
          approach: "Benchmark + bilateral swaps under CFTC de minimis",
        },
        {
          slug: "silicon-data",
          label: "Silicon Data",
          approach: "Index + marketplace with forward contracts",
        },
        {
          slug: "auctionomics",
          label: "Auctionomics",
          approach: "Combinatorial auction marketplace for compute",
        },
      ],
    },
    approaches: {
      durationInFrames: 540,
      sectionLabel: "Approaches",
      title: "Benchmark vs. index vs. auction — three distinct models.",
      cards: [
        {
          slug: "ornn",
          label: "Ornn",
          headline: "Benchmark + bilateral swaps + exchange path",
          body: "$5.7M seed. 4-person team. OCPI on Bloomberg. Hydra, Architect, Kalshi partners.",
        },
        {
          slug: "silicon-data",
          label: "Silicon Data",
          headline: "Index + marketplace + forward contracts",
          body: "$4.7M seed from DRW and Jump. Carmen Li CEO of both entities. Bloomberg + Refinitiv.",
        },
        {
          slug: "auctionomics",
          label: "Auctionomics",
          headline: "Nobel-led auction design + regulated ATS",
          body: "Milgrom + OneChronos ($80M+). $10B daily equities volume. Compute market announced.",
        },
      ],
    },
    traction: {
      durationInFrames: 540,
      sectionLabel: "Traction",
      title: "Who has what, as of when.",
      intro:
        "Ornn and Silicon Data show live product activity. Auctionomics has proven equities infrastructure but no visible compute product.",
      lanes: [
        {
          slug: "ornn",
          label: "Ornn",
          events: [
            {displayDate: "Mar 2025", sortDate: "2025-03", label: "Hydra partnership (30k GPUs)"},
            {displayDate: "Apr 2025", sortDate: "2025-04", label: "Architect futures announced"},
            {displayDate: "Apr 2026", sortDate: "2026-04", label: "OCPI on Bloomberg Terminal"},
          ],
        },
        {
          slug: "silicon-data",
          label: "Silicon Data",
          events: [
            {displayDate: "May 2025", sortDate: "2025-05", label: "$4.7M seed + launch"},
            {displayDate: "Oct 2025", sortDate: "2025-10", label: "Refinitiv via dxFeed"},
            {displayDate: "Oct 2025", sortDate: "2025-10-07", label: "Carmen Li dual-CEO of CX"},
          ],
        },
        {
          slug: "auctionomics",
          label: "Auctionomics",
          events: [
            {displayDate: "Nov 2024", sortDate: "2024-11", label: "OneChronos $32M raise"},
            {displayDate: "Jul 2025", sortDate: "2025-07", label: "GPU compute partnership"},
            {displayDate: "Sep 2025", sortDate: "2025-09", label: "Peterson joins, top-10 ATS"},
          ],
        },
      ],
    },
    riskComparison: {
      durationInFrames: 510,
      sectionLabel: "Risk Comparison",
      title: "Same market, different risk profiles.",
      intro:
        "Each entrant faces a distinct risk structure shaped by its approach, team, and regulatory posture.",
      matrix: {
        headers: ["Ornn", "Silicon Data", "Auctionomics"],
        rows: [
          {
            dimension: "Regulatory pathway",
            values: [
              "De minimis swaps; DCM path stated",
              "No license claimed; forwards TBD",
              "No compute filing disclosed",
            ],
            highlights: ["neutral", "weak", "weak"],
          },
          {
            dimension: "Benchmark governance",
            values: [
              "OCPI proprietary; no IOSCO map",
              "Index proprietary; no IOSCO map",
              "No benchmark — auction-based",
            ],
            highlights: ["weak", "weak", "neutral"],
          },
          {
            dimension: "Conflict / counterparty",
            values: [
              "Principal risk; self-mark concern",
              "DRW/Jump conflict stack",
              "Partnership governance unclear",
            ],
            highlights: ["weak", "weak", "weak"],
          },
          {
            dimension: "Market formation",
            values: [
              "Partners visible; liquidity TBD",
              "No trade evidence; runway risk",
              "No participants; pre-product",
            ],
            highlights: ["neutral", "weak", "weak"],
          },
        ],
      },
    },
    gatingIssues: {
      durationInFrames: 480,
      sectionLabel: "Gating Issues",
      title: "Where the same questions arise — and where they diverge.",
      intro:
        "Some P0 diligence themes recur across all three. Others are unique to one entrant's structure.",
      matrix: {
        headers: ["Ornn", "Silicon Data", "Auctionomics"],
        rows: [
          {
            dimension: "Legal / entity map",
            values: [
              "3 entities; product-by-entity TBD",
              "Silicon Derivatives unexplained",
              "Partnership form undisclosed",
            ],
          },
          {
            dimension: "Regulatory classification",
            values: [
              "De minimis threshold monitoring",
              "Forward vs. swap analysis needed",
              "Compute forward classification",
            ],
          },
          {
            dimension: "Traction proof",
            values: [
              "Partners visible; volumes TBD",
              "No completed trades disclosed",
              "No participants or product yet",
            ],
          },
          {
            dimension: "Runway / capitalization",
            values: [
              "$5.7M seed; burn undisclosed",
              "$4.7M seed; two entities to fund",
              "$80M+ but compute share unclear",
            ],
          },
        ],
      },
    },
    positioning: {
      durationInFrames: 420,
      sectionLabel: "Positioning",
      title: "Where each stands on factually observable dimensions.",
      spectrums: [
        {
          dimension: "Disclosed compute-product stage",
          scaleMin: "Pre-announcement",
          scaleMax: "Regulated exchange",
          placements: [
            {
              slug: "ornn",
              label: "Ornn",
              position: 0.55,
              rationale: "Live bilateral swaps and partner integrations visible [Source: ornn/IC memo § What appears real today]",
            },
            {
              slug: "silicon-data",
              label: "Silicon Data",
              position: 0.4,
              rationale: "Index published, marketplace pages visible, no trade evidence [Source: silicon-data/IC memo § What appears real today]",
            },
            {
              slug: "auctionomics",
              label: "Auctionomics",
              position: 0.15,
              rationale: "Partnership announced Jul 2025, no compute product visible [Source: auctionomics/IC memo § What appears real today]",
            },
          ],
        },
        {
          dimension: "Disclosed regulatory posture",
          scaleMin: "No filing",
          scaleMax: "Registered exchange",
          placements: [
            {
              slug: "ornn",
              label: "Ornn",
              position: 0.4,
              rationale: "Operating under de minimis with stated DCM path [Source: ornn/IC memo § Core risk #1]",
            },
            {
              slug: "silicon-data",
              label: "Silicon Data",
              position: 0.1,
              rationale: "CX explicitly disclaims regulatory license [Source: silicon-data/IC memo § Core risk #1]",
            },
            {
              slug: "auctionomics",
              label: "Auctionomics",
              position: 0.05,
              rationale: "No compute regulatory filing or analysis disclosed [Source: auctionomics/IC memo § Core risk #2]",
            },
          ],
        },
      ],
      summary:
        "Ornn is furthest along in visible execution. Silicon Data has distribution but no trade proof. Auctionomics has the strongest credentials but is pre-product for compute.",
    },
    recommendation: {
      durationInFrames: 390,
      sectionLabel: "Recommendation",
      title: "How to allocate diligence resources across the field.",
      cards: [
        {
          slug: "ornn",
          label: "Ornn",
          headline: "Prioritize — furthest along in execution",
          body: "Live activity, Bloomberg, partners. Gate on: legal map, threshold, DCM path, marks.",
          accent: "strong",
        },
        {
          slug: "silicon-data",
          label: "Silicon Data",
          headline: "Diligence — credible but structurally gated",
          body: "Real distribution and backers. Gate on: entity map, conflicts, IOSCO, traction.",
          accent: "neutral",
        },
        {
          slug: "auctionomics",
          label: "Auctionomics",
          headline: "Watch — strongest design, latest to market",
          body: "Nobel credentials, proven ATS. Gate on: partnership form, product spec, participants.",
          accent: "neutral",
        },
      ],
      closingNote:
        "All three recommend gated phase-two diligence only. None is investable on the current public record alone.",
    },
  },
} as const;

// Import-time validation — fails on budget violations before rendering
validateComparisonProject(competitiveLandscapeV1, sceneCitations);

export type SceneId = ComparisonSceneId;
const sceneTimeline = buildSceneTimeline(competitiveLandscapeV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
