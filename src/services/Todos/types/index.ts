// import
import { TodosGetResponse } from "../../../types/api/todos"

// main
export type ApiResponse = TodosGetResponse

export type TodoItem = {
  id: string
  title: string
  description: string
  isDone: boolean
}

export type ServiceResponse = {
  todos: TodoItem[]
}
