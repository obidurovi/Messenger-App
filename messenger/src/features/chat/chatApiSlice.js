import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create Role
export const createChat = createAsyncThunk("chat/createChat", async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:5050/api/v1/chat`,
      data,
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get user to user chat
export const getUserToUserChat = createAsyncThunk(
  "chat/getUserToUserChat",
  async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:5050/api/v1/chat/${data}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
