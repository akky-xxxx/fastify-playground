// import node_modules
import fastifyOrigin from "fastify"
import fastifyFormBody from "fastify-formbody"
import middiePlugin from "middie"
import Specter from "@specter/specter"

// import plugins
import { commonPlugin } from "../../plugins/common"
import { webPlugin } from "../../plugins/web"
import { nextPlugin } from "../../plugins/next"
import { apiPlugin } from "../../plugins/api"
import { samplePlugin } from "../../plugins/sample"

// import others
import "../../services"
import { Common } from "../../const/Common"
import { Endpoint } from "../../const/Server/Endpoint"

// main
const { IS_DEV } = Common
const {
  OTHERS: { XHR },
} = Endpoint
const fastify = fastifyOrigin({
  logger: IS_DEV,
})

export const initializeServer = async (): Promise<typeof fastify> => {
  await fastify.register(middiePlugin)
  fastify.register(commonPlugin)
  fastify.register(webPlugin)
  fastify.register(nextPlugin)
  fastify.register(fastifyFormBody)
  fastify.register(apiPlugin)
  fastify.register(samplePlugin)

  fastify.use(XHR, Specter.createMiddleware({}))

  fastify.ready(() => {
    if (IS_DEV) {
      const separator =
        "//////////////////////////////////////////////////////////////////////"
      console.log(separator)
      console.log(fastify.printRoutes())
      console.log(separator)
    }
  })

  return fastify
}
