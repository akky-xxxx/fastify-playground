// import node_modules
import { FastifyPluginAsync } from "fastify"

// main
export const plugin1: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("onRequest", async () => {
    console.log("/plugin1 - onRequest")
  })
  fastify.addHook("preParsing", async (_req, _rep, payload) => {
    console.log("/plugin1 - preParsing")
    return payload
  })
  fastify.addHook("preHandler", async () => {
    console.log("/plugin1 - preHandler")
  })
  fastify.addHook("onError", async (_req, _rep, error) => {
    console.log("/plugin1 - onError")
    console.error(error)
  })
  fastify.addHook("onSend", async (_req, _rep, payload) => {
    console.log("/plugin1 - onSend")
    return payload
  })
  fastify.addHook("onResponse", async () => {
    console.log("/plugin1 - onResponse")
  })
  fastify.get("/plugin1", (_req, reply) => {
    reply.send("/plugin1")
  })
  fastify.get("/plugin1-2", async () => {
    return "/plugin1-2"
  })
}
