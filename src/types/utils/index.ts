// import
import { AnyObject } from "../common"

// main
/**
 * @typedef CreatePartialQuery
 * @description request handler の query 定義用。未指定も可能なので partial とする
 * @param T - extends AnyObject
 * @property Querystring - optional T
 */
export type CreatePartialQuery<T extends AnyObject> = {
  Querystring?: Partial<T>
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
