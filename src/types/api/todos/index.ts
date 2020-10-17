// import node_modules
import {
  RouteHandlerMethod,
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
} from "fastify"

// import others
import { CreateParams, CreateRequireParams } from "../../utils"

type ParamsBase = {
  id: string
}

export type PartialParams = CreateParams<ParamsBase>
type RequiredParams = CreateRequireParams<ParamsBase>

export type Controller = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RequiredParams
>
