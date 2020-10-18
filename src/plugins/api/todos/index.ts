// import node_modules
import { FastifyPluginAsync } from "fastify"
import mongoose from "mongoose"

// import controllers
import { todosGet } from "../../../controllers/api/todos/get"
import { todosPost } from "../../../controllers/api/todos/post"

// import others
import { Endpoint } from "../../../const/Server/Endpoint"
import { ThisError } from "../../../utils/ThisError"
import { connectMongoose } from "../../../utils/connectMongoose"

// main
const {
  API: { TODOS },
} = Endpoint

export const todosPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.addHook("preHandler", async () => {
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

  fastify.get(TODOS, todosGet)
  fastify.post(TODOS, todosPost)
}
