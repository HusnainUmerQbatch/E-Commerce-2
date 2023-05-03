const express = require("express");
const router = express.Router();

//importing authentiocation middleware
const { passport } = require("../middleware/passport");

const poductController = require("../controllers/product.controller");

router.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  poductController.addProduct
);
router.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  poductController.getAllproducts
);
router.get(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  poductController.getProductById
);
router.put(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  poductController.updateProduct
);
router.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  poductController.deleteProduct
);

module.exports = router;
