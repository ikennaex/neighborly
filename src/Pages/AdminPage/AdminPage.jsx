import React from 'react'
import AdminNavbar from './AdminNavbar';
import { Outlet } from "react-router-dom"; // This will render child routes

const AdminPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="flex-1 p-5 lg:ml-64"> {/* Ensure space for sidebar */}
        
      </div>
    </div>
  )
}

export default AdminPage