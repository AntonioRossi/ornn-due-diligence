import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import type {ComparisonRow} from "../types/comparison";
import {
  buildBalancedIndexPages,
  getComparisonPageTiming,
  MAX_COMPARISON_MATRIX_PAGE_SIZE,
} from "../utils/comparisonLayout";
import {validateComparisonMatrix} from "../validation/comparison";

type ComparisonMatrixProps = {
  readonly headers: readonly string[];
  readonly rows: readonly ComparisonRow[];
  readonly sceneDurationInFrames: number;
};

const highlightBorder = (level?: "neutral" | "strong" | "weak"): string => {
  if (level === "strong") return theme.colors.accent;
  if (level === "weak") return theme.colors.warning;
  return theme.colors.border;
};

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  headers,
  rows,
  sceneDurationInFrames,
}) => {
  validateComparisonMatrix({headers, rows});
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const columnPages = buildBalancedIndexPages(headers.length, MAX_COMPARISON_MATRIX_PAGE_SIZE);
  const {pageFrame, pageIndex} = getComparisonPageTiming(
    frame,
    sceneDurationInFrames,
    columnPages.length,
  );
  const visibleColumns = columnPages[pageIndex]!.map((index) => ({
    index,
    header: headers[index]!,
  }));
  const firstVisibleColumn = visibleColumns[0]!;
  const lastVisibleColumn = visibleColumns[visibleColumns.length - 1]!;
  const gridTemplateColumns = `280px repeat(${visibleColumns.length}, minmax(0, 1fr))`;
  const isDensePage = visibleColumns.length >= 4;

  const headerEntrance = spring({
    fps,
    frame: pageFrame,
    config: {damping: 200, mass: 0.8, stiffness: 170},
    durationInFrames: 28,
  });

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
      {columnPages.length > 1 ? (
        <div
          style={{
            alignSelf: "flex-end",
            color: theme.colors.muted,
            fontFamily: theme.fonts.mono,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Companies {firstVisibleColumn.index + 1}-{lastVisibleColumn.index + 1} of {headers.length}
        </div>
      ) : null}
      {/* Header row */}
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns,
          opacity: headerEntrance,
          transform: `translateY(${interpolate(headerEntrance, [0, 1], [16, 0])}px)`,
        }}
      >
        <div />
        {visibleColumns.map((column) => (
          <div
            key={column.index}
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: isDensePage ? 18 : 20,
              letterSpacing: isDensePage ? "0.08em" : "0.12em",
              padding: "12px 16px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            {column.header}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row, index) => {
        const entrance = spring({
          fps,
          frame: pageFrame - 6 - index * 4,
          config: {damping: 220, mass: 0.75, stiffness: 180},
          durationInFrames: 28,
        });

        return (
          <div
            key={row.dimension}
            style={{
              display: "grid",
              gap: 10,
              gridTemplateColumns,
              opacity: entrance,
              transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
            }}
          >
            <div
              style={{
                alignItems: "center",
                backgroundColor: theme.colors.surfaceStrong,
                borderRadius: 16,
                color: theme.colors.muted,
                display: "flex",
                fontFamily: theme.fonts.mono,
                fontSize: isDensePage ? 16 : 17,
                letterSpacing: "0.08em",
                padding: "14px 16px",
                textTransform: "uppercase",
              }}
            >
              {row.dimension}
            </div>
            {visibleColumns.map((column) => (
              <div
                key={column.index}
                style={{
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${highlightBorder(row.highlights?.[column.index])}`,
                  borderRadius: 16,
                  color: theme.colors.text,
                  fontSize: isDensePage ? 19 : 21,
                  lineHeight: 1.28,
                  padding: "14px 16px",
                }}
              >
                {row.values[column.index]}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
