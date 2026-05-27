import type {CitationMap} from "@shared/types";
import type {SceneId} from "./scenes";

export const sceneCitations: CitationMap<SceneId> = {
  opening: [
    "Memo recommendation",
    "Memo five structural issues",
    "Public-information IC memo, May 27 2026",
  ],
  whyMatters: [
    "Memo company snapshot",
    "Memo [1], [2], [7] rigetti.com, what-we-build, Kulkarni profile",
    "Memo [6] $100M DoC LOI announcement May 21 2026",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [3], [4] Q1 2026 results, Q4/FY2025 results",
    "Memo [13], [14], [6] Quanta investment, $350M ATM, DoC LOI",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [12] competitive landscape IQT Research",
  ],
  riskLegal: [
    "Memo core risk 1 — valuation and revenue decline",
    "Memo [11] Motley Fool bear thesis May 19 2026",
    "Memo [10], [11] CMC stock data, 4-year revenue decline",
  ],
  riskCounterparty: [
    "Memo core risk 2 — dilution and capital markets",
    "Memo [4], [3] FY25 cash flow statement, Q1 2026 balance sheet",
    "Memo [14] $350M ATM completion June 11 2025",
  ],
  riskGovernance: [
    "Memo core risk 3 — competition and fidelity",
    "Memo [5] 108-qubit system fidelity update Jan 9 2026",
    "Memo [12] IBM Heron R2 quantum advantage 2026 target",
  ],
  closing: [
    "Memo bottom line",
    "Rigetti DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
