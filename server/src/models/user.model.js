const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["customer", "seller"],
      default: "customer",
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
module.exports = user;
