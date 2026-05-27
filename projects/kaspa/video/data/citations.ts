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
    "Memo [1], [9], [10] kaspa.org, ByteTree, DAGLabs wiki",
    "Memo [3], [4], [5] Toccata roadmap, Igra mainnet, Sigma Prime audit",
  ],
  traction: [
    "Memo what-appears-real-today section",
    "Memo [7], [8] Our Crypto Talk roadmap, CMC market data",
    "Memo [11], [17], [18] Igra tokenomics, mainnet launch, ecosystem",
  ],
  attractive: [
    "Memo competitive context",
    "Memo [9], [15] IP-rights waiver, CrowdFund Insider critique",
  ],
  riskLegal: [
    "Memo core risk 1 — legal and corporate counterparty",
    "Memo [13] Kaspa Ecosystem Foundation page",
    "Memo [10] DAGLabs dissolution context",
  ],
  riskCounterparty: [
    "Memo core risk 2 — bridge and smart contract",
    "Memo [12] Igra Litepaper three-tier bridging",
    "Memo [5] Sigma Prime audit scope",
  ],
  riskGovernance: [
    "Memo core risk 3 — market and liquidity",
    "Memo [14] Bitget Academy exchange status",
    "Memo [8] CMC price vs ATH",
  ],
  closing: [
    "Memo bottom line",
    "Kaspa DDQ first-call asks",
    "Memo P0 gating items",
  ],
};
