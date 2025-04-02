import React from 'react'
import { fridge } from '../../imports'
import { Link } from 'react-router-dom'
import "./herosection.css"

const Herosection = () => {
  return (
    <div className='pb-7'>
      <div className='flex items-center bg-customBlue h-72 lg:h-96 rounded-xl overflow-clip'>
        <div className='py-3 px-4 lg:px-9 w-1/2'>
        <div className='mb-7 text-white'>
            <p className='text-2xl lg:text-5xl font-bold mb-2'>
        Best Deals in your Neighbourhood
            </p>
            <p className='italic text-md lg:text-xl'>...buy with ease</p>
        </div>
        <Link to = "/allproducts" >
            <button className='bg-customYellow p-3 border-black font-semibold '>Shop now</button>
        </Link>
        </div>

        <div className='mt-52'>
            <img className='h-80 lg:h-[39rem] object-cover' src= {fridge} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Herosection
