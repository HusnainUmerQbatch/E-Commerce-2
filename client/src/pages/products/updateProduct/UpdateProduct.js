import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import Loader from "../../../components/loader/loader";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { update_product } from "../../../redux/slices/productSlice";
import SideBar from "../../../components/sideBar";
function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  const { products, loading, error, success } = useSelector(
    (state) => state.product
  );
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
    if (id) {
      const singleUser = products.filter((ele) => ele._id === id);
      setProduct(singleUser[0]);
    }
  }, []);

  const onSubmit = (values) => {
    const { name, price, description, asin } = values;
    dispatch(
      update_product({ name, price, description, asin, token, id })
    ).then((res) => {
      toast(res?.payload?.message);
    });
  };
  return (
    <div className="w-full">
      <SideBar>
        <div className="m-10 ">
          <Formik
            initialValues={{
              name: product?.name,
              price: product?.price,
              description: product?.description,
              asin: product?.asin,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              description: Yup.string().required("Required"),
              price: Yup.number().required("Required"),
              asin: Yup.string().required("Required"),
            })}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({ isSubmitting }) => (
              <Form className="w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Product Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter the product name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="name"
                    className="text-red-500 mt-2"
                    component="p"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block font-bold mb-2">
                    Description
                  </label>
                  <Field
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Enter the product description"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="description"
                    className="text-red-500 mt-2"
                    component="p"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block font-bold mb-2">
                    Price
                  </label>
                  <Field
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter the product price"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="price"
                    className="text-red-500 mt-2"
                    component="p"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="asin" className="block font-bold mb-2">
                    ASIN
                  </label>
                  <Field
                    type="text"
                    name="asin"
                    id="asin"
                    placeholder="Enter the product ASIN"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  update
                </button>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </div>
      </SideBar>
    </div>
  );
}
export default UpdateProduct;
