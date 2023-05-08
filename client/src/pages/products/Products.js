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

const Products = () => {
  const dispatch = useDispatch();
  const { products, success, pages, error, rows, loading } = useSelector(
    (state) => state.product
  );
  const { token } = useSelector((state) => state.login);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [showLimit, seShowLimit] = useState(false);
  const values = [10, 25, 50, 100, 1000];
  const handlePageClick = (data) => {
    setPage(data.selected);
  };
  useEffect(() => {
    if (error) {
      toast(error);
    }
    if (token) {
      dispatch(fetch_products({ token, page, limit }));
    }
  }, [page, success, error, limit]);

  return (
    <div>
      <SideBar>
        <h1 className="text-2xl font-serif font-semibold text-center mt-5">
          Products
        </h1>
        {!loading ? (
          <>
            <div className="ml-10 mt-10 border">
              <ProductTable data={products ?? []} setPage={setPage} />
            </div>
            <div className="flex justify-between">
              <p className="text-base text-gray-500 ml-11 ">
                total records: {rows}
              </p>

              <div
                className="mr-11 shadow-md p-3 cursor-pointer rounded-md mt-1 relative"
                onClick={() => {
                  seShowLimit(!showLimit);
                  setPage(0);
                }}
              >
                <p>Limit</p>

                {showLimit && (
                  <div className="absolute shadow-md p-3 cursor-pointer rounded-md bg-slate-200">
                    {values.map((item, index) => {
                      return (
                        <div key={index} onClick={() => setLimit(item)}>
                          <p>{item}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
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
