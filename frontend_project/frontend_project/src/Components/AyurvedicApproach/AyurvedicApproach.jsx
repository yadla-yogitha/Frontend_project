import React from "react";
import {
  Container,
  Title,
  Description,
  CardContainer,
  Card,
  NumberIcon,
  CardTitle,
  CardText,
} from "./AyurvedicApproachStyles.jsx";

const AyurvedicApproach = () => {
  const steps = [
    {
      number: 1,
      title: "Make Appointment",
      text: "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: 2,
      title: "Consultations",
      text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      number: 3,
      title: "Treatment Planning",
      text: "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      number: 4,
      title: "Maintenance",
      text: "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  return (
    <Container>
      <Title>Our Ayurvedic Approach</Title>
      <Description>
        At Amrutam we follow a unique and personalized approach to healing. Our
        expert practitioners begin each treatment process by conducting a
        thorough analysis of the patient’s body type, medical history, and
        current health conditions.
      </Description>
      <CardContainer>
        {steps.map((step) => (
          <Card key={step.number}>
            <NumberIcon>{step.number}</NumberIcon>
            <CardTitle>{step.title}</CardTitle>
            <CardText>{step.text}</CardText>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default AyurvedicApproach;
