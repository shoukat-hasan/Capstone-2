import Image from "next/image";
import React from "react";
import Item1 from "../assets/Choose 1.svg";
import Item2 from "../assets/Choose 2.svg";
import Item3 from "../assets/Choose 3.svg";
import Item4 from "../assets/Choose 4.svg";
import Item5 from "../assets/Choose 5.svg";
import Item6 from "../assets/Choose 6.svg";
import HamBurger from "../assets/Hamburger.svg";
import Cookie from "../assets/Cookie.svg";
import Wine from "../assets/Wine.svg";
import Link from "next/link";
import YellowLine from "../assets/yellow line.svg";

const Reason = () => {
  const foodItems = [Item6, Item5, Item4, Item3, Item2, Item1];
  const items = [
    { name: "Fast Food", src: HamBurger },
    { name: "Lunch", src: Cookie },
    { name: "Dinner", src: Wine },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="my-4 d-flex align-items-end">
            <div>
              <Image src={foodItems[0]} alt="food Item" className="img-fluid" />
            </div>
            <div className="mx-3">
              <Image src={foodItems[1]} alt="food Item" className="img-fluid" />
            </div>
          </div>
          <div className="d-flex p-1">
            <div className="container">
              <Image src={foodItems[2]} alt="Food Item" className="img-fluid" />
            </div>
            <div className="container">
              <Image src={foodItems[3]} alt="Food Item" className="img-fluid" />
            </div>
            <div className="d-flex mb-3">
              <div className="align-items-center">
                <Image
                  src={foodItems[4]}
                  alt="Food Item"
                  className="img-fluid mb-2"
                />
                <Image
                  src={foodItems[5]}
                  alt="Food Item"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 ms-2">
          <div className="container my-5 mx-1">
            <p className="primary-color fs-4 Great-Vibes">Why Choose us</p>
            <span className="fs-2 fw-bold text-white">
              <span className="primary-color fs-2 fw-bold">Ex</span>
              tra ordinary taste And Experienced
            </span>
            <p className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
          </div>
          <div className="d-flex justify-content-start mx-2">
            {items.map((item, index) => (
              <div key={index} className="me-4">
                <Link
                  href="./pages/menu"
                  className="text-decoration-none text-white"
                >
                  <div className="text-center rounded p-3 yellowBg">
                    <Image
                      src={item.src}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                  <p className="text-center">{item.name}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="ms-2">
            <div
              className="position-relative whiteBg rounded"
              style={{ width: "16rem" }}
            >
              <Image src={YellowLine} alt="line" className="img-fluid" />
              <div className="position-absolute d-flex top-0">
                <div className="container d-flex align-items-center m-4">
                  <span className="primary-color fw-bold me-0 fs-2">30+</span>
                </div>
                <div className="text-black my-3">
                  <p className="fs-6">Years of</p>
                  <span className="fw-bold fs-6">Experienced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
