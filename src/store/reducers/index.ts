// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import reducers
import { reducer as todos } from "./todos"
import { reducer as todosId } from "./todosId"

export const reducer = combineReducers({
  todos,
  todosId,
})
