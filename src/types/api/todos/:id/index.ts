// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify"

// import others
import { CreateParams, CreateRequireParams } from "../../../utils"

type ParamsBase = {
  id: string
}

export type TodosPartialParams = CreateParams<ParamsBase>
type TodosRequireParams = CreateRequireParams<ParamsBase>

export type TodosIdController = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  TodosRequireParams
>
