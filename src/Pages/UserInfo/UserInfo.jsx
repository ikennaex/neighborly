import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../baseUrl';

const UserInfo = () => {
    const { user, setUser } = useContext(UserContext);

    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${baseUrl}logout`, {})
            setUser(null)
            useNavigate("/login")
        } catch (err) {
            console.error(err)
        }
    }
    return (
    <div className='container mx-auto'>
      <div className='p-7'>

        <div>
        <h2 className='text-3xl font-bold pb-3'>User Information</h2>
        <p className='text-xl'>Name: {user.firstName + " " +  user.lastName}</p>
        <p className='text-xl'>Username: {user.username}</p>
        <p className='text-xl'>Role: {user.role}</p>
        </div>

      <div className='pt-6'>
        <button onClick={handleLogout} className='bg-red-600 px-4 py-2 text-white'>Log out </button>
      </div>

      </div>

    </div>
  )
}

export default UserInfo
