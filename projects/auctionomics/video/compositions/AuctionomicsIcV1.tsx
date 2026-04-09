import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  sceneStartsInFrames,
  auctionomicsIcV1,
  totalDurationInFrames,
} from "../data/scenes";

export const AuctionomicsIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="auctionomics"
      project={auctionomicsIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="If compute becomes a traded asset class, the market-design layer can become the control point."
      openingTitleMaxWidth={760}
      titleSizes={{
        opening: 96,
        whyMatters: 72,
        attractive: 70,
        riskLegal: 66,
        riskCounterparty: 62,
        riskGovernance: 66,
        closing: 64,
      }}
    />
  );
};
