import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import Loader from '../../Loader/Loader';

const ProductPage = () => {
  const { id } = useParams(); 
  const [fetchedProduct, setFetchedProduct] = useState({});
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}product/${id}`);
        setFetchedProduct(response.data);
        console.log(fetchedProduct)
        console.log(fetchedProduct.vendor)
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  
  useEffect(() => {
    console.log("Updated Product:", fetchedProduct);
    console.log("Vendor:", fetchedProduct.vendor);
  }, [fetchedProduct]);


  if (loading) return <Loader />;
  if (error) return <h2 className="text-center text-red-500">{error}</h2>;
  if (!fetchedProduct) return <h2 className="text-center">Product Not Found</h2>;

  const vendorId = fetchedProduct.vendor;

  return (
    <div className="container mx-auto px-5 lg:px-20 py-10">
      {/* Image Section */}
      <div className="flex flex-col items-center gap-4">
        <img src={`${baseUrl}${fetchedProduct.imgUrl[0]}`} alt={fetchedProduct.name} className="w-full max-w-2xl object-cover rounded-lg shadow-lg" />
        <div className='flex gap-2'>
          <div className='h-16 w-20 bg-slate-400 rounded-md'></div>
          <div className='h-16 w-20 bg-slate-400 rounded-md'></div>
          <div className='h-16 w-20 bg-slate-400 rounded-md'></div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg w-full">
        <h1 className="text-2xl font-bold">{fetchedProduct.name}</h1>
        <p className="text-lg font-semibold text-gray-700">₦{fetchedProduct.price}</p>
        <p className="text-sm text-gray-500">{fetchedProduct.location}</p>
        <div className="h-0.5 bg-customGreen my-4"></div>
        <p className="text-gray-700">{fetchedProduct.desc}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="w-full h-12 rounded-xl text-white bg-customGreen flex items-center justify-center gap-3">
          <FaWhatsapp size={24} /> Contact Seller
        </button>
        <button className="w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3">
          <FaDollarSign size={25} /> Make Payment
        </button>
        <Link to={`/vendor/${vendorId}`} className="w-full">
          <button className="w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3">
            <FaDollarSign size={25} /> View Vendor Page
          </button>
        </Link>
      </div>

      {/* Note Section */}
      <div className='mt-7 border-2 border-customGreen bg-white p-4 rounded-xl'>
        <p className='font-semibold'>Note:</p>
        <ul className='list-disc pl-6 text-gray-700'>
          <li>Contact seller for availability before making payment.</li>
          <li>Meet the supplier in a safe, public place.</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
