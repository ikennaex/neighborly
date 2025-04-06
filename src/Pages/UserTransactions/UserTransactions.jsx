import axios from 'axios'
import React, {useContext, useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl'
import { UserContext } from "../../UserContext";
import { format } from "date-fns";

const UserTransactions = () => {
    const { user, setUser } = useContext(UserContext);
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        const fetchTransactions = async () => {
          // Fetch user transactions

          try {
              const {data} = await axios.get(`${baseUrl}transaction/${user._id}`)
              setTransactions(data)
          } catch (err) {
            console.error(err)
          }
        }
        fetchTransactions();
        
      }, [])

  return (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Transactions ({transactions.length})</h2>
          {
            transactions.map((item) => {
                return (
                <div className="bg-blue-100 mb-3 flex justify-between p-3 rounded-md lg:w-1/2">
                <div>
                  <p className='font-bold text-xl text-customBlue'>{item.product ? item.product.name: "not defined"}</p>
                  <p className='text-smc'>{format(item.createdAt, "EEEE, MMMM d yyyy")}</p>
                  <p><span className='text-customGreen font-bold'>paid to </span>{item.vendorName}</p>
                </div>
    
                <div>
                  <p className='font-bold'>₦ {item.amount}</p>
                </div>
              </div>
              )
            })
          }
        </div>
  )
}

export default UserTransactions
