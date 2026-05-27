import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  gonkaIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const GonkaIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="gonka"
      project={gonkaIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="If Bitcoin-style incentives can be repurposed for AI inference, the supply layer itself becomes the control point."
      openingTitleMaxWidth={760}
      titleSizes={{
        opening: 106,
        whyMatters: 72,
        attractive: 66,
        riskLegal: 64,
        riskCounterparty: 60,
        riskGovernance: 60,
      }}
    />
  );
};
