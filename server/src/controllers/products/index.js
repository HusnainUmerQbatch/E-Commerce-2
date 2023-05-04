const addProduct = require("./addProduct");
const getAllproducts = require("./getAllProducts");
const getProductById = require("./getProductById");
const deleteProduct = require("./deleteProduct");
const updateProduct = require("./updateProduct");

const products = {
  addProduct,
  getAllproducts,
  getProductById,
  deleteProduct,
  updateProduct,
};

module.exports = products;
