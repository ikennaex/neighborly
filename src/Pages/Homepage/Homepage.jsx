import React from 'react'
import Herosection from '../../Components/Herosection/Herosection'
import Categories from '../../Components/Catergories/Categories'

const Homepage = () => {
  return (
    <div className='container mx-auto'>
      <div className='lg:p-7 p-3'>
        <Herosection />
        <Categories />
      </div>
    </div>
  )
}

export default Homepage
