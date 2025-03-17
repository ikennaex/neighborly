import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { GrFormUpload } from "react-icons/gr";
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import Loader from "../../Loader/Loader"; // Import Loader component

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const { id } = useParams(); // Get vendor ID from URL
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Loader state
  const [deleting, setDeleting] = useState(null);
  const [fetchedProduct, setFetchedProduct] = useState([]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}logout`, {});
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user.role === "vendor" && id) {
      const fetchProduct = async () => {
        setLoading(true); // Start loading
        try {
          const response = await axios.get(`${baseUrl}allproducts`);
          const filteredProducts = response.data.filter(
            (product) => product.vendor && product.vendor.toString() === id
          );
          setFetchedProduct(filteredProducts);
        } catch (err) {
          console.error("Failed to fetch vendor products:", err);
        } finally {
          setLoading(false); // Stop loading
        }
      };
      fetchProduct();
    }
  }, [id, user.role]);

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      setDeleting(productId);
      try {
        await axios.delete(`${baseUrl}delete/${productId}`);
        alert("Product deleted successfully!");
        setFetchedProduct((prevProducts) => prevProducts.filter((product) => product._id !== productId));
      } catch (err) {
        console.error("Error deleting product:", err);
        alert("Failed to delete product. Please try again.");
      } finally {
        setDeleting(null);
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="p-7">
        {user.role === "vendor" && (
          <Link className="flex items-center pb-4 gap-2" to="/newproduct">
            <GrFormUpload className="text-customBlue" size={30} />
            <p className="text-customBlue text-bold underline text-xl">Upload a new product</p>
          </Link>
        )}

        <div>
          <h2 className="text-3xl font-bold pb-3">User Information</h2>
          {user.role === "vendor" && (
            <div>
              <p className="text-xl">Business Name: {user.businessName}</p>
              <p className="text-xl">Business Address: {user.businessAddress}</p>
              <p className="text-xl">Phone Number: {user.phoneNumber}</p>
            </div>
          )}
          <p className="text-xl">Name: {user.firstName + " " + user.lastName}</p>
          <p className="text-xl">Username: {user.username}</p>
          <p className="text-xl">Role: {user.role}</p>
        </div>

        <div className="pt-6">
          <button onClick={handleLogout} className="bg-red-600 px-4 py-2 text-white">
            Log out
          </button>
        </div>

        <h2 className="mt-6 text-xl font-bold">Vendor Products</h2>

        {/* Show Loader when fetching products */}
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {fetchedProduct.map((product) => (
                <div key={product._id} className="border p-4 rounded-lg shadow-md">
                <img src={`${baseUrl}${product.imgUrl}`} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />

                <div className="py-2">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="font-semibold flex items-center">
                    <FaDollarSign className="mr-1" /> {product.price}
                  </p>
                  <p className="text-sm">{product.location}</p>
                </div>

                <div className="h-0.5 bg-customGreen my-2"></div>

                <p className="text-gray-700">{product.desc}</p>

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
        )}
      </div>
    </div>
  );
};

export default UserInfo;
