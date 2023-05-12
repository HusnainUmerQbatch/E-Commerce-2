const Product = require("../../models/product");
const addProduct = async ({ name, description, price, asin, user }) => {
  const product = await Product.create({
    name,
    description,
    price,
    asin,
    user: user.id,
  });

  return {
    message: "product created successfully",
    product,
  };
};

module.exports = addProduct;
