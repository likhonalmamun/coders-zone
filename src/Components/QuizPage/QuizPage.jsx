import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const QuizPage = () => {
  const topic = useLoaderData().data;
  const { name, logo, questions, total } = topic;
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const notify = (option, correctAnswer) => {
    if (option === correctAnswer) {
      toast.success("Your Answer is correct !!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCorrect(correct + 1);
      return;
    } else {
      toast.error("You have chosen wrong answer", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setWrong(wrong + 1);
      return;
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className=" xl:w-[80%] md:w-[92%] w-[97%]  mx-auto  my-[120px]
        text-teal-300 bg-[rgba(10,20,15,0.6)] px-7 py-2  justify-center flex-wrap-reverse flex md:justify-between items-center
     border-y-2 border-rose-500 rounded-xl shadow-md text-3xl md:text-5xl font-bold"
      >
        <div>
          <h1>
            Total {total} Quiz On {name}
          </h1>
          <p className=" text-sm sm:text-lg  mt-4 text-white ">
            You have selected{" "}
            <span className="text-green-300 text-lg sm:text-xl">
              {correct}{" "}
            </span>{" "}
            correct answers .
          </p>
          <p className="text-sm sm:text-lg text-white ">
            You have selected{" "}
            <span className="text-rose-500 text-lg sm:text-xl">{wrong}</span>{" "}
            worng answers .
          </p>
        </div>
        <img className="w-[150px] " src={logo} alt="" />
      </div>
      <div
        className="xl:w-[80%] md:w-[92%] w-[97%] mx-auto  my-[50px] md:my-[120px] grid grid-cols-1
       md:grid-cols-2 gap-5  text-rose-500 bg-[rgba(10,20,15,0.6)] p-0 sm:p-7 pb-[50px]
        border-y-2 rounded-xl shadow-md  font-bold "
      >
        {questions.map((question, index) => (
          <Question
            key={index}
            notify={notify}
            sn={index}
            questionData={question}
          ></Question>
        ))}
      </div>
    </>
  );
};

export default QuizPage;
