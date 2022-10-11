import React from "react";

const Error = () => {
  return (
    <div
      className="my-[30vh] mx-3 md:mx-auto xl:w-2/3 md:w-10/12 p-10 border-y-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold
     text-center text-rose-600 border-y-rose-500 rounded-lg bg-[rgba(130,253,239,0.67)] "
    >
      <h1 className="text-gray-700">An unexpected error occurred !</h1>
      <h1>Server responded with 404 !</h1>
    </div>
  );
};

export default Error;
