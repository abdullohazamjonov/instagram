import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Auth/Login";
import PublicRoute from "../pages/Auth/Public";
import PrivateRoute from "../pages/Auth/Private";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Profil from "../components/Profil";
import Profil2 from "../components/profil_2";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profil />,
      },
      {
        path: "user/:id",
        element: <Profil2 />,
      },
    ],
  },
]);