import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import Chat from "../models/Chat.js";

/**
 * @DESC Get all chat data
 * @ROUTE /api/v1/chat
 * @method GET
 * @access public
 */
export const getAllChat = asyncHandler(async (req, res) => {
  res.status(200).json({ chat: "All chat done" });
});

/**
 * @DESC create new chat data
 * @ROUTE /api/v1/chat
 * @method POST
 * @access public
 */
export const createChat = asyncHandler(async (req, res) => {
  const { chat, receiverId } = req.body;
  const senderId = req.me._id;

  const chatMsg = await Chat.create({
    message: {
      text: chat,
    },
    senderId,
    receiverId,
  });
});
