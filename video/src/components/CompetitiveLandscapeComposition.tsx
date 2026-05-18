import {
  Audio,
  interpolate,
  Series,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type {CitationMap, ComparisonSceneId, ResolvedNarrationEntry} from "@shared/types";
import type {ComparisonProject} from "@shared/types/comparison";
import {theme} from "@shared/theme";
import {
  buildBalancedPages,
  getComparisonGridColumns,
  getComparisonPageTiming,
  MAX_OVERVIEW_CARD_PAGE_SIZE,
} from "@shared/utils/comparisonLayout";
import {cardGap} from "@shared/utils/layout";
import {CitationFooter} from "./CitationFooter";
import {ComparisonMatrix} from "./ComparisonMatrix";
import {DimensionSpectrum} from "./DimensionSpectrum";
import {Frame} from "./Frame";
import {ParallelTimeline} from "./ParallelTimeline";
import {SideBySideCards} from "./SideBySideCards";

type SceneProps = {
  readonly startFrame: number;
};

type CompetitiveLandscapeCompositionProps = {
  readonly projectSlug: string;
  readonly project: ComparisonProject;
  readonly sceneCitations: CitationMap<ComparisonSceneId>;
  readonly narrationByScene: Record<
    ComparisonSceneId,
    ResolvedNarrationEntry<ComparisonSceneId>
  >;
  readonly sceneStartsInFrames: Record<ComparisonSceneId, number>;
  readonly totalDurationInFrames: number;
  readonly titleSizes?: Partial<Record<ComparisonSceneId, number>>;
};

export const CompetitiveLandscapeComposition: React.FC<
  CompetitiveLandscapeCompositionProps
> = ({
  projectSlug,
  project,
  sceneCitations,
  narrationByScene,
  sceneStartsInFrames,
  totalDurationInFrames,
  titleSizes,
}) => {
  const sceneAudio = (sceneId: ComparisonSceneId) =>
    staticFile(`audio/${projectSlug}/${narrationByScene[sceneId].sceneId}.wav`);

  const resolvedTitleSizes: Record<ComparisonSceneId, number> = {
    overview: 78,
    approaches: 72,
    traction: 72,
    riskComparison: 68,
    gatingIssues: 68,
    positioning: 68,
    recommendation: 70,
    ...titleSizes,
  };

  const useSceneProgress = (startFrame: number) => {
    const frame = useCurrentFrame();
    return (startFrame + frame + 1) / totalDurationInFrames;
  };

  // ---------------------------------------------------------------------------
  // Scene components
  // ---------------------------------------------------------------------------

  const OverviewScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.overview;
    const progress = useSceneProgress(startFrame);
    const companyPages = buildBalancedPages(scene.companies, MAX_OVERVIEW_CARD_PAGE_SIZE);
    const {pageFrame, pageIndex: companyPageIndex} = getComparisonPageTiming(
      frame,
      scene.durationInFrames,
      companyPages.length,
    );
    const visibleCompanies = companyPages[companyPageIndex] ?? scene.companies;
    const overviewColumns = getComparisonGridColumns(visibleCompanies.length, 3);
    const isDenseOverview = visibleCompanies.length >= 5;

    const bodyEntrance = spring({
      fps,
      frame,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.overview}
        transitionVariant="slide-right"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.overview} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 28}}>
          {companyPages.length > 1 ? (
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
              Page {companyPageIndex + 1} / {companyPages.length}
            </div>
          ) : null}
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 30,
              lineHeight: 1.3,
              opacity: bodyEntrance,
              transform: `translateY(${interpolate(bodyEntrance, [0, 1], [16, 0])}px)`,
            }}
          >
            {scene.body}
          </div>
          <div
            style={{
              display: "grid",
              gap: cardGap,
              gridTemplateColumns: `repeat(${overviewColumns}, minmax(0, 1fr))`,
            }}
          >
            {visibleCompanies.map((company, index) => {
              const entrance = spring({
                fps,
                frame: pageFrame - 8 - index * 4,
                config: {damping: 220, mass: 0.75, stiffness: 180},
                durationInFrames: 28,
              });
              return (
                <div
                  key={company.slug}
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `1px solid ${theme.colors.border}`,
                    borderRadius: 20,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minHeight: isDenseOverview ? 170 : 0,
                    opacity: entrance,
                    padding: isDenseOverview ? 20 : 22,
                    transform: `translateY(${interpolate(entrance, [0, 1], [20, 0])}px)`,
                  }}
                >
                  <div
                    style={{
                      color: theme.colors.accent,
                      fontFamily: theme.fonts.mono,
                      fontSize: isDenseOverview ? 16 : 18,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {company.label}
                  </div>
                  <div
                    style={{
                      color: theme.colors.text,
                      fontSize: isDenseOverview ? 21 : 23,
                      lineHeight: 1.25,
                    }}
                  >
                    {company.approach}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Frame>
    );
  };

  const ApproachesScene: React.FC<SceneProps> = ({startFrame}) => {
    const scene = project.scenes.approaches;
    const progress = useSceneProgress(startFrame);
    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.approaches}
        transitionVariant="slide-up"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.approaches} />}
      >
        <SideBySideCards
          cards={scene.cards}
          sceneDurationInFrames={scene.durationInFrames}
        />
      </Frame>
    );
  };

  const TractionScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.traction;
    const progress = useSceneProgress(startFrame);

    const introEntrance = spring({
      fps,
      frame,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.traction}
        transitionVariant="diagonal"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.traction} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 18, flex: 1, minHeight: 0}}>
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 25,
              lineHeight: 1.3,
              opacity: introEntrance,
            }}
          >
            {scene.intro}
          </div>
          <ParallelTimeline
            lanes={scene.lanes}
            sceneDurationInFrames={scene.durationInFrames}
          />
        </div>
      </Frame>
    );
  };

  const RiskComparisonScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.riskComparison;
    const progress = useSceneProgress(startFrame);

    const introEntrance = spring({
      fps,
      frame,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.riskComparison}
        transitionVariant="shutter"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.riskComparison} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 18}}>
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 25,
              lineHeight: 1.3,
              opacity: introEntrance,
            }}
          >
            {scene.intro}
          </div>
          <ComparisonMatrix
            headers={scene.matrix.headers}
            rows={scene.matrix.rows}
            sceneDurationInFrames={scene.durationInFrames}
          />
        </div>
      </Frame>
    );
  };

  const GatingIssuesScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.gatingIssues;
    const progress = useSceneProgress(startFrame);

    const introEntrance = spring({
      fps,
      frame,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.gatingIssues}
        transitionVariant="slide-right"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.gatingIssues} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 18}}>
          <div
            style={{
              color: theme.colors.muted,
              fontSize: 25,
              lineHeight: 1.3,
              opacity: introEntrance,
            }}
          >
            {scene.intro}
          </div>
          <ComparisonMatrix
            headers={scene.matrix.headers}
            rows={scene.matrix.rows}
            sceneDurationInFrames={scene.durationInFrames}
          />
        </div>
      </Frame>
    );
  };

  const PositioningScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.positioning;
    const progress = useSceneProgress(startFrame);

    const summaryEntrance = spring({
      fps,
      frame: frame - 20,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.positioning}
        transitionVariant="slide-up"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.positioning} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 32}}>
          {scene.spectrums.map((spectrum) => (
            <DimensionSpectrum
              key={spectrum.dimension}
              companies={project.companies}
              {...spectrum}
            />
          ))}
          <div
            style={{
              backgroundColor: theme.colors.surfaceStrong,
              border: `1px solid ${theme.colors.border}`,
              borderRadius: 20,
              color: theme.colors.text,
              fontSize: 25,
              lineHeight: 1.3,
              opacity: summaryEntrance,
              padding: 24,
            }}
          >
            {scene.summary}
          </div>
        </div>
      </Frame>
    );
  };

  const RecommendationScene: React.FC<SceneProps> = ({startFrame}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const scene = project.scenes.recommendation;
    const progress = useSceneProgress(startFrame);

    const noteEntrance = spring({
      fps,
      frame: frame - 16,
      config: {damping: 200, mass: 0.8, stiffness: 170},
      durationInFrames: 28,
    });

    return (
      <Frame
        sectionLabel={scene.sectionLabel}
        title={scene.title}
        titleSize={resolvedTitleSizes.recommendation}
        transitionVariant="diagonal"
        progress={progress}
        footer={<CitationFooter items={sceneCitations.recommendation} />}
      >
        <div style={{display: "flex", flexDirection: "column", gap: 22}}>
          <SideBySideCards
            cards={scene.cards}
            sceneDurationInFrames={scene.durationInFrames}
          />
          <div
            style={{
              color: theme.colors.accent,
              fontFamily: theme.fonts.display,
              fontSize: 28,
              lineHeight: 1.25,
              opacity: noteEntrance,
              transform: `translateY(${interpolate(noteEntrance, [0, 1], [12, 0])}px)`,
            }}
          >
            {scene.closingNote}
          </div>
        </div>
      </Frame>
    );
  };

  // ---------------------------------------------------------------------------
  // Composition sequence
  // ---------------------------------------------------------------------------

  return (
    <Series>
      <Series.Sequence durationInFrames={project.scenes.overview.durationInFrames}>
        <Audio src={sceneAudio("overview")} />
        <OverviewScene startFrame={sceneStartsInFrames.overview} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.approaches.durationInFrames}>
        <Audio src={sceneAudio("approaches")} />
        <ApproachesScene startFrame={sceneStartsInFrames.approaches} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.traction.durationInFrames}>
        <Audio src={sceneAudio("traction")} />
        <TractionScene startFrame={sceneStartsInFrames.traction} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.riskComparison.durationInFrames}>
        <Audio src={sceneAudio("riskComparison")} />
        <RiskComparisonScene startFrame={sceneStartsInFrames.riskComparison} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.gatingIssues.durationInFrames}>
        <Audio src={sceneAudio("gatingIssues")} />
        <GatingIssuesScene startFrame={sceneStartsInFrames.gatingIssues} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.positioning.durationInFrames}>
        <Audio src={sceneAudio("positioning")} />
        <PositioningScene startFrame={sceneStartsInFrames.positioning} />
      </Series.Sequence>
      <Series.Sequence durationInFrames={project.scenes.recommendation.durationInFrames}>
        <Audio src={sceneAudio("recommendation")} />
        <RecommendationScene startFrame={sceneStartsInFrames.recommendation} />
      </Series.Sequence>
    </Series>
  );
};
