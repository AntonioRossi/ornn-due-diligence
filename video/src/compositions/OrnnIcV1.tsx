import {
  Audio,
  interpolate,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {CitationFooter} from "../components/CitationFooter";
import {DiligenceQuestions} from "../components/DiligenceQuestions";
import {Frame} from "../components/Frame";
import {RiskPanel} from "../components/RiskPanel";
import {ThesisCard} from "../components/ThesisCard";
import {ThreeLayerModel} from "../components/ThreeLayerModel";
import {Timeline} from "../components/Timeline";
import {sceneCitations} from "../data/citations";
import {narrationByScene} from "../data/narration";
import {
  ornnIcV1,
  sceneStartsInFrames,
  totalDurationInFrames,
} from "../data/ornn-ic-v1";
import {cardGap, cardWidth} from "../utils/layout";
import {fadeIn, riseIn} from "../utils/timing";
import {theme} from "../theme";

type SceneProps = {
  readonly startFrame: number;
};

const sceneAudio = (sceneId: keyof typeof narrationByScene) =>
  staticFile(`audio/${narrationByScene[sceneId].sceneId}.wav`);

const useSceneProgress = (startFrame: number) => {
  const frame = useCurrentFrame();
  return (startFrame + frame + 1) / totalDurationInFrames;
};

const OpeningScene: React.FC<SceneProps> = ({startFrame}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const scene = ornnIcV1.scenes.opening;
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
      titleSize={110}
      titleMaxWidth={720}
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
  const scene = ornnIcV1.scenes.whyMatters;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={78}
      transitionVariant="shutter"
      progress={progress}
      footer={<CitationFooter items={sceneCitations.whyMatters} />}
    >
      <ThesisCard
        headline="If compute becomes financeable infrastructure, benchmark ownership matters."
        body={scene.body}
        points={scene.points}
        accentBlock={scene.accentBlock}
      />
    </Frame>
  );
};

const TractionScene: React.FC<SceneProps> = ({startFrame}) => {
  const scene = ornnIcV1.scenes.traction;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={72}
      transitionVariant="slide-up"
      progress={progress}
      footer={<CitationFooter items={sceneCitations.traction} />}
    >
      <Timeline intro={scene.intro} events={scene.events} stats={scene.stats} />
    </Frame>
  );
};

const AttractiveScene: React.FC<SceneProps> = ({startFrame}) => {
  const scene = ornnIcV1.scenes.attractive;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={72}
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
  const scene = ornnIcV1.scenes.riskLegal;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={68}
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
  const scene = ornnIcV1.scenes.riskCounterparty;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={68}
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
  const scene = ornnIcV1.scenes.riskGovernance;
  const progress = useSceneProgress(startFrame);

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={68}
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
  const scene = ornnIcV1.scenes.closing;
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
      titleSize={70}
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

export const OrnnIcV1: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.opening.durationInFrames}>
        <Audio src={sceneAudio("opening")} />
        <OpeningScene startFrame={sceneStartsInFrames.opening} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.whyMatters.durationInFrames}>
        <Audio src={sceneAudio("whyMatters")} />
        <WhyMattersScene startFrame={sceneStartsInFrames.whyMatters} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.traction.durationInFrames}>
        <Audio src={sceneAudio("traction")} />
        <TractionScene startFrame={sceneStartsInFrames.traction} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.attractive.durationInFrames}>
        <Audio src={sceneAudio("attractive")} />
        <AttractiveScene startFrame={sceneStartsInFrames.attractive} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskLegal.durationInFrames}>
        <Audio src={sceneAudio("riskLegal")} />
        <RiskLegalScene startFrame={sceneStartsInFrames.riskLegal} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskCounterparty.durationInFrames}>
        <Audio src={sceneAudio("riskCounterparty")} />
        <RiskCounterpartyScene startFrame={sceneStartsInFrames.riskCounterparty} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskGovernance.durationInFrames}>
        <Audio src={sceneAudio("riskGovernance")} />
        <RiskGovernanceScene startFrame={sceneStartsInFrames.riskGovernance} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.closing.durationInFrames}>
        <Audio src={sceneAudio("closing")} />
        <ClosingScene startFrame={sceneStartsInFrames.closing} />
      </Series.Sequence>
    </Series>
  );
};
