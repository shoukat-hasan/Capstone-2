import React from "react";
import Leaf from "../assets/Right bgLeaf.svg";
import Image from "next/image";
import Chef1 from "../assets/Chef 1.svg";
import Chef2 from "../assets/Chef 2.svg";
import Chef3 from "../assets/Chef 3.svg";
import Chef4 from "../assets/Chef 4.svg";

const OurChefs = () => {
  const chefsData = [
    { imageSrc: Chef1, name: "D.Estwood", role: "Chief Chef" },
    { imageSrc: Chef2, name: "D.Scoriesh", role: "Assistant Chef" },
    { imageSrc: Chef3, name: "M. William", role: "Advertising Chef" },
    { imageSrc: Chef4, name: "W.Readfroad", role: "Chef" },
  ];

  return (
    <>
      <div className="container-fluid my-5 position-relative">
        <div className="position-absolute bg-leaf">
          <Image src={Leaf} alt="Leaf" className="img-fluid ms-5" />
        </div>
      </div>
      <div className="container my-5 text-center">
        <p className="primary-color fs-4 Great-Vibes">Chefs</p>
        <span className="fs-2 fw-bold text-white">
          <span className="primary-color fs-2 fw-bold">Me</span>
          et Our Chef
        </span>
      </div>
      <div className="container">
        <div className="row">
          {chefsData.map((chef, index) => (
            <div className="col-md-3 my-2" key={index}>
              <div className="position-relative">
                <Image src={chef.imageSrc} alt="chef" className="img-fluid" />
                <div className="position-absolute top-50 mt-5">
                  <div className="bg-white text-dark mt-5 px-3">
                    <p className="fw-bold">{chef.name}</p>
                    <span>{chef.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container my-5 text-center">
          <button
            type="button"
            className="btn search-bar rounded-pill text-white px-5 py-2"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default OurChefs;
