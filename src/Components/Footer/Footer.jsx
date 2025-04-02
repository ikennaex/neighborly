import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <div className='bg-gray-900 text-white p-3 '>
      <div className='text-sm'>
        <p className='font-bold text-white text-center'>Neighborly</p>

        <div className='my-5'>
        <p>About Us</p>
        <p>Terms and condition</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        </div>
      </div>

      <p className='text-center py-4'>
        &copy; {date} Neighborly.com
      </p>
    </div>
  )
}

export default Footer
