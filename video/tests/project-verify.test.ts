import {mkdtemp, rm, stat, writeFile} from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import {afterEach, describe, expect, it, vi} from "vitest"

import {
  buildProjectVerifyPlan,
  parseVerifyArgs,
  runProjectVerify,
  verifyOutputFile,
} from "../../scripts/shared/project-verify.mjs"
import {createProjectEnvironment} from "../../scripts/shared/project-workflow.mjs"

const createdDirectories: string[] = []

afterEach(async () => {
  await Promise.all(createdDirectories.splice(0).map((directory) => rm(directory, {recursive: true, force: true})))
})

describe("project verify helpers", () => {
  it("requires a project argument", () => {
    expect(() => parseVerifyArgs([])).toThrowError("--project is required")
  })

  it("builds the expected verification command sequence", async () => {
    const env = createProjectEnvironment({repoRoot: "/tmp"})

    await expect(
      buildProjectVerifyPlan("ornn", env, {
        readProjectConfig: vi.fn().mockResolvedValue({defaultOutputName: "ornn.mp4"}),
      }),
    ).resolves.toEqual({
      outputPath: "/tmp/projects/ornn/video/out/ornn.mp4",
      steps: [
        {command: "pnpm", args: ["--dir", "video", "typecheck"]},
        {command: "pnpm", args: ["--dir", "video", "lint"]},
        {command: process.execPath, args: ["scripts/project.mjs", "audio", "--project", "ornn"]},
        {command: process.execPath, args: ["scripts/project.mjs", "render", "--project", "ornn"]},
      ],
    })
  })

  it("selects the canonical output path from project config", async () => {
    const env = createProjectEnvironment({repoRoot: "/tmp"})

    const plan = await buildProjectVerifyPlan("silicon-data", env, {
      readProjectConfig: vi.fn().mockResolvedValue({defaultOutputName: "silicon-data.mp4"}),
    })

    expect(plan.outputPath).toBe("/tmp/projects/silicon-data/video/out/silicon-data.mp4")
  })

  it("enforces that the output file exists and is non-empty", async () => {
    const repoRoot = await mkdtemp(path.join(os.tmpdir(), "ornn-project-verify-"))
    createdDirectories.push(repoRoot)
    const emptyFile = path.join(repoRoot, "empty.mp4")
    await writeFile(emptyFile, "")

    await expect(verifyOutputFile(emptyFile)).rejects.toThrowError(
      `Verification did not produce a valid output file: ${emptyFile}`,
    )

    const outputFile = path.join(repoRoot, "out.mp4")
    await writeFile(outputFile, "video bytes")
    await expect(verifyOutputFile(outputFile)).resolves.toBeUndefined()
    await expect(stat(outputFile)).resolves.toHaveProperty("size", 11)
  })

  it("runs the verification plan in order", async () => {
    const env = createProjectEnvironment({repoRoot: "/tmp"})
    const runCommand = vi.fn().mockResolvedValue(undefined)
    const statFile = vi.fn().mockResolvedValue({
      isFile: () => true,
      size: 128,
    })

    await runProjectVerify(["--project", "ornn"], env, {
      readProjectConfig: vi.fn().mockResolvedValue({defaultOutputName: "ornn.mp4"}),
      runCommand,
      fsImpl: {stat: statFile} as unknown as typeof import("node:fs/promises"),
    })

    expect(runCommand.mock.calls).toEqual([
      ["pnpm", ["--dir", "video", "typecheck"], {cwd: "/tmp"}],
      ["pnpm", ["--dir", "video", "lint"], {cwd: "/tmp"}],
      [process.execPath, ["scripts/project.mjs", "audio", "--project", "ornn"], {cwd: "/tmp"}],
      [process.execPath, ["scripts/project.mjs", "render", "--project", "ornn"], {cwd: "/tmp"}],
    ])
  })
})
