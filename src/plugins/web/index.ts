// import node_modules
import { join } from "path"
import { FastifyPluginAsync } from "fastify"
import pointOfView from "point-of-view/index"
import pug from "pug"

// import controllers
import { home } from "../../controllers/web/home"
import { children } from "../../controllers/web/children"

// import others
import { Endpoint } from "../../const/Server/Endpoint"

// main
const {
  WEB: { HOME, CHILDREN },
} = Endpoint

export const webPlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(pointOfView, {
    engine: { pug },
    root: join(__dirname, "../../views"),
  })
  fastify.get(HOME, home)
  fastify.get(CHILDREN, children)
}
