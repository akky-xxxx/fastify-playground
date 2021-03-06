// import node_modules
import { createSlice } from "@reduxjs/toolkit"
import { steps } from "redux-effects-steps"
import { specterRead } from "@specter/redux-effects-specter"

// import others
import { Common } from "../../../services/Todos/const"
import { StateWithService } from "../../types"
import { ServiceResponse } from "../../../services/Todos/types"

// main
const { SERVICE_NAME } = Common

const initialState: StateWithService<ServiceResponse> = {
  data: null,
  asyncInfo: {
    isLoading: false,
    errorMessage: "",
  },
}

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    readReady: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: true,
          errorMessage: "",
        },
      }
    },
    successRead: (state, action: { payload: ServiceResponse }) => {
      return {
        ...state,
        data: {
          ...action.payload,
        },
        asyncInfo: {
          isLoading: false,
          errorMessage: "",
        },
      }
    },
    failureRead: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: false,
          errorMessage: "error!",
        },
      }
    },
  },
})

const {
  actions: { readReady, successRead, failureRead },
  reducer,
} = slice

const readTodos = (): ReturnType<typeof steps> => {
  return steps(readReady(), specterRead(SERVICE_NAME), [
    successRead,
    failureRead,
  ])
}

export { reducer, readTodos }
