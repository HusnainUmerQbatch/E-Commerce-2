import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.jwt;
      state.user = action.payload.user;
    },
    SignOut(state, action) {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, SignOut } = loginSlice.actions;

export default loginSlice.reducer;
