import {spawn} from "node:child_process"
import {promises as fs} from "node:fs"
import path from "node:path"

import {
  projectSlugPattern,
  readProjectRuntimeConfig,
  validateOutputName,
} from "./project-config.mjs"

export const audioArtifactExtensions = new Set([".json", ".wav"])

export const createProjectEnvironment = ({repoRoot, projectsDir, videoDir} = {}) => ({
  repoRoot,
  projectsDir: projectsDir ?? path.join(repoRoot, "projects"),
  videoDir: videoDir ?? path.join(repoRoot, "video"),
})

export const parseProjectArgs = (args) => {
  const separatorIndex = args.indexOf("--")
  const head = separatorIndex === -1 ? args : args.slice(0, separatorIndex)
  const passthroughArgs = separatorIndex === -1 ? [] : args.slice(separatorIndex + 1)

  const options = {
    composition: undefined,
    outputName: undefined,
    project: undefined,
  }

  for (let index = 0; index < head.length; index += 1) {
    const token = head[index]

    if (token === "--project") {
      options.project = requireOption(head[index + 1], "--project requires a value")
      index += 1
      continue
    }

    if (token === "--composition") {
      options.composition = requireOption(head[index + 1], "--composition requires a value")
      index += 1
      continue
    }

    if (token === "--output-name") {
      options.outputName = requireOption(head[index + 1], "--output-name requires a value")
      index += 1
      continue
    }

    throw new Error(`Unknown argument: ${token}`)
  }

  return {options, passthroughArgs}
}

export const requireOption = (value, message) => {
  if (!value) {
    throw new Error(message)
  }

  return value
}

export const readProjectSceneIds = async (projectVideoDir, {fsImpl = fs} = {}) => {
  const sceneOrderPath = path.join(projectVideoDir, "data", "scene-order.json")

  let rawSceneOrder
  try {
    rawSceneOrder = await fsImpl.readFile(sceneOrderPath, "utf8")
  } catch (error) {
    if (isMissingPathError(error)) {
      throw new Error(`Missing scene-order manifest: ${sceneOrderPath}`)
    }
    throw error
  }

  let parsed
  try {
    parsed = JSON.parse(rawSceneOrder)
  } catch (error) {
    throw new Error(`Invalid scene-order JSON in ${sceneOrderPath}: ${error.message}`)
  }

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error(`Scene-order manifest must be a non-empty array: ${sceneOrderPath}`)
  }

  const sceneIds = parsed.map((value, index) => {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error(`Scene-order entry ${index + 1} in ${sceneOrderPath} must be a non-empty string`)
    }

    return value
  })

  if (new Set(sceneIds).size !== sceneIds.length) {
    throw new Error(`Scene-order manifest contains duplicate scene ids: ${sceneOrderPath}`)
  }

  return sceneIds
}

export const resolveProjectPaths = async (
  slug,
  env,
  {fsImpl = fs, readProjectConfig = readProjectRuntimeConfig, readSceneIds = readProjectSceneIds} = {},
) => {
  if (!projectSlugPattern.test(slug)) {
    throw new Error(`Invalid project slug: ${slug}`)
  }

  const projectDir = path.join(env.projectsDir, slug)
  const projectVideoDir = path.join(projectDir, "video")
  const runtimeConfig = await readProjectConfig(projectVideoDir, {expectedSlug: slug, fsImpl})
  const sceneIds = await readSceneIds(projectVideoDir, {fsImpl})

  return {
    defaultCompositionId: runtimeConfig.defaultCompositionId,
    defaultOutputName: runtimeConfig.defaultOutputName,
    projectPublicDir: path.join(projectVideoDir, "public"),
    slug,
    projectDir,
    projectVideoDir,
    renderOutDir: path.join(projectVideoDir, "out"),
    runtimeAssetKinds: runtimeConfig.runtimeAssetKinds,
    sceneIds,
  }
}

export const buildRenderPlan = (paths, options = {}) => {
  const compositionId = options.composition ?? paths.defaultCompositionId
  const outputName = validateOutputName(options.outputName ?? paths.defaultOutputName)

  return {
    compositionId,
    outputName,
    outputPath: path.join("..", "projects", paths.slug, "video", "out", outputName),
  }
}

export const stageProjectAsset = async (
  paths,
  assetKind,
  env,
  {directoryExists = defaultDirectoryExists, copyAudio = copyAudioArtifacts, copyTree, fsImpl = fs} = {},
) => {
  const canonicalDir = path.join(paths.projectPublicDir, assetKind)
  const stagedRootDir = path.join(env.videoDir, "public", assetKind)
  const stagedDir = path.join(stagedRootDir, paths.slug)

  await fsImpl.mkdir(stagedRootDir, {recursive: true})
  await fsImpl.rm(stagedDir, {recursive: true, force: true})

  if (!(await directoryExists(canonicalDir, {fsImpl}))) {
    if (assetKind === "audio") {
      throw new Error(`Missing canonical audio directory: ${canonicalDir}`)
    }
    return
  }

  if (assetKind === "audio") {
    await assertProjectAudioCompleteness(paths, canonicalDir)
    await copyAudio(canonicalDir, stagedDir, {fsImpl})
    return
  }

  await (copyTree ?? fsImpl.cp)(canonicalDir, stagedDir, {recursive: true})
}

export const stageProjectAssets = async (
  paths,
  env,
  dependencies = {},
) => {
  await Promise.all(
    paths.runtimeAssetKinds.map((assetKind) => stageProjectAsset(paths, assetKind, env, dependencies)),
  )
}

export const runAudio = async (
  paths,
  passthroughArgs,
  env,
  {fsImpl = fs, runCommand = run, stageAssets = stageProjectAssets, toolEnv = defaultToolEnv(env.repoRoot)} = {},
) => {
  await fsImpl.mkdir(path.join(paths.projectPublicDir, "audio"), {recursive: true})
  await runCommand(
    "uv",
    [
      "run",
      "--project",
      "..",
      "python",
      "../scripts/generate-audio.py",
      "--project",
      paths.slug,
      ...passthroughArgs,
    ],
    {
      cwd: env.videoDir,
      env: toolEnv,
    },
  )
  await stageAssets(paths, env)
}

export const runRender = async (
  paths,
  options,
  env,
  {fsImpl = fs, runCommand = run, stageAssets = stageProjectAssets} = {},
) => {
  const renderPlan = buildRenderPlan(paths, options)

  await stageAssets(paths, env)
  await fsImpl.mkdir(paths.renderOutDir, {recursive: true})

  await runCommand(
    "pnpm",
    [
      "exec",
      "remotion",
      "render",
      "src/index.ts",
      renderPlan.compositionId,
      renderPlan.outputPath,
    ],
    {cwd: env.videoDir},
  )
}

export const executeProjectCommand = async (
  command,
  rawArgs,
  env,
  {
    resolvePaths = resolveProjectPaths,
    runAudioCommand = runAudio,
    runRenderCommand = runRender,
    runCommand = run,
    stageAssets = stageProjectAssets,
  } = {},
) => {
  const {options, passthroughArgs} = parseProjectArgs(rawArgs)
  const slug = requireOption(options.project, "--project is required")
  const paths = await resolvePaths(slug, env)

  switch (command) {
    case "stage":
      await stageAssets(paths, env)
      return
    case "audio":
      await runAudioCommand(paths, passthroughArgs, env, {runCommand, stageAssets})
      return
    case "dev":
      await stageAssets(paths, env)
      await runCommand("pnpm", ["exec", "remotion", "studio", "src/index.ts"], {cwd: env.videoDir})
      return
    case "render":
      await runRenderCommand(paths, options, env, {runCommand, stageAssets})
      return
    default:
      throw new Error(`Unknown command: ${command}`)
  }
}

export const assertProjectAudioCompleteness = async (
  paths,
  canonicalDir,
  {statFile = defaultStatFile} = {},
) => {
  const invalidArtifacts = []

  for (const sceneId of paths.sceneIds) {
    for (const extension of audioArtifactExtensions) {
      const artifactPath = path.join(canonicalDir, `${sceneId}${extension}`)
      let stats
      try {
        stats = await statFile(artifactPath)
      } catch (error) {
        if (isMissingPathError(error)) {
          invalidArtifacts.push(`${sceneId}${extension}`)
          continue
        }
        throw error
      }

      if (!stats.isFile() || stats.size === 0) {
        invalidArtifacts.push(`${sceneId}${extension}`)
      }
    }
  }

  if (invalidArtifacts.length > 0) {
    throw new Error(
      `Invalid canonical audio artifacts for ${paths.slug}: ${invalidArtifacts.join(", ")}. Run project:audio first.`,
    )
  }
}

export const copyAudioArtifacts = async (sourceDir, targetDir, {fsImpl = fs} = {}) => {
  await fsImpl.mkdir(targetDir, {recursive: true})
  const entries = await fsImpl.readdir(sourceDir, {withFileTypes: true})

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && audioArtifactExtensions.has(path.extname(entry.name)))
      .map((entry) => fsImpl.copyFile(path.join(sourceDir, entry.name), path.join(targetDir, entry.name))),
  )
}

export const defaultToolEnv = (repoRoot) => ({
  HUGGINGFACE_HUB_CACHE:
    process.env.HUGGINGFACE_HUB_CACHE ?? path.join(repoRoot, ".hf-home", "hub"),
  HF_HOME: process.env.HF_HOME ?? path.join(repoRoot, ".hf-home"),
  UV_CACHE_DIR: process.env.UV_CACHE_DIR ?? path.join(repoRoot, ".uv-cache"),
})

export const run = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: options.env ? {...process.env, ...options.env} : process.env,
      stdio: "inherit",
    })

    child.on("error", reject)
    child.on("close", (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`${command} exited with code ${code ?? "unknown"}`))
    })
  })

export const isMissingPathError = (error) => error && typeof error === "object" && error.code === "ENOENT"

const defaultDirectoryExists = async (targetPath, {fsImpl = fs} = {}) => {
  try {
    const stats = await fsImpl.stat(targetPath)
    return stats.isDirectory()
  } catch (error) {
    if (isMissingPathError(error)) {
      return false
    }
    throw error
  }
}

const defaultStatFile = async (targetPath) => fs.stat(targetPath)
