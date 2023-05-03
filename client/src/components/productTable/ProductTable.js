
import DataTable from "react-data-table-component";
import Dustbin from "../../assets/dustbin.svg";
import { ToastContainer, toast } from "react-toastify";
// import { serviceErrorHandler } from "../../../config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Property } from "../../../services/Property";

const ProductTable = ({
  data,
  handlePageClick,
  totalPages,
  setRefreshTable,
}) => {
  const navigate = useNavigate();
  // const { token } = useSelector((state) => state.auth);
  // const delete_property = async (id) => {
  //   Property.DeleteProperty(token, id)
  //     .then((res) => {
  //       setRefreshTable(true);
  //       toast.success("property deleted successfully");
  //     })
  //     .catch((error) => {
  //       toast.error(serviceErrorHandler(error));
  //     });
  // };

  const goToProperty = (id) =>
    navigate({
      pathname: "/addProperty",
      search: `id=${id}`,
    });

  const columns = [
    {
      name: "Name",
      selector: (data) => data?.streetAddress,
      width: "35%",
      sortable: true,
    },
    {
      name: "",
      // selector: (data) => data?.owner?.firstName,
      width: "32%",
      omit: data?.role === "user",
    },
    {
      name: "Purchase Price",
      selector: (data) => data?.purchasePrice,
      width: "15%",
      sortable: true,
    },
    {
      cell: (data) => {
        if (data) {
          return (
            <div className="Dustbin">
              <img
                src={Dustbin}
                alt="type"
                // onClick={() => {
                //   delete_property(data._id);
                // }}
              />
            </div>
          );
        }
      },
    },
  ];
  return (
    <>
      <DataTable columns={columns} data={data} />
      <ToastContainer />
    </>
  );
};

export default ProductTable;
