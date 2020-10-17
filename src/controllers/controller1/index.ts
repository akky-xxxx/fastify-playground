// import node_modules
import { RouteHandlerMethod } from "fastify"

// main
export const controller1: RouteHandlerMethod = async (_req, reply) => {
  reply.send("/controller1")
}
