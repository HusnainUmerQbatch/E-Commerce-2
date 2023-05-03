const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth.controller");


//signup
router.post("/signUp", AuthController.SignUp);

//login
router.post("/login", AuthController.login);


module.exports = router;
