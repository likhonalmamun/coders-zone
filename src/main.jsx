import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Error";
import Blogs from "./Components/Blogs/Blogs";
import QuizPage from "./Components/QuizPage/QuizPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/Home",
        index: true,
        element: <Home></Home>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        index: true,
        element: <Home></Home>,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/Statistics",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistics></Statistics>,
      },
      { path: "/Blogs", element: <Blogs></Blogs> },
      {
        path: `/Home/:id`,
        element: <QuizPage></QuizPage>,
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
