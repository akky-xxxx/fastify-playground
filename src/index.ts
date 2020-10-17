// import plugins
import { plugin1 } from "./plugins/plugin1"

// import controllers
import { controller1 } from "./controllers/controller1"

// import others
import "./modules/firstImport"
import { fastify } from "./modules/fastify"
import { Server } from "./const/Server"

// main
const { PORT } = Server

fastify.register(plugin1)
fastify.get("/", async (_req, reply) => {
  reply.send("Hello fastify world.")
})
fastify.get("/controller1", controller1)

fastify.listen(PORT, (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
