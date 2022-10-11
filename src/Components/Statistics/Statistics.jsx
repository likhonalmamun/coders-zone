import React from "react";
import { useLoaderData } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData().data;
  return (
    <>
      <div
        className="m-4 mt-[85px] sm:mx-auto sm:w-[80%] md:w-[65%] xl:w-[40%] text-rose-500 bg-[rgba(10,20,15,0.6)] p-5 
       border-y-2 rounded-xl shadow-md text-2xl sm:text-3xl lg:text-5xl font-bold "
      >
        <h1 className="text-center">Here is the Statistics of our Quiz .</h1>
      </div>
      <div className="m-2 sm:mx-auto sm:w-[80%] md:w-[65%] xl:w-[40%]">
        <ResponsiveContainer
          className=" text-rose-500 bg-white border-2 rounded-3xl  border-rose-600"
          width="100%"
          height={400}
        >
          <AreaChart
            width={800}
            height={500}
            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 0,
              bottom: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="total"
              stroke="rgb(94, 234 ,212)"
              fill="rgb(225, 29, 72)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
