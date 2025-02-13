import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container mx-auto'>
        <div className='p-7'>
        <h2 className='text-2xl text-center  mb-7'>Create a New Account</h2>

<form className='flex flex-col gap-5 ' action="">
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="text" placeholder='Email or Phone Number'/>
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="password" placeholder='Password' />
  <input className='h-14 border p-3 bg-slate-200 rounded-lg' type="password" placeholder='Confirm Password' />
  <button className='bg-customBlue h-14 text-white text-xl rounded-lg' type="submit">Register</button>

  <div>
  <input type="checkbox" id="agree" name="agree"  />
<label className='ml-2' for="agree">By creating your account, you agree to our Terms of Use and Privacy Policy</label>
  </div>

</form>

<p className='pt-7'>Already a user? <Link className='text-customBlue font-bold' to="/login">Login here</Link></p>
        </div>
    </div>
  )
}

export default Register
