import type {CitationMap} from "@shared/types";
import type {SceneId} from "./scenes";

export const sceneCitations: CitationMap<SceneId> = {
  opening: [
    "Memo recommendation",
    "Memo six structural issues",
    "Public-information IC memo, May 26 2026",
  ],
  whyMatters: [
    "Memo company snapshot",
    "Memo [1], [2], [11] Solana DePIN architecture, company origins, IDE litepaper",
    "Memo [3], [8], [9] CMC, Reuters, Multicoin lead-investor thesis",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [3], [5], [7] CMC market data, The Block Shadid resignation, 2025 Year in Review",
    "Memo [11] IDE litepaper Q2 2026 timing and CEL stress tests",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [12] competitive landscape vs Bittensor, Gonka, Akash, Render",
  ],
  riskLegal: [
    "Memo core risk 1",
    "Memo [5], [6], [13] The Block resignation, Decrypt O.XYZ investigation, Investigations.org HIGH RISK",
  ],
  riskCounterparty: [
    "Memo core risk 2 and core risk 3",
    "Memo [11], [7], [13] IDE litepaper, Year-in-Review verified figures, inflated-supply allegation",
  ],
  riskGovernance: [
    "Memo core risk 4 and core risk 6",
    "Memo [3], [11], [7] CMC vs Year-in-Review CEO discrepancy, IDE litepaper opacity",
  ],
  closing: [
    "Memo bottom line",
    "io.net DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
