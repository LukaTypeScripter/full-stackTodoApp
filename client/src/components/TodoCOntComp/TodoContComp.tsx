import React from 'react'
import { DElateBtn, DelateImg, InpChecked, Label, Round, TodoCont, TodoItem, TodoLi } from '../styles/mainPage'
import { Todo } from '../MainPage'
import cross from '../../images/icon-cross.svg'
interface Props {
    todos:Todo[]
    toggleChecked: (index: number) => void
    deleteTodo: (todoId: string) => Promise<void>
}
function TodoContComp(p:Props) {
    const {todos,toggleChecked,deleteTodo} = p;
  return (
    <TodoCont>
          
            {todos.map((todo, index) => (
              <TodoItem key={todo._id} checked={todo.checked}>
                <Label>
                  <InpChecked
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleChecked(index)}
                  />
                  <Round></Round>
                </Label>
                <TodoLi>{todo.text}</TodoLi>
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