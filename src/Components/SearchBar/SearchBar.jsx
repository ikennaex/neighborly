import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className=''>
      <form action="" className='flex gap-3 items-center mb-4'>
      <CiSearch size={25} />
        <input className='h-10 p-5 rounded-xl w-full bg-stone-300' type="text" placeholder='Search for products in your area' />
      </form>
    </div>
  )
}

export default SearchBar
