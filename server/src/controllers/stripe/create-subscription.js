import stripe from '../../../config/stripe';

const CreateSubscription = ({
  priceId,
  customerId,
//   coupon
}) => {
  const setObj = {
    customer: customerId,
    items: [{
      price: priceId
    }],

  };
  return stripe.subscriptions.create(setObj);
};

export default CreateSubscription;
