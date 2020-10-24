// import node_modules
import { Response } from "@specter/specter"

// import others
import { BaseService } from "../BaseService"
import { Common } from "./const"
import { AnyObject } from "../../types/common"

// main
const { SERVICE_NAME } = Common

export class TodoItems extends BaseService {
  constructor(config: AnyObject) {
    super(SERVICE_NAME, config)
  }

  async read(): Promise<Response<AnyObject, AnyObject>> {
    try {
      const { data: responseData } = await this.axios.get("/api/todos")
      return new Response({}, { data: responseData })
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
