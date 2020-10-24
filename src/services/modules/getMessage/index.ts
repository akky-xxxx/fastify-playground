import { ServiceInformation } from "../../types"
import { Endpoint } from "../../../const/Server/Endpoint"

// main
const {
  OTHERS: { XHR },
} = Endpoint
const separator =
  "======================================================================"

type GetMessage = (serviceInformation: ServiceInformation[]) => string
export const getMessage: GetMessage = (serviceInformation) => {
  return `${separator}
registered the below services.
${serviceInformation
  .map((info) => `- ${info.serviceName} ( ${XHR}/${info.endpoint} )`)
  .join("\n")}
${separator}`
}
