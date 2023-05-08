import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { add } from "../../redux/slices/cartSlice";

const ProductCard = ({ id, name, description, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    let cartItem = {
      id,
      name,
      description,
      quantity: 1,
      price,
    };

    dispatch(add(cartItem));
    toast.success("added to cart");
  };
  return (
    <>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <div class="h-64 w-full bg-gray-300">
        <img
          class="object-cover h-full w-full"
          src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002178099PI00/image.jpg?x=400&y=400"
          alt="Product Image"
        />
      </div>
      <div class="p-4">
        <h3 class="font-semibold text-lg mb-2">{name}</h3>
        <p class="text-gray-700 text-base mb-2">{description}</p>
        <p class="text-gray-700 text-lg font-bold mb-2">$ {price}</p>
        <button
          class="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            addToCart();
          }}
        >
          <svg
            class="h-6 w-6 fill-current mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 16h-3v3h-2v-3H8v-2h6V8h2v6h3z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
      <ToastContainer/>
    </>
  );
};

export default ProductCard;
