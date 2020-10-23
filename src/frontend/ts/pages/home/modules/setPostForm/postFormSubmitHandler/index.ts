// import node_modules
import axios from "axios"

// main
type PostFormSubmitHandlerArgs = {
  endpoint: string
  titleElement: HTMLInputElement
  descriptionElement: HTMLTextAreaElement
}

type PostFormSubmitHandlerMain = Parameters<
  HTMLFormElement["addEventListener"]
>[1]
type PostFormSubmitHandler = (
  args: PostFormSubmitHandlerArgs,
) => PostFormSubmitHandlerMain

export const postFormSubmitHandler: PostFormSubmitHandler = (args) => {
  const { endpoint, titleElement, descriptionElement } = args
  const postFormSubmitHandlerMain: PostFormSubmitHandlerMain = async (
    event,
  ) => {
    event.preventDefault()

    const postData = {
      is_done: false,
      title: titleElement.value,
      description: descriptionElement.value,
    }

    try {
      await axios.post(endpoint, postData)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return postFormSubmitHandlerMain
}
