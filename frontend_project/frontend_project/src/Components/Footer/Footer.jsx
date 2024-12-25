import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  ColumnTitle,
  ContactText,
  SocialIcons,
  FooterLink,
  NewsletterForm,
  Input,
  SubscribeButton,
} from "./FooterStyles.jsx";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Contact Section */}
        <FooterColumn>
          <ColumnTitle>Get in touch</ColumnTitle>
          <ContactText>support@amrutam.co.in</ContactText>

          <ContactText>
            Amrutam Pharmaceuticals Pvt Ltd., <br />
            Chitragupt Ganj, Nai Sadak, Lashkar, <br />
            Gwalior - 474001
          </ContactText>
          
          <ContactText>+91 9713171999</ContactText>
          <SocialIcons>
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
          </SocialIcons>
        </FooterColumn>

        {/* Information Section */}
        <FooterColumn>
          <ColumnTitle>Information</ColumnTitle>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Terms and Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Privacy Policy for Mobile Apps</FooterLink>
          <FooterLink>Shipping and Returns Policy</FooterLink>
          <FooterLink>International Delivery</FooterLink>
          <FooterLink>For Businesses, Hotels and Resorts</FooterLink>
        </FooterColumn>

        {/* Newsletter Section */}
        <FooterColumn>
          <ColumnTitle>
            Subscribe to our Newsletter and join Amrutam Family today!
          </ColumnTitle>
          <NewsletterForm>
            <Input type="email" placeholder="Your Email Address" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </NewsletterForm>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
