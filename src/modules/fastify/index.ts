// import node_modules
import fastifyOrigin from "fastify"
import fastifyFormBody from "fastify-formbody"

// import plugins
import { commonPlugin } from "../../plugins/common"
import { webPlugin } from "../../plugins/web"
import { nextPlugin } from "../../plugins/next"
import { apiPlugin } from "../../plugins/api"
import { samplePlugin } from "../../plugins/sample"

// import const
import { Common } from "../../const/Common"

// main
const { IS_DEV } = Common
const fastify = fastifyOrigin({
  logger: IS_DEV,
})

fastify.register(commonPlugin)
fastify.register(webPlugin)
fastify.register(nextPlugin)
fastify.register(fastifyFormBody)
fastify.register(apiPlugin)
fastify.register(samplePlugin)

fastify.ready(() => {
  if (IS_DEV) {
    const separator =
      "//////////////////////////////////////////////////////////////////////"
    console.log(separator)
    console.log(fastify.printRoutes())
    console.log(separator)
  }
})

export { fastify }
