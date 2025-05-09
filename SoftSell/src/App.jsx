import React from "react";
import HeroSection from "./Components/HeroSection";
import HowItWorks from "./Components/HowItWorks";
import WhyChooseUs from "./Components/WhyChooseUs";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/ContactForm";

const App = () => {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default App;
