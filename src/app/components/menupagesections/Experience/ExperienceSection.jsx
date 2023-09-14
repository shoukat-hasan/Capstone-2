import React from "react";
import Image from "next/image";
import Cap from "../../assets/Chef Cap.svg";
import Food from "../../assets/Food.svg";
import Experience from "../../assets/Experience.svg";
import Pizza from "../../assets/Pizza.svg";

const ExperienceSection = () => {
  const info = [
    {
      imageSrc: Cap,
      title: "Cap",
      number: "420",
      description: "Professional Chefs",
    },
    {
      imageSrc: Food,
      title: "Food",
      number: "320",
      description: "Items Of Food",
    },
    {
      imageSrc: Experience,
      title: "Experience",
      number: "30+",
      description: "Years Of Experienced",
    },
    {
      imageSrc: Pizza,
      title: "Slice",
      number: "220",
      description: "Happy Customers",
    },
  ];
  return (
    <div className="container-fluid ">
      <div className="container-fluid experience">
        <div className="d-flex justify-content-center align-items-center darkBg">
          <div className="row">
            {info.map((item, index) => (
              <div
                className="col-lg-3 col-sm-6 my-4 text-center text-white"
                key={index}
              >
                <div className="mx-5">
                  <Image src={item.imageSrc} alt={item.title} />
                  <p className="fs-6 mt-3 fw-bold">{item.description}</p>
                  <h5 className="fs-5 fw-bold lh-base">{item.number}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;