import React from "react";
import { HeroContainer, WelcomeText, Title, Subtitle, Button, FeaturesSection, FeatureCard, FeatureIcon, FeatureText } from "./HeroSectionstyled";

import ConsultationIcon from "../assets/icon1.svg";
import SafeTreatmentIcon from "../assets/icon2.svg";
import ExperiencedPractitionersIcon from "../assets/icon3.svg";
import PersonalizedGuidanceIcon from "../assets/icon4.svg";

const HeroSection = () => {
  return (
    <>
    <HeroContainer>
      <WelcomeText>Namaste, Welcome to Amrutam</WelcomeText>
      <Title>
        Step into Holistic Healing with <span>Ayurveda</span> <br />
        Book Consultation With Certified Experts
      </Title>
      <Subtitle>
        Dive into the world of ayurveda and experience personalized health solutions
        and holistic guidance from trusted ayurvedic doctors anytime, anywhere.
      </Subtitle>
      <Button>BOOK AN APPOINTMENT</Button>

    </HeroContainer>
 {/* Feature Section */}
 <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>
            <img src={ConsultationIcon} alt="Consultation Icon" />
          </FeatureIcon>
          <FeatureText>Convenient Online & In-Clinic Consultations</FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img src={SafeTreatmentIcon} alt="Safe Treatment Icon" />
          </FeatureIcon>
          <FeatureText>Safe And Effective &nbsp; Treatment</FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img src={ExperiencedPractitionersIcon} alt="Experienced Practitioners Icon" />
          </FeatureIcon>
          <FeatureText>Experienced Ayurvedic Practitioners</FeatureText>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <img src={PersonalizedGuidanceIcon} alt="Personalized Guidance Icon" />
          </FeatureIcon>
          <FeatureText>Personalized Treatment Plans & Guidance</FeatureText>
        </FeatureCard>
      </FeaturesSection>
  </>
  );
};

export default HeroSection;
