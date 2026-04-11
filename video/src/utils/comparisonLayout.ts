export const MAX_COMPARISON_CARD_PAGE_SIZE = 4;
export const MAX_COMPARISON_MATRIX_PAGE_SIZE = 4;
export const MAX_OVERVIEW_CARD_PAGE_SIZE = 6;

export type ComparisonPageTiming = {
  readonly pageFrame: number;
  readonly pageIndex: number;
};

export const spectrumLayout = {
  bottomPadding: 8,
  edgePadding: 12,
  horizontalGap: 16,
  labelCharacterLimit: 24,
  labelHorizontalPadding: 8,
  labelLaneGap: 18,
  labelLineHeight: 18,
  labelMaxWidth: 220,
  labelMarginTop: 6,
  markerSize: 28,
  minHeight: 84,
  trackHeight: 12,
  trackTop: 20,
} as const;

export const buildBalancedPages = <T>(
  items: readonly T[],
  maxItemsPerPage: number,
): readonly (readonly T[])[] => {
  if (items.length === 0) return [];
  if (maxItemsPerPage < 1) {
    throw new Error("maxItemsPerPage must be at least 1");
  }

  const pageCount = Math.ceil(items.length / maxItemsPerPage);
  const basePageSize = Math.floor(items.length / pageCount);
  const remainder = items.length % pageCount;
  const pages: T[][] = [];
  let start = 0;

  for (let pageIndex = 0; pageIndex < pageCount; pageIndex += 1) {
    const pageSize = basePageSize + (pageIndex < remainder ? 1 : 0);
    pages.push(items.slice(start, start + pageSize));
    start += pageSize;
  }

  return pages;
};

export const buildBalancedIndexPages = (
  itemCount: number,
  maxItemsPerPage: number,
): readonly (readonly number[])[] =>
  buildBalancedPages(
    Array.from({length: itemCount}, (_, index) => index),
    maxItemsPerPage,
  );

export const getComparisonGridColumns = (
  itemCount: number,
  maxColumns: number,
): number => {
  if (itemCount <= 1) return 1;
  if (itemCount === 2) return 2;
  if (itemCount === 4) return 2;
  return Math.min(maxColumns, itemCount);
};

export const getComparisonPageTiming = (
  frame: number,
  sceneDurationInFrames: number,
  pageCount: number,
): ComparisonPageTiming => {
  if (pageCount <= 1) {
    return {
      pageFrame: frame,
      pageIndex: 0,
    };
  }

  const safeDuration = Math.max(sceneDurationInFrames, pageCount);
  const pageStartFrames = Array.from(
    {length: pageCount},
    (_, index) => Math.floor((safeDuration * index) / pageCount),
  );
  const clampedFrame = Math.max(0, Math.min(frame, safeDuration - 1));
  const pageIndex =
    pageStartFrames.findIndex((pageStartFrame, index) => {
      const nextPageStartFrame = pageStartFrames[index + 1] ?? safeDuration;
      return clampedFrame >= pageStartFrame && clampedFrame < nextPageStartFrame;
    }) ?? pageCount - 1;
  const pageStartFrame = pageStartFrames[pageIndex] ?? 0;

  return {
    pageFrame: clampedFrame - pageStartFrame,
    pageIndex,
  };
};

export const getSpectrumPlacementLabel = (
  placement: {readonly slug: string; readonly displayLabel?: string},
  companyLabelsBySlug: ReadonlyMap<string, string>,
): string => placement.displayLabel ?? companyLabelsBySlug.get(placement.slug) ?? placement.slug;

export const estimateSpectrumLabelWidth = (label: string): number =>
  Math.min(
    spectrumLayout.labelMaxWidth,
    Math.ceil(
      label.length * 10.5 +
        Math.max(0, label.length - 1) * 0.9 +
        spectrumLayout.labelHorizontalPadding * 2,
    ),
  );

export const getDimensionSpectrumLayout = (
  placements: readonly {readonly label: string; readonly position: number}[],
  containerWidth: number,
): {
  readonly containerHeight: number;
  readonly labelLanes: readonly number[];
  readonly labelLeftOffsets: readonly number[];
  readonly labelWidths: readonly number[];
  readonly markerOffsets: readonly number[];
} => {
  const labelLanes = Array.from({length: placements.length}, () => 0);
  const labelLeftOffsets = Array.from({length: placements.length}, () => 0);
  const labelWidths = Array.from({length: placements.length}, () => 0);
  const markerOffsets = Array.from({length: placements.length}, () => 0);
  const safeContainerWidth = Math.max(containerWidth, spectrumLayout.labelMaxWidth);
  const markerHalfSize = spectrumLayout.markerSize / 2;
  const sortedPlacements = placements
    .map((placement, index) => ({
      index,
      labelWidth: estimateSpectrumLabelWidth(placement.label),
      position: Math.max(0, Math.min(1, placement.position)),
      markerOffset: Math.min(
        safeContainerWidth - markerHalfSize,
        Math.max(
          markerHalfSize,
          Math.max(0, Math.min(1, placement.position)) * safeContainerWidth,
        ),
      ),
    }))
    .map((placement) => {
      const maxLeft = Math.max(
        spectrumLayout.edgePadding,
        safeContainerWidth - spectrumLayout.edgePadding - placement.labelWidth,
      );

      return {
        ...placement,
        labelLeft: Math.min(
          maxLeft,
          Math.max(
            spectrumLayout.edgePadding,
            placement.markerOffset - placement.labelWidth / 2,
          ),
        ),
      };
    })
    .sort((a, b) => a.markerOffset - b.markerOffset);

  sortedPlacements.forEach((placement, sortedIndex) => {
    let lane = 0;

    for (let candidateIndex = sortedIndex - 1; candidateIndex >= 0; candidateIndex -= 1) {
      const candidate = sortedPlacements[candidateIndex]!;
      const overlapsHorizontally =
        placement.labelLeft <
          candidate.labelLeft + candidate.labelWidth + spectrumLayout.horizontalGap &&
        placement.labelLeft + placement.labelWidth + spectrumLayout.horizontalGap >
          candidate.labelLeft;

      if (overlapsHorizontally) {
        lane = Math.max(lane, labelLanes[candidate.index]! + 1);
      }
    }

    labelLanes[placement.index] = lane;
    labelLeftOffsets[placement.index] = placement.labelLeft;
    labelWidths[placement.index] = placement.labelWidth;
    markerOffsets[placement.index] = placement.markerOffset;
  });

  const maxLane = labelLanes.reduce((currentMax, lane) => Math.max(currentMax, lane), 0);
  const contentHeight =
    spectrumLayout.markerSize +
    spectrumLayout.labelMarginTop +
    spectrumLayout.labelLineHeight +
    maxLane * spectrumLayout.labelLaneGap +
    spectrumLayout.bottomPadding;

  return {
    containerHeight: Math.max(spectrumLayout.minHeight, contentHeight),
    labelLeftOffsets,
    labelLanes,
    labelWidths,
    markerOffsets,
  };
};
