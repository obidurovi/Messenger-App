import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import Chat from "../models/Chat.js";
import { cloudUpload } from "../utils/cloudinary.js";

/**
 * @DESC Get all chat data
 * @ROUTE /api/v1/chat
 * @method GET
 * @access public
 */
export const getAllChat = asyncHandler(async (req, res) => {
  const senderId = req.me._id;
  const receiverId = req.params.id;

  // get chats
  const getAllChats = await Chat.find({
    $or: [
      {
        $and: [
          { senderId: { $eq: senderId } },
          { receiverId: { $eq: receiverId } },
        ],
      },
      {
        $and: [
          { senderId: { $eq: receiverId } },
          { receiverId: { $eq: senderId } },
        ],
      },
    ],
  });

  res.status(200).json({
    chats: getAllChats,
  });
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

  let chatMsg;
  if (req.file) {
    const photoData = await cloudUpload(req);
    chatMsg = await Chat.create({
      message: {
        text: chat,
        photo: photoData.secure_url,
      },
      senderId,
      receiverId,
    });
  } else {
    chatMsg = await Chat.create({
      message: {
        text: chat,
        photo: "",
      },
      senderId,
      receiverId,
    });
  }

  res.status(201).json({
    chat: chatMsg,
  });
});
