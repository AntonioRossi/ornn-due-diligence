import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import {cardGap} from "../utils/layout";
import type {CompanyCard} from "../types/comparison";
import {validateCompanyCard} from "../validation/comparison";

type SideBySideCardsProps = {
  readonly cards: readonly [CompanyCard, CompanyCard, CompanyCard];
};

const accentBorder = (level?: "neutral" | "strong" | "weak"): string => {
  if (level === "strong") return theme.colors.accent;
  if (level === "weak") return theme.colors.warning;
  return theme.colors.border;
};

export const SideBySideCards: React.FC<SideBySideCardsProps> = ({cards}) => {
  for (const card of cards) validateCompanyCard(card);
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <div
      style={{
        display: "grid",
        gap: cardGap,
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {cards.map((card, index) => {
        const entrance = spring({
          fps,
          frame: frame - index * 3,
          config: {damping: 200, mass: 0.8, stiffness: 170},
          durationInFrames: 28,
        });

        return (
          <div
            key={card.slug}
            style={{
              backgroundColor: theme.colors.surface,
              border: `1px solid ${accentBorder(card.accent)}`,
              borderRadius: 22,
              boxShadow: "0 18px 48px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              opacity: entrance,
              padding: 24,
              transform: `translateY(${interpolate(entrance, [0, 1], [24, 0])}px)`,
            }}
          >
            <div
              style={{
                color: theme.colors.accent,
                fontFamily: theme.fonts.mono,
                fontSize: 18,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              {card.label}
            </div>
            <div
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.display,
                fontSize: 27,
                lineHeight: 1.12,
              }}
            >
              {card.headline}
            </div>
            <div
              style={{
                color: theme.colors.muted,
                fontSize: 21,
                lineHeight: 1.3,
              }}
            >
              {card.body}
            </div>
          </div>
        );
      })}
    </div>
  );
};
