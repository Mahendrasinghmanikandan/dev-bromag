import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Online from "../pages/online-order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/online-order",
    element: <App />,
    children: [
      {
        path: "/online-order",
        element: <Online />,
      },
    ],
  },
]);

export default router;
