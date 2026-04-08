import {Composition} from "remotion";
import {ornnProject} from "@projects/ornn/video/project";
import {siliconDataProject} from "@projects/silicon-data/video/project";

const projects = [ornnProject, siliconDataProject];

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
