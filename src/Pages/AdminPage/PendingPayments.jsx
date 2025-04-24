import React, { useContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import AdminNavbar from './AdminNavbar';
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { format } from "date-fns";

const PendingPayments = () => {
  
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 
  const [transactions, setTransactions] = useState([]);
    const [fetchedUsers, setFetchedUsers] = useState([]);
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/"); // Redirect to home if not an admin
    }
  }, [user, navigate]); // Only re-run when user or navigate changes

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const {data} =  await axios.get(`${baseUrl}transactions`)
        setTransactions(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false);
      }
    }

    fetchTransactions()
  }, [])
  
  return (
    <div className="flex">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Transactions</h2>
        {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Customer Name</th>
                <th className="border p-2">Vendor Name</th>
                <th className="border p-2">Transaction Amount</th>
                <th className="border p-2">Transaction Date</th>
                <th className="border p-2">Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice().reverse().map((transaction) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{transaction.userName}</td>
                  <td className="border p-2">{transaction.vendorName}</td>
                  <td className="border p-2  text-customGreen">₦{transaction.amount}</td>
                  <td className="border p-2">{format(transaction.createdAt, "MMMM, d yyyy")}</td>
                  <td className="border p-2">{transaction.reference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        
      </div>
    </div>
  )
}

export default PendingPayments