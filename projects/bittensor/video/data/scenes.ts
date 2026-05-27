import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const bittensorIcV1 = {
  meta: {
    title: "Bittensor IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 420,
      sectionLabel: "Recommendation",
      title: "Bittensor",
      subtitle: "TAO token / preliminary IC memo",
      date: "May 26, 2026",
      recommendation: "Authorize gated phase-two diligence only.",
      body:
        "Bittensor is the most mature decentralized AI-compute network on the public market, but the underwrite is blocked by validator concentration, an active SEC ETF process, an undisclosed Foundation, no comprehensive audit, an untested-through-downturn emissions redesign, and documented founder-control allegations.",
      status: "No TAO position yet",
      statusNote:
        "Advance only when the SEC resolves the Grayscale Spot ETF, Foundation transparency is documented, comprehensive audits are completed, and named institutional consumers triangulate the traction.",
      gatingSummary:
        "6 gates remain open: validator concentration, US securities posture, Foundation transparency, audit gap, mechanism stress-testing, and founder-dispute resolution.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Top 64 validators control 100% of subnet emissions; Triumvirate-Senate retains Foundation veto",
        },
        {
          label: "Issue 2",
          body: "Pending Grayscale Spot ETF S-1; SEC TAO classification unadjudicated",
        },
        {
          label: "Issue 3",
          body: "2024 PyPi breach cost ~32k TAO; no publicly disclosed comprehensive audits",
        },
        {
          label: "Issue 4",
          body: "Taoflow + PoC v2 are recent and have not been stress-tested through a downturn",
        },
        {
          label: "Issue 5",
          body: "Opentensor Foundation: no board, employees, or financials disclosed publicly",
        },
        {
          label: "Issue 6",
          body: "Goodhart's Law gaming documented on smaller subnets; founder-dispute allegations open",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "The incumbent decentralized AI-compute token, at $3.1B and post-first-halving.",
      body:
        "Bittensor coordinates a Substrate-based marketplace where AI miners produce outputs and validators score them via Yuma Consensus. The network has 64 active subnets, ~65% staking participation, Coinbase listing, Grayscale OTCQX exposure (GTAO), and a pending Spot Bittensor ETF S-1.",
      points: [
        {
          label: "Founders",
          body: "Jacob Steeves (Const) and Ala Shaabana; Opentensor Foundation, Swiss-domiciled non-profit. Yuma Rao whitepaper is anonymous and undated.",
        },
        {
          label: "Architecture",
          body: "Substrate (Subtensor) L1 with Yuma Consensus. Tempo ~72 minutes. 41/41/18% emission split: miners / validators / subnet owners.",
        },
        {
          label: "Token",
          body: "TAO: 21M cap, Bitcoin-style halving (first done Dec 2025). 64+ subnet alpha tokens trade separately via per-subnet AMMs.",
        },
      ],
      accentBlock: {
        label: "Market state",
        value: "$3.1B mcap",
        body:
          "10.94M TAO circulating (52% of cap). Price ~$283. 24h volume ~$300M. ATH $767 in April 2024 — current is ~63% below ATH.",
      },
    },
    traction: {
      durationInFrames: 645,
      sectionLabel: "What Appears Real Today",
      title: "Live mainnet, real institutional rails, real third-party consumption.",
      intro:
        "Bittensor has the strongest evidentiary base among AI-DePIN tokens reviewed. A Substrate mainnet running since March 2023, 64 active subnets, third-party consumption via Corcel and Macrocosmos, and the first US ETF infrastructure on OTCQX with a pending Spot ETF S-1.",
      events: [
        {
          date: "Mar 20, 2023",
          title: "Finney mainnet",
          body:
            "Subtensor chain forked to current production state; live continuously since.",
        },
        {
          date: "Feb 20, 2025",
          title: "Coinbase lists TAO",
          body:
            "First tier-1 US retail exchange listing; opens the asset to broad institutional and retail US flows.",
        },
        {
          date: "Dec 15, 2025",
          title: "First Bitcoin-style halving",
          body:
            "Daily TAO emission cut from 7,200 to 3,600. Annualized issuance now ~$370M at current price.",
        },
        {
          date: "Dec 30, 2025",
          title: "Grayscale files Spot ETF S-1",
          body:
            "Conversion of Grayscale Bittensor Trust (GTAO, OTCQX-listed since Dec 11) into a Spot Bittensor ETF. SEC decision pending.",
        },
      ],
      stats: [
        {
          label: "Active subnets",
          value: "64",
          body: "Out of 1,024 maximum. Subnet 1 (text), 9 (pretrain), 14 (TaoHash), 21 (multimodal), plus many others.",
        },
        {
          label: "Staked supply",
          value: "~65%",
          body: "Of circulating TAO is staked or delegated — among the highest among top-50 crypto assets.",
        },
        {
          label: "External usage",
          value: "50M+ calls",
          body: "Corcel API has routed 50M+ inference calls through Bittensor; Macrocosmos weights distributed on HuggingFace.",
        },
      ],
    },
    attractive: {
      durationInFrames: 420,
      sectionLabel: "Context",
      title: "Incumbency is real, but verifiable-compute alternatives and concentration loom.",
      layers: [
        {
          label: "Strategic edge",
          title: "Largest live decentralized AI-compute network with public-market rails.",
          body:
            "Coinbase listing + Grayscale OTCQX + pending Spot ETF make Bittensor the only AI-DePIN exposure available through traditional US brokerage today.",
        },
        {
          label: "Competitive field",
          title: "Verifiable-compute alternatives could undermine Yuma Consensus.",
          body:
            "Gensyn's probabilistic proof system would mathematically replace the heuristic-trust foundation YC relies on. Gonka growth shows AI-DePIN capital can rotate quickly.",
        },
        {
          label: "Operating burden",
          title: "Concentration is the structural cost of incumbency.",
          body:
            "Top 64 validators control 100% of emissions. The Triumvirate-Senate model gives the Foundation exclusive proposal control. Decentralization is architectural, not yet operational.",
        },
      ],
      summary:
        "Bittensor trades as the incumbent of decentralized AI compute and offers the cleanest institutional entry path in the category.",
      note:
        "The investment is structurally a bet that the SEC clears the ETF and that dTAO redistributes power before validator concentration erodes the protocol's claimed openness.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 420,
      sectionLabel: "Risk 1",
      title: "The Grayscale Spot ETF is the single biggest near-term regulatory catalyst.",
      summary:
        "TAO's delegation-and-reward structure mirrors staking arrangements the SEC has previously characterized as securities. The REX-Osprey filing language ('no entity owns or operates the Bittensor Network') is untested at the SEC. Swiss FINMA framing does not insulate against US enforcement.",
      items: [
        {
          label: "ETF pending",
          title: "Grayscale Spot Bittensor ETF S-1 filed Dec 30, 2025",
          body:
            "Outcome will define institutional access, US TAO classification, and OTF's regulatory posture for the next decade.",
        },
        {
          label: "Five mechanisms",
          title: "Each TAO distribution path needs its own legal theory",
          body:
            "Miner emissions, validator emissions, delegated staking, subnet-owner cuts, and dTAO subnet alpha tokens — only the first is cleanly inside the SEC PoW safe harbor.",
        },
        {
          label: "Non-US exposure",
          title: "MiCA, FCA, MAS frameworks unaddressed in public record",
          body:
            "Bittensor operates globally; no public counsel opinions on EU MiCA classification or UK FCA qualifying-cryptoasset framework.",
        },
      ],
      framingLabel: "Underwriting threshold",
      framingText:
        "Treat the current legal posture as a hypothesis until the Grayscale ETF resolves and a published outside-counsel package addresses each distribution mechanism separately.",
      askText:
        "What is OTF's current status with the SEC on the Grayscale ETF, and where is the outside-counsel opinion addressing each of the five TAO distribution mechanisms separately?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "Validator concentration is structurally embedded and self-reinforcing.",
      summary:
        "Top 64 validators control 100% of subnet emission weights. Top 10 by stake form supermajority blocs in scoring scenarios. New validators face a compounding rich-get-richer disadvantage. The 18% subnet-owner cut creates incentives for owners to control the validators scoring their own subnets.",
      items: [
        {
          label: "Validator capture",
          title: "Top 64 control 100% of subnet emissions; top 10 form supermajorities",
          body:
            "Per Yellow research using Taostats data. Lower stake = lower scoring weight = fewer delegators = slower stake growth.",
        },
        {
          label: "Subnet-owner cut",
          title: "18% per-subnet owner cut creates insider economic alignment",
          body:
            "Subnet owners define the task, set scoring rules, and in many cases influence the validators scoring their own subnet's miners.",
        },
        {
          label: "Foundation control",
          title: "Triumvirate retains exclusive proposal creation and closure",
          body:
            "The Senate can only approve or reject what OTF drafts. Decentralization is architectural; operational control still sits at the Foundation.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A protocol where 'genuinely decentralized in architecture but meaningfully concentrated in practice' applies — until dTAO and continued governance evolution demonstrate redistribution.",
      askText:
        "Show us the top-10 validators by stake, their subnet-ownership overlap, their OTF-affiliate overlap, and the documented Senate-vs-Triumvirate vote independence record.",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "Audit gap, Foundation opacity, and untested mechanism redesigns.",
      summary:
        "Per Messari: no publicly disclosed comprehensive audits as of December 2024. The 2024 PyPi breach cost ~32,000 TAO. Opentensor Foundation has no public board, employees, or financials. The November 2025 Taoflow and February 2026 PoC v2 redesigns have not run through a sustained downturn.",
      items: [
        {
          label: "Audit gap",
          title: "No comprehensive Subtensor / Yuma / dTAO audit in public record",
          body:
            "OTF announced intentions July 2024 but no completed audits visible. The $25M Nexus Mutual cover is partial substitute, not equivalent.",
        },
        {
          label: "Foundation opacity",
          title: "Swiss-domiciled OTF with no published board, employees, or financials",
          body:
            "For a $3B+ asset with public-market exposure, this is materially below institutional disclosure standards.",
        },
        {
          label: "Untested redesigns",
          title: "Taoflow + PoC v2 launched within the last 7 months",
          body:
            "EMA-window dynamics and validator-scoring changes have not been stress-tested through a multi-month downturn or sustained adversarial pressure.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real engineering, real adoption, real public-market rails. The institutional underwriting case is blocked by remediable transparency and audit gaps — gaps the Foundation has acknowledged but not closed.",
      askText:
        "When will OTF publish Swiss registry detail, audited financials, completed tier-1 audits, and stress-test results for Taoflow and PoC v2?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Proceed only when the SEC, audit, and Foundation transparency resolve.",
      summary:
        "Bittensor is the most mature decentralized AI-compute token: $3.1B mcap, $300M daily volume, 65% staked, 64 subnets, Coinbase + Grayscale OTCQX listings.",
      conclusion:
        "Advance only when the Spot ETF resolves, the Foundation publishes governance and financials, audits complete, and named institutional consumers triangulate the traction.",
      questions: [
        {
          label: "Ask 1",
          body: "What is OTF's status with the SEC on the Grayscale Spot ETF S-1 filing?",
        },
        {
          label: "Ask 2",
          body: "Who sits on the OTF council, and where are the audited Swiss financials?",
        },
        {
          label: "Ask 3",
          body: "Where are the completed tier-1 audits of Subtensor, Yuma Consensus, and dTAO?",
        },
        {
          label: "Ask 4",
          body: "Show us the top-10 validators and their subnet-ownership overlap.",
        },
        {
          label: "Ask 5",
          body: "Has the Senate ever rejected a Triumvirate proposal?",
        },
        {
          label: "Ask 6",
          body: "Name five institutional consumers beyond Corcel with disclosed monthly usage.",
        },
      ],
      closingNote:
        "P0 first: SEC ETF outcome, Foundation transparency, comprehensive audits, validator concentration, governance independence, named consumers.",
    },
  },
} as const;

export type SceneId = keyof typeof bittensorIcV1.scenes;
const sceneTimeline = buildSceneTimeline(bittensorIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
