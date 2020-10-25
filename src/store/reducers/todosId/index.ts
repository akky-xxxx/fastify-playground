// import node_modules
import { createSlice } from "@reduxjs/toolkit"
import { steps } from "redux-effects-steps"
import { specterUpdate } from "@specter/redux-effects-specter"

// import others
import { Common } from "../../../services/TodosId/const"
import { StateWithService } from "../../types"

// main
const { SERVICE_NAME } = Common

const initialState: StateWithService<never> = {
  data: null,
  asyncInfo: {
    isLoading: false,
    errorMessage: "",
  },
}

const slice = createSlice({
  name: "todosId",
  initialState,
  reducers: {
    updateReady: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: true,
          errorMessage: "",
        },
      }
    },
    successUpdate: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: false,
          errorMessage: "",
        },
      }
    },
    failureUpdate: (state) => {
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
  actions: { updateReady, successUpdate, failureUpdate },
  reducer,
} = slice

const updateTodosId = (): ReturnType<typeof steps> => {
  return steps(
    updateReady(),
    specterUpdate(SERVICE_NAME, {
      body: {
        id: "body_this_id",
        title: "body_this_title",
      },
      query: {
        id: "query_this_id",
        title: "query_this_title",
      },
    }),
    [successUpdate, failureUpdate],
  )
}

export { reducer, updateTodosId }
