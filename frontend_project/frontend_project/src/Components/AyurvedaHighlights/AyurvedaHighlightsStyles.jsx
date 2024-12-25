import styled from "styled-components";

export const Container = styled.div`
  background-color: #fdf5e6;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 960px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #2b6129;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SanskritBox = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 -5px 0 0 #2b6129;
  height: auto;
  max-width: 371px; /* Matches the image max-width */
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
    width: 100%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.5rem;
    color: #2b6129;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #7a7a7a;
    margin: 0;
    font-family: "Roboto", sans-serif;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 371px; /* Matches SanskritBox max-width */
    height: auto;
    border-radius: 10px;
    object-fit: cover;

    @media (max-width: 1024px) {
      max-width: 300px;
      height: auto;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      height: auto;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: auto;
    }
  }
`;

export const LeftCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 -5px 0 0 #2b6129;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 371px; /* Matches the image and SanskritBox width */
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 90%;
  }

  h3 {
    font-size: 1.2rem;
    color: #2b6129;
    margin-bottom: 0px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    color: #7a7a7a;
    font-family: "Roboto", sans-serif;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const RightCard = styled(LeftCard)``;
