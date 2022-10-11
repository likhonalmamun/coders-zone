import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const QuizPage = () => {
  const topic = useLoaderData().data;
  const { id, name, logo, questions, total } = topic;
//   console.log(topic);
  return (
    <>
      <div
        className="w-2/3 mx-auto  my-[120px]
        text-teal-300 bg-[rgba(10,20,15,0.6)] px-7 py-2 flex justify-between items-center
     border-y-2 border-rose-500 rounded-xl shadow-md text-5xl font-bold"
      >
        <h1>
          Total {total} Quiz On {name}
        </h1>
        <img className="w-[150px] " src={logo} alt="" />
      </div>
      <div className="w-2/3 mx-auto  my-[120px] grid grid-cols-2 gap-5  text-rose-500 bg-[rgba(10,20,15,0.6)] p-7 pb-[50px] border-y-2 rounded-xl shadow-md  font-bold ">
        {questions.map((question) => (
          <Question
            key={question.id}
            questionData={question}
          ></Question>
        ))}
      </div>
    </>
  );
};

export default QuizPage;
