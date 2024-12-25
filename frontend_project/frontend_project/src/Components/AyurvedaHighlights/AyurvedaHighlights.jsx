import React from "react";
import {
  Container,
  Title,
  ContentWrapper,
  Row,
  SanskritBox,
  LeftCard,
  RightCard,
  ImageBox,
} from "./AyurvedaHighlightsStyles";
import Image1 from "../assets/image1.png"; // Replace with actual images
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

const AyurvedaHighlights = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>What sets Ayurvedic consultations apart?</Title>
        {/* First Row */}
        <Row>
          <SanskritBox>
            <h3>
              स्वस्थस्य स्वास्थ्य रक्षणं,
              <br />
              आतुरस्य विकार प्रशमनं ॥
            </h3>
            <p>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </SanskritBox>
          <ImageBox>
            <img src={Image1} alt="Ayurveda Consultation" />
          </ImageBox>
          <RightCard>
            <h3>Precise Diagnosis</h3>
            <p>
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </RightCard>
        </Row>

        {/* Second Row */}
        <Row>
          <LeftCard>
            <h3>Zero side-effects</h3>
            <p>
              Ayurvedic treatments are devoid of chemicals, and are based
              completely on natural herbs.
            </p>
          </LeftCard>
          <ImageBox>
            <img src={Image2} alt="Ayurvedic Herbs" />
          </ImageBox>
          <RightCard>
            <h3>Individual Treatment</h3>
            <p>
              All treatments are personalized based on a person's unique
              constitution and health concerns.
            </p>
          </RightCard>
          <ImageBox>
            <img src={Image3} alt="Ayurvedic Lifestyle" />
          </ImageBox>
        </Row>
      </ContentWrapper>
    </Container>
  );
};

export default AyurvedaHighlights;
