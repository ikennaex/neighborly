import React from 'react'

const Register = () => {
  return (
    <div className='container mx-auto'>
        <div className='p-7'>
        <h2 className='text-2xl text-center  mb-7'>Create a New Account</h2>

<form className='flex flex-col gap-5 ' action="">
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="text" placeholder='Email or Phone Number'/>
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="password" placeholder='Password' />
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="password" placeholder='Confirm Password' />
  <button className='bg-customBlue h-14 text-white text-xl rounded-lg' type="submit">Login</button>
</form>

<p className='pt-7'>Already a user? <a className='text-customPurple' href="/login">Login here</a></p>
        </div>
    </div>
  )
}

export default Register
