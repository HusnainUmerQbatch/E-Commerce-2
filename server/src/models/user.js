const mongoose = require("mongoose");
const hashPassword= require("../utlis/hashpassword")
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["customer", "seller"],
      default: "customer",
      required:false
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    let hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});


const user = mongoose.model("user", userSchema);
module.exports = user;
