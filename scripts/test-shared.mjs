import {spawn} from "node:child_process"
import path from "node:path"
import {fileURLToPath} from "node:url"

import {defaultToolEnv} from "./shared/project-workflow.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const repoRoot = path.resolve(__dirname, "..")

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

export const main = async ({
  runCommand = run,
  toolEnv = defaultToolEnv(repoRoot),
} = {}) => {
  await runCommand("pnpm", ["--dir", "video", "typecheck:test"], {cwd: repoRoot})
  await runCommand("pnpm", ["--dir", "video", "test:run"], {cwd: repoRoot})
  await runCommand("uv", ["run", "--project", ".", "python", "-m", "pytest"], {
    cwd: repoRoot,
    env: toolEnv,
  })
}

const isMainModule = () => {
  const entrypoint = process.argv[1]
  return typeof entrypoint === "string" && path.resolve(entrypoint) === fileURLToPath(import.meta.url)
}

if (isMainModule()) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error)
    process.exit(1)
  })
}
