// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import path from "node:path"
import {Config} from "@remotion/cli/config"

// Remotion evaluates this config via a CommonJS loader and switches cwd to the
// Remotion root before executing it, so process.cwd() is the stable project root.
const configDir = process.cwd()

Config.overrideWebpackConfig((currentConfig) => {
  currentConfig.resolve = currentConfig.resolve ?? {}
  currentConfig.resolve.alias = {
    ...(currentConfig.resolve.alias ?? {}),
    "@shared": path.resolve(configDir, "src"),
    "@projects": path.resolve(configDir, "../projects"),
  }
  return currentConfig
})

Config.setVideoImageFormat("jpeg")
Config.setOverwriteOutput(true)
