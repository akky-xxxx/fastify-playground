// import node_modules
import { RouteHandlerMethod } from "fastify"

// import others
import { Endpoint } from "../../../../const/Server/Endpoint"

// main
const {
  API: { TODOS },
} = Endpoint

export const todosGet: RouteHandlerMethod = async () => {
  console.log(`accessed ${TODOS} by GET`)
  return []
}
