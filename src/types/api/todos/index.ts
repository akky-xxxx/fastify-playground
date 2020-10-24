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
 * @typedef TodosPartialParams
 * @description hooks 用
 */
export type TodosPartialParams = CreatePartialBody<BodyBase>

/**
 * @typedef TodosController
 * @description api/todos の controller 用
 */
export type TodosController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosPartialParams
>

export type TodoGetResponse = {
  todoItems: BodyBase[]
}

export type TodoGet = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  CreateReply<TodoGetResponse>
>
