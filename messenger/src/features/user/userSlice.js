import { createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "./userApiSlice";

// create auth slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
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
    builder.addCase(getAllUser.fulfilled, (state, action) => {
      state.users = action.payload.users;
    });
  },
});

// selectors
export const getAllPermissionData = (state) => state.user;
// actions
export const { setMessageEmpty } = userSlice.actions;

// export
export default userSlice.reducer;
