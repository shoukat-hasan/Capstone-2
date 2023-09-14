import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import DessertSection from "@/app/components/menupagesections/Desserts/DessertSection";
import DrinksMenu from "@/app/components/menupagesections/Drinks/Drinks";
import ExperienceSection from "@/app/components/menupagesections/Experience/ExperienceSection";
import MainCourse from "@/app/components/menupagesections/MainCourse/MainCourse";
import Partners from "@/app/components/menupagesections/Partners/Partners";
import StarterMenu from "@/app/components/menupagesections/StarterMenu/StarterMenu";
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

const MenuPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StarterMenu />
      <MainCourse />
      <ExperienceSection />
      <DessertSection />
      <DrinksMenu />
      <Partners />
      <Footer />
    </div>
  );
};

export default MenuPage;
