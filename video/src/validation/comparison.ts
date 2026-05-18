import type {CitationMap, ComparisonSceneId} from "../types"
import type {
  ComparisonCompany,
  CompanyCard,
  ComparisonProject,
  ComparisonRow,
  DimensionSpectrumData,
  SpectrumPlacement,
  TimelineEntry,
  TimelineLane,
} from "../types/comparison"
import {getSpectrumPlacementLabel, spectrumLayout} from "../utils/comparisonLayout"

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

function failShape(component: string, detail: string): never {
  throw new Error(`[${component}] ${detail}`)
}

function validateCompanyList(component: string, companies: readonly ComparisonCompany[]): void {
  if (companies.length < 2) {
    failShape(component, "at least 2 companies are required for a comparison")
  }

  const seenSlugs = new Set<string>()
  const seenLabels = new Set<string>()

  for (const company of companies) {
    if (!company.slug.trim()) failShape(component, "company slug cannot be empty")
    if (!company.label.trim()) failShape(component, "company label cannot be empty")
    if (seenSlugs.has(company.slug)) failShape(component, `duplicate company slug: ${company.slug}`)
    if (seenLabels.has(company.label)) failShape(component, `duplicate company label: ${company.label}`)
    seenSlugs.add(company.slug)
    seenLabels.add(company.label)
  }
}

function expectMatchingCompanies(
  component: string,
  expected: readonly ComparisonCompany[],
  actual: readonly ComparisonCompany[],
): void {
  if (actual.length !== expected.length) {
    failShape(
      component,
      `company count mismatch: expected ${expected.length}, got ${actual.length}`,
    )
  }

  expected.forEach((company, index) => {
    const candidate = actual[index]
    if (candidate?.slug !== company.slug || candidate?.label !== company.label) {
      failShape(
        component,
        `company mismatch at position ${index + 1}: expected ${company.label}, got ${candidate?.label ?? "missing"}`,
      )
    }
  })
}

function expectMatchingTextValues(
  component: string,
  valueLabel: string,
  expected: readonly string[],
  actual: readonly string[],
): void {
  if (actual.length !== expected.length) {
    failShape(
      component,
      `${valueLabel} count mismatch: expected ${expected.length}, got ${actual.length}`,
    )
  }

  expected.forEach((value, index) => {
    if (actual[index] !== value) {
      failShape(
        component,
        `${valueLabel} mismatch at position ${index + 1}: expected ${value}, got ${actual[index] ?? "missing"}`,
      )
    }
  })
}

function expectMatchingLabels(
  component: string,
  expected: readonly string[],
  actual: readonly string[],
): void {
  expectMatchingTextValues(component, "header", expected, actual)
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
  if (!p.slug.trim()) {
    throw new Error("[DimensionSpectrum] placement company slug cannot be empty")
  }
  if (p.displayLabel !== undefined && p.displayLabel.trim().length === 0) {
    throw new Error(
      `[DimensionSpectrum] placement for "${p.slug}" has empty displayLabel — omit it or provide a visible override`,
    )
  }
  if (!p.rationale || p.rationale.trim().length === 0) {
    throw new Error(
      `[DimensionSpectrum] placement for "${p.displayLabel ?? p.slug}" has empty rationale — every position requires a sourced justification`,
    )
  }
}

export function validateSceneTitle(title: string): void {
  if (title.length > 70) fail("Scene", "title", 70, title)
}

// ---------------------------------------------------------------------------
// Aggregate validators
// ---------------------------------------------------------------------------

export function validateComparisonMatrix(matrix: {
  readonly headers: readonly string[]
  readonly rows: readonly ComparisonRow[]
}): void {
  if (matrix.headers.length < 2) {
    failShape("ComparisonMatrix", "at least 2 headers are required")
  }
  if (new Set(matrix.headers).size !== matrix.headers.length) {
    failShape("ComparisonMatrix", "headers must be unique")
  }
  if (matrix.rows.length > 5) fail("ComparisonMatrix", "rows", 5, matrix.rows.length)
  for (const row of matrix.rows) {
    validateComparisonRow(row)
    if (row.values.length !== matrix.headers.length) {
      failShape(
        "ComparisonMatrix",
        `"${row.dimension}" value count mismatch: expected ${matrix.headers.length}, got ${row.values.length}`,
      )
    }
    if (row.highlights !== undefined && row.highlights.length !== matrix.headers.length) {
      failShape(
        "ComparisonMatrix",
        `"${row.dimension}" highlight count mismatch: expected ${matrix.headers.length}, got ${row.highlights.length}`,
      )
    }
  }
}

export function validateDimensionSpectrumData(
  data: DimensionSpectrumData,
  companies: readonly ComparisonCompany[],
): void {
  if (data.dimension.length > 40) fail("DimensionSpectrum", "dimension label", 40, data.dimension)
  if (data.scaleMin.length > 30) fail("DimensionSpectrum", "scaleMin", 30, data.scaleMin)
  if (data.scaleMax.length > 30) fail("DimensionSpectrum", "scaleMax", 30, data.scaleMax)
  if (data.placements.length < 2) {
    failShape("DimensionSpectrum", "at least 2 placements are required")
  }
  const companyLabelsBySlug = new Map(companies.map(({slug, label}) => [slug, label] as const))
  for (const p of data.placements) {
    validateSpectrumPlacement(p)
    const label = getSpectrumPlacementLabel(p, companyLabelsBySlug)
    if (label.length > spectrumLayout.labelCharacterLimit) {
      fail("DimensionSpectrum", "placement label", spectrumLayout.labelCharacterLimit, label)
    }
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
  validateCompanyList("ComparisonProject", project.companies)
  const expectedCompanies = project.companies
  const expectedLabels = expectedCompanies.map((company) => company.label)
  const expectedSlugs = expectedCompanies.map((company) => company.slug)

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
  expectMatchingCompanies(
    "OverviewScene",
    expectedCompanies,
    scenes.overview.companies.map(({slug, label}) => ({slug, label})),
  )
  expectMatchingCompanies(
    "SideBySideCards",
    expectedCompanies,
    scenes.approaches.cards.map(({slug, label}) => ({slug, label})),
  )
  for (const card of scenes.approaches.cards) validateCompanyCard(card)

  // traction
  expectMatchingCompanies(
    "ParallelTimeline",
    expectedCompanies,
    scenes.traction.lanes.map(({slug, label}) => ({slug, label})),
  )
  for (const lane of scenes.traction.lanes) validateTimelineLane(lane)

  // riskComparison
  expectMatchingLabels("RiskComparison", expectedLabels, scenes.riskComparison.matrix.headers)
  validateComparisonMatrix(scenes.riskComparison.matrix)

  // gatingIssues
  expectMatchingLabels("GatingIssues", expectedLabels, scenes.gatingIssues.matrix.headers)
  validateComparisonMatrix(scenes.gatingIssues.matrix)

  // positioning
  for (const spectrum of scenes.positioning.spectrums) {
    expectMatchingTextValues(
      `DimensionSpectrum ${spectrum.dimension}`,
      "company",
      expectedSlugs,
      spectrum.placements.map(({slug}) => slug),
    )
    validateDimensionSpectrumData(spectrum, expectedCompanies)
  }

  // recommendation
  expectMatchingCompanies(
    "Recommendation",
    expectedCompanies,
    scenes.recommendation.cards.map(({slug, label}) => ({slug, label})),
  )
  for (const card of scenes.recommendation.cards) validateCompanyCard(card)
}
