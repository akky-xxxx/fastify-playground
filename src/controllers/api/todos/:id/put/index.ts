// import others
import { TodosIdPutController } from "../../../../../types/api/todos/:id"
import { putTodo } from "../../../../../models/api/todos/:id/put"
import { ThisError } from "../../../../../utils/ThisError"

// main
export const todosIdPut: TodosIdPutController = async (req) => {
  try {
    await putTodo(req)
    return true
  } catch (error) {
    throw new ThisError({ error })
  }
}
