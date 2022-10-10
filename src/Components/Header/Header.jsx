import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  let activeStyle = {
    color: "orange",
    fontStyle: "italic",
  };
  return (
    <div className="py-5 px-[65px] bg-gray-600 flex justify-between items-center">
      <h1 className="text-5xl text-teal-400 font-bold ">
        Coders<span className="text-orange-500">Zone</span>
      </h1>
      <div className="text-xl font-semibold  text-teal-300 gap-12 flex">
        <NavLink
          to="/Home"
          className="hover:text-orange-400 duration-200"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/Statistics"
          className="hover:text-orange-400 duration-200"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Statistics
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/Blogs"
          className="hover:text-orange-400 duration-200"
        >
          Blog Page
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
