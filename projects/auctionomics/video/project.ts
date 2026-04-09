import type {ProjectManifest, ProjectRuntimeConfig} from "@shared/types"
import runtimeConfigJson from "./project.config.json"
import {AuctionomicsIcV1} from "./compositions/AuctionomicsIcV1"
import {auctionomicsIcV1, totalDurationInFrames} from "./data/scenes"

const runtimeConfig = runtimeConfigJson as ProjectRuntimeConfig

export const auctionomicsProject: ProjectManifest = {
  slug: runtimeConfig.slug,
  compositionId: runtimeConfig.defaultCompositionId,
  title: auctionomicsIcV1.meta.title,
  component: AuctionomicsIcV1,
  fps: auctionomicsIcV1.meta.fps,
  durationInFrames: totalDurationInFrames,
  width: 1920,
  height: 1080,
}
