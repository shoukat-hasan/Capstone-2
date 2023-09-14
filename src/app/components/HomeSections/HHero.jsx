import Image from "next/image";
import React from "react";
import Line from "../assets/Line 11.svg";
import Facebook from "../assets/Facebook Icon.svg";
import Twitter from "../assets/Twitter Icon.svg";
import Pintrest from "../assets/Pinterest Icon.svg";
import HeroImg from "../assets/HeroImg.svg";

const HHero = () => {
  const imageIcon = [
    {
      icon: Line,
      alt: "Line",
    },
    {
      icon: Facebook,
      alt: "Facebook",
    },
    {
      icon: Twitter,
      alt: "Twitter",
    },
    {
      icon: Pintrest,
      alt: "Pintrest",
    },
    {
      icon: Line,
      alt: "Line",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1 col-sm-12">
          <div className="d-flex flex-column align-items-center">
            {imageIcon.map((item, index) => (
              <div className="mb-3" key={index}>
                <Image
                  src={item.icon}
                  alt={item.alt}
                  className="img-fluid me-3"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="container my-5 mx-3">
            <p className="primary-color fs-4 Great-Vibes">
              Its Quick & Amusing!
            </p>
            <span className="display-6 fw-bold text-white">
              <span className="primary-color display-6 fw-bold">Th</span>e Art
              of speed food Quality
            </span>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
            <button
              type="button"
              className="btn btn-color rounded-pill text-white px-4 py-2"
            >
              See Menu
            </button>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="container my-5 mx-3">
            <Image src={HeroImg} alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HHero;
