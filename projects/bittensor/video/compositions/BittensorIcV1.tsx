import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  bittensorIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const BittensorIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="bittensor"
      project={bittensorIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="If decentralized AI-compute is a durable infrastructure layer, TAO is the reference asset for that layer."
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
