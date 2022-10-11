import React from "react";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Question = ({ questionData, sn }) => {
  console.log(sn);
  const { question, options, correctAnswer, id } = questionData;
  console.log(questionData);
  const notify = (option) => {
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
    }
  };
  return (
    <div className="border-2 rounded-xl  border-teal-500 py-3 px-2 shadow-xl">
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
      <h1 className="text-2xl">
        {" "}
        Question {sn + 1} : {question}
      </h1>
      {options.map((option, i) => (
        <h1 className="">
          <input className="radio-btn" type="radio" name={id} id={id + i} />
          <label
            onClick={() => notify(option)}
            className="text-teal-300 border-b-[1px] labels block hover:border-y-[1px] hover:text-rose-500 duration-200 rounded-lg  my-3 p-2 mx-5"
            htmlFor={id + i}
          >
            {" "}
            {option}
          </label>
        </h1>
      ))}
    </div>
  );
};

export default Question;
