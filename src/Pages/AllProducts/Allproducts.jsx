import React from "react";
import { products } from "../../Components/Products/Products";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const Allproducts = () => {
  return (
    <div className="container mx-auto">
      <div className="py-7 px-3">
        <div className="bg-customGreen h-28 mb-8 text-white p-5 items-center justify-center flex flex-col rounded-xl">
          <p className="text-xl font-bold text-center ">Products</p>
          <p>Shop best deals only on awoof buyer</p>
        </div>

        <div className="flex items-center my-4">
          <p className="font-bold">Filter by :</p>
          <div>
            <select id="filterDropdown" className="border cl p-2 rounded">
              <option value="all">All</option>
              <option value="fruits">Categories</option>
              <option value="vegetables">Location</option>
            </select>
          </div>
        </div>
          {products? (
        <div className="grid grid-cols-2 gap-1">
            {products.map((product) => (
              <Link to = {`/products/${product.id}`} >
              <div
                key={product.id}
                className="flex flex-col justify-between items-center border-customGreen border-2 p-2 text-center rounded-xl"
              >
                <div className="object-cover">
                  <img className="h-32" src={product.img} alt="" />
                </div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              </Link>
            ))}

        </div>
          ): <Loader />}
      </div>
    </div>
  );
};

export default Allproducts;
