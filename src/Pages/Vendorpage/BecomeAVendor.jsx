import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { UserContext } from '../../UserContext';


const BecomeAVendor = () => {
  const {user}  = useContext(UserContext)

  const [formData, setFormData] = useState({
    userInfo : user, // this gets the user info from the context so we can get the user id in the bakckend 
    businessName: "",
    phoneNumber: "",
    address: "",
    storeDescription: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.businessName.trim()) newErrors.businessName = "Business Name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.storeDescription.trim()) newErrors.storeDescription = "Store Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Vendor Registered Successfully!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Vendor Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Business Name */}
        <div>
          <label className="block font-medium">Business Name:</label>
          <input 
            type="text" name="businessName" value={formData.businessName} onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your business name"
          />
          {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-medium">Phone Number:</label>
          <input 
            type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block font-medium">Address:</label>
          <input 
            type="text" name="address" value={formData.address} onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your business or personal address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Business Type
        <div>
          <label className="block font-medium">Business Type:</label>
          <select name="businessType" value={formData.businessType} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">Select Business Type</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
            <option value="Digital Products">Digital Products</option>
          </select>
          {errors.businessType && <p className="text-red-500 text-sm">{errors.businessType}</p>}
        </div> */}

        {/* Store Description */}
        <div>
          <label className="block font-medium">Store Description:</label>
          <textarea 
            name="storeDescription" value={formData.storeDescription} onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Describe your store..."
          ></textarea>
          {errors.storeDescription && <p className="text-red-500 text-sm">{errors.storeDescription}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register Store
        </button>

      </form>
    </div>
  );
};


export default BecomeAVendor