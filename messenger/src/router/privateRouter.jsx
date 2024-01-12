import Messenger from "../pages/messenger/messenger";
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
