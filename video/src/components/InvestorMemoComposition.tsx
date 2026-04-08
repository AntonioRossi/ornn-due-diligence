import {
  Audio,
  interpolate,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type {CitationMap, ResolvedNarrationEntry} from "@shared/types";
import {theme} from "@shared/theme";
import {cardGap, cardWidth} from "@shared/utils/layout";
import {fadeIn, riseIn} from "@shared/utils/timing";
import {CitationFooter} from "./CitationFooter";
import {DiligenceQuestions} from "./DiligenceQuestions";
import {Frame} from "./Frame";
import {RiskPanel} from "./RiskPanel";
import {ThesisCard} from "./ThesisCard";
import {ThreeLayerModel} from "./ThreeLayerModel";
import {Timeline} from "./Timeline";

type InvestorMemoSceneId =
  | "opening"
  | "whyMatters"
  | "traction"
  | "attractive"
  | "riskLegal"
  | "riskCounterparty"
  | "riskGovernance"
  | "closing";

type GatingIssue = {
  readonly label: string;
  readonly body: string;
};

type ThesisPoint = {
  readonly label: string;
  readonly body: string;
};

type AccentBlock = {
  readonly label: string;
  readonly value: string;
  readonly body: string;
};

type TimelineEvent = {
  readonly date: string;
  readonly title: string;
  readonly body: string;
};

type TimelineStat = {
  readonly label: string;
  readonly value: string;
  readonly body: string;
};

type ThreeLayerItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

type RiskItem = {
  readonly label: string;
  readonly title: string;
  readonly body: string;
};

type DiligenceQuestion = {
  readonly label: string;
  readonly body: string;
};

type InvestorMemoProject = {
  readonly meta: {
    readonly title: string;
    readonly fps: number;
  };
  readonly scenes: {
    readonly opening: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly subtitle: string;
      readonly date: string;
      readonly recommendation: string;
      readonly body: string;
      readonly status: string;
      readonly statusNote: string;
      readonly gatingSummary: string;
      readonly gatingIssues: readonly GatingIssue[];
    };
    readonly whyMatters: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly body: string;
      readonly points: readonly ThesisPoint[];
      readonly accentBlock: AccentBlock;
    };
    readonly traction: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly intro: string;
      readonly events: readonly TimelineEvent[];
      readonly stats: readonly TimelineStat[];
    };
    readonly attractive: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly layers: readonly ThreeLayerItem[];
      readonly summary: string;
      readonly note: string;
      readonly summaryLabel: string;
      readonly noteLabel: string;
    };
    readonly riskLegal: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly summary: string;
      readonly items: readonly RiskItem[];
      readonly framingLabel: string;
      readonly framingText: string;
      readonly askText: string;
    };
    readonly riskCounterparty: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly summary: string;
      readonly items: readonly RiskItem[];
      readonly framingLabel: string;
      readonly framingText: string;
      readonly askText: string;
    };
    readonly riskGovernance: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly summary: string;
      readonly items: readonly RiskItem[];
      readonly framingLabel: string;
      readonly framingText: string;
      readonly askText: string;
    };
    readonly closing: {
      readonly durationInFrames: number;
      readonly sectionLabel: string;
      readonly title: string;
      readonly summary: string;
      readonly conclusion: string;
      readonly questions: readonly DiligenceQuestion[];
      readonly closingNote: string;
    };
  };
};

type InvestorMemoCompositionProps = {
  readonly projectSlug: string;
  readonly project: InvestorMemoProject;
  readonly sceneCitations: CitationMap<InvestorMemoSceneId>;
  readonly narrationByScene: Record<InvestorMemoSceneId, ResolvedNarrationEntry<InvestorMemoSceneId>>;
  readonly sceneStartsInFrames: Record<InvestorMemoSceneId, number>;
  readonly totalDurationInFrames: number;
  readonly whyMattersHeadline: string;
  readonly openingTitleMaxWidth?: number;
  readonly titleSizes?: Partial<Record<InvestorMemoSceneId, number>>;
};

type SceneProps = {
  readonly startFrame: number;
};

export const InvestorMemoComposition: React.FC<InvestorMemoCompositionProps> = ({
  projectSlug,
  project,
  sceneCitations,
  narrationByScene,
  sceneStartsInFrames,
  totalDurationInFrames,
  whyMattersHeadline,
  openingTitleMaxWidth = 720,
  titleSizes,
}) => {
  const sceneAudio = (sceneId: InvestorMemoSceneId) =>
    staticFile(`audio/${projectSlug}/${narrationByScene[sceneId].sceneId}.wav`);

  const resolvedTitleSizes: Record<InvestorMemoSceneId, number> = {
    opening: 110,
    whyMatters: 78,
    traction: 72,
    attractive: 72,
    riskLegal: 68,
    riskCounterparty: 68,
    riskGovernance: 68,
    closing: 70,
    ...titleSizes,
  };

  const useSceneProgress = (startFrame: number) => {
    const frame = useCurrentFrame();
    return (startFrame + frame + 1) / totalDurationInFrames;
  };

  const OpeningScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.opening;
    const progress = useSceneProgress(startFrame);
    const subtitleEntrance = fadeIn(frame, 0, 18);
    const heroEntrance = spring({
      fps,
      frame: frame - 6,
      config: {
        damping: 200,
        mass: 0.8,
        stiffness: 160,
      },
      durationInFrames: 24,
    });
    const stripEntrance = spring({
      fps,
      frame: frame - 14,
      config: {
        damping: 210,
        mass: 0.8,
        stiffness: 165,
      },
      durationInFrames: 24,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.opening}
        titleMaxWidth={openingTitleMaxWidth}
        transitionVariant="diagonal"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.opening} />}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 34,
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(200, 160, 107, 0.14) 0%, rgba(200, 160, 107, 0.05) 28%, transparent 70%)",
              borderRadius: "50%",
              height: 360,
              opacity: interpolate(heroEntrance, [0, 1], [0, 1]),
              pointerEvents: "none",
              position: "absolute",
              right: -70,
              top: 20,
              transform: `scale(${interpolate(heroEntrance, [0, 1], [0.92, 1])})`,
              width: 360,
            }}
          />
          <div
            style={{
              border: `1px solid rgba(200, 160, 107, 0.1)`,
              borderRadius: "50%",
              height: 270,
              opacity: interpolate(heroEntrance, [0, 1], [0, 1]),
              pointerEvents: "none",
              position: "absolute",
              right: 34,
              top: 64,
              width: 270,
            }}
          />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: theme.colors.muted,
                display: "flex",
                fontFamily: theme.fonts.mono,
                fontSize: 20,
                gap: 16,
                letterSpacing: "0.1em",
                opacity: subtitleEntrance,
                textTransform: "uppercase",
                transform: `translateY(${riseIn(frame, 0, 18)}px)`,
              }}
            >
              <span>{scene.subtitle}</span>
              <span style={{opacity: 0.4}}>/</span>
              <span>{scene.date}</span>
            </div>
            <div
              style={{
                alignItems: "center",
                backgroundColor: theme.colors.accentSoft,
                border: `1px solid ${theme.colors.borderSoft}`,
                borderRadius: 999,
                color: theme.colors.accent,
                display: "flex",
                fontFamily: theme.fonts.mono,
                fontSize: 15,
                letterSpacing: "0.12em",
                minHeight: 40,
                opacity: subtitleEntrance,
                padding: "0 14px",
                textTransform: "uppercase",
                transform: `translateY(${riseIn(frame, 0, 18)}px)`,
              }}
            >
              Public information only
            </div>
          </div>
          <div
            style={{
              alignItems: "stretch",
              display: "grid",
              flex: 1,
              gap: 32,
              gridTemplateColumns: "minmax(0, 1fr) 320px",
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 0,
                opacity: heroEntrance,
                transform: `translateY(${interpolate(heroEntrance, [0, 1], [18, 0])}px)`,
              }}
            >
              <div
                style={{
                  background: `linear-gradient(90deg, ${theme.colors.accent} 0%, transparent 100%)`,
                  height: 3,
                  marginBottom: 28,
                  opacity: 0.84,
                  width: 220,
                }}
              />
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 66,
                  lineHeight: 1.02,
                  maxWidth: 920,
                }}
              >
                {scene.recommendation}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 30,
                  lineHeight: 1.28,
                  marginTop: 22,
                  maxWidth: 950,
                }}
              >
                {scene.body}
              </div>
            </div>
            <div
              style={{
                alignSelf: "center",
                backgroundColor: theme.colors.surfaceStrong,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: 28,
                boxShadow: "0 24px 64px rgba(0, 0, 0, 0.18)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                justifyContent: "center",
                minHeight: 280,
                opacity: heroEntrance,
                overflow: "hidden",
                padding: 28,
                position: "relative",
                transform: `translateY(${interpolate(heroEntrance, [0, 1], [20, 0])}px)`,
              }}
            >
              <div
                style={{
                  background: `linear-gradient(180deg, rgba(200, 160, 107, 0.18) 0%, transparent 100%)`,
                  inset: 0,
                  pointerEvents: "none",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  color: theme.colors.accent,
                  fontFamily: theme.fonts.mono,
                  fontSize: 17,
                  letterSpacing: "0.12em",
                  position: "relative",
                  textTransform: "uppercase",
                }}
              >
                Current view
              </div>
              <div
                style={{
                  color: theme.colors.text,
                  fontFamily: theme.fonts.display,
                  fontSize: 38,
                  lineHeight: 1.04,
                  position: "relative",
                }}
              >
                {scene.status}
              </div>
              <div
                style={{
                  color: theme.colors.muted,
                  fontSize: 21,
                  lineHeight: 1.28,
                  position: "relative",
                }}
              >
                {scene.statusNote}
              </div>
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              backgroundColor: theme.colors.surfaceStrong,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 22,
              boxShadow: "0 18px 44px rgba(0, 0, 0, 0.16)",
              display: "flex",
              gap: 24,
              opacity: stripEntrance,
              padding: "18px 22px",
              transform: `translateY(${interpolate(stripEntrance, [0, 1], [18, 0])}px)`,
            }}
          >
            <div
              style={{
                color: theme.colors.accent,
                flexShrink: 0,
                fontFamily: theme.fonts.mono,
                fontSize: 17,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Underwriting remains gated by
            </div>
            <div
              style={{
                color: theme.colors.muted,
                fontSize: 23,
                lineHeight: 1.3,
                minWidth: 0,
              }}
            >
              {scene.gatingSummary}
            </div>
          </div>
        </div>
      </Frame>
    );
  };

  const WhyMattersScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.whyMatters;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.whyMatters}
        transitionVariant="shutter"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.whyMatters} />}
      >
        <ThesisCard
          headline={whyMattersHeadline}
          body={scene.body}
          points={scene.points}
          accentBlock={scene.accentBlock}
        />
      </Frame>
    );
  };

  const TractionScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.traction;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.traction}
        transitionVariant="slide-up"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.traction} />}
      >
        <Timeline intro={scene.intro} events={scene.events} stats={scene.stats} />
      </Frame>
    );
  };

  const AttractiveScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.attractive;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.attractive}
        transitionVariant="diagonal"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.attractive} />}
      >
        <ThreeLayerModel
          layers={scene.layers}
          summary={scene.summary}
          note={scene.note}
          summaryLabel={scene.summaryLabel}
          noteLabel={scene.noteLabel}
        />
      </Frame>
    );
  };

  const RiskLegalScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.riskLegal;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.riskLegal}
        transitionVariant="slide-right"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.riskLegal} />}
      >
        <RiskPanel
          summary={scene.summary}
          items={scene.items}
          framingLabel={scene.framingLabel}
          framingText={scene.framingText}
          askText={scene.askText}
        />
      </Frame>
    );
  };

  const RiskCounterpartyScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.riskCounterparty;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.riskCounterparty}
        transitionVariant="shutter"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.riskCounterparty} />}
      >
        <RiskPanel
          summary={scene.summary}
          items={scene.items}
          framingLabel={scene.framingLabel}
          framingText={scene.framingText}
          askText={scene.askText}
        />
      </Frame>
    );
  };

  const RiskGovernanceScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.riskGovernance;
    const progress = useSceneProgress(startFrame);

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.riskGovernance}
        transitionVariant="slide-up"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.riskGovernance} />}
      >
        <RiskPanel
          summary={scene.summary}
          items={scene.items}
          framingLabel={scene.framingLabel}
          framingText={scene.framingText}
          askText={scene.askText}
        />
      </Frame>
    );
  };

  const ClosingScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.closing;
    const progress = useSceneProgress(startFrame);
    const cardEntrance = spring({
      fps,
      frame,
      config: {
        damping: 220,
        mass: 0.75,
        stiffness: 170,
      },
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.closing}
        transitionVariant="diagonal"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.closing} />}
      >
        <div
          style={{
            display: "grid",
            gap: cardGap,
            gridTemplateColumns: `${cardWidth * 1.2}px 1fr`,
          }}
        >
          <div
            style={{
              backgroundColor: theme.colors.surfaceStrong,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 28,
              boxShadow: "0 22px 60px rgba(0, 0, 0, 0.18)",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              opacity: cardEntrance,
              padding: 34,
              transform: `translateY(${interpolate(cardEntrance, [0, 1], [24, 0])}px)`,
            }}
          >
            <div
              style={{
                color: theme.colors.muted,
                fontSize: 31,
                lineHeight: 1.32,
              }}
            >
              {scene.summary}
            </div>
            <div
              style={{
                color: theme.colors.text,
                fontFamily: theme.fonts.display,
                fontSize: 46,
                lineHeight: 1.1,
              }}
            >
              {scene.conclusion}
            </div>
            <div
              style={{
                color: theme.colors.accent,
                fontSize: 27,
                lineHeight: 1.28,
              }}
            >
              {scene.closingNote}
            </div>
          </div>
          <DiligenceQuestions questions={scene.questions} />
        </div>
      </Frame>
    );
  };

  return (
    <Series>
      <Series.Sequence durationInFrames={project.scenes.opening.durationInFrames}>
        <Audio src={sceneAudio("opening")} />
        <OpeningScene startFrame={sceneStartsInFrames.opening} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.whyMatters.durationInFrames}>
        <Audio src={sceneAudio("whyMatters")} />
        <WhyMattersScene startFrame={sceneStartsInFrames.whyMatters} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.traction.durationInFrames}>
        <Audio src={sceneAudio("traction")} />
        <TractionScene startFrame={sceneStartsInFrames.traction} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.attractive.durationInFrames}>
        <Audio src={sceneAudio("attractive")} />
        <AttractiveScene startFrame={sceneStartsInFrames.attractive} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.riskLegal.durationInFrames}>
        <Audio src={sceneAudio("riskLegal")} />
        <RiskLegalScene startFrame={sceneStartsInFrames.riskLegal} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.riskCounterparty.durationInFrames}>
        <Audio src={sceneAudio("riskCounterparty")} />
        <RiskCounterpartyScene startFrame={sceneStartsInFrames.riskCounterparty} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.riskGovernance.durationInFrames}>
        <Audio src={sceneAudio("riskGovernance")} />
        <RiskGovernanceScene startFrame={sceneStartsInFrames.riskGovernance} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.closing.durationInFrames}>
        <Audio src={sceneAudio("closing")} />
        <ClosingScene startFrame={sceneStartsInFrames.closing} />
      </Series.Sequence>
    </Series>
  );
};
