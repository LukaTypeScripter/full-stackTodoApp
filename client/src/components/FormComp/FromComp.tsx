import React from 'react'
import { AddInp, Form, Round } from '../styles/mainPage'
interface Props {
    newTodoText:string
    setNewTodoText:React.Dispatch<React.SetStateAction<string>>
    addTodo:(e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>
    darkTheme:boolean
}
function FromComp(p:Props) {
    const {newTodoText,setNewTodoText,addTodo,darkTheme} = p;
  return (
    <Form darkTheme={darkTheme}>
          <Round darkTheme={darkTheme}></Round>
          <AddInp
          darkTheme={darkTheme}
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