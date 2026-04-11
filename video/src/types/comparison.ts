// --- Component data types (single source for all components) ---

export type HighlightLevel = "neutral" | "strong" | "weak"

export type ComparisonCompany = {
  readonly slug: string
  readonly label: string
}

export type ComparisonRow = {
  readonly dimension: string
  readonly values: readonly string[]
  readonly highlights?: readonly HighlightLevel[]
}

export type CompanyCard = ComparisonCompany & {
  readonly headline: string
  readonly body: string
  readonly accent?: HighlightLevel
}

export type TimelineEntry = {
  readonly displayDate: string
  readonly sortDate: string
  readonly label: string
}

export type TimelineLane = ComparisonCompany & {
  readonly events: readonly TimelineEntry[]
}

export type SpectrumPlacement = Pick<ComparisonCompany, "slug"> & {
  readonly displayLabel?: string
  readonly position: number
  readonly rationale: string
}

export type DimensionSpectrumData = {
  readonly dimension: string
  readonly scaleMin: string
  readonly scaleMax: string
  readonly placements: readonly SpectrumPlacement[]
}

export type ComparisonMatrixData = {
  readonly headers: readonly string[]
  readonly rows: readonly ComparisonRow[]
}

// --- Scene data types ---

type ComparisonSceneBase = {
  readonly durationInFrames: number
  readonly sectionLabel: string
  readonly title: string
}

export type OverviewScene = ComparisonSceneBase & {
  readonly body: string
  readonly companies: readonly (ComparisonCompany & { readonly approach: string })[]
}

export type ApproachesScene = ComparisonSceneBase & {
  readonly cards: readonly CompanyCard[]
}

export type TractionScene = ComparisonSceneBase & {
  readonly intro: string
  readonly lanes: readonly TimelineLane[]
}

export type RiskComparisonScene = ComparisonSceneBase & {
  readonly intro: string
  readonly matrix: ComparisonMatrixData
}

export type GatingIssuesScene = ComparisonSceneBase & {
  readonly intro: string
  readonly matrix: ComparisonMatrixData
}

export type PositioningScene = ComparisonSceneBase & {
  readonly spectrums: readonly DimensionSpectrumData[]
  readonly summary: string
}

export type RecommendationScene = ComparisonSceneBase & {
  readonly cards: readonly CompanyCard[]
  readonly closingNote: string
}

export type ComparisonProject = {
  readonly meta: {
    readonly title: string
    readonly fps: number
  }
  readonly companies: readonly ComparisonCompany[]
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
