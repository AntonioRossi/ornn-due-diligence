import {CompetitiveLandscapeComposition} from "@shared/components/CompetitiveLandscapeComposition";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  sceneStartsInFrames,
  competitiveLandscapeV1,
  totalDurationInFrames,
} from "../data/scenes";

export const CompetitiveLandscapeV1: React.FC = () => {
  return (
    <CompetitiveLandscapeComposition
      projectSlug="competitive-landscape"
      project={competitiveLandscapeV1}
      sceneCitations={sceneCitations}
      narrationByScene={narrationByScene}
      sceneStartsInFrames={sceneStartsInFrames}
      totalDurationInFrames={totalDurationInFrames}
      titleSizes={{
        overview: 74,
        approaches: 68,
        traction: 78,
        riskComparison: 66,
        gatingIssues: 62,
        positioning: 64,
        recommendation: 66,
      }}
    />
  );
};
