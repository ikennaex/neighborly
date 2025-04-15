import React from "react";
import { bear, electronics, microwave, phone, skincare } from "../../imports";
import { Link } from "react-router-dom";

const Categories = () => {
  const items = [
    {
      text: "Phones & Tablet",
      img: phone,
      dbName: "phones-&-tablet",
    },
    {
      text: "Home appliances",
      img: microwave,
      dbName: "home-appliances",
    },
    {
      text: "Electronics",
      img: electronics,
      dbName: "electronics",
    },
    {
      text: "Beauty",
      img: skincare,
      dbName: "beauty",
    },
    {
      text: "Kids",
      img: bear,
      dbName: "kids",
    },
  ];
  return (
    <div>
      <div className="py-7">
        <p className="text-xl font-bold text-center mb-5 ">
          what are you looking for ?
        </p>

        <div className="flex gap-3 overflow-x-scroll w-full whitespace-nowrap justify-center">
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <Link to={`/categories/${items.dbName}`}>
                <div className="lg:w-52 w-24 lg:h-full h-28 bg-stone-200 rounded-xl py-7  flex flex-col justify-between items-center">
                  <img
                    className="lg:h-14 h-12 pb-2"
                    src={item.img}
                    alt={item.text}
                  />
                  <p
                    className="text-[0.7rem] leading-[0.8rem] text-center"
                    href={item.link}
                  >
                    {item.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
