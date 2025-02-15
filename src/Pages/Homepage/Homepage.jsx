import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import Categories from '../../Components/Catergories/Categories'
import Products from '../../Components/Products/Products'

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:p-7 p-3'>
        <Herosection />
        <Categories />
        <Products />
      </div>
    </div>
  )
}

export default Homepage
