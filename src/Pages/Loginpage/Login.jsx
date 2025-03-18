import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import { UserContext } from "../../UserContext";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // this grabs user infomation sent as json from the backend
      const { data } = await axios.post(
        `${baseUrl}login`,
        { email, password },
        { withCredentials: true }
      );
      setUser(data);
      alert("Login successful");

      // when login is successful it redirects to the homepage
      setRedirect(true);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // getting the error message from the backend
        alert(err.response.data.message);
      } else {
        alert("Login failed: " + err.message);
      }
      console.log(e);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container mx-auto">
      <div className="p-7 pt-16  h-lvh m-auto">
        <div className="flex flex-col lg:flex-row gap-9 items-center">
          <div className="wobble-hor-bottom text-center lg:text-left lg:text-5xl text-4xl lg:max-w-[30rem] font-bold lg:leading-[45px] lg:tracking-[-3px] tracking-[-2px] text-customBlue"> <span className="text-black">Awoof Buyer</span> is the best platform to sell and buy used products.</div>

          <div className="lg:w-1/2 w-full ">
            <h2 className="text-2xl text-center  mb-7">Login to Awoof Buyer</h2>

            <form
              className="flex flex-col gap-5"
              action=""
              onSubmit={handleLogin}
            >
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
      </div>
    </div>
  );
};

export default Login;
