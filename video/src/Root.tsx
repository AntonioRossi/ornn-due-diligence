import {Composition} from "remotion";
import {OrnnIcV1} from "./compositions/OrnnIcV1";
import {ornnIcV1, totalDurationInFrames} from "./data/ornn-ic-v1";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="OrnnIcV1"
      component={OrnnIcV1}
      durationInFrames={totalDurationInFrames}
      fps={ornnIcV1.meta.fps}
      width={1920}
      height={1080}
    />
  );
};
