// import others
import { TodosIdGetController } from "../../../../../types/api/todos/:id"
import { getTodo } from "../../../../../models/api/todos/:id/get"
import { ThisError } from "../../../../../utils/ThisError"

// main
export const todosIdGet: TodosIdGetController = async (req) => {
  try {
    const result = await getTodo(req.params.id)
    return result
  } catch (error) {
    throw new ThisError({ error })
  }
}
