const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    asin: {
      type: String,
      required: true,
      unique:true
    },
  },
  {
    timestamps: true,
  }
);


const user = mongoose.model("product", productSchema);
module.exports = user;
