import React from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VendorProducts = ({ user }) => { // Pass the logged-in user as a prop
    const { id } = useParams(); // Get vendor ID from URL

    // Check if the logged-in user is a vendor and matches the vendor ID
    if (!user || user.role !== 'vendor' || user.id.toString() !== id) {
        return (
            <div className='text-center mt-10'>
                <h2>You have no products or you are not authorized to view this page</h2>
            </div>
        );
    }

    // Filter products belonging to the logged-in vendor
    const vendorProducts = vendorproducts.filter((p) => p.vendor_id.toString() === id);

    return (
        <div className="container mx-auto">
            <div className="px-3 pb-10">
                <h1 className="text-2xl font-bold mb-5">Your Products</h1>

                {vendorProducts.length === 0 ? (
                    <p className="text-center">You have no products listed.</p>
                ) : (
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
                                    <Link to={`/editproduct/${product.id}`}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Edit
                                        </button>
                                    </Link>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VendorProducts;
