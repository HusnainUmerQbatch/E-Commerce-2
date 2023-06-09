const auth = require("./auth");
const product = require("./product");
const order = require("./order");
const stripe= require("./stripe")

const Router = { auth, product, order,stripe };

module.exports = Router;
