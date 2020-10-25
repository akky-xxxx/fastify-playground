// import
import { ApiResponse, ServiceResponse } from "../../../../types"

// main
type convertTodoItem = (
  todoItem: ApiResponse[number],
) => ServiceResponse["todoItems"][number]
export const convertTodoItem: convertTodoItem = (todoItem) => {
  const {
    _id: id,
    title,
    description: _description,
    is_done: isDone,
  } = todoItem
  const description = _description || ""
  return { id, title, description, isDone }
}
