import React from 'react'
import { fridge } from '../../imports'

const Herosection = () => {
  return (
    <div className=''>
      <div className='flex items-center bg-customBlue h-72 rounded-xl overflow-clip'>
        <div className='py-3 px-4 w-1/2'>
        <div className='mb-7 text-white'>
            <p className='text-2xl font-bold mb-2'>
        Best Deals in your Neighbourhood
            </p>
            <p className='italic'>...buy with ease</p>
        </div>

            <button className='bg-customYellow p-3 border-black font-semibold '>Shop now</button>
        </div>

        <div className='mt-52'>
            <img className='h-80 object-cover' src= {fridge} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Herosection
