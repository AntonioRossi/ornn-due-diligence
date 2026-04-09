import {cp, mkdtemp, mkdir, readFile, rm, writeFile} from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import {afterEach, describe, expect, it, vi} from "vitest"

import {
  assertProjectAudioCompleteness,
  buildRenderPlan,
  createProjectEnvironment,
  executeProjectCommand,
  parseProjectArgs,
  resolveProjectPaths,
  stageProjectAssets,
} from "../../scripts/shared/project-workflow.mjs"

const createdDirectories: string[] = []

const fixtureProjectsDir = path.resolve(process.cwd(), "../tests/fixtures/projects")

const makeTempRepo = async (fixtureName: string) => {
  const repoRoot = await mkdtemp(path.join(os.tmpdir(), "ornn-project-fixture-"))
  createdDirectories.push(repoRoot)

  await mkdir(path.join(repoRoot, "projects"), {recursive: true})
  await mkdir(path.join(repoRoot, "video", "public"), {recursive: true})
  await mkdir(path.join(repoRoot, "video", "out"), {recursive: true})
  await cp(path.join(fixtureProjectsDir, fixtureName), path.join(repoRoot, "projects", fixtureName), {
    recursive: true,
  })

  return createProjectEnvironment({
    repoRoot,
    projectsDir: path.join(repoRoot, "projects"),
    videoDir: path.join(repoRoot, "video"),
  })
}

afterEach(async () => {
  await Promise.all(createdDirectories.splice(0).map((directory) => rm(directory, {recursive: true, force: true})))
})

describe("project workflow helpers", () => {
  it("parses separator passthrough arguments", () => {
    expect(
      parseProjectArgs([
        "--project",
        "ornn",
        "--",
        "--scene",
        "opening",
        "--scene",
        "closing",
      ]),
    ).toEqual({
      options: {
        composition: undefined,
        outputName: undefined,
        project: "ornn",
      },
      passthroughArgs: ["--scene", "opening", "--scene", "closing"],
    })
  })

  it("rejects a missing project option", async () => {
    await expect(
      executeProjectCommand("stage", [], createProjectEnvironment({repoRoot: "/tmp"})),
    ).rejects.toThrowError("--project is required")
  })

  it("dispatches stage handling", async () => {
    const stageAssets = vi.fn()
    const paths = {slug: "ornn"}

    await executeProjectCommand(
      "stage",
      ["--project", "ornn"],
      createProjectEnvironment({repoRoot: "/tmp"}),
      {
        resolvePaths: vi.fn().mockResolvedValue(paths),
        stageAssets,
      },
    )

    expect(stageAssets).toHaveBeenCalledWith(paths, createProjectEnvironment({repoRoot: "/tmp"}))
  })

  it("passes through audio scene arguments", async () => {
    const runAudioCommand = vi.fn()
    const env = createProjectEnvironment({repoRoot: "/tmp"})

    await executeProjectCommand(
      "audio",
      ["--project", "ornn", "--", "--scene", "opening"],
      env,
      {
        resolvePaths: vi.fn().mockResolvedValue({slug: "ornn"}),
        runAudioCommand,
      },
    )

    expect(runAudioCommand).toHaveBeenCalledWith(
      {slug: "ornn"},
      ["--scene", "opening"],
      env,
      expect.any(Object),
    )
  })

  it("passes render option overrides", async () => {
    const runRenderCommand = vi.fn()
    const env = createProjectEnvironment({repoRoot: "/tmp"})

    await executeProjectCommand(
      "render",
      [
        "--project",
        "ornn",
        "--composition",
        "ExplicitComposition",
        "--output-name",
        "custom.mp4",
      ],
      env,
      {
        resolvePaths: vi.fn().mockResolvedValue({slug: "ornn"}),
        runRenderCommand,
      },
    )

    expect(runRenderCommand).toHaveBeenCalledWith(
      {slug: "ornn"},
      {
        composition: "ExplicitComposition",
        outputName: "custom.mp4",
        project: "ornn",
      },
      env,
      expect.any(Object),
    )
  })

  it("fails when canonical audio artifacts are missing", async () => {
    await expect(
      assertProjectAudioCompleteness(
        {
          slug: "ornn",
          sceneIds: ["opening", "closing"],
        },
        "/tmp/projects/ornn/video/public/audio",
        {
          statFile: vi
            .fn()
            .mockResolvedValueOnce({isFile: () => true, size: 128})
            .mockResolvedValueOnce({isFile: () => true, size: 64})
            .mockRejectedValueOnce(Object.assign(new Error("missing"), {code: "ENOENT"}))
            .mockResolvedValueOnce({isFile: () => true, size: 32}),
        },
      ),
    ).rejects.toThrowError(
      "Invalid canonical audio artifacts for ornn: closing.json. Run project:audio first.",
    )
  })

  it("fails when canonical audio artifacts are empty", async () => {
    await expect(
      assertProjectAudioCompleteness(
        {
          slug: "ornn",
          sceneIds: ["opening"],
        },
        "/tmp/projects/ornn/video/public/audio",
        {
          statFile: vi
            .fn()
            .mockResolvedValueOnce({isFile: () => true, size: 0})
            .mockResolvedValueOnce({isFile: () => true, size: 24}),
        },
      ),
    ).rejects.toThrowError(
      "Invalid canonical audio artifacts for ornn: opening.json. Run project:audio first.",
    )
  })
})

describe("fixture project integration", () => {
  it("accepts a valid fixture project layout", async () => {
    const env = await makeTempRepo("minimal-valid")

    await expect(resolveProjectPaths("minimal-valid", env)).resolves.toMatchObject({
      slug: "minimal-valid",
      sceneIds: ["opening"],
      runtimeAssetKinds: ["audio"],
    })
  })

  it("fails clearly when the project config is missing", async () => {
    const env = await makeTempRepo("missing-project-config")

    await expect(resolveProjectPaths("missing-project-config", env)).rejects.toThrowError(
      `Missing project config: ${path.join(env.projectsDir, "missing-project-config", "video", "project.config.json")}`,
    )
  })

  it("fails clearly on an invalid scene-order fixture", async () => {
    const env = await makeTempRepo("bad-scene-order")

    await expect(resolveProjectPaths("bad-scene-order", env)).rejects.toThrowError(
      `Scene-order manifest contains duplicate scene ids: ${path.join(env.projectsDir, "bad-scene-order", "video", "data", "scene-order.json")}`,
    )
  })

  it("selects the canonical render output path", async () => {
    const env = await makeTempRepo("minimal-valid")
    const paths = await resolveProjectPaths("minimal-valid", env)

    expect(buildRenderPlan(paths)).toEqual({
      compositionId: "MinimalFixtureComposition",
      outputName: "minimal-valid.mp4",
      outputPath: "../projects/minimal-valid/video/out/minimal-valid.mp4",
    })
  })

  it("stages canonical audio into the shared runtime directory", async () => {
    const env = await makeTempRepo("minimal-valid")
    const paths = await resolveProjectPaths("minimal-valid", env)
    const audioDir = path.join(paths.projectPublicDir, "audio")

    await writeFile(path.join(audioDir, "opening.wav"), "fixture audio")
    await writeFile(path.join(audioDir, "opening.json"), '{"sceneId":"opening"}\n')

    await stageProjectAssets(paths, env)

    expect(await readFile(path.join(env.videoDir, "public", "audio", "minimal-valid", "opening.wav"), "utf8")).toBe(
      "fixture audio",
    )
    expect(
      await readFile(path.join(env.videoDir, "public", "audio", "minimal-valid", "opening.json"), "utf8"),
    ).toContain('"sceneId":"opening"')
  })

  it("fails clearly when canonical audio is missing", async () => {
    const env = await makeTempRepo("missing-audio")
    const paths = await resolveProjectPaths("missing-audio", env)

    await expect(stageProjectAssets(paths, env)).rejects.toThrowError(
      `Missing canonical audio directory: ${path.join(env.projectsDir, "missing-audio", "video", "public", "audio")}`,
    )
  })
})
