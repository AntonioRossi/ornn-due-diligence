import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  akashIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const AkashIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="akash"
      project={akashIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="Credibility-adjusted leader in AI-DePIN: 5.5 years on mainnet, Grayscale recognition, Osuri's congressional voice."
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
