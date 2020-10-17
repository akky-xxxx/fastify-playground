// main
/**
 * @typedef PartialRecord
 * @description 全ての key を optional で定義する Record
 * @param K - extends keyof any
 * @param T - type of each keys
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
