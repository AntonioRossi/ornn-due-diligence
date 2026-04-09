import {describe, expect, it} from "vitest"

import {validateNarrationManifest} from "./narration"

const sceneOrder = ["opening", "closing"] as const

describe("validateNarrationManifest", () => {
  it("accepts a valid manifest", () => {
    expect(
      validateNarrationManifest(
        [
          {
            sceneId: "opening",
            text: "Opening scene",
            voice: "af_bella",
            langCode: "a",
            speed: 1.1,
            maxDurationFrames: 90,
          },
          {
            sceneId: "closing",
            text: "Closing scene",
            voice: "af_bella",
            langCode: "a",
            speed: 1.2,
            maxDurationFrames: 120,
          },
        ],
        sceneOrder,
      ),
    ).toEqual([
      {
        sceneId: "opening",
        text: "Opening scene",
        voice: "af_bella",
        langCode: "a",
        speed: 1.1,
        maxDurationFrames: 90,
      },
      {
        sceneId: "closing",
        text: "Closing scene",
        voice: "af_bella",
        langCode: "a",
        speed: 1.2,
        maxDurationFrames: 120,
      },
    ])
  })

  it("rejects a missing required field", () => {
    expect(() =>
      validateNarrationManifest(
        [
          {sceneId: "opening", maxDurationFrames: 90},
          {sceneId: "closing", text: "Closing scene", maxDurationFrames: 120},
        ],
        sceneOrder,
      ),
    ).toThrowError('Narration entry 1 is missing required field "text"')
  })

  it("rejects duplicate scene ids", () => {
    expect(() =>
      validateNarrationManifest(
        [
          {sceneId: "opening", text: "Opening scene", maxDurationFrames: 90},
          {sceneId: "opening", text: "Duplicate scene", maxDurationFrames: 120},
        ],
        sceneOrder,
      ),
    ).toThrowError("Duplicate narration scene id: opening")
  })

  it("rejects the wrong scene order", () => {
    expect(() =>
      validateNarrationManifest(
        [
          {sceneId: "closing", text: "Closing scene", maxDurationFrames: 120},
          {sceneId: "opening", text: "Opening scene", maxDurationFrames: 90},
        ],
        sceneOrder,
      ),
    ).toThrowError('Narration entry 1 must use scene id "opening", got "closing"')
  })

  it("rejects unknown fields", () => {
    expect(() =>
      validateNarrationManifest(
        [
          {
            sceneId: "opening",
            text: "Opening scene",
            maxDurationFrames: 90,
            unexpected: true,
          },
          {sceneId: "closing", text: "Closing scene", maxDurationFrames: 120},
        ],
        sceneOrder,
      ),
    ).toThrowError('Narration entry 1 has unknown field "unexpected"')
  })

  it("applies default optional values", () => {
    expect(
      validateNarrationManifest(
        [
          {sceneId: "opening", text: " Opening scene ", maxDurationFrames: 90},
          {sceneId: "closing", text: "Closing scene", maxDurationFrames: 120},
        ],
        sceneOrder,
      ),
    ).toEqual([
      {
        sceneId: "opening",
        text: "Opening scene",
        voice: "af_bella",
        langCode: "a",
        speed: 1,
        maxDurationFrames: 90,
      },
      {
        sceneId: "closing",
        text: "Closing scene",
        voice: "af_bella",
        langCode: "a",
        speed: 1,
        maxDurationFrames: 120,
      },
    ])
  })
})
