import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const ioNetIcV1 = {
  meta: {
    title: "io.net IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "io.net",
      subtitle: "IO token / preliminary IC memo",
      date: "May 26, 2026",
      recommendation: "Pause. Do not authorize phase-two diligence.",
      body:
        "Real product, real customers, tier-1 Series A syndicate, structurally sophisticated IDE tokenomic redesign. But the founder-history overhang, the Q2 2026 IDE implementation timing, the 30,000+ vs 2,752 verified-GPU gap, and the absent legal entity disclosure together justify pausing capital deployment.",
      status: "No IO position; reassess post-IDE",
      statusNote:
        "Reassess only after Q2 2026 IDE implementation completes with one full quarter of post-implementation observability and the founder-history overhang resolves with documented current-management separation.",
      gatingSummary:
        "6 gates remain open: founder-history overhang, Q2 2026 IDE implementation timing, network-scale claim integrity, missing legal-entity disclosure, audit gap, and current-CEO identity discrepancy.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Founder Ahmad Shadid removed pre-launch with six-figure severance to distance the company",
        },
        {
          label: "Issue 2",
          body: "IDE Q2 2026 implementation not yet live; investment thesis depends on it",
        },
        {
          label: "Issue 3",
          body: "Homepage 30,000+ GPUs vs Year-in-Review 2,752 verified — mirrors historical allegation",
        },
        {
          label: "Issue 4",
          body: "No publicly disclosed legal entity, board, or audited financials",
        },
        {
          label: "Issue 5",
          body: "No comprehensive smart-contract audit of the Solana program or IDE vaults",
        },
        {
          label: "Issue 6",
          body: "Current CEO unresolved: Tory Green per CMC vs Gaurav Sharma per Year in Review",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "A Solana-native decentralized GPU cloud with real customers and a redesigned tokenomic engine.",
      body:
        "io.net aggregates GPUs from data centers, miners, and consumer devices into clusters for AI/ML workloads. Settles on Solana via Solana Pay; uses the Ray framework; enforces SLAs via staking and slashing.",
      points: [
        {
          label: "Founders",
          body: "Ahmad Shadid (resigned June 2024), Tory Green, Basem Oubah, Matej Tomazin. Pivoted from institutional HFT trading (pre-2022).",
        },
        {
          label: "Token",
          body: "IO Solana SPL. 800M max supply; 333.52M circulating (41.69%). Listed on Coinbase, Binance, OKX since April 2024.",
        },
        {
          label: "Tokenomics",
          body: "Original inflationary model failed (97% drawdown). Incentive Dynamic Engine (IDE) full implementation Q2 2026: dual-vault demand-driven model with 50% revenue burn.",
        },
      ],
      accentBlock: {
        label: "Series A backing",
        value: "$30M tier-1",
        body:
          "March 2024 round led by Hack VC and Multicoin Capital, with Solana Labs, Aptos Labs, 6th Man, Modular Capital, Animoca Brands, OKX, plus angels. Stated $1B token valuation at the time.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Mainnet since 2024, real customers, ~97% drawdown from ATH.",
      intro:
        "io.net has the deepest set of named customer case studies in the AI-DePIN sector reviewed by this firm. The IDE tokenomic redesign acknowledges and addresses the original model's failure. But the network-scale claim discrepancy and the post-Shadid leadership uncertainty are unresolved.",
      events: [
        {
          date: "Mar 5, 2024",
          title: "Series A close",
          body:
            "$30M raised at $1B token valuation; Hack VC + Multicoin lead.",
        },
        {
          date: "Apr 2024",
          title: "IO token launch",
          body:
            "Solana SPL token live on Coinbase, Binance, OKX. ATH $6.44 in June 2024.",
        },
        {
          date: "Jun 2024",
          title: "Shadid resigns as CEO",
          body:
            "Days before token launch, with six-figure severance reportedly to distance the company. Public statement deleted.",
        },
        {
          date: "Dec 11, 2025",
          title: "IDE litepaper released",
          body:
            "Demand-driven tokenomic redesign; full implementation targeted Q2 2026. CryptoEcon Lab stress-tested 55% demand drop and 50% price crash.",
        },
      ],
      stats: [
        {
          label: "Verified GPUs",
          value: "2,752",
          body: "Per the Jan 2026 Year in Review — vs 30,000+ homepage claim. The gap mirrors historical 'inflated supply' allegations.",
        },
        {
          label: "Named customers",
          value: "5 disclosed",
          body: "Leonardo.Ai (>50% AWS savings), Wondera ($2.48M savings), Frodobots/UC Berkeley RAIL (92.8% savings), Vistara Labs, KayOS.",
        },
        {
          label: "Drawdown from ATH",
          value: "−97%",
          body: "Price fell from $6.44 (Jun 2024) to $0.18 (May 2026). Vol/Mcap 157% — speculative trading dominates.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Real product, real customers, but the founder overhang reframes the underwrite.",
      layers: [
        {
          label: "Strategic edge",
          title: "Deepest set of named customer references in AI-DePIN.",
          body:
            "Leonardo.Ai, Wondera, Frodobots/UC Berkeley RAIL, Vistara Labs, KayOS with disclosed AWS-comparison savings. Stronger commercial evidence than Bittensor or Gonka.",
        },
        {
          label: "Competitive field",
          title: "Bittensor pulls institutional flows that io.net cannot match.",
          body:
            "TAO has $3.1B mcap, pending Spot ETF, Grayscale OTCQX product. io.net at $60M mcap with founder overhang. Render and Akash are safer GPU-DePIN bets for allocators.",
        },
        {
          label: "Operating burden",
          title: "IDE implementation and founder cleanup are both unfinished.",
          body:
            "Q2 2026 IDE go-live is the single biggest near-term catalyst. Until then, the original failed tokenomics continues and supplier USD-stable payouts remain a future state.",
        },
      ],
      summary:
        "io.net has the best commercial evidence among AI-DePIN tokens reviewed, but trades at a founder-event discount that requires structural remediation before institutional capital should engage.",
      note:
        "The investment is structurally a bet that current management (Green or Sharma) successfully separates io.net from the Shadid-era data, narrative, and governance — and that the IDE arrives on schedule and works.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "Founder-history overhang dominates the underwriting.",
      summary:
        "Ahmad Shadid resigned as CEO in June 2024 days before token launch, with six-figure severance reportedly to distance the company from him. Investigations.org rates him HIGH RISK (C 63/100) with explicit citation of 'reported inflated GPU supply claims' during io.net's growth phase.",
      items: [
        {
          label: "Severance to distance",
          title: "Six-figure separation reportedly to distance io.net from Shadid",
          body:
            "Decrypt source: severance structured specifically as reputational containment, not routine executive transition. Public departure statement deleted from X.",
        },
        {
          label: "Pattern across ventures",
          title: "Misrepresentation pattern carries to subsequent O.XYZ venture",
          body:
            "Decrypt Nov 2024 investigation documents disputed claims about Cerebras, Starlink, satellite program, and token launch at Shadid's next company. Investigations.org composite C 63/100 HIGH RISK.",
        },
        {
          label: "Token-launch timing",
          title: "Token launched days after CEO departure",
          body:
            "97% drawdown from ATH $6.44 to $0.18 is the public-market price of the founder event. Current management must demonstrate clean break.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Until current management produces signed-document evidence of the post-Shadid governance reset, treat all Shadid-era io.net data as conflicted-advocacy primary source rather than reliable anchor.",
      askText:
        "Where is the executed Shadid separation agreement, what IO does he still hold, and what is io.net's official position on the 'inflated GPU supply claims' allegation?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "IDE timing and network-scale claim integrity are both unresolved.",
      summary:
        "The Incentive Dynamic Engine (IDE) is a structurally sophisticated demand-driven redesign with CryptoEcon Lab stress-testing. But it is not yet live; full implementation is targeted for Q2 2026. The 30,000+ vs 2,752 verified GPU gap mirrors the historical 'inflated supply' pattern.",
      items: [
        {
          label: "IDE not yet live",
          title: "Q2 2026 implementation target with no named contract auditor",
          body:
            "Dual-vault demand-driven model with 50% revenue burn. Litepaper acknowledges 'not set-and-forget' and supplier-detachment risk. No tier-1 smart-contract audit named.",
        },
        {
          label: "GPU-count discrepancy",
          title: "Homepage 30,000+ vs verified 2,752 — order-of-magnitude gap",
          body:
            "The pattern matches the Shadid-era 'inflated GPU supply claims' allegation. Diligence must define 'verified' precisely and reconcile.",
        },
        {
          label: "Drawdown story",
          title: "97% from ATH is the worst in the AI-DePIN cohort",
          body:
            "Reflects the founder event, the failed original tokenomics, and the speculative-trading turnover (157% Vol/Mcap).",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A protocol whose recovery thesis depends entirely on Q2 2026 IDE implementation arriving on schedule with verified post-implementation behavior — and on the network-scale claim being substantiated, not aggregated.",
      askText:
        "Define 'verified GPU' operationally, reconcile to the 30,000+ homepage figure, and confirm Q2 2026 IDE timing with named smart-contract auditor.",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Absent legal entity, audits, and Foundation transparency.",
      summary:
        "No legal entity is publicly disclosed for IO Research. The IDE litepaper names no signing entity. The current CEO identity is unresolved (Tory Green per CMC vs Gaurav Sharma per Year in Review). No comprehensive smart-contract audit is in the public record.",
      items: [
        {
          label: "Entity opacity",
          title: "No corporate registry, board, or audited financials disclosed",
          body:
            "For a $60M+ mcap asset on Coinbase, this is materially below institutional disclosure norms. Litepaper has no signatory; CMC refers to 'ionet-official'.",
        },
        {
          label: "CEO discrepancy",
          title: "Tory Green per CMC vs Gaurav Sharma per Year in Review",
          body:
            "The discrepancy itself suggests an internal-communications or transition gap that direct diligence must resolve.",
        },
        {
          label: "Audit gap",
          title: "Only CryptoEcon Lab economic simulation; no smart-contract audit",
          body:
            "CEL stress-tested 55% demand drop and 50% price crash — but that is not equivalent to a tier-1 code audit of the Solana program, bridge, or IDE vaults.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real engineering and customer adoption, but the institutional underwriting case is blocked by remediable disclosure and audit gaps that the company has not yet closed despite 18+ months of public-market presence.",
      askText:
        "When will IO Research publish its corporate registry, named board, audited financials, completed tier-1 audits, and a definitive current-CEO identity?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Pause. Reassess only after the IDE is live and the founder overhang resolves.",
      summary:
        "io.net has the best commercial evidence in AI-DePIN: real customers, tier-1 Series A backing, Coinbase listing. The founder event, 97% drawdown, and unfinished IDE justify pausing.",
      conclusion:
        "Reassess after the IDE goes live, current management documents the Shadid-era reset, and IO Research discloses its entity, board, and financials.",
      questions: [
        {
          label: "Ask 1",
          body: "Who runs io.net today — Tory Green or Gaurav Sharma — and when did the transition happen?",
        },
        {
          label: "Ask 2",
          body: "Where is the executed Shadid separation agreement and his current IO holdings?",
        },
        {
          label: "Ask 3",
          body: "Define 'verified GPU' operationally and reconcile to the 30,000+ homepage figure.",
        },
        {
          label: "Ask 4",
          body: "Is the Q2 2026 IDE implementation on schedule with a named tier-1 auditor?",
        },
        {
          label: "Ask 5",
          body: "What is the IO Research legal entity, jurisdiction, board, and audited financial status?",
        },
        {
          label: "Ask 6",
          body: "Are Multicoin Capital and Hack VC still holding their Series A positions in full?",
        },
      ],
      closingNote:
        "P0 first: founder reset, IDE go-live, GPU integrity, legal entity, audit, Series A investor confirmation.",
    },
  },
} as const;

export type SceneId = keyof typeof ioNetIcV1.scenes;
const sceneTimeline = buildSceneTimeline(ioNetIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
