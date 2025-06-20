const express = require("express");
const app = express();
const { HomePage, aboutPage } = require("../controllers/public_controller");

app.get("/", HomePage);
app.get("/about", aboutPage);

module.exports = app;
