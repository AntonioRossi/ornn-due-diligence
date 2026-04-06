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
        gap: 30,
        gridTemplateColumns: "1.25fr 0.75fr",
      }}
    >
      <div style={{display: "flex", flexDirection: "column", gap: 22}}>
        <div
          style={{
            color: theme.colors.muted,
            fontSize: 31,
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
            gap: 18,
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
                    borderRadius: 24,
                    boxShadow: "0 18px 50px rgba(0, 0, 0, 0.18)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    padding: 24,
                    width: "100%",
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
                    {event.date}
                  </div>
                  <div
                    style={{
                      color: theme.colors.text,
                      fontFamily: theme.fonts.display,
                      fontSize: 32,
                      lineHeight: 1.08,
                    }}
                  >
                    {event.title}
                  </div>
                  <div
                    style={{
                      color: theme.colors.muted,
                      fontSize: 27,
                      lineHeight: 1.3,
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
          gap: 18,
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
                borderRadius: 26,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                minHeight: 190,
                opacity: entrance,
                padding: 26,
                transform: `translateY(${interpolate(entrance, [0, 1], [18, 0])}px)`,
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
                {stat.label}
              </div>
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 52,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 26,
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
