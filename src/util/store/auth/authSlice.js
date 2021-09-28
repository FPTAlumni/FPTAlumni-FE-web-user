import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: {
      displayName: "",
      email: "",
      photoURL: "",
    },
  },
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    loggedOut: (state) => {
      state.isLoggedIn = false;
      state.user = {
        displayName: "",
        email: "",
        photoURL: "",
      };
    },
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loggedIn, loggedOut, setUserInfo } = authSlice.actions;

export default authSlice.reducer;
