// import node_modules
import { Response } from "@specter/specter"

// import others
import { BaseService } from "../BaseService"
import { Common } from "./const"
import { AnyObject } from "../../types/common"
import { ApiResponse, ServiceResponse } from "./types"
import { api2client } from "./modules/api2client"
import { Endpoint } from "../../const/Server/Endpoint"

// main
const { SERVICE_NAME } = Common
const {
  API: { TODOS },
} = Endpoint

export class TodoItems extends BaseService {
  constructor(config: AnyObject) {
    super(SERVICE_NAME, config)
  }

  async read(): Promise<Response<AnyObject, ServiceResponse>> {
    try {
      const { data: responseData } = await this.axios.get<ApiResponse>(TODOS)
      return new Response({}, api2client(responseData))
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
