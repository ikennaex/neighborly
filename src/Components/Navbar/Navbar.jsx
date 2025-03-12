import React, { useContext, useRef, useState } from "react";
// import {logo} from "../import"
import { Link } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../../UserContext";

const Navbar = () => {
  const menuItems = [
    {
      name: "Categories",
      link: "/categories",
    },
    {
      name: "About Us",
      link: "/about-us",
    },

    {
      name: "Become vendor",
      link: "/becomeavendor",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const { user } = useContext(UserContext);
  return (
    <div className="container mx-auto px-4 py-4 bg-white border-b-2">
      <div className="lg:py-0.5 flex items-center justify-between">
        <Link to="/">
          <img
            className="logo w-28 lg:w-36 h-auto"
            src="/images/awoofbuyerlogo.png"
            alt="logo"
          ></img>
        </Link>

        <div className="hidden gap-20 mx-auto lg:flex cursor-pointer">
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
              <Link to="/user:id">
                <p>Hi {user ? user.firstName : "no info"}</p>
              </Link>
            </div>
          )}
        </div>

        {/* toggle menu   */}
        <div className="lg:hidden" onClick={toggle}>
          {open ? (
            <IoClose size={40} className="menu-icon" />
          ) : (
            <IoIosMenu size={40} className="menu-icon" />
          )}
        </div>
      </div>

      {/* Mobile menu open */}
      <div>
        {open && (
          <div className="flex flex-col gap-5 py-5">
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
                <Link to="/user:id">
                  <p>Hi {user ? user.firstName : "no info"}</p>
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
