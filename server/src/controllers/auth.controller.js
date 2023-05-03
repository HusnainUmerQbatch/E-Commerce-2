const User = require("../models/user.model");
const hashPassword = require("../utlis/hashpassword");
const matchPaswsord = require("../utlis/matchpassword");
const { generateToken } = require("../utlis/generatetoken");
const UserSchema = require("../validation/user");


exports.SignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const JoiSchema = UserSchema.signUp;
    await JoiSchema.validateAsync({
      firstName,
      lastName,
      email,
    });

    let user;
    user = await User.findOne({ email });
    if (user) {
      return res.status(409).send({
        message: "User with email already Exist",
      });
    }
    let hashedPassword = await hashPassword(password);
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (!user) {
      return res.status(400).send({
        message: "Error while creating new user",
      });
    }

    res.status(201).send({
      successs: true,
      message: "signUp success",
      token: generateToken(user.id),
    });
  } catch (error) {
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
};
//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const JoiSchema = UserSchema.login;
    await JoiSchema.validateAsync({ email, password });
    const UserExist = await User.findOne({ email });
    //match password
    if (!UserExist) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }

    const isPasswordMatch = await matchPaswsord(password, UserExist.password);
    if (isPasswordMatch) {
      const token = generateToken(UserExist.id);
      return res.status(200).send({
        message: "welcome",
        token: token,
        user: UserExist,
      });
    } else {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
    const { status } = error;
    s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
};
