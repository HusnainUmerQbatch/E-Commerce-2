import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Select, Spin, Row, Col } from "antd";

import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { AuthWrapper } from "./style";
import Loader from "../../components/loader/loader";
import CardOne from "../../assets/card-feild-1.svg";
import CardTwo from "../../assets/card-feild-2.svg";
import CardThree from "../../assets/card-feild-3.svg";
import CardFour from "../../assets/card-feild-4.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { loadStripe } from "@stripe/stripe-js";
import { SetState, CreateSubscription } from "../../redux/slices/paymentSlice";
const { REACT_APP_STRIPE_KEY } = process.env;
const stripePromise = loadStripe(REACT_APP_STRIPE_KEY);
const PaymentForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { selectedPlan, err, success } = useSelector((state) => state.payment);
  const { token } = useSelector((state) => state.login);
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const validationSchema = Yup.object().shape({
    // cardNumber: Yup.string().required("Please enter a card number"),
    // expiryDate: Yup.string().required("Please enter the expiry date"),
    // cvc: Yup.string().required("Please enter the CVC"),
    address: Yup.string().required("Please enter your address"),
  });

  const handleForm = async (values) => {
    const userData = form.getFieldsValue();
    console.log({ userData });
    const card = elements.getElement(CardNumberElement);
    const stripeToken = await stripe.createToken(card);

    if (stripeToken && stripeToken.error) {
      dispatch(SetState({ field: "err", value: stripeToken.error?.message }));
    } else if (!userData?.address) {
      dispatch(
        SetState({ field: "err", value: "Please Enter Address Details" })
      );
    } else if (!userData?.cardName) {
      dispatch(SetState({ field: "err", value: "Please Enter Your FullName" }));
    } else {
      if (stripeToken?.token) {
        setLoading(true);
        const { planBillingPeriod, planName, planId, planPrice } =
          selectedPlan || {};

        dispatch(
          CreateSubscription({
            token,
            source:stripeToken?.token?.id,
            planId,
            userData: {
              ...userData,
              cardData: userData?.cardName?.trim(),
              address: userData?.address?.trim(),
            },
            selectedPlan: {
              planBillingPeriod,
              planName,
              planId,
              planPrice,
            },
          })
        );
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
    <AuthWrapper>
      <Row className="d-flex">
        <Col md={10} className="left-side-img">
          {/* <LeftSide /> */}
        </Col>
        <Col md={14}>
          <div className="strip-form-wrapper">
            <div className="form-header">
              <h1 className="m-0">Payment Details</h1>
              <p className="m-0">
                Please add valid Credit Card information for subscription of
                ChatPro plans.
              </p>
            </div>
            <h3 className="mb-0 selected-plan-header-text">Selected Plan</h3>
            <div className="selected-plan-wrapper d-flex justiy-content-between align-items-center">
              <h1 className="mb-0">{selectedPlan?.planName}</h1>
              <div className="selected-plan-text">
                <p className="mb-0 d-flex">
                  <span>$</span>
                  <span>{selectedPlan?.planPrice}</span>
                  <span>
                    {selectedPlan?.planBillingPeriod === "yearly"
                      ? "/year"
                      : "/month"}
                  </span>
                </p>
              </div>
            </div>
            <div className="stripform-form-credit-card">
              <Form name="login" form={form} layout="vertical">
                <div className="d-flex justify-content-between credentials-wrapper align-items-center">
                  <h2 className="m-0">Credit Card Credentials</h2>
                  {/* <FaStripe className="payment-strip-logo" /> */}
                </div>
                <div className="d-flex align-items-center stripform-item-wrapper">
                  <div className="strip-form-item d-flex flex-column">
                    <Form.Item
                      name="cardName"
                      rules={[
                        { message: "Please Input Your Name!", required: true },
                      ]}
                      label="Name On Card"
                    >
                      <Input
                        type="text"
                        className="payment-user-name "
                        placeholder="Name Here"
                      />
                    </Form.Item>
                  </div>
                  <div className="strip-form-item d-flex flex-column position-relative">
                    <div className="credit-card-input-wrapper">
                      <Form.Item
                        name="Number"
                        rules={[
                          {
                            message: "Please Input Your Card Number!",
                            required: true,
                          },
                        ]}
                        label="Card Number"
                      >
                        <CardNumberElement options={CardNumberOptions} />
                      </Form.Item>
                      <div className="card-images">
                        <img src={CardOne} />
                        <img src={CardTwo} />
                        <img src={CardThree} />
                        <img src={CardFour} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center stripform-item-wrapper strip-form-date-expire">
                  <div className="strip-form-item d-flex flex-column">
                    <Form.Item
                      name="expirationDate"
                      rules={[
                        {
                          message: "Please Input Your Expiration Date!",
                          required: true,
                        },
                      ]}
                      label="Expiration Date"
                    >
                      <CardExpiryElement options={ExNumberOptions} />
                    </Form.Item>
                  </div>
                  <div className="strip-form-item d-flex flex-column">
                    <Form.Item
                      name="cvc"
                      rules={[
                        { message: "Please Input Your CVC!", required: true },
                      ]}
                      label="CVC"
                    >
                      <CardCvcElement
                        options={ExpiryOptions}
                        placeholder="123"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="stripform-form-address new-feild-wrapper">
                  <h2 className="m-0">Address</h2>
                  <div className="d-flex align-items-center stripform-item-wrapper">
                    <div className="strip-form-item d-flex flex-column">
                      <Form.Item
                        name="address"
                        rules={[
                          {
                            message: "Please Input Your Address!",
                            required: true,
                          },
                        ]}
                        label="Address"
                      >
                        <Input
                          className="payment-form-address "
                          type="text"
                          placeholder="Address Here"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
            <div className="fotter-wrapper">
              {/* <button></button> */}
              <button
                disabled={loading}
                onClick={handleForm}
                className="cancel-btn"
              >
                {loading ? (
                  <Loader color={"black"} width={"30"} height={"30"} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </Col>
        {/* <Modal
          className="addEvent-modal crm-basic-modal"
          footer={null}
          type="primary"
          centered
          visible={paymentSuccessModal}
          width={440}
          closable={false}
        >
          <div className="add-card-popup-wrapper">
            <BsCheckCircle className="check-rounded" />
            <h1 className="m-0 modal-credit-card-heading">Credit Card Added Successfully</h1>
            <p className="m-0 modal-credit-card-text">Your credit card has been successfully and securely added for future billings.</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <Button
              onClick={handlePaymentSuccessfulCase}
              size="default"
              type="primary"
              className="credit-card-popup-next-btn"
            >
              Next
            </Button>
          </div>
        </Modal>
        <Modal
          className="addEvent-modal crm-basic-modal"
          footer={null}
          type="primary"
          centered
          visible={paymentFailedModal}
          width={440}
          closable={false}
        >
          <div className="add-card-popup-wrapper">
            <FiAlertCircle className="check-rounded alert-pop-add-card" />
            <h1 className="m-0 modal-credit-card-heading">Payment Failed</h1>
            <p className="m-0 modal-credit-card-text">Please Check the information on your credit card and try again. Contact your card issuer for more information.</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <Button
              onClick={() => setPaymentFailedModal(false)}
              size="default"
              type="primary"
              className="credit-card-popup-next-btn"
            >
              Try Again
            </Button>
          </div>
        </Modal> */}
      </Row>
      <ToastContainer />
    </AuthWrapper>
  );
};

const StripePaymentForm = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default StripePaymentForm;
