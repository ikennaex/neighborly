import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto'>
        <div className='p-7'>
      <h2 className='text-2xl text-center  mb-7'>Login to Awoof Buyer</h2>

      <form className='flex flex-col gap-5 ' action="">
        <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="text" placeholder='Email or Phone Number'/>
        <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="password" placeholder='Password' />
        <button className='bg-customBlue h-14 text-white text-xl rounded-lg' type="submit">Login</button>
      </form>

      <p className='pt-7'>New to Awoof Buyer? <Link className='text-customPurple' to="/register">Register here</Link></p>
        </div>
    </div>
  )
}

export default Login
