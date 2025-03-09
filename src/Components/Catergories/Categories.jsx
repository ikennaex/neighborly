import React from 'react'
import { bear, jug, microwave, phone, skincare } from '../../imports'

const Categories = () => {
    const items = [
        {
            text: "Phones and Tablets",
            img: phone
        },
        {
            text: "Home appliances",
            img: microwave
        },
        {
            text: "Electronics",
            img: jug
        },
        {
            text: "Beauty",
            img: skincare
        },
        {
            text: "Kids",
            img: bear
        },
    ]
  return (
    <div>
      <div className='py-7'>
        <p className='text-xl font-bold text-center mb-5 '>what are you looking for ?</p>

        <div className='flex overflow-hidden gap-3 justify-center'>
            {items.map((item, index) => (
                
                <div className='w-1/2 h-24 bg-stone-300 rounded-xl p-3 flex flex-col justify-between items-center ' key={index}>
                    <img className=' lg:h-14 h-10' src={item.img} alt={item.text} />
                    <p className='text-[0.7rem] leading-[0.8rem] text-center' href={item.link}>{item.text}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
