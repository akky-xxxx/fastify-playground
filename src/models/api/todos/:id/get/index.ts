// import
import { ToDoItem } from "../../../../../types/database"
import { todoItemModel } from "../../../../../dbModels/todoItemModel"
import { ThisError } from "../../../../../utils/ThisError"

// main
type GetTodo = (id: string) => Promise<ToDoItem>
export const getTodo: GetTodo = async (id: string) => {
  try {
    const result = await todoItemModel.find({ _id: id })

    if (!result.length) {
      return Promise.reject(
        new ThisError({ status: 404, message: "レコードが存在しません" }),
      )
    }

    return Promise.resolve(result[0])
  } catch (error) {
    return Promise.reject(new ThisError({ error }))
  }
}
