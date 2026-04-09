import {describe, expect, it} from "vitest"

import {buildSceneTimeline} from "./sceneOrder"

const scenes = {
  opening: {durationInFrames: 90},
  detail: {durationInFrames: 120},
  closing: {durationInFrames: 60},
} as const

describe("buildSceneTimeline", () => {
  it("accepts a valid scene order", () => {
    expect(buildSceneTimeline(scenes, ["opening", "detail", "closing"]).sceneOrder).toEqual([
      "opening",
      "detail",
      "closing",
    ])
  })

  it("rejects unknown scene ids", () => {
    expect(() => buildSceneTimeline(scenes, ["opening", "unknown", "closing"])).toThrowError(
      "scene-order.json references unknown scene id: unknown",
    )
  })

  it("rejects duplicate scene ids", () => {
    expect(() => buildSceneTimeline(scenes, ["opening", "opening", "closing"])).toThrowError(
      "scene-order.json contains duplicate scene id: opening",
    )
  })

  it("rejects the wrong scene count", () => {
    expect(() => buildSceneTimeline(scenes, ["opening", "detail"])).toThrowError(
      "scene-order.json has 2 scene ids, expected 3.",
    )
  })

  it("accumulates durations into scene starts and total duration", () => {
    expect(buildSceneTimeline(scenes, ["opening", "detail", "closing"])).toEqual({
      sceneOrder: ["opening", "detail", "closing"],
      sceneStartsInFrames: {
        opening: 0,
        detail: 90,
        closing: 210,
      },
      totalDurationInFrames: 270,
    })
  })
})
