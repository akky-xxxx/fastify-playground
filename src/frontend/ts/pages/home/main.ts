// import
import { putFormHandler } from "./modules/putFormHandler"
import { setPostForm } from "./modules/setPostForm"
import { Selectors } from "./const/Selectors"

// main
const { PUT_FORM } = Selectors
const putFormElements = [
  ...document.querySelectorAll<HTMLFormElement>(`.${PUT_FORM}`),
]

putFormElements.forEach(putFormHandler)
setPostForm()
