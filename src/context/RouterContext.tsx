import React, { createContext } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
]);

const RouterContext = createContext(router);

export default RouterContext;