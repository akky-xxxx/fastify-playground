import "./modules/firstImport"

// import others
import { fastify } from "./modules/fastify"
import { Server } from "./const/Server"

// main
const { PORT } = Server

fastify.listen(PORT, (error, address) => {
  if (error) {
    fastify.log.error(error)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})
