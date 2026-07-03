import MainLayout from "../../layouts/MainLayout";
import Login from "../../pages/Auth/Login";
import ProtectRoute from "../../pages/Auth/Protect";
import PublicRoute from "../../pages/Auth/Public";
import { createBrowserRouter, Navigate, PrefetchPageLinks } from "react-router-dom";
import Dashboard from "../../pages/Auth/Dashboard";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    )
  },
  {
    path: '/',
    element: (
      <ProtectRoute>
        <MainLayout />
      </ProtectRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='/dashboard' replace />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      }
    ]
  }
])