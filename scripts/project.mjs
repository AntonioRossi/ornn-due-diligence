import {spawn} from "node:child_process"
import {promises as fs} from "node:fs"
import path from "node:path"
import {fileURLToPath} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")
const videoDir = path.join(repoRoot, "video")
const projectsDir = path.join(repoRoot, "projects")
const audioArtifactExtensions = new Set([".json", ".wav"])

const usage = `Usage:
  node ../scripts/project.mjs stage --project <slug>
  node ../scripts/project.mjs audio --project <slug> [-- <python-args...>]
  node ../scripts/project.mjs dev --project <slug>
  node ../scripts/project.mjs render --project <slug> [--composition <id>] [--output-name <file.mp4>]`

const main = async () => {
  const [command, ...commandArgs] = process.argv.slice(2)
  if (!command || command === "--help" || command === "-h") {
    printUsageAndExit(0)
  }

  if (!["stage", "audio", "dev", "render"].includes(command)) {
    throw new Error(`Unknown command: ${command}`)
  }

  const rawArgs = commandArgs[0] === "--" ? commandArgs.slice(1) : commandArgs
  const {options, passthroughArgs} = parseArgs(rawArgs)
  const slug = requireOption(options.project, "--project is required")
  const paths = await resolveProjectPaths(slug)

  switch (command) {
    case "stage":
      await stageProjectAssets(paths)
      return
    case "audio":
      await runAudio(paths, passthroughArgs)
      return
    case "dev":
      await stageProjectAssets(paths)
      await run("pnpm", ["exec", "remotion", "studio", "src/index.ts"], {cwd: videoDir})
      return
    case "render":
      await runRender(paths, options)
      return
    default:
      throw new Error(`Unhandled command: ${command}`)
  }
}

const parseArgs = (args) => {
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

const requireOption = (value, message) => {
  if (!value) {
    throw new Error(message)
  }
  return value
}

const resolveProjectPaths = async (slug) => {
  if (!/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(slug)) {
    throw new Error(`Invalid project slug: ${slug}`)
  }

  const projectDir = path.join(projectsDir, slug)
  const projectVideoDir = path.join(projectDir, "video")
  const runtimeConfig = await readProjectConfig(projectVideoDir, slug)
  const sceneIds = await readProjectSceneIds(projectVideoDir)

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

const readProjectConfig = async (projectVideoDir, slug) => {
  const configPath = path.join(projectVideoDir, "project.config.json")
  let rawConfig
  try {
    rawConfig = await fs.readFile(configPath, "utf8")
  } catch (error) {
    if (isMissingPathError(error)) {
      throw new Error(`Missing project config: ${configPath}`)
    }
    throw error
  }

  let parsed
  try {
    parsed = JSON.parse(rawConfig)
  } catch (error) {
    throw new Error(`Invalid project config JSON in ${configPath}: ${error.message}`)
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Project config must be an object: ${configPath}`)
  }

  if (parsed.slug !== slug) {
    throw new Error(`Project config slug mismatch in ${configPath}: expected ${slug}, got ${parsed.slug}`)
  }

  if (typeof parsed.defaultCompositionId !== "string" || parsed.defaultCompositionId.length === 0) {
    throw new Error(`Project config must define defaultCompositionId: ${configPath}`)
  }

  if (typeof parsed.defaultOutputName !== "string" || parsed.defaultOutputName.length === 0) {
    throw new Error(`Project config must define defaultOutputName: ${configPath}`)
  }

  const runtimeAssetKinds = Array.isArray(parsed.runtimeAssetKinds) ? parsed.runtimeAssetKinds : ["audio"]
  const normalizedAssetKinds = [...new Set(runtimeAssetKinds)]

  if (normalizedAssetKinds.length === 0) {
    throw new Error(`Project config runtimeAssetKinds must not be empty: ${configPath}`)
  }

  for (const kind of normalizedAssetKinds) {
    if (typeof kind !== "string" || !/^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(kind)) {
      throw new Error(`Invalid runtime asset kind "${kind}" in ${configPath}`)
    }
  }

  return {
    defaultCompositionId: parsed.defaultCompositionId,
    defaultOutputName: validateOutputName(parsed.defaultOutputName),
    runtimeAssetKinds: normalizedAssetKinds,
  }
}

const stageProjectAssets = async (paths) => {
  await Promise.all(paths.runtimeAssetKinds.map((assetKind) => stageProjectAsset(paths, assetKind)))
}

const stageProjectAsset = async (paths, assetKind) => {
  const canonicalDir = path.join(paths.projectPublicDir, assetKind)
  const stagedRootDir = path.join(videoDir, "public", assetKind)
  const stagedDir = path.join(stagedRootDir, paths.slug)

  await fs.mkdir(stagedRootDir, {recursive: true})
  await fs.rm(stagedDir, {recursive: true, force: true})

  if (!(await directoryExists(canonicalDir))) {
    if (assetKind === "audio") {
      throw new Error(`Missing canonical audio directory: ${canonicalDir}`)
    }
    return
  }

  if (assetKind === "audio") {
    await assertProjectAudioCompleteness(paths, canonicalDir)
    await copyAudioArtifacts(canonicalDir, stagedDir)
    return
  }

  await fs.cp(canonicalDir, stagedDir, {recursive: true})
}

const runAudio = async (paths, passthroughArgs) => {
  await fs.mkdir(path.join(paths.projectPublicDir, "audio"), {recursive: true})
  await run(
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
      cwd: videoDir,
      env: defaultToolEnv(),
    },
  )
  await stageProjectAssets(paths)
}

const runRender = async (paths, options) => {
  const compositionId = options.composition ?? paths.defaultCompositionId
  const outputName = validateOutputName(options.outputName ?? paths.defaultOutputName)

  await stageProjectAssets(paths)
  await fs.mkdir(paths.renderOutDir, {recursive: true})

  await run(
    "pnpm",
    [
      "exec",
      "remotion",
      "render",
      "src/index.ts",
      compositionId,
      path.join("..", "projects", paths.slug, "video", "out", outputName),
    ],
    {cwd: videoDir},
  )
}

const validateOutputName = (outputName) => {
  if (path.basename(outputName) !== outputName) {
    throw new Error(`Output name must be a file name, got: ${outputName}`)
  }
  return outputName
}

const readProjectSceneIds = async (projectVideoDir) => {
  const sceneOrderPath = path.join(projectVideoDir, "data", "scene-order.json")
  let rawSceneOrder
  try {
    rawSceneOrder = await fs.readFile(sceneOrderPath, "utf8")
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

const assertProjectAudioCompleteness = async (paths, canonicalDir) => {
  const missingArtifacts = []

  for (const sceneId of paths.sceneIds) {
    for (const extension of audioArtifactExtensions) {
      const artifactPath = path.join(canonicalDir, `${sceneId}${extension}`)
      if (!(await fileExists(artifactPath))) {
        missingArtifacts.push(`${sceneId}${extension}`)
      }
    }
  }

  if (missingArtifacts.length > 0) {
    throw new Error(
      `Missing canonical audio artifacts for ${paths.slug}: ${missingArtifacts.join(", ")}. Run project:audio first.`,
    )
  }
}

const copyAudioArtifacts = async (sourceDir, targetDir) => {
  await fs.mkdir(targetDir, {recursive: true})
  const entries = await fs.readdir(sourceDir, {withFileTypes: true})

  await Promise.all(
    entries
      .filter((entry) => entry.isFile() && audioArtifactExtensions.has(path.extname(entry.name)))
      .map((entry) => fs.copyFile(path.join(sourceDir, entry.name), path.join(targetDir, entry.name))),
  )
}

const directoryExists = async (targetPath) => {
  try {
    const stats = await fs.stat(targetPath)
    return stats.isDirectory()
  } catch (error) {
    if (isMissingPathError(error)) {
      return false
    }
    throw error
  }
}

const fileExists = async (targetPath) => {
  try {
    const stats = await fs.stat(targetPath)
    return stats.isFile()
  } catch (error) {
    if (isMissingPathError(error)) {
      return false
    }
    throw error
  }
}

const defaultToolEnv = () => ({
  HUGGINGFACE_HUB_CACHE:
    process.env.HUGGINGFACE_HUB_CACHE ?? path.join(repoRoot, ".hf-home", "hub"),
  HF_HOME: process.env.HF_HOME ?? path.join(repoRoot, ".hf-home"),
  UV_CACHE_DIR: process.env.UV_CACHE_DIR ?? path.join(repoRoot, ".uv-cache"),
})

const run = (command, args, options = {}) =>
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

const isMissingPathError = (error) => error && typeof error === "object" && error.code === "ENOENT"

const printUsageAndExit = (code) => {
  console.log(usage)
  process.exit(code)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  console.error(usage)
  process.exit(1)
})
