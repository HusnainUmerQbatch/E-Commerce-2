import Plan from "../../models/plans";

const GetSubscriptionPlans = async () => {
  const subscriptionPlans = await Plan.find().sort({ planPrice: 1 });

  return {
    message: 'Success',
    data: subscriptionPlans
  };
};
export default GetSubscriptionPlans;
