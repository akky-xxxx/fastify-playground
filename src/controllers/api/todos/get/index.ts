// import others
import { getTodos } from "../../../../models/api/todos/get"
import { ThisError } from "../../../../utils/ThisError"
import { TodosGet, TodosGetResponse } from "../../../../types/api/todos"

// main
export const todosGet: TodosGet = async () => {
  try {
    const response: TodosGetResponse = await getTodos()
    return response
  } catch (error) {
    throw new ThisError({ error })
  }
}
