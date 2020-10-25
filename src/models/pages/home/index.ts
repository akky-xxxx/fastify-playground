// import node_modules
import mongoose from "mongoose"

// import others
import { todoItemModel } from "../../../dbModels/todoItemModel"
import { ThisError } from "../../../utils/ThisError"
import { PageArguments } from "../../../controllers/web/home/types"
import { connectMongoose } from "../../../utils/connectMongoose"
import { convertDb2Client } from "./modules/convertDb2Client"

// main
type GetHomeArguments = () => Promise<PageArguments>

export const getHomeArguments: GetHomeArguments = async () => {
  try {
    await connectMongoose()
    const result = await todoItemModel.find()
    await mongoose.disconnect()
    const todos = result.map(convertDb2Client)

    return Promise.resolve({
      name: "Taro",
      message: "message",
      todos,
    })
  } catch (error) {
    return Promise.reject(new ThisError({ error }))
  }
}
