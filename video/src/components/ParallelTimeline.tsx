import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import {cardGap} from "../utils/layout";
import type {TimelineLane} from "../types/comparison";
import {sortTimelineEntries, validateTimelineLane} from "../validation/comparison";

type ParallelTimelineProps = {
  readonly lanes: readonly [TimelineLane, TimelineLane, TimelineLane];
};

export const ParallelTimeline: React.FC<ParallelTimelineProps> = ({lanes}) => {
  for (const lane of lanes) validateTimelineLane(lane);
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gap: cardGap,
        gridTemplateColumns: "1fr 1fr 1fr",
        flex: 1,
        minHeight: 0,
      }}
    >
      {lanes.map((lane, laneIndex) => {
        const laneEntrance = spring({
          fps,
          frame: frame - laneIndex * 6,
          config: {damping: 200, mass: 0.8, stiffness: 170},
          durationInFrames: 28,
        });

        const sorted = sortTimelineEntries(lane.events);

        return (
          <div
            key={lane.slug}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              opacity: laneEntrance,
              position: "relative",
              transform: `translateY(${interpolate(laneEntrance, [0, 1], [20, 0])}px)`,
            }}
          >
            {/* Lane header */}
            <div
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.mono,
                fontSize: 18,
                letterSpacing: "0.14em",
                marginBottom: 16,
                textTransform: "uppercase",
              }}
            >
              {lane.label}
            </div>

            {/* Timeline line */}
            <div
              style={{
                backgroundColor: theme.colors.border,
                left: 8,
                position: "absolute",
                top: 44,
                bottom: 0,
                width: 2,
              }}
            />

            {/* Events */}
            <div style={{display: "flex", flexDirection: "column", gap: 12}}>
              {sorted.map((event, eventIndex) => {
                const eventEntrance = spring({
                  fps,
                  frame: frame - laneIndex * 6 - 8 - eventIndex * 5,
                  config: {damping: 220, mass: 0.75, stiffness: 180},
                  durationInFrames: 28,
                });

                return (
                  <div
                    key={event.sortDate + event.label}
                    style={{
                      alignItems: "flex-start",
                      display: "flex",
                      gap: 14,
                      opacity: eventEntrance,
                      transform: `translateY(${interpolate(eventEntrance, [0, 1], [16, 0])}px)`,
                    }}
                  >
                    {/* Node dot */}
                    <div
                      style={{
                        backgroundColor: theme.colors.accent,
                        borderRadius: "50%",
                        flexShrink: 0,
                        height: 18,
                        marginTop: 3,
                        width: 18,
                        zIndex: 1,
                      }}
                    />
                    <div style={{display: "flex", flexDirection: "column", gap: 4}}>
                      <div
                        style={{
                          color: theme.colors.muted,
                          fontFamily: theme.fonts.mono,
                          fontSize: 16,
                        }}
                      >
                        {event.displayDate}
                      </div>
                      <div
                        style={{
                          color: theme.colors.text,
                          fontSize: 21,
                          lineHeight: 1.25,
                        }}
                      >
                        {event.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
