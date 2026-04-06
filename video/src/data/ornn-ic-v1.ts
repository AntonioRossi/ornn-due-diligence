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
      durationInFrames: 405,
      sectionLabel: "Recommendation",
      title: "Ornn",
      subtitle: "Preliminary IC memo",
      date: "April 6, 2026",
      recommendation: "Authorize phase-two diligence only.",
      body:
        "The public record justifies deeper work, but not underwriting. Most of the positive evidence is still company-generated or partner-generated rather than independently validated.",
      status: "No term sheet yet",
      statusNote:
        "Proceed only while the legal, liquidity, competitive, and control-function gaps remain open.",
      gatingSummary:
        "6 gates remain open: product and entity mapping, OCPI governance and data rights, counterparty and capital adequacy, real liquidity, competitive position, and management-control sufficiency.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Product, entity, and regulatory mapping",
        },
        {
          label: "Issue 2",
          body: "OCPI governance and data rights",
        },
        {
          label: "Issue 3",
          body: "Counterparty, collateral, and capital adequacy",
        },
        {
          label: "Issue 4",
          body: "Real two-sided liquidity",
        },
        {
          label: "Issue 5",
          body: "Competitive position",
        },
        {
          label: "Issue 6",
          body: "Management and control-function sufficiency",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 480,
      sectionLabel: "Company Snapshot",
      title: "A benchmark-led market-structure bet.",
      body:
        "If compute becomes a financeable infrastructure input, benchmark ownership and workflow penetration matter. Ornn is trying to pair OCPI with cash-settled products for compute providers, buyers, lenders, and traders.",
      points: [
        {
          label: "Benchmark",
          body: "Own the reference price and shape how the market talks about compute.",
        },
        {
          label: "Workflow",
          body: "Get compute pricing into investor, lender, operator, and lender workflows.",
        },
        {
          label: "Use case",
          body: "Public materials frame hedging of compute-price volatility and GPU depreciation as the need.",
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
      durationInFrames: 660,
      sectionLabel: "What Appears Real Today",
      title: "Visible signal exists, but it is not the same as validation.",
      intro:
        "The public record shows productization and distribution progress, but it still does not prove durable liquidity, methodology validation, or full regulatory completeness.",
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
            "Ornn announced OCPI on Bloomberg Terminal and said more than 400 operators, investors, and AI companies access the platform.",
        },
      ],
      stats: [
        {
          label: "400+ access",
          value: "400+",
          body: "Self-reported by Ornn. 'Access' is undefined and not independently validated.",
        },
        {
          label: "Hydra footprint",
          value: "30,000+",
          body: "GPUs under management referenced in Hydra partnership materials.",
        },
        {
          label: "Bloomberg",
          value: "Bloomberg",
          body: "Improves discoverability in institutional tooling, not methodology endorsement.",
        },
      ],
    },
    attractive: {
      durationInFrames: 435,
      sectionLabel: "Context",
      title: "Competition is real, and market formation will be hard.",
      layers: [
        {
          label: "Competitive field",
          title: "Silicon Data already has a live benchmark.",
          body:
            "Silicon Data launched a daily H100 rental index in May 2025 and is backed by DRW and Jump Trading Group.",
        },
        {
          label: "Market operators",
          title: "Compute Exchange and Auctionomics are credible rivals.",
          body:
            "Compute Exchange ties into the Silicon Data ecosystem, while Auctionomics and OneChronos publicized a GPU-compute market effort in August 2025.",
        },
        {
          label: "Operating burden",
          title: "Control-function depth is still unproven publicly.",
          body:
            "The public record does not yet show dedicated legal, compliance, treasury, risk, and surveillance leadership for a young principal-risk market operator.",
        },
      ],
      summary:
        "Ornn is not competing against an empty field. Better-capitalized and more market-structure-native entrants are already visible.",
      note:
        "New futures categories often fail, and the most natural compute hedgers may be the weaker credits. That raises the burden of proof on adoption and execution.",
      summaryLabel: "Underwriting read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "Legal contradiction remains the largest gating issue.",
      summary:
        "The public record still does not prove how Ornn's exchange-style positioning, bilateral swap activity, and partner-listed products reconcile across entities and regulators.",
      items: [
        {
          label: "Contradiction",
          title: "Marketing sounds like a regulated exchange story",
          body:
            "Public-facing language emphasizes a benchmark, exchange, standard, and regulated trust narrative.",
        },
        {
          label: "Disclosure",
          title: "Legal terms narrow the service sharply",
          body:
            "Data terms say the services are informational and reference only, not exchange services, brokerage services, or transaction offers.",
        },
        {
          label: "Entity map",
          title: "ORNNX, Ornn Data, and de minimis posture",
          body:
            "ORNNX LLC appears as direct swap counterparty with no organized exchange, while Ornn Data LLC appears as partner-listed index provider pending approval.",
        },
      ],
      framingLabel: "Investment threshold",
      framingText:
        "Assume the marketing narrative overstates present-day regulatory finality until management produces a clean entity-by-entity legal map.",
      askText:
        "Which products are actually live today, under which legal entity, in which jurisdictions, and under what regulatory basis?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "Principal-risk exposure changes the underwriting.",
      summary:
        "If Ornn is taking principal exposure, this should be underwritten more like early market infrastructure with balance-sheet risk than like software.",
      items: [
        {
          label: "Loss profile",
          title: "Collateral alone may not cap losses",
          body:
            "Public risk disclosures contemplate losses beyond posted collateral, rapid margin calls, and liquidation during stress.",
        },
        {
          label: "Capital",
          title: "Public financing scale is still limited",
          body:
            "The only disclosed financing signal is a $5.7M seed round, so the burden of proof on capital adequacy is high.",
        },
        {
          label: "Proof gap",
          title: "Segregation, hedging, and default tools are opaque",
          body:
            "Public materials do not yet prove collateral segregation, hedge counterparties, risk limits, or a credible default-management framework.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "An early market-infrastructure business with balance-sheet, custody, and re-hedging exposure, not just a data product.",
      askText:
        "What capital, re-hedging, segregation, and default waterfalls protect the business if a counterparty fails?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Benchmark credibility and liquidity proof are still incomplete.",
      summary:
        "OCPI may be visible, but visibility is not institutional underwritability. Governance, data rights, and market-depth proof remain incomplete.",
      items: [
        {
          label: "Methodology",
          title: "Proprietary and changeable by Ornn",
          body:
            "Risk disclosure says OCPI depends on proprietary methodology, third-party provider data, and can be changed by Ornn.",
        },
        {
          label: "Proof gap",
          title: "Contributor quality and transaction depth remain opaque",
          body:
            "Public materials do not disclose contributor concentration, restatement history, or the share of direct transaction prints versus normalized adjustments.",
        },
        {
          label: "Standard risk",
          title: "OCPI is not clearly the only benchmark in the field",
          body:
            "Competing GPU pricing benchmarks predate OCPI's Bloomberg visibility, so market standardization could still converge elsewhere.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Visible benchmark. Incomplete governance proof. No public evidence yet that OCPI is the accepted market standard.",
      askText:
        "What share of OCPI comes from verifiable transaction prints, and what are the current live market metrics behind it?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Proceed only with gated phase-two diligence.",
      summary:
        "Real signal exists: benchmark visibility, an API surface, Bloomberg inclusion, and partner distribution through Hydra, Architect, and Kalshi-related verification.",
      conclusion:
        "Advance only if management resolves legal mapping, proves benchmark governance, demonstrates real liquidity, shows adequate control functions, and evidences capital discipline. Otherwise, pass.",
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
          body: "What share of OCPI comes from verifiable prints, and what live metrics support it?",
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
