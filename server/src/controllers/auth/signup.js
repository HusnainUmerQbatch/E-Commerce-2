const User = require("../../models/user");
const { generateToken } = require("../../utlis/generatetoken")
const signUp = async ({ firstName, lastName, email, password }) => {
  // const JoiSchema = UserSchema.signUp;
  // await JoiSchema.validateAsync({
  //   firstName,
  //   lastName,
  //   email,
  // });

  let user;
  user = await User.findOne({ email });
  if (user) {
    return {
      message: "User with email already Exist",
    };
  }
  
  user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (!user) {
    return {
      message: "Error while creating new user",
    };
  }

  return {
    successs: true,
    message: "signUp success",
    user,
    token: generateToken(user.id),
  };
};
module.exports = signUp;
