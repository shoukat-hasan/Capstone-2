import React from "react";
import check from "../assets/check.svg";
import EggDish from "../assets/Egg.svg";
import FoodDish from "../assets/Food Dish.svg";
import Sandwich from "../assets/Sandwich.svg";
import Image from "next/image";

const HAbout = () => {
  const aboutData = [
    {
      title: "Lacus nisi, et ac dapibus sit eu velit in consequat.",
      icon: check,
    },
    {
      title: "Quisque diam pellentesque bibendum non dui volutpat fringilla.",
      icon: check,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: check,
    },
  ];
  return (
    <div className="container my-5">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="container my-5 mx-1">
              <p className="primary-color fs-4 Great-Vibes">About us</p>
              <span className="fs-2 fw-bold text-white">
                <span className="primary-color fs-2 fw-bold">We </span>
                Create the best foody product
              </span>
              <p className="text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
              {aboutData.map((item, index) => (
                <div className="d-flex justify-content-start my-3" key={index}>
                  <Image
                    src={item.icon}
                    alt="tick"
                    className="img-fluid me-2"
                  />
                  <span>{item.title}</span>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-color rounded-pill text-white px-4 py-2"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 my-5">
            <div className="container">
              <div className="d-flex justify-content-center">
                <Image src={EggDish} alt="Egg" className="img-fluid" />
              </div>
              <div className="d-flex justify-content-between mt-2">
                <div className="container px-1">
                  <Image src={FoodDish} alt="Food" className="img-fluid" />
                </div>
                <div className="container px-1">
                  <Image src={Sandwich} alt="Sandwich" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HAbout;
