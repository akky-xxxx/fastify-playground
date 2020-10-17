/**
 * @typedef AnyObject
 * @description object 型なら何でも可
 */
export type AnyObject = Record<string, unknown>

/**
 * @typedef StringObject
 * @description query や param 等、 string しか持たないオブジェクト型
 */
export type StringObject = Record<string, string>
