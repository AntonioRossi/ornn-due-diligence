import {spawn} from "node:child_process"
import {promises as fs} from "node:fs"
import path from "node:path"
import {fileURLToPath} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")
const projectRoot = path.join(repoRoot, "projects")
const validModes = new Set(["smoke", "verify"])

const usage = `Usage:
  node ../scripts/smoke-test.mjs --project <slug> [--mode smoke|verify]`

const main = async () => {
  const rawArgs = stripArgumentSeparator(process.argv.slice(2))
  const {mode, project} = parseArgs(rawArgs)
  const projectConfig = await readProjectConfig(project)
  const sceneIds = await readSceneOrder(project)
  const outputName = mode === "verify" ? projectConfig.defaultOutputName : `smoke-${project}.mp4`
  const outputPath = path.join(projectRoot, project, "video", "out", outputName)

  await run("pnpm", ["--dir", "video", "typecheck"])
  await run("pnpm", ["--dir", "video", "lint"])
  await run(process.execPath, audioArgs(project, mode))
  await assertCanonicalAudioArtifacts(project, sceneIds)
  await run(process.execPath, renderArgs(project, mode, outputName))

  const stats = await fs.stat(outputPath)
  if (!stats.isFile() || stats.size === 0) {
    throw new Error(`${modeLabel(mode)} did not produce a valid output file: ${outputPath}`)
  }

  console.log(`${modeLabel(mode)} passed for ${project}: ${outputPath}`)
}

const parseArgs = (args) => {
  let mode = "smoke"
  let project

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index]
    if (token === "--project") {
      project = args[index + 1]
      index += 1
      continue
    }

    if (token === "--mode") {
      mode = args[index + 1]
      index += 1
      continue
    }

    if (token === "--help" || token === "-h") {
      printUsageAndExit(0)
    }

    throw new Error(`Unknown argument: ${token}`)
  }

  if (!project) {
    throw new Error("--project is required")
  }

  if (!validModes.has(mode)) {
    throw new Error(`--mode must be one of: ${[...validModes].join(", ")}`)
  }

  return {mode, project}
}

const readProjectConfig = async (project) => {
  const configPath = path.join(projectRoot, project, "video", "project.config.json")
  const parsed = JSON.parse(await fs.readFile(configPath, "utf8"))

  if (typeof parsed?.defaultOutputName !== "string" || parsed.defaultOutputName.length === 0) {
    throw new Error(`Project config missing defaultOutputName: ${configPath}`)
  }

  return parsed
}

const readSceneOrder = async (project) => {
  const sceneOrderPath = path.join(projectRoot, project, "video", "data", "scene-order.json")
  const parsed = JSON.parse(await fs.readFile(sceneOrderPath, "utf8"))

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error(`Scene-order manifest must be a non-empty array: ${sceneOrderPath}`)
  }

  return parsed.map((sceneId, index) => {
    if (typeof sceneId !== "string" || sceneId.length === 0) {
      throw new Error(`Scene-order entry ${index + 1} must be a non-empty string: ${sceneOrderPath}`)
    }
    return sceneId
  })
}

const assertCanonicalAudioArtifacts = async (project, sceneIds) => {
  const audioDir = path.join(projectRoot, project, "video", "public", "audio")

  for (const sceneId of sceneIds) {
    for (const extension of [".json", ".wav"]) {
      const artifactPath = path.join(audioDir, `${sceneId}${extension}`)
      const stats = await fs.stat(artifactPath)
      if (!stats.isFile() || stats.size === 0) {
        throw new Error(`Missing canonical audio artifact: ${artifactPath}`)
      }
    }
  }
}

const audioArgs = (project, mode) =>
  mode === "verify"
    ? ["scripts/project.mjs", "audio", "--project", project]
    : ["scripts/project.mjs", "audio", "--project", project, "--", "--check-only"]

const renderArgs = (project, mode, outputName) =>
  mode === "verify"
    ? ["scripts/project.mjs", "render", "--project", project]
    : ["scripts/project.mjs", "render", "--project", project, "--output-name", outputName]

const modeLabel = (mode) => (mode === "verify" ? "Full verification" : "Smoke test")

const stripArgumentSeparator = (args) => {
  const separatorIndex = args.indexOf("--")
  if (separatorIndex === -1) {
    return args
  }

  return [...args.slice(0, separatorIndex), ...args.slice(separatorIndex + 1)]
}

const run = (command, args) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repoRoot,
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

const printUsageAndExit = (code) => {
  console.log(usage)
  process.exit(code)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  console.error(usage)
  process.exit(1)
})
