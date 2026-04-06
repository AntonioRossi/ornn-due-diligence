import type {SceneId} from "./ornn-ic-v1";

export const sceneCitations: Record<SceneId, string[]> = {
  opening: [
    "Memo recommendation",
    "Memo eight unresolved issues",
    "Public-information IC memo, Apr 6 2026",
  ],
  whyMatters: [
    "Memo company snapshot",
    "Memo market-structure thesis",
    "Memo [2] seed financing",
  ],
  traction: [
    "Memo visible-signal section",
    "Memo [1] Bloomberg / 400+ self-reported access",
    "Memo [3], [4], [5] Hydra, Architect, Kalshi",
  ],
  attractive: [
    "Memo competitive context",
    "Memo team and operating-model risk",
  ],
  riskLegal: [
    "Memo core risk 1",
    "Memo [6], [7], [15] marketing, terms, threshold path",
  ],
  riskCounterparty: [
    "Memo core risk 3",
    "Memo [2], [7] seed scale, swap risk disclosure, conflicts gap",
  ],
  riskGovernance: [
    "Memo core risk 2",
    "Memo [1], [7], [8] OCPI disclosure gaps, IOSCO gap, benchmark competition",
  ],
  closing: [
    "Memo bottom line",
    "Revised DDQ first-call questions",
    "Memo valuation caveat",
  ],
};
