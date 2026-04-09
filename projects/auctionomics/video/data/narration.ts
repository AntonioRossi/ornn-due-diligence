import type {ResolvedNarrationEntry} from "@shared/types"
import {validateNarrationManifest} from "@shared/validation/narration"
import narrationEntries from "./narration.json"
import {sceneOrder, type SceneId} from "./scenes"

type NarrationEntry = ResolvedNarrationEntry<SceneId>

const typedEntries = validateNarrationManifest<SceneId>(narrationEntries, sceneOrder)

export const narrationByScene = Object.freeze(
  typedEntries.reduce<Record<SceneId, NarrationEntry>>((acc, entry) => {
    acc[entry.sceneId] = entry
    return acc
  }, {} as Record<SceneId, NarrationEntry>),
)
