// import
import { todoItemModel } from "../../../../dbModels/todoItemModel"
import { ThisError } from "../../../../utils/ThisError"
import { TodosPartialBody } from "../../../../types/api/todos"

// main
type PostTodos = (body: TodosPartialBody["Body"]) => Promise<void>
export const postTodos: PostTodos = async (body) => {
  if (!body || !body.title) {
    return Promise.reject(
      new ThisError({ status: 400, message: "title がありません" }),
    )
  }

  try {
    await todoItemModel.create({
      title: body.title,
      description: body.description,
      is_done: false,
    })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(new ThisError({ error }))
  }
}
