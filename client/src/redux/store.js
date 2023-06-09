import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../redux/slices/loginSlice";
import paymentReducer from "../redux/slices/paymentSlice";

import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";
import cartReducer from "./slices/cartSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["login", "cart"],
};

const reducers = combineReducers({
  login: loginReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
  payment: paymentReducer,
});

const reducer = (state, action) => {
  if (action.type == "login/SignOut") {
    state = undefined;
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  //middleware: [thunk, logger],
  middleware: [thunk],
  devTools: true,
});
