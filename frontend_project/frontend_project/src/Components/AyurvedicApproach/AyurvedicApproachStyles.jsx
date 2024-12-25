import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #2b6129;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Enable snapping */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Card = styled.div`
  flex: 0 0 auto; /* Ensure the card doesn't shrink or grow */
  background-color: #fdf5e6;
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  scroll-snap-align: center; /* Snap card to the center when scrolling */

  /* Responsive card sizes */
  width: 80%; /* Default size */
  max-width: 250px;

  @media (min-width: 1024px) {
    width: 400px; /* Larger cards for bigger screens */
  }

  @media (max-width: 768px) {
    width: 70%; /* Adjust size for medium screens */
  }

  @media (max-width: 480px) {
    width: 90%; /* Adjust size for smaller screens */
  }
`;

export const NumberIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #3a643b;
  color: #fff;
  border-radius: 50%;
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    top: -20px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2b6129;
  margin: 40px 0 10px 0;

  @media (max-width: 768px) {
    margin: 30px 0 8px 0;
    font-size: 1rem;
  }
`;

export const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
