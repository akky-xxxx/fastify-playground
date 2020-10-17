// import node_modules
import { RouteHandlerMethod } from "fastify"

// import
import { Endpoint } from "../../const/Server/Endpoint"

// main
const {
  TEST: { CONTROLLER1 },
} = Endpoint
export const controller1: RouteHandlerMethod = async (_req, reply) => {
  reply.send(`accessed to '${CONTROLLER1}'`)
}
