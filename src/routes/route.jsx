import { createBrowserRouter } from "react-router";
import Register from "../pages/register";
import MainLayout from "../layout/MainLayout";
import { Text } from "@chakra-ui/react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Text color={"white"}>Hello world!</Text>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
