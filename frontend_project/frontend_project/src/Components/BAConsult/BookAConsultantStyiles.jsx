import styled from "styled-components";
import BGImg from "../assets/BookbgImg.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 590px;
  background-image: url(${BGImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px; /* Adjust padding for smaller screens */
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  text-align: center;

  @media (max-width: 1024px) {
    height: 500px; /* Adjust height for tablets */
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    height: 400px; /* Adjust height for smaller screens */
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    height: 350px; /* Adjust height for very small screens */
    padding: 20px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  max-width: 856px;
  width: 100%;
  font-weight: bold;
  line-height: 1.4;
  color: #FFF7E2;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 48px; /* Adjust font size for tablets */
  }

  @media (max-width: 768px) {
    font-size: 36px; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 28px; /* Adjust font size for very small screens */
    margin-bottom: 15px;
  }
`;

export const Button = styled.button`
  background-color: #2a5d2e;
  color: #fff;
  border: none;
  padding: 20px 35px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e4a23;
  }

  @media (max-width: 1024px) {
    font-size: 16px; /* Adjust font size for tablets */
    padding: 18px 30px;
    width: 30%; /* Adjust button width */
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 15px 25px;
    width: 40%; /* Adjust button width */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Adjust font size for very small screens */
    padding: 10px 20px;
    width: 60%; /* Adjust button width */
  }
`;
