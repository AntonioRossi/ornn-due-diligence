import {describe, expect, it} from "vitest";
import {
  buildBalancedIndexPages,
  buildBalancedPages,
  getSpectrumPlacementLabel,
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

  it("resets to frame zero when uneven two-page scenes cross the boundary", () => {
    expect(getComparisonPageTiming(49, 101, 2)).toEqual({
      pageFrame: 49,
      pageIndex: 0,
    });
    expect(getComparisonPageTiming(50, 101, 2)).toEqual({
      pageFrame: 0,
      pageIndex: 1,
    });
  });

  it("resets to frame zero for later pages in uneven multi-page scenes", () => {
    expect(getComparisonPageTiming(33, 100, 3)).toEqual({
      pageFrame: 0,
      pageIndex: 1,
    });
    expect(getComparisonPageTiming(66, 100, 3)).toEqual({
      pageFrame: 0,
      pageIndex: 2,
    });
  });
});

describe("getDimensionSpectrumLayout", () => {
  it("keeps separated markers on one lane at the minimum height", () => {
    expect(getDimensionSpectrumLayout(
      [
        {label: "Ornn", position: 0.1},
        {label: "Silicon", position: 0.35},
        {label: "Auctionomics", position: 0.9},
      ],
      1000,
    )).toMatchObject({
      containerHeight: spectrumLayout.minHeight,
      labelLanes: [0, 0, 0],
      markerOffsets: [100, 350, 900],
    });
  });

  it("stacks clustered markers and grows the container", () => {
    expect(getDimensionSpectrumLayout([
        {label: "Northstar", position: 0.1},
        {label: "Silicon", position: 0.15},
        {label: "Auctionomics", position: 0.2},
        {label: "Long Horizon", position: 0.25},
      ], 1000)).toMatchObject({
      containerHeight: 114,
      labelLanes: [0, 1, 2, 3],
      markerOffsets: [100, 150, 200, 250],
    });
  });

  it("assigns lanes from sorted positions while preserving input order", () => {
    expect(
      getDimensionSpectrumLayout([
        {label: "Long Horizon", position: 0.25},
        {label: "Northstar", position: 0.1},
        {label: "Auctionomics", position: 0.2},
        {label: "Silicon", position: 0.15},
      ], 1000).labelLanes,
    ).toEqual([3, 0, 2, 1]);
  });

  it("keeps labels within the container near the spectrum edges", () => {
    const layout = getDimensionSpectrumLayout(
      [
        {label: "Left Edge Label", position: 0},
        {label: "Right Edge Label", position: 1},
      ],
      1000,
    );

    expect(layout.labelLeftOffsets[0]).toBe(spectrumLayout.edgePadding);
    expect(layout.labelLeftOffsets[1]! + layout.labelWidths[1]!).toBe(1000 - spectrumLayout.edgePadding);
  });
});

describe("getSpectrumPlacementLabel", () => {
  it("prefers displayLabel over the company label", () => {
    const labels = new Map([["ornn", "Ornn"]]);

    expect(getSpectrumPlacementLabel({displayLabel: "North Atlantic", slug: "ornn"}, labels)).toBe(
      "North Atlantic",
    );
  });

  it("falls back to the company label and then slug", () => {
    expect(getSpectrumPlacementLabel({slug: "ornn"}, new Map([["ornn", "Ornn"]]))).toBe("Ornn");
    expect(getSpectrumPlacementLabel({slug: "ornn"}, new Map())).toBe("ornn");
  });
});
