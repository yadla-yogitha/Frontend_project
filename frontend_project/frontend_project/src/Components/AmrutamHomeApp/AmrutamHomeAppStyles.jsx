import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  background-color: #fff8e7;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding-left: 100px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    padding-left: 50px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    margin-right: 0;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Questrial', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #2b6129;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subheading = styled.p`
  font-size: 16px;
  color: #5c5c5c;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Subheadings = styled.p`
  font-family: 'Questrial', sans-serif;
  font-size: 32px;
  color: #121212;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CTA = styled.h2`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AppIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s;

  img {
    width: 200px;
    height: auto;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 120px;
    }
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 80px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;
