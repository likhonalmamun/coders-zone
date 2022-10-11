import React from "react";

const Blogs = () => {
  return (
    <>
      <div
        className=" xl:w-2/3 md:w-[90%] w-[95%] text-3xl sm:text-4xl mx-auto mt-[50px] my-[30px]  text-rose-500 bg-[rgba(10,20,15,0.6)]
       p-7 pb-[50px] border-y-2 rounded-xl shadow-md font-bold"
      >
        <h1 className="text-center ">What is the purpose of React Router ?</h1>
        <p className="text-white text-lg font-semibold sm:text-xl mt-2">
          The main purpose of using React Router is to make single page
          application(SPA) . React router prevents page refreshing on each and
          every click of user on any link . It prevents the blank page or white
          page to be showed on Navigating . It uses Link for routing and changes
          a particular part of the page instead of reloading the whole page . It
          can also load data from any API for specific page . So loading process
          becomes shorter . React router is used for improving user experience .
        </p>
      </div>
      <div
        className="xl:w-2/3 md:w-[90%] w-[95%] text-3xl sm:text-4xl mx-auto  my-[30px]  text-rose-500 bg-[rgba(10,20,15,0.6)]
       p-7 pb-[50px] border-y-2 rounded-xl shadow-md font-bold"
      >
        <h1 className="text-center ">How does Context API works ?</h1>
        <p className="text-white text-lg font-semibold sm:text-xl mt-2">
          React Context API is used for sharing data trough many nested
          components avoiding props drilling . Firstly , developer has to create
          a context api and give it a default value . It behaves like global
          object . Secondly , developer has to specify the area by context
          provider in which the context API can be accessed . The context stores
          default value until it has been changed . It re-renders the components
          on change of its value .
        </p>
      </div>
      <div
        className="xl:w-2/3 md:w-[90%] w-[95%] text-3xl sm:text-4xl mx-auto  my-[30px]  text-rose-500 bg-[rgba(10,20,15,0.6)]
       p-7 pb-[50px] border-y-2 rounded-xl shadow-md font-bold"
      >
        <h1 className="text-center ">What is useRef in React ?</h1>
        <p className="text-white text-lg font-semibold sm:text-xl mt-2">
          useRef is A hook which dose not cause re-renders . It stores value in
          the 'current' property of an object . The value can be change avoiding
          re-render . We can access DOM element directly by using useRef hook .
          We just have to declare a ref attribute in an element and we can
          access it by useRef . useRef hook takes an initial value . When we
          change the value , it stores the new value in 'current' property and
          the old value in 'previous' property . We can access both of them .
        </p>
      </div>
    </>
  );
};

export default Blogs;
