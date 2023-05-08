const Product = require("../../models/product");
const getProductById = async ({ id }) => {
  const product = await Product.findById(id);
  if (!product) {
    throw {
      status:400,
      message: "product does not exist",
    };
  }
  return {
    product,
    success: true,
  };
};

module.exports = getProductById;
