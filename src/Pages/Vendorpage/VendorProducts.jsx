import React from 'react'
import { vendorproducts } from '../../Components/Vendor/Vendor';
import { useParams } from 'react-router-dom';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";

const VendorProducts = () => {
    const { id } = useParams(); // Get vendor ID from URL

    // Filter all products belonging to the vendor
    const vendorProducts = vendorproducts.filter((p) => p.vendor_id.toString() === id);

    if (vendorProducts.length === 0) {
        return (
            <div className='text-center mt-10'>
                <h2>You have no products or you are not a vendor</h2>
            </div>
        );
    }

  return (
    <div className="container mx-auto">
                <div className="px-3 pb-10">
                    <h1 className="text-2xl font-bold mb-5">Vendor's Products</h1>
    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vendorProducts.map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg shadow-md">
                                <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
    
                                <div className='py-2'>
                                    <h2 className='text-xl font-semibold'>{product.name}</h2>
                                    <p className='font-semibold flex items-center'>
                                        <FaDollarSign className="mr-1" /> {product.price}
                                    </p>
                                    <p className='text-sm'>{product.location}</p>
                                </div>
    
                                <div className='h-0.5 bg-customGreen my-2'></div>
    
                                <p className='text-gray-700'>{product.desc}</p>
    
                                <div className='flex gap-2 flex-col mt-4'>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default VendorProducts