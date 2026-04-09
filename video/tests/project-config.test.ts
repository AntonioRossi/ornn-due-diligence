import {describe, expect, it} from "vitest"

import {validateProjectRuntimeConfig} from "../../scripts/shared/project-config.mjs"

describe("validateProjectRuntimeConfig", () => {
  it("accepts a valid config", () => {
    expect(
      validateProjectRuntimeConfig(
        {
          slug: "fixture-project",
          defaultCompositionId: "FixtureComposition",
          defaultOutputName: "fixture-project.mp4",
          runtimeAssetKinds: ["audio", "marks"],
        },
        {
          configPath: "/tmp/project.config.json",
          expectedSlug: "fixture-project",
        },
      ),
    ).toEqual({
      slug: "fixture-project",
      defaultCompositionId: "FixtureComposition",
      defaultOutputName: "fixture-project.mp4",
      runtimeAssetKinds: ["audio", "marks"],
    })
  })

  it("rejects slug mismatches", () => {
    expect(() =>
      validateProjectRuntimeConfig(
        {
          slug: "other-project",
          defaultCompositionId: "FixtureComposition",
          defaultOutputName: "fixture-project.mp4",
          runtimeAssetKinds: ["audio"],
        },
        {
          configPath: "/tmp/project.config.json",
          expectedSlug: "fixture-project",
        },
      ),
    ).toThrowError(
      "Project config slug mismatch in /tmp/project.config.json: expected fixture-project, got other-project",
    )
  })

  it("rejects a missing output name", () => {
    expect(() =>
      validateProjectRuntimeConfig(
        {
          slug: "fixture-project",
          defaultCompositionId: "FixtureComposition",
          runtimeAssetKinds: ["audio"],
        },
        {
          configPath: "/tmp/project.config.json",
          expectedSlug: "fixture-project",
        },
      ),
    ).toThrowError("Project config must define defaultOutputName")
  })

  it("rejects invalid asset kinds", () => {
    expect(() =>
      validateProjectRuntimeConfig(
        {
          slug: "fixture-project",
          defaultCompositionId: "FixtureComposition",
          defaultOutputName: "fixture-project.mp4",
          runtimeAssetKinds: ["audio", "bad kind"],
        },
        {
          configPath: "/tmp/project.config.json",
          expectedSlug: "fixture-project",
        },
      ),
    ).toThrowError('Invalid runtime asset kind "bad kind" in /tmp/project.config.json')
  })

  it("rejects invalid output file names", () => {
    expect(() =>
      validateProjectRuntimeConfig(
        {
          slug: "fixture-project",
          defaultCompositionId: "FixtureComposition",
          defaultOutputName: "../fixture-project.mp4",
          runtimeAssetKinds: ["audio"],
        },
        {
          configPath: "/tmp/project.config.json",
          expectedSlug: "fixture-project",
        },
      ),
    ).toThrowError("Output name must be a file name, got: ../fixture-project.mp4")
  })
})
