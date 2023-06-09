import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Loader from "../../components/loader/loader";
import CardOne from "../../assets/card-feild-1.svg";
import CardTwo from "../../assets/card-feild-2.svg";
import CardThree from "../../assets/card-feild-3.svg";
import CardFour from "../../assets/card-feild-4.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage,useField } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { loadStripe } from "@stripe/stripe-js";
import { SetState, CreateSubscription } from "../../redux/slices/paymentSlice";
const { REACT_APP_STRIPE_KEY } = process.env;
const stripePromise = loadStripe(REACT_APP_STRIPE_KEY);
const PaymentForm = () => {
  const dispatch = useDispatch();
  const { selectedPlan, err, success } = useSelector((state) => state.payment);
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const validationSchema = Yup.object().shape({
    // cardNumber: Yup.string().required("Please enter a card number"),
    // expiryDate: Yup.string().required("Please enter the expiry date"),
    // cvc: Yup.string().required("Please enter the CVC"),
    address: Yup.string().required("Please enter your address"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    const card = elements.getElement(CardNumberElement);
    const stripeToken = await stripe.createToken(card);
    if (stripeToken && stripeToken.error) {
      dispatch(SetState({ field: "err", value: stripeToken.error?.message }));
    } else if (!values?.cardNumber) {
      dispatch(SetState({ field: "err", value: "Please Enter  Card Number" }));
    } else if (!values?.cvc) {
      dispatch(SetState({ field: "err", value: "Please Enter  Cvc Number" }));
    } else if (!values?.expiryDate) {
      dispatch(
        SetState({ field: "err", value: "Please Enter  Expiry Number" })
      );
    } else {
      if (stripeToken?.token) {
        setLoading(true);
        // const { planBillingPeriod, planName, planId, planPrice } =
        //   selectedPlan || {};

        console.log({ selectedPlan, values, token: stripeToken?.token });
        // dispatch(CreateSubscription({
        //   token: stripeToken?.token,
        //   planId,
        //   userData: { ...values, cardData: values?.cardName?.trim(), address: values?.address?.trim() },
        //   selectedPlan: {
        //     planBillingPeriod,
        //     planName,
        //     planId,
        //     planPrice
        //   }
        // }));
      }
    }
  };
  const ExpiryOptions = {
    showIcon: true,
    placeholder: "123",
    style: {
      base: {
        color: "#5A5F7D",
        // iconColor: “#C4F0FF”,
        ":-webkit-autofill": {},
        "::placeholder": {
          color: "#ADB4D2",
        },
      },
    },
  };
  const CardNumberOptions = {
    showIcon: true,
    placeholder: "0000 0000 0000 0000",
    style: {
      base: {
        // iconColor: “#C4F0FF”,
        color: "#5A5F7D",
        ":-webkit-autofill": {},
        "::placeholder": {
          color: "#ADB4D2",
        },
      },
    },
  };
  const ExNumberOptions = {
    showIcon: true,
    placeholder: "MM/YYY",
    style: {
      base: {
        color: "#5A5F7D",
        // iconColor: “#C4F0FF”,
        ":-webkit-autofill": {},
        "::placeholder": {
          color: "#ADB4D2",
        },
      },
    },
  };
  const StripeCardNumberInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props.name);
  
    const handleChange = (event) => {
      helpers.setValue(event.empty ? '' : event.complete ? event.value : undefined);
    };
  
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <CardNumberElement
          {...field}
          {...props}
          onChange={handleChange}
          onBlur={() => helpers.setTouched(true)}
        />
        {meta.touched && meta.error && (
          <div className="text-red-500">{meta.error}</div>
        )}
      </div>
    );
  };

  useEffect(() => {
    if (err) {
      toast.error(err);
      // Notification({
      //   type: "error",
      //   message: err,
      // });
      dispatch(SetState({ field: "err", value: "" }));
    }
    if (success) {
      toast.success("subscribed");
    }
    setLoading(false);
  }, [err, success]);
  return (
    <div className="flex justify-center py-11">
      <div className="mr-10">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Selected Plan</h2>
          <p className="text-gray-700">
            Plan:
            <span className="text-xl font-semibold text-red-500 ml-4">
              {selectedPlan?.planName}
            </span>
          </p>
          <p className="text-gray-700">
            Price:
            <span className="text-xl font-semibold text-red-500 ml-4">
              ${selectedPlan?.planPrice}
            </span>
          </p>
          <p className="text-gray-700">
            Billing Period:
            <span className="text-xl font-semibold text-red-500 ml-4">
              {selectedPlan?.planBillingPeriod}
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <Formik
          initialValues={{
            cardNumber: "",
            expiryDate: "",
            cvc: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-sm mx-auto">
              <div className="mb-4">
                <StripeCardNumberInput
                  name="cardNumber"
                  label="Card Number"
                  options={CardNumberOptions}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="expiryDate"
                  className="block mb-2 font-bold text-gray-700"
                >
                  Expiry Date
                </label>
                <CardExpiryElement
                  name="expiryDate"
                  id="expiryDate"
                  className="p-3 border rounded-md w-full"
                  // onChange={handleChange}
                  options={ExNumberOptions}
                />
                <ErrorMessage
                  name="expiryDate"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="cvc"
                  className="block mb-2 font-bold text-gray-700"
                >
                  CVC
                </label>
                <CardCvcElement
                  name="cvc"
                  id="cvc"
                  className="p-3 border rounded-md w-full"
                  options={ExpiryOptions}
                  // onChange={handleChange}
                  placeholder="123"
                />

                <ErrorMessage
                  name="cvc"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block mb-2 font-bold text-gray-700"
                >
                  Address
                </label>
                <Field
                  as="textarea"
                  type="text"
                  id="address"
                  name="address"
                  className="p-2 border rounded-md w-full"
                  placeholder="Enter Address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
              >
                {loading ? (
                  <Loader color={"#4fa94d"} width={"20"} height={"20"} />
                ) : (
                  "Pay"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePaymentForm;
