const Order = require("../../models/order");
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

  const mailOptions = {
    from: "husnain.umer600@gmail.com",
    to: email,
    subject: "order success",
    text: "your order ha been placed",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw {
        error
      }
    } else {
     
    }
  });
  return {
    message: "order created successfully",
    order,
  };

};
module.exports = addOrder;
