import styled from 'styled-components';
import circle from '../assets/circle.svg';
export const Input = () => {
  return (
    <StyledInput>
      <img src={circle} alt="" />
      <input type="text" placeholder="Create a new todo" />
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
