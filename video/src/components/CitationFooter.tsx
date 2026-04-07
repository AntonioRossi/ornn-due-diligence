import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

export const CitationFooter: React.FC<{items: readonly string[]}> = ({items}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({
    fps,
    frame: frame - 6,
    config: {
      damping: 200,
      mass: 0.8,
      stiffness: 170,
    },
    durationInFrames: 22,
  });

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: 10,
        minWidth: 0,
        opacity: entrance,
        transform: `translateY(${interpolate(entrance, [0, 1], [10, 0])}px)`,
      }}
    >
      <div
        style={{
          border: `1px solid ${theme.colors.borderSoft}`,
          borderRadius: 999,
          color: theme.colors.accent,
          fontFamily: theme.fonts.mono,
          fontSize: 15,
          letterSpacing: "0.12em",
          padding: "6px 12px",
          textTransform: "uppercase",
        }}
        >
        Sources
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          gap: 8,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.borderSoft}`,
              borderRadius: 999,
              color: theme.colors.muted,
              flexShrink: 1,
              fontFamily: theme.fonts.body,
              fontSize: 16,
              lineHeight: 1.2,
              maxWidth: 320,
              minWidth: 0,
              overflow: "hidden",
              padding: "7px 12px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
