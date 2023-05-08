import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../redux/slices/loginSlice";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white py-4 px-6">
      <div className="flex items-center">
        <Link to="/shop" className="text-xl font-bold">
          MyShop
        </Link>
      </div>
      <div className="flex">
        <div className="flex items-center   relative mr-4">
          <Link to="/cart" className="relative">
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
            <span className="absolute -top-1 -right-[1.75rem] bg-red-500 mt-1 text-white rounded-full px-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
        <div className="ml-7 cursor-pointer" onClick={()=>dispatch(SignOut())}>
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.41699 14.4993L8.45866 19.3327V15.7077H19.3337V13.291H8.45866V9.66602L2.41699 14.4993Z"
              fill="white"
            />
            <path
              d="M15.7094 3.62309C14.2805 3.61913 12.8651 3.89872 11.5451 4.44568C10.2251 4.99263 9.0268 5.79608 8.01953 6.80946L9.72811 8.51805C11.3255 6.92063 13.4498 6.03976 15.7094 6.03976C17.9689 6.03976 20.0932 6.92063 21.6906 8.51805C23.288 10.1155 24.1689 12.2397 24.1689 14.4993C24.1689 16.7589 23.288 18.8831 21.6906 20.4805C20.0932 22.078 17.9689 22.9588 15.7094 22.9588C13.4498 22.9588 11.3255 22.078 9.72811 20.4805L8.01953 22.1891C10.0725 24.2433 12.8033 25.3755 15.7094 25.3755C18.6154 25.3755 21.3462 24.2433 23.3992 22.1891C25.4534 20.1362 26.5856 17.4053 26.5856 14.4993C26.5856 11.5933 25.4534 8.86242 23.3992 6.80946C22.3919 5.79608 21.1936 4.99263 19.8736 4.44568C18.5536 3.89872 17.1382 3.61913 15.7094 3.62309Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
