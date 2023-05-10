import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { delete_product } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import cross from "../../assets/cross.svg";
import "react-toastify/dist/ReactToastify.css";
const ProductTable = ({ data, setPage,setSearchTerm,searchTerm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);

  const columns = [
    {
      name: "Name",
      selector: (data) => data?.name,
      width: "20%",
      sortable: true,
    },
    {
      name: "Description",
      selector: (data) => data?.description,
      width: "20%",
    },
    {
      name: "ASIN",
      selector: (data) => data?.asin,
      width: "15%",
    },
    {
      name: "Price",
      selector: (data) => data?.price,
      width: "15%",
    },
    {
      cell: (data) => {
        return (
          <div className="w-[100%]">
            <div
              className="w-5 h-7 cursor-pointer "
              onClick={() => navigate(`/products/${data._id}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-more-horizontal"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </div>
          </div>
        );
      },
      width: "10%",
    },
    {
      cell: (data) => {
        return (
          <div
            className="w-5 h-7 cursor-pointer"
            onClick={() =>
              dispatch(delete_product({ data, token })).then((res) => {
                setPage(0);
              })
            }
          >
            <svg
              data-name="Capa 1"
              id="Capa_1"
              viewBox="0 0 20 19.84"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.41,5.21H11.74a1.36,1.36,0,0,0-1.36-1.3H9.62a1.36,1.36,0,0,0-1.36,1.3H5.59a1.1,1.1,0,0,0,0,2.19h.12v7.17a1.39,1.39,0,0,0,1.37,1.37H13a1.38,1.38,0,0,0,1.37-1.37V7.4h0a1.1,1.1,0,0,0,0-2.19ZM9.62,4.58h.76a.69.69,0,0,1,.68.63H8.94A.69.69,0,0,1,9.62,4.58Zm4.08,10a.7.7,0,0,1-.7.7H7.08a.71.71,0,0,1-.7-.7V7.4H7.79v4.69a.34.34,0,0,0,.67,0V7.4H9.88v6a.34.34,0,0,0,.67,0v-6H12v4.69a.34.34,0,0,0,.67,0V7.4H13.7Zm.71-7.84H5.59a.43.43,0,0,1,0-.85h8.82a.43.43,0,0,1,0,.85Z" />
            </svg>
          </div>
        );
      },
      width: "10%",
    },
  ];
  // function handleKeyDown(event) {
  //   if (event.key === "Enter") {
  //     console.log(event.target.value)
  //   }
  // }
  return (
    <>
      <div className="ml-10 flex justify-between p-4">
        <div className="flex ">
          <p className="text-base font-semibold mr-3 ">Add New</p>
          <div
            className="w-5 h-7 cursor-pointer "
            onClick={() => navigate("/products/new")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 11h-4v4c0 .6-.4 1-1 1s-1-.4-1-1v-4H7c-.6 0-1-.4-1-1s.4-1 1-1h4V7c0-.6.4-1 1-1s1 .4 1 1v4h4c.6 0 1 .4 1 1s-.4 1-1 1z" />
            </svg>
          </div>
        </div>
        {/* <input
          type="text"
          className="border p-1 rounded-md relative"
          placeholder="search"
          onChange={(e)=>setSearchTerm(e.target.value)}
          value={searchTerm}
          // onKeyDown={handleKeyDown}
        />
        <img
          src={cross}
          className="h-3 w-3 absolute top-[14.5%] cursor-pointer right-[3%]"
          onClick={()=>{
            console.log("click")
            setSearchTerm("")
          }}
        /> */}
      </div>

      <DataTable columns={columns} data={data ?? []} className="table" />
    </>
  );
};

export default ProductTable;
