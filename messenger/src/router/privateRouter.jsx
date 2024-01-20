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
    ],
  },
];

// export router
export default privateRouter;
