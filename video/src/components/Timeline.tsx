import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

type TimelineEvent = {
  readonly date: string;
  readonly title: string;
  readonly body: string;
};

type TimelineStat = {
  readonly label: string;
  readonly value: string;
  readonly body: string;
};

export const Timeline: React.FC<{
  readonly intro: string;
  readonly events: readonly TimelineEvent[];
  readonly stats: readonly TimelineStat[];
}> = ({intro, events, stats}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: "1.38fr 0.62fr",
      }}
    >
      <div style={{display: "flex", flexDirection: "column", gap: 16}}>
        <div
          style={{
            color: theme.colors.muted,
            fontSize: 24,
            lineHeight: 1.32,
            maxWidth: 920,
          }}
        >
          {intro}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            paddingLeft: 52,
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: theme.colors.border,
              bottom: 16,
              left: 16,
              opacity: 0.75,
              position: "absolute",
              top: 16,
              width: 2,
            }}
          />
          {events.map((event, index) => {
            const entrance = spring({
              fps,
              frame: frame - index * 8,
              config: {
                damping: 220,
                mass: 0.75,
                stiffness: 180,
              },
              durationInFrames: 30,
            });

            return (
              <div
                key={`${event.date}-${event.title}`}
                style={{
                  display: "flex",
                  gap: 18,
                  opacity: entrance,
                  position: "relative",
                  transform: `translateY(${interpolate(entrance, [0, 1], [22, 0])}px)`,
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    left: -52,
                    position: "absolute",
                    top: 18,
                    width: 32,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: theme.colors.accent,
                      border: `4px solid ${theme.colors.background}`,
                      borderRadius: 999,
                      boxShadow: `0 0 0 1px ${theme.colors.border}`,
                      height: 18,
                      width: 18,
                    }}
                  />
                </div>
                <div
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 22,
                    boxShadow: "0 14px 38px rgba(0, 0, 0, 0.16)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    padding: 16,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      color: theme.colors.accent,
                      fontFamily: theme.fonts.mono,
                      fontSize: 15,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {event.date}
                  </div>
                  <div
                    style={{
                      color: theme.colors.text,
                      fontFamily: theme.fonts.display,
                      fontSize: 25,
                      lineHeight: 1.08,
                    }}
                  >
                    {event.title}
                  </div>
                  <div
                    style={{
                      color: theme.colors.muted,
                      fontSize: 19,
                      lineHeight: 1.28,
                    }}
                  >
                    {event.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {stats.map((stat, index) => {
          const entrance = spring({
            fps,
            frame: frame - 24 - index * 8,
            config: {
              damping: 220,
              mass: 0.8,
              stiffness: 180,
            },
            durationInFrames: 28,
          });

          return (
            <div
              key={stat.label}
              style={{
                backgroundColor: theme.colors.surface,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 24,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 154,
                opacity: entrance,
                padding: 22,
                transform: `translateY(${interpolate(entrance, [0, 1], [18, 0])}px)`,
              }}
            >
              <div
                style={{
                  color: theme.colors.accent,
                  fontFamily: theme.fonts.mono,
                  fontSize: 16,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 42,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 20,
                  lineHeight: 1.28,
                }}
              >
                {stat.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
