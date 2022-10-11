import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="border-x-2 rounded-xl border-rose-500 py-3 px-1 shadow-xl">
      <img src={logo} alt="" />
      <div className=" flex justify-between items-center p-3 ">
        <div>
          <h1 className="text-xl text-teal-300 font-bold ">{name}</h1>
          <p className="text-md font-semibold text-orange-300">
            Total Quiz : {total}
          </p>
        </div>
        <Link
          to={`/Home/${id}`}
          className="bg-rose-500 hover:bg-transparent hover:border-2 duration-200 hover:border-rose-600 hover:text-rose-500 py-1 px-3 rounded-md text-teal-100 font-bold"
        >
          Start Quiz <ArrowRightCircleIcon className="h-5 w-5 inline-block"/>
        </Link>
      </div>
    </div>
  );
};

export default Topic;
