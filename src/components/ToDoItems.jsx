import styled from 'styled-components';
import completed from '../assets/done-icon.svg';
import notCompleted from '../assets/circle.svg';
import x from '../assets/x.svg';
import { useState } from 'react';
export const ToDoItems = ({ todos, setTodos }) => {
  const [boolean, setBoolean] = useState(false);
  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(filteredTodos);
    localStorage.setItem('data', JSON.stringify(filteredTodos));
  };
  const changeStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isActive: !todo.isActive,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <Wrapper>
      {todos &&
        todos.map((todo) => {
          return (
            <StyleToDo key={todo.id}>
              <div
                onClick={() => {
                  changeStatus(todo.id);
                }}
                className="box"
              >
                <img src={todo.isActive ? completed : notCompleted} />
                <p
                  style={{
                    textDecoration: todo.isActive ? 'line-through' : '',
                  }}
                >
                  {todo.text}
                </p>
              </div>
              <div
                onClick={() => {
                  deleteTodo(todo.id);
                }}
                className="deleteIcon"
              >
                <img src={x} alt="" />
              </div>
            </StyleToDo>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  background-color: var(--secondary-bg);
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0px 0px 8px -1px var(--secondary-color);
`;
const StyleToDo = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  background-color: transparent;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  gap: 40px;
  position: relative;
  .box {
    width: 95%;
    height: 90%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  img {
    height: 50%;
    user-select: none;
  }
  border-bottom: 1px solid var(--secondary-color);
  p {
    color: var(--text-color);
  }
  .deleteIcon {
    position: absolute;
    right: 15px;
    width: 20px;
    display: none;
    user-select: none;
  }
  &:hover .deleteIcon {
    display: block;
  }
`;
