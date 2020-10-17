// import node_modules
import { FastifyPluginAsync } from "fastify"

// import controllers
import { todosGet } from "../../../controllers/api/todos/get"
import { todosPost } from "../../../controllers/api/todos/post"

// import others
import { Endpoint } from "../../../const/Server/Endpoint"

// main
const {
  API: { TODOS },
} = Endpoint

export const todosPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async () => {
    console.log("connect to db when preHandler")
  })

  fastify.addHook("onResponse", async () => {
    console.log("disconnect from db when onResponse")
  })

  fastify.get(TODOS, todosGet)
  fastify.post(TODOS, todosPost)
}
