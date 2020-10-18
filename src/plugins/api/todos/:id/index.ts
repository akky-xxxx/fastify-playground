// import node_modules
import { FastifyPluginAsync } from "fastify"
import mongoose from "mongoose"

// import controllers
import { todosIdGet } from "../../../../controllers/api/todos/:id/get"
import { todosIdPut } from "../../../../controllers/api/todos/:id/put"

// import others
import { Endpoint } from "../../../../const/Server/Endpoint"
import { TodosPartialParams } from "../../../../types/api/todos/:id"
import { ThisError } from "../../../../utils/ThisError"
import { connectMongoose } from "../../../../utils/connectMongoose"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook<TodosPartialParams>("preHandler", async (req) => {
    if (!req.params?.id) {
      throw new ThisError({ status: 400, message: "params.id がありません" })
    }

    try {
      await connectMongoose()
    } catch (error) {
      throw new ThisError({ error })
    }
  })

  fastify.addHook("onResponse", async () => {
    try {
      await mongoose.disconnect()
    } catch (error) {
      throw new ThisError({ error })
    }
  })

  fastify.get(TODOS_ID, todosIdGet)
  fastify.put(TODOS_ID, todosIdPut)
}
