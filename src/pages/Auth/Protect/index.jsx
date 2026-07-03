import React from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const isAuth = localStorage.getItem("is_auth")

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children
};

export default ProtectRoute;