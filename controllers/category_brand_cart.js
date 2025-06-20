const category = require("../models/categoris_brand_cart");

exports.categoryProduct = async (req, res) => {
  try {
    return null;
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
