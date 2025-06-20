const express = require("express");
const {
  createUser,
  getUsers,
  createShopperUser,
  homePage,
} = require("../controllers/usercontroller.js");
const app = express();

app.post("/accounts/user", createUser);
app.get("/accounts/profile", getUsers);

app.post("/accounts/shopper-user", createShopperUser);

module.exports = app;
