import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <div className='flex'>
      <svg className='loader-svg m-auto' viewBox="25 25 50 50">
  <circle className='loader-circle' r="20" cy="50" cx="50"></circle>
</svg>

    </div>
  )
}

export default Loader
