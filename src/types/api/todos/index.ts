// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify"

// import others
import { CreatePartialBody, CreateReply } from "../../fastify"
import { ToDoItem } from "../../database"

// main
type BodyBase = Pick<ToDoItem, "_id" | "title" | "description" | "is_done">

/**
 * @typedef TodosPartialBody
 * @description hooks 用
 */
export type TodosPartialBody = CreatePartialBody<BodyBase>

/**
 * @typedef TodosController
 * @description api/todos の controller 用
 */
export type TodosController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosPartialBody
>

/**
 * @typedef TodosGetResponse
 * @description GET:/api/todos のレスポンス
 * @property todoItems - BodyBase[]
 */
export type TodosGetResponse = BodyBase[]

/**
 * @typedef TodosGet
 * @description GET:/api/todos の controller 用
 */
export type TodosGet = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  CreateReply<TodosGetResponse>
>
