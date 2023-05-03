require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

const Router = require("./src/routes");



//Db_connection
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

//routes

app.use("/", Router.auth);
app.use("/", Router.product);


//server
const Port = process.env.PORT || 5000;
const server = app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});

module.exports = server;
