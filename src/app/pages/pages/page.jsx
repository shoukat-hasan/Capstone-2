import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Navbar from "@/app/components/navbar/Navbar";
import React from "react";

const PagePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className="text-center text-success">Pages Page</h1>
      <Footer />
    </div>
  );
};

export default PagePage;
