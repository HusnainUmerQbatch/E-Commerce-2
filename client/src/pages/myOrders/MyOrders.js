import React from "react";
import { useState, useEffect } from "react";
import CustomerPanel from "../../components/customerPanel/CustomerPanel";
import Navbar from "../../components/navbar";
import { useDispatch, useSelector } from "react-redux";
import OrderTable from "../../components/orderTable/OrderTable";
import Loader from "../../components/loader/loader";
import Pagination from "../../components/pagination";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
function MyOrders() {
  const dispatch = useDispatch();
  const { products, success, pages, error, rows, loading } = useSelector(
    (state) => state.product
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 100, label: 100 },
    { value: 1000, label: 1000 },
  ];
  const handlePageClick = (data) => {
    setPage(data.selected);
  };
  const handleChange = (selectedOption) => {
    setLimit(selectedOption.value);
    setPage(0);
  };
  return (
    <div>
      <Navbar />
      <CustomerPanel>
        <h1 className="text-2xl font-serif font-semibold text-center mt-5">
          Orders
        </h1>
        {!loading ? (
          <>
            <div className="ml-10 mt-10 mr-10 border">
              <OrderTable
                data={products ?? []}
                setPage={setPage}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-base text-gray-500 ml-11 ">
                total records: {rows}
              </p>

              <Select
                placeholder={limit}
                className="mr-10 mt-1"
                defaultValue={limit}
                // onChange={handleChange}
                options={options}
                isSearchable={false}
              />
            </div>
            <Pagination
              handlePageClick={handlePageClick}
              totalPages={pages}
              currentPage={page}
            />
          </>
        ) : (
          <div className="flex justify-center  mt-52">
            <Loader color={"black"} width={"70"} height={"70"} />
          </div>
        )}
      </CustomerPanel>
    </div>
  );
}

export default MyOrders;
