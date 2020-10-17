// import node_modules
import fastifyOrigin from "fastify"

// import others
import "./modules/firstImport"
import { Server } from "./const/Server"

// main
const { PORT } = Server
const fastify = fastifyOrigin({
  logger: true,
})

fastify.get("/", async (_req, reply) => {
  reply.send("Hello fastify world.")
})

fastify.listen(PORT, (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
