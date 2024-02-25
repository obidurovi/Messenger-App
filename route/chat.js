import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import { createChat, getAllChat } from "../controllers/chatController.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route

router.route("/").get(getAllChat).post(createChat);
// router.route("/:id").get(getSingleUser).delete(deleteUser).put(updateUser);

// export default router
export default router;
