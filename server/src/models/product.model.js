const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    asin: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("product", productSchema);
module.exports = user;
