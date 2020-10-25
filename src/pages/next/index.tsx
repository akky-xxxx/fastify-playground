// import node_modules
import React, { useEffect } from "react"
import styled from "styled-components"

import { useDispatch, useSelector } from "../../store"
import { readTodos } from "../../store/reducers/todos"
import { updateTodosId } from "../../store/reducers/todosId"

// main
const home = () => {
  const state = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const { data } = state

  useEffect(() => {
    if (!data) dispatch(readTodos())
  }, [data])

  if (!data) return null

  const handleUpdateTodoItem = () => dispatch(updateTodosId())

  return (
    <div>
      <Red>next top</Red>
      <div>
        <button type="button" onClick={handleUpdateTodoItem}>
          ボタン
        </button>
      </div>
      <ul>
        {data.todos.map((todoItem) => {
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
