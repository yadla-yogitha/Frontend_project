import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #eef3eb;
  padding: 40px 20px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 250px;

  @media (max-width: 768px) {
    min-width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    text-align: center;
  }
`;

export const ColumnTitle = styled.h4`
  font-size: 18px;
  color: #3b643b;
  font-weight: 600;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ContactText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #000;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  svg {
    font-size: 20px;
    color: #3b643b;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 10px;
    svg {
      font-size: 18px;
    }
  }
`;

export const FooterLink = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #474747;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 30px;
  border: 1px solid #3b643b;
  border-radius: 40px;
  overflow: hidden;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 15px 20px;
  font-size: 16px;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;

export const SubscribeButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3b643b;
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
  }
`;
