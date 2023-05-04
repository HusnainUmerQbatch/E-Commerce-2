const Product = require("../../models/product");
const getAllproducts = async (req, res) => {
  const products = await Product.find({});
  return {
    products,
  };
};

module.exports = getAllproducts;
