import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "reactjs-popup/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { delete_product } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const ProductTable = ({ data }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
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
       
                <div className="w-5 h-7 cursor-pointer " onClick={()=>navigate(`/products/${data._id}`)}>
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
    },
    {
      cell: (data) => {
        // if (data) {
        return (
          <div
            className="w-5 h-7 cursor-pointer"
            onClick={() => dispatch(delete_product({ data, token }))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-trash-2"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M16 6v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6"></path>
              <rect x="3" y="3" width="4" height="2"></rect>
            </svg>
          </div>
        );
        // }
      },
    },
  ];
  return (
    <>
    
    
          <div className="ml-10 flex p-4">
            <p className="text-base font-semibold mr-3 ">Add New</p>
                <div className="w-5 h-7 cursor-pointer " onClick={()=> navigate("/products/new")}>
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
     
      <DataTable columns={columns} data={data ?? []} className="table" />
      <ToastContainer />
    </>
  );
};

export default ProductTable;
