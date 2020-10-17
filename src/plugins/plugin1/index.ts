// import node_modules
import { FastifyPluginAsync } from "fastify"

// import others
import { CreateParams, CreateQuery } from "../../types/utils"
import { Endpoint } from "../../const/Server/Endpoint"

type Query = CreateQuery<{
  age: string
}>

type Params = CreateParams<{
  id: string
}>

// main
const {
  TEST: { PLUGIN1, PLUGIN1_2, PLUGIN1_ID },
} = Endpoint
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
  fastify.get<Query>(PLUGIN1, (req, reply) => {
    console.log(`query age is ${req.query?.age}`)
    reply.send("/plugin1")
  })
  fastify.get(PLUGIN1_2, async () => {
    return "/plugin1-2"
  })
  fastify.get<Params>(PLUGIN1_ID, async (req) => {
    console.log(`param id is ${req.params?.id}`)
    return "/plugin1"
  })
}
