// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify"

// import others
import { CreatePartialParams, CreateRequireParams } from "../../../utils"

type ParamsBase = {
  id: string
}

export type TodosPartialParams = CreatePartialParams<ParamsBase>
type TodosRequireParams = CreateRequireParams<ParamsBase>

export type TodosIdController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosRequireParams
>
