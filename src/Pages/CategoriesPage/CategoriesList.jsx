import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CategoriesList = () => {
  const { categoryName } = useParams();
  const [fetchedProducts, setFetchedProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const categoryList = await axios.get(
        `${baseUrl}categories/${categoryName}`
      );
      setFetchedProducts(categoryList.data);
    };


    fetchCategory();
  }, []);


  return (
    <div className="container">
      <div className="mx-auto p-7">
        <div className="text-center text-customBlue text-2xl font-semibold">
          Shop in category: {categoryName}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          {fetchedProducts.map((product) => {
            return (
              <div className="">
                <Link key={product.id} to={`/products/${product._id}`}>
                  <div className="flex flex-col justify-between items-center bg-white p-4 text-center rounded-xl h-84 transition-shadow duration-300 hover:shadow-lg">
                    {/* Product Image */}
                    <div className="object-cover w-full">
                      <img
                        className="h-48 w-full object-contain rounded-lg"
                        src={`${product.imgUrl}`}
                        alt={product.name}
                      />
                    </div>

                    {/* Product Details */}
                    <p className="font-semibold mt-2">{product.name}</p>
                    <p className="text-gray-600">₦{product.price}</p>
                    <p className="text-gray-600">{product.location}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
