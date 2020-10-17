// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify"

// import others
import { CreatePartialParams, CreateRequireParams } from "../../../fastify"

// main
type ParamsBase = {
  id: string
}

type TodosRequireParams = CreateRequireParams<ParamsBase>

/**
 * @typedef TodosPartialParams
 * @description hooks 用
 */
export type TodosPartialParams = CreatePartialParams<ParamsBase>

/**
 * @typedef TodosIdController
 * @description api/todos/:id の controller 用
 */
export type TodosIdController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosRequireParams
>
