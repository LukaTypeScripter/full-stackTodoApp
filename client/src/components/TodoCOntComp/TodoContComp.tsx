import React, { useState } from 'react'
import {     Round,    } from '../styles/mainPage'
import { Todo } from '../MainPage'
import cross from '../../images/icon-cross.svg'
import { DElateBtn, DelateImg, InpChecked, Label, TodoCont, TodoItem, TodoLi } from './styles/todostyles'
interface Props {
    todos:Todo[]
    toggleChecked: (index: number) => void
    deleteTodo: (todoId: string) => Promise<void>
    darkTheme:boolean
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
function TodoContComp(p:Props) {
    const {todos,toggleChecked,deleteTodo,darkTheme,setTodos} = p;
    const [draggedTodo, setDraggedTodo] = useState<Todo | null>(null);
    const handleDragStart = (todo: Todo) => {
      setDraggedTodo(todo);
    };
  
    const handleDragEnd = () => {
      setDraggedTodo(null);
    };
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>, targetIndex: number) => {
      event.preventDefault();
  
      if (draggedTodo) {
        const draggedTodoIndex = todos.findIndex((todo) => todo._id === draggedTodo._id);
        const updatedTodos = [...todos];
        updatedTodos.splice(draggedTodoIndex, 1);
        updatedTodos.splice(targetIndex, 0, draggedTodo);
        setDraggedTodo(null);
        setTodos(updatedTodos)
      }
    };
  return (
    <TodoCont>
          
            {todos.map((todo, index) => (
              <TodoItem key={todo._id} checked={todo.checked} darkTheme={darkTheme}
              draggable
              onDragStart={() => handleDragStart(todo)}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, index)}
              >
                <Label darkTheme={darkTheme}>
                  <InpChecked
                    type="checkbox"
                    checked={todo.checked}
                    onChange={() => toggleChecked(index)}
                  />
                  <Round darkTheme={darkTheme} checked={todo.checked}></Round>
                </Label>
                <TodoLi darkTheme={darkTheme} >{todo.text}</TodoLi>
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