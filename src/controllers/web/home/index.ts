// import node_modules
import { RouteHandlerMethod } from "fastify"

// import others
import { PageArguments } from "./types"
import { getHomeArguments } from "../../../models/pages/home"

// main
export const home: RouteHandlerMethod = async (_req, reply) => {
  const pageArguments: PageArguments = await getHomeArguments()
  return reply.view("/pages/home/index.pug", pageArguments)
}
