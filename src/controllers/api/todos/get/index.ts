// import others
import { getTodos } from "../../../../models/api/todos/get"
import { ThisError } from "../../../../utils/ThisError"
import { TodosGet } from "../../../../types/api/todos"

// main
export const todosGet: TodosGet = async () => {
  try {
    const todos = await getTodos()
    return {
      todoItems: todos,
    }
  } catch (error) {
    throw new ThisError({ error })
  }
}
