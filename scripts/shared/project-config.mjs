import {promises as fs} from "node:fs"
import path from "node:path"

export const projectSlugPattern = /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/
const runtimeAssetKindPattern = /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/

export const validateOutputName = (outputName) => {
  if (typeof outputName !== "string" || outputName.length === 0) {
    throw new Error(`Project config must define defaultOutputName: ${outputName}`)
  }

  if (path.basename(outputName) !== outputName) {
    throw new Error(`Output name must be a file name, got: ${outputName}`)
  }

  return outputName
}

export const validateProjectRuntimeConfig = (parsed, {configPath, expectedSlug} = {}) => {
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`Project config must be an object: ${configPath ?? "<unknown>"}`)
  }

  if (typeof parsed.slug !== "string" || parsed.slug.length === 0) {
    throw new Error(`Project config must define slug: ${configPath ?? "<unknown>"}`)
  }

  if (expectedSlug !== undefined && parsed.slug !== expectedSlug) {
    throw new Error(
      `Project config slug mismatch in ${configPath ?? "<unknown>"}: expected ${expectedSlug}, got ${parsed.slug}`,
    )
  }

  if (
    typeof parsed.defaultCompositionId !== "string" ||
    parsed.defaultCompositionId.length === 0
  ) {
    throw new Error(`Project config must define defaultCompositionId: ${configPath ?? "<unknown>"}`)
  }

  const outputName = validateOutputName(parsed.defaultOutputName)

  if (!Array.isArray(parsed.runtimeAssetKinds) || parsed.runtimeAssetKinds.length === 0) {
    throw new Error(`Project config must define runtimeAssetKinds: ${configPath ?? "<unknown>"}`)
  }

  const normalizedAssetKinds = [...new Set(parsed.runtimeAssetKinds)]

  for (const kind of normalizedAssetKinds) {
    if (typeof kind !== "string" || !runtimeAssetKindPattern.test(kind)) {
      throw new Error(`Invalid runtime asset kind "${kind}" in ${configPath ?? "<unknown>"}`)
    }
  }

  return {
    slug: parsed.slug,
    defaultCompositionId: parsed.defaultCompositionId,
    defaultOutputName: outputName,
    runtimeAssetKinds: normalizedAssetKinds,
  }
}

export const readProjectRuntimeConfig = async (
  projectVideoDir,
  {expectedSlug, fsImpl = fs} = {},
) => {
  const configPath = path.join(projectVideoDir, "project.config.json")

  let rawConfig
  try {
    rawConfig = await fsImpl.readFile(configPath, "utf8")
  } catch (error) {
    if (error && typeof error === "object" && error.code === "ENOENT") {
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

  return validateProjectRuntimeConfig(parsed, {configPath, expectedSlug})
}
