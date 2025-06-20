const express = require("express");
const {
  createUser,
  getUsers,
  createShopperUser,
} = require("../controllers/usercontroller.js");
const router = express.Router();

router.post("/accounts/user", createUser);
router.get("/accounts/profile", getUsers);

router.post("/accounts/shopper-user", createShopperUser);

module.exports = router;
