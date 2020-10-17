// import others
import { Endpoint } from "../../../../../const/Server/Endpoint"
import { TodosIdController } from "../../../../../types/api/todos/:id"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdPut: TodosIdController = async () => {
  console.log(`accessed ${TODOS_ID} by PUT`)
  return true
}
