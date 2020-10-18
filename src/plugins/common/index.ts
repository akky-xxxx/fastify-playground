// import node_modules
import { join } from "path"
import { FastifyPluginAsync } from "fastify"
import fastifyCompress from "fastify-compress"
import helmet from "fastify-helmet"
import fastifyStatic from "fastify-static"

// main
export const commonPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(fastifyCompress)
  fastify.register(helmet)
  fastify.register(fastifyStatic, {
    root: join(__dirname, "../../assets"),
  })
}
