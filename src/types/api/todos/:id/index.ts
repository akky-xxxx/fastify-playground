// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  FastifyRequest,
} from "fastify"

// import others
import {
  CreatePartialBody,
  CreatePartialParams,
  CreateRequireParams,
  CreateReply,
} from "../../../fastify"
import { ToDoItem } from "../../../database"

// main
type ParamsBase = {
  id: string
}

type BodyBase = Pick<ToDoItem, "title" | "description" | "is_done">

type TodosRequireParams = CreateRequireParams<ParamsBase>
type TodosIdBody = CreatePartialBody<BodyBase>

/**
 * @typedef TodosPartialParams
 * @description hooks 用
 */
export type TodosPartialParams = CreatePartialParams<ParamsBase>

/**
 * @typedef TodosIdGetResponse
 * @description GET:/api/todos/:id のレスポンス
 * @property todoItem - ParamsBase & BodyBase
 */
export type TodosIdGetResponse = ParamsBase & BodyBase

/**
 * @typedef TodosIdPutController
 * @description GET:api/todos/:id の controller 用
 */
export type TodosIdGetController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosRequireParams & TodosIdBody & CreateReply<TodosIdGetResponse>
>

/**
 * @typedef TodosIdGetController
 * @description GET:api/todos/:id の controller 用
 */
export type TodosIdPutController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosRequireParams & TodosIdBody
>

export type TodosIdReq = FastifyRequest<TodosRequireParams & TodosIdBody>
