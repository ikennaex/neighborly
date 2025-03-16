import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';
import Loader from '../../Loader/Loader';

const VendorProducts = () => { 
    const { id } = useParams(); // Get vendor ID from URL
    const [fetchedProduct, setFetchedProduct] = useState([]);
    const [error, setError] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [vendorData, setVendorData] = useState({});
    const { user } = useContext(UserContext);
    const navigate = useNavigate(); // Initialize navigate function
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${baseUrl}vendor/${id}`);
                setVendorData(response.data);
                
            } catch (err) {
                setError("Failed to fetch vendor details");
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchUser();
        }
    }, [id]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${baseUrl}allproducts`);
                const filteredProducts = response.data.filter(product => 
                    product.vendor && product.vendor.toString() === id
                );
                setFetchedProduct(filteredProducts);
            } catch (err) {
                setError("Failed to fetch vendor");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleDelete = async (productId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        console.log(productId)
        if (confirmDelete) {
            setDeleting(productId);
            try {
                const response = await axios.delete(`${baseUrl}delete/${productId}`);
                alert("Product deleted successfully!");
                
                setFetchedProduct(prevProducts => prevProducts.filter(product => product._id !== productId));
                console.log(setFetchedProduct)
            } catch (err) {
                console.error("Error deleting product:", err);
                alert("Failed to delete product. Please try again.");
            } finally {
                setDeleting(null); // Reset loader after delete
            }
        }
    };

    if (loading) return <Loader />;
    
    return (
        <div className="container mx-auto">
            <div className="px-3 pb-10">
                {loading ? (
                    <p className="text-center">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : fetchedProduct.length === 0 ? (
                    <p className="text-center">No products found for this vendor.</p>
                ) : (
                    <>
                        {/* Display Vendor Information */}
                        <h2>Vendor Information</h2>
                        {vendorData && (
                            <div className="mb-6 p-4 border rounded-lg shadow-md bg-gray-100">
                                <h2 className="text-2xl font-bold">{vendorData.businessName}</h2>
                                <p className="text-gray-700"><strong>Address:</strong> {vendorData.businessAddress}</p>
                                <p className="text-gray-700"><strong>Phone:</strong> {vendorData.phoneNumber}</p>
                                <p className="text-gray-700"><strong>Description:</strong> {vendorData.storeDescription}</p>
                            </div>
                        )}

                        <h2 className="mt-6 text-xl font-bold">Vendor Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                            {fetchedProduct.map((product) => (
                                <div key={product._id} className="border p-4 rounded-lg shadow-md">
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

                                    {/* Edit and Delete Buttons */}
                                    <div className="flex gap-2 flex-col mt-4">
                                        {user && user._id === product.vendor && (
                                            <>
                                                <Link to={`/editproduct/${product._id}`}>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                        Edit
                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(product._id)}
                                                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center ${
                                                        deleting === product._id ? "opacity-50 cursor-not-allowed" : ""
                                                    }`}
                                                    disabled={deleting === product._id}
                                                >
                                                    {deleting === product._id ? (
                                                        <span className="loader border-t-2 border-white border-solid rounded-full w-5 h-5 animate-spin"></span>
                                                    ) : (
                                                        "Delete"
                                                    )}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default VendorProducts;
