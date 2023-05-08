const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllproducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.post("/products", async (req, res) => {
  try {
    const { name, description, price, asin } = req.body;
    const result = await addProduct({ name, description, price, asin });
    res.json(result);
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});
router.get("/products", async (req, res) => {
  try {
    const { limit, page } = req.query;
    const result = await getAllproducts({limit, page});
    res.json(result);
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});
router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getProductById({ id });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});
router.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, asin } = req.body;
    const result = await updateProduct({
      id,
      name,
      description,
      price,
      asin,
    });
    res.json(result);
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});
router.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteProduct({ id });
    res.json(result);
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});

module.exports = router;
