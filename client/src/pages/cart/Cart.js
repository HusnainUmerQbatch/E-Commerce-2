import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/navbar";
import CartItem from "../../components/cartItem/CartItem";
import { setTotals, clearCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    calculateCartTotal();
  }, [cartItems]);

  const calculateCartTotal = () => {
    let { total } = cartItems?.reduce(
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
  };

  const handleCheckout = () => {
    navigate('/checkout')
  };

  const handleClearCart = () => {
    // Clear the cart
    dispatch(clearCart());
  };

  return (
    <div>
      <Navbar />
      {cartItems.length ? (
        <>
     
        <div className="flex flex-col overflow-auto m-10">
          {cartItems.map((item, index) => {
            return (
              <div key={index}>
                <CartItem item={item} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center m-10">
        <button
          onClick={handleClearCart}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Clear Cart
        </button>
        <p className="font-semibold text-2xl grey">Total: {Number(cartTotalAmount)}</p>
        <button
          onClick={handleCheckout}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Checkout
        </button>
      </div>
      </>
      ) : (
        <div className="flex items-center m-10">No Items in the Cart</div>
      )}
      
    </div>
  );
}

export default Cart;
