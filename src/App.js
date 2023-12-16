import * as React from "react";
import { useContext } from "react";
import {
  RouterProvider,
} from "react-router-dom";
import RouterContext from "./context/RouterContext.tsx"


function App() {
  const router = useContext(RouterContext)
  return (
    <RouterProvider router={router} />
  );
}

export default App;
