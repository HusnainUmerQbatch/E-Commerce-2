
import {decreaseCart,increaseCart} from "../../redux/slices/cartSlice"
import { useDispatch,useSelector } from "react-redux";

function CartItem({item}) {
    const dispatch=useDispatch();


  function incrementQuantity() {
    dispatch(increaseCart(item));
  }

  function decrementQuantity() {
  
        dispatch(decreaseCart(item));
  }

  return (
    <div className="flex justify-between items-center border-b border-gray-200 py-4">
      <div className="flex items-center">
        <img
          className="h-16 w-16 object-cover rounded"
          src="https://asset.conrad.com/media10/isa/160267/c1/-/en/002178099PI00/image.jpg?x=400&y=400"
          alt="Product image"
        />
        <div className="ml-4">
          <p className="font-semibold text-gray-600">{item?.name}</p>
          <p className="text-sm text-gray-500">{item?.description}</p>
          <p className="text-sm text-gray-500">${item?.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-600"
          onClick={decrementQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
        <span className="mx-2 text-gray-700">{item?.quantity}</span>
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-600"
          onClick={incrementQuantity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12M6 12h12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
