// import node_modules
import { RouteHandlerMethod } from "fastify"

// main
export const children: RouteHandlerMethod = async (_req, reply) => {
  return reply.view("/pages/children/index.pug")
}
