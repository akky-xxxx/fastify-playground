// import node_modules
import { RouteHandlerMethod } from "fastify"

// import others
import { Endpoint } from "../../../../const/Server/Endpoint"

// main
const {
  API: { TODOS },
} = Endpoint

export const todosPost: RouteHandlerMethod = async () => {
  console.log(`accessed ${TODOS} by POST`)
  return []
}
