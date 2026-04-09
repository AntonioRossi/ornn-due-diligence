import {spawn} from "node:child_process"
import {promises as fs} from "node:fs"
import path from "node:path"

import {readProjectRuntimeConfig} from "./project-config.mjs"

export const stripArgumentSeparator = (args) => {
  const separatorIndex = args.indexOf("--")
  if (separatorIndex === -1) {
    return args
  }

  return [...args.slice(0, separatorIndex), ...args.slice(separatorIndex + 1)]
}

export const parseVerifyArgs = (args) => {
  let project

  for (let index = 0; index < args.length; index += 1) {
    const token = args[index]

    if (token === "--project") {
      project = args[index + 1]
      index += 1
      continue
    }

    throw new Error(`Unknown argument: ${token}`)
  }

  if (!project) {
    throw new Error("--project is required")
  }

  return {project}
}

export const buildProjectVerifyPlan = async (
  project,
  env,
  {readProjectConfig = readProjectRuntimeConfig} = {},
) => {
  const projectConfig = await readProjectConfig(path.join(env.projectsDir, project, "video"), {
    expectedSlug: project,
  })

  return {
    outputPath: path.join(env.projectsDir, project, "video", "out", projectConfig.defaultOutputName),
    steps: [
      {command: "pnpm", args: ["--dir", "video", "typecheck"]},
      {command: "pnpm", args: ["--dir", "video", "lint"]},
      {command: process.execPath, args: ["scripts/project.mjs", "audio", "--project", project]},
      {command: process.execPath, args: ["scripts/project.mjs", "render", "--project", project]},
    ],
  }
}

export const verifyOutputFile = async (outputPath, {fsImpl = fs} = {}) => {
  let stats
  try {
    stats = await fsImpl.stat(outputPath)
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
      throw new Error(`Verification did not produce a valid output file: ${outputPath}`)
    }
    throw error
  }

  if (!stats.isFile() || stats.size === 0) {
    throw new Error(`Verification did not produce a valid output file: ${outputPath}`)
  }
}

export const runProjectVerify = async (
  rawArgs,
  env,
  {readProjectConfig = readProjectRuntimeConfig, runCommand = run, fsImpl = fs} = {},
) => {
  const {project} = parseVerifyArgs(stripArgumentSeparator(rawArgs))
  const plan = await buildProjectVerifyPlan(project, env, {readProjectConfig})

  for (const step of plan.steps) {
    await runCommand(step.command, step.args, {cwd: env.repoRoot})
  }

  await verifyOutputFile(plan.outputPath, {fsImpl})
  console.log(`Verification passed for ${project}: ${plan.outputPath}`)
}

export const run = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
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
