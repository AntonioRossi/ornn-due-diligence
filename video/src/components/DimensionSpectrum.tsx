import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import type {
  ComparisonCompany,
  DimensionSpectrumData,
} from "../types/comparison";
import {
  getDimensionSpectrumLayout,
  spectrumLayout,
} from "../utils/comparisonLayout";
import {
  clampSpectrumPosition,
  validateDimensionSpectrumData,
} from "../validation/comparison";

type DimensionSpectrumProps = DimensionSpectrumData & {
  readonly companies: readonly ComparisonCompany[];
};

const companyColors = [
  theme.colors.accent,
  "#7a9ec2",
  theme.colors.warning,
  "#69b69a",
  "#d7846d",
  "#8fb65d",
  "#c98bc2",
  "#d2b05e",
] as const;

export const DimensionSpectrum: React.FC<DimensionSpectrumProps> = (props) => {
  validateDimensionSpectrumData(props);
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const {containerHeight, labelLanes} = getDimensionSpectrumLayout(props.placements);
  const companyLabelsBySlug = new Map(
    props.companies.map(({slug, label}) => [slug, label] as const),
  );

  const barEntrance = spring({
    fps,
    frame,
    config: {damping: 200, mass: 0.8, stiffness: 160},
    durationInFrames: 36,
  });

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 16}}>
      {/* Dimension label */}
      <div
        style={{
          color: theme.colors.text,
          fontFamily: theme.fonts.display,
          fontSize: 26,
          lineHeight: 1.15,
        }}
      >
        {props.dimension}
      </div>

      {/* Bar container */}
      <div style={{height: containerHeight, position: "relative"}}>
        {/* Track */}
        <div
          style={{
            backgroundColor: theme.colors.track,
            borderRadius: 6,
            height: spectrumLayout.trackHeight,
            left: 0,
            position: "absolute",
            top: spectrumLayout.trackTop,
            width: `${barEntrance * 100}%`,
          }}
        />

        {/* Markers */}
        {props.placements.map((placement, index) => {
          const pos = clampSpectrumPosition(placement.position);
          const labelLane = labelLanes[index] ?? 0;
          const label =
            placement.displayLabel ?? companyLabelsBySlug.get(placement.slug) ?? placement.slug;
          const markerEntrance = spring({
            fps,
            frame: frame - 10 - index * 6,
            config: {damping: 180, mass: 0.7, stiffness: 200},
            durationInFrames: 28,
          });
          const markerColor = companyColors[index % companyColors.length];

          return (
            <div
              key={placement.slug}
              style={{
                left: `${pos * 100}%`,
                opacity: markerEntrance,
                position: "absolute",
                top: 0,
                transform: `translateX(-50%) translateY(${interpolate(markerEntrance, [0, 1], [-20, 0])}px)`,
              }}
            >
              {/* Circle marker */}
              <div
                style={{
                  backgroundColor: markerColor,
                  border: `3px solid ${theme.colors.background}`,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  height: spectrumLayout.markerSize,
                  width: spectrumLayout.markerSize,
                }}
              />
              {/* Label below */}
              <div
                style={{
                  color: markerColor,
                  fontFamily: theme.fonts.mono,
                  fontSize: 15,
                  letterSpacing: "0.06em",
                  lineHeight: `${spectrumLayout.labelLineHeight}px`,
                  marginTop:
                    spectrumLayout.labelMarginTop + labelLane * spectrumLayout.labelLaneGap,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scale labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            color: theme.colors.muted,
            fontFamily: theme.fonts.mono,
            fontSize: 15,
          }}
        >
          {props.scaleMin}
        </div>
        <div
          style={{
            color: theme.colors.muted,
            fontFamily: theme.fonts.mono,
            fontSize: 15,
          }}
        >
          {props.scaleMax}
        </div>
      </div>
    </div>
  );
};
