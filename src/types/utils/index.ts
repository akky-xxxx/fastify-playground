// import node_modules
import { RequestGenericInterface } from "fastify"

// import others
import { AnyObject, StringObject } from "../common"

// main
type RequestGenericKey = keyof RequestGenericInterface
type QueryStringKey = Extract<RequestGenericKey, "Querystring">
type ParamKey = Extract<RequestGenericKey, "Params">

/**
 * @typedef PartialRecord
 * @description 全ての key を optional で定義する Record
 */
export type PartialRecord<K extends keyof AnyObject, T> = Partial<Record<K, T>>

/**
 * @typedef CreatePartialQuery
 * @description request handler の query 定義用。未指定も可能なので partial とする
 * @param T - extends StringObject
 * @property Querystring - optional T
 */
export type CreatePartialQuery<T extends StringObject> = PartialRecord<
  QueryStringKey,
  Partial<T>
>

/**
 * @typedef CreateRequireQuery
 * @description request handler の query 定義用
 * @param T - extends StringObject
 * @property Querystring - optional T
 */
export type CreateRequireQuery<T extends StringObject> = Record<
  QueryStringKey,
  T
>

/**
 * @typedef CreatePartialParams
 * @description request handler の param 定義湯。未指定も可能なので partial とする
 * @param T - extends StringObject
 * @property Params - optional T
 */
export type CreatePartialParams<T extends StringObject> = PartialRecord<
  ParamKey,
  Partial<T>
>

/**
 * @typedef CreateRequireParams
 * @description request handler の param 定義湯
 * @param T - extends StringObject
 * @property Params - optional T
 */
export type CreateRequireParams<T extends StringObject> = Record<ParamKey, T>
