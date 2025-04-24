import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../baseUrl'
import { format } from "date-fns";

const VendorOrder = () => {``
  const {id} = useParams()

  const [vendorOrders, setVendorOrders] = useState([])

  useEffect(() => {
    const fetchVendorOrders = async ()=> {
      try{
        const {data} = await axios.get(`${baseUrl}orders/${id}`)
        setVendorOrders(data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchVendorOrders()
  }, [])

  return (
    <div className='container'>
      <div className='mx-auto p-7'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h2 className='mb-4 font-bold text-2xl'>Your Recent Orders ({vendorOrders.length})</h2>

          {vendorOrders.slice().reverse().map((item) => {
            return (
          <div className='flex bg-slate-200 p-5 rounded-xl lg:w-1/2 w-full justify-between '>
            <div>
              <img className='h-24 object-cover w-full rounded-2xl' src={`${baseUrl}${item.product.imgUrl[0]}`} alt="" />
            </div>
            <div>
              <h3 className='font-bold'>{item.product.name}</h3>
              <p> <span className='font-bold'>Purchased by:</span> {item.userName}</p>
              <p>{format(item.createdAt, "EEEE, MMMM d yyyy")}</p>
              <p><span className='font-bold'>Reference Id:</span> {item.reference}</p>
              <p className='font-bold'><span className='font-bold'>Price:</span> ₦{item.product.price}</p>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VendorOrder
