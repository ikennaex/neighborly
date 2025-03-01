import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../baseUrl";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  
    axios.post(`${baseUrl}register`, {
      username, email, password
    })
  };
  return (
    <div className="container mx-auto">
      <div className="p-7">
        <h2 className="text-2xl text-center  mb-7">Create a New Account</h2>

        <form
          className="flex flex-col gap-5 "
          action=""
          onSubmit={handleRegister}
        >
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Enter username"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Email or Phone Number"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <div>
            <input type="checkbox" id="agree" name="agree" />
            <label className="ml-2" for="agree">
              By creating your account, you agree to our Terms of Use and
              Privacy Policy
            </label>
          </div>
          <button
            className="bg-customBlue h-14 text-white text-xl rounded-lg"
            type="submit"
          >
            Register
          </button>
        </form>

        <p className="pt-7">
          Already a user?{" "}
          <Link className="text-customBlue font-bold" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
