import styled from "styled-components";
import HeroImg from "../assets/HeroImg.png";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 992px) {
    padding: 40px;
    height: auto;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const WelcomeText = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  color: #e5c9c9;
  margin-bottom: 10px;

  @media (max-width: 992px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.4;
  color: #fff;
  margin-bottom: 20px;

  span {
    color: #ffce72;
  }

  @media (max-width: 992px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 30px;
  width: 40%;

  @media (max-width: 992px) {
    width: 60%;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  background-color: #2a5d2e;
  color: #fff;
  border: none;
  padding: 20px 35px;
  font-size: 18px;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  width: 20%;
  transition: background-color 0.3s ease, font-size 0.3s ease;

  &:hover {
    background-color: #1e4a23;
  }

  @media (max-width: 992px) {
    font-size: 16px;
    padding: 15px 30px;
    width: 30%;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 25px;
    width: 50%;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 20px;
    width: 70%;
  }
`;

export const FeaturesSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff7e2;
  padding: 15px 100px;
  gap: 10px;
  max-width: 100%;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    padding: 15px 50px;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 15px 20px;
  width: 300px;
  border-bottom: none;

  @media (max-width: 992px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding: 10px 15px;
  }

  @media (max-width: 480px) {
    border-bottom: 1px solid #ddd;
  }
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 992px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const FeatureText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #3a643b;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
