// import others
import { Endpoint } from "../../../../../const/Server/Endpoint"
import { TodosIdController } from "../../../../../types/api/todos/:id"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdGet: TodosIdController = async (req) => {
  console.log(`accessed ${TODOS_ID} by GET, id is ${req.params.id}`)
  return req.params.id
}
