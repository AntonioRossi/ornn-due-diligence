import path from "node:path"
import {fileURLToPath} from "node:url"

import {
  createProjectEnvironment,
  executeProjectCommand,
} from "./shared/project-workflow.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")

export const usage = `Usage:
  node ../scripts/project.mjs stage --project <slug>
  node ../scripts/project.mjs audio --project <slug> [-- <python-args...>]
  node ../scripts/project.mjs dev --project <slug>
  node ../scripts/project.mjs render --project <slug> [--composition <id>] [--output-name <file.mp4>]`

export const main = async (argv = process.argv.slice(2)) => {
  const [command, ...commandArgs] = argv

  if (!command || command === "--help" || command === "-h") {
    printUsageAndExit(0)
  }

  if (!["stage", "audio", "dev", "render"].includes(command)) {
    throw new Error(`Unknown command: ${command}`)
  }

  await executeProjectCommand(
    command,
    stripLeadingArgumentSeparator(commandArgs),
    createProjectEnvironment({repoRoot}),
  )
}

export const stripLeadingArgumentSeparator = (args) => (args[0] === "--" ? args.slice(1) : args)

const printUsageAndExit = (code) => {
  console.log(usage)
  process.exit(code)
}

const isMainModule = () => {
  const entrypoint = process.argv[1]
  return typeof entrypoint === "string" && path.resolve(entrypoint) === fileURLToPath(import.meta.url)
}

if (isMainModule()) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    console.error(usage)
    process.exit(1)
  })
}
