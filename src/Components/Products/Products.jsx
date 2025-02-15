import React from 'react'

const Products = () => {
    const products = [
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
    
  return (
    <div>
      <div>
        <p className='text-xl font-bold text-center mb-5'>Products</p>

        <div className='grid grid-cols-2 gap-4'>
            {products.map((product, index) => (
              <div key={index} className='flex flex-col justify-between items-center border-black border-2 py-2 rounded-xl'>
                <img src= {product.img} alt="" />
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Products
