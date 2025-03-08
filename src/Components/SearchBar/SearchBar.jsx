import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className=''>
      <form action="" className='searchForm flex gap-3 items-center mb-4' onSubmit={(e) => e.preventDefault()}>
      <CiSearch size={25} />
        <input className='h-12 p-5 rounded-xl w-full bg-stone-300 border-none outline-none' 
        d="search"
        type="text"
        role="searchbox"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search for products in your area' />

        <button className='bg-customYellow rounded-xl h-12 px-5'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
