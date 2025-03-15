import React, { useContext, useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import AdminNavbar from './AdminNavbar';

const PendingPayments = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/"); // Redirect to home if not an admin
    }
  }, [user, navigate]); // Only re-run when user or navigate changes

  
  return (
    <div className="flex">
      <AdminNavbar />
      <div>PendingPayments</div>
    </div>
  )
}

export default PendingPayments