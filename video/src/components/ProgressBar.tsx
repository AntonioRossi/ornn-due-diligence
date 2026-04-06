import { theme } from "../theme";

export const ProgressBar: React.FC<{progress: number}> = ({progress}) => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.track,
        borderRadius: 999,
        height: 8,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: theme.colors.accent,
          borderRadius: 999,
          height: "100%",
          transform: `scaleX(${progress})`,
          transformOrigin: "left center",
          width: "100%",
        }}
      />
    </div>
  );
};
