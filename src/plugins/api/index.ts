// import node_modules
import { FastifyPluginAsync } from "fastify"

// import plugins
import { todosPlugin } from "./todos"
import { todosIdPlugin } from "./todos/:id"

// main
const apiPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(todosPlugin)
  fastify.register(todosIdPlugin)
}

export { apiPlugin }
