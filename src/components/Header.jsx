import styled from 'styled-components';
import { useState } from "react";


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    transform: none;
    box-shadow: none;
  }
`;

const MenuItem = styled.a`
  display: block;
  padding: 10px;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (min-width: 768px) {
    border-bottom: none;
    padding: 0 20px;
  }
`;

const MenuButton = styled.button`
  display: block;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.span`
display: block;
width: 20px;
height: 2px;
background-color: #333;
margin: 4px 0;
transition: transform 0.3s ease-in-out;

  &:first-child {
    transform: ${({ open }) => open ? 'translate(0, 11px) rotate(-45deg)'  : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
  }

  &:nth-child(3) {
    position:relative;
    transform: ${({ open }) => open ? ' translate(0, -11px) rotate(45deg)' : 'none'};
  }
`;

export function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (

    <HeaderContainer>
      <h1>My Movies</h1>
      <Menu open={open}>
        <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Services</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
      </Menu>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon open={open} />
        <MenuIcon open={open} />
        <MenuIcon open={open} />
      </MenuButton>
    </HeaderContainer>

  );
}
