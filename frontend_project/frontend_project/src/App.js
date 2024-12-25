import React from "react";
import GlobalStyles from '../src/GlobalStyles';
import Navbar from "../src/Components/Navbar/Navbar";
import HeroSection from "./Components/Hero/HeroSection";
import AyurvedaSection from "./Components/Discover/AyurvedaSection";
import AyurvedaHighlights from "./Components/AyurvedaHighlights/AyurvedaHighlights";
import BookAConsultant from "./Components/BAConsult/BookAConsultant";
import AyurvedicApproach from "./Components/AyurvedicApproach/AyurvedicApproach";
import Testimonials from "./Components/Feedback/Testimonials";
import AyurvedaExperts from "./Components/AyurvedaExpert/AyurvedaExperts";
import AmrutamHomeApp from "./Components/AmrutamHomeApp/AmrutamHomeApp";
import Footer from "../src/Components/Footer/Footer"

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <AyurvedaSection />  
      <AyurvedaHighlights />  
      <BookAConsultant />
      <AyurvedicApproach />
      <Testimonials />
      <AyurvedaExperts />
      <AmrutamHomeApp />
      <Footer />
    </div>
  );
};

export default App;
