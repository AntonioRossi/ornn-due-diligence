import {describe, expect, it} from "vitest"
import {
  clampSpectrumPosition,
  sortTimelineEntries,
  validateCompanyCard,
  validateComparisonMatrix,
  validateComparisonProject,
  validateComparisonRow,
  validateDimensionSpectrumData,
  validateSceneCitations,
  validateSceneTitle,
  validateSpectrumPlacement,
  validateTimelineLane,
} from "./comparison"
import type {
  CompanyCard,
  ComparisonProject,
  ComparisonRow,
  DimensionSpectrumData,
  SpectrumPlacement,
  TimelineEntry,
  TimelineLane,
} from "../types/comparison"
import type {CitationMap, ComparisonSceneId} from "../types"

// ---------------------------------------------------------------------------
// Helpers for building valid test data
// ---------------------------------------------------------------------------

const validRow: ComparisonRow = {
  dimension: "Regulatory pathway",
  values: ["De minimis swaps", "No license claimed", "No filing disclosed"],
}

const validCard: CompanyCard = {
  slug: "ornn",
  label: "Ornn",
  headline: "Benchmark plus bilateral swaps",
  body: "OCPI on Bloomberg. Bilateral swaps under CFTC de minimis. DCM path stated.",
}

const validLane: TimelineLane = {
  slug: "ornn",
  label: "Ornn",
  events: [
    {displayDate: "Apr 2026", sortDate: "2026-04", label: "OCPI on Bloomberg"},
    {displayDate: "Oct 2025", sortDate: "2025-10", label: "Hydra partnership"},
  ],
}

const validPlacement: SpectrumPlacement = {
  slug: "ornn",
  label: "Ornn",
  position: 0.6,
  rationale: "Live bilateral swaps [Source: ornn/IC memo § What appears real today]",
}

const validSpectrum: DimensionSpectrumData = {
  dimension: "Disclosed compute-product stage",
  scaleMin: "Pre-announcement",
  scaleMax: "Regulated exchange",
  placements: [
    validPlacement,
    {...validPlacement, slug: "silicon-data", label: "Silicon Data", position: 0.4},
    {...validPlacement, slug: "auctionomics", label: "Auctionomics", position: 0.1},
  ],
}

// ---------------------------------------------------------------------------
// validateComparisonRow
// ---------------------------------------------------------------------------

describe("validateComparisonRow", () => {
  it("passes with valid input", () => {
    expect(() => validateComparisonRow(validRow)).not.toThrow()
  })

  it("throws if dimension exceeds 40 chars", () => {
    const row = {...validRow, dimension: "A".repeat(41)}
    expect(() => validateComparisonRow(row)).toThrow("dimension")
  })

  it("throws if any cell value exceeds 80 chars", () => {
    const row = {...validRow, values: ["ok", "B".repeat(81), "ok"] as const}
    expect(() => validateComparisonRow(row)).toThrow("cell value")
  })
})

// ---------------------------------------------------------------------------
// validateComparisonMatrix
// ---------------------------------------------------------------------------

describe("validateComparisonMatrix", () => {
  it("passes with 5 or fewer rows", () => {
    const matrix = {headers: ["A", "B", "C"] as const, rows: [validRow]}
    expect(() => validateComparisonMatrix(matrix)).not.toThrow()
  })

  it("throws if rows exceed 5", () => {
    const rows = Array.from({length: 6}, () => validRow)
    const matrix = {headers: ["A", "B", "C"] as const, rows}
    expect(() => validateComparisonMatrix(matrix)).toThrow("rows")
  })

  it("delegates per-row validation", () => {
    const badRow = {...validRow, dimension: "X".repeat(41)}
    const matrix = {headers: ["A", "B", "C"] as const, rows: [badRow]}
    expect(() => validateComparisonMatrix(matrix)).toThrow("dimension")
  })
})

// ---------------------------------------------------------------------------
// validateCompanyCard
// ---------------------------------------------------------------------------

describe("validateCompanyCard", () => {
  it("passes with valid input", () => {
    expect(() => validateCompanyCard(validCard)).not.toThrow()
  })

  it("throws if headline exceeds 60 chars", () => {
    const card = {...validCard, headline: "H".repeat(61)}
    expect(() => validateCompanyCard(card)).toThrow("headline")
  })

  it("throws if body exceeds 120 chars", () => {
    const card = {...validCard, body: "B".repeat(121)}
    expect(() => validateCompanyCard(card)).toThrow("body")
  })
})

// ---------------------------------------------------------------------------
// validateTimelineLane
// ---------------------------------------------------------------------------

describe("validateTimelineLane", () => {
  it("passes with valid input", () => {
    expect(() => validateTimelineLane(validLane)).not.toThrow()
  })

  it("throws if lane has more than 5 events", () => {
    const events = Array.from({length: 6}, (_, i) => ({
      displayDate: `${i}`,
      sortDate: `2025-0${i + 1}`,
      label: `Event ${i}`,
    }))
    const lane = {...validLane, events}
    expect(() => validateTimelineLane(lane)).toThrow("events per lane")
  })

  it("throws if any event label exceeds 50 chars", () => {
    const events = [{displayDate: "Jan 2025", sortDate: "2025-01", label: "L".repeat(51)}]
    const lane = {...validLane, events}
    expect(() => validateTimelineLane(lane)).toThrow("event label")
  })
})

// ---------------------------------------------------------------------------
// validateSpectrumPlacement
// ---------------------------------------------------------------------------

describe("validateSpectrumPlacement", () => {
  it("passes with valid input", () => {
    expect(() => validateSpectrumPlacement(validPlacement)).not.toThrow()
  })

  it("throws if rationale is empty", () => {
    const p = {...validPlacement, rationale: ""}
    expect(() => validateSpectrumPlacement(p)).toThrow("rationale")
  })

  it("throws if rationale is whitespace only", () => {
    const p = {...validPlacement, rationale: "   "}
    expect(() => validateSpectrumPlacement(p)).toThrow("rationale")
  })

  it("throws if label exceeds 20 chars", () => {
    const p = {...validPlacement, label: "L".repeat(21)}
    expect(() => validateSpectrumPlacement(p)).toThrow("company label")
  })
})

// ---------------------------------------------------------------------------
// validateDimensionSpectrumData
// ---------------------------------------------------------------------------

describe("validateDimensionSpectrumData", () => {
  it("passes with valid input", () => {
    expect(() => validateDimensionSpectrumData(validSpectrum)).not.toThrow()
  })

  it("throws if dimension label exceeds 40 chars", () => {
    const data = {...validSpectrum, dimension: "D".repeat(41)}
    expect(() => validateDimensionSpectrumData(data)).toThrow("dimension label")
  })

  it("throws if scaleMin exceeds 30 chars", () => {
    const data = {...validSpectrum, scaleMin: "S".repeat(31)}
    expect(() => validateDimensionSpectrumData(data)).toThrow("scaleMin")
  })

  it("throws if scaleMax exceeds 30 chars", () => {
    const data = {...validSpectrum, scaleMax: "S".repeat(31)}
    expect(() => validateDimensionSpectrumData(data)).toThrow("scaleMax")
  })

  it("delegates to validateSpectrumPlacement per placement", () => {
    const badPlacement = {...validPlacement, rationale: ""}
    const data = {...validSpectrum, placements: [badPlacement, validPlacement, validPlacement] as const}
    expect(() => validateDimensionSpectrumData(data as DimensionSpectrumData)).toThrow("rationale")
  })
})

// ---------------------------------------------------------------------------
// validateSceneTitle
// ---------------------------------------------------------------------------

describe("validateSceneTitle", () => {
  it("passes with 70 chars or fewer", () => {
    expect(() => validateSceneTitle("A".repeat(70))).not.toThrow()
  })

  it("throws if title exceeds 70 chars", () => {
    expect(() => validateSceneTitle("T".repeat(71))).toThrow("title")
  })
})

// ---------------------------------------------------------------------------
// validateSceneCitations
// ---------------------------------------------------------------------------

describe("validateSceneCitations", () => {
  it("passes with 4 or fewer items", () => {
    expect(() => validateSceneCitations(["a", "b", "c", "d"])).not.toThrow()
  })

  it("throws if items exceed 4", () => {
    expect(() => validateSceneCitations(["a", "b", "c", "d", "e"])).toThrow("items")
  })

  it("throws if any item exceeds 60 chars", () => {
    expect(() => validateSceneCitations(["X".repeat(61)])).toThrow("item text")
  })
})

// ---------------------------------------------------------------------------
// sortTimelineEntries
// ---------------------------------------------------------------------------

describe("sortTimelineEntries", () => {
  it("sorts entries by sortDate regardless of input order", () => {
    const entries: TimelineEntry[] = [
      {displayDate: "Apr 2026", sortDate: "2026-04", label: "C"},
      {displayDate: "May 2025", sortDate: "2025-05", label: "A"},
      {displayDate: "Nov 2024", sortDate: "2024-11", label: "B"},
    ]
    const sorted = sortTimelineEntries(entries)
    expect(sorted.map((e) => e.label)).toEqual(["B", "A", "C"])
  })

  it("returns a new array (does not mutate input)", () => {
    const entries: TimelineEntry[] = [
      {displayDate: "B", sortDate: "2026-01", label: "B"},
      {displayDate: "A", sortDate: "2025-01", label: "A"},
    ]
    const sorted = sortTimelineEntries(entries)
    expect(sorted).not.toBe(entries)
    expect(entries[0].label).toBe("B") // unchanged
  })
})

// ---------------------------------------------------------------------------
// clampSpectrumPosition
// ---------------------------------------------------------------------------

describe("clampSpectrumPosition", () => {
  it("clamps values below 0 to 0", () => {
    expect(clampSpectrumPosition(-0.5)).toBe(0)
  })

  it("clamps values above 1 to 1", () => {
    expect(clampSpectrumPosition(1.5)).toBe(1)
  })

  it("passes through values in [0, 1]", () => {
    expect(clampSpectrumPosition(0.5)).toBe(0.5)
    expect(clampSpectrumPosition(0)).toBe(0)
    expect(clampSpectrumPosition(1)).toBe(1)
  })
})

// ---------------------------------------------------------------------------
// validateComparisonProject (integration)
// ---------------------------------------------------------------------------

describe("validateComparisonProject", () => {
  const minimalScene = (title: string) => ({durationInFrames: 300, sectionLabel: "Test", title})

  const minimalProject: ComparisonProject = {
    meta: {title: "Test", fps: 30},
    companies: ["Ornn", "Silicon Data", "Auctionomics"],
    scenes: {
      overview: {...minimalScene("Overview"), body: "body", companies: [
        {slug: "ornn", label: "Ornn", approach: "Benchmark"},
        {slug: "silicon-data", label: "Silicon Data", approach: "Index"},
        {slug: "auctionomics", label: "Auctionomics", approach: "Auction"},
      ]},
      approaches: {...minimalScene("Approaches"), cards: [validCard, {...validCard, slug: "silicon-data"}, {...validCard, slug: "auctionomics"}]},
      traction: {...minimalScene("Traction"), intro: "intro", lanes: [validLane, {...validLane, slug: "silicon-data"}, {...validLane, slug: "auctionomics"}]},
      riskComparison: {...minimalScene("Risks"), intro: "intro", matrix: {headers: ["Ornn", "SD", "Auc"], rows: [validRow]}},
      gatingIssues: {...minimalScene("Gates"), intro: "intro", matrix: {headers: ["Ornn", "SD", "Auc"], rows: [validRow]}},
      positioning: {...minimalScene("Positioning"), spectrums: [validSpectrum], summary: "summary"},
      recommendation: {...minimalScene("Recommendation"), cards: [validCard, {...validCard, slug: "silicon-data"}, {...validCard, slug: "auctionomics"}], closingNote: "note"},
    },
  }

  const validCitations: CitationMap<ComparisonSceneId> = {
    overview: ["Source A"],
    approaches: ["Source B"],
    traction: ["Source C"],
    riskComparison: ["Source D"],
    gatingIssues: ["Source E"],
    positioning: ["Source F"],
    recommendation: ["Source G"],
  }

  it("passes with valid project and citations", () => {
    expect(() => validateComparisonProject(minimalProject, validCitations)).not.toThrow()
  })

  it("throws if citation keys are missing", () => {
    const partial = Object.fromEntries(
      Object.entries(validCitations).filter(([k]) => k !== "overview"),
    ) as CitationMap<ComparisonSceneId>
    expect(() => validateComparisonProject(minimalProject, partial)).toThrow("missing")
  })

  it("throws if extra citation keys exist", () => {
    const extra = {...validCitations, bogus: ["X"]} as unknown as CitationMap<ComparisonSceneId>
    expect(() => validateComparisonProject(minimalProject, extra)).toThrow("Extra")
  })

  it("catches citation budget violations", () => {
    const bad = {...validCitations, overview: ["a", "b", "c", "d", "e"]}
    expect(() => validateComparisonProject(minimalProject, bad)).toThrow("items")
  })

  it("catches nested component violations", () => {
    const bad = {
      ...minimalProject,
      scenes: {
        ...minimalProject.scenes,
        approaches: {
          ...minimalProject.scenes.approaches,
          cards: [
            {...validCard, headline: "H".repeat(61)},
            validCard,
            validCard,
          ] as const,
        },
      },
    } as ComparisonProject
    expect(() => validateComparisonProject(bad, validCitations)).toThrow("headline")
  })
})
