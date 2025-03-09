import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../Loader/Loader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseUrl } from '../../baseUrl';

export const products = [
    {
        id: "1",
        vendor_id: '1',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 1",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "2",
        vendor_id: '1',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 2",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "3",
        vendor_id: '1',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 3",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "4",
        vendor_id: '1',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 4",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "5",
        vendor_id: '2',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 5",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "6",
        vendor_id: '2',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 6",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "7",
        vendor_id: '2',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Bang & Olufsen Speakers jjdjd djdj jdjd 7",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "8",
        vendor_id: '3',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 8",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "9",
        vendor_id: '3',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 9",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
      {
        id: "10",
        vendor_id: '3',
          img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
          name: "Product 10",
          price: "12.98",
          location: "Lekki, Lagos",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
      },
    

]

const Products = ({ search }) => {

  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null);


  // Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}allproducts`); // API endpoint
        setFetchedProducts(response.data);
      } catch (err) {
        setError("Failed to fetch products");
        console.log(err)
      }
    };

    fetchProducts();
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  console.log(products.img)

  const filteredProducts = fetchedProducts?.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='py-7'>
  <p className='text-xl font-bold text-center mb-5'>Products</p>

  {/* Responsive Grid Layout */}
  {
    products ? (
  <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    {filteredProducts.map((product) => (
      <Link key={product.id} to={`/products/${product.id}`}>
        <div className='flex flex-col justify-between items-center bg-white p-4 text-center rounded-xl h-84 transition-shadow duration-300 hover:shadow-lg'>

          {/* Product Image */}
          <div className='object-cover w-full'>
            <img className='h-48 w-full object-cover rounded-lg' src={product.imgUrl[0]} alt={product.name} />
          </div>

          {/* Product Details */}
          <p className='font-semibold mt-2'>{product.name}</p>
          <p className='text-gray-600'>₦{product.price}</p>
        </div>
      </Link>
    ))}
  </div>
    ) : <Loader />
  }

  {/* See More Button */}
  <div className='flex justify-center mt-7'>
    <Link to="/allproducts">
      <button className='bg-customYellow rounded-md p-2 w-full sm:w-auto'>See more</button>
    </Link>
  </div>
</div>


    </div>
  )
}

export default Products
