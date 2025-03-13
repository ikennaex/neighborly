import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaDollarSign, FaStore } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import Loader from '../../Loader/Loader';


const ProductPage = () => {
  const { id } = useParams(); 
  const [fetchedProduct, setFetchedProduct] = useState({});
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}product/${id}`); // API endpoint
        setFetchedProduct(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch products");
        console.log(err);
      } finally {
        setLoading(false)
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  if (loading) {
    <Loader />
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!fetchedProduct) {
    return <h2>Product Not Found</h2>; 
  }

  const vendorId = fetchedProduct._id; 

  return (
    <div className="container mx-auto">
      <div className="px-7 pb-10">
        <div className='lg:flex gap-48'>

          <div>
          <div className="flex items-center justify-center">
            <img src={fetchedProduct.img} alt={fetchedProduct.name} className="object-cover scale-55"/>
          </div>

          <div className='flex gap-2'>
            <div className='h-16 w-20 bg-slate-400'></div>
            <div className='h-16 w-20 bg-slate-400'></div>
            <div className='h-16 w-20 bg-slate-400'></div>
          </div>
          </div>

          <div>
          <div className='py-5'>
            <h1 className='text-xl font-semibold'>{fetchedProduct.name}</h1>
            <p className='font-semibold'>{fetchedProduct.price}</p>
            <p className='text-sm'>{fetchedProduct.location}</p>
          </div>

          <div className='h-0.5 bg-customGreen'></div>

          <div className='py-5'>
            <p>{fetchedProduct.desc}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 w-full">
            <button className="w-full lg:flex-1 h-12 rounded-xl text-white bg-customGreen flex items-center justify-center gap-3">
              <FaWhatsapp size={24} /> Contact Seller
            </button>
            
            <button className="w-full lg:flex-1 h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3">
              <FaDollarSign size={25} /> Make Payment
            </button>
            
            <Link to={`/vendor/${vendorId}`} className="w-full lg:flex-1">
              <button className="w-full lg:flex-1 h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3">
                <FaDollarSign size={25} /> View Vendor Page
              </button>
            </Link>
          </div>

          <div className='mt-7 border-2 border-customGreen bg-white p-4 rounded-xl'>
            <p className='font-semibold'>Note:</p>
            <ul className='list-decimal px-6 '>
                <li>Contact seller for availability before making payment</li>
                <li>Meet the supplier in a safe, public place.</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
