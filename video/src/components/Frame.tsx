import {AbsoluteFill} from "remotion";
import {shellPadding} from "../utils/layout";
import {theme} from "../theme";
import {ProgressBar} from "./ProgressBar";
import {SectionTitle} from "./SectionTitle";

type FrameProps = {
  readonly sectionLabel: string;
  readonly title: string;
  readonly progress: number;
  readonly titleMaxWidth?: number;
  readonly titleSize?: number;
  readonly footer?: React.ReactNode;
  readonly children: React.ReactNode;
};

export const Frame: React.FC<FrameProps> = ({
  sectionLabel,
  title,
  progress,
  titleMaxWidth = 1240,
  titleSize = 78,
  footer,
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(circle at top left, rgba(200, 160, 107, 0.12), transparent 30%), linear-gradient(180deg, #0c1016 0%, #111923 100%)",
        color: theme.colors.text,
        padding: shellPadding,
        fontFamily: theme.fonts.body,
      }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(244, 239, 231, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 239, 231, 0.03) 1px, transparent 1px)",
          backgroundPosition: "-1px -1px",
          backgroundSize: "220px 220px",
          opacity: 0.35,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: 32,
          minHeight: 0,
          position: "relative",
        }}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 28}}>
          <SectionTitle label={sectionLabel} />
          <div
            style={{
              maxWidth: titleMaxWidth,
              fontFamily: theme.fonts.display,
              fontSize: titleSize,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {children}
        </div>
        <div
          style={{
            alignItems: "flex-end",
            display: "flex",
            gap: 24,
            justifyContent: "space-between",
          }}
        >
          <div style={{flex: 1, minWidth: 0}}>{footer}</div>
          <div style={{minWidth: 320}}>
            <ProgressBar progress={Math.max(0, Math.min(progress, 1))} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
