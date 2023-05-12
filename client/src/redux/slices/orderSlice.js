import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Url = process.env.REACT_APP_URL;

export const createOrder = createAsyncThunk(
  `order/create`,
  async (
    {
      firstName,
      lastName,
      email,
      city,
      postcode,
      paymentMethod,
      notes,
      cartItems,
      total,
      address,
      token,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${Url}/orders`,
        {
          firstName,
          lastName,
          email,
          city,
          postcode,
          paymentMethod,
          notes,
          total,
          shippingAddress: address,
          products: cartItems,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
export const getOrders = createAsyncThunk(
  `orders/fetch`,
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

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    orders: [],
    error: null,
    success: false,
  },

  reducers: {},
  extraReducers: {
    // register user
    [createOrder.pending]: (state, action) => ({
      ...state,
      success: false,
      loading: true,
    }),
    [createOrder.fulfilled]: (state, { payload }) => ({
      loading: false,
      success: true,
    }),
    [createOrder.rejected]: (state, { payload }) => ({
      loading: false,
      error: payload,
      success: false,
    }),
  },
});

// Action creators are generated for each case reducer function
const { reducer, actions } = orderSlice;
export const {} = actions;

export default reducer;
