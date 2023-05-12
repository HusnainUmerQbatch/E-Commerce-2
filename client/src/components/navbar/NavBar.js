import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../redux/slices/loginSlice";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout ,AiOutlineOrderedList} from "react-icons/ai";

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
        <div className="flex items-center   relative mr-10">
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
              {cartItems?.length}
            </span>
          </Link>
        </div>
        <div className="bg-grey-600">
          <div
            className="ml-7 cursor-pointer flex justify-center items-center text-2xl relative"
            // onClick={() => dispatch(SignOut())}
          >
            <FaUserCircle />
          </div>
          <div className="flex flex-col bg-slate-800 p-4 absolute justify-center items-center rounded-md top-[7%] right-[2%]">
            <div className="flex  cursor-pointer mb-5items-center  w-full ">
              <AiOutlineOrderedList size={24} />
              <span className="ml-2 text-base">My Orders</span>
            </div>
            <div className="flex  mb-5 items-center cursor-pointer  w-full ">
              < FaUserCircle size={24} />
              <span className="ml-2 text-base">Profile</span>
            </div>
            <div className="flex  cursor-pointer  items-center w-full ">
              <AiOutlineLogout size={24}/>
              <span className="ml-2 text-base">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
