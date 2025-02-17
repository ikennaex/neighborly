import React from "react";
import { products } from "../../Components/Products/Products";

const Allproducts = () => {
  return (
    <div>
      <div className="py-7 px-3">
        <div className="bg-customGreen h-28 mb-8 text-white p-5 items-center justify-center flex flex-col rounded-xl">
          <p className="text-xl font-bold text-center ">Products</p>
          <p>Shop best deals only on awoof buyer</p>
        </div>

        <div className="flex items-center my-4">
          <p className="font-bold">Filter by :</p>
          <div>
            <select id="filterDropdown" class="border p-2 rounded">
              <option value="all">All</option>
              <option value="fruits">Categories</option>
              <option value="vegetables">Location</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center border-customGreen border-2 py-2 rounded-xl"
            >
              <div className="object-cover">
                <img className="h-32" src={product.img} alt="" />
              </div>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
