// import node_modules
import React, { useEffect } from "react"
import styled from "styled-components"

import { useDispatch, useSelector } from "../../store"
import { readTodoItems } from "../../store/reducers/todoItems"

// main
const home = () => {
  const state = useSelector((state) => state.todoItems)
  const dispatch = useDispatch()

  const { data } = state

  useEffect(() => {
    if (!data) dispatch(readTodoItems())
  }, [data])

  if (!data) return null

  return (
    <div>
      <Red>next top</Red>
      <ul>
        {data.todoItems.map((todoItem) => {
          const { id, title, description, isDone } = todoItem
          return (
            <li key={id}>
              {isDone ? "完了" : "未完"}, {title}, {description}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const Red = styled.span`
  color: red;
`

export default home
