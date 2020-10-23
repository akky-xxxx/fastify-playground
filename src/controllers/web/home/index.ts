// import node_modules
import { RouteHandlerMethod } from "fastify"

// import others
import { PageArguments } from "./types"

// main
export const home: RouteHandlerMethod = async (_req, reply) => {
  const pageArguments: PageArguments = {
    todoItems: [
      {
        id: "1",
        title: "todo item1",
        description: "description1",
        isDone: false,
      },
      {
        id: "2",
        title: "todo item2",
        description: "",
        isDone: true,
      },
    ],
    name: "Taro",
    message: "message",
  }
  return reply.view("/pages/home/index.pug", pageArguments)
}
