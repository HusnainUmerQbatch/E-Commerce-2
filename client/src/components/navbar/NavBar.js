import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../redux/slices/loginSlice";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineOrderedList } from "react-icons/ai";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white py-4 px-6">
      <div className="flex ">
        <Link to="/shop" className="text-xl font-bold">
          MyShop
        </Link>
      </div>
      <div className="flex">
        <Link to="/cart" className="">
          <div className="flex items-center bg-blue-700 rounded-md mr-5 px-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-2 mr-2"
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
           <p className="bg-red-500 text-white rounded-full px-1"> {cartItems?.length}</p>
          </div>
        </Link>
        <div className="bg-grey-600 flex relative">
          <Popup
            trigger={
              <div className="ml-7 cursor-pointer flex justify-center items-center text-2xl ">
                <FaUserCircle />
              </div>
            }
            position="left center"
          >
            <div className="flex flex-col p-4  justify-center items-center rounded-md top-[7%] right-[2%]">
              <div className="flex  cursor-pointer mb-5 items-center  w-full ">
                <AiOutlineOrderedList size={24} />
                <span className="ml-2 text-base">My Orders</span>
              </div>
              <div className="flex  mb-5 items-center cursor-pointer  w-full ">
                <FaUserCircle size={24} />
                <span className="ml-2 text-base">Profile</span>
              </div>
              <div
                className="flex  cursor-pointer  items-center w-full "
                onClick={() => dispatch(SignOut())}
              >
                <AiOutlineLogout size={24} />
                <span className="ml-2 text-base">Logout</span>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
