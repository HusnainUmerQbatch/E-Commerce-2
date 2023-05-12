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
    clearCart(state) {
      state.cartItems= [];
      state.cartTotalAmount= 0;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setCartItems, setTotals,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
