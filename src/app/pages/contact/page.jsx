
import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center text-success">Contact Us</h1>
      <Footer />
    </div>
  );
};

export default ContactPage;
