import React from "react";
import MenuItem from "../StarterMenu/MenuItem";
import Coffee from "../../assets/Coffee-cup.svg";
import Drinks from '../../assets/Drinks.svg'
import Image from "next/image";

const DrinksMenu = () => {
  const drinkList = [
    {
      title: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "$32",
    },
    {
      title: "Caffè macchiato",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "$43",
    },
    {
      title: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "$14",
    },
    {
      title: "Tormentoso BushTea Pintoage",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "$35",
    },
  ];
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 my-2 me-5">
          <Image src={Coffee} className="img-fluid" />
          <h2 className="fw-bold">Drinks</h2>
          {drinkList.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              calories={item.calories}
              price={item.price}
            />
          ))}
        </div>
        <div className="col-lg-5 mt-2">
          <Image src={Drinks} className="img-fluid" alt="Drinks" />
        </div>
      </div>
    </div>
  );
};

export default DrinksMenu;
