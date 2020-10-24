// import node_modules
import Specter from "@specter/specter"

// import services
import { TodoItems } from "./TodoItems"

// import others
import { ServiceInformation } from "./types"
import { getMessage } from "./modules/getMessage"

// main
const services = [TodoItems]
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
