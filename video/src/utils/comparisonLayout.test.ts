import {describe, expect, it} from "vitest";
import {
  buildBalancedIndexPages,
  buildBalancedPages,
  getDimensionSpectrumLayout,
  getComparisonGridColumns,
  getComparisonPageTiming,
  spectrumLayout,
} from "./comparisonLayout";

describe("buildBalancedPages", () => {
  it("keeps a single page when within the limit", () => {
    expect(buildBalancedPages(["a", "b", "c"], 4)).toEqual([["a", "b", "c"]]);
  });

  it("distributes items across balanced pages", () => {
    expect(buildBalancedPages([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7]]);
    expect(buildBalancedPages([1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8]]);
    expect(buildBalancedPages([1, 2, 3, 4, 5], 4)).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe("buildBalancedIndexPages", () => {
  it("builds matching index pages", () => {
    expect(buildBalancedIndexPages(7, 4)).toEqual([[0, 1, 2, 3], [4, 5, 6]]);
  });
});

describe("getComparisonGridColumns", () => {
  it("keeps four-item pages at two columns", () => {
    expect(getComparisonGridColumns(4, 3)).toBe(2);
  });

  it("caps larger pages at the provided maximum", () => {
    expect(getComparisonGridColumns(6, 3)).toBe(3);
  });
});

describe("getComparisonPageTiming", () => {
  it("keeps the scene frame for single-page scenes", () => {
    expect(getComparisonPageTiming(120, 300, 1)).toEqual({
      pageFrame: 120,
      pageIndex: 0,
    });
  });

  it("walks through pages over the scene duration and resets the local page frame", () => {
    expect(getComparisonPageTiming(0, 300, 3)).toEqual({
      pageFrame: 0,
      pageIndex: 0,
    });
    expect(getComparisonPageTiming(120, 300, 3)).toEqual({
      pageFrame: 20,
      pageIndex: 1,
    });
    expect(getComparisonPageTiming(299, 300, 3)).toEqual({
      pageFrame: 99,
      pageIndex: 2,
    });
  });

  it("resets to frame zero on the first frame of a later page", () => {
    expect(getComparisonPageTiming(50, 100, 2)).toEqual({
      pageFrame: 0,
      pageIndex: 1,
    });
  });
});

describe("getDimensionSpectrumLayout", () => {
  it("keeps separated markers on one lane at the minimum height", () => {
    expect(
      getDimensionSpectrumLayout([{position: 0.1}, {position: 0.35}, {position: 0.9}]),
    ).toEqual({
      containerHeight: spectrumLayout.minHeight,
      labelLanes: [0, 0, 0],
    });
  });

  it("stacks clustered markers and grows the container", () => {
    expect(
      getDimensionSpectrumLayout([
        {position: 0.1},
        {position: 0.15},
        {position: 0.2},
        {position: 0.25},
      ]),
    ).toEqual({
      containerHeight: 114,
      labelLanes: [0, 1, 2, 3],
    });
  });

  it("assigns lanes from sorted positions while preserving input order", () => {
    expect(
      getDimensionSpectrumLayout([
        {position: 0.25},
        {position: 0.1},
        {position: 0.2},
        {position: 0.15},
      ]).labelLanes,
    ).toEqual([3, 0, 2, 1]);
  });
});
