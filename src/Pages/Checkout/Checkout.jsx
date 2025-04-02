import React, { useState } from 'react'
  // paystack 
import PaystackPop from "@paystack/inline-js"
import { UserContext } from '../../UserContext';
import { useContext } from "react";
import { baseUrl } from '../../baseUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = ({fetchedProduct, vendorData}) => {
  const { user } = useContext(UserContext);
  const userName = user.firstName + " " + user.lastName
  const vendorId = vendorData._id
  const vendorName = vendorData.businessName 
  
    // Paystack Payment 

const paystackPayment = (e) => {
    e.preventDefault()
    
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_0b965ae7b32a7c3427f7538791f4a60d22d76759",
        amount: fetchedProduct.price * 100,
        email: user.email,
        firstname: user.firstName,
        lastname: user.lastName,
        onSuccess(transaction) {
            // message = `Payment Successful! ${transaction.reference}`
            // alert(message)
             axios.post(`${baseUrl}verify-payment`, {transaction, vendorId, vendorName, userName, fetchedProduct}).then(() => {
              useNavigate(`/user/${user.id}`)
             })

      },
      onCancel() {
          alert("Payment Cancelled")
      }
    })
}

  return (
    <div>
            <button onClick={paystackPayment} className="w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3">
            <span className='text-2xl'>₦</span> Make Payment
        </button>
    </div>
  )
}

export default Checkout
