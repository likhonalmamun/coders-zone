import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const topics = useLoaderData().data;
  console.log(topics);
  return (
    <div>
      <h1> {topics.length}</h1>
    </div>
  );
};

export default Home;
