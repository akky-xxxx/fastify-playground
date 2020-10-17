// import
import { Endpoint } from "../../../../../const/Server/Endpoint"
import { Controller } from "../../../../../types/api/todos"

// main
const {
  API: { TODOS_ID },
} = Endpoint

export const todosIdDelete: Controller = async () => {
  console.log(`accessed ${TODOS_ID} by DELETE`)
  return true
}
