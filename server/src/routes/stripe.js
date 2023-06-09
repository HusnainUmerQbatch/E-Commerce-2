const express = require("express");
const router = express.Router();
import { Types } from "mongoose";

import { GetSubscriptionPlans } from "../controllers/stripe";
import Plan from "../models/plans";

router.get("/get-subscriptions", async (req, res) => {
  try {
    const response = await GetSubscriptionPlans();
    res.json(response);
  } catch (error) {
    console.log(error);
    const { status } = error;
    let s = status ? status : 500;
    return res.status(s).send({
      message: error.message,
    });
  }
});





module.exports = router;
