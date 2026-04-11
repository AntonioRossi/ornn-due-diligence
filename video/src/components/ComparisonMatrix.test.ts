import {createElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {describe, expect, it, vi} from "vitest";
import type {ComparisonRow} from "../types/comparison";

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
        id: "test-comparison-matrix",
        width: 1920,
      }) as ReturnType<typeof actual.useVideoConfig>,
  };
});

import {ComparisonMatrix} from "./ComparisonMatrix";

const headers = ["Alpha", "Bravo", "Charlie", "Delta", "Echo"] as const;
const rows: readonly ComparisonRow[] = [
  {
    dimension: "Regulatory",
    highlights: ["neutral", "strong", "weak", "neutral", "strong"],
    values: ["Cell one", "Cell two", "Cell three", "Cell four", "Cell five"],
  },
];

const renderMatrixAtFrame = (frame: number): string => {
  currentFrame = frame;
  springFrames = [];

  return renderToStaticMarkup(
    createElement(ComparisonMatrix, {
      headers,
      rows,
      sceneDurationInFrames: 100,
    }),
  );
};

describe("ComparisonMatrix", () => {
  it("renders the first page headers and cells from the same visible columns", () => {
    const markup = renderMatrixAtFrame(0);

    expect(markup).toContain("Companies 1-3 of 5");
    expect(markup).toContain("Alpha");
    expect(markup).toContain("Bravo");
    expect(markup).toContain("Charlie");
    expect(markup).toContain("Cell one");
    expect(markup).toContain("Cell two");
    expect(markup).toContain("Cell three");
    expect(markup).not.toContain("Delta");
    expect(markup).not.toContain("Echo");
    expect(markup).not.toContain("Cell four");
    expect(markup).not.toContain("Cell five");
  });

  it("renders the second page headers and cells from the same visible columns", () => {
    const markup = renderMatrixAtFrame(99);

    expect(markup).toContain("Companies 4-5 of 5");
    expect(markup).toContain("Delta");
    expect(markup).toContain("Echo");
    expect(markup).toContain("Cell four");
    expect(markup).toContain("Cell five");
    expect(markup).not.toContain("Alpha");
    expect(markup).not.toContain("Bravo");
    expect(markup).not.toContain("Charlie");
    expect(markup).not.toContain("Cell one");
    expect(markup).not.toContain("Cell two");
    expect(markup).not.toContain("Cell three");
  });

  it("resets spring timing when a new page starts", () => {
    renderMatrixAtFrame(50);

    expect(springFrames).toEqual([0, -6]);
  });
});
