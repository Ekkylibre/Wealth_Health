import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <StyledNav>
      <Container>
        <Brand to="/">
          <Logo src="./public/Logo.png" alt="Logo" />
          <Title>Wealth Health</Title>
        </Brand>
        <StyledUl>
          <StyledLi>
            <StyledNavLink exact='true' to="/" activeclassname="active">Create Employee</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/ListEmployeePage" activeclassname="active">Current Employees</StyledNavLink>
          </StyledLi>
        </StyledUl>
      </Container>
    </StyledNav>
  );
}

export default NavBar;

const StyledNav = styled.nav`
  background-color: #bedfcf;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  max-height: 50px;
`;

const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
`;

const Title = styled.span`
  font-size: 1.5rem;
  margin-left: 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-left: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  position: relative;

  &:hover {
    text-decoration: none;
  }

  &.active {
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      background-color: #000;
    }
  }
`;
