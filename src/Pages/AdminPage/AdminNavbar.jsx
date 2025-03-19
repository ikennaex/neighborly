import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUsers, FaStore, FaMoneyCheck } from "react-icons/fa";

const AdminNavbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar

    return (
      <>
        {/* Mobile Toggle Button */}
        <button 
          className="mt-5 lg:hidden fixed top-20 left-4 z-50 text-customBlue-200 bg-customBlue-600 p-2 rounded-full shadow-md"
          onClick={() => setIsOpen(true)} // Always opens the menu
          style={{ zIndex: 60 }} // Ensures button stays above sidebar
        >
          <FaBars size={24} />
        </button>
  
        {/* Sidebar */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-customBlue text-white p-5 transform transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:relative`}
        >
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
  
          <ul className="space-y-4">
            <li>
              <Link to="/admin/manage-users" className="flex items-center gap-3 hover:text-blue-400">
                <FaUsers size={20} /> Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-vendors" className="flex items-center gap-3 hover:text-blue-400">
                <FaStore size={20} /> Manage Vendors
              </Link>
            </li>
            <li>
              <Link to="/admin/pending-payments" className="flex items-center gap-3 hover:text-blue-400">
                <FaMoneyCheck size={20} />  Transactions
              </Link>
            </li>
          </ul>
        </div>
  
        {/* Overlay for Mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsOpen(false)} // Clicking outside closes the menu
          ></div>
        )}
      </>
    );
};

export default AdminNavbar;
