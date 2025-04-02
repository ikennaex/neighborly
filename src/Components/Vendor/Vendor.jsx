// import React from 'react'
// import { Link } from 'react-router-dom'

// export const vendorproducts = [
//     {
//         id: "1",
//         vendor_id: '1',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 1",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "2",
//         vendor_id: '1',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 2",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "3",
//         vendor_id: '1',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 3",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "4",
//         vendor_id: '1',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 4",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "5",
//         vendor_id: '2',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 5",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "6",
//         vendor_id: '2',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 6",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "7",
//         vendor_id: '2',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Bang & Olufsen Speakers jjdjd djdj jdjd 7",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "8",
//         vendor_id: '3',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 8",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "9",
//         vendor_id: '3',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 9",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
//       {
//         id: "10",
//         vendor_id: '3',
//           img: "https://img.freepik.com/premium-psd/squared-bluetooth-speaker-mockup-floating_1332-8215.jpg?ga=GA1.1.2145612538.1736353082&semt=ais_authors_boost",
//           name: "Product 10",
//           price: "$12.98",
//           location: "Lekki, Lagos",
//           desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae, aut ab vero quod temporibus ipsa praesentium natus vel ipsam?"
//       },
// ]

// const vendor = () => {
//   return (
//     <div>
//         <div className="py-7">
//         <p className='text-xl font-bold text-center mb-5'>View your products</p>

//         <div className='grid grid-cols-2 gap-1'>
//             {vendorproducts.map((vendorproducts) => (
//             <Link to = {`/vendor/${vendorproducts.id}`} >
//               <div key={product.id} className='flex flex-col justify-between items-center border-customGreen border-2 bg-white p-2 text-center rounded-xl'>

//                 <div className='object-cover'>
//                 <img className='h-32' src= {vendorproducts.img} alt="" />
//                 </div>
//                 <p>{vendorproducts.name}</p>
//                 <p>{vendorproducts.price}</p>
//                 <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</div>
//                 <div className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</div>
//               </div>
//               </Link>
//             ))}
//         </div>
//         <div className='flex justify-center mt-7'>
//           <Link to = "/allproducts" >
//         <button className='bg-customYellow rounded-md p-2 '>See more</button>
//           </Link>
//         </div>

//         </div>
//     </div>
//   )
// }

// export default vendor