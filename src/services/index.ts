// import node_modules
import Specter from "@specter/specter"

// import services
import { Todos } from "./Todos"

// import others
import { ServiceInformation } from "./types"
import { getMessage } from "./modules/getMessage"

// main
const services = [Todos]
const serviceInformation: ServiceInformation[] = []
services.forEach((Service) => {
  const service = new Service({})
  Specter.registerService(service)
  serviceInformation.push({
    serviceName: Service.name,
    endpoint: service.name,
  })
})
console.log(getMessage(serviceInformation))
