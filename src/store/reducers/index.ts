// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import reducers
import { reducer as todos } from "./todos"

export const reducer = combineReducers({
  todos,
})
