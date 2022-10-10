import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Topics from "./Components/Topics/Topics";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>, errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Topics></Topics>  },
      { path: "/Statistics", element: <Statistics></Statistics> },
      // { path: "/Blogs", element : <Error></Error>  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
