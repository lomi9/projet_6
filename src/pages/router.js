import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/HomePage/home";
import About from "../pages/AboutPage/about";
import ErrorPage from "../pages/ErrorPage/error";
import LogementPage from "../pages/LogementPage/logementPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/logementPage/:id",
    element: <LogementPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
