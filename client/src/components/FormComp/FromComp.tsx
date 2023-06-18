import React from 'react'
import { AddInp, Form, Round } from '../styles/mainPage'
interface Props {
    newTodoText:string
    setNewTodoText:React.Dispatch<React.SetStateAction<string>>
    addTodo:(e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>
}
function FromComp(p:Props) {
    const {newTodoText,setNewTodoText,addTodo} = p;
  return (
    <Form>
          <Round></Round>
          <AddInp
            type="text"
            placeholder="create new todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={addTodo}
          />
        </Form>
  )
}

export default FromComp