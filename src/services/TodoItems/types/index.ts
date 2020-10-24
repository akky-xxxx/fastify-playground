// import
import { TodoGetResponse } from "../../../types/api/todos"

// main
export type ApiResponse = TodoGetResponse

export type TodoItem = {
  id: string
  title: string
  description: string
  isDone: boolean
}

export type ServiceResponse = {
  todoItems: TodoItem[]
}
