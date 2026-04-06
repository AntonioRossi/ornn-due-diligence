export const sceneOrder = [
  "opening",
  "whyMatters",
  "traction",
  "attractive",
  "riskLegal",
  "riskCounterparty",
  "riskGovernance",
  "closing",
] as const;

export type SceneId = (typeof sceneOrder)[number];

export const ornnIcV1 = {
  meta: {
    title: "Ornn IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 330,
      sectionLabel: "Recommendation",
      title: "Ornn",
      subtitle: "Preliminary IC memo",
      date: "April 6, 2026",
      recommendation: "Continue diligence. No term sheet yet.",
      body:
        "This is not a final invest or decline decision. Authorize phase-two diligence while the public record still fails to resolve the underwriting questions that matter most.",
      status: "Phase-two diligence",
      gatingSummary:
        "4 gating questions remain open: product and entity mapping, OCPI governance quality, counterparty structure, and real two-sided liquidity.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Product, entity, and regulatory mapping",
        },
        {
          label: "Issue 2",
          body: "OCPI governance quality",
        },
        {
          label: "Issue 3",
          body: "Counterparty, collateral, and capital adequacy",
        },
        {
          label: "Issue 4",
          body: "Real two-sided liquidity",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 420,
      sectionLabel: "Why This Matters",
      title: "Not another AI app. A market-structure bet.",
      body:
        "If compute becomes a financeable infrastructure input, the company that owns the benchmark, embeds it into institutional workflows, and helps form early liquidity could capture durable value.",
      points: [
        {
          label: "Benchmark",
          body: "Own the reference price and the market speaks your language.",
        },
        {
          label: "Workflow",
          body: "Get compute pricing into investor, lender, and operator tooling.",
        },
        {
          label: "Risk need",
          body: "Public materials frame hedging of price volatility and GPU depreciation as the pain point.",
        },
      ],
      accentBlock: {
        label: "Financing signal",
        value: "$5.7M seed",
        body:
          "Announced Oct 28, 2025. Led by Crucible Ventures and Vine Ventures with Link Ventures and Box Group participating.",
      },
    },
    traction: {
      durationInFrames: 570,
      sectionLabel: "What Appears Real Today",
      title: "Visible product and distribution signal already exist.",
      intro:
        "The benchmark and data surface appear live, and the public record shows multiple distribution and partner signals across the last two quarters.",
      events: [
        {
          date: "Oct 22, 2025",
          title: "Hydra partnership",
          body:
            "Hydra announced real-time infrastructure data from 30,000+ GPUs under management flowing into Ornn indices and analytics.",
        },
        {
          date: "Jan 21, 2026",
          title: "Architect / AX launch announcement",
          body:
            "Architect said AX would imminently launch exchange-traded compute futures tied to Ornn Data LLC indices, pending regulatory approval.",
        },
        {
          date: "Mar 4, 2026",
          title: "Kalshi verification signal",
          body:
            "DatacenterDynamics reported that Kalshi users could trade markets on GPU compute prices verified using Ornn data.",
        },
        {
          date: "Apr 2, 2026",
          title: "Bloomberg Terminal inclusion",
          body:
            "Ornn announced OCPI on Bloomberg Terminal and said more than 400 operators, investors, and AI companies were accessing the platform.",
        },
      ],
      stats: [
        {
          label: "Platform users",
          value: "400+",
          body: "Operators, investors, and AI companies reportedly on platform by Apr 2, 2026.",
        },
        {
          label: "Hydra footprint",
          value: "30,000+",
          body: "GPUs under management referenced in Hydra partnership materials.",
        },
        {
          label: "Institutional reach",
          value: "Bloomberg",
          body: "OCPI distribution now visible inside established institutional tooling.",
        },
      ],
    },
    attractive: {
      durationInFrames: 390,
      sectionLabel: "Why It Could Work",
      title: "Three reinforcing layers could create durable value.",
      layers: [
        {
          label: "Layer 1",
          title: "Benchmark data",
          body:
            "OCPI and the API surface create the reference language for compute pricing.",
        },
        {
          label: "Layer 2",
          title: "Risk-transfer products",
          body:
            "Cash-settled products turn reference pricing into hedging and underwriting utility.",
        },
        {
          label: "Layer 3",
          title: "Liquidity and distribution",
          body:
            "Bloomberg, Hydra, Architect, and partner channels help distribution escape a single venue.",
        },
      ],
      summary:
        "Benchmark businesses can become embedded and recurring. Once a pricing convention sticks, it can support forward curves, underwriting, and structured products.",
      note:
        "The strategic attraction is not one product. It is the possibility that each layer strengthens the next: better data supports products, products attract flow, and flow legitimizes the benchmark.",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "Legal and regulatory ambiguity is the largest gating issue.",
      summary:
        "Public materials pull in different directions. They do not cleanly resolve which products are live, under which entity, or under which regulatory regime.",
      items: [
        {
          label: "Contradiction",
          title: "Exchange-style positioning",
          body:
            "Homepage and search language emphasize a benchmark, exchange, standard, and regulated trust narrative.",
        },
        {
          label: "Disclosure",
          title: "Terms narrow the service",
          body:
            "Data terms say the services are informational and reference only, not exchange services, brokerage services, or transaction offers.",
        },
        {
          label: "Entity map",
          title: "Multiple legal surfaces",
          body:
            "ORNNX LLC appears as direct counterparty for swaps, while Ornn Data LLC appears as index provider for partner-listed contracts pending approval.",
        },
      ],
      framingLabel: "Investment threshold",
      framingText:
        "Before any term sheet: produce a product-by-product legal status matrix by entity, jurisdiction, regulator, and counterparty.",
      askText:
        "Which products are actually live today, under which legal entity, in which jurisdictions, and under what regulatory basis?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "Counterparty and collateral risk changes the underwriting.",
      summary:
        "If Ornn is taking principal exposure, this should be underwritten more like OTC principal risk or market infrastructure than like pure software.",
      items: [
        {
          label: "Loss profile",
          title: "Customers can lose more than posted collateral",
          body:
            "The public risk disclosure flags substantial loss risk beyond initial collateral during market stress.",
        },
        {
          label: "Control",
          title: "Margin and liquidation discretion",
          body:
            "The disclosure contemplates immediate margin calls and liquidation without prior notice.",
        },
        {
          label: "Proof gap",
          title: "Segregation and capital are still opaque",
          body:
            "Public materials do not yet prove collateral segregation, capital adequacy, risk limits, or a credible default-management framework.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "An early market-infrastructure business with balance-sheet, collateral, and re-hedging exposure, not just a data product.",
      askText:
        "What capital, re-hedging, segregation, and default waterfalls protect the business if a counterparty fails?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "OCPI visibility does not yet equal institutional underwritability.",
      summary:
        "The benchmark may be visible, but the public record still does not show enough methodology governance or market-depth proof for institutional confidence.",
      items: [
        {
          label: "Methodology",
          title: "Proprietary and changeable",
          body:
            "Risk disclosure says OCPI depends on proprietary methodology, third-party provider data, and can be changed by Ornn.",
        },
        {
          label: "Data rights",
          title: "Contributor quality remains opaque",
          body:
            "Public materials do not disclose contributor concentration, raw data composition, or rights durability across the data supply chain.",
        },
        {
          label: "Market proof",
          title: "Missing liquidity metrics",
          body:
            "Notional traded, open interest, spreads, active counterparties, and repeat hedging behavior remain absent from public evidence.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Visible benchmark. Incomplete liquidity proof. Benchmark credibility and market proof still need separate diligence.",
      askText:
        "What share of OCPI comes from verifiable transaction prints, and what are the current live market metrics behind it?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Move forward to gated phase-two diligence, not final approval.",
      summary:
        "Real signal exists: a live benchmark, visible API, Bloomberg distribution, partner integrations, and a real pain point.",
      conclusion:
        "Advance only if management resolves the legal structure, proves OCPI governance, demonstrates real liquidity, and shows tight counterparty controls. Otherwise, pass.",
      questions: [
        {
          label: "Ask 1",
          body: "Which products are live today, by entity and jurisdiction?",
        },
        {
          label: "Ask 2",
          body: "Who is regulated for what, and where is the clearest legal memo?",
        },
        {
          label: "Ask 3",
          body: "Does Ornn take principal risk today, and where is it hedged?",
        },
        {
          label: "Ask 4",
          body: "What are current notional, active counterparties, and repeat metrics?",
        },
      ],
      closingNote:
        "Next call test: ask for the clearest proof that Ornn is building a market, not just a dataset.",
    },
  },
} as const;

export const sceneStartsInFrames = {} as Record<SceneId, number>;

let frameCursor = 0;

for (const sceneId of sceneOrder) {
  sceneStartsInFrames[sceneId] = frameCursor;
  frameCursor += ornnIcV1.scenes[sceneId].durationInFrames;
}

export const totalDurationInFrames = frameCursor;
