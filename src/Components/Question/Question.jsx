import React from "react";
import "./Question.css";
const Question = ({ questionData, sn }) => {
  console.log(sn)
  const { question, options, correctAnswer, id } = questionData;
  console.log(questionData);
  return (
    <div className="border-2 rounded-xl  border-teal-500 py-3 px-2 shadow-xl">
      <h1 className="text-2xl">
        {" "}
        Question {sn+1} : {question}
      </h1>
      {options.map((option, i) => (
        <h1 className="">
          <input className="radio-btn" type="radio" name={id} id={id + i} />
          <label
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
