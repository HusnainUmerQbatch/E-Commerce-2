import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import Loader from "../../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/slices/loginSlice";
const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const { loading, user, error, success } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function onSubmit(values) {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
  }
  // useEffect(() => {
  //   // console.log({ user, success });
  //   // if (error) {
  //   //   console.log("here");
  //   // }
  //   console.log(user);
  //   // // if (error) toast.error(error);
  //   // // redirect user to login page if registration was successful
  //   // if (user && user?.role === "seller") navigate("/dashboard");
  //   // if (user && user?.role === "customer") navigate("/shop");
  // }, [user, success, error]);

  useEffect(() => {
    if (error) {
      if(error.message=="welcome"){
        toast.success(error.message);
      }
      else toast.error(error.message);
    }
    if (user && user?.role === "seller") navigate("/dashboard");
    if (user && user?.role === "customer") navigate("/shop");
  }, [success,error])
  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {(formik) => (
          <Form className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-medium mb-6 ">Login</h1>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {loading ? (
                <Loader color={"#4fa94d"} width={"20"} height={"20"} />
              ) : (
                "Login"
              )}
            </button>
            <p className="text-xs mt-4">
              Dont have acoount?{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                SignUp
              </span>
            </p>
          </Form>
        )}
      </Formik>
      <ToastContainer />
      {user ? console.log(user) : ""}

    </div>
  );
}
export default Login;
