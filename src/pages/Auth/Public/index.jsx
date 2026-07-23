import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("user") === "true";
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PublicRoute;