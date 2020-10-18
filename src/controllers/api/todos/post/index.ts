// import others
import { postTodos } from "../../../../models/api/todos/post"
import { ThisError } from "../../../../utils/ThisError"
import { TodosController } from "../../../../types/api/todos"

// main
export const todosPost: TodosController = async (req) => {
  try {
    await postTodos(req.body)
    return true
  } catch (error) {
    throw new ThisError({ error })
  }
}
