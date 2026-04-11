import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {theme} from "../theme";
import {cardGap} from "../utils/layout";
import {
  buildBalancedPages,
  getComparisonGridColumns,
  getComparisonPageTiming,
  MAX_COMPARISON_CARD_PAGE_SIZE,
} from "../utils/comparisonLayout";
import type {CompanyCard} from "../types/comparison";
import {validateCompanyCard} from "../validation/comparison";

type SideBySideCardsProps = {
  readonly cards: readonly CompanyCard[];
  readonly sceneDurationInFrames: number;
};

const accentBorder = (level?: "neutral" | "strong" | "weak"): string => {
  if (level === "strong") return theme.colors.accent;
  if (level === "weak") return theme.colors.warning;
  return theme.colors.border;
};

export const SideBySideCards: React.FC<SideBySideCardsProps> = ({
  cards,
  sceneDurationInFrames,
}) => {
  for (const card of cards) validateCompanyCard(card);
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const cardPages = buildBalancedPages(cards, MAX_COMPARISON_CARD_PAGE_SIZE);
  const {pageFrame, pageIndex} = getComparisonPageTiming(
    frame,
    sceneDurationInFrames,
    cardPages.length,
  );
  const pageCards = cardPages[pageIndex] ?? cards;
  const columnCount = getComparisonGridColumns(pageCards.length, 3);
  const isDensePage = pageCards.length >= 4;

  return (
    <div style={{display: "flex", flexDirection: "column", gap: 12}}>
      {cardPages.length > 1 ? (
        <div
          style={{
            alignSelf: "flex-end",
            color: theme.colors.muted,
            fontFamily: theme.fonts.mono,
            fontSize: 15,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Page {pageIndex + 1} / {cardPages.length}
        </div>
      ) : null}
      <div
        style={{
          display: "grid",
          gap: cardGap,
          gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        }}
      >
        {pageCards.map((card, index) => {
          const entrance = spring({
            fps,
            frame: pageFrame - index * 3,
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
                gap: isDensePage ? 12 : 14,
                minHeight: isDensePage ? 250 : 0,
                opacity: entrance,
                padding: isDensePage ? 20 : 24,
                transform: `translateY(${interpolate(entrance, [0, 1], [24, 0])}px)`,
              }}
            >
              <div
                style={{
                  color: theme.colors.accent,
                  fontFamily: theme.fonts.mono,
                  fontSize: isDensePage ? 16 : 18,
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
                  fontSize: isDensePage ? 24 : 27,
                  lineHeight: 1.12,
                }}
              >
                {card.headline}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: isDensePage ? 18 : 21,
                  lineHeight: 1.3,
                }}
              >
                {card.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
