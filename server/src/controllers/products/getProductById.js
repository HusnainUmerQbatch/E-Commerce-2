const Product = require("../../models/product");
const getProductById = async ({ id }) => {
  const product = await Product.findById(id);
  if (!product) {
    return {
      message: "product does not exist",
      success: false,
    };
  }
  return {
    product,
    success: true,
  };
};

module.exports = getProductById;
