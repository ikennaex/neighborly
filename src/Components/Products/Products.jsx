import React from 'react'
import { Link } from 'react-router-dom'
export const products = [
    {
      id: "1",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "2",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "3",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "4",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "5",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "6",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "7",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "8",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "9",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    {
      id: "10",
        img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
        name: "Product 1",
        price: "$12.98",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
    },
    

]

const Products = () => {
    
  return (
    <div>
      <div className='py-7'>
        <p className='text-xl font-bold text-center mb-5'>Products</p>

        <div className='grid grid-cols-2 gap-1'>
            {products.map((product) => (
            <Link to = {`/products/${product.id}`} >
              <div key={product.id} className='flex flex-col justify-between items-center border-customGreen border-2 py-2 rounded-xl'>

                <div className='object-cover'>
                <img className='h-32' src= {product.img} alt="" />
                </div>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              </Link>
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
