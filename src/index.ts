import "./modules/firstImport"

// import plugins
import { plugin1 } from "./plugins/plugin1"

// import controllers
import { controller1 } from "./controllers/controller1"

// import others
import { fastify } from "./modules/fastify"
import { Server } from "./const/Server"
import { Common } from "./const/Common"

// main
const { PORT } = Server
const { IS_DEV } = Common

fastify.register(plugin1)
fastify.get("/", async (_req, reply) => {
  reply.send("Hello fastify world.")
})
fastify.get("/controller1", controller1)

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
