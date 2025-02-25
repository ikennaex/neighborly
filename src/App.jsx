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

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/allproducts" element = {<Allproducts />} />
        <Route path = "/products/:id" element = {<ProductPage />} />
        <Route path = "/vendor/:id" element = {<VendorProducts />} />
        <Route path = "/becomeavendor" element = {<BecomeAVendor />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
