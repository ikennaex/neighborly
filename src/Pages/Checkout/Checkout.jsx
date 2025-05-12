import React, { useState } from "react";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { baseUrl } from "../../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
import PaystackPop from '@paystack/inline-js'
import Loader2 from "../../Loader/Loader2";

const Checkout = ({ fetchedProduct, vendorData }) => {
  const { user } = useContext(UserContext);
  const userName = user.firstName + " " + user.lastName;
  const vendorId = vendorData._id;
  const vendorName = vendorData.businessName;
  const vendorEmail = vendorData.email;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  // Paystack Payment

  const handlePayment = () => {
    setLoading(true)
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
               axios.post(`${baseUrl}verify-payment`, {transaction, vendorId, vendorName, userName, fetchedProduct,vendorEmail}).then(() => {
                navigate(`/user/${user._id}`)
               })
            console.log(transaction)
  
        },
        onCancel() {
          setLoading(false)
            alert("Payment Cancelled")
        }
      })
  }

  return (
    <div onClick={handlePayment} className="w-full h-12 rounded-xl text-white bg-customBlue flex items-center justify-center gap-3 cursor-pointer">
      {!loading ? 
      <>
      <FaDollarSign size={20} />
      Pay with Paystack 
      </>
      : 
        <Loader2/>
    }
    </div>
  );
};

export default Checkout;




// const config = {
//   public_key: "FLWPUBK_TEST-75fc0559e51d8343f858be2da3ae0403-X",
//   tx_ref: Date.now(),
//   amount: fetchedProduct.price,
//   currency: "NGN",
//   payment_options: "card,mobilemoney,ussd",
//   customer: {
//     email: user.email,
//     phone_number: user.phoneNumber,
//     name: userName,
//   },
//   customizations: {
//     title: "Neighborly",
//     description: "Payment for items in cart",
//     logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//   },
// };

// const fwConfig = {
//   ...config,
//   text: "Pay with Flutterwave!",
//   callback: (response) => {
//     console.log(response);
//     closePaymentModal(); // this will close the modal programmatically

//     const transaction_id = response.transaction_id
//     axios
//       .post(`${baseUrl}verify-payment`, {
//         transaction_id,
//         vendorId,
//         vendorName,
//         userName,
//         fetchedProduct,
//         vendorEmail
//       })
//       .then(() => {
//         if (response.status === "completed") {
//           navigate(`/user/${user._id}`);
//         }
        
//       });
//   },
//   onClose: () => {},
// };
