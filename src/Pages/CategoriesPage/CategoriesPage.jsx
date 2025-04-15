import React from 'react'
import { adult, aphrodisiac, artisan, bear, buildingmaterial, car, driver, electronics, fashion, health, hospitality, jewellery, logistics, makeup, microwave, perfume, phone, realestate, skincare, tailor, talents, thrift } from '../../imports'
import { Link } from 'react-router-dom'

const CategoriesPage = () => {
        const categories = [
            {
                text: "Phones & Tablet",
                img: phone,
                dbName: "phones-&-tablet"
            },
            {
                text: "Home appliances",
                img: microwave,
                dbName: "home-appliances"
            },
            {
                text: "Electronics",
                img: electronics,
                dbName: "electronics"
            },
            {
                text: "Beauty",
                img: skincare,
                dbName: "beauty"
            },
            {
                text: "Kids",
                img: bear,
                dbName: "kids"
            },
            {
                text: "Artisans",
                img: artisan,
                dbName: "artisans"
            },
            {
                text: "Talents",
                img: talents,
                dbName: "talents"
            },
            {
                text: "Perfume",
                img: perfume,
                dbName: "perfume"
            },
            {
                text: "Events",
                img: realestate,
                dbName: "events"
            },
            {
                text: "Real Estate",
                img: realestate,
                dbName: "real-estate"
            },
            {
                text: "Hospitality",
                img: hospitality,
                dbName: "hospitality"
            },
            {
                text: "Health",
                img: health,
                dbName: "health"
            },
            {
                text: "Drivers",
                img: driver,
                dbName: "drivers"
            },
            {
                text: "Cars",
                img: car,
                dbName: "cars"
            },
            {
                text: "Logistics",
                img: logistics,
                dbName: "logistics"
            },
            {
                text: "Adult Toys",
                img: adult,
                dbName: "adult-toys"
            },
            {
                text: "Aphrodisiacs",
                img: aphrodisiac,
                dbName: "aphrodisiacs"
            },
            {
                text: "Jewellery",
                img: jewellery,
                dbName: "jewellery"
            },
            {
                text: "Building Materials",
                img: buildingmaterial,
                dbName: "building-materials"
            },
            {
                text: "Thrift Wears",
                img: thrift,
                dbName: "thrift-wears"
            },
            {
                text: "Tailor",
                img: tailor,
                dbName: "tailor"
            },
            {
                text: "Makeup Artist",
                img: makeup,
                dbName: "makeup-artist"
            },
            {
                text: "Fashion Designers",
                img: fashion,
                dbName: "fashion-designers"
            }
        ]

  return (
    <div className='container'>
      <div className='mx-auto px-7 py-7'>
        <h2 className='text-center text-2xl font-bold text-customBlue my-7'>Select a Category</h2>

        <div className='flex flex-wrap gap-9 justify-center'>
            {categories.map((item) => {
                return (
                    <Link to={`/categories/${item.dbName}`} >
                <div className='bg-stone-200 rounded-xl w-32 py-3 flex flex-col items-center justify-center px-7 cursor-pointer'>
                    <img className='h-8 w-fit' src= {item.img} alt="" />
                    <p className='text-center'>{item.text}</p>
                </div>
                </Link>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage
