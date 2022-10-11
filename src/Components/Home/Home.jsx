import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
const Home = () => {
  const topics = useLoaderData().data;
  // console.log(topics);
  return (
    <>
      <div className="w-2/3 mx-auto  my-[120px]  text-teal-300 bg-[rgba(10,20,15,0.6)] p-7 pb-[50px] border-y-2 rounded-xl shadow-md text-7xl font-bold ">
        <h1 className="m-5"> Welcome To Our Site . </h1>
        <h1 className="m-5"> Make Your Self More Confident </h1>
        <h1 className="m-5"> About Skills .</h1>
        <Link
          to="/github-account"
          className="text-2xl font-bold py-5 px-10 hover:bg-transparent duration-200 hover:border-pink-600 hover:border-2 hover:text-rose-400 bg-rose-500 text-teal-100 m-5 rounded-md  "
        >
          Visit Our Github <ArrowRightCircleIcon className="h-10 w-12 inline-block"/>
        </Link>

      </div>
      <div className="w-2/3 mx-auto  my-[120px]  text-rose-500 bg-[rgba(10,20,15,0.6)] p-7 pb-[50px] border-y-2 rounded-xl shadow-md text-5xl font-bold ">
        <h1 className="text-center">Select Your Topic</h1>
      </div>
      <div className="w-2/3 mx-auto  my-[120px] grid grid-cols-4 gap-5  bg-[rgba(10,20,15,0.6)] p-7 pb-[50px] border-y-2 rounded-xl shadow-md ">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </>
  );
};

export default Home;
