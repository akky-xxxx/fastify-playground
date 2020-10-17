// import node_modules
import fastifyOrigin from "fastify"

// import plugins
import { apiPlugin } from "../../plugins/api"
import { samplePlugin } from "../../plugins/sample"

// import const
import { Common } from "../../const/Common"

// main
const { IS_DEV } = Common
const fastify = fastifyOrigin({
  logger: IS_DEV,
})

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
