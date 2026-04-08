type SceneWithDuration = {
  readonly durationInFrames: number;
};

type SceneMap = Record<string, SceneWithDuration>;

type SceneId<TScenes extends SceneMap> = Extract<keyof TScenes, string>;

const validateSceneOrder = <TScenes extends SceneMap>(
  scenes: TScenes,
  sceneOrderJson: unknown,
): readonly SceneId<TScenes>[] => {
  if (!Array.isArray(sceneOrderJson)) {
    throw new Error("scene-order.json must be an array.");
  }

  const knownSceneIds = Object.keys(scenes) as SceneId<TScenes>[];
  const knownSceneIdSet = new Set(knownSceneIds);
  const seenSceneIds = new Set<SceneId<TScenes>>();
  const orderedSceneIds = sceneOrderJson.map((sceneId) => {
    if (typeof sceneId !== "string" || sceneId.length === 0) {
      throw new Error("scene-order.json entries must be non-empty strings.");
    }
    if (!knownSceneIdSet.has(sceneId as SceneId<TScenes>)) {
      throw new Error(`scene-order.json references unknown scene id: ${sceneId}`);
    }
    if (seenSceneIds.has(sceneId as SceneId<TScenes>)) {
      throw new Error(`scene-order.json contains duplicate scene id: ${sceneId}`);
    }

    seenSceneIds.add(sceneId as SceneId<TScenes>);
    return sceneId as SceneId<TScenes>;
  });

  if (orderedSceneIds.length !== knownSceneIds.length) {
    throw new Error(
      `scene-order.json has ${orderedSceneIds.length} scene ids, expected ${knownSceneIds.length}.`,
    );
  }

  return orderedSceneIds;
};

export const buildSceneTimeline = <TScenes extends SceneMap>(
  scenes: TScenes,
  sceneOrderJson: unknown,
) => {
  const sceneOrder = validateSceneOrder(scenes, sceneOrderJson);
  const sceneStartsInFrames = {} as Record<SceneId<TScenes>, number>;

  let frameCursor = 0;

  for (const sceneId of sceneOrder) {
    sceneStartsInFrames[sceneId] = frameCursor;
    frameCursor += scenes[sceneId].durationInFrames;
  }

  return {
    sceneOrder,
    sceneStartsInFrames,
    totalDurationInFrames: frameCursor,
  };
};
