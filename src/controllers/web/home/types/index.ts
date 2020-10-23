type TodoItem = {
  id: string
  title: string
  description: string
  isDone: boolean
}

export type PageArguments = {
  name: string
  message: string
  todoItems: TodoItem[]
}
