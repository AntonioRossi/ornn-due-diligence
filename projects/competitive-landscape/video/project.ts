import type {ProjectManifest, ProjectRuntimeConfig} from "@shared/types"
import runtimeConfigJson from "./project.config.json"
import {CompetitiveLandscapeV1} from "./compositions/CompetitiveLandscapeV1"
import {competitiveLandscapeV1, totalDurationInFrames} from "./data/scenes"

const runtimeConfig = runtimeConfigJson as ProjectRuntimeConfig

export const competitiveLandscapeProject: ProjectManifest = {
  slug: runtimeConfig.slug,
  compositionId: runtimeConfig.defaultCompositionId,
  title: competitiveLandscapeV1.meta.title,
  component: CompetitiveLandscapeV1,
  fps: competitiveLandscapeV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
}
