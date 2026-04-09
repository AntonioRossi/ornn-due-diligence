import {Composition} from "remotion";
import {ornnProject} from "@projects/ornn/video/project";
import {siliconDataProject} from "@projects/silicon-data/video/project";
import {auctionomicsProject} from "@projects/auctionomics/video/project";
import {competitiveLandscapeProject} from "@projects/competitive-landscape/video/project";

const projects = [ornnProject, siliconDataProject, auctionomicsProject, competitiveLandscapeProject];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <Composition
          key={project.compositionId}
          id={project.compositionId}
          component={project.component}
          durationInFrames={project.durationInFrames}
          fps={project.fps}
          width={project.width}
          height={project.height}
        />
      ))}
    </>
  );
};
