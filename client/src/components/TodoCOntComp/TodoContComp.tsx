import React from 'react'
import { DElateBtn, DelateImg, InpChecked, Label, Round, TodoCont, TodoItem, TodoLi } from '../styles/mainPage'
import { Todo } from '../MainPage'
import cross from '../../images/icon-cross.svg'
interface Props {
    todos:Todo[]
    toggleChecked: (index: number) => void
    deleteTodo: (todoId: string) => Promise<void>
    darkTheme:boolean
}
function TodoContComp(p:Props) {
    const {todos,toggleChecked,deleteTodo,darkTheme} = p;
  return (
    <TodoCont>
          
            {todos.map((todo, index) => (
              <TodoItem key={todo._id} checked={todo.checked} darkTheme={darkTheme}>
                <Label darkTheme={darkTheme}>
                  <InpChecked
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleChecked(index)}
                  />
                  <Round darkTheme={darkTheme}></Round>
                </Label>
                <TodoLi darkTheme={darkTheme}>{todo.text}</TodoLi>
                <DElateBtn>
                  <DelateImg
                    src={cross}
                    onClick={() => deleteTodo(todo._id)}
                  />
                </DElateBtn>
              </TodoItem>
            ))}
          
        </TodoCont>
  )
}

export default TodoContComp