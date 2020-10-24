// import others
import { getTodos } from "../../../../models/api/todos/get"
import { ThisError } from "../../../../utils/ThisError"
import { TodoGet } from "../../../../types/api/todos"

// main
export const todosGet: TodoGet = async () => {
  try {
    const todos = await getTodos()
    return {
      todoItems: todos
    }
  } catch (error) {
    throw new ThisError({ error })
  }
}
