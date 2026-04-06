import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

type Layer = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

export const ThreeLayerModel: React.FC<{
  readonly layers: readonly Layer[];
  readonly summary: string;
  readonly note: string;
  readonly summaryLabel?: string;
  readonly noteLabel?: string;
}> = ({layers, summary, note, summaryLabel = "Strategic payoff", noteLabel = "Why it compounds"}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "1.25fr 0.75fr",
      }}
    >
      <div style={{display: "flex", flexDirection: "column", gap: 14}}>
        {layers.map((layer, index) => {
          const entrance = spring({
            fps,
            frame: frame - index * 6,
            config: {
              damping: 200,
              mass: 0.75,
              stiffness: 170,
            },
            durationInFrames: 28,
          });
          const widths = ["78%", "89%", "100%"] as const;

          return (
            <div
              key={layer.label}
              style={{
                alignSelf: "flex-start",
                backgroundColor: theme.colors.surfaceStrong,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 28,
                boxShadow: "0 20px 56px rgba(0, 0, 0, 0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                opacity: entrance,
                padding: 22,
                transform: `translateY(${interpolate(entrance, [0, 1], [24, 0])}px)`,
                width: widths[index],
              }}
            >
              <div
                style={{
                  color: theme.colors.accent,
                  fontFamily: theme.fonts.mono,
                  fontSize: 20,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {layer.label}
              </div>
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 32,
                  lineHeight: 1.08,
                }}
              >
                {layer.title}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 21,
                  lineHeight: 1.26,
                  maxWidth: 720,
                }}
              >
                {layer.body}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minHeight: 0,
            padding: 24,
          }}
        >
          <div
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: 20,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {summaryLabel}
          </div>
          <div
            style={{
              color: theme.colors.text,
              fontSize: 27,
              lineHeight: 1.18,
            }}
          >
            {summary}
          </div>
        </div>
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 28,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            minHeight: 0,
            padding: 24,
          }}
        >
          <div
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.mono,
              fontSize: 20,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {noteLabel}
          </div>
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 22,
              lineHeight: 1.26,
            }}
          >
            {note}
          </div>
        </div>
      </div>
    </div>
  );
};
