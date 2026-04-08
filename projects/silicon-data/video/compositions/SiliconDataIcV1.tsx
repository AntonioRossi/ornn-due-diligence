import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  sceneStartsInFrames,
  siliconDataIcV1,
  totalDurationInFrames,
} from "../data/scenes";

export const SiliconDataIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="silicon-data"
      project={siliconDataIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="If compute becomes financeable infrastructure, the benchmark layer can become the control point."
      openingTitleMaxWidth={760}
      titleSizes={{
        opening: 106,
        whyMatters: 76,
        attractive: 70,
        riskLegal: 66,
        riskCounterparty: 66,
        riskGovernance: 66,
      }}
    />
  );
};
