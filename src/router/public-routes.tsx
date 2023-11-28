import { RouteObject } from "react-router-dom";

import Home from "../pages/home";
import About from "../pages/about";
import AppLayout from "../layouts/app-layout";

const publicRoutes: RouteObject[] = [
  {
    element: <AppLayout />, // Layout for the public routes
    children: [
      { element: <Home />, path: "/" },
      { element: <About />, path: "/about" },
    ],
  },
];

export default publicRoutes;
