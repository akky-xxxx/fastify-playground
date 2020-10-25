// import node_modules
import axios, { AxiosInstance } from "axios"
import { Service } from "@specter/specter"

// import others
import { AnyObject } from "../../types/common"
import { Server } from "../../const/Server"

// main
const { PORT } = Server
export class BaseService extends Service {
  axios: AxiosInstance

  constructor(name: string, object: AnyObject) {
    super(name, object)
    this.axios = axios.create({ baseURL: `http://localhost:${PORT}` })
  }
}
