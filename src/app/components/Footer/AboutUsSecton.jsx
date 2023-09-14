import Image from "next/image";
import React from "react";
import Clock from "../assets/Clockwise.svg";

const AboutUsSection = () => {
  return (
    <div className="col-lg-4">
      <span className="fs-5 fw-bold">About us.</span>
      <p className="mt-4">
        Corporate clients and leisure travelers have been relying on Groundlink
        for dependable, safe, and professional chauffeured car service in major
        cities across the world.
      </p>
      <div className="container d-flex pe-5">
        <div className="text-center rounded yellowBg" style={{width: "5rem", height: "5rem"}}>
          <Image src={Clock} alt="clock" className="img-fluid py-3" />
        </div>
        <div className="px-3">
          <p className="fs-6 lh-1">Opening hours</p>
          <p className="fs-6 lh-1">Mon - Sat(8.00 - 6.00)</p>
          <span className="fs-6 lh-1">Sunday - Closed</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
