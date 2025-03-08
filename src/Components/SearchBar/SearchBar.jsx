import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className=''>
      <form action="" className='searchForm flex gap-3 items-center mb-4' onSubmit={(e) => e.preventDefault()}>
      <CiSearch size={25} />
        <input className='h-10 p-5 rounded-xl w-full bg-stone-300' 
        d="search"
        type="text"
        role="searchbox"
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search for products in your area' />
      </form>
    </div>
  )
}

export default SearchBar
