import express from "express";
import tokenVerify from "../middlewares/verifyToken.js";
import { createChat, getAllChat } from "../controllers/chatController.js";
import { userChatPhoto } from "../utils/multer.js";

const router = express.Router();

// use verify token
router.use(tokenVerify);

// create route

router.route("/").post(userChatPhoto, createChat);
router.route("/:id").get(getAllChat);

// export default router
export default router;
