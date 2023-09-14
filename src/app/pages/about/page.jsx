import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import OurChefs from "@/app/components/HomeSections/OurChefs";
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurChefs />
      <Footer />
    </div>
  );
};

export default AboutPage;
