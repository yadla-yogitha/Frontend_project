import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2b6129;
  margin-bottom: 16px;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #7a7a7a;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 40px;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.4;
  }
`;


export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const YogaImage = styled.img`
  width: 500px;
  height: auto;

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  max-width: 350px;
  padding: 15px;
  border: 1px solid transparent;
  border-radius: 8px;

  @media (max-width: 768px) {
    border: 1px solid #ddd;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  svg {
    flex-shrink: 0;
    width: 60px;
    height: 60px;

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;

    @media (max-width: 480px) {
      align-items: center;
    }
  }

  h3 {
    font-size: 1.2rem;
    color: #2b6129;
    margin: 0 0 5px;

    @media (max-width: 480px) {
      text-align: center;
    }
  }

  p {
    font-size: 1rem;
    color: #7a7a7a;
    margin: 0;

    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;

export const InfoBox1 = styled(InfoBox)`
  justify-content: flex-end;

  @media (max-width: 480px) {
    align-items: center;
  }

  div {
    justify-content: flex-end;

    @media (max-width: 480px) {
      align-items: center;
    }
  }

  h3 {
    text-align: right;

    @media (max-width: 480px) {
      text-align: center;
    }
  }

  p {
    text-align: right;

    @media (max-width: 480px) {
      text-align: center;
    }
  }
`;
