import type {CitationMap} from "@shared/types";
import type {SceneId} from "./scenes";

export const sceneCitations: CitationMap<SceneId> = {
  opening: [
    "Memo recommendation",
    "Memo four structural issues",
    "Public-information IC memo, Apr 7 2026",
  ],
  whyMatters: [
    "Memo company snapshot",
    "Memo benchmark-plus-marketplace thesis",
    "Memo [1], [7], [8] seed, homepage, index product page",
  ],
  traction: [
    "Memo visible-signal section",
    "Memo [3], [6], [9], [13] IEEE, AIthority, Refinitiv, WatersTechnology",
    "Memo [7], [15] portal, API, and methodology blog claims",
  ],
  attractive: [
    "Memo competitive context",
    "Memo team and operating-model risk",
  ],
  riskLegal: [
    "Memo core risk 1",
    "Memo [12], [18], [19] forward contracts, terms, no-license posture",
  ],
  riskCounterparty: [
    "Memo core risk 3",
    "Memo [4], [5], [7], [8] CX, DRW, Jump, independence claim",
  ],
  riskGovernance: [
    "Memo core risk 2 and core risk 4",
    "Memo [8], [15] methodology and validator disclosure gaps",
  ],
  closing: [
    "Memo bottom line",
    "Silicon Data DDQ first-call asks",
    "Memo funding and valuation caveat",
  ],
};
