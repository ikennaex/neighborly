import React, { useContext, useRef, useState } from "react";
// import {logo} from "../import"
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../../UserContext";
import { logo } from "../../imports";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const menuItems = [
    {
      name: user && "Categories",
      link: "/categories",
    },
    {
      name: user && "About Us",
      link: "/about-us",
    },
    {
      name: user && user.role !== "vendor" && user.role !== "admin" ? "Become vendor" : "",
      link: "/becomeavendor",
    }
  ];
  
  const [open, setOpen] = useState(false);
  
  const toggle = () => {
    setOpen(!open);
  };
  
  return (
    <div className="container mx-auto px-4 py-4 bg-white border-b-2">
      <div className="lg:py-0.5 flex items-center justify-between">
        <Link to="/">
          <img
            className="logo w-14 lg:w-16 h-auto"
            src= {logo}
            alt="logo"
            ></img>
        </Link>

        <div className="hidden gap-20 mx-auto lg:flex cursor-pointer lg:items-center ">
          {menuItems.map((menu) => (
            <Link to={menu.link} className="nav-link">
              {/* <p>Categories</p> */}
              <p className="nav-menu hover:text-customBlue">{menu.name}</p>
              {/* {menu.name} */}
            </Link>

            // <a href= {menu.link}>
            // </a>
          ))}

          {user && (
            <div className="bg-customBlue text-white rounded-lg px-5 py-2">
              <Link to={`/user/${user._id}`}>
                <div className="flex justify-between gap-3">
                  <p>Hi {user ? user.firstName : "no info"}</p>
                  <p className="bg-customYellow px-2 rounded-md">
                    {user
                      ? user.role === "admin"
                        ? "Admin"
                        : user.role === "vendor"
                        ? "Vendor"
                        : "User"
                      : "no info"}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* toggle menu   */}
        {user &&
        <div className="lg:hidden" onClick={toggle}>
          {open ? (
            <IoClose size={40} className="menu-icon" />
          ) : (
            <IoIosMenu size={40} className="menu-icon" />
          )}
        </div>
        }
      </div>

      {/* Mobile menu open */}
      <div>
        {open && (
          <div className="flex flex-col gap-5 py-5 justify-between ">
            {menuItems.map((menu) => {
              return (
                <Link to={menu.link} className="nav-link border-b-2">
                  {menu.name}
                  {/* {menu.name} */}
                </Link>
              );
            })}

            {user && (
              <div className="bg-customBlue text-white rounded-lg px-5 py-2">
                <Link to={`/user/${user._id}`}>
                  <div className="flex justify-between">
                    <p>Hi {user ? user.firstName : "no info"}</p>
                    <p className="bg-customYellow px-2 rounded-md">
                        {user
                          ? user.role === "admin"
                            ? "Admin"
                            : user.role === "vendor"
                            ? "Vendor"
                            : "User"
                          : "no info"}
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
