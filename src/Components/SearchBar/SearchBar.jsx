import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className=''>
      <form action="" className='searchForm flex gap-3 items-center mb-4' onSubmit={(e) => e.preventDefault()}>
        <input className='h-10 p-2 px-4 rounded-md w-full outline-[1.5px] outline-stone-500 border-none outline-none' 
        d="search"
        type="text"
        role="searchbox"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search for products in your area'>
          
        </input>

        <button className='bg-customYellow rounded-xl h-10 px-4 flex items-center gap-2'> <CiSearch size={25} />Search</button>
        
      </form>
    </div>
  )
}

export default SearchBar
