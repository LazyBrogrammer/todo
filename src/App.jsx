import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ToDoItems } from './components/ToDoItems';
import styled from 'styled-components';
export const App = () => {
  const [theme, setTheme] = useState(false);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let initialTheme = localStorage.getItem('theme') === 'true';
    setTheme(initialTheme);
    let initialTodos = JSON.parse(localStorage.getItem('data')) || [];
    setTodos(initialTodos);
  }, []);

  function changeStatus(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }
  return (
    <Container className={theme ? 'dark' : ''}>
      <Header
        todos={todos}
        setTodos={setTodos}
        theme={theme}
        setTheme={setTheme}
      />
      <ToDoItems
        todos={todos}
        setTodos={setTodos}
        changeStatus={changeStatus}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--secondary-bg);
`;
