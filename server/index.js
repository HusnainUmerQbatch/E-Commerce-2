require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
//importing authentiocation middleware
const { passport } = require("../server/src/middleware/passport");

const { auth, product } = require("./src/routes");

//Db_connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//routes

app.use("/", auth);
app.use(
  "/",
  passport.authenticate("jwt", { session: false }),
  product
);

//server
const Port = process.env.PORT || 5000;
const server = app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

module.exports = server;
