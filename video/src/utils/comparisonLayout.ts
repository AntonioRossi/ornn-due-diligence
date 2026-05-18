export const MAX_COMPARISON_CARD_PAGE_SIZE = 4;
export const MAX_COMPARISON_MATRIX_PAGE_SIZE = 4;
export const MAX_OVERVIEW_CARD_PAGE_SIZE = 6;

export type ComparisonPageTiming = {
  readonly pageFrame: number;
  readonly pageIndex: number;
};

export const spectrumLayout = {
  bottomPadding: 8,
  collisionThreshold: 0.12,
  labelLaneGap: 18,
  labelLineHeight: 18,
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
  const pageIndex = Math.min(pageCount - 1, Math.floor((frame / safeDuration) * pageCount));
  const pageStartFrame = Math.floor((safeDuration * pageIndex) / pageCount);

  return {
    pageFrame: Math.max(0, frame - pageStartFrame),
    pageIndex,
  };
};

export const getDimensionSpectrumLayout = (
  placements: readonly {readonly position: number}[],
): {
  readonly containerHeight: number;
  readonly labelLanes: readonly number[];
} => {
  const labelLanes = Array.from({length: placements.length}, () => 0);
  const sortedPlacements = placements
    .map((placement, index) => ({
      index,
      position: Math.max(0, Math.min(1, placement.position)),
    }))
    .sort((a, b) => a.position - b.position);

  sortedPlacements.forEach((placement, sortedIndex) => {
    let lane = 0;

    for (let candidateIndex = sortedIndex - 1; candidateIndex >= 0; candidateIndex -= 1) {
      const candidate = sortedPlacements[candidateIndex]!;
      if (placement.position - candidate.position >= spectrumLayout.collisionThreshold) {
        break;
      }
      lane = Math.max(lane, labelLanes[candidate.index]! + 1);
    }

    labelLanes[placement.index] = lane;
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
    labelLanes,
  };
};
