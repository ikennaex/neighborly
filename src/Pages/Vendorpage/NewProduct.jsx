import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../baseUrl";
import Loader from "../../Loader/Loader"; // Import Loader component

const NewProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    img: null,
    category: "Electronics", // Default category
    location: "",
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // Loader state

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

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("desc", product.desc);
    formData.append("price", product.price.toString().trim());
    formData.append("img", product.img);
    formData.append("category", product.category);
    formData.append("location", product.location);

    try {
      await axios.post(`${baseUrl}newproduct`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product Uploaded Successfully!");
      setProduct({
        name: "",
        desc: "",
        price: "",
        img: null,
        category: "Electronics",
        location: "",
      });
      setPreview(null);
    } catch (err) {
      console.log(err);
      alert("Failed to upload product");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload New Product</h2>
      {loading ? (
        <Loader /> // Show loader while uploading
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input type="text" name="name" value={product.name} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Product Description</label>
            <textarea name="desc" value={product.desc} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Product Price ($)</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" />
          </div>
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select name="category" value={product.category} onChange={handleChange} className="w-full border rounded-lg p-2 mt-1">
              <option value="Electronics">Electronics</option>
              <option value="Phones and Tablets">Phones and Tablets</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Beauty">Beauty</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input name="location" value={product.location} onChange={handleChange} required className="w-full border rounded-lg p-2 mt-1" placeholder="eg: Lekki, Lagos" />
          </div>
          <div>
            <label className="block text-sm font-medium">Product Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg p-2 mt-1" />
            {preview && <img src={preview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg" />}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Upload Product</button>
        </form>
      )}
    </div>
  );
};

export default NewProduct;
