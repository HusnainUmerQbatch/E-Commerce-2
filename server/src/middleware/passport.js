const JwtStrategy = require("passport-jwt").Strategy;
const passport = require("passport");
const User = require("../models/user.model");

var headerExtractor = function (req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    return token;
  }
};
passport.use(
  "jwt",
  new JwtStrategy(
    {
      jwtFromRequest: headerExtractor,
      secretOrKey: process.env.SECRET_KEY,
    },
    async function (jwtPayload, done) {
      const user = await User.findById(jwtPayload.id);

      if (user) {
        return done(null, user);
      }

      return done(new Error("uncaught error! try again later"), null);
    }
  )
);

// checkRole = async (req, res, next) => {
//   try {
//     const isEmp = await Employee.findOne({ _id: req.user.id });
//     const isAdmin = await Admin.findOne({ _id: req.user.id });
//     if (isAdmin) {
//       next();
//     }
//     if (isEmp) {
//       if (isEmp.job_role == "owner") {
//         next();
//       } else {
//         res
//           .status(401)
//           .send({ message: "you are not authorized to perform this task" });
//       }
//     }
//   } catch (error) {
//     res.status(500).send({ ...error });
//   }
// };

module.exports = {
  passport,
  // checkRole,
};
