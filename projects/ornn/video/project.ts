import type {ProjectManifest, ProjectRuntimeConfig} from "@shared/types"
import runtimeConfigJson from "./project.config.json"
import {OrnnIcV1} from "./compositions/OrnnIcV1"
import {ornnIcV1, totalDurationInFrames} from "./data/scenes"

const runtimeConfig = runtimeConfigJson as ProjectRuntimeConfig

export const ornnProject: ProjectManifest = {
  slug: runtimeConfig.slug,
  compositionId: runtimeConfig.defaultCompositionId,
  title: ornnIcV1.meta.title,
  component: OrnnIcV1,
  fps: ornnIcV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
}
