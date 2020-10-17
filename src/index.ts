import "./modules/firstImport"

// import plugins
import { plugin1 } from "./plugins/plugin1"

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
  TEST: { CONTROLLER },
} = Endpoint
const { IS_DEV } = Common

fastify.register(plugin1)
fastify.get(ROOT, async (_req, reply) => {
  reply.send("Hello fastify world.")
})
fastify.get(CONTROLLER, controller1)

fastify.ready(() => {
  if (IS_DEV) {
    console.log("//////////////////////////////////////////////////////////////////////")
    console.log(fastify.printRoutes())
    console.log("//////////////////////////////////////////////////////////////////////")
  }
})

fastify.listen(PORT, (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
