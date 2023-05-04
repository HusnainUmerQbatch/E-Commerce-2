const User = require("../../models/user");
const matchPaswsord = require("../../utlis/matchpassword");
const { generateToken } = require("../../utlis/generatetoken");
const login = async ({ email, password }) => {
  // const JoiSchema = UserSchema.login;
  // await JoiSchema.validateAsync({ email, password });
  const UserExist = await User.findOne({ email });
  //match password
  if (!UserExist) {
    return { message: "Invalid Email or Password" };
  }
  const isPasswordMatch = await matchPaswsord(password, UserExist.password);
  if (isPasswordMatch) {
    const token = generateToken(UserExist.id);
    return {
      message: "welcome",
      token: token,
      user: UserExist,
    };
  } else {
    return { message: "Invalid Email or Password" };
  }
};

module.exports = login;
