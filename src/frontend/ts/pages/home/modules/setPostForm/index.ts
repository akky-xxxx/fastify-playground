import { Selectors } from "../../const/Selectors"
import { postFormSubmitHandler } from "./postFormSubmitHandler"

const { POST_FORM, TODO_TITLE, TODO_DESCRIPTION } = Selectors
const postFormElement = document.querySelector<HTMLFormElement>(`.${POST_FORM}`)
const endpoint = postFormElement?.getAttribute("action")
const titleElement = postFormElement?.querySelector<HTMLInputElement>(
  `.${TODO_TITLE}`,
)
const descriptionElement = postFormElement?.querySelector<HTMLTextAreaElement>(
  `.${TODO_DESCRIPTION}`,
)

type SetPostForm = () => void
export const setPostForm: SetPostForm = () => {
  if (!endpoint || !titleElement || !descriptionElement) return
  postFormElement?.addEventListener(
    "submit",
    postFormSubmitHandler({
      endpoint,
      titleElement,
      descriptionElement,
    }),
  )
}
