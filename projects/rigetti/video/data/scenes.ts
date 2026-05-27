import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const rigettiIcV1 = {
  meta: {
    title: "Rigetti IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "Rigetti Computing",
      subtitle: "NASDAQ: RGTI / preliminary IC memo",
      date: "May 27, 2026",
      recommendation: "Initiate speculative sleeve post-DoC LOI close.",
      body:
        "Rigetti is the only superconducting pure-play with an in-house chiplet fab, a 108-qubit GA system at 99.1% fidelity, and a $100M Department of Commerce LOI. But revenue declined four years running and the stock trades at 189 times forward 2027 sales.",
      status: "Conditional buy",
      statusNote:
        "Size to 1.5 percent of speculative book; layer in post-DoC definitive and post-Q2 2026 earnings.",
      gatingSummary:
        "5 gates: DoC LOI definitive, going-concern + ICFR, customer concentration, 108Q fidelity to 99.5%, Q2 2026 revenue sustainability.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "DoC LOI is non-binding; equity stake mechanics undisclosed",
        },
        {
          label: "Issue 2",
          body: "Revenue declined four years running: $13.1M FY22 to $7.1M FY25",
        },
        {
          label: "Issue 3",
          body: "Stock trades at approximately 189 times forward 2027 revenue",
        },
        {
          label: "Issue 4",
          body: "Cepheus-1-108Q at 99.1% median 2Q fidelity; below 99.5% target",
        },
        {
          label: "Issue 5",
          body: "80 percent dilution in 18 months: 184M to 332M weighted shares",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "Vertically integrated quantum: chiplet fab, 108-qubit GA, multi-cloud distribution.",
      body:
        "Rigetti is a Berkeley-based pure-play quantum computing company with the only dedicated quantum device fab in the industry, Fab-1 in Fremont. The 108-qubit Cepheus-1 system reached general availability April 7, 2026 across AWS Braket, Microsoft Azure Quantum, and qBraid.",
      points: [
        {
          label: "CEO credibility",
          body: "Subodh Kulkarni: CEO since Dec 2022; prior CEO of CyberOptics (acquired by Nordson Nov 2022 for ~$390M). IIT Mumbai BS + MIT PhD chemical engineering.",
        },
        {
          label: "Fab-1 moat",
          body: "Captive quantum integrated circuit foundry in Fremont. Industry's first dedicated quantum device manufacturing facility. Vertical integration matched only by IBM and Google.",
        },
        {
          label: "Ecosystem",
          body: "NVIDIA NVQLink, Quanta Computer $35M strategic investment, Riverlane (error correction), QphoX (quantum networking), MIT-LL, NASA, Standard Chartered.",
        },
      ],
      accentBlock: {
        label: "$100M U.S. Department of Commerce LOI",
        value: "Signed May 21",
        body:
          "CHIPS Research and Development Office BAA award up to $100M over three years. Department to receive an equity stake consistent with the funding amount.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Q1 2026 revenue +199% YoY, 108Q live, $569M cash, no debt.",
      intro:
        "Rigetti's Q1 2026 revenue of $4.4M is the first reacceleration after a four-year revenue decline. Cash position of $569M plus the $100M DoC LOI provides multi-year runway. Twelve sell-side firms cover the stock.",
      events: [
        {
          date: "Apr 30, 2025",
          title: "Quanta Computer $35M investment closed",
          body:
            "Strategic collaboration agreement; Quanta purchased shares at $11.59 per share. Taiwanese contract manufacturing relationship for hardware scaling.",
        },
        {
          date: "Jun 11, 2025",
          title: "$350M ATM equity offering completed",
          body:
            "Post-offering: ~$575M cash, cash equivalents, and AFS investments with no debt. Funded technology roadmap to 1,000+ qubits.",
        },
        {
          date: "Apr 7, 2026",
          title: "Cepheus-1-108Q general availability",
          body:
            "108-qubit modular system live on Rigetti QCS, AWS Braket, Microsoft Azure Quantum, and qBraid. Twelve 9-qubit chiplets tiled together.",
        },
        {
          date: "May 21, 2026",
          title: "$100M Department of Commerce LOI",
          body:
            "Three-year award under CHIPS R&D BAA. Federal equity stake consistent with funding amount. Definitive transaction agreement pending.",
        },
      ],
      stats: [
        {
          label: "Market cap",
          value: "$8.33B",
          body: "$24.75 per share; 332.4M shares outstanding; 52-week range $10.30 to $58.15. Daily volume 61M shares.",
        },
        {
          label: "Q1 2026 revenue",
          value: "$4.4M",
          body: "+199% YoY from $1.47M Q1 2025. FY2025 revenue was $7.1M, down from $10.8M FY2024. Q1 is the first inflection after a four-year decline.",
        },
        {
          label: "Liquidity",
          value: "$569M",
          body: "Cash + AFS investments at March 31 2026. No debt. ~10 years runway at $50M non-GAAP annual burn before any additional capital raise.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Top-4 quantum company per IQT Research with a path to commercial Tier-1 ranking.",
      layers: [
        {
          label: "Strategic edge",
          title: "Only chiplet superconducting pure-play with in-house fab and multi-cloud distribution.",
          body:
            "Vertical integration matches IBM and Google but in a pure-play form. Chiplet tiling proven 9Q to 36Q to 108Q. NVIDIA NVQLink positions Rigetti for AI-quantum integration.",
        },
        {
          label: "Competitive field",
          title: "IonQ is 18 times larger by revenue; IBM Heron R2 targets quantum advantage 2026.",
          body:
            "IonQ guides $225-245M FY26 vs Rigetti $7M FY25. IBM and Google have infinite balance sheets. D-Wave has near-term commercial revenue from annealing-suited optimization.",
        },
        {
          label: "Operating burden",
          title: "Quantum advantage 3-4 years away per Kulkarni; 2029-2030 commercial inflection.",
          body:
            "DARPA QBI targets utility-scale by 2033. Rigetti's chiplet scaling to 1,000+ qubits over 3-4 years is the architectural bet that defines the equity story.",
        },
      ],
      summary:
        "Rigetti is structurally distinctive on technology and disadvantaged on commercial trajectory relative to IonQ.",
      note:
        "The investment thesis depends on (a) DoC LOI converting to definitive agreement, (b) Q1 inflection extending through Q2-Q3 2026, (c) 108Q fidelity reaching 99.5% on schedule.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "189x forward 2027 revenue; four-year revenue decline through 2025.",
      summary:
        "RGTI trades at ~189x forward 2027 consensus revenue of $44M. Revenue declined every year FY2022 through FY2025: $13.1M to $12.0M to $10.8M to $7.1M. Q1 2026 $4.4M is the first reacceleration but not yet validated as run-rate.",
      items: [
        {
          label: "Valuation",
          title: "Price/Sales (ttm) over 800x; forward 2027 P/S 189x",
          body:
            "Pure thematic pricing without commercial scale. Motley Fool bear thesis predicts stagnation or decline over next 12 months.",
        },
        {
          label: "Revenue decline",
          title: "Four consecutive years of declining revenue through FY2025",
          body:
            "Lumpy government and research contracts. Q1 2026 $4.4M needs to sustain through Q2-Q4 to validate the inflection narrative.",
        },
        {
          label: "Stock volatility",
          title: "52-week range $10.30 to $58.15; -57% from October ATH",
          body:
            "Pure-play quantum sentiment cycle. Stock moves 10-15% on no news. Drawdowns of 50%+ have happened repeatedly.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Treat current valuation as thematic. Position sizing must assume a 50% drawdown scenario without forced exit.",
      askText:
        "What is the path to GAAP breakeven, and at what revenue threshold? Is Q1 2026 a run-rate or one-time lumpy quarter?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "80% share dilution in 18 months; DoC equity stake adds ~1.2%.",
      summary:
        "Weighted average shares grew from 184.7M (FY24) to 332.0M (Q1 2026) — an 80% increase in 18 months. The $350M ATM offering, Quanta $35M private placement, $50M warrant exercises, and earn-out share vesting all contributed. The DoC LOI contemplates additional federal equity issuance.",
      items: [
        {
          label: "ATM facility",
          title: "$350M ATM offering completed June 2025 with continuous-issuance optionality",
          body:
            "Active ATM remains in effect. Management commitment to non-issuance during specific windows requires diligence confirmation.",
        },
        {
          label: "DoC equity stake",
          title: "$100M LOI contemplates equity issuance to federal government",
          body:
            "At current $8.33B market cap, ~1.2% dilution. Mechanics, lockup, voting rights, board observer status undisclosed.",
        },
        {
          label: "Warrant overhang",
          title: "$48.9M current + historical $102.6M derivative warrant liabilities",
          body:
            "GAAP earnings are dominated by warrant fair-value changes (Q1 2026 net income $33M is non-cash). Backing out gives non-GAAP loss of $15M.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A company that has used capital markets aggressively and will likely continue. Position must tolerate 5-10% annual dilution as a structural feature.",
      askText:
        "What is the FY2026 ATM issuance plan? Provide DoC equity-stake mechanics including pricing, lockup, and voting rights.",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Commercial advantage 3-4 years away; IBM and IonQ ahead on revenue.",
      summary:
        "CEO Kulkarni guides quantum advantage 3-4 years from now (2029-2030). IBM Heron R2 targets advantage demonstration in 2026. IonQ has 18x Rigetti's revenue. Google Willow already achieved below-threshold QEC. Rigetti's chiplet scaling thesis is competitive but not commercially leading.",
      items: [
        {
          label: "Customer concentration",
          title: "Lumpy revenue from government and research contracts",
          body:
            "Top customer concentration not yet disclosed but inferred to be high. C-DAC India $8.4M order is largest single contract. Standard Chartered is the only named commercial.",
        },
        {
          label: "Fidelity gap",
          title: "108Q at 99.1% median 2Q fidelity vs 99.5% commitment",
          body:
            "Q4 2025 testing identified tunable-coupler interactions emerging at higher qubit counts. Chip iterations have slipped in past.",
        },
        {
          label: "Competitive risk",
          title: "Google Willow, IBM Heron R2, IonQ 256-qubit late 2026",
          body:
            "Any commercial quantum advantage announcement by competitors before Rigetti reaches 200+ qubits is a thesis-defining event.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real engineering progress, real federal partnership. Commercial inflection still 3-4 years out. Suitable only as part of a barbell quantum exposure.",
      askText:
        "Where is the company on path to 99.5% fidelity? How does Rigetti respond if IBM demonstrates quantum advantage first?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Initiate speculative sleeve post-DoC LOI close; size to 1.5%.",
      summary:
        "Rigetti is the cleanest superconducting pure-play. Fab-1, 108Q GA, $569M cash, $100M DoC LOI, top-4 IQT Research ranking. But revenue decline and valuation discipline still apply.",
      conclusion:
        "Initiate post-DoC definitive agreement. Layer in post-Q2 2026 earnings if revenue $4.5M+ confirms inflection. Barbell hedge with IBM and Alphabet for diversified exposure.",
      questions: [
        {
          label: "Ask 1",
          body: "What is the DoC LOI definitive transaction timeline and equity stake mechanics?",
        },
        {
          label: "Ask 2",
          body: "Provide auditor going-concern conclusion and ICFR opinion from FY2025 10-K.",
        },
        {
          label: "Ask 3",
          body: "What is Q2 2026 revenue guidance and is the Q1 $4.4M run-rate sustainable?",
        },
        {
          label: "Ask 4",
          body: "Month-by-month plan from 99.1% to 99.5% median 2Q fidelity on 108Q.",
        },
        {
          label: "Ask 5",
          body: "Top 10 customer concentration as percentage of FY2025 revenue.",
        },
        {
          label: "Ask 6",
          body: "What is the FY2026 ATM utilization plan and path to GAAP breakeven?",
        },
      ],
      closingNote:
        "P0 first: DoC LOI, going concern, customer concentration, fidelity trajectory, Q2 revenue.",
    },
  },
} as const;

export type SceneId = keyof typeof rigettiIcV1.scenes;
const sceneTimeline = buildSceneTimeline(rigettiIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
