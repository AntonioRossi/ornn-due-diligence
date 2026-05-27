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
    "Memo [1], [2], [3] Osuri profile, what-is-akash docs, Year in Review",
    "Memo [3], [4] customer integrations, BME activation",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [3], [4], [5] Year in Review, Q1 2026 report, CMC market data",
    "Memo [6] Blockeden Cosmos-to-Solana migration",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [3], [6] Grayscale recognition, Cosmos exodus pattern",
  ],
  riskLegal: [
    "Memo core risk 1 and core risk 2",
    "Memo [6] AEP-79 migration, Starbonds framework",
    "Memo [4] BME activation March 23 2026",
  ],
  riskCounterparty: [
    "Memo core risk 3 and core risk 4",
    "Memo [2] AKT token page CEX listings",
    "Memo [5] CMC market position #127",
  ],
  riskGovernance: [
    "Memo core risk 5 and core risk 6",
    "Memo [5] CMC price vs ATH",
    "Memo [6] execution-load forum analysis",
  ],
  closing: [
    "Memo bottom line",
    "Akash DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
