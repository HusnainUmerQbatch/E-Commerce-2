import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl mb-8">Your order has been successfully placed.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          navigate("/shop");
        }}
      >
        Go Back to Shop
      </button>
    </div>
  );
};

export default ThankYou;
