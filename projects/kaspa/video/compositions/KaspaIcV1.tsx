import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  kaspaIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const KaspaIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="kaspa"
      project={kaspaIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="Fair-launched PoW BlockDAG with Toccata programmability catalyst and a live Swiss-anchored EVM L2."
      openingTitleMaxWidth={760}
      titleSizes={{
        opening: 106,
        whyMatters: 60,
        attractive: 60,
        riskLegal: 56,
        riskCounterparty: 60,
        riskGovernance: 60,
      }}
    />
  );
};
