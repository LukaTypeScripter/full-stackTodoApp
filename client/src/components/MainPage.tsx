import { AddInp, AddTodo, Button, Container, DElateBtn, DelateImg, Form, Header, HeaderText, Img, InpChecked, Label, Main, Round, TodoCont, TodoItem, TodoLi, Todos } from './styles/mainPage';
import moon from '../images/icon-moon.svg'
import ligth from '../images/icon-sun.svg'
import cross from '../images/icon-cross.svg'
import { useEffect, useState } from 'react';
import HeadersComp from './Header/Header';
import FromComp from './FormComp/FromComp';
import TodoContComp from './TodoCOntComp/TodoContComp';

export interface Todo {
  _id: string;
  text: string;
  checked: boolean; // Add a 'checked' property to the Todo interface
}

function MainPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/');
      const data = await response.json();
      // Add the 'checked' property to each todo item
      const todosWithChecked = data.map((todo: Todo) => ({
        ...todo,
        checked: false,
      }));
      setTodos(todosWithChecked);
    } catch (error) {
      console.error("error has happened " + error);
    }
  };

  const addTodo = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodoText.trim() !== '') {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:5000/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: newTodoText }),
        });

        if (response.ok) {
          const data = await response.json();
          // Add the 'checked' property to the new todo item
          const newTodo: Todo = { ...data, checked: false };
          setTodos([...todos, newTodo]);
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

  const toggleChecked = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  return (
    <Container>
      <Main>
       <HeadersComp darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        {/**form */}
       <FromComp newTodoText={newTodoText} setNewTodoText={setNewTodoText} addTodo={addTodo}/>
        <Todos>
        {/**todo cont */}
        <TodoContComp todos={todos} toggleChecked={toggleChecked}  deleteTodo={deleteTodo}/>
        </Todos>
      </Main>
    </Container>
  );
}

export default MainPage;
