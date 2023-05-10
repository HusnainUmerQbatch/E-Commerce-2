import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotalAmount: 0,
  },
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setTotals(state, action) {
      state.cartTotalAmount = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setCartItems, setTotals } = cartSlice.actions;
export default cartSlice.reducer; 