import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
const Checkout = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);

  const onSubmit = (values) => {};
  return (
    <>
      <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                city: "",
                postcode: "",
                saveInfo: false,
                notes: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                address: Yup.string().required("Required"),
                city: Yup.string().required("Required"),
                postcode: Yup.string().required("Required"),
              })}
              onSubmit={onSubmit}
              enableReinitialize={true}
            >
              {({ isSubmitting }) => (
                <Form
                  class="justify-center w-full mx-auto"
                  method="post"
                  action
                >
                  <div class="">
                    <div class="space-x-0 lg:flex lg:space-x-4">
                      <div class="w-full lg:w-1/2">
                        <label
                          for="firstName"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          First Name
                        </label>
                        <Field
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="firstName"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                      <div class="w-full lg:w-1/2 ">
                        <label
                          for="lastName"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Last Name
                        </label>
                        <Field
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="lastName"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="w-full">
                        <label
                          for="Email"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Email
                        </label>
                        <Field
                          name="email"
                          type="text"
                          placeholder="Email"
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="w-full">
                        <label
                          for="Address"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Address
                        </label>
                        <Field
                          as="textarea"
                          name="address"
                          type="text"
                          placeholder="City"
                          class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="address"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                    </div>
                    <div class="space-x-0 lg:flex lg:space-x-4">
                      <div class="w-full lg:w-1/2">
                        <label
                          for="city"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          City
                        </label>
                        <Field
                          name="city"
                          type="text"
                          placeholder="City"
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="city"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                      <div class="w-full lg:w-1/2 ">
                        <label
                          for="postcode"
                          class="block mb-3 text-sm font-semibold text-gray-500"
                        >
                          Postcode
                        </label>
                        <Field
                          name="postcode"
                          type="text"
                          placeholder="Post Code"
                          class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <ErrorMessage
                          name="postcode"
                          className="text-red-500 mt-2"
                          component="p"
                        />
                      </div>
                    </div>
                    <div class="relative pt-3 xl:pt-6">
                      <label
                        for="note"
                        class="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Notes (Optional)
                      </label>
                      <textarea
                        name="note"
                        class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                        rows="4"
                        placeholder="Notes for delivery"
                      ></textarea>
                    </div>
                    <div class="mt-4">
                      <button class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                        Process
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8 h-[500px] overflow-auto">
                <div class="flex flex-col space-y-4">
                  {cartItems.map((item, index) => {
                    return (
                      <div class="flex space-x-4">
                        <div class="">
                          <img
                            src="https://source.unsplash.com/user/erondu/1600x900"
                            alt="image"
                            class="w-40"
                          />
                        </div>
                        <div>
                          <h2 class="text-xl font-bold">{item.name}</h2>
                          <p class="text-sm">{item.description}</p>
                          <span class="text-red-600">Price</span> ${item.price}
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div class="flex items-center w-full py-1 mt-4 text-sm font-semibold border-t border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span class="ml-2">${cartTotalAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
