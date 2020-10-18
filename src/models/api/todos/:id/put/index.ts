// import
import { todoItemModel } from "../../../../../dbModels/todoItemModel"
import { ThisError } from "../../../../../utils/ThisError"
import { TodosIdReq } from "../../../../../types/api/todos/:id"
import { removeUndefinedKey } from "../../../../../utils/removeUndefinedKeys"

// main
type PutTodo = (req: TodosIdReq) => Promise<void>
export const putTodo: PutTodo = async (req) => {
  const { body, params } = req

  try {
    const data = removeUndefinedKey({
      title: body?.title,
      description: body?.description,
      is_done: body?.is_done,
    })
    await todoItemModel.update({ _id: params.id }, data)
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(new ThisError({ error }))
  }
}
