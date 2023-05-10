import React from "react";
import SideBar from "../../components/sideBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../../components/productTable/ProductTable";
import Pagination from "../../components/pagination";
import Loader from "../../components/loader/loader";
import { fetch_products } from "../../redux/slices/productSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const Products = () => {
  const dispatch = useDispatch();
  const { products, success, pages, error, rows, loading } = useSelector(
    (state) => state.product
  );
  const [searchTerm, setSearchTerm] = useState("");

  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [showLimit, seShowLimit] = useState(false);
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
    setLimit(selectedOption.value)
    setPage(0)
  };
  useEffect(() => {
    if (error) {
      toast(error);
    }
    if (token) {
      dispatch(fetch_products({ token, page, limit, searchTerm }));
    }
  }, [page, success, error, limit, searchTerm]);

  return (
    <div>
      <SideBar>
        <h1 className="text-2xl font-serif font-semibold text-center mt-5">
          Products
        </h1>
        {!loading ? (
          <>
            <div className="ml-10 mt-10 mr-10 border">
              <ProductTable
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
                onChange={handleChange}
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
      </SideBar>
      <ToastContainer />
    </div>
  );
};

export default Products;
