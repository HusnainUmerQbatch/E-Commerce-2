import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/cartSlice"
import loginReducer from "../redux/slices/loginSlice";
import productReducer from "./slices/productSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// const reducers = combineReducers({
//   auth: loginReducer,

// })
const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedReducerlogin = persistReducer(persistConfig, loginReducer);
const persistedReducerProduct = persistReducer(persistConfig, productReducer);

export default configureStore({
  reducer: { auth: persistedReducer, login: persistedReducerlogin, product:persistedReducerProduct },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
