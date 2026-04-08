import type {ProjectManifest, ProjectRuntimeConfig} from "@shared/types"
import runtimeConfigJson from "./project.config.json"
import {SiliconDataIcV1} from "./compositions/SiliconDataIcV1"
import {siliconDataIcV1, totalDurationInFrames} from "./data/scenes"

const runtimeConfig = runtimeConfigJson as ProjectRuntimeConfig

export const siliconDataProject: ProjectManifest = {
  slug: runtimeConfig.slug,
  compositionId: runtimeConfig.defaultCompositionId,
  title: siliconDataIcV1.meta.title,
  component: SiliconDataIcV1,
  fps: siliconDataIcV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
}
