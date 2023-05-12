const Product = require("../../models/product");
const getAllproducts = async ({ limit, page, user }) => {
  let items = limit ? limit : 10;
  let pageNumber = page ? page * items : 0 * items;
  const filters = {
  }
  if(user.role=="seller"){
    filters["user"]=user.id;
  }
  const total = await Product.countDocuments(filters);
  const products = await Product.find(filters).populate("user").skip(pageNumber).limit(items);
  return {
    products,
    totalPages: Math.ceil(total / items),
    totalRows: total,
  };
};

module.exports = getAllproducts;
