import React from "react";

const Question = ({ questionData }) => {
  const { question, options, correctAnswer, id } = questionData;
  console.log(questionData);
  return (
    <div className="border-2 rounded-xl  border-teal-500 py-3 px-2 shadow-xl">
      <h1 className="text-2xl"> Question : {question}</h1>
       {options.map(option  => <h1 className="text-teal-300 border-b-[1px] hover:border-y-[1px] hover:text-rose-500 duration-200 rounded-lg  my-3 p-2 mx-5">{option}</h1>)}
    </div>
  );
};

export default Question;
