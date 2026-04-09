import {describe, expect, it, vi} from "vitest"

import {defaultToolEnv} from "../../scripts/shared/project-workflow.mjs"
import {main, repoRoot} from "../../scripts/test-shared.mjs"

describe("shared test runner", () => {
  it("uses the repo-local tool environment for uv", async () => {
    const runCommand = vi.fn().mockResolvedValue(undefined)

    await main({runCommand})

    expect(runCommand.mock.calls).toEqual([
      ["pnpm", ["--dir", "video", "typecheck:test"], {cwd: repoRoot}],
      ["pnpm", ["--dir", "video", "test:run"], {cwd: repoRoot}],
      [
        "uv",
        ["run", "--project", ".", "python", "-m", "pytest"],
        {
          cwd: repoRoot,
          env: defaultToolEnv(repoRoot),
        },
      ],
    ])
  })
})
