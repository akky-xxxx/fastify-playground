// import
import { todoItemModel } from "../../../../dbModels/todoItemModel"
import { ToDoItem } from "../../../../types/database"
import { ThisError } from "../../../../utils/ThisError"

// main
type GetTodosArgs = Partial<Pick<ToDoItem, "_id" | "title" | "description">>
type GetTodos = (args?: GetTodosArgs) => Promise<ToDoItem[]>

export const getTodos: GetTodos = async (args = {}) => {
  try {
    return Promise.resolve(await todoItemModel.find(args))
  } catch (error) {
    return Promise.reject(new ThisError({ error }))
  }
}
