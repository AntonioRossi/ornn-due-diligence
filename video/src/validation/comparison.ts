import type {CitationMap, ComparisonSceneId} from "../types"
import type {
  CompanyCard,
  ComparisonProject,
  ComparisonRow,
  DimensionSpectrumData,
  SpectrumPlacement,
  TimelineEntry,
  TimelineLane,
} from "../types/comparison"

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

export function sortTimelineEntries(
  events: readonly TimelineEntry[],
): readonly TimelineEntry[] {
  return [...events].sort((a, b) => a.sortDate.localeCompare(b.sortDate))
}

export function clampSpectrumPosition(position: number): number {
  return Math.max(0, Math.min(1, position))
}

// ---------------------------------------------------------------------------
// Per-item validators
// ---------------------------------------------------------------------------

function fail(component: string, field: string, limit: number, actual: number | string): never {
  const len = typeof actual === "string" ? actual.length : actual
  throw new Error(
    `[${component}] "${field}" exceeds budget: max ${limit}, got ${len}`,
  )
}

export function validateComparisonRow(row: ComparisonRow): void {
  if (row.dimension.length > 40) fail("ComparisonMatrix", "dimension", 40, row.dimension)
  for (const value of row.values) {
    if (value.length > 80) fail("ComparisonMatrix", "cell value", 80, value)
  }
}

export function validateCompanyCard(card: CompanyCard): void {
  if (card.headline.length > 60) fail("SideBySideCards", "headline", 60, card.headline)
  if (card.body.length > 120) fail("SideBySideCards", "body", 120, card.body)
}

export function validateTimelineLane(lane: TimelineLane): void {
  if (lane.events.length > 5) fail("ParallelTimeline", "events per lane", 5, lane.events.length)
  for (const event of lane.events) {
    if (event.label.length > 50) fail("ParallelTimeline", "event label", 50, event.label)
  }
}

export function validateSpectrumPlacement(p: SpectrumPlacement): void {
  if (!p.rationale || p.rationale.trim().length === 0) {
    throw new Error(
      `[DimensionSpectrum] placement for "${p.label}" has empty rationale — every position requires a sourced justification`,
    )
  }
  if (p.label.length > 20) fail("DimensionSpectrum", "company label", 20, p.label)
}

export function validateSceneTitle(title: string): void {
  if (title.length > 70) fail("Scene", "title", 70, title)
}

// ---------------------------------------------------------------------------
// Aggregate validators
// ---------------------------------------------------------------------------

export function validateComparisonMatrix(matrix: {
  readonly headers: readonly [string, string, string]
  readonly rows: readonly ComparisonRow[]
}): void {
  if (matrix.rows.length > 5) fail("ComparisonMatrix", "rows", 5, matrix.rows.length)
  for (const row of matrix.rows) {
    validateComparisonRow(row)
  }
}

export function validateDimensionSpectrumData(data: DimensionSpectrumData): void {
  if (data.dimension.length > 40) fail("DimensionSpectrum", "dimension label", 40, data.dimension)
  if (data.scaleMin.length > 30) fail("DimensionSpectrum", "scaleMin", 30, data.scaleMin)
  if (data.scaleMax.length > 30) fail("DimensionSpectrum", "scaleMax", 30, data.scaleMax)
  for (const p of data.placements) {
    validateSpectrumPlacement(p)
  }
}

export function validateSceneCitations(citations: readonly string[]): void {
  if (citations.length > 4) fail("CitationFooter", "items", 4, citations.length)
  for (const item of citations) {
    if (item.length > 60) fail("CitationFooter", "item text", 60, item)
  }
}

// ---------------------------------------------------------------------------
// Top-level project validator
// ---------------------------------------------------------------------------

export function validateComparisonProject(
  project: ComparisonProject,
  citations: CitationMap<ComparisonSceneId>,
): void {
  const sceneIds = Object.keys(project.scenes) as ComparisonSceneId[]
  const citationKeys = Object.keys(citations) as string[]

  // Validate scene/citation key contract
  const missingCitations = sceneIds.filter((id) => !citationKeys.includes(id))
  if (missingCitations.length > 0) {
    throw new Error(`Citation keys missing for scenes: ${missingCitations.join(", ")}`)
  }
  const extraCitations = citationKeys.filter((key) => !sceneIds.includes(key as ComparisonSceneId))
  if (extraCitations.length > 0) {
    throw new Error(`Extra citation keys not matching any scene: ${extraCitations.join(", ")}`)
  }

  // Validate each scene's title and citations
  for (const id of sceneIds) {
    const scene = project.scenes[id]
    validateSceneTitle(scene.title)
    validateSceneCitations(citations[id])
  }

  // Validate scene-specific data shapes
  const {scenes} = project

  // approaches
  for (const card of scenes.approaches.cards) validateCompanyCard(card)

  // traction
  for (const lane of scenes.traction.lanes) validateTimelineLane(lane)

  // riskComparison
  validateComparisonMatrix(scenes.riskComparison.matrix)

  // gatingIssues
  validateComparisonMatrix(scenes.gatingIssues.matrix)

  // positioning
  for (const spectrum of scenes.positioning.spectrums) {
    validateDimensionSpectrumData(spectrum)
  }

  // recommendation
  for (const card of scenes.recommendation.cards) validateCompanyCard(card)
}
