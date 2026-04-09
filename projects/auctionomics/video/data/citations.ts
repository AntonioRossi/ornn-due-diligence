import type {CitationMap} from "@shared/types";
import type {SceneId} from "./scenes";

export const sceneCitations: CitationMap<SceneId> = {
  opening: [
    "Memo recommendation",
    "Memo five structural issues",
    "Public-information IC memo, Apr 9 2026",
  ],
  whyMatters: [
    "Memo company snapshot",
    "Memo [1] partnership announcement, [2] Auctionomics founders",
    "Memo [7], [8] OneChronos $32M raise, Peterson appointment",
  ],
  traction: [
    "Memo visible-signal section",
    "Memo [6] Upstarts Media feature, [11] TechSpot coverage",
    "Memo [7], [8] OneChronos ATS volume and FINRA ranking",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [12], [13] Ornn and Silicon Data positioning",
  ],
  riskLegal: [
    "Memo core risk 1",
    "Memo [1], [6] partnership description, Milgrom advisory role",
  ],
  riskCounterparty: [
    "Memo core risk 2",
    "Memo [1], [9] off-exchange positioning, ATS registration scope",
  ],
  riskGovernance: [
    "Memo core risk 3 and core risk 4",
    "Memo [6], [11] no named participants, standardization unknown",
  ],
  closing: [
    "Memo bottom line",
    "Auctionomics DDQ first-call asks",
    "Memo partnership and traction gaps",
  ],
};
