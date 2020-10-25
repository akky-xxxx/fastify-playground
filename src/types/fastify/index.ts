// import node_modules
import { RequestGenericInterface } from "fastify"

// import others
import { StringObject, AnyObject } from "../common"
import { PartialRecord } from "../utils"

// main
type RequestGenericKey = keyof RequestGenericInterface
type QueryStringKey = Extract<RequestGenericKey, "Querystring">
type ParamKey = Extract<RequestGenericKey, "Params">
type BodyKey = Extract<RequestGenericKey, "Body">
type ReplyKey = Extract<RequestGenericKey, "Reply">

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
 * @property Querystring - T
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
 * @property Params - T
 */
export type CreateRequireParams<T extends StringObject> = Record<ParamKey, T>

/**
 * @typedef CreatePartialBody
 * @description request handler の body 定義湯。未指定も可能なので partial とする
 * @param T - extends AnyObject
 * @property Params - optional T
 */
export type CreatePartialBody<T extends AnyObject> = PartialRecord<
  BodyKey,
  Partial<T>
>

/**
 * @typedef CreateRequireBody
 * @description request handler の body 定義湯
 * @param T - extends AnyObject
 * @property Params - T
 */
export type CreateRequireBody<T extends AnyObject> = Record<BodyKey, T>

/**
 * @typedef CreateReply
 * @description api controller の戻り値用途
 * @param T
 * @property Params - T
 */
export type CreateReply<T> = Record<ReplyKey, T>
