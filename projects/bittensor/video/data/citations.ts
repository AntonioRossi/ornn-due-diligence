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
    "Memo [1], [2], [11] Paradigm, emissions docs, subnet docs",
    "Memo [4], [8] founder bios, Foundation framing",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [10], [9] Messari milestone tracker, CoinMarketCap live data",
    "Memo [8] Yellow research Corcel / Macrocosmos",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [12] competitive landscape vs Gensyn / Gonka",
  ],
  riskLegal: [
    "Memo core risk 2",
    "Memo [8], [14] Yellow Howey framing, REX-Osprey SEC filing",
    "Memo [10] Grayscale Spot ETF S-1 December 30, 2025",
  ],
  riskCounterparty: [
    "Memo core risk 1",
    "Memo [8] Yellow validator-concentration analysis",
    "Memo [3] governance docs Triumvirate-Senate model",
  ],
  riskGovernance: [
    "Memo core risk 3 and core risk 5",
    "Memo [10] Messari audit posture; PyPi breach 32k TAO",
    "Memo [2] Taoflow / PoC v2 untested redesigns",
  ],
  closing: [
    "Memo bottom line",
    "Bittensor DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
