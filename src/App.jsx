import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
