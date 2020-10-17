// import node_modules
import fastifyOrigin from "fastify"

// import const
import { Common } from "../../const/Common"

// main
const { IS_DEV } = Common
export const fastify = fastifyOrigin({
  logger: IS_DEV,
})
