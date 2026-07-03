import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = localStorage.getItem("is_auth") === 'true';

  if (isAuth) {
    return <Navigate to='/dashboard' replace  />;
  }

  return children
};

export default PublicRoute;