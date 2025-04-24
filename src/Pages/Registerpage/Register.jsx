import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import Loader from "../../Loader/Loader";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      setError("Please agree to the terms and conditions");
      alert("Please agree to the terms and conditions");
      return;
    }

    try {
      await axios.post(`${baseUrl}register`, {
        username,
        email,
        phoneNumber,
        password,
        firstName,
        lastName,
      });
      alert("Registration Successful, now you can Login!");
      setRedirect(true);
    } catch (err) {
      if (err.response && err.response.status === 400) { // getting the error message from the backend
        alert(err.response.data.message)
      } else {
        alert("Registration failed");
      }
      console.log(err);
    }
  };

  if (redirect) {
    return (
      <>
        <Loader />
        <Navigate to={"/login"} />
      </>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="p-7 pt-16 lg:max-w-[40rem] m-auto">
        <h2 className="text-2xl text-center  mb-7">Create a New Account</h2>

        <form
          className="flex flex-col gap-5 "
          action=""
          onSubmit={handleRegister}
        >
          <label htmlFor="">First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Enter First Name"
          />
          <label htmlFor="">Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Enter Last Name"
          />
          <label htmlFor="">Phone Number:</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="tel"
            placeholder="Enter Phone Number"
          />
          <label htmlFor="">Set Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Set Username"
          />
          <label htmlFor="">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="text"
            placeholder="Email"
          />
          <label htmlFor="">Set Passsword</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 border p-3 bg-slate-200 rounded-lg"
            type="password"
            placeholder="Password"
          />
          <div>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label className="ml-2" for="agree">
              By creating your account, you agree to our Terms of Use and
              Privacy Policy
            </label>
            {error && (
              <p className="text-red-700">agree to terms and conditions</p>
            )}
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
