import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const Url = process.env.REACT_APP_URL;

export const fetch_products = createAsyncThunk(
  `fetch_products`,
  async ({ token,page,limit }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${Url}/products?page=${page}&&limit=${limit}`, {
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
  async (
    { name, price, description, asin, token, id },
    { rejectWithValue }
  ) => {
    try {
      console.log({ name, price, description, asin, token, id });
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

export const create_product = createAsyncThunk(
  `create_product`,
  async ({ name, price, description, asin, token }, { rejectWithValue }) => {
    try {
      console.log({ name, price, description, asin, token });
      const response = await axios.post(
        `${Url}/products`,
        { name, price, description, asin },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
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
    pages:null,
    error: null,
    success: false,
    rows:null
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
      pages:payload.totalPages,
      rows:payload.totalRows,
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
    [delete_product.fulfilled]: (state, { payload }) => ({
      loading : false,
      success : false,
    }),
    [delete_product.rejected]: (state, { payload }) => ({
      loading : false,
      error : payload,
      success : false,
    }),
    [update_product.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [update_product.fulfilled]: (state, { payload }) => ({
      loading: false,
      error:payload,
      success: true,
    }),

    [update_product.rejected]: (state, { payload }) => ({
      loading: false,
      error: payload,
      success: false,
    }),

    [create_product.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [create_product.fulfilled]: (state, { payload }) => {
      console.log({ payload });
      state.loading = false;
      state.error= payload; 
      state.success = true;
    },

    [create_product.rejected]: (state, { payload }) => ({
      loading: false,
      error: payload,
      success: false,
    }),
  },
});

const { reducer, actions } = productSlice;
export const {} = actions;

export default reducer;
