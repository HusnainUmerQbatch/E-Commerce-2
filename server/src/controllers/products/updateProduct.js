const Product = require("../../models/product");
const updateProduct = async ({ id, name, description, price, asin }) => {
  await Product.findByIdAndUpdate(
    id,
    { name, description, price, asin },
    { new: true }
  );

  return { message: "successfully updated" };
};

module.exports = updateProduct;
