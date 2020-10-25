// import node_modules
import Client from "@specter/client"

// import others
import { Endpoint } from "../../../const/Server/Endpoint"

// main
const {
  OTHERS: { XHR },
} = Endpoint
export const specterClient = new Client({
  base: XHR,
})
