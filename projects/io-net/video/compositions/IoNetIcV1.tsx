import {InvestorMemoComposition} from "@shared/components/InvestorMemoComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  ioNetIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/scenes";

export const IoNetIcV1: React.FC = () => {
  return (
    <InvestorMemoComposition
      projectSlug="io-net"
      project={ioNetIcV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      whyMattersHeadline="If decentralized GPU compute commoditizes inference, the operational layer matters more than the token."
      openingTitleMaxWidth={760}
      titleSizes={{
        opening: 106,
        whyMatters: 64,
        attractive: 64,
        riskLegal: 60,
        riskCounterparty: 60,
        riskGovernance: 60,
      }}
    />
  );
};
