import "./modules/firstImport"

// import plugins
import { apiPlugin } from "./plugins/api"
import { samplePlugin } from "./plugins/sample"

// import others
import { fastify } from "./modules/fastify"
import { Server } from "./const/Server"
import { Common } from "./const/Common"

// main
const { PORT } = Server
const { IS_DEV } = Common

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

fastify.listen(PORT, (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
