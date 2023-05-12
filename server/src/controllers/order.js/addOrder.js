const Order = require("../../models/order");
const addOrder = async ({
  firstName,
  lastName,
  email,
  products,
  shippingAddress,
  address,
  city,
  postcode,
  total,
  paymentMethod,
  notes,
  user,
}) => {
  let orderdaProducts = [];
  products?.map((item) => {
    orderdaProducts.push(item.id);
  });
  const order = await Order.create({
    firstName,
    lastName,
    email,
    address,
    city,
    total,
    shippingAddress,
    postcode,
    paymentMethod,
    notes,
    customer: user.id,
    products: orderdaProducts,
  });

  return {
    message: "order created successfully",
    order,
  };
};
module.exports = addOrder;
