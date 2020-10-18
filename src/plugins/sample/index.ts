// import node_modules
import { FastifyPluginAsync } from "fastify"

// import others
import { plugin1 } from "../plugin1"
import { controller1 } from "../../controllers/controller1"
import { Endpoint } from "../../const/Server/Endpoint"

// main
const {
  SAMPLE: { CONTROLLER1 },
} = Endpoint

export const samplePlugin: FastifyPluginAsync = async (fastify) => {
  fastify.register(plugin1)
  fastify.get(CONTROLLER1, controller1)
}
