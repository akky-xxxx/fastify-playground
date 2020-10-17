// import
import { AnyObject } from "../common"

// main
/**
 * @typedef PartialRecord
 * @description 全ての key を optional で定義する Record
 */
export type PartialRecord<K extends keyof AnyObject, T> = Partial<Record<K, T>>
