import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import type {ComparisonRow} from "../types/comparison";
import {validateComparisonMatrix} from "../validation/comparison";

type ComparisonMatrixProps = {
  readonly headers: readonly [string, string, string];
  readonly rows: readonly ComparisonRow[];
};

const highlightBorder = (level?: "neutral" | "strong" | "weak"): string => {
  if (level === "strong") return theme.colors.accent;
  if (level === "weak") return theme.colors.warning;
  return theme.colors.border;
};

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({headers, rows}) => {
  validateComparisonMatrix({headers, rows});
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const headerEntrance = spring({
    fps,
    frame,
    config: {damping: 200, mass: 0.8, stiffness: 170},
    durationInFrames: 28,
  });

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 10}}>
      {/* Header row */}
      <div
        style={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "280px 1fr 1fr 1fr",
          opacity: headerEntrance,
          transform: `translateY(${interpolate(headerEntrance, [0, 1], [16, 0])}px)`,
        }}
      >
        <div />
        {headers.map((header) => (
          <div
            key={header}
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: 20,
              letterSpacing: "0.12em",
              padding: "12px 16px",
              textTransform: "uppercase",
            }}
          >
            {header}
          </div>
        ))}
      </div>

      {/* Data rows */}
      {rows.map((row, index) => {
        const entrance = spring({
          fps,
          frame: frame - 6 - index * 4,
          config: {damping: 220, mass: 0.75, stiffness: 180},
          durationInFrames: 28,
        });

        return (
          <div
            key={row.dimension}
            style={{
              display: "grid",
              gap: 10,
              gridTemplateColumns: "280px 1fr 1fr 1fr",
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
                fontSize: 17,
                letterSpacing: "0.08em",
                padding: "14px 16px",
                textTransform: "uppercase",
              }}
            >
              {row.dimension}
            </div>
            {row.values.map((value, vi) => (
              <div
                key={vi}
                style={{
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${highlightBorder(row.highlights?.[vi])}`,
                  borderRadius: 16,
                  color: theme.colors.text,
                  fontSize: 21,
                  lineHeight: 1.28,
                  padding: "14px 16px",
                }}
              >
                {value}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
