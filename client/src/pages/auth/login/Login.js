import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  
  function Login() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-4xl font-medium mb-6  bg-black">Login</h1>
              <div className="mb-4">
                <label htmlFor="username" className="block font-medium mb-2">
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage
                  name="username"
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
                {formik.isSubmitting ? 'Loading...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
export default Login;  
