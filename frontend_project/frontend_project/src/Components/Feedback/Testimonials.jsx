import React from "react";
import {
  Container,
  Title,
  CardContainer,
  Card,
  CardHeader,
  CardBody,
  UserInfo,
  ProfileImage,
  ProfileDetails,
  Stars,
  Quote,
  Pagination,
} from "./TestimonialsStyles";

const testimonials = [
    {
      header: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      rating: 5,
      quote: "One of a kind service",
      content:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      headerColor: "#ECE7FF", 
    },
    {
      header: "Consulted for Hair",
      name: "Sophie Moore",
      location: "Mumbai",
      date: "17/02/24",
      rating: 5,
      quote: "Highly satisfied with the results",
      content:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      headerColor: "#ECFEE7", 
    },
    {
      header: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Delhi",
      date: "17/02/24",
      rating: 5,
      quote: "Amazing experience!",
      content:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
      headerColor: "#ECFEE7",
    },
  ];
  

const Testimonials = () => {
  return (
    <Container>
      <Title>Stories from our valued customers!</Title>
      <CardContainer>
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
          <CardHeader style={{ backgroundColor: testimonial.headerColor }}>
            {testimonial.header}
          </CardHeader>
          <CardBody>
            <UserInfo>
              <ProfileImage />
              <ProfileDetails>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.location}</p>
              </ProfileDetails>
              <span className="date">{testimonial.date}</span>
            </UserInfo>
            <Stars>
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </Stars>
            <Quote>
              <h3>"{testimonial.quote}"</h3>
              <p>{testimonial.content}</p>
            </Quote>
          </CardBody>
        </Card>        
        ))}
      </CardContainer>
      <Pagination>
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </Pagination>
    </Container>
  );
};

export default Testimonials;
