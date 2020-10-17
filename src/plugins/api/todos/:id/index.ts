// import node_modules
import { FastifyPluginAsync } from "fastify"

// import controllers
import { todosIdGet } from "../../../../controllers/api/todos/:id/get"
import { todosIdPut } from "../../../../controllers/api/todos/:id/put"
import { todosIdDelete } from "../../../../controllers/api/todos/:id/delete"

// import others
import { Endpoint } from "../../../../const/Server/Endpoint"
import { TodosPartialParams } from "../../../../types/api/todos/:id"
import { ThisError } from "../../../../utils/ThisError"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook<TodosPartialParams>("preHandler", async (req) => {
    console.log("connect to db when preHandler")
    if (!req.params?.id) {
      throw new ThisError({ status: 400, message: "params.id がありません" })
    }
  })

  fastify.addHook("onResponse", async () => {
    console.log("disconnect from db when onResponse")
  })

  fastify.get(TODOS_ID, todosIdGet)
  fastify.put(TODOS_ID, todosIdPut)
  fastify.delete(TODOS_ID, todosIdDelete)
}
