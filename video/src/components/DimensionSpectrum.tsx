import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import type {DimensionSpectrumData} from "../types/comparison";
import {
  clampSpectrumPosition,
  validateDimensionSpectrumData,
} from "../validation/comparison";

type DimensionSpectrumProps = DimensionSpectrumData;

const companyColors = [theme.colors.accent, "#7a9ec2", theme.colors.warning] as const;

export const DimensionSpectrum: React.FC<DimensionSpectrumProps> = (props) => {
  validateDimensionSpectrumData(props);
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

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
      <div style={{position: "relative", height: 64}}>
        {/* Track */}
        <div
          style={{
            backgroundColor: theme.colors.track,
            borderRadius: 6,
            height: 12,
            left: 0,
            position: "absolute",
            top: 20,
            width: `${barEntrance * 100}%`,
          }}
        />

        {/* Markers */}
        {props.placements.map((placement, index) => {
          const pos = clampSpectrumPosition(placement.position);
          const markerEntrance = spring({
            fps,
            frame: frame - 10 - index * 6,
            config: {damping: 180, mass: 0.7, stiffness: 200},
            durationInFrames: 28,
          });

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
                  backgroundColor: companyColors[index],
                  border: `3px solid ${theme.colors.background}`,
                  borderRadius: "50%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  height: 28,
                  width: 28,
                }}
              />
              {/* Label below */}
              <div
                style={{
                  color: companyColors[index],
                  fontFamily: theme.fonts.mono,
                  fontSize: 15,
                  letterSpacing: "0.06em",
                  marginTop: 6,
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {placement.label}
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
