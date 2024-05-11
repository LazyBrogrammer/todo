import styled from 'styled-components';
import sunIcon from '../assets/sun-icon.svg';
import moonIcon from '../assets/moon-icon.svg';
export const Navbar = ({ theme, setTheme }) => {
  return (
    <StyledNavbar>
      <h2>todo</h2>
      <img
        onClick={() => {
          setTheme(!theme);
          localStorage.setItem('theme', !theme);
        }}
        src={`${theme ? moonIcon : sunIcon}`}
        alt=""
      />
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 60%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 15px;
    color: #fff;
  }
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
