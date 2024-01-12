import Activation from "../pages/auth/Activation";
import Forgot from "../pages/auth/Forgot";
import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login";
import Profile from "../pages/auth/Profile";
import Register from "../pages/auth/Register";

// create public router
const publicRouter = [
  {
    path: "/auth",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/activation",
    element: <Activation />,
  },
  {
    path: "/activation/:tokenURL",
    element: <Activation />,
  },
];

// export router
export default publicRouter;
