// import node_modules
import { RouteHandlerMethod } from "fastify"

// import others
import { getTodos } from "../../../../models/api/todos/get"
import { ThisError } from "../../../../utils/ThisError"

// main
export const todosGet: RouteHandlerMethod = async () => {
  try {
    const result = await getTodos()
    return result
  } catch (error) {
    throw new ThisError({ error })
  }
}
