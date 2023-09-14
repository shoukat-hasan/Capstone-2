import React from "react";
import StarterImage from "../../assets/Starter M Img.svg";
import Coffee from "../../assets/Coffee-cup.svg";
import MenuItem from "./MenuItem";
import Image from "next/image";


const StarterMenu = () => {
  const sMenuList = [
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: "560 CAL",
      price: "$32",
    },
    {
      title: "Berries and Crème Tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: "700 CAL",
      price: "$43",
    },
    {
      title: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: "1000 CAL",
      price: "$14",
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: "560 CAL",
      price: "$35",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 me-5 mt-2">
          <Image src={StarterImage} className="img-fluid" alt="Salmon" />
        </div>
        <div className="col-lg-6 my-2 me-4">
          <Image src={Coffee} className="img-fluid" alt="Coffee Cup"/>
          <h2 className="fw-bold">Starter Menu</h2>
          {sMenuList.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              description={item.description}
              calories={item.calories}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
