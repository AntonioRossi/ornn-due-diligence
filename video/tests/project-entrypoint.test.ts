import {describe, expect, it} from "vitest"

import {main, stripLeadingArgumentSeparator} from "../../scripts/project.mjs"

describe("project entrypoint", () => {
  it("strips one package-script separator before project args", () => {
    expect(stripLeadingArgumentSeparator(["--", "--project", "ornn"])).toEqual([
      "--project",
      "ornn",
    ])
  })

  it("preserves the command passthrough separator", () => {
    expect(
      stripLeadingArgumentSeparator([
        "--",
        "--project",
        "ornn",
        "--",
        "--scene",
        "opening",
      ]),
    ).toEqual(["--project", "ornn", "--", "--scene", "opening"])
  })

  it("parses documented pnpm project args before resolving the project", async () => {
    await expect(main(["stage", "--", "--project", "missing-project"])).rejects.toThrowError(
      "Missing project config:",
    )
  })
})
