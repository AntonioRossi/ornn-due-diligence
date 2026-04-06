import {interpolate} from "remotion";

export const fadeIn = (frame: number, start: number, end: number) => {
  return interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

export const riseIn = (frame: number, start: number, end: number) => {
  return interpolate(frame, [start, end], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};
