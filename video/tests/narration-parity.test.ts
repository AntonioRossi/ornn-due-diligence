import {readFileSync} from "node:fs"
import path from "node:path"

import {describe, expect, it} from "vitest"

import {validateNarrationManifest} from "../src/validation/narration"

const fixtureDir = path.resolve(
  process.cwd(),
  "../tests/fixtures/projects/bad-narration-order/video/data",
)

describe("narration contract parity fixture", () => {
  it("rejects the shared bad-narration-order fixture", () => {
    const entries = JSON.parse(readFileSync(path.join(fixtureDir, "narration.json"), "utf8"))
    const sceneOrder = JSON.parse(readFileSync(path.join(fixtureDir, "scene-order.json"), "utf8"))

    expect(() => validateNarrationManifest(entries, sceneOrder)).toThrowError(
      'Narration entry 1 must use scene id "opening", got "closing"',
    )
  })
})
