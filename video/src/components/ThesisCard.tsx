import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

type ThesisPoint = {
  readonly label: string;
  readonly body: string;
};

type AccentBlock = {
  readonly label: string;
  readonly value: string;
  readonly body: string;
};

export const ThesisCard: React.FC<{
  readonly headline: string;
  readonly body: string;
  readonly points?: readonly ThesisPoint[];
  readonly accentBlock?: AccentBlock;
}> = ({headline, body, points = [], accentBlock}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 220,
      mass: 0.75,
      stiffness: 170,
    },
    durationInFrames: 30,
  });

  return (
    <div
      style={{
        display: "grid",
        gap: 28,
        gridTemplateColumns: accentBlock ? "1.35fr 0.65fr" : "1fr",
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [28, 0])}px)`,
      }}
    >
      <div
        style={{
          backgroundColor: theme.colors.surfaceStrong,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: 28,
          boxShadow: "0 22px 60px rgba(0, 0, 0, 0.22)",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          padding: 34,
        }}
      >
        <div
          style={{
            color: theme.colors.text,
            fontFamily: theme.fonts.display,
            fontSize: 50,
            lineHeight: 1.05,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            color: theme.colors.muted,
            fontSize: 28,
            lineHeight: 1.34,
            maxWidth: 880,
          }}
        >
          {body}
        </div>
        {points.length > 0 ? (
          <div
            style={{
              columnGap: 18,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              rowGap: 18,
            }}
          >
            {points.map((point, index) => {
              const pointEntrance = spring({
                fps,
                frame: frame - 10 - index * 4,
                config: {
                  damping: 200,
                  mass: 0.8,
                  stiffness: 180,
                },
                durationInFrames: 28,
              });

              return (
                <div
                  key={point.label}
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minHeight: 170,
                    opacity: pointEntrance,
                    padding: 22,
                    transform: `translateY(${interpolate(pointEntrance, [0, 1], [18, 0])}px)`,
                  }}
                >
                  <div
                    style={{
                      color: theme.colors.accent,
                      fontFamily: theme.fonts.mono,
                      fontSize: 18,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {point.label}
                  </div>
                  <div
                    style={{
                      color: theme.colors.text,
                      fontSize: 23,
                      lineHeight: 1.25,
                    }}
                  >
                    {point.body}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {accentBlock ? (
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 28,
            boxShadow: "0 20px 48px rgba(0, 0, 0, 0.18)",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            justifyContent: "center",
            padding: 30,
          }}
        >
          <div
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {accentBlock.label}
          </div>
          <div
            style={{
              color: theme.colors.text,
              fontFamily: theme.fonts.display,
              fontSize: 46,
              lineHeight: 1,
            }}
          >
            {accentBlock.value}
          </div>
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 24,
              lineHeight: 1.3,
            }}
          >
            {accentBlock.body}
          </div>
        </div>
      ) : null}
    </div>
  );
};
