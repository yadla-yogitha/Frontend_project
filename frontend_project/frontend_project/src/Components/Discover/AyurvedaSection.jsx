import React from "react";
import yoga from "../assets/Yoga.png"; 
import { ReactComponent as WellnessIcon } from "../assets/wellness.svg"; 
import { ReactComponent as PreventionIcon } from "../assets/prevention.svg";
import { ReactComponent as HealingIcon } from "../assets/Healing.svg";
import { ReactComponent as RemediesIcon } from "../assets/Remedies.svg";
import { ReactComponent as MindBodyIcon } from "../assets/connection.svg";
import { ReactComponent as ImmunityIcon } from "../assets/immunity.svg";
import {
  Container,
  Title,
  Subtitle,
  Side,
  ContentWrapper,
  InfoBox1,
  InfoBox,
  YogaImage,
} from "./AyurvedaSectionstyles.jsx"; 

const AyurvedaSection = () => {
  return (
    <Container>
      <Title>Discover Ayurveda’s Magic With Us</Title>
      <Subtitle>
        Ayurvedic treatment aims to balance your body and mind, bringing harmony
        and vitality. It’s like a journey to better health using ancient wisdom,
        a totally effective approach for a better life.
      </Subtitle>
      <ContentWrapper>
        <Side>
        <InfoBox1>
          <div>
              <h3>Personalized Wellness</h3>
              <p>Get treatments made just for you based on your individual doshas ( body type)</p>
            </div>
            <WellnessIcon />           
          </InfoBox1>
          <InfoBox1>
          <div>
              <h3>Focus on prevention</h3>
              <p>Stop problems even before they start.</p>
            </div>
            <PreventionIcon />           
          </InfoBox1>
          <InfoBox1>
          <div>
              <h3>Holistic Healing</h3>
              <p>Fix the root problem for long-lasting health.</p>
            </div>
            <HealingIcon />            
          </InfoBox1>
        </Side>
        <YogaImage src={yoga} alt="Yoga" />
        <Side>
          <InfoBox>
            <RemediesIcon />
            <div>
              <h3>Natural Remedies</h3>
              <p>Using herbs and natural therapies for healing.</p>
            </div>
          </InfoBox>
          <InfoBox>
            <MindBodyIcon />
            <div>
              <h3>Mind-Body Connection</h3>
              <p>Keep your mind and body in sync for a happy life.</p>
            </div>
          </InfoBox>
          <InfoBox>
            <ImmunityIcon />
            <div>
              <h3>Boosting immunity</h3>
              <p>Stay strong and healthy for life, not just for today.</p>
            </div>
          </InfoBox>
        </Side>
      </ContentWrapper>
    </Container>
  );
};

export default AyurvedaSection;
