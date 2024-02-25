import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {},
});

// selectors
export const getAllChatData = (state) => state.chat;
// actions
export const { setMessageEmpty } = chatSlice.actions;

// export
export default chatSlice.reducer;
