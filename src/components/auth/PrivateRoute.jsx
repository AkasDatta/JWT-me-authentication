import React from "react";
import { useAuthStore } from "../../store/authStore";

const PrivateRoute = ({ children }) => {
  const { accessToken } = useAuthStore();
  if (accessToken) {
    return children;
  } else {
    alert("You please login first to access this page");
  }
};

export default PrivateRoute;
