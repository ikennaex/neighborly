import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';


const ManageVendors = () => {
  const [fetchedVendors, setFetchedVendors] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
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
                  <th className="border p-2">Actions</th>
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
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
}

export default ManageVendors