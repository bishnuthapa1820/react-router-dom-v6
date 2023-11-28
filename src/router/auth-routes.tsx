import { redirect, RouteObject } from "react-router-dom";

import Login from "../pages/auth/login";
import SignUp from "../pages/auth/sign-up";
import AppLayout from "../layouts/app-layout";

const authRoutes: RouteObject[] = [
  {
    element: <AppLayout />, // You can use another layout for the auth section and use another layout for other routes
    path: "auth", // If you want to use only /login, /sign-up, comment this path.
    // Use for protect user from navigating to Login page after login
    loader: async () => {
      // Your Business logic for checking if the user is logged in or not
      const isLoggedIn = false;

      if (isLoggedIn) {
        throw redirect("/"); // Redirect to login page
      }

      // You have to return data or anything in loader function otherwise it throws error so that just return null.
      return null;
    },

    children: [
      { element: <Login />, path: "login" },
      { element: <SignUp />, path: "sign-up" },
    ],
  },
];

export default authRoutes;
