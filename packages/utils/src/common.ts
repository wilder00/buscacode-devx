export interface IsTruthyConfig {
  /** If true, treats empty arrays `[]` as falsy (returns false). Defaults to `false`. */
  ignoreEmptyArray?: boolean
  /** If true, treats empty objects `{}` as falsy (returns false). Defaults to `false`. */
  ignoreEmptyObject?: boolean
  /** If true, an object like `{ a: undefined }` is treated as falsy (returns false). Defaults to `false`.
   * To make this to work when true `ignoreEmptyObject` must be true
   */
  ignoreUndefinedObjectValues?: boolean
}
/**
 * Checks if a value is truthy.
 * @param value - The value to check.
 * @param config - Optional configuration object to customize the truthiness check.
 * @returns True if the value is truthy, false otherwise.
 */
export const isTruthy = <T>(
  value: T | null | undefined,
  config: IsTruthyConfig = {
    ignoreEmptyArray: false,
    ignoreEmptyObject: false,
    ignoreUndefinedObjectValues: false
  }
): value is T => {
  if (value === null || value === undefined) {
    return false
  }
  if (config.ignoreEmptyArray && Array.isArray(value) && value.length === 0) {
    return false
  }
  if (
    config.ignoreEmptyObject &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value !== null
  ) {
    const objectEntries = Object.entries(value)
    if (!config.ignoreUndefinedObjectValues) {
      return objectEntries.length > 0
    }
    return objectEntries.some(([, value]) => value !== undefined)
  }
  return Boolean(value)
}

/**
 * Returns the provided value if it is truthy, otherwise returns the default value.
 * @param value - The value to check.
 * @param defaultValue - The default value to return if the value is not truthy.
 * @param config - Optional configuration object to customize the truthiness check.
 * @returns The value if it is truthy, otherwise the default value.
 */
export const getValueIfTruthy = <T>(
  value: T | undefined | null,
  defaultValue: T,
  config: IsTruthyConfig = {
    ignoreEmptyArray: false,
    ignoreEmptyObject: false,
    ignoreUndefinedObjectValues: false
  }
): T => {
  return isTruthy(value, config) ? value : defaultValue
}

export interface IsNullishConfig {
  /** If true, treats `NaN` as truthy (returns true). Defaults to `false`. */
  includeNaN?: boolean
}

/**
 * Checks if a value is null or undefined.
 * @param value - The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export const isNullish = <T>(
  value: T | null | undefined
): value is null | undefined => {
  return value === null || value === undefined
}

/**
 * Returns the provided value if it is not null or undefined, otherwise returns the default value.
 * @param value - The value to check.
 * @param defaultValue - The default value to return if the value is null or undefined.
 * @returns The value if it is not null or undefined, otherwise the default value.
 */
export const getValueIfNotNullish = <T>(
  value: T | null | undefined,
  defaultValue: T
): T => {
  return isNullish(value) ? defaultValue : value
}
