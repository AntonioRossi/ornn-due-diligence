import type {CompanySlug} from "../types"

// --- Component data types (single source for all components) ---

export type HighlightLevel = "neutral" | "strong" | "weak"

export type ComparisonRow = {
  readonly dimension: string
  readonly values: readonly [string, string, string]
  readonly highlights?: readonly [HighlightLevel, HighlightLevel, HighlightLevel]
}

export type CompanyCard = {
  readonly slug: CompanySlug
  readonly label: string
  readonly headline: string
  readonly body: string
  readonly accent?: HighlightLevel
}

export type TimelineEntry = {
  readonly displayDate: string
  readonly sortDate: string
  readonly label: string
}

export type TimelineLane = {
  readonly slug: CompanySlug
  readonly label: string
  readonly events: readonly TimelineEntry[]
}

export type SpectrumPlacement = {
  readonly slug: CompanySlug
  readonly label: string
  readonly position: number
  readonly rationale: string
}

export type DimensionSpectrumData = {
  readonly dimension: string
  readonly scaleMin: string
  readonly scaleMax: string
  readonly placements: readonly [SpectrumPlacement, SpectrumPlacement, SpectrumPlacement]
}

// --- Scene data types ---

type ComparisonSceneBase = {
  readonly durationInFrames: number
  readonly sectionLabel: string
  readonly title: string
}

export type OverviewScene = ComparisonSceneBase & {
  readonly body: string
  readonly companies: readonly [
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
    { readonly slug: CompanySlug; readonly label: string; readonly approach: string },
  ]
}

export type ApproachesScene = ComparisonSceneBase & {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard]
}

export type TractionScene = ComparisonSceneBase & {
  readonly intro: string
  readonly lanes: readonly [TimelineLane, TimelineLane, TimelineLane]
}

export type RiskComparisonScene = ComparisonSceneBase & {
  readonly intro: string
  readonly matrix: {
    readonly headers: readonly [string, string, string]
    readonly rows: readonly ComparisonRow[]
  }
}

export type GatingIssuesScene = ComparisonSceneBase & {
  readonly intro: string
  readonly matrix: {
    readonly headers: readonly [string, string, string]
    readonly rows: readonly ComparisonRow[]
  }
}

export type PositioningScene = ComparisonSceneBase & {
  readonly spectrums: readonly DimensionSpectrumData[]
  readonly summary: string
}

export type RecommendationScene = ComparisonSceneBase & {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard]
  readonly closingNote: string
}

export type ComparisonProject = {
  readonly meta: {
    readonly title: string
    readonly fps: number
  }
  readonly companies: readonly [string, string, string]
  readonly scenes: {
    readonly overview: OverviewScene
    readonly approaches: ApproachesScene
    readonly traction: TractionScene
    readonly riskComparison: RiskComparisonScene
    readonly gatingIssues: GatingIssuesScene
    readonly positioning: PositioningScene
    readonly recommendation: RecommendationScene
  }
}
