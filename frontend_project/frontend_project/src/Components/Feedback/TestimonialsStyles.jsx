import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff4e6;
  padding: 40px 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #2b6129;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CardContainer = styled.div`
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
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;

  /* Adjust card width dynamically to fit one card on the screen */
  width: 80%; /* Default for medium to large screens */
  max-width: 350px; /* Maximum width limit */
  flex-shrink: 0; /* Prevent shrinking of cards */
  scroll-snap-align: center; /* Center card when scrolling */

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for tablets */
  }

  @media (max-width: 480px) {
    width: 95%; /* Adjust width for small screens */
  }
`;


export const CardHeader = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export const CardBody = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;

  .date {
    font-size: 0.8rem;
    color: #999999;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: #cccccc;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const ProfileDetails = styled.div`
  flex-grow: 1;
  margin-left: 10px;

  h3 {
    font-size: 0.9rem;
    color: #333333;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #777777;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const Stars = styled.div`
  font-size: 1.2rem;
  color: #ffd700;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Quote = styled.div`
  h3 {
    font-size: 1.1rem;
    font-style: italic;
    color: #333333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 0.9rem;
    color: #555555;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #dcdcdc;
    margin: 0 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 8px;
      height: 8px;
    }
  }

  .dot.active {
    background-color: #2b6129;
  }
`;
