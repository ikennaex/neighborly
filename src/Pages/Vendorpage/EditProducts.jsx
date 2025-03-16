import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../baseUrl";

const EditProducts = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    desc: "",
    image: null, // New image
  });
  const [previewImage, setPreviewImage] = useState(null); // Preview selected image
  const [error, setError] = useState(null);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${baseUrl}product/${id}`);
        setFetchedProduct(response.data);
        setFormData({
          name: response.data.name || "",
          price: response.data.price || "",
          location: response.data.location || "",
          desc: response.data.desc || "",
        });
        setPreviewImage(response.data.imgUrl); // Set existing image preview
      } catch (err) {
        setError("Failed to fetch product");
        console.error(err);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) return <h2 className="text-center text-red-500">{error}</h2>;
  if (!fetchedProduct) return <h2 className="text-center">Product Not Found</h2>;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewImage(URL.createObjectURL(file)); // Preview new image
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("desc", formData.desc);

      // Append image only if a new image is selected
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      await axios.put(`${baseUrl}editproduct/${id}`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully!");
      navigate(`/product/${id}`);
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-xl font-bold mb-5">Edit Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProducts;
