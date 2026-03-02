import { createBrowserRouter } from "react-router";
import Register from "../pages/register";
import MainLayout from "../layout/MainLayout";
import { Text } from "@chakra-ui/react";
import Login from "../pages/Login";
import Product from "../pages/Product";
import PrivateRoute from "../components/auth/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";
import RoleBasedPrivateRoute from "../components/auth/RoleBasedPrivateRoute";
import Home from "../pages/Home";
import Unauthorized from "../pages/Unauthorized";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <RoleBasedPrivateRoute allowedRole={["ADMIN"]}>
            <Dashboard />
          </RoleBasedPrivateRoute>
        ),
      },
      {
        path: "/unauthorized",
        element: <Unauthorized></Unauthorized>,
      },
    ],
  },
]);
