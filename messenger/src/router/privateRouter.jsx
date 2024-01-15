import ActivationAfterLogin from "../pages/auth/ActivationAfterLogin";
import Messenger from "../pages/messenger/Messenger";
import PrivateGard from "./PrivateGard";

// create Private router
const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        path: "/",
        element: <Messenger />,
      },
      {
        path: "/activate-after-login",
        element: <ActivationAfterLogin />,
      },
    ],
  },
];

// export router
export default privateRouter;
