import {createElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {describe, expect, it, vi} from "vitest";
import type {DimensionSpectrumData} from "../types/comparison";
import {
  getDimensionSpectrumLayout,
  getSpectrumPlacementLabel,
} from "../utils/comparisonLayout";
import {shellPadding} from "../utils/layout";

let currentFrame = 0;

vi.mock("remotion", async () => {
  const actual = await vi.importActual<typeof import("remotion")>("remotion");

  return {
    ...actual,
    interpolate: (
      _value: number,
      _inputRange: readonly number[],
      outputRange: readonly number[],
    ) => outputRange[outputRange.length - 1]!,
    spring: () => 1,
    useCurrentFrame: () => currentFrame,
    useVideoConfig: () =>
      ({
        durationInFrames: 120,
        fps: 30,
        height: 1080,
        id: "test-dimension-spectrum",
        width: 1920,
      }) as ReturnType<typeof actual.useVideoConfig>,
  };
});

import {DimensionSpectrum} from "./DimensionSpectrum";

const companies = [
  {slug: "ornn", label: "Ornn"},
  {slug: "silicon-data", label: "Silicon Data"},
  {slug: "auctionomics", label: "Auctionomics"},
  {slug: "northstar", label: "Northstar"},
] as const;

const denseSpectrum: DimensionSpectrumData = {
  dimension: "Execution maturity",
  placements: [
    {
      position: 0.1,
      rationale: "Observed execution.",
      slug: "ornn",
    },
    {
      displayLabel: "Silicon",
      position: 0.15,
      rationale: "Observed execution.",
      slug: "silicon-data",
    },
    {
      position: 0.2,
      rationale: "Observed execution.",
      slug: "auctionomics",
    },
    {
      position: 0.25,
      rationale: "Observed execution.",
      slug: "northstar",
    },
  ],
  scaleMax: "Exchange",
  scaleMin: "Prototype",
};

describe("DimensionSpectrum", () => {
  it("expands the bar container to fit stacked labels", () => {
    currentFrame = 0;
    const companyLabelsBySlug = new Map(companies.map(({slug, label}) => [slug, label] as const));
    const expectedHeight = getDimensionSpectrumLayout(
      denseSpectrum.placements.map((placement) => ({
        label: getSpectrumPlacementLabel(placement, companyLabelsBySlug),
        ...placement,
      })),
      1920 - shellPadding * 2,
    ).containerHeight;
    const markup = renderToStaticMarkup(
      createElement(DimensionSpectrum, {...denseSpectrum, companies}),
    );

    expect(markup).toContain(`height:${expectedHeight}px`);
    expect(markup).toContain("Northstar");
    expect(markup).toContain("Silicon");
    expect(markup).toContain("text-overflow:ellipsis");
  });
});
