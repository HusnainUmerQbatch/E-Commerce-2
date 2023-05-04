import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Url = process.env.REACT_APP_URL;

export const fetch_products = createAsyncThunk(
  `fetch_products`,
  async ({ token }, { rejectWithValue }) => {
    try {
      console.log("coming here ");
      const response = await axios.get(`${Url}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({ response });
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
export const update_product = createAsyncThunk(
  `update_products`,
  async ({ name, price, description, asin, token,id }, { rejectWithValue }) => {
    try {

      console.log({name, price, description, asin, token,id })
      const response = await axios.put(
        `${Url}/products/${id}`,
        { name, price, description, asin },
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
export const delete_product = createAsyncThunk(
  `delete_product`,
  async ({ data, token }, { rejectWithValue }) => {
    // console.log({token})
    try {
      const response = await axios.delete(`${Url}/products/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    error: null,
    success: false,
  },

  reducers: {},
  extraReducers: {
    // register user
    [fetch_products.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetch_products.fulfilled]: (state, { payload }) => ({
      loading: false,
      products: payload.products,
      success: true,
    }),
    [fetch_products.rejected]: (state, { payload }) => ({
      loading: false,
      error: payload,
      success: false,
    }),

    [delete_product.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [delete_product.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.loading = false;
      const { _id } = payload.product;
      console.log({ _id });
      if (_id) {
        state.products = state.products.filter((ele) => ele._id !== _id);
      }
      state.success = true;
      console.log(state.products);
    },
    [delete_product.rejected]: (state, { payload }) => {
      console.log({ payload });
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
    [update_product.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [update_product.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.loading = false;
      state.success = true;
    },
    [update_product.rejected]: (state, { payload }) => {
      console.log({ payload });
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});

const { reducer, actions } = productSlice;
export const {} = actions;

export default reducer;
