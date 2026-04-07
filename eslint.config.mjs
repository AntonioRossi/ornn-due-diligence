import videoConfig from "./video/eslint.config.mjs"

const repoGlobs = [
  "video/src/**/*.ts",
  "video/src/**/*.tsx",
  "projects/**/*.ts",
  "projects/**/*.tsx",
]

export default videoConfig.map((entry) => {
  if (!entry.files) {
    return entry
  }

  return {
    ...entry,
    files: repoGlobs,
  }
})
