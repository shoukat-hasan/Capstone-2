import Image from "next/image";
import React from "react";
import Restaurant from "../../assets/Restaurant.svg";
import Bakery1 from "../../assets/Bakery1.svg";
import Fork from "../../assets/Fork.svg";
import Wolf from "../../assets/Wolf.svg";
import Bistro from "../../assets/Bistro.svg";
import Bakery2 from "../../assets/Bakery2.svg";

const Partners = () => {
  const Images = [
    {
      imageSrc: Restaurant,
      alt: "Restuarant",
    },
    {
      imageSrc: Bakery1,
      alt: "Bakery1",
    },
    {
      imageSrc: Fork,
      alt: "Fork",
    },
    {
      imageSrc: Wolf,
      alt: "Wolf",
    },
    {
      imageSrc: Bistro,
      alt: "Bistro",
    },
    {
      imageSrc: Bakery2,
      alt: "Bakery2",
    },
  ];
  return (
    <div className="my-5">
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="fs-6 text-muted">Partners & Clients</p>
            <span className="fs-3 fw-bold">We work with the best people</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {Images.map((image, index) => (
            <div className="col-lg-2 d-flex justify-content-center align-items-center" key={index}>
              <Image
                src={image.imageSrc}
                alt={image.alt}
                className="img-fluid my-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
