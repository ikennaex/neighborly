import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { baseUrl } from '../../baseUrl';

const ManageUsers = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get(`${baseUrl}allproducts`)
            
            setFetchedUsers(response.data);
            console.log("API Response:", response.data);
        } catch (err) {
            setError("Failed to fetch vendor");
        } finally {
            setLoading(false);
        }
    };

  
    fetchUser();

  }, []);


  useEffect(() => {
      console.log("fetched Product:", fetchedProduct);
      console.log("Vendor:", fetchedProduct.vendor, id);
    }, [fetchedProduct]);

  return (
    <div>ManageUsers</div>
  )
}

export default ManageUsers