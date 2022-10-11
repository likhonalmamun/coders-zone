import React, { useState } from "react";
import "./Question.css";

import {
  ArrowDownIcon, EyeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
const Question = ({ questionData, sn, notify }) => {
  // console.log(sn);

  const { question, options, correctAnswer, id } = questionData;
  const [visible, setVisible] = useState(false);

  // console.log(questionData);

  return (
    <div className="border-2 rounded-xl duration-300 border-rose-500 py-3 px-2 shadow-xl">
      <h1 className="text-2xl text-teal-300">
        {" "}
        Question {sn + 1} : {question}
      </h1>
      {options.map((option, i) => (
        <h1 className="">
          <input className="radio-btn" type="radio" name={id} id={id + i} />
          <label
            onClick={() => notify(option, correctAnswer)}
            className="text-white border-b-[1px] labels block hover:border-y-[1px] hover:text-rose-500 duration-200 rounded-lg  my-3 p-2 mx-5"
            htmlFor={id + i}
          >
            {" "}
            {option}
          </label>
        </h1>
      ))}

      <div className="duration-300">
        <button
          onClick={() => setVisible(!visible)}
          className=" text-2xl hover:bg-transparent hover:border-2 border-rose-500 duration-200 hover:text-rose-500  block text-center mx-auto rounded-lg py-2 px-7  m bg-rose-600  text-white font-semibold"
        >
          See Answer <EyeIcon className="h-6 w-6 inline-block" />
        </button>
        <h1
          className={`text-white text-center text-2xl labels block hover:border-y-[1px] ${
            visible ? "block" : "hidden"
          } hover:text-rose-500 duration-200 rounded-lg  my-3 p-2 mx-5`}
        >
          <InformationCircleIcon className="w-5 inline-block h-5" />{" "}
          {correctAnswer}
        </h1>
      </div>
    </div>
  );
};

export default Question;
