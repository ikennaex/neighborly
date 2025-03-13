import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';


const VendorProducts = ({ user }) => { // Pass the logged-in user as a prop
    const { id } = useParams(); // Get vendor ID from URL
    const [fetchedProduct, setFetchedProduct] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${baseUrl}allproducts`)
                const filteredProducts = response.data.filter(product => 
                    product.vendor && product.vendor.toString() === id
                );
                setFetchedProduct(filteredProducts);
                console.log("Fetched Products:", filteredProducts);
                console.log("API Response:", response.data);
            } catch (err) {
                setError("Failed to fetch vendor");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, []);


    useEffect(() => {
        console.log("fetched Product:", fetchedProduct);
        console.log("Vendor:", fetchedProduct.vendor, id);
      }, [fetchedProduct]);

    return (
        <div className="container mx-auto">
            <div className="px-3 pb-10">

                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : fetchedProduct.length === 0 ? (
                    <p className="text-center">Failed to fetch vendor.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fetchedProduct.map((product) => (
                            <Link to = {`/products/${product._id}`} >
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

                                <div className="flex gap-2 flex-col mt-4">
                                    {user?.vendor_id && user.vendor_id === product.vendor && (
                                        <>
                                            <Link to={`/editproduct/${product.id}`}>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Edit
                                                </button>
                                            </Link>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </div>

                            </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default VendorProducts;
