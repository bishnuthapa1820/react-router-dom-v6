import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import authRoutes from "./auth-routes";
import publicRoutes from "./public-routes";

const allRoutes: RouteObject[] = [...publicRoutes, ...authRoutes];

export default function Router() {
  const router = createBrowserRouter(allRoutes);

  return <RouterProvider router={router} />;
}
