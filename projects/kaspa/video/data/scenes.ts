import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const kaspaIcV1 = {
  meta: {
    title: "Kaspa IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "Kaspa + Igra Network",
      subtitle: "KAS and IGRA / preliminary IC memo",
      date: "May 27, 2026",
      recommendation: "Authorize gated phase-two diligence.",
      body:
        "Kaspa is the most architecturally and legally clean PoW-L1 plus EVM-rollup pair in the cohort: fair launch with formal IP-rights waiver, near-term Toccata hard fork (June 5-20), and the only L2 with a named Swiss legal entity and a Tier-1 Sigma Prime audit completed clean.",
      status: "Phase-two diligence recommended",
      statusNote:
        "Size capital around two dated milestones: Toccata mainnet activation (June 2026) and the 95% mined supply cliff (July 10, 2026).",
      gatingSummary:
        "5 gates: Toccata activation date, Kaspa Foundation disclosure, Igra Association controls, bridge security mode, Tier-1 listing posture.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Toccata mainnet date is not yet hardcoded; activation contingent on TN10 rehearsal",
        },
        {
          label: "Issue 2",
          body: "Kaspa Ecosystem Foundation jurisdiction, board, and financials not publicly disclosed",
        },
        {
          label: "Issue 3",
          body: "Igra Association articles, multisig topology, DAO transition triggers undisclosed",
        },
        {
          label: "Issue 4",
          body: "Bridge mode on Igra mainnet is community multisig — worst case = full theft of locked KAS",
        },
        {
          label: "Issue 5",
          body: "Binance and Coinbase have not listed KAS; Kraken status contradictory across sources",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "Fair-launched PoW BlockDAG with a near-term programmability catalyst and a live EVM L2.",
      body:
        "Kaspa is a proof-of-work BlockDAG L1 running at 10 BPS post-Crescendo, with the Toccata hard fork bringing covenants, Silverscript, and ZK verification to L1 in June 2026. Igra Network is the live EVM L2 on top, Swiss-anchored, Sigma Prime audited.",
      points: [
        {
          label: "Fair launch",
          body: "DAGLabs and Polychain formally waived all Kaspa IP rights. The $8M Polychain research grant was repaid via mined KAS. No surviving L1 cap table.",
        },
        {
          label: "Igra Network live",
          body: "Mainnet since March 19, 2026: 730K testnet txns, zero state divergence, 15 launch protocols, $5M ecosystem TVL.",
        },
        {
          label: "Toccata catalyst",
          body: "June 5-20 2026 hard fork activates KIP-16/17/20/21: covenants, ZK opcodes, partitioned sequencing commits, Silverscript compiler.",
        },
      ],
      accentBlock: {
        label: "Tier-1 audit credential",
        value: "Sigma Prime clean",
        body:
          "The firm behind Ethereum's Lighthouse consensus client audited Igra Core Smart Contracts v2.1 with no unresolved issues. Unique in this AI-DePIN cohort.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "4.5 years of mainnet, 95.7% supply mined, 500K+ active addresses, live L2.",
      intro:
        "Kaspa has shipped continuously since November 2021. Crescendo (May 2025) lifted block rate from 1 to 10 BPS. Cumulative transactions exceeded 600 million with 158M on a single day. Igra Network mainnet went live March 2026 with Sigma Prime clean audit.",
      events: [
        {
          date: "Nov 2021",
          title: "Mainnet launch",
          body:
            "Fair launch from empty genesis. DAGLabs dissolved at launch; project transitioned to community-led model.",
        },
        {
          date: "May 5, 2025",
          title: "Crescendo hard fork",
          body:
            "Block rate increased from 1 BPS to 10 BPS while keeping block sizes constant. Cumulative transactions surpassed 600 million.",
        },
        {
          date: "Mar 19, 2026",
          title: "Igra Network mainnet",
          body:
            "Public mainnet launch. 15 protocols deploying. Sigma Prime audit clean. Swiss Association governance.",
        },
        {
          date: "Jun 5-20, 2026",
          title: "Toccata hard fork target",
          body:
            "Covenants (KIP-17, KIP-20), ZK opcodes (KIP-16), partitioned sequencing (KIP-21), Silverscript compiler.",
        },
      ],
      stats: [
        {
          label: "Market cap",
          value: "$899.5M",
          body: "Price $0.03275; rank #62 on CoinMarketCap; circulating 27.46B of 28.7B; -84% from August 2024 ATH of $0.2075.",
        },
        {
          label: "Supply milestone",
          value: "95% Jul 10",
          body: "Chromatic emission cap of 28.7B KAS reached 95% mined on July 10, 2026. Daily new supply collapses thereafter.",
        },
        {
          label: "Ecosystem density",
          value: "20+ protocols",
          body: "Igra Fleet: Zealous Swap, Kaskad, Aporia, Hyperlane warp routes for USDC/USDT/cbBTC/wstETH/WETH/SOL across 7 EVM chains.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Cleanest fair-launch credentials in cohort with a dated programmability catalyst.",
      layers: [
        {
          label: "Strategic edge",
          title: "Only L1 in cohort with formal IP-rights waiver and reproducible genesis proof.",
          body:
            "Bitcoin-like tokenomics: fair launch, hard cap, chromatic emission. Closer to Satoshi than to any PoS L1 or AI-DePIN peer.",
        },
        {
          label: "Competitive field",
          title: "Bitcoin first-mover network effects vs Kaspa's technical superiority.",
          body:
            "CrowdFund Insider notes Decred, Bitcoin Cash, Nano precedents. Bear thesis: network effects beat technical innovation regardless of architecture quality.",
        },
        {
          label: "Operating burden",
          title: "Two dated milestones in 8 weeks: Toccata + 95% mined supply cliff.",
          body:
            "Kaspa core devs (Sutton, Newman, Moog, Safstrom) appear unfunded by any formal entity. Sustainability question.",
        },
      ],
      summary:
        "Kaspa offers structurally cleaner tokenomics than any peer at the cost of a less accountable legal-entity layer.",
      note:
        "The investment thesis depends on (a) Toccata activating on schedule, (b) Foundation and Association disclosures meeting institutional norms, (c) bridge tier upgrading beyond community multisig.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "No central Kaspa L1 entity; Kaspa Ecosystem Foundation jurisdiction undisclosed.",
      summary:
        "DAGLabs dissolved at Kaspa's 2021 fair launch. The Kaspa Ecosystem Foundation and a parallel Kaspa Industrial Initiative Foundation exist but legal jurisdiction, board composition, and audited financials are not disclosed publicly.",
      items: [
        {
          label: "No invoiceable entity",
          title: "Kaspa L1 has no legal counterparty for institutional onboarding",
          body:
            "No DPA, no roadmap accountability beyond core developer goodwill. Differentiator and operational risk simultaneously.",
        },
        {
          label: "Foundation opacity",
          title: "KEF and Kii foundations exist but financials are undisclosed",
          body:
            "Two parallel foundations suggests fragmented institutional layer. Disposition rules and treasury composition are private.",
        },
        {
          label: "Core dev funding",
          title: "Sutton, Newman, Moog, Safstrom have no formal employer disclosure",
          body:
            "Critical-path engineering work depends on individuals whose compensation and runway are not public. Sustainability question.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Treat Kaspa L1 governance as goodwill-based rather than entity-based. Pre-disclosure capital deployment carries different risk than post-disclosure.",
      askText:
        "What is the KEF legal jurisdiction, board, and audited financials? Who employs the named core developers?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "Igra L1-L2 bridge worst case is full theft; only community multisig is live at launch.",
      summary:
        "The Igra Litepaper explicitly states community bridging worst case equals theft of all locked KAS if multisig is breached. Three-tier roadmap (community to MPC to ZK) exists, but only the first stage is live. Sigma Prime audit scope covered smart contracts, not full protocol or node infrastructure.",
      items: [
        {
          label: "Active bridge",
          title: "Community multisig with time-lock at mainnet launch",
          body:
            "Signer roster, m-of-n, and time-lock parameters not on public site. NDA-only diligence likely required.",
        },
        {
          label: "MPC pending",
          title: "FROST threshold signatures via PoS-staked IGRA validators is roadmapped, not live",
          body:
            "Same trust as PoS systems once active. Timeline not committed; depends on attester ramp.",
        },
        {
          label: "ZK contingent",
          title: "ZK bridging requires Kaspa ZK opcodes",
          body:
            "Toccata activates Groth16 and RISC Zero STARK verifiers in June 2026 - then production ZK bridge work begins.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A protocol where smart-contract layer is audited but the critical-path bridge currently operates under trust assumptions equivalent to a multisig custodian.",
      askText:
        "Which bridge mode is currently live? Provide the signer roster, time-lock, and the committed timeline to MPC.",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Tier-1 exchange gap and 84% drawdown story.",
      summary:
        "KAS daily volume ~$12M is thin for institutional size. Binance and Coinbase have not listed KAS as of March 2026. Kraken's November 2024 listing is community-reported but contradicted by Bitget Academy. KAS is -84% from its August 2024 all-time high.",
      items: [
        {
          label: "Liquidity gap",
          title: "$12M daily volume across mid-tier venues",
          body:
            "Bitget, KuCoin, MEXC, Gate.io are the primary venues. Institutional position sizing requires OTC and market-maker engagement.",
        },
        {
          label: "Tier-1 friction",
          title: "Binance and Coinbase have not listed; Kraken status contradictory",
          body:
            "Community sources cite Kraken Nov 19 2024; Bitget Academy March 2026 reports Not Listed. Verify directly.",
        },
        {
          label: "Cycle dynamics",
          title: "-84% from Aug 2024 ATH; never retested in post-Crescendo cycle",
          body:
            "Bull thesis: room to run post-Toccata. Bear thesis (CrowdFund Insider): Bitcoin network effects will prevail.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real network usage, real protocol shipping, strong tokenomics. The institutional thesis is gated by exchange-listing posture and the post-Toccata price discovery.",
      askText:
        "What is the engagement status with Coinbase and Binance? Confirm or refute the Kraken listing.",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Cleanest PoW-L1 plus L2 pair; phase-two diligence warranted.",
      summary:
        "Fair launch, IP-waiver, Sigma Prime audit clean, Toccata in June 2026, 95% mined July 10 2026.",
      conclusion:
        "Authorize phase-two diligence: audit close-out review, Foundation and Association disclosures, bridge mode confirmation, Tier-1 exchange status. Size capital around Toccata and the 95% mined milestone.",
      questions: [
        {
          label: "Ask 1",
          body: "Confirm the Toccata mainnet date and the TN10 rehearsal status.",
        },
        {
          label: "Ask 2",
          body: "Provide the Sigma Prime audit scope, findings, and remediation evidence.",
        },
        {
          label: "Ask 3",
          body: "Which bridge mode is live on Igra mainnet, and when does MPC migration complete?",
        },
        {
          label: "Ask 4",
          body: "Who employs Sutton, Newman, Moog, Safstrom, and is there KEF runway?",
        },
        {
          label: "Ask 5",
          body: "What is the KEF jurisdiction, board, and financial disclosure status?",
        },
        {
          label: "Ask 6",
          body: "Provide the Igra Association multisig topology and DAO transition triggers.",
        },
      ],
      closingNote:
        "P0 first: Toccata date, Foundation disclosure, bridge mode, audit close-out, Tier-1 listing posture.",
    },
  },
} as const;

export type SceneId = keyof typeof kaspaIcV1.scenes;
const sceneTimeline = buildSceneTimeline(kaspaIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
