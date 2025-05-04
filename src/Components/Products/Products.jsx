import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";

const Products = ({ search }) => {
  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}allproducts`); // API endpoint
        setFetchedProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = fetchedProducts?.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.desc.toLowerCase().includes(search.toLowerCase()) ||
      product.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="py-7">
        <p className="text-xl font-bold text-center mb-5">Products</p>

        {/* Responsive Grid Layout */}

        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Loader />
          </div>
        )}

        {/* See More Button */}
        <div className="flex justify-center mt-7">
          <Link to="/allproducts">
            <button className="bg-customYellow rounded-md p-2 w-full sm:w-auto">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
