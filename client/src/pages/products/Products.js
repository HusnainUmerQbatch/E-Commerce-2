import React from "react";
import SideBar from "../../components/sideBar";
import Loader from "../../components/loader/loader";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductTable from "../../components/productTable/ProductTable";
import Pagination from "../../components/pagination";
import { fetch_products } from "../../redux/slices/productSlice";
const Products = () => {
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, products, success, error } = useSelector(
    (state) => state.product
  );
  const token = useSelector((state) => state.login.token);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [refreshTable, setRefreshTable] = useState(null);

  const handlePageClick = (data) => {
    setPage(data.selected);
  };
  useEffect(() => {
    dispatch(fetch_products({ token }));
  }, [success,showModal]);

  if (loading) {
    return <Loader color={"black"} width={"50"} height={"50"} />;
  }
  return (
    <div>
      <SideBar>
        <h1 className="text-2xl font-serif font-semibold text-center mt-5">Products</h1>
        <div className="ml-10 mt-10 border">
          <ProductTable data={products} totalPages={3}  showModal={showModal} setShowModal={ setShowModal}/>
          <Pagination handlePageClick={handlePageClick} totalPages={3} />
        </div>
      </SideBar>
    </div>
  );
};

export default Products;
