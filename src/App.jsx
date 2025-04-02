import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Loginpage/Login'
import Navbar from './Components/Navbar/Navbar'
import Register from './Pages/Registerpage/Register'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Allproducts from './Pages/AllProducts/Allproducts'
import ProductPage from './Pages/ProductPage/ProductPage'
import VendorProducts from './Pages/Vendorpage/VendorProducts'
import BecomeAVendor from './Pages/Vendorpage/BecomeAVendor'
import EditProducts from './Pages/Vendorpage/EditProducts'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import axios from "axios";
import { UserContextProvider } from './UserContext'
import ProtectedRoutes from './ProtectedRoutes'

import AdminPage from './Pages/AdminPage/AdminPage'
import NewProduct from './Pages/Vendorpage/NewProduct'
import ManageUsers from './Pages/AdminPage/ManageUsers'
import ManageVendors from './Pages/AdminPage/ManageVendors'
import PendingPayments from './Pages/AdminPage/PendingPayments'
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage'
import WhyChooseUsPage from './Pages/WhyChooseUsPage/WhyChooseUsPage'
import BlogPage from './Pages/Blog/BlogPage'
import UserInfo from './Pages/UserInfo/UserInfo'
import VendorOrder from './Pages/Vendorpage/VendorOrder'

axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <ScrollToTop />
      {/* Wrapper to ensure full height */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content that grows */}
        <main className="flex-grow">
          <Routes>
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/whychooseus" element={<WhyChooseUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/allproducts" element={<Allproducts />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/vendor/:id" element={<VendorProducts />} />
              <Route path="/becomeavendor" element={<BecomeAVendor />} />
              <Route path="/editproduct/:id" element={<EditProducts />} />
              <Route path="/orders/:id" element={<VendorOrder />} />
              <Route path="/user/:id" element={<UserInfo />} />
              <Route path="/newproduct" element={<NewProduct />} />
              {/* Admin Routes */}
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/manage-users" element={<ManageUsers />} />
              <Route path="/admin/manage-vendors" element={<ManageVendors />} />
              <Route path="/admin/pending-payments" element={<PendingPayments />} />
            </Route>

            {/* 404 page */}
            <Route path="*" element={<div className='text-center text-2xl font-bold text-customBlue pt-16'>Page not found</div>} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer />
      </div>
    </UserContextProvider>
  )
}

export default App
