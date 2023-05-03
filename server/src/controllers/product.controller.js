const Product = require("../models/product.model");
const ProductSchema = require("../validation/product");

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, asin } = req.body;
    const JoiSchema = ProductSchema.addProduct;
    await JoiSchema.validateAsync({
      name,
      description,
      price,
      asin,
    });

    let product;
    product = await Product.findOne({ asin });

    if (product) {
      return res.status(400).send({
        message: "asin already exist",
        success: false,
      });
    }

    product = await Product.create({ name, description, price, asin });

    res.status(201).send({
      message: "product created successfully",
      success: true,
    });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
};

exports.getAllproducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send({
      products,
    });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send({
        message: "product does not exist",
        success: false,
      });
    }
    res.status(404).send({
      product,
      success: true,
    });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
  await Product.findByIdAndRemove(id);
  res.status(200).send({
    message: "successfully deleted",
  });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
  
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, asin } = req.body;

    const product = await Product.findById(id);
  
    const JoiSchema = ProductSchema.addProduct;
    await JoiSchema.validateAsync({ name, description, price, asin });
  
    await Product.findByIdAndUpdate(
      id,
      { name, description, price, asin },
      { new: true }
    );
  
    res.status(200).send({ message: "successfully updated" });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }


};
