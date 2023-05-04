const Product = require("../../models/product");
const deleteProduct = async ({id}) => {
  const product =await Product.findByIdAndRemove(id);
  return {
    message: "successfully deleted",
    product
  };
};
module.exports = deleteProduct;
