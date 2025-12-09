export type ValueOf<T> =
  T extends Record<string, unknown> ? { [K in keyof T]: ValueOf<T[K]> } : string

//export type ThemeBase = ValueOf<typeof vars>
