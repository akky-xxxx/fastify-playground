// import
import { ToDoItem } from "../../../../../types/database"
import { PageArguments } from "../../../../../controllers/web/home/types"

// main
type ConvertDb2Client = (item: ToDoItem) => PageArguments["todoItems"][number]
export const convertDb2Client: ConvertDb2Client = (item) => {
  const { _id: id, title, description: _description, is_done: isDone } = item
  const description = _description || ""

  return {
    id,
    title,
    description,
    isDone,
  }
}
