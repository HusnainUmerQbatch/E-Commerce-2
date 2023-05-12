import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "react-toastify/dist/ReactToastify.css";
import { setCartItems } from "../../redux/slices/cartSlice";

const ProductCard = ({
  id,
  name,
  description,
  price,
  user,
  addToCartToggle,
  setAddToCartToggle,
}) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [quantity, setQuantity] = useState(1);
  let updatedCarItems = [];
  const addToCart = () => {
    let cartItem = {
      id,
      name,
      description,
      quantity,
      price,
    };
    console.log({ cartItems});
    updatedCarItems = [...cartItems];

    const existingIndex = updatedCarItems.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      updatedCarItems[existingIndex] = {
        ...updatedCarItems[existingIndex],
        quantity: updatedCarItems[existingIndex].quantity + quantity,
      };
    } else {
      let newProduct = cartItem;
      updatedCarItems.push(newProduct);
    }
    dispatch(setCartItems(updatedCarItems));
    setAddToCartToggle(!addToCartToggle);
    setQuantity(1);
  };
  const increament = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div class="w-80 bg-white shadow rounded">
        <div class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
          <div>
            <span class="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              available
            </span>
          </div>
        </div>
        <div class="p-4 flex flex-col items-center">
          <p class="text-gray-400 font-light text-xs text-center">
            Hammond robotics
          </p>
          <h1 class="text-gray-800 text-center mt-1">{name}</h1>
          <h1 class=" text-center text-red-600 mt-1"> <span className="text-base text-gray-800">By </span>{user?.firstName}</h1>
          <p class="text-center text-gray-800 mt-1">${price}</p>
          <div class="inline-flex items-center mt-2">
            <button
              class="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              onClick={() => decrement()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div class="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              {quantity}
            </div>
            <button
              class="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200"
              onClick={() => increament()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <button
            class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
            onClick={() => addToCart()}
          >
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
