import React from 'react'
import { products } from '../../Components/Products/Products'
import { useParams } from 'react-router-dom'


const ProductPage = () => {
    const { id } = useParams(); // 
  const product = products.find((p) => p.id); 

  if (!product) {
    return <h2>Product Not Found</h2>; // 
  }

  return (
    <div className="container mx-auto">
      <div className="px-3 pb-10">
        <div>
          <div>
            <img src={product.img} alt={product.name} />
          </div>

          <div className='py-5'>
            <h1 className='text-xl font-semibold'>{product.name}</h1>
            <p className='font-semibold'>{product.price}</p>
          </div>

          <div className='h-0.5 bg-black'>

          </div>

          <div className='py-5'>
            <p>{product.desc}</p>
          </div>

          <div>
            <button className='w-full h-12 rounded-xl text-white bg-customGreen'>Contact Seller</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage
