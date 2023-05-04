import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Url = process.env.REACT_APP_URL;

export const signUp = createAsyncThunk(
  `auth/signUp`,
  async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${Url}/signUp`, {
        firstName,
        lastName,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const logIn = createAsyncThunk(
  `auth/login`,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${Url}/login`, { email, password });
      return response.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null, // for user object
    token: null, // for storing the JWT
    error: null,
    success: false,
  },

  reducers: {
    SignOut(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: {
    // register user
    [signUp.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [signUp.fulfilled]: (state, { payload }) => ({
      loading: false,
      token: payload.token,
      user: payload.user,
      success: true, // registration successful
      error: payload,
    }),
    [signUp.rejected]: (state, { payload }) => ({
    
      loading: false,
      error: payload,
      success: false,
    }),

    [logIn.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [logIn.fulfilled]: (state, { payload }) => ({
      loading: false,
      token: payload.token,
      user: payload.user,
      success: true,
      error: payload,
    }),
    [logIn.rejected]: (state, { payload }) => ({
      loading: false,
      error: payload,
    }),
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = loginSlice;
export const { SignOut } = actions;

export default reducer;
