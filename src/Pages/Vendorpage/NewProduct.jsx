import React, { useState } from "react";


const NewProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        desc: "",
        price: "",
        img: null,
        category: "Electronics", // Default category
      });
    
      const [preview, setPreview] = useState(null);
    
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
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create Form Data to Send to Backend
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("desc", product.desc);
        formData.append("price", product.price);
        formData.append("img", product.img);
        formData.append("category", product.category);
    
        // Simulating API call
        console.log("Submitting product:", product);
        alert("Product Uploaded Successfully!");
      };
    
      return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Upload New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
    
            {/* Product Description */}
            <div>
              <label className="block text-sm font-medium">Product Description</label>
              <textarea
                name="desc"
                value={product.desc}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 mt-1"
              ></textarea>
            </div>
    
            {/* Product Price */}
            <div>
              <label className="block text-sm font-medium">Product Price ($)</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>
    
            {/* Product Category */}
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1"
              >
                <option value="Electronics">Electronics</option>
                <option value="Phones and Tablets">Phones and Tablets</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Beauty">Beauty</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
    
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium">Product Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg p-2 mt-1" />
              {preview && <img src={preview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-lg" />}
            </div>
    
            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Upload Product
            </button>
          </form>
        </div>
      );
    };

export default NewProduct