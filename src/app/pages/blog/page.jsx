import Footer from "@/app/components/Footer/Footer";
import Hero from "@/app/components/Hero/Hero";
import Blog from "@/app/components/HomeSections/Blog";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
