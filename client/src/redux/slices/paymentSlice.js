import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const Url = process.env.REACT_APP_URL;
 // import { axiosBaseUrl } from "../../config/axios/axios-configuration";

// const axios = axiosBaseUrl();

export const GetSubscriptionPlans = createAsyncThunk(
  "payment/subscriptionPlans",
  async ({token}, thunkAPI) => {
    try {
      //   const response = await axios.get('/');
      const response = await axios.get(`${Url}/get-subscriptions`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status,
        });
      }
      return thunkAPI.rejectWithValue({
        err: "Network Error",
      });
    }
  }
);

export const CreateSubscription = createAsyncThunk(
  'payment/createSubscription',
  async (data, thunkAPI) => {
    try {
      const {
        token,
        coupon,
        selectedPlan,
        planId,
        userData
      } = data;
      const response = await axios.post('/stripe/create-user-subscription', {
        token,
        coupon,
        planId,
        selectedPlan,
        userData
      });

      return response.data;
    } catch (err) {
      if (err.response && err.response.data) {
        return thunkAPI.rejectWithValue({
          err: err.response.data,
          status: err.response.status
        });
      }
      return thunkAPI.rejectWithValue({
        err: 'Network Error'
      });
    }
  }
);
const auth = createSlice({
  name: "payment",
  initialState: {
    plans: [],
    selectedPlan: {},
    loading: false,
    success: false,
    err: false,
    message: "",
  },
  reducers: {
    SetState(state, { payload: { field, value } }) {
      state[field] = value;
    },
    ClearState() {
      return {
        plans: [],
        loading: false,
        success: false,
        err: false,
        message: "",
      };
    },
  },
  extraReducers: {
    [GetSubscriptionPlans.pending]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [GetSubscriptionPlans.fulfilled]: (state, action) => ({
      loading: false,
      plans: action.payload.data,
    }),
    [GetSubscriptionPlans.rejected]: (state, action) => ({
      ...state,
      success: false,
      loading: false,
      err: action.payload.err,
    }),
    // [CreateSubscription.pending]: (state, action) => ({
    //   ...state,
    //   loading: true
    // }),
    // [CreateSubscription.fulfilled]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   success: true,
    //   message: 'Subscription Has Been Created Succesfully'
    // }),
    // [CreateSubscription.rejected]: (state, action) => ({
    //   ...state,
    //   success: false,
    //   loading: false,
    //   err: action.payload.err
    // }),
    // [CancelSubscription.pending]: (state, action) => ({
    //   ...state,
    //   loading: true
    // }),
    // [CancelSubscription.fulfilled]: (state, action) => ({
    //   ...state,
    //   loading: false,
    //   success: true,
    //   message: 'Subscription Has Been Deleted'
    // }),
    // [CancelSubscription.rejected]: (state, action) => ({
    //   ...state,
    //   success: false,
    //   loading: false,
    //   err: action.payload.err
    // })
  },
});

const { reducer, actions } = auth;

export const { SetState, ClearState, logout } = actions;

export default reducer;
