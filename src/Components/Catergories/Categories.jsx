import React from 'react'
import { microwave } from '../../imports'

const Categories = () => {
    const items = [
        {
            text: "Phones and Tablets",
            img: "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?t=st=1739637307~exp=1739640907~hmac=875ad543d4cfbb85d57f396450245d0a3ed104ae8388b39565f9713a77dcfccf&w=740"
        },
        {
            text: "Home appliances",
            img: microwave
        },
        {
            text: "Electronics",
            img: "https://w7.pngwing.com/pngs/210/256/png-transparent-laptop-laptop-notebook-electronics-netbook-computer-thumbnail.png"
        },
        {
            text: "Beauty",
            img: "https://img.freepik.com/free-photo/top-view-various-makeup-texture_52683-109856.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost"
        },
        {
            text: "Kids",
            img: "https://img.freepik.com/free-photo/cute-fluffy-monkey-toys_23-2149642394.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost"
        },
    ]
  return (
    <div>
      <div className='py-7'>
        <p className='text-xl font-bold text-center mb-5 '>what are you looking for ?</p>

        <div className='flex overflow-auto gap-7 justify-center'>
            {items.map((item, index) => (
                
                <div className='w-32 py-5 px-8 h-32 bg-stone-300 rounded-xl flex flex-col justify-between items-center ' key={index}>
                    <img className='w-16 h-10' src={item.img} alt={item.text} />
                    <p className='text-[0.7rem] leading-[0.8rem] text-center' href={item.link}>{item.text}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
