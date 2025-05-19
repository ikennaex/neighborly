import React from 'react'

const AboutUsPage = () => {
  return (
    <div className='container'>
      <div className='mx-auto lg:px-72 px-5 py-5'>
        <h2 className='text-customBlue font-bold text-2xl lg:pb-7 pb-4'>About us</h2>

        <p>
        Neighborly enterprise is a friendly online community market set to ease your shopping experience, we are determined to provide you with the best deals within your neighborhood
        </p> <br />

        <ul>
          <li><strong>Email:</strong> <a href="mailto:neighborly2025@gmail.com">support@neighborly.ng</a></li>
          <li><strong>Phone: </strong>08069114190 <br/></li>
          <li><strong>Address: </strong> 4 LADEGA STREET CHEVY VIEW ESTATE CHEVRON DRIVE, LEKKI, LAGOS STATE <br/></li>
          
          {/* <li><strong>Website:</strong> <a href="https://neighborly.ng" target="_blank" rel="noopener noreferrer">https://neighborly.ng</a></li> */}
        </ul>
      </div>
    </div>
  )
}

export default AboutUsPage