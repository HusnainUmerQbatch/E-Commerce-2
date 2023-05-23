const Order = require("../../models/order");
const OrderProducts = require("../../models/orderdProducts");
const transporter = require("../../utlis/nodemailer");
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
  let Products = [];

  for (let i = 0; i < products?.length; i++) {
    const { name, description, quantity } = products[i];
    const orderedProduct = await OrderProducts.create({
      name,
      description,
      quantity,
    });
    console.log(orderedProduct.id);
    Products.push(orderedProduct.id);
  }
  console.log({ Products });
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
    products: Products,
  });

  const mailOptions = {
    from: "husnain.umer600@gmail.com",
    to: email,
    subject: "order success",
    text: "your order ha been placed",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw {
        error,
      };
    } else {
    }
  });
  return {
    message: "order created successfully",
    order,
  };
};
module.exports = addOrder;
