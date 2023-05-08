const Product = require("../../models/product");
const addProduct = async ({ name, description, price, asin }) => {
 
  let product;

  product = await Product.create({ name, description, price, asin });

  return {
    message: "product created successfully",
    product
  };
};

module.exports = addProduct;
