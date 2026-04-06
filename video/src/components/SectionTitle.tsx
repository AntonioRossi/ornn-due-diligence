import {theme} from "../theme";

export const SectionTitle: React.FC<{readonly label: string}> = ({label}) => {
  return (
    <div
      style={{
        color: theme.colors.accent,
        fontFamily: theme.fonts.mono,
        fontSize: 28,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
  );
};
