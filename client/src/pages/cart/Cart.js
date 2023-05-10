import React, { useEffect } from "react";

import Navbar from "../../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { setTotals } from "../../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    cartTotal();
  }, [cartItems]);

const cartTotal=()=>{

    let { total } = cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    dispatch(setTotals(total));
}

  return (
    <div>
      <Navbar />
      {cartItems.length ? (
        <div className="flex flex-col overflow-auto m-10">
          {cartItems.map((item, index) => {
            return (
              <div key={index}>
                <CartItem item={item} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center m-10 ">No Items in the Cart </div>
      )}
      <p className="font-semibold text-2xl grey ml-10 ">Total : {Number(cartTotalAmount)}</p>
    </div>
  );
}

export default Cart;
