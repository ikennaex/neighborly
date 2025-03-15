import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminNavbar from './AdminNavbar';
import { UserContext } from "../../UserContext";

const AdminPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/"); // Redirect to home if not an admin
    }
  }, [user, navigate]); // Only re-run when user or navigate changes

  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="flex-1 p-5 lg:ml-64">
        {/* This will render child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
