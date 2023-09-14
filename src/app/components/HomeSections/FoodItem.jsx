import Image from "next/image";
import React from "react";
import item1 from "../assets/Food Item 1.svg";
import item2 from "../assets/Food Item 2.svg";
import item3 from "../assets/Food Item 3.svg";
import item4 from "../assets/Food Item 4.svg";
import Link from "next/link";

const FoodItem = () => {
  const foodItems = [
    { imageSrc: item1, link: "/pages/menu" },
    { imageSrc: item2, link: "/pages/menu" },
    { imageSrc: item3, link: "/pages/menu" },
    { imageSrc: item4, link: "/pages/menu" },
  ];

  return (
    <>
      <div className="container-fluid my-5 bg-leaf">
        <div className="container-fluid">
          <div className="container text-center my-3">
            <p className="primary-color fs-4 Great-Vibes">Food Category</p>
            <span className="fs-2 fw-bold text-white">
              <span className="primary-color fs-2 fw-bold">Ch</span>
              oose Food Item
            </span>
          </div>
          <div className="container my-4">
            <div className="row">
              {foodItems.map((foodItem, index) => (
                <div className="col-md-3 my-2" key={index}>
                  <Link href={foodItem.link}>
                    <Image
                      src={foodItem.imageSrc}
                      alt={`Item-${index + 1}`}
                      className="img-fluid"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
