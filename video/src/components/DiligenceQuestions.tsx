import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";

type DiligenceQuestion = {
  readonly label: string;
  readonly body: string;
};

export const DiligenceQuestions: React.FC<{
  readonly questions: readonly DiligenceQuestion[];
}> = ({questions}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        columnGap: 22,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap: 22,
      }}
    >
      {questions.map((question, index) => {
        const entrance = spring({
          fps,
          frame: frame - 8 - index * 6,
          config: {
            damping: 200,
            mass: 0.8,
            stiffness: 170,
          },
          durationInFrames: 28,
        });

        return (
          <div
            key={question.label}
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 24,
              boxShadow: "0 18px 48px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minHeight: 220,
              opacity: entrance,
              padding: 28,
              transform: `translateY(${interpolate(entrance, [0, 1], [28, 0])}px)`,
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
              {question.label}
            </div>
            <div
              style={{
                color: theme.colors.text,
                fontSize: 30,
                lineHeight: 1.25,
              }}
            >
              {question.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};
