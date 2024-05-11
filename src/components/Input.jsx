import styled from 'styled-components';
import circle from '../assets/circle.svg';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
export const Input = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');
  let valueObj = {
    text: '',
    id: uuidv4(),
    isActive: false,
  };
  const saveValue = () => {
    valueObj.text = value;
    setTodos([...todos, valueObj]);
    localStorage.setItem('data', JSON.stringify(todos));
  };
  const sendData = () => {
    saveValue();
    setValue('');
  };
  return (
    <StyledInput onKeyUp={(e) => e.key === 'Enter' && sendData()}>
      <img onClick={() => sendData()} src={circle} alt="" />
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Create a new todo"
        value={value}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 60px;
  background-color: var(--secondary-bg);
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  gap: 40px;
  img {
    width: 30px;
    height: 30px;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    width: 80%;
    height: 90%;
    color: var(--text-color);
    font-size: 1.5rem;
    &::placeholder {
      color: var(--secondary-color);
    }
  }
`;
