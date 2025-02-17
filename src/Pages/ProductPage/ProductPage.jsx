import React from 'react'
import { products } from '../../Components/Products/Products'
import { useParams } from 'react-router-dom'
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";


const ProductPage = () => {
    const { id } = useParams(); // 
  const product = products.find((p) => p.id); 

  if (!product) {
    return <h2>Product Not Found</h2>; // 
  }

  return (
    <div className="container mx-auto">
      <div className="px-3 pb-10">
        <div>
          <div>
            <img src={product.img} alt={product.name} />
          </div>

          <div className='flex gap-2'>
            <div className='h-16 w-20 bg-slate-400'></div>
            <div className='h-16 w-20 bg-slate-400'></div>
            <div className='h-16 w-20 bg-slate-400'></div>
          </div>

          <div className='py-5'>
            <h1 className='text-xl font-semibold'>{product.name}</h1>
            <p className='font-semibold'>{product.price}</p>
            <p className='text-sm'>{product.location}</p>
          </div>

          <div className='h-0.5 bg-customGreen'>

          </div>

          <div className='py-5'>
            <p>{product.desc}</p>
          </div>

          <div className='flex gap-2 flex-col'>
            <button className='w-full h-12 rounded-xl text-white bg-customGreen flex items-center justify-center gap-3'> <FaWhatsapp size={24} />
            Contact Seller</button>
            <button className='w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3'> <FaDollarSign size={25} />
            Make Payment</button>
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
  );
}

export default ProductPage
