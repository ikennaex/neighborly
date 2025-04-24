import axios from 'axios';
import React, { useContext, useState } from 'react'
import Loader from "../../Loader/Loader"; // Import Loader component
import { baseUrl } from '../../baseUrl';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const weeklyAd = import.meta.env.VITE_WEEKLY_AD
const monthlyAd = import.meta.env.VITE_MONTHLY_AD

const RunAdvert = () => {
    const [preview, setPreview] = useState(null)
    const [loading, setLoading] = useState(false)

    const { user } = useContext(UserContext);
    const userName = user.firstName + " " + user.lastName;
    const vendorId = user._id;
    const vendorName = user.businessName;
    const navigate = useNavigate();

      const [product, setProduct] = useState({
        duration: "",
        name: "",
        vendorName: "",
        desc: "",
        link: "",
        price: "",
        location: "",
        img: null,
      });

      // Handle Input Changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, img: file });
      setPreview(URL.createObjectURL(file));
    }
  };


  // handle payment 
    // Flutterwave Payment
  
    const config = {
      public_key: "FLWPUBK_TEST-75fc0559e51d8343f858be2da3ae0403-X",
      tx_ref: Date.now(),
      amount: product.duration === "weekly" ? weeklyAd : monthlyAd,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: user.email,
        phone_number: user.phoneNumber,
        name: userName,
      },
      customizations: {
        title: "Neighborly",
        description: "Payment for Ads",
        logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
      },
    };
  
    // const fwConfig = {
    //   ...config,
    //   text: "Pay with Flutterwave!",
    //   callback: (response) => {
    //     console.log(response);
    //     closePaymentModal(); // Close the Flutterwave modal
    
    //     if (response.status === "completed") {
    //       const transaction_id = response.transaction_id;
    
    //       axios
    //         .post(`${baseUrl}verify-payment`, {
    //           transaction_id,
    //           vendorId,
    //           vendorName,
    //           userName,
    //           fetchedProduct: "Ads",
    //         })
    //         .then(() => {
    //           try {
    //             handleSubmit(); // Only called after successful payment & verification
    //             navigate(`/user/${user._id}`);
    //           } catch (err) {
    //             console.error("Submission failed:", err);
    //           }
    //         })
    //         .catch((err) => {
    //           console.error("Payment verification failed:", err);
    //           alert("Payment verification failed. Please contact support.");
    //         });
    //     } else {
    //       alert("Payment not completed. Please try again.");
    //     }
    //   },
    //   onClose: () => {
    //     console.log("Payment modal closed without completing transaction.");
    //   },
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault()
  
    //   setLoading(true); // Start loading
      
    //   const formData = new FormData();
    //   formData.append("name", product.name);
    //   formData.append("vendorName", vendorName);
    //   formData.append("desc", product.desc);
    //   formData.append("link", product.link);
    //   formData.append("price", product.price.toString().trim());
    //   formData.append("img", product.img);
    //   formData.append("duration", product.duration);
    //   formData.append("location", product.location);
  
    //   try {
    //     const response = await axios.post(`${baseUrl}runadvert`, formData, {
    //       headers: { "Content-Type": "multipart/form-data" },
    //     });
  
    //     setProduct({
    //       name: "",
    //       desc: "",
    //       link: "",
    //       price: "",
    //       img: null,
    //       duration: "",
    //       location: "",
    //     });
    //     setPreview(null);
    //   } catch (err) {
    //     console.log(err)
    //     alert("Failed to upload product");
    //   } finally {
    //     setLoading(false); // Stop loading
    //   }
    // }

    const submitAd = async () => {
      setLoading(true);
    
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("vendorName", vendorName);
      formData.append("desc", product.desc);
      formData.append("link", product.link);
      formData.append("price", product.price.toString().trim());
      formData.append("img", product.img);
      formData.append("duration", product.duration);
      formData.append("location", product.location);
    
      try {
        const response = await axios.post(`${baseUrl}runadvert`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
    
        setProduct({
          name: "",
          desc: "",
          link: "",
          price: "",
          img: null,
          duration: "",
          location: "",
        });
        setPreview(null);
        return true; // Indicate success
      } catch (err) {
        console.log(err);
        alert("Failed to upload product");
        return false;
      } finally {
        setLoading(false);
      }
    };
    
    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Start payment flow
      window.FlutterwaveCheckout(fwConfig); // Trigger payment modal
    };

    const fwConfig = {
      ...config,
      text: "Pay with Flutterwave!",
      callback: async (response) => {
        console.log(response);
        closePaymentModal();
    
        if (response.status === "completed") {
          const transaction_id = response.transaction_id;
    
          try {
            // await axios.post(`${baseUrl}verify-payment`, {
            //   transaction_id,
            //   vendorId,
            //   vendorName,
            //   userName,
            //   fetchedProduct: "Ads",
            // });
    
            const result = await submitAd(); // Only submit if payment succeeded
            if (result) navigate(`/user/${user._id}`);
          } catch (err) {
            console.error("Payment verification or ad submission failed:", err);
            alert("Something went wrong. Please try again.");
          }
        } else {
          alert("Payment not completed. Please try again.");
        }
      },
      onClose: () => {
        console.log("Payment modal closed without completing transaction.");
      },
    };
  
  return (
    <div className='container'>
        {loading ? <Loader /> :
      <div className='mx-auto p-4'>
        <div>
        <h2 className='font-bold text-3xl text-center'>Sponsored Ads</h2>
        <p className='text-center'>Get your product on the spotlight</p>
        </div>

        <form onSubmit={handleSubmit} action="">
            <div>
                {/* set duration  */}
                <div className='mb-4'>
            <label className='block text-sm font-medium"'>Set Duration</label>
            <select value={product.duration} onChange={handleChange} name = "duration" className='w-full border rounded-lg p-2 mt-1 text-sm'>
            <option value="">Select Duration</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>

            </select>
            </div>

            <div className='mb-4'>
            <label className="block text-sm font-medium">Product Name</label>
            <input type="text" name="name" value= {product.name} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div className='mb-4'>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea name="desc" value={product.desc} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1"></textarea>
          </div>
          <div className='mb-4'>
            <label className="block text-sm font-medium">Product Price ($)</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div className='mb-4'>
            <label className="block text-sm font-medium">Product Link</label>
            <input placeholder="Link to your product" type="text" name="link" value={product.link} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" />
          </div>

          <div className='mb-4'>
            <label className="block text-sm font-medium">Location</label>
            <input name="location" value={product.location} onChange= {handleChange} required className="w-full border rounded-lg p-2 mt-1" placeholder="eg: Lekki, Lagos" />
          </div>
          <p className='font-bold text-customBlue'>NOTE:FOR BEST RESULT USE IMAGES WITHOUT BACKGROUND</p>
            <div className='mb-4'>
            <label className="block text-sm font-medium">Product Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg p-2 mt-1" />
            {preview && <img src={preview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg" />}
          </div>
            </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                <FlutterWaveButton
                  {...fwConfig}
                />
        </button>

        </form>
      </div>
    }
    </div>
  )
}

export default RunAdvert
