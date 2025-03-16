import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../baseUrl";
import { GrFormUpload } from "react-icons/gr";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user)

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}logout`, {});
      setUser(null);
      useNavigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="p-7">
        {user.role === "vendor" && (
          <Link className="flex items-center pb-4 gap-2" to="/newproduct">
            <GrFormUpload className="text-customBlue" size={30} />
            <p className="text-customBlue text-bold underline text-xl ">
              Upload a new product
            </p>
          </Link>
        )}

        <div>
          <h2 className="text-3xl font-bold pb-3">User Information</h2>
          {user.role === "vendor" &&
          <div>
          <p className="text-xl">
            Business Name: {user.businessName}
          </p>
          <p className="text-xl">
            Business Address: {user.businessAddress}
          </p>
          <p className="text-xl">
            Business Address: {user.phoneNumber}
          </p>

          </div>
          }
          <p className="text-xl">
            Name: {user.firstName + " " + user.lastName}
          </p>
          <p className="text-xl">Username: {user.username}</p>
          <p className="text-xl">Role: {user.role}</p>
        </div>

        <div className="pt-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 text-white"
          >
            Log out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
