import { createSlice } from "@reduxjs/toolkit";
import { createChat, getUserToUserChat } from "./chatApiSlice";

// create auth slice
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    error: null,
    message: null,
  },
  reducers: {
    setMessageEmpty: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserToUserChat.fulfilled, (state, action) => {
        state.chats = action.payload.chats;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.chats = [...state.chats, action.payload.chat];
      });
  },
});

// selectors
export const getAllChatData = (state) => state.chat;
// actions
export const { setMessageEmpty } = chatSlice.actions;

// export
export default chatSlice.reducer;
