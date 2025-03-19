import React from 'react'
  // paystack 
import PaystackPop from "@paystack/inline-js"
import { UserContext } from '../../UserContext';
import { useContext } from "react";
import { baseUrl } from '../../baseUrl';
import axios from 'axios';

const Checkout = ({fetchedProduct, vendorId}) => {
    const { user } = useContext(UserContext);

    // Paystack Payment 

const paystackPayment = (e) => {
    e.preventDefault()
    
    const paystack = new PaystackPop()
    paystack.newTransaction({
        key: "pk_test_71e4aeeaf18abf48676460a4b2aa122415142cf7",
        amount: fetchedProduct.price * 100,
        email: user.email,
        firstname: user.firstName,
        lastname: user.lastName,
        onSuccess(transaction) {
            // message = `Payment Successful! ${transaction.reference}`
            // alert(message)
             axios.post(`${baseUrl}verify-payment`, {transaction, vendorId})
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
