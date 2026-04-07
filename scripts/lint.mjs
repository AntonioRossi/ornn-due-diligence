import {spawn} from "node:child_process"
import path from "node:path"
import {fileURLToPath} from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, "..")
const eslintCli = path.join(repoRoot, "video", "node_modules", "eslint", "bin", "eslint.js")

const child = spawn(
  process.execPath,
  [
    eslintCli,
    "--config",
    "eslint.config.mjs",
    "video/src/**/*.ts",
    "video/src/**/*.tsx",
    "projects/**/*.ts",
    "projects/**/*.tsx",
  ],
  {
    cwd: repoRoot,
    stdio: "inherit",
  },
)

child.on("close", (code) => {
  process.exit(code ?? 1)
})
