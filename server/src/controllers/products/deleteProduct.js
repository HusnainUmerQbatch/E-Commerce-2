const Product = require("../../models/product");
const deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(id);
  return {
    message: "successfully deleted",
  };
};
module.exports = deleteProduct;
