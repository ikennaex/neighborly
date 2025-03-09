import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import { UserContext } from "../../UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);


  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      // this grabs user infomation sent as json from the backend 
      const {data} = await axios.post(`${baseUrl}login`, {email, password}, {withCredentials: true})
      setUser(data)
      alert("Login successful")

      // when login is successful it redirects to the homepage
      setRedirect(true)
    } catch (e) {
      console.log(e)
      alert("Login failed")
    }
  }

  if (redirect) {
    return <Navigate to= {"/"} />
  }

  return (
    <div className="container mx-auto">
      <div className="p-7 pt-16 lg:max-w-[40rem] h-lvh m-auto">

        <h2 className="text-2xl text-center  mb-7">Login to Awoof Buyer</h2>

        <form className="flex flex-col gap-5" action="" onSubmit={handleLogin}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            required
            placeholder="Email or Phone Number"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="password"
            required
            placeholder="Password"
          />
          <button
            className="bg-customBlue h-14 text-white text-xl rounded-lg"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="pt-7">
          New to Awoof Buyer?{" "}
          <Link className="text-customBlue  font-bold" to="/register">
            Register here
          </Link>
        </p>

        </div>
      </div> 
  );
};

export default Login;
