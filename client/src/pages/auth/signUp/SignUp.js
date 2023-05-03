import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../components/loader/loader";
import "react-toastify/dist/ReactToastify.css";
import { serviceErrorHandler } from "../../../config";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "../../../services/Auth";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });

  const onSubmit = (values) => {
    setLoading(true);
    Auth.SignUp(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    )
      .then((res) => {
        console.log(res)
        setLoading(false);
      })

      .catch((error) => {
        setLoading(false);
        toast.error(serviceErrorHandler(error));
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="max-w-md mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-4">Sign Up</h2>

            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-1 font-medium">
                First Name
              </label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your firstName"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="firstName"
                className="text-red-500 mt-1"
                component="div"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-1 font-medium">
                Last Name
              </label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your lastName"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="lastName"
                className="text-red-500 mt-1"
                component="div"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your emailß"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="email"
                className="text-red-500 mt-1"
                component="div"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="password"
                className="text-red-500 mt-1"
                component="div"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {loading ? (
                <Loader color={"#4fa94d"} width={"20"} height={"20"} />
              ) : (
                "Submit"
              )}
            </button>
            <p className="text-xs mt-4">
              Already have acoount?{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Login
              </span>
            </p>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}
export default SignUp;
