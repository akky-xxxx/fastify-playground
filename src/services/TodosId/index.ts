// import node_modules
import { Request, Response } from "@specter/specter"
import { IncomingHttpHeaders } from "http"

// import others
import { BaseService } from "../BaseService"
import { Common } from "./const"
import { AnyObject } from "../../types/common"
import { Endpoint } from "../../const/Server/Endpoint"
import { RequestBody } from "./types"
import { removeUndefinedKey } from "../../utils/removeUndefinedKeys"
import { ThisError } from "../../utils/ThisError"

// main
const { SERVICE_NAME } = Common
const {
  API: { TODOS_ID },
} = Endpoint

export class TodoItem extends BaseService {
  constructor(config: AnyObject) {
    super(SERVICE_NAME, config)
  }

  async read(
    req: Request<IncomingHttpHeaders, unknown, RequestBody>,
  ): Promise<Response<AnyObject, AnyObject>> {
    const {
      body: { id },
    } = req
    const endpoint = TODOS_ID.replace(":id", id)

    try {
      const { data: response } = await this.axios.get(endpoint)
      return new Response({}, response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async update(
    req: Request<IncomingHttpHeaders, unknown, RequestBody>,
  ): Promise<Response<AnyObject, AnyObject>> {
    // TODO: fastify だと？ query, body を正しく受け取れない説
    const {
      body: { id, title, description, isDone },
    } = req
    console.log(req)
    const endpoint = TODOS_ID.replace(":id", id)
    const requestBody = removeUndefinedKey({
      title,
      description,
      is_done: isDone,
    })
    try {
      await this.axios.put(endpoint, requestBody)
      return new Response({}, {})
    } catch (error) {
      return Promise.reject(new ThisError({ error }))
    }
  }
}
