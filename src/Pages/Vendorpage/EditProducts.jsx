import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../Components/Products/Products"; // Import the products array

const EditProducts = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  // State to hold the edited product details
  const [formData, setFormData] = useState({
    name: product?.name || "",
    price: product?.price || "",
    location: product?.location || "",
    desc: product?.desc || "",
  });

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update product data (mock update, replace with API call if needed)
    product.name = formData.name;
    product.price = formData.price;
    product.location = formData.location;
    product.desc = formData.desc;

    alert("Product updated successfully!");
    navigate(`/product/${id}`); // Redirect back to product page
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-5">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded" required />
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" required />
        <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" className="border p-2 rounded" required></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Update Product</button>
      </form>
    </div>
  );
};

export default EditProducts;
