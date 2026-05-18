import {createElement} from "react";
import {renderToStaticMarkup} from "react-dom/server";
import {describe, expect, it, vi} from "vitest";
import type {CompanyCard} from "../types/comparison";
import {SideBySideCards} from "./SideBySideCards";

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
        id: "test-side-by-side-cards",
        width: 1920,
      }) as ReturnType<typeof actual.useVideoConfig>,
  };
});

const cards: readonly CompanyCard[] = [
  {slug: "alpha", label: "Alpha", headline: "Headline A", body: "Body A"},
  {slug: "bravo", label: "Bravo", headline: "Headline B", body: "Body B"},
  {slug: "charlie", label: "Charlie", headline: "Headline C", body: "Body C"},
  {slug: "delta", label: "Delta", headline: "Headline D", body: "Body D"},
  {slug: "echo", label: "Echo", headline: "Headline E", body: "Body E"},
];

const renderCardsAtFrame = (frame: number): string => {
  currentFrame = frame;
  springFrames = [];

  return renderToStaticMarkup(
    createElement(SideBySideCards, {
      cards,
      sceneDurationInFrames: 100,
    }),
  );
};

describe("SideBySideCards", () => {
  it("resets spring timing when a new page starts", () => {
    const markup = renderCardsAtFrame(50);

    expect(markup).toContain("Page 2 / 2");
    expect(markup).toContain("Headline D");
    expect(markup).toContain("Headline E");
    expect(springFrames).toEqual([0, -3]);
  });
});
