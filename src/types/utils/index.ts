// import
import { AnyObject } from "../common"

// main
type StringObject = Record<string, string>

/**
 * @typedef CreatePartialQuery
 * @description request handler の query 定義用。未指定も可能なので partial とする。query なので value の型は全て string になる
 * @param T - extends StringObject
 * @property Querystring - optional T
 */
export type CreatePartialQuery<T extends StringObject> = {
  Querystring?: Partial<T>
}

/**
 * @typedef CreateRequireQuery
 * @description request handler の query 定義用。query なので value の型は全て string になる
 * @param T - extends StringObject
 * @property Querystring - optional T
 */
export type CreateRequireQuery<T extends StringObject> = {
  Querystring?: T
}

/**
 * @typedef CreateRequireParams
 * @description request handler の param 定義湯
 * @param T - extends AnyObject
 * @property Params - optional T
 */
export type CreateRequireParams<T extends AnyObject> = {
  Params: T
}

/**
 * @typedef CreatePartialParams
 * @description request handler の param 定義湯。未指定も可能なので partial とする
 * @param T - extends AnyObject
 * @property Params - optional T
 */
export type CreatePartialParams<T extends AnyObject> = {
  Params?: Partial<T>
}
