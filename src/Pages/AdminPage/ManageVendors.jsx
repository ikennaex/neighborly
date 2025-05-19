import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { baseUrl } from '../../baseUrl';
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import AdminNavbar from './AdminNavbar';


const ManageVendors = () => {
  const [fetchedVendors, setFetchedVendors] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/"); // Redirect to home if not an admin
    }
  }, [user, navigate]); // Only re-run when user or navigate changes

    useEffect(() => {
      const fetchVendors = async () => {
        try {
          const response = await axios.get(`${baseUrl}vendors`); 
          setFetchedVendors(response.data);
          console.log("Fetched Users:", response.data);
        } catch (err) {
          if (err.response && err.response.status === 403) { // getting the error message from the backend
            alert(err.response.data.message)
          } 
          setError("Failed to fetch users");
        } finally {
          setLoading(false);
        }
      };
  
      fetchVendors();
    }, []);
  
    const handleDelete = async (userId) => {
      try {
        await axios.delete(`${baseUrl}deleteuser/${userId}`);
        setFetchedVendors((prevUsers) => prevUsers.filter(user => user.id !== userId));
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    };
  
    return (
      <div className="flex">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4">Manage Vendors</h1>
  
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">businessName</th>
                  <th className="border p-2">email</th>
                  <th className="border p-2">Username</th>
                  <th className="border p-2">Vendor Status</th>
                  <th className="border p-2">Phone Numbers</th>
                </tr>
              </thead>
              <tbody>
                {fetchedVendors.map((user) => (
                  <tr key={user._id} className="text-center">
                    <td className="border p-2">{user.businessName}</td>
                    <td className="border p-2">{user.email}</td>
                    <td className="border p-2">{user.username}</td>
                    <td className="border p-2">
                    {user.role === 'vendor' ? (
                      <span className="text-green-500 font-semibold">Vendor</span>
                    ) : (
                      <span className="text-red-500 font-semibold">Not a Vendor</span>
                    )}
                    </td>
                    <td className="border p-2">
                      {user.phoneNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    );
}

export default ManageVendors