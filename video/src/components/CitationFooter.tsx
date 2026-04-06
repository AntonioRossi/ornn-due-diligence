import { theme } from "../theme";

export const CitationFooter: React.FC<{items: string[]}> = ({items}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        color: theme.colors.muted,
        fontFamily: theme.fonts.body,
        fontSize: 24,
        lineHeight: 1.4,
      }}
    >
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
};
