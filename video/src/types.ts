import type React from "react"

export interface ProjectManifest {
  readonly slug: string
  readonly compositionId: string
  readonly title: string
  readonly component: React.ComponentType
  readonly fps: number
  readonly durationInFrames: number
  readonly width: number
  readonly height: number
}

export interface ProjectRuntimeConfig {
  readonly slug: string
  readonly defaultCompositionId: string
  readonly defaultOutputName: string
  readonly runtimeAssetKinds?: readonly string[]
}

export interface NarrationEntry<S extends string = string> {
  readonly sceneId: S
  readonly text: string
  readonly voice?: string
  readonly langCode?: string
  readonly speed?: number
  readonly maxDurationFrames: number
}

export interface ResolvedNarrationEntry<S extends string = string> extends NarrationEntry<S> {
  readonly voice: string
  readonly langCode: string
  readonly speed: number
}

export type CitationMap<S extends string = string> = Record<S, readonly string[]>
