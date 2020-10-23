// import
import { putFormSubmitHandler } from "./modules/putFormSubmitHandler"
import { Selectors } from "../../const/Selectors"

// main
const { PUT_TODO_IS_DONE, PUT_TODO_TITLE, PUT_TODO_DESCRIPTION } = Selectors

type PutFormHandler = (formElement: HTMLFormElement) => void
export const putFormHandler: PutFormHandler = (formElement) => {
  const endpoint = formElement.getAttribute("action")
  const isDoneElement = formElement.querySelector<HTMLInputElement>(
    `.${PUT_TODO_IS_DONE}`,
  )
  const titleElement = formElement.querySelector<HTMLInputElement>(
    `.${PUT_TODO_TITLE}`,
  )
  const descriptionElement = formElement.querySelector<HTMLTextAreaElement>(
    `.${PUT_TODO_DESCRIPTION}`,
  )

  if (!endpoint || !isDoneElement || !titleElement || !descriptionElement)
    return

  const putFormSubmitHandlerMain = putFormSubmitHandler({
    endpoint,
    isDoneElement,
    titleElement,
    descriptionElement,
  })

  formElement.addEventListener("submit", putFormSubmitHandlerMain)
}
