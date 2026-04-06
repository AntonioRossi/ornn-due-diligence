import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

type RiskItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

export const RiskPanel: React.FC<{
  readonly summary: string;
  readonly items: readonly RiskItem[];
  readonly framingLabel: string;
  readonly framingText: string;
  readonly askText: string;
}> = ({summary, items, framingLabel, framingText, askText}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const summaryEntrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
      mass: 0.8,
      stiffness: 160,
    },
    durationInFrames: 28,
  });

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 32}}>
      <div
        style={{
          backgroundColor: theme.colors.surfaceStrong,
          border: `1px solid ${theme.colors.warningBorder}`,
          borderRadius: 28,
          boxShadow: "0 24px 64px rgba(0, 0, 0, 0.18)",
          color: theme.colors.text,
          fontFamily: theme.fonts.display,
          fontSize: 44,
          lineHeight: 1.12,
          opacity: summaryEntrance,
          padding: 34,
          transform: `translateY(${interpolate(summaryEntrance, [0, 1], [20, 0])}px)`,
        }}
      >
        {summary}
      </div>
      <div
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {items.map((item, index) => {
          const entrance = spring({
            fps,
            frame: frame - 8 - index * 6,
            config: {
              damping: 220,
              mass: 0.75,
              stiffness: 180,
            },
            durationInFrames: 28,
          });

          return (
            <div
              key={item.label}
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 24,
                boxShadow: "0 18px 48px rgba(0, 0, 0, 0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                minHeight: 280,
                opacity: entrance,
                padding: 28,
                transform: `translateY(${interpolate(entrance, [0, 1], [30, 0])}px)`,
              }}
            >
              <div
                style={{
                  color: theme.colors.warning,
                  fontFamily: theme.fonts.mono,
                  fontSize: 20,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 32,
                  lineHeight: 1.1,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 27,
                  lineHeight: 1.32,
                }}
              >
                {item.body}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
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
            {framingLabel}
          </div>
          <div
            style={{
              color: theme.colors.text,
              fontSize: 30,
              lineHeight: 1.25,
            }}
          >
            {framingText}
          </div>
        </div>
        <div
          style={{
            backgroundColor: theme.colors.surface,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
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
            Diligence ask
          </div>
          <div
            style={{
              color: theme.colors.text,
              fontSize: 30,
              lineHeight: 1.25,
            }}
          >
            {askText}
          </div>
        </div>
      </div>
    </div>
  );
};
