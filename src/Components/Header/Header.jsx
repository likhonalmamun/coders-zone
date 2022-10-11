import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import "./Header.css";
const Header = () => {
  let activeStyle = {
    color: "rgb(244, 63, 94)",
    fontStyle: "italic",
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5 px-4 sm:px-[65px] bg-gray-600 flex justify-between items-center">
      <h1 className="text-4xl sm:text-5xl text-teal-400 font-bold ">
        Coders<span className="text-rose-500">Zone</span>
      </h1>
      <Bars3Icon
        onClick={() => setOpen(!open)}
        className="h-6 md:hidden w-6"
      ></Bars3Icon>
      <div
        className={`text-xl font-semibold absolute  ${
          open
            ? "top-[80px] justify-end w-full bg-gray-600 left-0 p-6"
            : "top-[-200px]"
        }   md:static  text-teal-300 duration-1000  gap-6 sm:gap-12  flex`}
      >
        <NavLink
          to="/Home"
          className="hover:text-rose-400 duration-200"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/Statistics"
          className="hover:text-rose-400 duration-200"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Statistics
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/Blogs"
          className="hover:text-rose-400 duration-200"
        >
          Blogs
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
