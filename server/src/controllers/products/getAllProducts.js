const Product = require("../../models/product");
const getAllproducts = async ({limit ,page}) => {
  let items = limit ? limit : 10;
  let pageNumber = page ? page * items : 0 * items;

  const total = await Product.countDocuments({});
  const products = await Product.find({})
  .skip(pageNumber)
  .limit(items);;
  return {
    products,
    totalPages: Math.ceil(total / items),
    totalRows:total
  };
};

module.exports = getAllproducts;
