// import node_modules
import { RouteHandlerMethod } from "fastify"

// main
export const home: RouteHandlerMethod = async (_req, reply) => {
  return reply.view("/pages/home/index.pug", {
    message: "message",
    name: "Taro",
  })
}
