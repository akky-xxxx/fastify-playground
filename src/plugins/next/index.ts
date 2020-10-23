// import node_modules
import { FastifyPluginAsync } from "fastify"
import fastifyReact from "fastify-nextjs"

// import others
import { Common } from "../../const/Common"
import { Endpoint } from "../../const/Server/Endpoint"

// main
const { IS_DEV } = Common
const {
  NEXT: { TOP },
} = Endpoint
export const nextPlugin: FastifyPluginAsync = async (fastify) => {
  fastify
    .register(fastifyReact, {
      dev: IS_DEV,
    })
    .after(() => {
      fastify.next(TOP)
    })
}
