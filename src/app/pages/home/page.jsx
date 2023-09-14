import Footer from "@/app/components/Footer/Footer";
import Blog from "@/app/components/HomeSections/Blog";
import FoodItem from "@/app/components/HomeSections/FoodItem";
import HAbout from "@/app/components/HomeSections/HAbout";
import HNavbar from "@/app/components/HomeSections/HNavbar";
import OurChefs from "@/app/components/HomeSections/OurChefs";
import Process from "@/app/components/HomeSections/Process";
import Reason from "@/app/components/HomeSections/Reason";
import Testimonial from "@/app/components/HomeSections/Testimonial";
import ExperienceSection from "@/app/components/menuPageSections/Experience/ExperienceSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="container-fluid bg-black text-white">
      <HNavbar />
      <HAbout />
      <FoodItem />
      <Reason />
      <ExperienceSection />
      <OurChefs />
      <Testimonial />
      <Process />
      <Blog />
      <Footer />
    </div>
  );
};

export default HomePage;
