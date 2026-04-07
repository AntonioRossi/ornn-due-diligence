import narrationSchemaJson from "@shared/schemas/narration-manifest.schema.json"
import type {ResolvedNarrationEntry} from "@shared/types"

type ScalarType = "string" | "number" | "integer"

type FieldSchema = {
  readonly type: ScalarType
  readonly minLength?: number
  readonly minimum?: number
  readonly exclusiveMinimum?: number
  readonly const?: string | number
}

type NarrationManifestSchema = {
  readonly type: "array"
  readonly item: {
    readonly type: "object"
    readonly required: Record<string, FieldSchema>
    readonly optional: Record<string, FieldSchema>
    readonly defaults?: Record<string, string | number>
    readonly additionalProperties: boolean
  }
}

const narrationSchema = narrationSchemaJson as NarrationManifestSchema

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

const validateField = (
  value: unknown,
  fieldName: string,
  fieldSchema: FieldSchema,
  entryIndex: number,
) => {
  const prefix = `Narration entry ${entryIndex + 1} field "${fieldName}"`

  if (fieldSchema.type === "string") {
    if (typeof value !== "string") {
      throw new Error(`${prefix} must be a string`)
    }
    if (fieldSchema.minLength !== undefined && value.trim().length < fieldSchema.minLength) {
      throw new Error(`${prefix} must be at least ${fieldSchema.minLength} characters`)
    }
  }

  if (fieldSchema.type === "number") {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new Error(`${prefix} must be a number`)
    }
  }

  if (fieldSchema.type === "integer") {
    if (!Number.isInteger(value)) {
      throw new Error(`${prefix} must be an integer`)
    }
  }

  if (typeof value === "number") {
    if (fieldSchema.minimum !== undefined && value < fieldSchema.minimum) {
      throw new Error(`${prefix} must be at least ${fieldSchema.minimum}`)
    }
    if (fieldSchema.exclusiveMinimum !== undefined && value <= fieldSchema.exclusiveMinimum) {
      throw new Error(`${prefix} must be greater than ${fieldSchema.exclusiveMinimum}`)
    }
  }

  if (fieldSchema.const !== undefined && value !== fieldSchema.const) {
    throw new Error(`${prefix} must equal ${JSON.stringify(fieldSchema.const)}`)
  }
}

export const validateNarrationManifest = <S extends string>(
  entries: unknown,
  sceneOrder: readonly S[],
): readonly ResolvedNarrationEntry<S>[] => {
  if (!Array.isArray(entries)) {
    throw new Error("Narration manifest must be a JSON array")
  }

  const {required, optional, defaults = {}, additionalProperties} = narrationSchema.item
  const knownKeys = new Set([...Object.keys(required), ...Object.keys(optional)])

  const normalizedEntries = entries.map((entry, entryIndex) => {
    if (!isRecord(entry)) {
      throw new Error(`Narration entry ${entryIndex + 1} must be an object`)
    }

    if (!additionalProperties) {
      for (const key of Object.keys(entry)) {
        if (!knownKeys.has(key)) {
          throw new Error(`Narration entry ${entryIndex + 1} has unknown field "${key}"`)
        }
      }
    }

    const normalized: Record<string, unknown> = {}

    for (const [fieldName, fieldSchema] of Object.entries(required)) {
      if (!(fieldName in entry)) {
        throw new Error(`Narration entry ${entryIndex + 1} is missing required field "${fieldName}"`)
      }
      const value = entry[fieldName]
      validateField(value, fieldName, fieldSchema, entryIndex)
      normalized[fieldName] = typeof value === "string" ? value.trim() : value
    }

    for (const [fieldName, fieldSchema] of Object.entries(optional)) {
      const rawValue = fieldName in entry ? entry[fieldName] : defaults[fieldName]
      if (rawValue === undefined) {
        continue
      }
      validateField(rawValue, fieldName, fieldSchema, entryIndex)
      normalized[fieldName] = typeof rawValue === "string" ? rawValue.trim() : rawValue
    }

    return normalized as unknown as ResolvedNarrationEntry<S>
  })

  if (normalizedEntries.length !== sceneOrder.length) {
    throw new Error(
      `Narration manifest has ${normalizedEntries.length} entries, expected ${sceneOrder.length}`,
    )
  }

  const seenSceneIds = new Set<string>()

  for (const [index, entry] of normalizedEntries.entries()) {
    if (seenSceneIds.has(entry.sceneId)) {
      throw new Error(`Duplicate narration scene id: ${entry.sceneId}`)
    }
    seenSceneIds.add(entry.sceneId)

    const expectedSceneId = sceneOrder[index]
    if (entry.sceneId !== expectedSceneId) {
      throw new Error(
        `Narration entry ${index + 1} must use scene id "${expectedSceneId}", got "${entry.sceneId}"`,
      )
    }
  }

  return Object.freeze(normalizedEntries)
}
