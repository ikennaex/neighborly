import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import Categories from '../../Components/Catergories/Categories'
import Products from '../../Components/Products/Products'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:p-7 p-3'>
        <SearchBar />
        <Herosection />
        <Categories />
        <Products />
      </div>
    </div>
  )
}

export default Homepage
