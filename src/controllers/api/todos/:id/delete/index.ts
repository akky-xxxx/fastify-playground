// import
import { Endpoint } from "../../../../../const/Server/Endpoint"
import { TodosIdController } from "../../../../../types/api/todos/:id"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdDelete: TodosIdController = async () => {
  console.log(`accessed ${TODOS_ID} by DELETE`)
  return true
}
