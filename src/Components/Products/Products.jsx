import React from 'react'
import { Link } from 'react-router-dom'
export const products = [
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    {
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98"
    },
    

]

const Products = () => {
    
  return (
    <div>
      <div className='py-7'>
        <p className='text-xl font-bold text-center mb-5'>Products</p>

        <div className='grid grid-cols-2 gap-1'>
            {products.map((product, index) => (
              <div key={index} className='flex flex-col justify-between items-center border-customGreen border-2 py-2 rounded-xl'>

                <div className='object-cover'>
                <img className='h-32' src= {product.img} alt="" />
                </div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
        </div>
        <div className='flex justify-center mt-7'>
          <Link to = "/allproducts" >
        <button className='bg-customYellow rounded-md p-2 '>See more</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Products
