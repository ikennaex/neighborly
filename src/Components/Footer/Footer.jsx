import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='bg-gray-900 text-white p-3 '>
      <div className='text-sm'>
        <p className='font-bold text-white text-center'>Neighborly</p>

        <div className='my-5'>
        <Link to={"/about-us"} >
        <p>About Us</p>
        </Link>
        <Link to={"/privacypolicy"} >
        <p>Privacy Policy</p>
        </Link>
        <p>Terms and condition</p>
        </div>
      </div>

      <p className='text-center py-4'>
        &copy; {date} Neighborly.com
      </p>
    </div>
  )
}

export default Footer
