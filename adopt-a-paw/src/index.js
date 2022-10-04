import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portal from "./screens/Portal";
import ErrorPage from "./screens/ErrorPage";
import Navbar from "./components/navbar";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portal />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
