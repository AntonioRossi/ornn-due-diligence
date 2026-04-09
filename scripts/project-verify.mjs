import path from "node:path"
import {fileURLToPath} from "node:url"

import {
  parseVerifyArgs,
  runProjectVerify,
  stripArgumentSeparator,
} from "./shared/project-verify.mjs"
import {createProjectEnvironment} from "./shared/project-workflow.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")

export const usage = `Usage:
  node ../scripts/project-verify.mjs --project <slug>`

export const main = async (argv = process.argv.slice(2)) => {
  const rawArgs = stripArgumentSeparator(argv)

  if (rawArgs.includes("--help") || rawArgs.includes("-h")) {
    printUsageAndExit(0)
  }

  parseVerifyArgs(rawArgs)
  await runProjectVerify(rawArgs, createProjectEnvironment({repoRoot}))
}

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
