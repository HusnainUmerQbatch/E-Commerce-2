import React from "react";
import SideBar from "../../components/sideBar";
import Loader from "../../components/loader/loader";
import { useState } from "react";
import ProductTable from "../../components/productTable/ProductTable";
import Pagination from "../../components/pagination"
const Products = () => {
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
  const [record, setRecord] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [refreshTable, setRefreshTable] = useState(null);

  const handlePageClick = (data) => {
    setPage(data.selected);
  };
//   async function fetch_properties() {
//     Property.FetchProperties(token, page, limit)
//       .then((res) => {
//         setRecord(res.data);
//       })
//       .catch((error) => {
//         toast.error(serviceErrorHandler(error));
//       });
//   }

//   useEffect(() => {
//     // fetch_properties();
//   }, [page, refreshTable]);
  return (
    <div>
      <SideBar>
          <div >
            {!record?.data ? (
              <>
                <Loader color={"black"} width={"50"} height={"50"} />
              </>
            ) : (
              <>
                <div >
                  <div >
                    <ProductTable
                      data={record?.data}
                      totalPages={record?.totalPages}
                      setRefreshTable={setRefreshTable}
                    />
                    <Pagination
                      handlePageClick={handlePageClick}
                      totalPages={record?.totalPages}
                    />
                  </div>
                </div>
              </>
            )}
            </div>
      </SideBar>
    </div>
  );
};

export default Products;
