// import node_modules
// import Specter from "@specter/specter"

// import services
import { Todos } from "./Todos"
import { TodoItem } from "./TodosId"

// import others
// import { ServiceInformation } from "./types"
// import { getMessage } from "./modules/getMessage"

// main
export const services = [Todos, TodoItem]
// const serviceInformation: ServiceInformation[] = []
// services.forEach((Service) => {
//   const service = new Service({})
//   Specter.registerService(service)
//   serviceInformation.push({
//     serviceName: Service.name,
//     endpoint: service.name,
//   })
// })
// console.log(getMessage(serviceInformation))
