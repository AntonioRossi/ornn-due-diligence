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
    "Memo [3], [4], [12] Dealroom, BusinessWire, Kikvadze Medium",
    "Memo [9], [13] model licenses, architecture docs",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [6], [8], [11] CertiK milestones, Bitget/PANews, CoinMarketCap",
    "Memo [4] BusinessWire Bitfury announcement",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [12], [14] Kikvadze cost-to-mine, competitive-landscape aggregation",
  ],
  riskLegal: [
    "Memo core risk 1 and core risk 2",
    "Memo [2], [4], [5], [18] tokenomics PDF, BusinessWire, whitepaper, SEC PoW analysis",
  ],
  riskCounterparty: [
    "Memo core risk 3 and core risk 4",
    "Memo [2], [6], [11] founders' allocation, CertiK pulse, CoinMarketCap price data",
  ],
  riskGovernance: [
    "Memo core risk 5 and core risk 6",
    "Memo [6], [7], [8] CertiK Centralization finding, gonkascan figures, traction self-attribution",
  ],
  closing: [
    "Memo bottom line",
    "Gonka DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
