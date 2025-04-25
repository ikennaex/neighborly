import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { baseUrl } from '../../baseUrl'
import { format } from 'date-fns'

const RunningAds = () => {
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
      }, [])

      const activeAds = adDetails.filter((data) => data.active === true)


  return (
    <div className='flex gap-4'>
        <AdminNavbar />

        <div className='mt-4'>
        <p>Active ({activeAds.length})</p>

                  <div className='flex flex-col gap-5 mb-5'>
                {activeAds.map((data) => {
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
                    <p>Start Date: {format(data.updatedAt, "EEEE, MMMM d yyyy")}</p>
                    </div>
        
                    </div>
        
                    <div>
                        <button className='bg-red-700 text-white p-2 rounded-md'>End ad</button>
                    </div>
                </div>
                )})}
                </div>
        </div>
       
    </div>
  )
}

export default RunningAds