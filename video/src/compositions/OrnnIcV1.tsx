import {interpolate, spring, Series, useCurrentFrame, useVideoConfig} from "remotion";
import {CitationFooter} from "../components/CitationFooter";
import {DiligenceQuestions} from "../components/DiligenceQuestions";
import {Frame} from "../components/Frame";
import {RiskPanel} from "../components/RiskPanel";
import {ThesisCard} from "../components/ThesisCard";
import {ThreeLayerModel} from "../components/ThreeLayerModel";
import {Timeline} from "../components/Timeline";
import {sceneCitations} from "../data/citations";
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
  const issuesEntrance = spring({
    fps,
    frame: frame - 18,
    config: {
      damping: 220,
      mass: 0.75,
      stiffness: 180,
    },
    durationInFrames: 28,
  });

  return (
    <Frame
      sectionLabel={scene.sectionLabel}
      title={scene.title}
      titleSize={136}
      titleMaxWidth={720}
      progress={progress}
      footer={<CitationFooter items={sceneCitations.opening} />}
    >
      <div style={{display: "flex", flexDirection: "column", gap: 30}}>
        <div
          style={{
            color: theme.colors.muted,
            display: "flex",
            fontFamily: theme.fonts.mono,
            fontSize: 22,
            gap: 18,
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
        <ThesisCard headline={scene.recommendation} body={scene.body} />
        <div
          style={{
            columnGap: 20,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            opacity: issuesEntrance,
            rowGap: 20,
            transform: `translateY(${interpolate(issuesEntrance, [0, 1], [18, 0])}px)`,
          }}
        >
          {scene.gatingIssues.map((issue, index) => {
            const issueEntrance = spring({
              fps,
              frame: frame - 22 - index * 4,
              config: {
                damping: 220,
                mass: 0.8,
                stiffness: 180,
              },
              durationInFrames: 24,
            });

            return (
              <div
                key={issue.label}
                style={{
                  backgroundColor: theme.colors.surface,
                  border: `1px solid ${theme.colors.border}`,
                  borderRadius: 22,
                  boxShadow: "0 18px 50px rgba(0, 0, 0, 0.18)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  minHeight: 160,
                  opacity: issueEntrance,
                  padding: 24,
                  transform: `translateY(${interpolate(issueEntrance, [0, 1], [22, 0])}px)`,
                }}
              >
                <div
                  style={{
                    color: theme.colors.accent,
                    fontFamily: theme.fonts.mono,
                    fontSize: 18,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {issue.label}
                </div>
                <div
                  style={{
                    color: theme.colors.text,
                    fontSize: 28,
                    lineHeight: 1.24,
                  }}
                >
                  {issue.body}
                </div>
              </div>
            );
          })}
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
      titleSize={86}
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
      titleSize={76}
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
      titleSize={80}
      progress={progress}
      footer={<CitationFooter items={sceneCitations.attractive} />}
    >
      <ThreeLayerModel
        layers={scene.layers}
        summary={scene.summary}
        note={scene.note}
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
      titleSize={74}
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
      titleSize={74}
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
      titleSize={74}
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
      titleSize={78}
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
        <OpeningScene startFrame={sceneStartsInFrames.opening} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.whyMatters.durationInFrames}>
        <WhyMattersScene startFrame={sceneStartsInFrames.whyMatters} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.traction.durationInFrames}>
        <TractionScene startFrame={sceneStartsInFrames.traction} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.attractive.durationInFrames}>
        <AttractiveScene startFrame={sceneStartsInFrames.attractive} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskLegal.durationInFrames}>
        <RiskLegalScene startFrame={sceneStartsInFrames.riskLegal} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskCounterparty.durationInFrames}>
        <RiskCounterpartyScene startFrame={sceneStartsInFrames.riskCounterparty} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.riskGovernance.durationInFrames}>
        <RiskGovernanceScene startFrame={sceneStartsInFrames.riskGovernance} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ornnIcV1.scenes.closing.durationInFrames}>
        <ClosingScene startFrame={sceneStartsInFrames.closing} />
      </Series.Sequence>
    </Series>
  );
};
