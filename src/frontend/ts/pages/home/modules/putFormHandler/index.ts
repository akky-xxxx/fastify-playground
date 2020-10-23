// import
import { putFormSubmitHandler } from "./modules/putFormSubmitHandler"
import { Selectors } from "../../const/Selectors"

// main
const { TODO_IS_DONE, TODO_TITLE, TODO_DESCRIPTION } = Selectors

type PutFormHandler = (formElement: HTMLFormElement) => void
export const putFormHandler: PutFormHandler = (formElement) => {
  const endpoint = formElement.getAttribute("action")
  const isDoneElement = formElement.querySelector<HTMLInputElement>(
    `.${TODO_IS_DONE}`,
  )
  const titleElement = formElement.querySelector<HTMLInputElement>(
    `.${TODO_TITLE}`,
  )
  const descriptionElement = formElement.querySelector<HTMLTextAreaElement>(
    `.${TODO_DESCRIPTION}`,
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
