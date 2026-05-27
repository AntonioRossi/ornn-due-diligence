import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  rigettiIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const RigettiIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="rigetti"
      project={rigettiIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="Superconducting pure-play with in-house chiplet fab, 108-qubit GA, and $100M Commerce LOI."
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
