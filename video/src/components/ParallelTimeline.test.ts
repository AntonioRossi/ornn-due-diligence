import {createElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {describe, expect, it, vi} from "vitest";
import type {TimelineLane} from "../types/comparison";
import {ParallelTimeline} from "./ParallelTimeline";

let currentFrame = 0;
let springFrames: number[] = [];

vi.mock("remotion", async () => {
  const actual = await vi.importActual<typeof import("remotion")>("remotion");

  return {
    ...actual,
    interpolate: (
      _value: number,
      _inputRange: readonly number[],
      outputRange: readonly number[],
    ) => outputRange[outputRange.length - 1]!,
    spring: ({frame}: {frame: number}) => {
      springFrames.push(frame);
      return 1;
    },
    useCurrentFrame: () => currentFrame,
    useVideoConfig: () =>
      ({
        durationInFrames: 120,
        fps: 30,
        height: 1080,
        id: "test-parallel-timeline",
        width: 1920,
      }) as ReturnType<typeof actual.useVideoConfig>,
  };
});

const lanes: readonly TimelineLane[] = [
  {
    slug: "alpha",
    label: "Alpha",
    events: [{displayDate: "Jan 2026", sortDate: "2026-01", label: "Launch"}],
  },
  {
    slug: "bravo",
    label: "Bravo",
    events: [{displayDate: "Feb 2026", sortDate: "2026-02", label: "Pilot"}],
  },
  {
    slug: "charlie",
    label: "Charlie",
    events: [{displayDate: "Mar 2026", sortDate: "2026-03", label: "Beta"}],
  },
  {
    slug: "delta",
    label: "Delta",
    events: [{displayDate: "Apr 2026", sortDate: "2026-04", label: "GA"}],
  },
  {
    slug: "echo",
    label: "Echo",
    events: [{displayDate: "May 2026", sortDate: "2026-05", label: "Scale"}],
  },
];

const renderTimelineAtFrame = (frame: number): string => {
  currentFrame = frame;
  springFrames = [];

  return renderToStaticMarkup(
    createElement(ParallelTimeline, {
      lanes,
      sceneDurationInFrames: 100,
    }),
  );
};

describe("ParallelTimeline", () => {
  it("resets lane and event spring timing when a new page starts", () => {
    const markup = renderTimelineAtFrame(50);

    expect(markup).toContain("Page 2 / 2");
    expect(markup).toContain("Delta");
    expect(markup).toContain("Echo");
    expect(springFrames).toEqual([0, -8, -6, -14]);
  });
});
