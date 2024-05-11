import styled from 'styled-components';
import { Input } from './Input';
import { Navbar } from './Navbar';
// import images
import darkBackround from '../assets/dark-bg.jpeg';
import lightBackground from '../assets/light-bg.jpeg';
export const Header = ({ theme, setTheme, todos, setTodos }) => {
  return (
    <StyledHeader
      style={{
        backgroundImage:
          'url(' + `${theme ? darkBackround : lightBackground}` + ')',
      }}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Input theme={theme} todos={todos} setTodos={setTodos} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  /* position: sticky;
  top: 0; */
  width: 100%;
  min-height: 30vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 2rem;
`;
