import sceneOrderJson from "./scene-order.json";

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
      recommendation: "Authorize gated phase-two diligence only.",
      body:
        "The public record justifies deeper work, but not underwriting. Most positive evidence is still company-generated or partner-generated rather than independently validated.",
      status: "No term sheet yet",
      statusNote:
        "Proceed only while the legal, threshold-path, valuation, and control-depth gaps remain open.",
      gatingSummary:
        "8 gates remain open: product and entity mapping, de minimis and DCM path, OCPI and IOSCO governance, counterparty and valuation controls, real liquidity, technology and privacy integrity, management and key-person depth, and tax and IP structure.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Product, entity, and regulatory mapping",
        },
        {
          label: "Issue 2",
          body: "De minimis monitoring and DCM path",
        },
        {
          label: "Issue 3",
          body: "OCPI governance, IOSCO, and data rights",
        },
        {
          label: "Issue 4",
          body: "Counterparty, collateral, valuation, and capital adequacy",
        },
        {
          label: "Issue 5",
          body: "Real two-sided liquidity",
        },
        {
          label: "Issue 6",
          body: "Technology, privacy, and operational integrity",
        },
        {
          label: "Issue 7",
          body: "Management and key-person sufficiency",
        },
        {
          label: "Issue 8",
          body: "Tax, IP, and intercompany structure",
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
          body: "Get compute pricing into investor, lender, operator, and treasury workflows.",
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
      durationInFrames: 630,
      sectionLabel: "What Appears Real Today",
      title: "Visible signal exists, but it is not the same as validation.",
      intro:
        "The public record shows productization and distribution progress, but it still does not prove durable liquidity, valuation independence, or full regulatory completeness.",
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
      title: "Competition is real, and the company is still thinly staffed.",
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
          title: "A four-person control bench is hard to underwrite.",
          body:
            "Public records still do not show dedicated legal, compliance, treasury, privacy, risk, and surveillance depth for a young principal-risk operator.",
        },
      ],
      summary:
        "Ornn is not competing against an empty field, and execution still sits on a narrow team base.",
      note:
        "New futures categories often fail. Cash runway, key-person resilience, and control depth matter as much as product vision here.",
      summaryLabel: "Underwriting read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 410,
      sectionLabel: "Risk 1",
      title: "Legal contradiction and threshold path remain the largest gate.",
      summary:
        "The public record still does not prove how Ornn's exchange-style positioning, bilateral swap activity, de minimis posture, and future DCM path reconcile across entities and regulators.",
      items: [
        {
          label: "Contradiction",
          title: "Marketing sounds like a regulated exchange story",
          body:
            "Public-facing language emphasizes a benchmark, exchange, standard, and regulated trust narrative.",
        },
        {
          label: "Threshold path",
          title: "De minimis utilization and escalation are still opaque",
          body:
            "Public materials do not show current threshold usage, affiliate aggregation, breach triggers, or a swap-dealer registration contingency.",
        },
        {
          label: "DCM path",
          title: "No public DCM status, feedback, or fallback plan",
          body:
            "The public record does not show the status of any DCM application, the scope of CFTC feedback, or the contingency if approval slips.",
        },
      ],
      framingLabel: "Investment threshold",
      framingText:
        "Assume the marketing narrative overstates present-day regulatory finality until management produces the legal map, threshold pack, and DCM contingency.",
      askText:
        "What is live today, what counts toward the threshold, and what is the plan if the DCM path takes longer than expected?",
    },
    riskCounterparty: {
      durationInFrames: 400,
      sectionLabel: "Risk 2",
      title: "Principal-risk exposure requires independent marks and hard controls.",
      summary:
        "If Ornn is taking principal exposure, this should be underwritten like early market infrastructure with valuation, balance-sheet, and conflicts risk rather than like software.",
      items: [
        {
          label: "Loss profile",
          title: "Collateral alone may not cap losses",
          body:
            "Public risk disclosures contemplate losses beyond posted collateral, rapid margin calls, and liquidation during stress.",
        },
        {
          label: "Valuation",
          title: "Independent marking and model governance are not visible",
          body:
            "Public materials do not yet prove how open positions are marked, independently verified, or challenged if Ornn controls the benchmark.",
        },
        {
          label: "Conflicts",
          title: "Information barriers and own-account controls are not visible",
          body:
            "Public materials do not show formal controls for prop trading, personal trading, front-running, or benchmark-to-trading conflicts.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "An early market-infrastructure business with balance-sheet, valuation, and conflicts exposure, not just a data product.",
      askText:
        "Who marks the book, how is the risk hedged, and what prevents benchmark production from leaking into trading decisions?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Benchmark, technology, and control depth are still incomplete.",
      summary:
        "OCPI may be visible, but visibility is not institutional readiness. IOSCO, replication, IP, privacy, and operational depth remain incomplete in the public record.",
      items: [
        {
          label: "Benchmark",
          title: "IOSCO mapping and independent replication are missing",
          body:
            "Public materials do not show explicit IOSCO benchmarking work, minimum publication thresholds, or an independent replication package.",
        },
        {
          label: "Defensibility",
          title: "IP chain of title and data rights are still unproven",
          body:
            "Public materials do not show founder assignments, third-party data rights, or a clear view on whether OCPI is defensible as proprietary infrastructure.",
        },
        {
          label: "Operational depth",
          title: "Technology, privacy, and key-person controls are still thinly evidenced",
          body:
            "Public materials do not yet prove the calculation architecture, privacy posture, or bench depth behind a four-person operator running benchmark and risk workflows.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Visible benchmark. Incomplete governance proof. Too little evidence yet on operational integrity and defensibility.",
      askText:
        "When can management open the replication room and show the technology, privacy, IP, and key-person controls behind OCPI?",
    },
    closing: {
      durationInFrames: 420,
      sectionLabel: "Bottom Line",
      title: "Proceed only with gated phase-two diligence.",
      summary:
        "Real signal exists: benchmark visibility, an API surface, Bloomberg inclusion, and partner distribution through Hydra, Architect, and Kalshi-related verification.",
      conclusion:
        "Advance only if management resolves the legal map, the de minimis and DCM path, OCPI and IOSCO governance, valuation independence, capital discipline, and key-person risk. Otherwise, pass.",
      questions: [
        {
          label: "Ask 1",
          body: "Which products are live today, by entity and jurisdiction?",
        },
        {
          label: "Ask 2",
          body: "What is current de minimis utilization, and what happens when it is crossed?",
        },
        {
          label: "Ask 3",
          body: "What is the DCM status, and what is the fallback if approval slips?",
        },
        {
          label: "Ask 4",
          body: "Who provides the independent mark-to-market on open positions?",
        },
        {
          label: "Ask 5",
          body: "When can we start independent OCPI replication, and what share is verifiable prints?",
        },
        {
          label: "Ask 6",
          body: "What are the current runway and key-person contingency plans?",
        },
      ],
      closingNote:
        "P0 first: replication, threshold pack, DCM status, independent marks, runway, and succession.",
    },
  },
} as const;

export type SceneId = keyof typeof ornnIcV1.scenes;

const validateSceneOrder = (): readonly SceneId[] => {
  if (!Array.isArray(sceneOrderJson)) {
    throw new Error("scene-order.json must be an array.");
  }

  const knownSceneIds = Object.keys(ornnIcV1.scenes) as SceneId[];
  const knownSceneIdSet = new Set(knownSceneIds);
  const seenSceneIds = new Set<SceneId>();
  const orderedSceneIds = sceneOrderJson.map((sceneId) => {
    if (typeof sceneId !== "string" || sceneId.length === 0) {
      throw new Error("scene-order.json entries must be non-empty strings.");
    }
    if (!knownSceneIdSet.has(sceneId as SceneId)) {
      throw new Error(`scene-order.json references unknown scene id: ${sceneId}`);
    }
    if (seenSceneIds.has(sceneId as SceneId)) {
      throw new Error(`scene-order.json contains duplicate scene id: ${sceneId}`);
    }

    seenSceneIds.add(sceneId as SceneId);
    return sceneId as SceneId;
  });

  if (orderedSceneIds.length !== knownSceneIds.length) {
    throw new Error(
      `scene-order.json has ${orderedSceneIds.length} scene ids, expected ${knownSceneIds.length}.`,
    );
  }

  return orderedSceneIds;
};

export const sceneOrder = validateSceneOrder();

export const sceneStartsInFrames = {} as Record<SceneId, number>;

let frameCursor = 0;

for (const sceneId of sceneOrder) {
  sceneStartsInFrames[sceneId] = frameCursor;
  frameCursor += ornnIcV1.scenes[sceneId].durationInFrames;
}

export const totalDurationInFrames = frameCursor;
