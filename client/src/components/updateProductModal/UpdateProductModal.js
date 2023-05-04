import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import Loader from "../loader/loader";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { update_product } from "../../redux/slices/productSlice";
function UpdateProductModal({ id, title,}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  const { products, loading, error, success } = useSelector(
    (state) => state.product
  );
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    if (id) {
      const singleUser = products.filter((ele) => ele._id === id);
      setProduct(singleUser[0]);
    }
  }, []);
  const initialValues = {
    name: product?.name,
    price: product?.price,
    description: product?.description,
    asin: product?.asin,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    description: Yup.string().required("Required"),
    asin: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    const { name, price, description, asin } = values;
    dispatch(update_product({ name, price, description, asin, token, id }));
  };
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [success, error]);
  return (
    <div className="m-10 ">
      {console.log(product)}
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
          asin: Yup.string(),
        })}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => (
          <Form>
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
                ASIN (optional)
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
              {title}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}
export default UpdateProductModal;
