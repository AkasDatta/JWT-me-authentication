import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
