import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSubscriptionPlans,SetState } from "../../redux/slices/paymentSlice";
import {  useNavigate } from "react-router-dom";


const SubscriptionPlans = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.login);
  const navigate = useNavigate();

  // const location = useLocation();
  const { plans } = useSelector((state) => state.payment);
  useEffect(() => {
    dispatch(GetSubscriptionPlans({ token }));
  }, []);
  const handleSelectPaymentPlan = (plan) => {
    dispatch(SetState({ field: "selectedPlan", value: plan }));
    navigate("/add-subscription")
  };
  return (
    <>
      <div className="min-h-screen mt-11 overflow-auto ">
        <div className=" text-center text-black">
          <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
        </div>

        <div className=" flex justify-center items-center  gap-10">
          {plans?.map((plan, index) => {
            return (
              <div
                className="w-64 p-4 bg-indigo-500 shadow-lg rounded-2xl dark:bg-gray-800"
                key={index}
              >
                <div className="flex items-center justify-between text-white">
                  <p className="mb-4 text-4xl font-medium">{plan?.planName}</p>
                  <p className="flex flex-col text-3xl font-bold">
                    ${plan?.planPrice}
                    <span className="text-sm font-thin text-right">
                      {plan?.planBillingPeriod}
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-white text-md">Plan include :</p>
                <ul className="w-full mt-6 mb-6 text-sm text-white">
                  <li className="mb-3 flex items-center ">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    All illimited components
                  </li>
                  <li className="mb-3 flex items-center ">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Own custom Tailwind styles
                  </li>
                  <li className="mb-3 flex items-center ">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Unlimited Templates
                  </li>
                  <li className="mb-3 flex items-center ">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Free premium dashboard
                  </li>
                  <li className="mb-3 flex items-center ">
                    <svg
                      className="w-6 h-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Best ranking
                  </li>
                  <li className="mb-3 flex items-center opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      className="w-6 h-6 mr-2"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Prenium svg
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full px-3 py-3 text-sm text-indigo-500 bg-white rounded-lg shadow hover:bg-gray-100 "
                  onClick={() => {
                    handleSelectPaymentPlan(plan);
                  }}
                >
                  Choose plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SubscriptionPlans;
