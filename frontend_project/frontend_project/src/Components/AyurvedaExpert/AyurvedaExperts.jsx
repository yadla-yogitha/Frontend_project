import React from "react";
import {
  Container,
  Card,
  ImageWrapper,
  ProfileImage,
  Rating,
  Details,
  Name,
  Designation,
  Experience,
  Speciality,
  Button,
  ArrowButton,
  FooterButton,
  Title,
} from "./AyurvedaExpertsStyles";
import ExpertImage from "../assets/ExpertImg.png";
import { ReactComponent as ArrowL } from "../assets/ArrowL.svg";
import { ReactComponent as ArrowR } from "../assets/ArrowR.svg";

const experts = [
  {
    name: "Dr. Vaishali Sharma",
    designation: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    speciality: "Skin Specialist",
    rating: 4.5,
    image: ExpertImage,
  },
  {
    name: "Dr. Vaishali Sharma",
    designation: "Ayurveda Specialist (BAMS, MD)",
    experience: "20 years of experience",
    speciality: "Hair Care",
    rating: 4.7,
    image: ExpertImage,
  },
  {
    name: "Dr. Vaishali Sharma",
    designation: "Ayurveda Expert (BAMS, MD)",
    experience: "18 years of experience",
    speciality: "General Health",
    rating: 4.8,
    image: ExpertImage,
  },
];

const AyurvedaExperts = () => {
  return (
    <>
      <Title>Meet our Ayurveda experts</Title>
      <Container>
        <ArrowButton direction="left">
          <ArrowR />
        </ArrowButton>
        {experts.map((expert, index) => (
          <Card key={index}>
            <ImageWrapper>
              <ProfileImage src={expert.image} alt={expert.name} />
              <Rating>
                <span>{expert.rating}</span>
                <span>★</span>
              </Rating>
            </ImageWrapper>
            <Details>
              <Name>{expert.name}</Name>
              <Designation>{expert.designation}</Designation>
              <Experience>
                <i className="fas fa-graduation-cap"></i> {expert.experience}
              </Experience>
              <Speciality>{expert.speciality}</Speciality>
            </Details>
            <Button>Book a session</Button>
          </Card>
        ))}
        <ArrowButton direction="right">
          <ArrowL />
        </ArrowButton>
      </Container>
      <FooterButton>Find More Experts</FooterButton>
    </>
  );
};

export default AyurvedaExperts;
