import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="py-5 px-[65px] bg-gray-600 flex justify-between items-center">
      <h1 className="text-5xl text-teal-400 font-bold ">
        Coders<span className="text-orange-500">Zone</span>
      </h1>
      <div className="text-xl font-semibold  text-teal-300 gap-12 flex">
        <Link to='/' className="hover:text-orange-400 duration-200">Quiz Topics</Link>
        <Link to='/Statistics' className="hover:text-orange-400 duration-200">Statistics</Link>
        <Link to='/Blogs' className="hover:text-orange-400 duration-200">Blog Page</Link>
      </div>
    </div>
  );
};

export default Header;
