import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <div className='mx-auto py-7 lg:px-20 px-5'>
            <h2 className='text-2xl font-bold text-customBlue text-center mb-7'>☎️ Contact Us</h2>

            <p>
            <ul>
          <li><strong>Email:</strong> <a href="mailto:neighborly2025@gmail.com">support@neighborly.ng</a></li>
          <li><strong>Phone: </strong>09116241758 <br/></li>
          <li><strong>Address: </strong> 4 LADEGA STREET CHEVY VIEW ESTATE CHEVRON DRIVE, LEKKI, LAGOS STATE <br/></li>
          
          {/* <li><strong>Website:</strong> <a href="https://neighborly.ng" target="_blank" rel="noopener noreferrer">https://neighborly.ng</a></li> */}
        </ul>
            </p>
        </div>
    </div>
  )
}

export default Contact