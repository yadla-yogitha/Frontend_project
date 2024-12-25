import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center; /* Center cards horizontally */
  gap: 20px;
  overflow-x: auto; /* Enable horizontal scrolling */
  scroll-snap-type: x mandatory; /* Enable snapping */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for iOS */
  padding: 10px;

  @media (max-width: 768px) {
    gap: 10px; /* Reduce gap for smaller screens */
  }
`;

export const Card = styled.div`
  flex: 0 0 80%;
  max-width: 400px;
  background-color: #fffaf0;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  scroll-snap-align: center;

  @media (max-width: 768px) {
    flex: 0 0 90%;
  }

  @media (max-width: 480px) {
    flex: 0 0 95%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding: 20px;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Rating = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Details = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2b6129;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Designation = styled.p`
  font-size: 0.9rem;
  color: #777777;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Experience = styled.p`
  font-size: 0.9rem;
  color: #777777;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Speciality = styled.div`
  background-color: #e9f8e4;
  color: #2b6129;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
  display: inline-block;
  margin: 10px auto;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px 0;
  background-color: #2b6129;
  color: #ffffff;
  border: none;
  border-radius: 0 0 15px 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1f461c;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 0.9rem;
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #2b6129;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s;

  &:hover svg {
    transform: scale(1.1);
    fill: #1f461c;
  }

  ${({ direction }) =>
    direction === "left"
      ? `margin-right: 10px;`
      : `margin-left: 10px;`}

  @media (max-width: 768px) {
    display: none; /* Hide arrow buttons for smaller screens */
  }
`;

export const FooterButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #eaf5ec;
  color: #3a643b;
  border: 1px solid #3a643b;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1f461c;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2b6129;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
