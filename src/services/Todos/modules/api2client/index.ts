// import
import { Api2client } from "../../../types"
import { ApiResponse, ServiceResponse } from "../../types"
import { convertTodoItem } from "./modules/convertTodoItem"

// main
export const api2client: Api2client<ApiResponse, ServiceResponse> = (data) => {
  return {
    todos: data.map(convertTodoItem),
  }
}
