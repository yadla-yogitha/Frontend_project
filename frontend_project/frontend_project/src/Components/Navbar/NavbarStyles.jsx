import styled from "styled-components";

// Main Navbar Container
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff8e8;
  font-family: 'Roboto', sans-serif;
  height: 70px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (max-width: 992px) {
    padding: 10px 15px;
    height: 65px;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    height: 60px;
  }
`;

// Logo
export const Logo = styled.div`
  font-family: 'Questrial', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #375d38;
  letter-spacing: 0.25rem;

  @media (max-width: 992px) {
    font-size: 22px;
    letter-spacing: 0.2rem;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.15rem;
  }
`;

// Hamburger Menu Icon
export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background-color: #375d38;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background-color: #2a4a2e;
  }

  @media (max-width: 992px) {
    display: flex; // Visible only on screens <= 992px
  }
`;

// Navigation Links Container
export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 992px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")}; // Hide if hamburger is toggled
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #fff8e8;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

// Individual Nav Link
export const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 17px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #375d38;
    text-decoration: underline;
  }

  @media (max-width: 992px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Mobile Menu Container
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: #fff8e8;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  animation: fadeIn 0.3s ease-in-out;

  @media (min-width: 993px) {
    display: none;
  }

  @media (max-width: 768px) {
    top: 60px;
    gap: 10px;
    padding: 15px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Mobile Buttons Container
export const MobileButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

// Login Button
export const LoginButton = styled.button`
  background-color: transparent;
  color: #375d38;
  border: 2px solid #375d38;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    background-color: #375d38;
    color: #fff;
    box-shadow: 0 4px 15px rgba(55, 93, 56, 0.3);
  }

  @media (max-width: 992px) {
    font-size: 14px;
    padding: 8px 18px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 15px;
  }
`;

// Signup Button
export const SignupButton = styled.button`
  background-color: #375d38;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2a4a2e;
    box-shadow: 0 4px 15px rgba(42, 74, 46, 0.3);
    transform: scale(1.05);
  }

  @media (max-width: 992px) {
    font-size: 14px;
    padding: 8px 20px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 18px;
  }
`;
