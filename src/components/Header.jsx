import styled from 'styled-components';
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const Menu = styled.nav`
  background-color: #fff;
`;

const Title = styled.h1`

`;

export function Header() {

  return (

    <HeaderContainer>
      <Title>
        My Movies
      </Title>
      <Menu>
        <Link to={`/`}>Home</Link>
      </Menu>
    </HeaderContainer>

  );
}
