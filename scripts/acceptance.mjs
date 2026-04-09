import {spawn} from "node:child_process"
import {promises as fs} from "node:fs"
import path from "node:path"
import {fileURLToPath} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")
const projectsDir = path.join(repoRoot, "projects")

const usage = `Usage:
  node ../scripts/acceptance.mjs --project <slug> [--project <slug>...]
  node ../scripts/acceptance.mjs --all`

const stripArgumentSeparator = (args) => {
  const separatorIndex = args.indexOf("--")
  if (separatorIndex === -1) {
    return args
  }

  return [...args.slice(0, separatorIndex), ...args.slice(separatorIndex + 1)]
}

const parseArgs = (args) => {
  const projects = []
  let runAll = false

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index]

    if (token === "--project") {
      const slug = args[index + 1]
      if (!slug) {
        throw new Error("--project requires a value")
      }
      projects.push(slug)
      index += 1
      continue
    }

    if (token === "--all") {
      runAll = true
      continue
    }

    if (token === "--help" || token === "-h") {
      printUsageAndExit(0)
    }

    throw new Error(`Unknown argument: ${token}`)
  }

  if (runAll && projects.length > 0) {
    throw new Error("Use either --all or --project, not both")
  }

  if (!runAll && projects.length === 0) {
    throw new Error("Specify at least one --project or use --all")
  }

  return {
    projects,
    runAll,
  }
}

const listManagedProjects = async () => {
  const entries = await fs.readdir(projectsDir, {withFileTypes: true})
  const slugs = []

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue
    }

    const configPath = path.join(projectsDir, entry.name, "video", "project.config.json")
    try {
      await fs.access(configPath)
      slugs.push(entry.name)
    } catch (error) {
      if (!(error && typeof error === "object" && error.code === "ENOENT")) {
        throw error
      }
    }
  }

  return slugs.sort()
}

const run = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd ?? repoRoot,
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

const main = async () => {
  const {projects, runAll} = parseArgs(stripArgumentSeparator(process.argv.slice(2)))
  const selectedProjects = runAll ? await listManagedProjects() : [...new Set(projects)]

  await run("pnpm", ["--dir", "video", "test:shared"])

  for (const slug of selectedProjects) {
    await run("pnpm", ["--dir", "video", "project:verify", "--", "--project", slug])
  }
}

const printUsageAndExit = (code) => {
  console.log(usage)
  process.exit(code)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  console.error(usage)
  process.exit(1)
})
