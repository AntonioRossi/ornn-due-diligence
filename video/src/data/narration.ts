import narrationEntries from "./narration.json";
import {sceneOrder, type SceneId} from "./ornn-ic-v1";

export type NarrationEntry = {
  readonly sceneId: SceneId;
  readonly text: string;
  readonly voice?: "af_bella";
  readonly langCode?: "a";
  readonly speed?: number;
  readonly maxDurationFrames: number;
};

const sceneIdSet = new Set<string>(sceneOrder);

const typedEntries = narrationEntries.map((entry) => {
  if (!sceneIdSet.has(entry.sceneId)) {
    throw new Error(`Unknown narration scene id: ${entry.sceneId}`);
  }

  return entry as NarrationEntry;
});

export const narrationByScene = Object.freeze(
  typedEntries.reduce<Record<SceneId, NarrationEntry>>((acc, entry) => {
    acc[entry.sceneId] = entry;
    return acc;
  }, {} as Record<SceneId, NarrationEntry>),
);

export const narrationSceneIds = typedEntries.map((entry) => entry.sceneId);
