// import node_modules
import { FastifyPluginAsync } from "fastify"

type Query = Partial<{
  Querystring: Partial<{
    age: string
  }>
}>

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
  fastify.get<Query>("/plugin1", (req, reply) => {
    console.log(`query age is ${req.query?.age}`)
    reply.send("/plugin1")
  })
  fastify.get("/plugin1-2", async () => {
    return "/plugin1-2"
  })
}
