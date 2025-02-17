import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Loginpage/Login'
import Navbar from './Components/Navbar/Navbar'
import Register from './Pages/Registerpage/Register'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './Components/Footer/Footer'
import Allproducts from './Pages/AllProducts/Allproducts'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/allproducts" element = {<Allproducts />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
