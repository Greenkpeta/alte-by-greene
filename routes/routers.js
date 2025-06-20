const express = require("express");
const {
  createUser,
  getUsers,
  createShopperUser,
  homePage,
  userCreate,
} = require("../controllers/usercontroller.js");
const { HomePage } = require("../controllers/public_controller");

const app = express();

app.get("/accounts/profile", getUsers);

app.post("/accounts/shopper-user", createShopperUser);

app.post("/signup", createUser);
app.get("/signup", userCreate);

app.get("/", HomePage);

module.exports = app;
