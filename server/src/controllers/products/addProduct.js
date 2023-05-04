const Product = require("../../models/product");
const addProduct = async ({ name, description, price, asin }) => {
  // const JoiSchema = ProductSchema.addProduct;
  // await JoiSchema.validateAsync({
  //   name,
  //   description,
  //   price,
  //   asin,
  // });

  let product;
  product = await Product.findOne({ asin });

  if (product) {
    return {
      message: "asin already exist",
      success: false,
    };
  }

  product = await Product.create({ name, description, price, asin });

  return {
    message: "product created successfully",
    success: true,
  };
};

module.exports = addProduct;
