import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { baseUrl } from '../../baseUrl'
import axios from 'axios'
import { format } from 'date-fns'

const AdRequest = () => {
  const [adDetails, setAdDetails] = useState([])

  useEffect(() => {
    const getAdRequest = async () => {
      try {
        const response = await axios.get(`${baseUrl}runadvert`)
        setAdDetails(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getAdRequest()
  }, [adDetails])

  const pendingAds = adDetails.filter((data) => data.active === false)

  const approveAd = async (e, adId ) => {
    e.preventDefault()
    try {
      console.log(adId)
      const response = await axios.put(`${baseUrl}runadvert`, {adId})
      console.log("approval successful", response.data)
      alert(`${adId} Ad approved`)
    } catch (err) {
      console.log(err)
      alert("Failed to approve ad");
    }
  }

  return (
    <div className='flex gap-4'>
      <AdminNavbar />
      <div className='mt-5'>

          <p>Pending Ad Requests ({pendingAds.length})</p>
          <div className='flex flex-col gap-5 mb-5'>
        {pendingAds.map((data) => {
          return (
        <div className='bg-stone-200 justify-around flex w-full p-4 rounded-lg items-center gap-20'>
            <div className='flex gap-5'>
            <div className="">
                <img className='h-32 w-full' src= {`${baseUrl + data.img}`} alt="" />
            </div>

            <div>
            <p className='font-semibold' >{data.vendorName}</p>
            <p className='font-semibold'>{data.name}</p>
            <p>Product Link: <span className='text-customBlue'>{data.link}</span> </p>
            <p>Duration: {data.duration}</p>
            {data.createdAt && 
            <p>Request Date: {format(data.createdAt, "EEEE, MMMM d yyyy")}</p>
          }
            </div>

            </div>

            <div>
                <button onClick={(e) => approveAd(e, data._id)}  className='bg-customGreen text-white p-2 rounded-md'>Approve</button>
            </div>
        </div>
        )})}
        </div>
      </div>
    </div>
  )
}

export default AdRequest
