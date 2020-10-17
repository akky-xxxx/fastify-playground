// import others
import { Endpoint } from "../../../../../const/Server/Endpoint"
import { Controller } from "../../../../../types/api/todos"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdGet: Controller = async (req) => {
  console.log(`accessed ${TODOS_ID} by GET, id is ${req.params.id}`)
  return req.params.id
}
