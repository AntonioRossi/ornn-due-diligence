import type {ProjectManifest, ProjectRuntimeConfig} from "@shared/types"
import runtimeConfigJson from "./project.config.json"
import {IoNetIcV1} from "./compositions/IoNetIcV1"
import {ioNetIcV1, totalDurationInFrames} from "./data/scenes"

const runtimeConfig = runtimeConfigJson as ProjectRuntimeConfig

export const ioNetProject: ProjectManifest = {
  slug: runtimeConfig.slug,
  compositionId: runtimeConfig.defaultCompositionId,
  title: ioNetIcV1.meta.title,
  component: IoNetIcV1,
  fps: ioNetIcV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
}
