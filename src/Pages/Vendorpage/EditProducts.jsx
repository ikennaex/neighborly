import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditProducts = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [fetchedProducts, setFetchedProducts] = useState([]);
  const [error, setError] = useState(null); 
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}products/${id}`); // API endpoint
        setFetchedProducts(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch products");
        console.log(err);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  if (!fetchedProducts) {
    return <h2>Product Not Found</h2>; 
  }
  

  // Find the product by ID

  // State to hold the edited product details
  const [formData, setFormData] = useState({
    name: fetchedProducts?.name || "",
    price: fetchedProducts?.price || "",
    location: fetchedProducts?.location || "",
    desc: fetchedProducts?.desc || "",
  });

 

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update product data (mock update, replace with API call if needed)
    fetchedProducts.name = formData.name;
    fetchedProducts.price = formData.price;
    fetchedProducts.location = formData.location;
    fetchedProducts.desc = formData.desc;

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
