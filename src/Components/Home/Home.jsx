import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import "./Home.css";
const Home = () => {
  const topics = useLoaderData().data;
  // console.log(topics);
  return (
    <>
      <div
        className="lg:w-[80%] xl:w-[75%] w-[92%]  mx-auto header my-20 md:my-[120px]  text-teal-300 bg-[rgba(10,20,15,0.6)]
       sm:p-7 p-2 pb-[50px] border-y-2 rounded-xl shadow-md text-2xl lg:text-5xl md:text-4xl xl:text-7xl font-bold "
      >
        <h1 className="m-5"> Welcome To Our Site . </h1>
        <h1 className="m-5"> Make Your Self More Confident </h1>
        <h1 className="m-5"> About Skills .</h1>
        <Link
          to="/github-account"
          className=" sm:text-lg text-sm md:text-2xl git-btn font-bold py-2 px-4 md:py-3 md:px-7 lg:py-5 lg:px-10 hover:bg-transparent duration-200 hover:border-pink-600 hover:border-2 hover:text-rose-400 bg-rose-500 text-teal-100 m-5 rounded-md  "
        >
          Visit Our Github{" "}
          <ArrowRightCircleIcon className=" sm:h-10 h-6 w-6 sm:w-12 inline-block" />
        </Link>
      </div>
      <div className="lg:w-[80%] w-[92%] xl:w-[75%]  mx-auto text my-20 md:my-[120px]  text-rose-500
       bg-[rgba(10,20,15,0.6)] p-2 sm:p-7 py-7
       border-y-2 rounded-xl shadow-md sm:text-4xl text-3xl xl:text-5xl font-bold ">
        <h1 className="text-center">Select Your Topic</h1>
      </div>
      <div className="lg:w-[80%] xl:w-[75%] w-[92%] mx-auto topics-container my-20 md:my-[120px] flex flex-wrap justify-evenly gap-5  bg-[rgba(10,20,15,0.6)] p-2 sm:p-7 pb-[50px] border-y-2 rounded-xl shadow-md ">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </>
  );
};

export default Home;
