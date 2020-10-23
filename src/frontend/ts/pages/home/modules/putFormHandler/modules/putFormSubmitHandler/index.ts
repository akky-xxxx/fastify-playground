// import node_modules
import axios from "axios"

// main
type PutFormSubmitHandlerArgs = {
  endpoint: string
  isDoneElement: HTMLInputElement
  titleElement: HTMLInputElement
  descriptionElement: HTMLTextAreaElement
}
type PutFormSubmitHandlerMain = Parameters<
  HTMLFormElement["addEventListener"]
>[1]
type PutFormSubmitHandler = (
  args: PutFormSubmitHandlerArgs,
) => PutFormSubmitHandlerMain

export const putFormSubmitHandler: PutFormSubmitHandler = (args) => {
  const { endpoint, isDoneElement, titleElement, descriptionElement } = args
  const putFormSubmitHandlerMain: PutFormSubmitHandlerMain = async (event) => {
    event.preventDefault()

    const putData = {
      is_done: isDoneElement.checked,
      title: titleElement.value,
      description: descriptionElement.value,
    }

    try {
      await axios.put(endpoint, putData)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return putFormSubmitHandlerMain
}
