import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { baseUrl } from "../../baseUrl";
import "./allproducts.css"

const Allproducts = () => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}allproducts`);
        setFetchedProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="py-7">
        <div className="css-pattern bg-customGreen h-28 mb-8 text-white p-5 flex flex-col items-center justify-center rounded-xl">
          <p className="text-xl font-bold text-center">Products</p>
          <p>Shop best deals only on Neighborly</p>
        </div>

        <div className="flex items-center my-4">
          <p className="font-bold">Filter by :</p>
          <select id="filterDropdown" className="border p-2 rounded ml-2">
            <option value="all">All</option>
            <option value="fruits">Categories</option>
            <option value="vegetables">Location</option>
          </select>
        </div>
        
        {fetchedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fetchedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product._id}`}>
                <div className="flex flex-col justify-between items-center bg-white p-4 text-center rounded-xl h-84 transition-shadow duration-300 hover:shadow-lg">
                  {/* Product Image */}
                  <div className="object-cover w-full">
                    <img
                      className="h-48 w-full object-contain rounded-lg"
                      src={`${baseUrl}${product.imgUrl}`}
                      alt={product.name}
                    />
                  </div>

                  {/* Product Details */}
                  <p className="font-semibold mt-2">{product.name}</p>
                  <p className="text-gray-600">₦{product.price}</p>
                  <p className="text-gray-600">{product.location}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Allproducts;