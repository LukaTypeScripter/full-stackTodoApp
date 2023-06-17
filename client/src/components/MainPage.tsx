
import {  AddInp, AddTodo, Button, Container, DElateBtn, DelateImg, Form, Header, HeaderText, Img, InpChecked, Label, Main, Round, TodoCont, TodoItem, TodoLi, Todos } from './styles/mainPage';
import moon from '../images/icon-moon.svg'
import ligth from '../images/icon-sun.svg'
import cross from '../images/icon-cross.svg'
import { useEffect, useState } from 'react';
interface Todo {
  _id: string;
  text: string;
}
function MainPage() {
  const [todos,setTodos] = useState<Todo[]>([])
  const [newTodoText,setNewTodoText] = useState('')
  const [darkTheme,setDarkTheme] = useState(false)

useEffect(() => {
    fetchTodos()
},[])

const fetchTodos = async () => {
  try {
    const response = await fetch('http://localhost:5000/')
    const data = await response.json()
    setTodos(data)
  } catch (error) {
      console.error("error has happened " + error)
  }
}
console.log(todos)
const addTodo = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter' && newTodoText.trim() !== '') {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: newTodoText })
      });

      if (response.ok) {
        const data = await response.json();
        setTodos([...todos, data]);
        setNewTodoText('');
      } else {
        console.log('Error occurred');
      }
    } catch (error) {
      console.log(error);
    }
  }
};
const deleteTodo = async (todoId: string) => {
  try {
    const response = await fetch(`http://localhost:5000/delate/${todoId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setTodos(todos.filter((todo) => todo._id !== todoId));
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <Container >
        <Main>
        <Header>
          <HeaderText>ToDo</HeaderText>
          <Button onClick={() => setDarkTheme(!darkTheme)}>
            {darkTheme ? (
            <Img src={moon} alt="" />
            ) : (
              <Img src={ligth} alt="" />
            )}
            
            
          </Button>
        </Header>
        {/**form */}
        <Form>
          <Round></Round>
          <AddInp type='text' placeholder='create new todo' value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} onKeyPress={addTodo}/>
        </Form>
        {/**todo cont */}
        <TodoCont>
          <Todos>
           {todos.map(todo => (
             <TodoItem key={todo._id}>
             <Label>
               <InpChecked type="checkbox"/>
               <Round></Round>
             </Label>
             <TodoLi>{todo.text}</TodoLi>
             <DElateBtn>
               <DelateImg src={cross} onClick={() => deleteTodo(todo._id)}/>
             </DElateBtn>
           </TodoItem>
           ))}
          </Todos>
        </TodoCont>
        </Main>
    </Container>
  )
}

export default MainPage