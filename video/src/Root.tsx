import {Composition} from "remotion";
import {ornnProject} from "@projects/ornn/video/project";
import {siliconDataProject} from "@projects/silicon-data/video/project";
import {auctionomicsProject} from "@projects/auctionomics/video/project";
import {competitiveLandscapeProject} from "@projects/competitive-landscape/video/project";
import {gonkaProject} from "@projects/gonka/video/project";
import {bittensorProject} from "@projects/bittensor/video/project";
import {ioNetProject} from "@projects/io-net/video/project";
import {akashProject} from "@projects/akash/video/project";
import {kaspaProject} from "@projects/kaspa/video/project";
import {rigettiProject} from "@projects/rigetti/video/project";

const projects = [ornnProject, siliconDataProject, auctionomicsProject, competitiveLandscapeProject, gonkaProject, bittensorProject, ioNetProject, akashProject, kaspaProject, rigettiProject];

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
