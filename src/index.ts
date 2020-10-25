import "./modules/firstImport"

// import others
import { initializeServer } from "./modules/initializeServer"
import { Server } from "./const/Server"

// main
const { PORT } = Server
initializeServer().then((fastify) => {
  fastify.listen(PORT, (error, address) => {
    if (error) {
      fastify.log.error(error)
      process.exit(1)
    }

    fastify.log.info(`server listening on ${address}`)
  })
})
