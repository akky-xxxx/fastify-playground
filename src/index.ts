import "./modules/firstImport"

// import plugins
import { plugin1 } from "./plugins/plugin1"
import { apiPlugin } from "./plugins/api"

// import controllers
import { controller1 } from "./controllers/controller1"

// import others
import { fastify } from "./modules/fastify"
import { Server } from "./const/Server"
import { Endpoint } from "./const/Server/Endpoint"
import { Common } from "./const/Common"

// main
const { PORT } = Server
const {
  ROOT,
  TEST: { CONTROLLER1 },
} = Endpoint
const { IS_DEV } = Common

fastify.register(plugin1)
fastify.register(apiPlugin)
fastify.get(ROOT, async (_req, reply) => {
  reply.send("Hello fastify world.")
})
fastify.get(CONTROLLER1, controller1)

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
