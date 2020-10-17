// import node_modules
import { FastifyPluginAsync } from "fastify"

// main
export const plugin1: FastifyPluginAsync = async (fastify) => {
  fastify.get("/plugin1", (_req, reply) => {
    reply.send("/plugin1")
  })
}
