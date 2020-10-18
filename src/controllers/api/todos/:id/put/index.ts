// import others
import { TodosIdController } from "../../../../../types/api/todos/:id"
import { putTodo } from "../../../../../models/api/todos/:id/put"
import { ThisError } from "../../../../../utils/ThisError"

// main
export const todosIdPut: TodosIdController = async (req) => {
  try {
    await putTodo(req)
    return true
  } catch (error) {
    throw new ThisError({ error })
  }
}
