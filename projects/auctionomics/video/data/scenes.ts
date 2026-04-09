import sceneOrderJson from "./scene-order.json";
import {buildSceneTimeline} from "@shared/utils/sceneOrder";

export const auctionomicsIcV1 = {
  meta: {
    title: "Auctionomics IC Memo v1",
    fps: 30,
  },
  scenes: {
    opening: {
      durationInFrames: 390,
      sectionLabel: "Recommendation",
      title: "Auctionomics / OneChronos",
      subtitle: "GPU compute market partnership / preliminary IC memo",
      date: "April 9, 2026",
      recommendation: "Authorize gated phase-two diligence only.",
      body:
        "The public record shows a credible partnership between a Nobel-laureate-led market-design firm and a well-capitalized, SEC/FINRA-regulated trading venue operator. The thesis is intellectually serious, but the compute-market initiative remains at the announcement stage.",
      status: "No term sheet yet",
      statusNote:
        "Advance only if the partnership can demonstrate a working product, named participants, and a credible regulatory pathway.",
      gatingSummary:
        "5 gates remain open: partnership legal structure, product regulatory pathway, market-design feasibility, compute-market traction, and resource allocation versus equities/FX priorities.",
      gatingIssues: [
        {
          label: "Issue 1",
          body: "Partnership legal form, governance, and durability",
        },
        {
          label: "Issue 2",
          body: "Product regulatory pathway for compute forwards and futures",
        },
        {
          label: "Issue 3",
          body: "Market-design feasibility — combinatorial auctions for compute liquidity",
        },
        {
          label: "Issue 4",
          body: "No visible compute-market traction, participants, or transactions",
        },
        {
          label: "Issue 5",
          body: "Resource allocation: compute initiative vs. equities, FX, and global expansion",
        },
      ],
    },
    whyMatters: {
      durationInFrames: 555,
      sectionLabel: "Company Snapshot",
      title: "Nobel-caliber market design meets proven trading infrastructure.",
      body:
        "Auctionomics brings auction theory from the team that designed the FCC spectrum auction. OneChronos brings a regulated ATS that already handles ten billion dollars in daily equities volume. Together they are building a combinatorial auction marketplace for GPU compute capacity.",
      points: [
        {
          label: "Auctionomics",
          body: "Co-founded by Paul Milgrom, 2020 Nobel laureate in Economics, and Dr. Silvia Console Battilana. Emmy-winning FCC Incentive Auction design. Palo Alto, CA.",
        },
        {
          label: "OneChronos",
          body: "OCX Group Inc. subsidiary. SEC/FINRA-regulated ATS. Y Combinator 2016. $80M+ raised. Douglas Peterson (ex-S&P Global CEO) as Executive Chairman.",
        },
        {
          label: "The product",
          body: "An off-exchange marketplace for bilateral compute forwards using combinatorial auctions — optimizing across GPU type, location, power, and time simultaneously.",
        },
      ],
      accentBlock: {
        label: "Scale signal",
        value: "$10B daily volume",
        body:
          "OneChronos' equities ATS reached ten billion dollars in daily trading volume and entered FINRA's top-10 ATSs by September 2025. The underlying technology is proven at institutional scale.",
      },
    },
    traction: {
      durationInFrames: 600,
      sectionLabel: "What Appears Real Today",
      title: "The equities platform is proven. The compute market is still an announcement.",
      intro:
        "The public record supports a real technology platform and real institutional credibility, but the compute-market initiative has no visible product, participants, or transactions yet.",
      events: [
        {
          date: "2016",
          title: "OneChronos founded, Y Combinator",
          body:
            "Kelly Littlepage and Stephen Johnson founded OneChronos to apply combinatorial auctions to capital markets.",
        },
        {
          date: "Nov 2024",
          title: "$32M expansion capital",
          body:
            "Addition led the round. OneChronos ATS had reached $4.5 billion in daily equities volume.",
        },
        {
          date: "Jul 29, 2025",
          title: "GPU compute partnership announced",
          body:
            "Auctionomics and OCX Group announced the first financial market for GPU and compute capacity via BusinessWire.",
        },
        {
          date: "Sep 2025",
          title: "Peterson joins, $10B daily volume",
          body:
            "Former S&P Global CEO Douglas Peterson appointed Executive Chairman. ATS entered FINRA's top-10.",
        },
      ],
      stats: [
        {
          label: "Total raised",
          value: "$80M+",
          body: "From Addition, BoxGroup, DCVC, DST Global, Green Visor, and 9Yards Capital.",
        },
        {
          label: "Transactions",
          value: "$2T+",
          body: "Total securities transactions facilitated since the ATS launched in 2022.",
        },
        {
          label: "Compute participants",
          value: "None named",
          body: "No specific institutions have been publicly identified as compute-market participants.",
        },
      ],
    },
    attractive: {
      durationInFrames: 405,
      sectionLabel: "Context",
      title: "The strongest market-design credentials, but the latest to market.",
      layers: [
        {
          label: "Structural edge",
          title: "Combinatorial auctions could be the right structure for heterogeneous compute.",
          body:
            "GPU resources vary by type, memory, interconnect, location, power, and availability. A combinatorial auction can optimize across all dimensions simultaneously, which bilateral matching cannot.",
        },
        {
          label: "Competitive field",
          title: "Ornn and Silicon Data are further along in visible execution.",
          body:
            "Ornn has live bilateral swaps and Bloomberg distribution. Silicon Data has a published index and a marketplace. Auctionomics/OneChronos has proven technology in equities but no visible compute product yet.",
        },
        {
          label: "Timing question",
          title: "The best market design loses if it arrives after standards are set.",
          body:
            "Commodity markets form around the first credible standard. If Ornn or Silicon Data establishes the reference price before this auction launches, the combinatorial advantage may be structural but too late.",
        },
      ],
      summary:
        "This is a bet on market-design superiority in a race where competitors have a visible execution lead.",
      note:
        "The burden of proof is higher because the compute initiative is competing for resources with OneChronos' proven and growing equities and FX businesses.",
      summaryLabel: "Current read",
      noteLabel: "Why it is harder",
    },
    riskLegal: {
      durationInFrames: 390,
      sectionLabel: "Risk 1",
      title: "The partnership structure, governance, and IP ownership are undisclosed.",
      summary:
        "The public record describes a partnership between Auctionomics and OCX Group Inc. without specifying the legal form, governance framework, IP ownership, or termination provisions. Without these, the venture's durability is unknowable.",
      items: [
        {
          label: "Legal form",
          title: "JV, contractual, equity, or informal — not disclosed",
          body:
            "If the partnership is informal or purely contractual, it can be dissolved easily. Formal governance is needed to enforce continuation when priorities diverge.",
        },
        {
          label: "IP ownership",
          title: "The 'building block' for compute standardization has no disclosed owner",
          body:
            "Milgrom described the standardization framework as proprietary 'magic sauce.' Whether it belongs to Auctionomics, OneChronos, or a joint entity matters for durability.",
        },
        {
          label: "Resource commitment",
          title: "Milgrom's role and time commitment are not defined",
          body:
            "He is a Stanford professor and on OneChronos' scientific advisory board. Day-to-day involvement in the compute initiative is unclear.",
        },
      ],
      framingLabel: "Investment threshold",
      framingText:
        "Assume the partnership is informal and revocable until an executed agreement with clear governance, IP ownership, and commitment provisions is produced.",
      askText:
        "What is the legal form, who owns the IP, what are the termination provisions, and what is Milgrom's contractual time commitment?",
    },
    riskCounterparty: {
      durationInFrames: 420,
      sectionLabel: "Risk 2",
      title: "The regulatory pathway for compute forwards is entirely open.",
      summary:
        "Bilateral forwards for future delivery of compute could be exempt commercial forwards or could be classified as swaps or futures. No outside-counsel analysis, regulatory filing, or regulator interaction has been disclosed.",
      items: [
        {
          label: "Classification",
          title: "Forward vs. swap vs. futures — not analyzed publicly",
          body:
            "The product description includes price-locking, future delivery, and platform-mediated matching. Depending on standardization and settlement, CFTC jurisdiction could apply.",
        },
        {
          label: "ATS scope",
          title: "The equities ATS registration does not cover compute",
          body:
            "OneChronos Markets LLC is registered for US equities. The compute market is described as off-exchange and would need its own regulatory basis.",
        },
        {
          label: "Competitor contrast",
          title: "Ornn has a stated DCM application path; this partnership has disclosed none",
          body:
            "Ornn operates bilateral swaps under the CFTC de minimis threshold with a stated exchange pathway. Auctionomics/OneChronos has not disclosed any regulatory strategy for compute.",
        },
      ],
      framingLabel: "Underwrite it as",
      framingText:
        "A pre-regulatory venture where the product cannot launch until the classification question is resolved. This is not disqualifying, but it means the timeline depends on legal answers that have not yet been obtained.",
      askText:
        "Has outside counsel opined on the forward/swap/futures classification? Has there been any regulatory engagement? What is the contingency if registration is required?",
    },
    riskGovernance: {
      durationInFrames: 420,
      sectionLabel: "Risk 3",
      title: "The auction design is untested in compute and the market has no participants.",
      summary:
        "Combinatorial auctions work at scale for equities. Compute markets lack the built-in institutional demand that provides natural liquidity. No pilot or simulation has been disclosed.",
      items: [
        {
          label: "Liquidity formation",
          title: "Diverse participants needed for efficient outcomes",
          body:
            "A thin market produces poor price discovery and may underperform simpler bilateral models.",
        },
        {
          label: "Standardization",
          title: "The compute building block is not publicly validated",
          body:
            "Too coarse and it misses heterogeneity; too fine and it becomes illiquid. No simulation or feedback has been disclosed.",
        },
        {
          label: "Chicken and egg",
          title: "No named participants and no product to show them",
          body:
            "The marketplace needs participants for liquidity, but participants need a working product to evaluate.",
        },
      ],
      framingLabel: "Current read",
      framingText:
        "Real credentials and proven technology in equities. Not yet enough evidence that combinatorial auctions can form durable compute liquidity.",
      askText:
        "Has the auction been simulated with real data? Which institutions have been approached?",
    },
    closing: {
      durationInFrames: 360,
      sectionLabel: "Bottom Line",
      title: "Proceed only if the initiative moves beyond announcement.",
      summary:
        "Real credentials: Nobel-laureate auction theory, a proven regulated platform, and a thesis that addresses a genuine market gap.",
      conclusion:
        "Advance only if partnership is formalized, product specified, counsel engaged, and participants committed. Otherwise, pass.",
      questions: [
        {
          label: "Ask 1",
          body: "What is the partnership legal form, and who owns the compute-market IP?",
        },
        {
          label: "Ask 2",
          body: "What is the product specification, and has the standardization been tested?",
        },
        {
          label: "Ask 3",
          body: "Has outside counsel opined on the regulatory classification of compute forwards?",
        },
        {
          label: "Ask 4",
          body: "Which institutions have committed to participate?",
        },
        {
          label: "Ask 5",
          body: "How much budget and engineering is dedicated to compute versus equities and FX?",
        },
        {
          label: "Ask 6",
          body: "What is the development timeline, and when does the first auction run?",
        },
      ],
      closingNote:
        "P0 first: partnership structure, product spec, regulatory analysis, pipeline, and resource allocation.",
    },
  },
} as const;

export type SceneId = keyof typeof auctionomicsIcV1.scenes;
const sceneTimeline = buildSceneTimeline(auctionomicsIcV1.scenes, sceneOrderJson);

export const sceneOrder = sceneTimeline.sceneOrder;
export const sceneStartsInFrames = sceneTimeline.sceneStartsInFrames;
export const totalDurationInFrames = sceneTimeline.totalDurationInFrames;
