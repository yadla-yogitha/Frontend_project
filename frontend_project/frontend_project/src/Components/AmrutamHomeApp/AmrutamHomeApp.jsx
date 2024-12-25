import React from "react";
import {
  Section,
  TextSection,
  Heading,
  Subheading,
  Subheadings,
  CTA,
  ButtonWrapper,
  AppIcon,
  ImageSection,
} from "./AmrutamHomeAppStyles.jsx"; 
import PlayStoreIcon from "../assets/PlayStore.png"; 
import AppStoreIcon from "../assets/AppStore.png";
import MockupImage from "../assets/Mockup.png";

const AmrutamHomeApp = () => {
    return (
      <Section>
        <TextSection>
          <Heading>Amrutam Home App</Heading>
          <Subheading>
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </Subheading>
          <CTA>Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe</CTA>
          <Subheadings>Get The App Now</Subheadings>
          <ButtonWrapper>
            <AppIcon href="#">
              <img src={PlayStoreIcon} alt="Google Play" />
            </AppIcon>
            <AppIcon href="#">
              <img src={AppStoreIcon} alt="App Store" />
            </AppIcon>
          </ButtonWrapper>
        </TextSection>
        <ImageSection>
          <img src={MockupImage} alt="Amrutam Home App Mockup" />
        </ImageSection>
      </Section>
    );
  };
  
  export default AmrutamHomeApp;