import React, { useState } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  HamburgerMenu,
  MobileMenu,
  MobileButtonsContainer,
  LoginButton,
  SignupButton,
} from "./NavbarStyles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>AMRUTAM</Logo>
      <HamburgerMenu onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Find Doctors</NavLink>
        <NavLink href="#">About Us</NavLink>
        <LoginButton>Login</LoginButton>
        <SignupButton>Sign-up</SignupButton>
      </NavLinks>
      {isOpen && (
        <MobileMenu>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Find Doctors</NavLink>
          <NavLink href="#">About Us</NavLink>
          <MobileButtonsContainer>
            <LoginButton>Login</LoginButton>
            <SignupButton>Sign-up</SignupButton>
          </MobileButtonsContainer>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
