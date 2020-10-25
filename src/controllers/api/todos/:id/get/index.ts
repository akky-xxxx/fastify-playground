// import node_modules
import { pick } from "remeda"

// import others
import {
  TodosIdGetController,
  TodosIdGetResponse,
} from "../../../../../types/api/todos/:id"
import { getTodo } from "../../../../../models/api/todos/:id/get"
import { ThisError } from "../../../../../utils/ThisError"

// main
export const todosIdGet: TodosIdGetController = async (req) => {
  const {
    params: { id },
  } = req
  try {
    const result: TodosIdGetResponse = {
      ...pick(await getTodo(id), ["_id", "title", "description", "is_done"]),
    }
    return result
  } catch (error) {
    throw new ThisError({ error })
  }
}
