import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {shellPadding} from "../utils/layout";
import {theme} from "../theme";
import {ProgressBar} from "./ProgressBar";
import {SectionTitle} from "./SectionTitle";

type TransitionVariant = "slide-right" | "slide-up" | "diagonal" | "shutter";

type FrameProps = {
  readonly sectionLabel: string;
  readonly title: string;
  readonly progress: number;
  readonly titleMaxWidth?: number;
  readonly titleSize?: number;
  readonly transitionVariant?: TransitionVariant;
  readonly footer?: React.ReactNode;
  readonly children: React.ReactNode;
};

const TransitionOverlay: React.FC<{readonly variant: TransitionVariant}> = ({
  variant,
}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const reveal = interpolate(frame, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const conceal = interpolate(frame, [durationInFrames - 18, durationInFrames - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (variant === "shutter") {
    return (
      <>
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(12, 16, 22, 0.98) 0%, rgba(12, 16, 22, 0.78) 72%, transparent 100%)",
            height: "52%",
            inset: 0,
            pointerEvents: "none",
            position: "absolute",
            transform: `translateY(${interpolate(reveal, [0, 1], [0, -108]) + interpolate(conceal, [0, 1], [-108, 0])}%)`,
          }}
        />
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(12, 16, 22, 0.98) 0%, rgba(12, 16, 22, 0.78) 72%, transparent 100%)",
            bottom: 0,
            height: "52%",
            left: 0,
            pointerEvents: "none",
            position: "absolute",
            right: 0,
            transform: `translateY(${interpolate(reveal, [0, 1], [0, 108]) + interpolate(conceal, [0, 1], [108, 0])}%)`,
          }}
        />
        <div
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${theme.colors.accent} 50%, transparent 100%)`,
            height: 2,
            left: "14%",
            opacity: 0.9,
            pointerEvents: "none",
            position: "absolute",
            right: "14%",
            top: `${interpolate(reveal, [0, 1], [50, -2]) + interpolate(conceal, [0, 1], [-2, 50])}%`,
          }}
        />
        <div
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${theme.colors.accent} 50%, transparent 100%)`,
            bottom: `${interpolate(reveal, [0, 1], [50, -2]) + interpolate(conceal, [0, 1], [-2, 50])}%`,
            height: 2,
            left: "14%",
            opacity: 0.9,
            pointerEvents: "none",
            position: "absolute",
            right: "14%",
          }}
        />
      </>
    );
  }

  const sharedStyle = {
    background:
      "linear-gradient(90deg, rgba(12, 16, 22, 0.98) 0%, rgba(17, 24, 34, 0.94) 68%, rgba(200, 160, 107, 0.12) 100%)",
    inset: 0,
    pointerEvents: "none" as const,
    position: "absolute" as const,
  };

  if (variant === "slide-up") {
    return (
      <>
        <div
          style={{
            ...sharedStyle,
            height: "120%",
            transform: `translateY(${interpolate(reveal, [0, 1], [0, -112]) + interpolate(conceal, [0, 1], [-112, 0])}%)`,
          }}
        />
        <div
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${theme.colors.accent} 52%, transparent 100%)`,
            bottom: `${interpolate(reveal, [0, 1], [100, -8]) + interpolate(conceal, [0, 1], [-8, 100])}%`,
            height: 2,
            left: "10%",
            opacity: 0.92,
            pointerEvents: "none",
            position: "absolute",
            right: "10%",
          }}
        />
      </>
    );
  }

  if (variant === "diagonal") {
    return (
      <>
        <div
          style={{
            ...sharedStyle,
            height: "126%",
            left: "-24%",
            transform: `translateX(${interpolate(reveal, [0, 1], [0, 128]) + interpolate(conceal, [0, 1], [128, 0])}%) rotate(-6deg)`,
            width: "88%",
          }}
        />
        <div
          style={{
            background: `linear-gradient(180deg, transparent 0%, ${theme.colors.accent} 48%, transparent 100%)`,
            height: "128%",
            left: "-10%",
            opacity: 0.92,
            pointerEvents: "none",
            position: "absolute",
            top: "-10%",
            transform: `translateX(${interpolate(reveal, [0, 1], [-14, 114]) + interpolate(conceal, [0, 1], [114, -14])}%) rotate(-6deg)`,
            width: 3,
          }}
        />
      </>
    );
  }

  return (
    <>
      <div
        style={{
          ...sharedStyle,
          left: "-12%",
          transform: `translateX(${interpolate(reveal, [0, 1], [0, 118]) + interpolate(conceal, [0, 1], [118, 0])}%)`,
          width: "74%",
        }}
      />
      <div
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${theme.colors.accent} 48%, transparent 100%)`,
          height: "100%",
          left: `${interpolate(reveal, [0, 1], [-4, 70]) + interpolate(conceal, [0, 1], [70, -4])}%`,
          opacity: 0.92,
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          width: 3,
        }}
      />
    </>
  );
};

export const Frame: React.FC<FrameProps> = ({
  sectionLabel,
  title,
  progress,
  titleMaxWidth = 1240,
  titleSize = 78,
  transitionVariant = "slide-right",
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
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 78% 22%, rgba(200, 160, 107, 0.12), transparent 24%), radial-gradient(circle at 18% 82%, rgba(90, 117, 150, 0.1), transparent 28%)",
        }}
      />
      <TransitionOverlay variant={transitionVariant} />
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
        <div
          style={{
            background: `linear-gradient(90deg, ${theme.colors.accent} 0%, ${theme.colors.accentSoft} 42%, transparent 100%)`,
            height: 2,
            left: 0,
            opacity: 0.9,
            position: "absolute",
            top: 0,
            width: "40%",
          }}
        />
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
          <div style={{flex: 1, minWidth: 0, paddingRight: 24}}>{footer}</div>
          <div style={{minWidth: 320}}>
            <ProgressBar progress={Math.max(0, Math.min(progress, 1))} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
